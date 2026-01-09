import React, { useState } from 'react';
import { ICONS } from '../constants';
import { AppRoute } from '../types';
import { useNotifications } from '../contexts/NotificationContext';
import { navigateToUserProfile } from '../utils/profileNavigation';

interface User {
  id: string;
  name: string;
  email: string;
  tier: 'Platinum' | 'Gold' | 'Silver' | 'Bronze';
  status: 'Active' | 'Suspended';
  joined: string;
  earnings: number;
}

interface UsersProps {
  setActiveRoute: (route: AppRoute) => void;
}

const Users: React.FC<UsersProps> = ({ setActiveRoute }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState<User[]>([
    { id: '1', name: 'Agent Nexus-77', email: 'nexus77@example.com', tier: 'Platinum', status: 'Active', joined: '2024-01-15', earnings: 14210 },
    { id: '2', name: 'Agent Nexus-42', email: 'nexus42@example.com', tier: 'Gold', status: 'Active', joined: '2024-02-20', earnings: 8920 },
    { id: '3', name: 'Agent Nexus-88', email: 'nexus88@example.com', tier: 'Silver', status: 'Suspended', joined: '2024-03-10', earnings: 3200 },
    { id: '4', name: 'Agent Nexus-15', email: 'nexus15@example.com', tier: 'Platinum', status: 'Active', joined: '2023-12-05', earnings: 25600 },
    { id: '5', name: 'Agent Nexus-99', email: 'nexus99@example.com', tier: 'Gold', status: 'Active', joined: '2024-04-01', earnings: 5600 },
  ]);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const { addNotification } = useNotifications();

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleExport = () => {
    // Create CSV content
    const headers = ['Name', 'Email', 'Tier', 'Status', 'Joined', 'Earnings'];
    const csvContent = [
      headers.join(','),
      ...filteredUsers.map(user => [
        user.name,
        user.email,
        user.tier,
        user.status,
        user.joined,
        user.earnings
      ].join(','))
    ].join('\n');

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `users_export_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    addNotification({
      type: 'success',
      title: 'Export Successful',
      message: `Exported ${filteredUsers.length} users to CSV file.`,
    });
  };

  const handleView = (user: User) => {
    navigateToUserProfile(user.name, setActiveRoute);
  };

  const handleEdit = (user: User) => {
    setEditingUser({ ...user });
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    if (editingUser) {
      setUsers(prev => prev.map(u => u.id === editingUser.id ? editingUser : u));
      setShowEditModal(false);
      setEditingUser(null);
      addNotification({
        type: 'success',
        title: 'User Updated',
        message: `${editingUser.name}'s information has been updated.`,
      });
    }
  };

  const handleSuspend = (user: User) => {
    setUsers(prev => prev.map(u => 
      u.id === user.id ? { ...u, status: 'Suspended' as const } : u
    ));
    addNotification({
      type: 'warning',
      title: 'User Suspended',
      message: `${user.name} has been suspended.`,
    });
  };

  const handleActivate = (user: User) => {
    setUsers(prev => prev.map(u => 
      u.id === user.id ? { ...u, status: 'Active' as const } : u
    ));
    addNotification({
      type: 'success',
      title: 'User Activated',
      message: `${user.name} has been activated.`,
    });
  };

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
          <button 
            onClick={handleExport}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
          >
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
                <tr key={user.id} className="hover:bg-purple-500/10 hover:border-l-4 hover:border-l-purple-500 transition-all cursor-pointer">
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
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleView(user);
                        }}
                        className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold transition-all"
                      >
                        View
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEdit(user);
                        }}
                        className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold transition-all"
                      >
                        Edit
                      </button>
                      {user.status === 'Active' ? (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSuspend(user);
                          }}
                          className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-xs font-bold transition-all"
                        >
                          Suspend
                        </button>
                      ) : (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleActivate(user);
                          }}
                          className="px-3 py-1.5 bg-green-500/10 hover:bg-green-500/20 text-green-400 rounded-lg text-xs font-bold transition-all"
                        >
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

      {/* Edit User Modal */}
      {showEditModal && editingUser && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Edit User</h3>
                <p className="text-gray-500 text-sm mt-1">Update user information</p>
              </div>
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setEditingUser(null);
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
                <label className="block text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  value={editingUser.name}
                  onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  value={editingUser.email}
                  onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Tier</label>
                <select
                  value={editingUser.tier}
                  onChange={(e) => setEditingUser({ ...editingUser, tier: e.target.value as User['tier'] })}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50"
                >
                  <option value="Platinum">Platinum</option>
                  <option value="Gold">Gold</option>
                  <option value="Silver">Silver</option>
                  <option value="Bronze">Bronze</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Status</label>
                <select
                  value={editingUser.status}
                  onChange={(e) => setEditingUser({ ...editingUser, status: e.target.value as User['status'] })}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50"
                >
                  <option value="Active">Active</option>
                  <option value="Suspended">Suspended</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Earnings</label>
                <input
                  type="number"
                  value={editingUser.earnings}
                  onChange={(e) => setEditingUser({ ...editingUser, earnings: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSaveEdit}
                  className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-500 rounded-xl font-bold transition-all"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => {
                    setShowEditModal(false);
                    setEditingUser(null);
                  }}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-bold transition-all"
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

export default Users;



