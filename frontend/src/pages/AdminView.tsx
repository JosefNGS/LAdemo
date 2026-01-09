import React, { useState, useEffect } from 'react';
import AdminLoginModal from '../components/AdminLoginModal';
import { AppRoute } from '../types';
import { useNotifications } from '../contexts/NotificationContext';
import { teamProfiles } from '../data/teamProfiles';
import TaskChecklistView from './TaskChecklistView';
import Vetting from './Vetting';
import Users from './Users';
import Reports from './Reports';
import { autoSyncService } from '../services/taskSyncService';

interface AdminViewProps {
  setActiveRoute: (route: AppRoute) => void;
}

const AdminView: React.FC<AdminViewProps> = ({ setActiveRoute }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'vetting' | 'users' | 'reports' | 'tasks' | 'guide' | 'networks'>('tasks');
  const [selectedTeamMember, setSelectedTeamMember] = useState<string | null>(null);
  const [selectedAlliance, setSelectedAlliance] = useState<any>(null);
  const [showAllianceDetails, setShowAllianceDetails] = useState(false);
  const { addNotification } = useNotifications();

  useEffect(() => {
    // Check if admin is already authenticated
    const adminAuth = localStorage.getItem('adminAuthenticated');
    if (adminAuth === 'true') {
      setIsAuthenticated(true);
    } else {
      setShowLoginModal(true);
    }

    // Start auto-sync service when AdminView mounts
    if (adminAuth === 'true') {
      autoSyncService.start(30000); // Check every 30 seconds
    }

    // Cleanup: stop auto-sync when component unmounts
    return () => {
      autoSyncService.stop();
    };
  }, []);

  useEffect(() => {
    // Sync tasks when switching to tasks tab
    if (isAuthenticated && activeTab === 'tasks') {
      autoSyncService.forceSyncAll().catch(err => {
        console.error('Error during force sync:', err);
      });
    }
  }, [isAuthenticated, activeTab]);

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
            activeTab === 'tasks' || activeTab === 'checklist'
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
        <button
          onClick={() => setActiveTab('guide')}
          className={`px-6 py-3 font-medium transition-all border-b-2 ${
            activeTab === 'guide'
              ? 'border-purple-500 text-purple-400'
              : 'border-transparent text-gray-500 hover:text-gray-300'
          }`}
        >
          Developer Guide
        </button>
        <button
          onClick={() => setActiveTab('networks')}
          className={`px-6 py-3 font-medium transition-all border-b-2 ${
            activeTab === 'networks'
              ? 'border-purple-500 text-purple-400'
              : 'border-transparent text-gray-500 hover:text-gray-300'
          }`}
        >
          Networks & Alliances
        </button>
      </div>

      {/* Content */}
      <div className="mt-6">
        {activeTab === 'tasks' && (
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <h2 className="text-2xl font-bold mb-2">Team Task Management</h2>
              <p className="text-gray-400 mb-6">
                All tasks completed by Josef must be verified by each task owner. Check the task status and verify completion.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {teamProfiles.map((member) => {
                  const isJosef = member.id === 'josef';
                  // Get task file name based on member ID
                  const getTaskFileName = (id: string) => {
                    const mapping: { [key: string]: string } = {
                      'josef': 'JOSEF_TASKS.md',
                      'craig': 'CRAIG_TASKS.md',
                      'jonne': 'JONNE_TASKS.md',
                      'svein': 'SVEIN_TASKS.md',
                      'lee': 'LEE_TASKS.md',
                      'cory': 'CORY_TASKS.md'
                    };
                    return mapping[id] || `${id.toUpperCase()}_TASKS.md`;
                  };

                  return (
                    <div
                      key={member.id}
                      className="glass-card p-5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer flex flex-col h-full"
                      onClick={() => {
                        setSelectedTeamMember(member.id);
                        setActiveTab('checklist' as any);
                      }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-lg font-bold text-white shadow-lg flex-shrink-0">
                          {member.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg truncate">{member.name}</h3>
                          <p className="text-xs text-gray-400 mt-0.5 line-clamp-2">{member.role}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-4 flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-xl flex-shrink-0 ${isJosef ? "text-green-400" : "text-yellow-400"}`}>
                            {isJosef ? "✓" : "⚠"}
                          </span>
                          <span className={`text-sm font-medium ${isJosef ? "text-green-400" : "text-yellow-400"}`}>
                            {isJosef ? "Tasks completed by Josef" : "Verification required"}
                          </span>
                        </div>
                        <div className="text-gray-500 text-xs font-mono bg-white/5 px-2 py-1 rounded border border-white/5 break-all">
                          See: docs/Development/{getTaskFileName(member.id)}
                        </div>
                      </div>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTeamMember(member.id);
                          setActiveTab('checklist' as any);
                        }}
                        className="w-full px-4 py-2.5 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 hover:from-purple-600/30 hover:to-cyan-500/30 border border-purple-500/30 text-purple-300 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/20 mt-auto"
                      >
                        View Task Checklist
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Task Checklist View */}
              {activeTab === 'checklist' && selectedTeamMember && (
                <div className="mt-6">
                  <button
                    onClick={() => {
                      setActiveTab('tasks');
                      setSelectedTeamMember(null);
                    }}
                    className="mb-4 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 rounded-lg text-sm font-medium transition-all"
                  >
                    ← Back to Team Tasks
                  </button>
                  <TaskChecklistView
                    teamMember={selectedTeamMember}
                    setActiveRoute={setActiveRoute}
                  />
                </div>
              )}

              {activeTab === 'tasks' && (
                <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                  <p className="text-sm text-yellow-400">
                    <strong>Note:</strong> All tasks marked as completed by Josef must be verified by the respective task owner (Craig, Jonne, Svein, or Lee) before being considered fully complete.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'vetting' && <Vetting />}
        {activeTab === 'users' && <Users />}
        {activeTab === 'reports' && <Reports />}
        
        {activeTab === 'networks' && (
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <h2 className="text-2xl font-bold mb-2">Networks & Alliances Overview</h2>
              <p className="text-gray-400 mb-6">
                Complete statistics for all alliances including clicks, conversions, earnings, and member details.
              </p>
              
              {/* Mock Alliance Data */}
              {[
                {
                  id: '1',
                  name: 'Elite Affiliates Network',
                  members: 142,
                  tier: 'Platinum',
                  totalEarnings: 125000,
                  monthlyEarnings: 15200,
                  created: '2024-01-15',
                  status: 'Active',
                  totalClicks: 52810,
                  conversions: 1267,
                  conversionRate: 2.4,
                  activeMembers: 89,
                  memberDetails: [
                    { name: 'Agent Nexus-42', tier: 'Gold', role: 'Co-Leader', joined: '2024-01-20', earnings: 1240, clicks: 3420, conversions: 82, network: 23 },
                    { name: 'Agent Nexus-88', tier: 'Silver', role: 'Member', joined: '2024-02-15', earnings: 890, clicks: 2150, conversions: 52, network: 15 },
                    { name: 'Agent Nexus-15', tier: 'Gold', role: 'Member', joined: '2024-03-01', earnings: 650, clicks: 1890, conversions: 45, network: 18 },
                  ]
                },
                {
                  id: '2',
                  name: 'Crypto Masters Alliance',
                  members: 89,
                  tier: 'Gold',
                  totalEarnings: 78000,
                  monthlyEarnings: 9200,
                  created: '2024-03-20',
                  status: 'Active',
                  totalClicks: 34250,
                  conversions: 821,
                  conversionRate: 2.4,
                  activeMembers: 67,
                  memberDetails: [
                    { name: 'Agent Nexus-42', tier: 'Gold', role: 'Co-Leader', joined: '2024-01-20', earnings: 1240, clicks: 3420, conversions: 82, network: 23 },
                    { name: 'Agent Nexus-88', tier: 'Silver', role: 'Member', joined: '2024-02-15', earnings: 890, clicks: 2150, conversions: 52, network: 15 },
                    { name: 'Agent Nexus-15', tier: 'Gold', role: 'Member', joined: '2024-03-01', earnings: 650, clicks: 1890, conversions: 45, network: 18 },
                  ]
                },
              ].map((alliance) => (
                <div
                  key={alliance.id}
                  className="glass-card p-6 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all mb-4"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{alliance.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          alliance.tier === 'Platinum' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                          alliance.tier === 'Gold' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                          'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                        }`}>
                          {alliance.tier} Tier
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          alliance.status === 'Active'
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                            : 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                        }`}>
                          {alliance.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">Created: {alliance.created}</p>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedAlliance(alliance);
                        setShowAllianceDetails(true);
                      }}
                      className="px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-purple-300 rounded-lg text-sm font-semibold transition-all"
                    >
                      View Full Stats
                    </button>
                  </div>

                  {/* Quick Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="p-4 bg-white/5 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Members</p>
                      <p className="text-2xl font-bold text-cyan-400">{alliance.members}</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Total Earnings</p>
                      <p className="text-xl font-bold text-green-400">${alliance.totalEarnings.toLocaleString()}</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Monthly</p>
                      <p className="text-xl font-bold text-purple-400">${alliance.monthlyEarnings.toLocaleString()}</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Active Members</p>
                      <p className="text-2xl font-bold text-yellow-400">{alliance.activeMembers}</p>
                    </div>
                  </div>

                  {/* Network Performance Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white/5 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Total Clicks</p>
                      <p className="text-xl font-bold text-cyan-400">{alliance.totalClicks.toLocaleString()}</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Conversions</p>
                      <p className="text-xl font-bold text-green-400">{alliance.conversions.toLocaleString()}</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Conversion Rate</p>
                      <p className="text-xl font-bold text-purple-400">{alliance.conversionRate}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Alliance Details Modal */}
        {showAllianceDetails && selectedAlliance && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-5xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{selectedAlliance.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">Complete network statistics and member details</p>
                </div>
                <button
                  onClick={() => {
                    setShowAllianceDetails(false);
                    setSelectedAlliance(null);
                  }}
                  className="p-2 hover:bg-white/10 rounded-xl transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>

              {/* Alliance Overview Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Members</p>
                  <p className="text-2xl font-bold text-cyan-400">{selectedAlliance.members}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Total Earnings</p>
                  <p className="text-xl font-bold text-green-400">${selectedAlliance.totalEarnings.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Monthly</p>
                  <p className="text-xl font-bold text-purple-400">${selectedAlliance.monthlyEarnings.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Created</p>
                  <p className="text-sm font-bold text-yellow-400">{selectedAlliance.created}</p>
                </div>
              </div>

              {/* Network Performance */}
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-4">Network Performance</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">Total Clicks</p>
                    <p className="text-2xl font-bold text-cyan-400">{selectedAlliance.totalClicks.toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">Conversions</p>
                    <p className="text-2xl font-bold text-green-400">{selectedAlliance.conversions.toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">Conversion Rate</p>
                    <p className="text-2xl font-bold text-purple-400">{selectedAlliance.conversionRate}%</p>
                  </div>
                </div>
              </div>

              {/* Alliance Members */}
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-4">Alliance Members</h4>
                <div className="space-y-3">
                  {selectedAlliance.memberDetails.map((member: any, idx: number) => (
                    <div
                      key={idx}
                      className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center font-bold">
                            {member.name.split('-')[1] || member.name.charAt(member.name.length - 1)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-bold">{member.name}</h4>
                              <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                                member.tier === 'Platinum' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                                member.tier === 'Gold' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                                'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                              }`}>
                                {member.tier}
                              </span>
                              <span className="px-2 py-0.5 rounded text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                {member.role}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500">Joined: {member.joined} • Network: {member.network} members</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="grid grid-cols-3 gap-4 text-right">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Earnings</p>
                              <p className="font-bold text-green-400">${member.earnings.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Clicks</p>
                              <p className="font-bold text-cyan-400">{member.clicks.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Conversions</p>
                              <p className="font-bold text-purple-400">{member.conversions}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <button
                  onClick={() => {
                    setShowAllianceDetails(false);
                    setSelectedAlliance(null);
                  }}
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'guide' && (
          <div className="glass-card p-8 rounded-2xl border border-white/5">
            <div className="prose prose-invert max-w-none">
              <h1 className="text-3xl font-bold font-display text-gradient-cyan-purple mb-6">
                🚀 START HERE - Developer Guide
              </h1>
              
              <p className="text-lg text-gray-300 mb-8">
                <strong>Welcome to the BitNexus Landing Page project!</strong>
              </p>
              <p className="text-gray-400 mb-8">
                This guide will help you get started, understand the critical rules, and learn how to work with this codebase effectively.
              </p>

              <div className="border-t border-white/10 pt-8 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">⚠️ CRITICAL RULES - READ FIRST</h2>
                
                <h3 className="text-xl font-bold mb-4 text-red-400">🔴 MANDATORY REQUIREMENTS (NO EXCEPTIONS)</h3>
                <p className="text-gray-300 mb-4">Before making ANY changes, you MUST understand these critical rules:</p>

                <div className="space-y-6 mb-8">
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <h4 className="font-bold text-lg mb-2">1. CHANGELOG.md MUST ALWAYS BE UPDATED</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                      <li><strong>EVERY change</strong> must be logged in <code className="bg-white/10 px-2 py-1 rounded">docs/Project Management/CHANGELOG.md</code></li>
                      <li><strong>NO EXCEPTIONS</strong> - All changes, regardless of size, must be documented</li>
                      <li><strong>BEFORE committing</strong> - Update changelog first, then commit</li>
                      <li><strong>DEVELOPER TRACKING MANDATORY</strong> - Every entry must include <code className="bg-white/10 px-2 py-1 rounded">[Developer: Name]</code> or <code className="bg-white/10 px-2 py-1 rounded">[Cursor]</code> tag</li>
                      <li><strong>Format</strong>: Follow <a href="https://keepachangelog.com/en/1.0.0/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Keep a Changelog</a> format</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                    <h4 className="font-bold text-lg mb-2">2. VERSION CONTROL - MAIN BRANCH PROTECTION</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                      <li><strong>Main branch is PROTECTED</strong> - Only CTO (Craig Martin) can merge</li>
                      <li><strong>NO direct pushes to main</strong> - Always use Pull Request workflow</li>
                      <li><strong>Create feature branch</strong> for all changes: <code className="bg-white/10 px-2 py-1 rounded">git checkout -b feature/your-feature-name</code></li>
                      <li><strong>All code must be tested</strong> before merging to main</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                    <h4 className="font-bold text-lg mb-2">3. PUSH CHANGE DOCUMENTATION</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                      <li><strong>EVERY push MUST have</strong> change documentation</li>
                      <li><strong>Location</strong>: <code className="bg-white/10 px-2 py-1 rounded">docs/Services/github/push-docs/</code></li>
                      <li><strong>Template</strong>: <code className="bg-white/10 px-2 py-1 rounded">docs/Services/github/PUSH_CHANGE_DOCUMENTATION_TEMPLATE.md</code></li>
                      <li><strong>Must include</strong>: Developer name, email, role, and all changes made</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                    <h4 className="font-bold text-lg mb-2">4. PROJECT STRUCTURE</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                      <li><strong>Follow structure</strong> defined in <code className="bg-white/10 px-2 py-1 rounded">docs/Core Documentation/STRUCTURE.md</code></li>
                      <li><strong>NO random files in root</strong> - All files must follow folder structure</li>
                      <li><strong>Development server files</strong> → <code className="bg-white/10 px-2 py-1 rounded">Dev server/</code> folder ONLY</li>
                      <li><strong>Documentation</strong> → <code className="bg-white/10 px-2 py-1 rounded">docs/</code> folder (organized by purpose)</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                  <h3 className="font-bold text-lg mb-3 text-blue-400">📌 WORKFLOW STANDARDIZATION</h3>
                  <p className="text-gray-300 mb-3">
                    <strong>This is how we work. This document defines our standard workflow and processes.</strong>
                  </p>
                  <p className="text-gray-300 mb-3">
                    If anyone wants to work differently or proposes changes to this workflow, <strong>it must be discussed in a team meeting and added to the meeting agenda</strong> before implementation. This ensures:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-3">
                    <li>All team members are aware of proposed changes</li>
                    <li>Changes are discussed and agreed upon by the team</li>
                    <li>Process changes are documented and communicated properly</li>
                    <li>Consistency is maintained across the project</li>
                  </ul>
                  <p className="text-red-400 font-bold">
                    ⚠️ Do not deviate from this workflow without team discussion and approval.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">📋 Quick Start Checklist</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-white/5 rounded-xl">
                    <h3 className="font-bold mb-3">First Time Setup</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>☐ Read this entire document (START_HERE.md)</li>
                      <li>☐ Read <code className="bg-white/10 px-1 py-0.5 rounded">.cursorrules</code> for coding standards</li>
                      <li>☐ Read <code className="bg-white/10 px-1 py-0.5 rounded">docs/Core Documentation/STRUCTURE.md</code></li>
                      <li>☐ Join Admin & Developer Discord</li>
                      <li>☐ Register in Developer Registry</li>
                      <li>☐ Set up development environment</li>
                      <li>☐ Test the development server</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white/5 rounded-xl">
                    <h3 className="font-bold mb-3">Before Every Change</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>☐ Create feature branch</li>
                      <li>☐ Make your changes</li>
                      <li>☐ Test your changes</li>
                      <li>☐ Update CHANGELOG.md (MANDATORY)</li>
                      <li>☐ Update documentation if needed</li>
                      <li>☐ Create push change documentation</li>
                      <li>☐ Commit changes</li>
                      <li>☐ Create Pull Request</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">🛠️ Development Setup</h2>
                
                <div className="p-4 bg-white/5 rounded-xl mb-4">
                  <h3 className="font-bold mb-3">Prerequisites</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li><strong>Node.js</strong> (v18 or higher) - For development server and build scripts</li>
                    <li><strong>Git</strong> - For version control</li>
                    <li><strong>Code Editor</strong> - VS Code, Cursor, or similar</li>
                    <li><strong>GitHub Account</strong> - For repository access</li>
                  </ul>
                </div>

                <div className="p-4 bg-white/5 rounded-xl mb-4">
                  <h3 className="font-bold mb-3">Starting the Development Server</h3>
                  <div className="bg-black/30 p-4 rounded-lg font-mono text-sm">
                    <div className="mb-2"><span className="text-cyan-400"># Windows:</span></div>
                    <div className="text-gray-300">start.bat</div>
                    <div className="mt-4 mb-2"><span className="text-cyan-400"># Manual Start:</span></div>
                    <div className="text-gray-300">cd frontend</div>
                    <div className="text-gray-300">node server.js</div>
                    <div className="mt-2 text-gray-500"># Server will open at: http://localhost:8000</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">🔄 How to Make Changes</h2>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-xl">
                    <h3 className="font-bold mb-2">Step-by-Step Workflow</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                      <li>Create Feature Branch: <code className="bg-white/10 px-2 py-1 rounded">git checkout -b feature/your-feature-name</code></li>
                      <li>Make Your Changes (follow <code className="bg-white/10 px-2 py-1 rounded">.cursorrules</code> standards)</li>
                      <li>Update CHANGELOG.md (MANDATORY - include <code className="bg-white/10 px-2 py-1 rounded">[Developer: Name]</code> or <code className="bg-white/10 px-2 py-1 rounded">[Cursor]</code>)</li>
                      <li>Update Documentation (if needed)</li>
                      <li>Create Push Change Documentation</li>
                      <li>Commit Changes</li>
                      <li>Push to Remote</li>
                      <li>Create Pull Request (NEVER push directly to main)</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">👥 Team Information</h2>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl">
                    <h3 className="font-bold text-purple-400 mb-2">Josef Lindbom</h3>
                    <p className="text-sm text-gray-400 mb-2">COO & Development Vision Lead</p>
                    <p className="text-xs text-gray-500">josef@nordicglobalsolutions.com</p>
                    <p className="text-xs text-gray-300 mt-2">UX/UI, user flow logic, overall platform logic</p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-xl">
                    <h3 className="font-bold text-purple-400 mb-2">Craig Martin</h3>
                    <p className="text-sm text-gray-400 mb-2">CTO</p>
                    <p className="text-xs text-gray-500">craig@nordicglobalsolutions.com</p>
                    <p className="text-xs text-gray-300 mt-2">Hosting services, Discourse, n8n, version control</p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-xl">
                    <h3 className="font-bold text-purple-400 mb-2">Jonne Waselius</h3>
                    <p className="text-sm text-gray-400 mb-2">Backend Developer</p>
                    <p className="text-xs text-gray-500">Jonne@nordicglobalsolutions.com</p>
                    <p className="text-xs text-gray-300 mt-2">Real-time hosting, auth, backend, n8n, API, ports, Google Sync</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                  <h3 className="font-bold mb-2">Communication</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>🔐 <strong>Admin & Developer Discord</strong>: <a href="https://discord.gg/YRYJMGsrW2" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">https://discord.gg/YRYJMGsrW2</a></li>
                    <li>🎯 <strong>Official Nordic Global Discord</strong>: <a href="https://discord.gg/UhsYV4aytG" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">https://discord.gg/UhsYV4aytG</a></li>
                    <li>🌐 <strong>Nordic Global Solutions</strong>: <a href="https://www.nordicglobalsolutions.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">www.nordicglobalsolutions.com</a></li>
                  </ul>
                </div>

                <div className="mt-6 p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                  <h3 className="font-bold mb-3 text-purple-400">📢 Office Discord Setup & Reporting System</h3>
                  <p className="text-gray-300 mb-3">
                    <strong>We use office Discord according to Jonne's rules.</strong>
                  </p>
                  <p className="text-gray-300 mb-3">
                    The office Discord setup includes a comprehensive reporting system for all functions within the system:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4 mb-3">
                    <li><strong>Code Problem Reporting</strong>: Report bugs, errors, and code issues through Discord channels</li>
                    <li><strong>Bug Fix Reporting</strong>: Document bug fixes and resolutions in designated Discord channels</li>
                    <li><strong>Function-Specific Reporting</strong>: Every function in the system has its own reporting system within Discord</li>
                    <li><strong>System Updates</strong>: Track system updates, changes, and deployments through Discord</li>
                    <li><strong>Team Communication</strong>: Coordinate development work and share updates via Discord</li>
                  </ul>
                  <p className="text-yellow-400 font-bold text-sm mb-2">
                    ⚠️ Important: All reporting, bug tracking, and system updates should be done through the office Discord setup as defined by Jonne's rules.
                  </p>
                  <p className="text-gray-400 text-sm">
                    <strong>For detailed instructions</strong>, see the documentation that Jonne will create (task added to <code className="bg-white/10 px-2 py-1 rounded">docs/Development/JONNE_TASKS.md</code>).
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">⚠️ Common Mistakes to Avoid</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <h3 className="font-bold text-red-400 mb-3">❌ DON'T DO THESE</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>❌ Don't commit without updating CHANGELOG.md</li>
                      <li>❌ Don't forget developer tracking in changelog</li>
                      <li>❌ Don't push directly to main branch</li>
                      <li>❌ Don't skip changelog entries for "small" changes</li>
                      <li>❌ Don't create files in root directory</li>
                      <li>❌ Don't commit broken or untested code</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                    <h3 className="font-bold text-green-400 mb-3">✅ DO THESE</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>✅ Always update CHANGELOG.md before committing</li>
                      <li>✅ Always create feature branch for changes</li>
                      <li>✅ Always test your code before committing</li>
                      <li>✅ Always follow project structure</li>
                      <li>✅ Always create push change documentation</li>
                      <li>✅ Always request CTO review before merging</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">📚 Important Documentation Links</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl">
                    <h3 className="font-bold mb-3">Must-Read Documents</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <code className="bg-white/10 px-2 py-1 rounded">.cursorrules</code> - Coding standards</li>
                      <li>• <code className="bg-white/10 px-2 py-1 rounded">docs/Core Documentation/STRUCTURE.md</code> - Project structure</li>
                      <li>• <code className="bg-white/10 px-2 py-1 rounded">docs/Services/github/VERSION_CONTROL.md</code> - Git workflow</li>
                      <li>• <code className="bg-white/10 px-2 py-1 rounded">docs/Project Management/CHANGELOG.md</code> - Change log</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white/5 rounded-xl">
                    <h3 className="font-bold mb-3">Service Documentation</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Netlify: <code className="bg-white/10 px-2 py-1 rounded">docs/Services/netlify/SERVICE_RULES.md</code></li>
                      <li>• GitHub: <code className="bg-white/10 px-2 py-1 rounded">docs/Services/github/SERVICE_RULES.md</code></li>
                      <li>• PostgreSQL: <code className="bg-white/10 px-2 py-1 rounded">docs/Services/PostgreSQL/SERVICE_RULES.md</code></li>
                      <li>• n8n: <code className="bg-white/10 px-2 py-1 rounded">docs/Services/n8n/SERVICE_RULES.md</code></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <div className="p-6 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 border border-purple-500/30 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4">📝 Summary</h2>
                  <p className="text-gray-300 mb-4"><strong>Remember these three critical rules:</strong></p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                    <li><strong>CHANGELOG.md MUST ALWAYS BE UPDATED</strong> - Every change, no exceptions</li>
                    <li><strong>NEVER push directly to main</strong> - Always use Pull Request workflow</li>
                    <li><strong>Follow project structure</strong> - All files in correct locations</li>
                  </ol>
                  <p className="text-lg font-bold text-cyan-400 mt-6">Welcome to the team! 🚀</p>
                </div>
                
                <div className="mt-6 text-sm text-gray-500 text-center">
                  <p><strong>Last Updated</strong>: January 2026</p>
                  <p><strong>Version</strong>: 1.0</p>
                  <p><strong>Maintained by</strong>: Development Team</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminView;

