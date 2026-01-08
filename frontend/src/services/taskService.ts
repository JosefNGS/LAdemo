/**
 * Task Service
 * Handles task checkbox state with Supabase database integration and localStorage fallback
 */

import { isSupabaseInitialized, getSupabaseClient } from './supabaseService';

export interface Task {
  id: string;
  teamMember: string; // 'josef' | 'craig' | 'jonne' | 'svein' | 'lee'
  taskKey: string; // Unique identifier for the task (e.g., 'netlify-deployment-setup')
  completed: boolean;
  verified: boolean;
  verifiedBy?: string;
  verifiedAt?: string;
  completedBy?: string;
  completedAt?: string;
  notes?: string;
}

const STORAGE_KEY_PREFIX = 'bitnexus_tasks_';

/**
 * Get storage key for a team member
 */
const getStorageKey = (teamMember: string): string => {
  return `${STORAGE_KEY_PREFIX}${teamMember}`;
};

/**
 * Load tasks from Supabase or localStorage
 */
export const loadTasks = async (teamMember: string): Promise<Task[]> => {
  try {
    // Try Supabase first
    if (isSupabaseInitialized()) {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase
        .from('team_tasks')
        .select('*')
        .eq('team_member', teamMember)
        .order('task_key', { ascending: true });

      if (!error && data) {
        // Transform Supabase data to Task format
        return data.map((item: any) => ({
          id: item.id,
          teamMember: item.team_member,
          taskKey: item.task_key,
          completed: item.completed || false,
          verified: item.verified || false,
          verifiedBy: item.verified_by,
          verifiedAt: item.verified_at,
          completedBy: item.completed_by,
          completedAt: item.completed_at,
          notes: item.notes,
        }));
      }
    }
  } catch (error) {
    console.warn('Supabase load failed, falling back to localStorage:', error);
  }

  // Fallback to localStorage
  try {
    const stored = localStorage.getItem(getStorageKey(teamMember));
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading tasks from localStorage:', error);
  }

  return [];
};

/**
 * Save task to Supabase or localStorage
 */
export const saveTask = async (task: Task): Promise<boolean> => {
  try {
    // Try Supabase first
    if (isSupabaseInitialized()) {
      const supabase = getSupabaseClient();
      
      // Check if task exists
      const { data: existing } = await supabase
        .from('team_tasks')
        .select('id')
        .eq('team_member', task.teamMember)
        .eq('task_key', task.taskKey)
        .single();

      if (existing) {
        // Update existing task
        const { error } = await supabase
          .from('team_tasks')
          .update({
            completed: task.completed,
            verified: task.verified,
            verified_by: task.verifiedBy,
            verified_at: task.verifiedAt,
            completed_by: task.completedBy,
            completed_at: task.completedAt,
            notes: task.notes,
            updated_at: new Date().toISOString(),
          })
          .eq('id', existing.id);

        if (!error) {
          return true;
        }
      } else {
        // Insert new task
        const { error } = await supabase
          .from('team_tasks')
          .insert({
            team_member: task.teamMember,
            task_key: task.taskKey,
            completed: task.completed,
            verified: task.verified,
            verified_by: task.verifiedBy,
            verified_at: task.verifiedAt,
            completed_by: task.completedBy,
            completed_at: task.completedAt,
            notes: task.notes,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          });

        if (!error) {
          return true;
        }
      }
    }
  } catch (error) {
    console.warn('Supabase save failed, falling back to localStorage:', error);
  }

  // Fallback to localStorage
  try {
    const tasks = await loadTasks(task.teamMember);
    const existingIndex = tasks.findIndex(t => t.taskKey === task.taskKey);
    
    if (existingIndex >= 0) {
      tasks[existingIndex] = task;
    } else {
      tasks.push(task);
    }

    localStorage.setItem(getStorageKey(task.teamMember), JSON.stringify(tasks));
    return true;
  } catch (error) {
    console.error('Error saving task to localStorage:', error);
    return false;
  }
};

/**
 * Toggle task completion
 */
export const toggleTask = async (
  teamMember: string,
  taskKey: string,
  completed: boolean,
  completedBy?: string
): Promise<boolean> => {
  const tasks = await loadTasks(teamMember);
  let task = tasks.find(t => t.taskKey === taskKey);

  if (!task) {
    task = {
      id: `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      teamMember,
      taskKey,
      completed: false,
      verified: false,
    };
  }

  task.completed = completed;
  if (completed) {
    task.completedBy = completedBy || 'current-user';
    task.completedAt = new Date().toISOString();
  } else {
    task.completedBy = undefined;
    task.completedAt = undefined;
  }

  return await saveTask(task);
};

/**
 * Toggle task verification
 */
export const toggleVerification = async (
  teamMember: string,
  taskKey: string,
  verified: boolean,
  verifiedBy?: string
): Promise<boolean> => {
  const tasks = await loadTasks(teamMember);
  let task = tasks.find(t => t.taskKey === taskKey);

  if (!task) {
    task = {
      id: `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      teamMember,
      taskKey,
      completed: false,
      verified: false,
    };
  }

  task.verified = verified;
  if (verified) {
    task.verifiedBy = verifiedBy || 'current-user';
    task.verifiedAt = new Date().toISOString();
  } else {
    task.verifiedBy = undefined;
    task.verifiedAt = undefined;
  }

  return await saveTask(task);
};

/**
 * Get task status
 */
export const getTaskStatus = async (
  teamMember: string,
  taskKey: string
): Promise<{ completed: boolean; verified: boolean } | null> => {
  const tasks = await loadTasks(teamMember);
  const task = tasks.find(t => t.taskKey === taskKey);
  
  if (!task) {
    return null;
  }

  return {
    completed: task.completed,
    verified: task.verified,
  };
};

