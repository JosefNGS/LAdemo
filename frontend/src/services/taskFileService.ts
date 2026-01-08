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
    
    // Check for category headers (#### Category Name)
    if (line.startsWith('#### ')) {
      currentCategory = line.replace(/^####\s+/, '').trim();
      continue;
    }
    
    // Check for task items (- [ ] or - [x])
    const taskMatch = line.match(/^-\s+\[([ x])\]\s+(.+)$/);
    if (taskMatch) {
      const isCompleted = taskMatch[1] === 'x';
      const taskLabel = taskMatch[2].trim();
      
      // Remove markdown bold/italic formatting
      const cleanLabel = taskLabel
        .replace(/\*\*(.+?)\*\*/g, '$1')
        .replace(/\*(.+?)\*/g, '$1')
        .replace(/`(.+?)`/g, '$1');
      
      // Determine if task requires verification (tasks completed by Josef need verification)
      const requiresVerification = teamMemberId !== 'josef';
      
      tasks.push({
        key: generateTaskKey(cleanLabel),
        label: cleanLabel,
        category: currentCategory,
        completed: isCompleted,
        requiresVerification,
      });
    }
  }

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
    const response = await fetch(`/docs/Development/${fileName}`);
    
    if (!response.ok) {
      throw new Error(`Failed to load task file: ${response.statusText}`);
    }
    
    const content = await response.text();
    return parseTaskFile(content, teamMemberId);
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
