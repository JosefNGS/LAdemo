/**
 * Task File Service
 * Loads and parses task files from docs/Development/ folder
 */

export interface ParsedTask {
  key: string;
  label: string;
  category: string;
  completed: boolean;
  requiresVerification?: boolean;
}

export interface TaskFileData {
  name: string;
  tasks: ParsedTask[];
}

/**
 * Map team member IDs to their task file names
 */
const getTaskFileName = (teamMemberId: string): string => {
  const mapping: { [key: string]: string } = {
    'josef': 'JOSEF_TASKS.md',
    'craig': 'CRAIG_TASKS.md',
    'jonne': 'JONNE_TASKS.md',
    'svein': 'SVEIN_TASKS.md',
    'lee': 'LEE_TASKS.md',
    'cory': 'CORY_TASKS.md',
  };
  return mapping[teamMemberId] || `${teamMemberId.toUpperCase()}_TASKS.md`;
};

/**
 * Generate a task key from a task label
 */
const generateTaskKey = (label: string): string => {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 50);
};

/**
 * Parse markdown task file content
 */
const parseTaskFile = (content: string, teamMemberId: string): TaskFileData => {
  const lines = content.split('\n');
  const tasks: ParsedTask[] = [];
  let currentCategory = 'General';
  let name = 'Team Member';
  
  // Extract name from header
  const nameMatch = content.match(/^#\s+(.+?)\s+-/m);
  if (nameMatch) {
    name = nameMatch[1].trim();
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Check for category headers (#### Category Name or ### Section Name)
    if (line.startsWith('#### ')) {
      currentCategory = line.replace(/^####\s+/, '').trim();
      // Remove emoji and special characters for cleaner category names
      currentCategory = currentCategory.replace(/^[✅🔄📌📝🔮❌✅⚠️\s]+/, '').trim();
      continue;
    }
    
    // Also check for ### sections that might contain tasks
    if (line.startsWith('### ') && !line.includes('Completed Tasks') && !line.includes('In Progress') && !line.includes('High Priority') && !line.includes('Medium Priority') && !line.includes('Future Enhancements')) {
      // Use as category if it's a specific section
      const sectionName = line.replace(/^###\s+/, '').trim();
      if (sectionName && sectionName.length < 50) {
        currentCategory = sectionName.replace(/^[✅🔄📌📝🔮❌✅⚠️\s]+/, '').trim();
      }
      continue;
    }
    
    // Check for task items (- [ ] or - [x]) - more flexible pattern
    // Matches: - [ ] task, - [x] task, - [ ] **bold task**, - [ ] **VERIFY**: task, etc.
    const taskMatch = line.match(/^-\s+\[([ xX])\]\s+(.+)$/);
    if (taskMatch) {
      const isCompleted = taskMatch[1].toLowerCase() === 'x';
      let taskLabel = taskMatch[2].trim();
      
      // Skip lines that are just section markers or empty
      if (!taskLabel || taskLabel.length < 3) continue;
      
      // Remove markdown formatting (bold, italic, code, links)
      let cleanLabel = taskLabel
        .replace(/\*\*(.+?)\*\*/g, '$1')  // Bold
        .replace(/\*(.+?)\*/g, '$1')      // Italic (but not if it's part of bold)
        .replace(/`(.+?)`/g, '$1')        // Code
        .replace(/\[(.+?)\]\(.+?\)/g, '$1') // Links
        .trim();
      
      // Remove "VERIFY:" prefix if present (it's just a label, not part of task name)
      cleanLabel = cleanLabel.replace(/^VERIFY:\s*/i, '').trim();
      
      // Skip if label is empty after cleaning
      if (!cleanLabel || cleanLabel.length < 3) continue;
      
      // Determine if task requires verification (tasks completed by Josef need verification)
      const requiresVerification = teamMemberId !== 'josef';
      
      tasks.push({
        key: generateTaskKey(cleanLabel),
        label: cleanLabel,
        category: currentCategory || 'General',
        completed: isCompleted,
        requiresVerification,
      });
    }
  }

  console.log(`Parsed ${tasks.length} tasks for ${teamMemberId} from markdown file`);
  return { name, tasks };
};

/**
 * Load task file from docs/Development/ folder
 */
export const loadTaskFile = async (teamMemberId: string): Promise<TaskFileData> => {
  const fileName = getTaskFileName(teamMemberId);
  
  try {
    // Try to fetch from the docs folder
    // In development, files are served from the root
    const url = `/docs/Development/${fileName}`;
    console.log(`Loading task file from: ${url}`);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to load task file: ${response.status} ${response.statusText}`);
    }
    
    const content = await response.text();
    console.log(`Loaded ${content.length} characters from ${fileName}`);
    
    if (!content || content.trim().length === 0) {
      console.warn(`Task file ${fileName} is empty`);
      throw new Error(`Task file is empty`);
    }
    
    const parsed = parseTaskFile(content, teamMemberId);
    console.log(`Successfully parsed ${parsed.tasks.length} tasks for ${teamMemberId}`);
    
    return parsed;
  } catch (error) {
    console.error(`Error loading task file for ${teamMemberId}:`, error);
    
    // Return empty task data as fallback
    return {
      name: teamMemberId.charAt(0).toUpperCase() + teamMemberId.slice(1),
      tasks: [],
    };
  }
};

/**
 * Get all available team member IDs
 */
export const getTeamMemberIds = (): string[] => {
  return ['josef', 'craig', 'jonne', 'svein', 'lee', 'cory'];
};
