import React, { useState, useEffect } from 'react';
import TeamTaskChecklist from '../components/TeamTaskChecklist';
import { AppRoute } from '../types';
import { loadTaskFile, TaskFileData } from '../services/taskFileService';
import { syncTasksFromMarkdown } from '../services/taskSyncService';

interface TaskChecklistViewProps {
  teamMember: string;
  setActiveRoute: (route: AppRoute) => void;
}

const TaskChecklistView: React.FC<TaskChecklistViewProps> = ({ teamMember, setActiveRoute }) => {
  const [taskData, setTaskData] = useState<TaskFileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTaskData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Sync tasks from markdown to database first
        await syncTasksFromMarkdown(teamMember);
        
        // Then load task file for display
        const data = await loadTaskFile(teamMember);
        setTaskData(data);
      } catch (err) {
        console.error('Error loading task file:', err);
        setError('Failed to load task file. Please check the file path.');
      } finally {
        setLoading(false);
      }
    };

    if (teamMember) {
      fetchTaskData();
    }
  }, [teamMember]);

  if (loading) {
    return (
      <div className="p-6 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
        <p className="text-gray-500 mt-4">Loading tasks...</p>
      </div>
    );
  }

  if (error || !taskData) {
    return (
      <div className="p-6 text-center text-red-400">
        <p>{error || 'Team member not found'}</p>
        <p className="text-sm text-gray-500 mt-2">
          File: docs/Development/{teamMember.toUpperCase()}_TASKS.md
        </p>
      </div>
    );
  }

  // Convert ParsedTask to the format expected by TeamTaskChecklist
  const tasks = taskData.tasks.map(task => ({
    key: task.key,
    label: task.label,
    category: task.category,
    requiresVerification: task.requiresVerification,
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold font-display">{taskData.name} - Task Checklist</h2>
        <button
          onClick={() => setActiveRoute(AppRoute.ADMIN_VIEW)}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all"
        >
          Back to Admin View
        </button>
      </div>

      <div className="glass-card p-4 rounded-xl border border-white/5 mb-4">
        <p className="text-sm text-gray-400">
          <strong>Source:</strong> docs/Development/{teamMember.toUpperCase()}_TASKS.md
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Tasks are loaded directly from the task file. Checkboxes sync with localStorage/Supabase.
        </p>
      </div>

      <TeamTaskChecklist
        teamMember={teamMember}
        teamMemberName={taskData.name}
        tasks={tasks}
      />
    </div>
  );
};

export default TaskChecklistView;

