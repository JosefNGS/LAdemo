import React, { useState } from 'react';
import { ICONS } from '../constants';

const Users: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const users = [
    { id: '1', name: 'Agent Nexus-77', email: 'nexus77@example.com', tier: 'Platinum', status: 'Active', joined: '2024-01-15', earnings: 14210 },
    { id: '2', name: 'Agent Nexus-42', email: 'nexus42@example.com', tier: 'Gold', status: 'Active', joined: '2024-02-20', earnings: 8920 },
    { id: '3', name: 'Agent Nexus-88', email: 'nexus88@example.com', tier: 'Silver', status: 'Suspended', joined: '2024-03-10', earnings: 3200 },
    { id: '4', name: 'Agent Nexus-15', email: 'nexus15@example.com', tier: 'Platinum', status: 'Active', joined: '2023-12-05', earnings: 25600 },
    { id: '5', name: 'Agent Nexus-99', email: 'nexus99@example.com', tier: 'Gold', status: 'Active', joined: '2024-04-01', earnings: 5600 },
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-display">User Management</h2>
          <p className="text-gray-500 text-sm">Manage user accounts, permissions, and activity</p>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50"
          />
          <button className="px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all">
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-card p-4 rounded-2xl border border-white/5">
          <p className="text-gray-500 text-xs mb-1">Total Users</p>
          <p className="text-2xl font-bold">{users.length}</p>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-white/5">
          <p className="text-gray-500 text-xs mb-1">Active</p>
          <p className="text-2xl font-bold text-green-400">{users.filter(u => u.status === 'Active').length}</p>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-white/5">
          <p className="text-gray-500 text-xs mb-1">Suspended</p>
          <p className="text-2xl font-bold text-red-400">{users.filter(u => u.status === 'Suspended').length}</p>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-white/5">
          <p className="text-gray-500 text-xs mb-1">Total Earnings</p>
          <p className="text-2xl font-bold text-cyan-400">${users.reduce((sum, u) => sum + u.earnings, 0).toLocaleString()}</p>
        </div>
      </div>

      <div className="glass-card rounded-3xl border border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5 border-b border-white/5">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Tier</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Joined</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Earnings</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-bold">{user.name}</p>
                      <p className="text-gray-500 text-sm">{user.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      user.tier === 'Platinum' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                      user.tier === 'Gold' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                      'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                    }`}>
                      {user.tier}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      user.status === 'Active'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">{user.joined}</td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-green-400">${user.earnings.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold transition-all">
                        View
                      </button>
                      <button className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold transition-all">
                        Edit
                      </button>
                      {user.status === 'Active' ? (
                        <button className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-xs font-bold transition-all">
                          Suspend
                        </button>
                      ) : (
                        <button className="px-3 py-1.5 bg-green-500/10 hover:bg-green-500/20 text-green-400 rounded-lg text-xs font-bold transition-all">
                          Activate
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;



