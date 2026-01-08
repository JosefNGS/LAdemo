/**
 * Task Sync Service
 * Automatically syncs task markdown files with database
 * When markdown files change, database is automatically updated
 */

import { loadTaskFile, ParsedTask } from './taskFileService';
import { loadTasks, saveTask, Task } from './taskService';
import { isSupabaseInitialized, getSupabaseClient } from './supabaseService';

/**
 * Sync tasks from markdown file to database
 * This ensures database always reflects the current state of markdown files
 */
export const syncTasksFromMarkdown = async (teamMemberId: string): Promise<{ synced: number; errors: number }> => {
  let synced = 0;
  let errors = 0;

  try {
    // Load tasks from markdown file
    const fileData = await loadTaskFile(teamMemberId);
    
    // Load existing tasks from database
    const existingTasks = await loadTasks(teamMemberId);
    const existingTasksMap = new Map<string, Task>();
    existingTasks.forEach(task => {
      existingTasksMap.set(task.taskKey, task);
    });

    // Sync each task from markdown to database
    for (const parsedTask of fileData.tasks) {
      try {
        const existingTask = existingTasksMap.get(parsedTask.key);
        
        // Create or update task in database
        const task: Task = {
          id: existingTask?.id || `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          teamMember: teamMemberId,
          taskKey: parsedTask.key,
          completed: parsedTask.completed,
          // Preserve verification status if task already exists
          verified: existingTask?.verified || false,
          verifiedBy: existingTask?.verifiedBy,
          verifiedAt: existingTask?.verifiedAt,
          completedBy: existingTask?.completedBy,
          completedAt: existingTask?.completedAt,
          notes: existingTask?.notes,
        };

        // Only update if task doesn't exist or if completion status changed
        if (!existingTask || existingTask.completed !== parsedTask.completed) {
          const success = await saveTask(task);
          if (success) {
            synced++;
          } else {
            errors++;
          }
        }
      } catch (error) {
        console.error(`Error syncing task ${parsedTask.key} for ${teamMemberId}:`, error);
        errors++;
      }
    }

    // Remove tasks from database that no longer exist in markdown file
    const markdownTaskKeys = new Set(fileData.tasks.map(t => t.key));
    for (const existingTask of existingTasks) {
      if (!markdownTaskKeys.has(existingTask.taskKey)) {
        // Task removed from markdown - remove from database
        try {
          if (isSupabaseInitialized()) {
            const supabase = getSupabaseClient();
            await supabase
              .from('team_tasks')
              .delete()
              .eq('team_member', teamMemberId)
              .eq('task_key', existingTask.taskKey);
          }
        } catch (error) {
          console.error(`Error removing task ${existingTask.taskKey}:`, error);
          errors++;
        }
      }
    }

    return { synced, errors };
  } catch (error) {
    console.error(`Error syncing tasks for ${teamMemberId}:`, error);
    return { synced, errors: errors + 1 };
  }
};

/**
 * Sync all team members' tasks from markdown files
 */
export const syncAllTasksFromMarkdown = async (): Promise<{ [teamMemberId: string]: { synced: number; errors: number } }> => {
  const teamMemberIds = ['josef', 'craig', 'jonne', 'svein', 'lee', 'cory'];
  const results: { [teamMemberId: string]: { synced: number; errors: number } } = {};

  for (const teamMemberId of teamMemberIds) {
    results[teamMemberId] = await syncTasksFromMarkdown(teamMemberId);
  }

  return results;
};

/**
 * Check if markdown file has changed (by comparing file content hash)
 * This can be used to trigger sync only when files actually change
 */
export const checkMarkdownFileChanged = async (
  teamMemberId: string,
  lastHash?: string
): Promise<{ changed: boolean; hash: string }> => {
  try {
    const fileData = await loadTaskFile(teamMemberId);
    // Create a simple hash from task data
    const hash = JSON.stringify(fileData.tasks.map(t => ({ key: t.key, completed: t.completed })));
    const changed = lastHash !== hash;
    
    return { changed, hash };
  } catch (error) {
    console.error(`Error checking file changes for ${teamMemberId}:`, error);
    return { changed: false, hash: '' };
  }
};

/**
 * Auto-sync service that periodically checks for markdown file changes
 * and syncs to database automatically
 */
export class AutoSyncService {
  private syncInterval: NodeJS.Timeout | null = null;
  private fileHashes: { [teamMemberId: string]: string } = {};
  private isRunning = false;

  /**
   * Start auto-sync service
   * Checks for changes every 30 seconds
   */
  start(intervalMs: number = 30000): void {
    if (this.isRunning) {
      console.warn('AutoSyncService is already running');
      return;
    }

    this.isRunning = true;
    console.log('AutoSyncService started - checking for markdown file changes every', intervalMs, 'ms');

    // Initial sync
    this.syncAll();

    // Periodic sync
    this.syncInterval = setInterval(() => {
      this.syncAll();
    }, intervalMs);
  }

  /**
   * Stop auto-sync service
   */
  stop(): void {
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
      this.syncInterval = null;
    }
    this.isRunning = false;
    console.log('AutoSyncService stopped');
  }

  /**
   * Sync all tasks if files have changed
   */
  private async syncAll(): Promise<void> {
    const teamMemberIds = ['josef', 'craig', 'jonne', 'svein', 'lee', 'cory'];
    
    for (const teamMemberId of teamMemberIds) {
      try {
        const { changed, hash } = await checkMarkdownFileChanged(
          teamMemberId,
          this.fileHashes[teamMemberId]
        );

        if (changed) {
          console.log(`Markdown file changed for ${teamMemberId}, syncing to database...`);
          const result = await syncTasksFromMarkdown(teamMemberId);
          console.log(`Synced ${result.synced} tasks for ${teamMemberId}, ${result.errors} errors`);
          this.fileHashes[teamMemberId] = hash;
        }
      } catch (error) {
        console.error(`Error in auto-sync for ${teamMemberId}:`, error);
      }
    }
  }

  /**
   * Force immediate sync for all team members
   */
  async forceSyncAll(): Promise<void> {
    console.log('Force syncing all tasks from markdown files...');
    const results = await syncAllTasksFromMarkdown();
    
    let totalSynced = 0;
    let totalErrors = 0;
    
    for (const [teamMemberId, result] of Object.entries(results)) {
      totalSynced += result.synced;
      totalErrors += result.errors;
      console.log(`${teamMemberId}: ${result.synced} synced, ${result.errors} errors`);
    }
    
    console.log(`Force sync complete: ${totalSynced} total synced, ${totalErrors} total errors`);
  }
}

// Export singleton instance
export const autoSyncService = new AutoSyncService();
