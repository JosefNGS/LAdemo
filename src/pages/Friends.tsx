import React, { useState } from 'react';
import { ICONS } from '../constants';

const Friends: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'friends' | 'requests' | 'blocked'>('friends');

  const friends = [
    { id: '1', name: 'Agent Nexus-42', tier: 'Gold', online: true, mutual: 12 },
    { id: '2', name: 'Agent Nexus-88', tier: 'Silver', online: true, mutual: 8 },
    { id: '3', name: 'Agent Nexus-15', tier: 'Platinum', online: false, mutual: 25 },
  ];

  const requests = [
    { id: '4', name: 'Agent Nexus-99', tier: 'Silver', mutual: 3 },
    { id: '5', name: 'Agent Nexus-33', tier: 'Gold', mutual: 15 },
  ];

  const blocked = [
    { id: '6', name: 'Agent Nexus-77', reason: 'Spam' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-display">Alliance Connections</h2>
          <p className="text-gray-500 text-sm">Manage your network of friends, requests, and blocked users</p>
        </div>
      </div>

      <div className="flex gap-2 bg-white/5 p-1 rounded-2xl border border-white/5">
        {[
          { id: 'friends', label: 'Friends', count: friends.length },
          { id: 'requests', label: 'Requests', count: requests.length },
          { id: 'blocked', label: 'Blocked', count: blocked.length },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex-1 ${
              activeTab === tab.id
                ? 'bg-purple-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Collaboration Opportunities */}
      <div className="glass-card p-6 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 mb-6">
        <h3 className="text-xl font-bold mb-4">Collaboration Opportunities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { type: 'Joint Venture', partner: 'Agent Nexus-42', opportunity: 'Cross-promote products to combined audience of 500+', value: '$2,400 potential', icon: '🤝' },
            { type: 'Skill Partnership', partner: 'Agent Nexus-88', opportunity: 'Your marketing + their content creation expertise', value: 'High synergy', icon: '💼' },
            { type: 'Network Expansion', partner: 'Agent Nexus-15', opportunity: 'Mutual referrals for network growth', value: '+50 members', icon: '📈' },
          ].map((opp, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{opp.icon}</span>
                <div className="flex-1">
                  <h4 className="font-bold">{opp.type}</h4>
                  <p className="text-xs text-gray-500">with {opp.partner}</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-2">{opp.opportunity}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-cyan-400 font-bold">{opp.value}</span>
                <button className="px-3 py-1 bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 rounded-lg text-xs font-bold transition-all">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Network Value Visualization */}
      <div className="glass-card p-6 rounded-3xl border border-white/5 mb-6">
        <h3 className="text-xl font-bold mb-4">Network Value Visualization</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-xs text-gray-500 mb-1">Total Network Value</p>
            <p className="text-2xl font-bold text-purple-400">$18,420</p>
            <p className="text-xs text-gray-400 mt-1">From all connections</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-xs text-gray-500 mb-1">Network Growth Potential</p>
            <p className="text-2xl font-bold text-cyan-400">+245%</p>
            <p className="text-xs text-gray-400 mt-1">In next 6 months</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-xs text-gray-500 mb-1">Influence Score</p>
            <p className="text-2xl font-bold text-green-400">8.7/10</p>
            <p className="text-xs text-gray-400 mt-1">Top 15% globally</p>
          </div>
        </div>
      </div>

      {activeTab === 'friends' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {friends.map((friend) => (
            <div key={friend.id} className="glass-card p-6 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600" />
                  {friend.online && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-[#111827]" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold">{friend.name}</h3>
                  <p className="text-gray-500 text-sm">{friend.tier} Tier</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-gray-500">{friend.mutual} mutual connections</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-1.5 bg-purple-600/20 text-purple-400 rounded-lg text-xs font-bold hover:bg-purple-600/30 transition-all">
                  Message
                </button>
                <button className="flex-1 px-3 py-1.5 bg-white/5 text-gray-400 rounded-lg text-xs font-bold hover:bg-white/10 transition-all">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'requests' && (
        <div className="space-y-4">
          {requests.map((req) => (
            <div key={req.id} className="glass-card p-6 rounded-3xl border border-white/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600" />
                  <div>
                    <h3 className="font-bold">{req.name}</h3>
                    <p className="text-gray-500 text-sm">{req.tier} Tier • {req.mutual} mutual connections</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-sm transition-all">
                    Accept
                  </button>
                  <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-sm transition-all">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'blocked' && (
        <div className="space-y-4">
          {blocked.map((user) => (
            <div key={user.id} className="glass-card p-6 rounded-3xl border border-red-500/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 opacity-50" />
                  <div>
                    <h3 className="font-bold text-gray-500">{user.name}</h3>
                    <p className="text-gray-600 text-sm">Blocked: {user.reason}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-sm transition-all">
                  Unblock
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Friends;

