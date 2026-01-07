import React, { useState } from 'react';
import { ICONS } from '../constants';
import { AppRoute } from '../types';

interface FriendsProps {
  setActiveRoute?: (route: AppRoute) => void;
}

interface CollaborationOpportunity {
  type: string;
  partner: string;
  opportunity: string;
  value: string;
  icon: string;
  details?: string;
  benefits?: string[];
  actionPlan?: string[];
}

const Friends: React.FC<FriendsProps> = ({ setActiveRoute }) => {
  const [activeTab, setActiveTab] = useState<'friends' | 'requests' | 'blocked'>('friends');
  const [selectedProfile, setSelectedProfile] = useState<{ name: string; tier: string; online: boolean; mutual: number } | null>(null);
  const [selectedOpportunity, setSelectedOpportunity] = useState<CollaborationOpportunity | null>(null);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportReason, setReportReason] = useState<string>('');
  const [reportDetails, setReportDetails] = useState<string>('');


  const [requests, setRequests] = useState([
    { id: '4', name: 'Agent Nexus-99', tier: 'Silver', mutual: 3 },
    { id: '5', name: 'Agent Nexus-33', tier: 'Gold', mutual: 15 },
  ]);
  
  const [friends, setFriends] = useState([
    { id: '1', name: 'Agent Nexus-42', tier: 'Gold', online: true, mutual: 12 },
    { id: '2', name: 'Agent Nexus-88', tier: 'Silver', online: true, mutual: 8 },
    { id: '3', name: 'Agent Nexus-15', tier: 'Platinum', online: false, mutual: 25 },
  ]);

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
            { 
              type: 'Joint Venture', 
              partner: 'Agent Nexus-42', 
              opportunity: 'Cross-promote products to combined audience of 500+', 
              value: '$2,400 potential', 
              icon: '🤝',
              details: 'Combine your marketing efforts with Agent Nexus-42 to reach a larger audience and maximize revenue potential.',
              benefits: [
                'Access to 500+ combined audience',
                'Shared marketing costs',
                'Higher conversion rates through trust',
                'Cross-promotion opportunities'
              ],
              actionPlan: [
                'Schedule initial strategy call',
                'Identify top 3 products to promote',
                'Create joint marketing campaign',
                'Set up revenue sharing agreement'
              ]
            },
            { 
              type: 'Skill Partnership', 
              partner: 'Agent Nexus-88', 
              opportunity: 'Your marketing + their content creation expertise', 
              value: 'High synergy', 
              icon: '💼',
              details: 'Leverage your marketing skills with Agent Nexus-88\'s content creation expertise for maximum impact.',
              benefits: [
                'Professional content creation',
                'Faster content production',
                'Higher quality social media posts',
                'Shared workload and expertise'
              ],
              actionPlan: [
                'Define content strategy together',
                'Set up content calendar',
                'Establish approval workflow',
                'Launch first campaign'
              ]
            },
            { 
              type: 'Network Expansion', 
              partner: 'Agent Nexus-15', 
              opportunity: 'Mutual referrals for network growth', 
              value: '+50 members', 
              icon: '📈',
              details: 'Partner with Agent Nexus-15 to expand both networks through strategic mutual referrals.',
              benefits: [
                'Rapid network growth',
                'Quality referrals from trusted source',
                'Reciprocal benefits',
                'Shared network value'
              ],
              actionPlan: [
                'Identify referral criteria',
                'Create referral exchange program',
                'Set up tracking system',
                'Launch referral campaign'
              ]
            },
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
                <button 
                  onClick={() => setSelectedOpportunity(opp)}
                  className="px-3 py-1 bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 rounded-lg text-xs font-bold transition-all"
                >
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
                <button 
                  onClick={() => {
                    if (setActiveRoute) {
                      setActiveRoute(AppRoute.CHAT);
                      // Store selected user in sessionStorage for Chat component to pick up
                      sessionStorage.setItem('selectedChatUser', friend.name);
                    }
                  }}
                  className="flex-1 px-3 py-1.5 bg-purple-600/20 text-purple-400 rounded-lg text-xs font-bold hover:bg-purple-600/30 transition-all"
                >
                  Message
                </button>
                <button 
                  onClick={() => setSelectedProfile(friend)}
                  className="flex-1 px-3 py-1.5 bg-white/5 text-gray-400 rounded-lg text-xs font-bold hover:bg-white/10 transition-all"
                >
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
                  <button 
                    onClick={() => {
                      // Add to friends list
                      setFriends(prev => [...prev, {
                        id: req.id,
                        name: req.name,
                        tier: req.tier,
                        online: false,
                        mutual: req.mutual
                      }]);
                      // Remove from requests
                      setRequests(prev => prev.filter(r => r.id !== req.id));
                      // Show success message
                      alert(`${req.name} has been added to your friends!`);
                    }}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-sm transition-all"
                  >
                    Accept
                  </button>
                  <button 
                    onClick={() => {
                      // Remove from requests
                      setRequests(prev => prev.filter(r => r.id !== req.id));
                      // Show confirmation
                      alert(`Friend request from ${req.name} has been declined.`);
                    }}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-sm transition-all"
                  >
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

      {/* Profile View Modal */}
      {selectedProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProfile(null)} />
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-white/5 z-10">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-display">Profile</h2>
                <button
                  onClick={() => setSelectedProfile(null)}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                {/* Profile Header */}
                <div className="flex items-center gap-6 pb-6 border-b border-white/5">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600" />
                    {selectedProfile.online && (
                      <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-4 border-[#111827]" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{selectedProfile.name}</h3>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                        selectedProfile.tier === 'Platinum' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        selectedProfile.tier === 'Gold' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        {selectedProfile.tier} Tier
                      </span>
                      <span className="text-sm text-gray-500">
                        {selectedProfile.online ? '🟢 Online' : '⚫ Offline'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-xs text-gray-500 mb-1">Mutual Connections</p>
                    <p className="text-2xl font-bold text-cyan-400">{selectedProfile.mutual}</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-xs text-gray-500 mb-1">Network Size</p>
                    <p className="text-2xl font-bold text-purple-400">
                      {selectedProfile.name === 'Agent Nexus-42' ? '142' :
                       selectedProfile.name === 'Agent Nexus-88' ? '98' : '342'}
                    </p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-xs text-gray-500 mb-1">Monthly Earnings</p>
                    <p className="text-2xl font-bold text-green-400">
                      {selectedProfile.name === 'Agent Nexus-42' ? '$10,240' :
                       selectedProfile.name === 'Agent Nexus-88' ? '$8,920' : '$15,800'}
                    </p>
                  </div>
                </div>

                {/* Activity */}
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {[
                      { action: 'Made a sale', product: 'NXC Trading Masterclass', time: '2 hours ago', amount: '$150' },
                      { action: 'Reached milestone', product: 'Gold Tier', time: '1 day ago', amount: '' },
                      { action: 'Network growth', product: '+5 new members', time: '3 days ago', amount: '' },
                    ].map((activity, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-black/40 rounded-xl">
                        <div>
                          <p className="text-sm font-bold">{activity.action}</p>
                          <p className="text-xs text-gray-500">{activity.product} • {activity.time}</p>
                        </div>
                        {activity.amount && (
                          <span className="text-sm font-bold text-green-400">{activity.amount}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => {
                      setSelectedProfile(null);
                      if (setActiveRoute) {
                        setActiveRoute(AppRoute.CHAT);
                        sessionStorage.setItem('selectedChatUser', selectedProfile.name);
                      }
                    }}
                    className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl font-bold hover:scale-[1.02] transition-transform"
                  >
                    Send Message
                  </button>
                  <button
                    onClick={() => setShowReportModal(true)}
                    className="px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-xl font-bold transition-all"
                  >
                    Report
                  </button>
                  <button
                    onClick={() => setSelectedProfile(null)}
                    className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Collaboration Opportunity Modal */}
      {selectedOpportunity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedOpportunity(null)} />
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-white/5 z-10">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{selectedOpportunity.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold font-display">{selectedOpportunity.type}</h2>
                    <p className="text-gray-500 text-sm">with {selectedOpportunity.partner}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedOpportunity(null)}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                {/* Overview */}
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-bold mb-3">Opportunity Overview</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedOpportunity.details}</p>
                  <div className="mt-4 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                    <p className="text-sm font-bold text-cyan-400 mb-1">Potential Value</p>
                    <p className="text-2xl font-bold text-white">{selectedOpportunity.value}</p>
                  </div>
                </div>

                {/* Benefits */}
                {selectedOpportunity.benefits && (
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <h3 className="text-lg font-bold mb-4">Key Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedOpportunity.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-black/40 rounded-xl">
                          <span className="text-green-400 text-lg">✓</span>
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Plan */}
                {selectedOpportunity.actionPlan && (
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <h3 className="text-lg font-bold mb-4">Action Plan</h3>
                    <div className="space-y-3">
                      {selectedOpportunity.actionPlan.map((step, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-black/40 rounded-xl">
                          <div className="w-8 h-8 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-bold text-purple-400">{i + 1}</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-300">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Partner Info */}
                <div className="p-6 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl border border-purple-500/20">
                  <h3 className="text-lg font-bold mb-4">Partner Profile</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600" />
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">{selectedOpportunity.partner}</h4>
                      <p className="text-gray-500 text-sm">
                        {selectedOpportunity.partner === 'Agent Nexus-42' && 'Gold Tier • 142 network • $10,240/month'}
                        {selectedOpportunity.partner === 'Agent Nexus-88' && 'Silver Tier • 98 network • $8,920/month'}
                        {selectedOpportunity.partner === 'Agent Nexus-15' && 'Platinum Tier • 342 network • $15,800/month'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => {
                      setSelectedOpportunity(null);
                      if (setActiveRoute) {
                        setActiveRoute(AppRoute.CHAT);
                        sessionStorage.setItem('selectedChatUser', selectedOpportunity.partner);
                      }
                    }}
                    className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                  >
                    Message Partner
                  </button>
                  <button
                    onClick={() => {
                      alert(`Collaboration proposal sent to ${selectedOpportunity.partner}!`);
                      setSelectedOpportunity(null);
                    }}
                    className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl font-bold hover:scale-[1.02] transition-transform"
                  >
                    Send Proposal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Report User Modal */}
      {showReportModal && selectedProfile && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Report User</h3>
                <p className="text-gray-500 text-sm mt-1">Reporting: {selectedProfile.name}</p>
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
                    setSelectedProfile(null);
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

export default Friends;


