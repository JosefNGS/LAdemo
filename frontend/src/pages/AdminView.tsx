import React, { useState, useEffect } from 'react';
import AdminLoginModal from '../components/AdminLoginModal';
import { AppRoute } from '../types';
import { useNotifications } from '../contexts/NotificationContext';
import { teamProfiles } from '../data/teamProfiles';
import Vetting from './Vetting';
import Users from './Users';
import Reports from './Reports';

interface AdminViewProps {
  setActiveRoute: (route: AppRoute) => void;
}

const AdminView: React.FC<AdminViewProps> = ({ setActiveRoute }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'vetting' | 'users' | 'reports' | 'tasks'>('tasks');
  const { addNotification } = useNotifications();

  useEffect(() => {
    // Check if admin is already authenticated
    const adminAuth = localStorage.getItem('adminAuthenticated');
    if (adminAuth === 'true') {
      setIsAuthenticated(true);
    } else {
      setShowLoginModal(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setShowLoginModal(false);
    localStorage.setItem('adminAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
    setShowLoginModal(true);
  };

  if (!isAuthenticated) {
    return (
      <>
        <AdminLoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onSuccess={handleLoginSuccess}
        />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-gray-500">Please login to access Admin View</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-display text-gradient-cyan-purple">Admin View</h1>
          <p className="text-gray-500 mt-1">Administrative controls and task management</p>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl transition-all"
        >
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-white/5">
        <button
          onClick={() => setActiveTab('tasks')}
          className={`px-6 py-3 font-medium transition-all border-b-2 ${
            activeTab === 'tasks'
              ? 'border-purple-500 text-purple-400'
              : 'border-transparent text-gray-500 hover:text-gray-300'
          }`}
        >
          Team Tasks
        </button>
        <button
          onClick={() => setActiveTab('vetting')}
          className={`px-6 py-3 font-medium transition-all border-b-2 ${
            activeTab === 'vetting'
              ? 'border-purple-500 text-purple-400'
              : 'border-transparent text-gray-500 hover:text-gray-300'
          }`}
        >
          Vetting
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`px-6 py-3 font-medium transition-all border-b-2 ${
            activeTab === 'users'
              ? 'border-purple-500 text-purple-400'
              : 'border-transparent text-gray-500 hover:text-gray-300'
          }`}
        >
          Users
        </button>
        <button
          onClick={() => setActiveTab('reports')}
          className={`px-6 py-3 font-medium transition-all border-b-2 ${
            activeTab === 'reports'
              ? 'border-purple-500 text-purple-400'
              : 'border-transparent text-gray-500 hover:text-gray-300'
          }`}
        >
          Reports
        </button>
      </div>

      {/* Content */}
      <div className="mt-6">
        {activeTab === 'tasks' && (
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <h2 className="text-xl font-bold mb-4">Team Task Management</h2>
              <p className="text-gray-500 mb-6">
                All tasks completed by Josef must be verified by each task owner. Check the task status and verify completion.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teamProfiles.map((member) => {
                  const isJosef = member.id === 'josef';
                  return (
                    <div
                      key={member.id}
                      className="glass-card p-4 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer"
                      onClick={() => {
                        const routeMap: { [key: string]: AppRoute } = {
                          'josef': AppRoute.PROFILE_JOSEF,
                          'craig': AppRoute.PROFILE_CRAIG,
                          'jonne': AppRoute.PROFILE_JONNE,
                          'svein': AppRoute.PROFILE_SVEIN,
                          'lee': AppRoute.PROFILE_LEE
                        };
                        setActiveRoute(routeMap[member.id]);
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-lg font-bold">
                          {member.avatar}
                        </div>
                        <div>
                          <h3 className="font-bold">{member.name}</h3>
                          <p className="text-xs text-gray-500">{member.role}</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <span className={isJosef ? "text-green-400" : "text-yellow-400"}>
                            {isJosef ? "✓" : "⚠"}
                          </span>
                          <span>{isJosef ? "Tasks completed by Josef" : "Verification required"}</span>
                        </div>
                        <div className="text-gray-500 text-xs">
                          See: docs/Development/{member.name.toUpperCase().split(' ')[0]}_TASKS.md
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                <p className="text-sm text-yellow-400">
                  <strong>Note:</strong> All tasks marked as completed by Josef must be verified by the respective task owner (Craig, Jonne, Svein, or Lee) before being considered fully complete.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'vetting' && <Vetting />}
        {activeTab === 'users' && <Users />}
        {activeTab === 'reports' && <Reports />}
      </div>
    </div>
  );
};

export default AdminView;

