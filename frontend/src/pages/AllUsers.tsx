import React, { useState } from 'react';
import { ICONS } from '../constants';
import { AppRoute } from '../types';
import { userProfiles, getUserProfileByName } from '../data/userProfiles';
import { navigateToUserProfile } from '../utils/profileNavigation';

interface AllUsersProps {
  setActiveRoute?: (route: AppRoute) => void;
}

interface PlatformUser {
  id: string;
  name: string;
  email: string;
  tier: 'Platinum' | 'Gold' | 'Silver' | 'Bronze';
  status: 'Online' | 'Offline';
  joined: string;
  earnings: number;
  networkSize: number;
  avatar?: string;
  mutualConnections?: number;
}

const AllUsers: React.FC<AllUsersProps> = ({ setActiveRoute }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [selectedUser, setSelectedUser] = useState<PlatformUser | null>(null);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportReason, setReportReason] = useState<string>('');
  const [reportDetails, setReportDetails] = useState<string>('');

  // Convert userProfiles to PlatformUser format
  const users: PlatformUser[] = userProfiles.map(profile => ({
    id: profile.id,
    name: profile.name,
    email: profile.email,
    tier: profile.tier,
    status: profile.status,
    joined: profile.joined,
    earnings: profile.earnings,
    networkSize: profile.networkSize,
    avatar: profile.avatar,
    mutualConnections: profile.mutualConnections || 0
  }));

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTier = selectedTier === 'all' || user.tier.toLowerCase() === selectedTier.toLowerCase();
    return matchesSearch && matchesTier;
  });

  const tierColors = {
    Platinum: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    Gold: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    Silver: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
    Bronze: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-display">Platform Users</h2>
          <p className="text-gray-500 text-sm">Browse and connect with BitNexus community members</p>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-white placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-card p-4 rounded-2xl border border-white/5">
          <p className="text-gray-500 text-xs mb-1">Total Users</p>
          <p className="text-2xl font-bold">{users.length}</p>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-white/5">
          <p className="text-gray-500 text-xs mb-1">Online Now</p>
          <p className="text-2xl font-bold text-green-400">{users.filter(u => u.status === 'Online').length}</p>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-white/5">
          <p className="text-gray-500 text-xs mb-1">Platinum Members</p>
          <p className="text-2xl font-bold text-purple-400">{users.filter(u => u.tier === 'Platinum').length}</p>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-white/5">
          <p className="text-gray-500 text-xs mb-1">Total Network</p>
          <p className="text-2xl font-bold text-cyan-400">{users.reduce((sum, u) => sum + u.networkSize, 0).toLocaleString()}</p>
        </div>
      </div>

      {/* Tier Filter */}
      <div className="flex flex-wrap gap-2">
        {['all', 'Platinum', 'Gold', 'Silver', 'Bronze'].map((tier) => (
          <button
            key={tier}
            onClick={() => setSelectedTier(tier)}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              selectedTier === tier
                ? 'bg-purple-600 text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200'
            }`}
          >
            {tier === 'all' ? 'All Tiers' : tier}
          </button>
        ))}
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            onClick={() => {
              if (setActiveRoute) {
                navigateToUserProfile(user.name, setActiveRoute);
              }
            }}
            className="glass-card p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center font-bold text-sm">
                    {user.avatar || user.name.charAt(user.name.length - 1)}
                  </div>
                  {user.status === 'Online' && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#030712]" />
                  )}
                </div>
                <div>
                  <h3 className="font-bold">{user.name}</h3>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Tier</span>
                <span className={`px-2 py-1 rounded text-xs font-bold border ${tierColors[user.tier]}`}>
                  {user.tier}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Status</span>
                <span className={`text-xs font-bold ${user.status === 'Online' ? 'text-green-400' : 'text-gray-500'}`}>
                  {user.status === 'Online' ? '🟢 Online' : '⚫ Offline'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Earnings</span>
                <span className="text-xs font-bold text-green-400">${user.earnings.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Network</span>
                <span className="text-xs font-bold text-cyan-400">{user.networkSize} members</span>
              </div>
              {user.mutualConnections && user.mutualConnections > 0 && (
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Mutual</span>
                  <span className="text-xs font-bold text-purple-400">{user.mutualConnections} connections</span>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  sessionStorage.setItem('selectedChatUser', user.name);
                  setActiveRoute && setActiveRoute(AppRoute.CHAT);
                }}
                className="flex-1 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-sm transition-all"
              >
                Message
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (setActiveRoute) {
                    navigateToUserProfile(user.name, setActiveRoute);
                  }
                }}
                className="flex-1 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-sm transition-all"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* User Detail Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center font-bold text-xl">
                    {selectedUser.avatar || selectedUser.name.charAt(selectedUser.name.length - 1)}
                  </div>
                  {selectedUser.status === 'Online' && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-[#030712]" />
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{selectedUser.name}</h3>
                  <p className="text-gray-500 text-sm">{selectedUser.email}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedUser(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Tier</p>
                <p className={`font-bold inline-block px-2 py-1 rounded text-sm border ${tierColors[selectedUser.tier]}`}>
                  {selectedUser.tier}
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Status</p>
                <p className={`font-bold ${selectedUser.status === 'Online' ? 'text-green-400' : 'text-gray-400'}`}>
                  {selectedUser.status}
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Joined</p>
                <p className="font-bold text-sm">{selectedUser.joined}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Total Earnings</p>
                <p className="font-bold text-green-400">${selectedUser.earnings.toLocaleString()}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Network Size</p>
                <p className="font-bold text-cyan-400">{selectedUser.networkSize} members</p>
              </div>
              {selectedUser.mutualConnections && (
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Mutual Connections</p>
                  <p className="font-bold text-purple-400">{selectedUser.mutualConnections}</p>
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  sessionStorage.setItem('selectedChatUser', selectedUser.name);
                  setSelectedUser(null);
                  setActiveRoute && setActiveRoute(AppRoute.CHAT);
                }}
                className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all"
              >
                Send Message
              </button>
              <button
                onClick={() => {
                  if (setActiveRoute) {
                    navigateToUserProfile(selectedUser.name, setActiveRoute);
                  }
                  setSelectedUser(null);
                }}
                className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
              >
                View Profile
              </button>
              <button
                onClick={() => setShowReportModal(true)}
                className="px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-xl font-bold transition-all"
              >
                Report
              </button>
              <button
                onClick={() => setSelectedUser(null)}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Report User Modal */}
      {showReportModal && selectedUser && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Report User</h3>
                <p className="text-gray-500 text-sm mt-1">Reporting: {selectedUser.name}</p>
              </div>
              <button
                onClick={() => {
                  setShowReportModal(false);
                  setReportReason('');
                  setReportDetails('');
                }}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Reason for Report *</label>
                <select
                  value={reportReason}
                  onChange={(e) => setReportReason(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-white"
                >
                  <option value="">Select a reason</option>
                  <option value="spam">Spam or Scam</option>
                  <option value="harassment">Harassment or Bullying</option>
                  <option value="inappropriate">Inappropriate Content</option>
                  <option value="fraud">Fraudulent Activity</option>
                  <option value="impersonation">Impersonation</option>
                  <option value="terms">Terms of Service Violation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Additional Details *</label>
                <textarea
                  placeholder="Please provide specific details about the issue..."
                  rows={6}
                  value={reportDetails}
                  onChange={(e) => setReportDetails(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-white placeholder:text-gray-500"
                />
              </div>

              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                <p className="text-xs text-yellow-400 font-bold mb-1">⚠️ Important</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• False reports may result in action against your account</li>
                  <li>• Reports are reviewed by our moderation team</li>
                  <li>• You will receive a confirmation email once your report is processed</li>
                  <li>• All reports are confidential</li>
                </ul>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => {
                    if (!reportReason || !reportDetails) {
                      alert('Please fill in all required fields');
                      return;
                    }
                    alert(`Report submitted successfully. Report ID: #${Math.floor(Math.random() * 10000)}\n\nOur moderation team will review your report within 24-48 hours.`);
                    setShowReportModal(false);
                    setReportReason('');
                    setReportDetails('');
                    setSelectedUser(null);
                  }}
                  className="flex-1 py-3 bg-red-600 hover:bg-red-500 rounded-xl font-bold transition-all"
                >
                  Submit Report
                </button>
                <button
                  onClick={() => {
                    setShowReportModal(false);
                    setReportReason('');
                    setReportDetails('');
                  }}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUsers;

