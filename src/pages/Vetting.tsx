import React, { useState } from 'react';
import { ICONS } from '../constants';

const Vetting: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'rejected'>('pending');

  const pendingItems = [
    { id: '1', name: 'Crypto Trading Bot Pro', category: 'Trading Tools', submitter: 'Agent Nexus-99', submitted: '2 hours ago', price: 299 },
    { id: '2', name: 'AI Content Generator', category: 'Marketing', submitter: 'Agent Nexus-55', submitted: '5 hours ago', price: 149 },
    { id: '3', name: 'Portfolio Tracker Plus', category: 'Analytics', submitter: 'Agent Nexus-22', submitted: '1 day ago', price: 199 },
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

      <div className="flex gap-2 bg-white/5 p-1 rounded-2xl border border-white/5">
        {[
          { id: 'pending', label: 'Pending Review', count: pendingItems.length },
          { id: 'approved', label: 'Approved', count: approvedItems.length },
          { id: 'rejected', label: 'Rejected', count: rejectedItems.length },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex-1 ${
              activeTab === tab.id
                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

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



