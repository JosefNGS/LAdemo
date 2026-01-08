import React, { useState, useEffect } from 'react';
import { toggleTask, toggleVerification, loadTasks, Task } from '../services/taskService';
import { useNotifications } from '../contexts/NotificationContext';

interface TeamTaskChecklistProps {
  teamMember: string;
  teamMemberName: string;
  tasks: Array<{
    key: string;
    label: string;
    category: string;
    requiresVerification?: boolean;
  }>;
}

const TeamTaskChecklist: React.FC<TeamTaskChecklistProps> = ({
  teamMember,
  teamMemberName,
  tasks,
}) => {
  const [taskStates, setTaskStates] = useState<{ [key: string]: Task }>({});
  const [loading, setLoading] = useState(true);
  const { addNotification } = useNotifications();

  useEffect(() => {
    loadTaskStates();
  }, [teamMember]);

  const loadTaskStates = async () => {
    setLoading(true);
    try {
      const loadedTasks = await loadTasks(teamMember);
      const states: { [key: string]: Task } = {};
      loadedTasks.forEach(task => {
        states[task.taskKey] = task;
      });
      setTaskStates(states);
    } catch (error) {
      console.error('Error loading task states:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTaskToggle = async (taskKey: string, currentCompleted: boolean) => {
    const newCompleted = !currentCompleted;
    const success = await toggleTask(teamMember, taskKey, newCompleted, 'current-user');
    
    if (success) {
      await loadTaskStates();
      addNotification({
        type: 'task-update',
        title: `Task ${newCompleted ? 'Completed' : 'Uncompleted'}`,
        message: `Task "${tasks.find(t => t.key === taskKey)?.label}" ${newCompleted ? 'marked as completed' : 'marked as incomplete'}`,
        priority: 'medium',
      });
    }
  };

  const handleVerificationToggle = async (taskKey: string, currentVerified: boolean) => {
    const newVerified = !currentVerified;
    const success = await toggleVerification(teamMember, taskKey, newVerified, 'current-user');
    
    if (success) {
      await loadTaskStates();
      addNotification({
        type: 'task-verification',
        title: `Task ${newVerified ? 'Verified' : 'Unverified'}`,
        message: `Task "${tasks.find(t => t.key === taskKey)?.label}" ${newVerified ? 'verified' : 'verification removed'}`,
        priority: 'high',
      });
    }
  };

  const getTaskState = (taskKey: string) => {
    return taskStates[taskKey] || {
      completed: false,
      verified: false,
    };
  };

  const groupedTasks = tasks.reduce((acc, task) => {
    const category = task.category || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(task);
    return acc;
  }, {} as { [key: string]: typeof tasks });

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
        <p className="mt-4">Loading tasks...</p>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="p-6 text-center text-yellow-400">
        <p className="text-lg font-bold mb-2">No tasks found</p>
        <p className="text-sm text-gray-400">
          No tasks were loaded for {teamMemberName}.
        </p>
      </div>
    );
  }

  const categoryEntries = Object.entries(groupedTasks);
  
  if (categoryEntries.length === 0) {
    return (
      <div className="p-6 text-center text-yellow-400">
        <p className="text-lg font-bold mb-2">No tasks to display</p>
        <p className="text-sm text-gray-400">
          Tasks were loaded but could not be grouped by category.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">{teamMemberName} - Task Checklist</h3>
        <button
          onClick={loadTaskStates}
          className="px-3 py-1 text-sm bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
        >
          Refresh
        </button>
      </div>

      {categoryEntries.map(([category, categoryTasks]) => (
        <div key={category} className="glass-card p-4 rounded-xl border border-white/5">
          <h4 className="font-bold mb-3 text-purple-400">{category}</h4>
          <div className="space-y-2">
            {categoryTasks.map((task) => {
              const state = getTaskState(task.key);
              return (
                <div
                  key={task.key}
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-2 flex-1">
                    <input
                      type="checkbox"
                      checked={state.completed}
                      onChange={() => handleTaskToggle(task.key, state.completed)}
                      className="w-5 h-5 rounded border-white/20 bg-white/5 text-purple-600 focus:ring-purple-500 focus:ring-2"
                    />
                    <label className="flex-1 text-sm cursor-pointer">
                      {task.label}
                    </label>
                  </div>
                  {task.requiresVerification && state.completed && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Verify:</span>
                      <input
                        type="checkbox"
                        checked={state.verified}
                        onChange={() => handleVerificationToggle(task.key, state.verified)}
                        className="w-4 h-4 rounded border-white/20 bg-white/5 text-cyan-600 focus:ring-cyan-500 focus:ring-2"
                      />
                      {state.verified && (
                        <span className="text-xs text-green-400">✓ Verified</span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamTaskChecklist;

