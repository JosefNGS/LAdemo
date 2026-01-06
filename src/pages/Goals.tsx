import React, { useState } from 'react';
import { ICONS } from '../constants';

interface Goal {
  id: string;
  type: 'income' | 'network' | 'products';
  title: string;
  target: number;
  current: number;
  deadline: string;
  unit: string;
}

const Goals: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([
    { id: '1', type: 'income', title: 'Monthly Income Goal', target: 5000, current: 1184, deadline: '2025-06-01', unit: '$' },
    { id: '2', type: 'network', title: 'Network Size Goal', target: 200, current: 142, deadline: '2025-03-01', unit: 'members' },
    { id: '3', type: 'products', title: 'Products to Promote', target: 10, current: 6, deadline: '2025-02-01', unit: 'products' },
  ]);

  const [showAddGoal, setShowAddGoal] = useState(false);
  const [newGoal, setNewGoal] = useState({ type: 'income' as Goal['type'], title: '', target: 0, deadline: '' });

  const calculateProgress = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const calculateDaysRemaining = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const getGoalIcon = (type: Goal['type']) => {
    switch (type) {
      case 'income': return '💰';
      case 'network': return '👥';
      case 'products': return '📦';
      default: return '🎯';
    }
  };

  const getGoalColor = (type: Goal['type']) => {
    switch (type) {
      case 'income': return 'from-green-500 to-cyan-500';
      case 'network': return 'from-purple-500 to-pink-500';
      case 'products': return 'from-cyan-500 to-blue-500';
      default: return 'from-purple-500 to-cyan-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-display">Goal Setting & Tracking</h2>
          <p className="text-gray-500 text-sm">Set and track your financial freedom goals</p>
        </div>
        <button
          onClick={() => setShowAddGoal(!showAddGoal)}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
        >
          + New Goal
        </button>
      </div>

      {showAddGoal && (
        <div className="glass-card p-6 rounded-3xl border border-white/5">
          <h3 className="text-xl font-bold mb-4">Create New Goal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold text-gray-400 mb-2 block">Goal Type</label>
              <select
                value={newGoal.type}
                onChange={(e) => setNewGoal({ ...newGoal, type: e.target.value as Goal['type'] })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50"
              >
                <option value="income">Monthly Income</option>
                <option value="network">Network Size</option>
                <option value="products">Products to Promote</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-bold text-gray-400 mb-2 block">Goal Title</label>
              <input
                type="text"
                value={newGoal.title}
                onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                placeholder="e.g., Reach $10K/month"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-400 mb-2 block">Target Value</label>
              <input
                type="number"
                value={newGoal.target}
                onChange={(e) => setNewGoal({ ...newGoal, target: Number(e.target.value) })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-400 mb-2 block">Deadline</label>
              <input
                type="date"
                value={newGoal.deadline}
                onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50"
              />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => {
                if (newGoal.title && newGoal.target > 0 && newGoal.deadline) {
                  setGoals([...goals, {
                    id: Date.now().toString(),
                    ...newGoal,
                    current: 0,
                    unit: newGoal.type === 'income' ? '$' : newGoal.type === 'network' ? 'members' : 'products'
                  }]);
                  setNewGoal({ type: 'income', title: '', target: 0, deadline: '' });
                  setShowAddGoal(false);
                }
              }}
              className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
            >
              Create Goal
            </button>
            <button
              onClick={() => setShowAddGoal(false)}
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map((goal) => {
          const progress = calculateProgress(goal.current, goal.target);
          const daysRemaining = calculateDaysRemaining(goal.deadline);
          const isOnTrack = daysRemaining > 0 && (goal.current / goal.target) >= (1 - daysRemaining / 365);

          return (
            <div key={goal.id} className="glass-card p-6 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getGoalColor(goal.type)} bg-opacity-20 flex items-center justify-center text-2xl`}>
                    {getGoalIcon(goal.type)}
                  </div>
                  <div>
                    <h3 className="font-bold">{goal.title}</h3>
                    <p className="text-xs text-gray-500">{daysRemaining} days remaining</p>
                  </div>
                </div>
                {isOnTrack && (
                  <span className="px-2 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded text-xs font-bold">
                    On Track
                  </span>
                )}
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-400">
                    {goal.current.toLocaleString()} {goal.unit} / {goal.target.toLocaleString()} {goal.unit}
                  </span>
                  <span className="font-bold text-cyan-400">{progress.toFixed(1)}%</span>
                </div>
                <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden border border-white/5">
                  <div
                    className={`h-full bg-gradient-to-r ${getGoalColor(goal.type)} transition-all duration-500`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 bg-white/5 rounded-lg">
                  <p className="text-gray-500">Remaining</p>
                  <p className="font-bold text-purple-400">
                    {(goal.target - goal.current).toLocaleString()} {goal.unit}
                  </p>
                </div>
                <div className="p-2 bg-white/5 rounded-lg">
                  <p className="text-gray-500">Daily Target</p>
                  <p className="font-bold text-cyan-400">
                    {((goal.target - goal.current) / Math.max(daysRemaining, 1)).toFixed(0)} {goal.unit}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 flex gap-2">
                <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold transition-all">
                  Edit
                </button>
                <button className="flex-1 py-2 bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 rounded-lg text-xs font-bold transition-all">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {goals.length === 0 && (
        <div className="glass-card p-12 rounded-3xl border border-white/5 text-center">
          <div className="w-20 h-20 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">🎯</span>
          </div>
          <h3 className="text-xl font-bold mb-2">No Goals Set Yet</h3>
          <p className="text-gray-500 text-sm mb-4">Set your first goal to start tracking your progress toward financial freedom</p>
          <button
            onClick={() => setShowAddGoal(true)}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
          >
            Create Your First Goal
          </button>
        </div>
      )}
    </div>
  );
};

export default Goals;

