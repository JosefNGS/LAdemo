import React, { useState } from 'react';
import { ICONS } from '../constants';

const Vetting: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pending' | 'community' | 'approved' | 'rejected'>('pending');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const pendingItems = [
    { 
      id: '1', 
      name: 'Crypto Trading Bot Pro', 
      category: 'Trading Tools', 
      submitter: 'Agent Nexus-99', 
      submitted: '2 hours ago', 
      price: 299,
      votesFor: 0,
      votesAgainst: 0,
      userVote: null as 'approve' | 'reject' | null
    },
    { 
      id: '2', 
      name: 'AI Content Generator', 
      category: 'Marketing', 
      submitter: 'Agent Nexus-55', 
      submitted: '5 hours ago', 
      price: 149,
      votesFor: 0,
      votesAgainst: 0,
      userVote: null
    },
    { 
      id: '3', 
      name: 'Portfolio Tracker Plus', 
      category: 'Analytics', 
      submitter: 'Agent Nexus-22', 
      submitted: '1 day ago', 
      price: 199,
      votesFor: 0,
      votesAgainst: 0,
      userVote: null
    },
  ];

  const communityItems = [
    { 
      id: '4', 
      name: 'MEV Bot Pro License', 
      category: 'Trading Tools', 
      submitter: 'Agent Nexus-88', 
      submitted: '3 days ago', 
      price: 499,
      votesFor: 124,
      votesAgainst: 23,
      approvalRate: 84,
      userVote: 'approve' as 'approve' | 'reject' | null,
      status: 'community-review'
    },
    { 
      id: '5', 
      name: 'Staking Pool Manager', 
      category: 'DeFi', 
      submitter: 'Agent Nexus-42', 
      submitted: '5 days ago', 
      price: 349,
      votesFor: 89,
      votesAgainst: 45,
      approvalRate: 66,
      userVote: null,
      status: 'community-review'
    },
  ];

  const approvedItems = [
    { id: '4', name: 'Nexus Node License', category: 'Infrastructure', submitter: 'Agent Nexus-Admin', approved: '3 days ago', price: 499 },
  ];

  const rejectedItems = [
    { id: '5', name: 'Suspicious Tool', category: 'Unknown', submitter: 'Agent Nexus-11', rejected: '1 week ago', reason: 'Security concerns' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-display">Admin Vetting</h2>
          <p className="text-gray-500 text-sm">Review queue for marketplace submissions and product quality control</p>
        </div>
      </div>

      {/* Eligibility Notice */}
      <div className="glass-card p-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
        <div className="flex items-center gap-3">
          <span className="text-2xl">✅</span>
          <div>
            <p className="font-bold text-cyan-400 mb-1">You're eligible to review products!</p>
            <p className="text-sm text-gray-400">As a verified user, you can vote on product approvals in the Community Review queue</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 bg-white/5 p-1 rounded-2xl border border-white/5 overflow-x-auto scrollbar-hide">
        {[
          { id: 'pending', label: 'Admin Review', count: pendingItems.length },
          { id: 'community', label: 'Community Review', count: communityItems.length },
          { id: 'approved', label: 'Approved', count: approvedItems.length },
          { id: 'rejected', label: 'Rejected', count: rejectedItems.length },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {activeTab === 'community' && (
        <div className="space-y-4">
          {communityItems.map((item) => (
            <div key={item.id} className="glass-card p-6 rounded-3xl border border-purple-500/30">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full text-xs font-bold">
                      COMMUNITY REVIEW
                    </span>
                    {item.approvalRate >= 70 && (
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-xs font-bold">
                        {item.approvalRate}% Approval
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                    <div>
                      <p className="text-gray-500">Category</p>
                      <p className="font-bold">{item.category}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Price</p>
                      <p className="font-bold">${item.price}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Submitted by</p>
                      <p className="font-bold">{item.submitter}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Submitted</p>
                      <p className="font-bold">{item.submitted}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">Votes For:</span>
                          <span className="text-lg font-bold text-green-400">{item.votesFor}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">Votes Against:</span>
                          <span className="text-lg font-bold text-red-400">{item.votesAgainst}</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" 
                        style={{ width: `${item.approvalRate}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500">
                      Approval threshold: 70%+ positive votes required
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {!item.userVote ? (
                    <>
                      <button 
                        onClick={() => {
                          alert(`Vote FOR submitted for ${item.name}!`);
                          item.userVote = 'approve';
                          item.votesFor++;
                        }}
                        className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-xl font-bold text-sm transition-all"
                      >
                        Vote Approve
                      </button>
                      <button 
                        onClick={() => {
                          alert(`Vote REJECT submitted for ${item.name}!`);
                          item.userVote = 'reject';
                          item.votesAgainst++;
                        }}
                        className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-xl font-bold text-sm transition-all"
                      >
                        Vote Reject
                      </button>
                    </>
                  ) : (
                    <div className="px-4 py-2 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-xl text-sm font-bold text-center">
                      You voted {item.userVote.toUpperCase()}
                    </div>
                  )}
                  <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-sm transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'pending' && (
        <div className="space-y-4">
          {pendingItems.map((item) => (
            <div key={item.id} className="glass-card p-6 rounded-3xl border border-yellow-500/30">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full text-xs font-bold">
                      PENDING
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Category</p>
                      <p className="font-bold">{item.category}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Price</p>
                      <p className="font-bold">${item.price}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Submitted by</p>
                      <p className="font-bold">{item.submitter}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Submitted</p>
                      <p className="font-bold">{item.submitted}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-xl font-bold text-sm transition-all">
                    Approve
                  </button>
                  <button className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-xl font-bold text-sm transition-all">
                    Reject
                  </button>
                  <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-sm transition-all">
                    Review
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'approved' && (
        <div className="space-y-4">
          {approvedItems.map((item) => (
            <div key={item.id} className="glass-card p-6 rounded-3xl border border-green-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-xs font-bold">
                      APPROVED
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">Approved {item.approved} • ${item.price}</p>
                </div>
                <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-sm transition-all">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'rejected' && (
        <div className="space-y-4">
          {rejectedItems.map((item) => (
            <div key={item.id} className="glass-card p-6 rounded-3xl border border-red-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-xs font-bold">
                      REJECTED
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">Rejected {item.rejected} • Reason: {item.reason}</p>
                </div>
                <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-sm transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Vetting;



