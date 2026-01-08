import React, { useState } from 'react';
import { ICONS } from '../constants';

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'Super Admin' | 'Admin' | 'Moderator';
  status: 'Active' | 'Inactive';
  lastActive: string;
  permissions: string[];
}

const PlatformAdminUsers: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<AdminUser | null>(null);
  const [adminUsers, setAdminUsers] = useState<AdminUser[]>([
    {
      id: '1',
      name: 'Agent Nexus-Admin',
      email: 'admin@bitnexus.io',
      role: 'Super Admin',
      status: 'Active',
      lastActive: '2 hours ago',
      permissions: ['All Permissions']
    },
    {
      id: '2',
      name: 'Agent Nexus-Mod',
      email: 'moderator@bitnexus.io',
      role: 'Moderator',
      status: 'Active',
      lastActive: '5 hours ago',
      permissions: ['Reports', 'Content Moderation']
    },
    {
      id: '3',
      name: 'Agent Nexus-Support',
      email: 'support@bitnexus.io',
      role: 'Admin',
      status: 'Active',
      lastActive: '1 day ago',
      permissions: ['User Management', 'Vetting']
    },
  ]);

  const [newAdmin, setNewAdmin] = useState({
    name: '',
    email: '',
    role: 'Admin' as 'Super Admin' | 'Admin' | 'Moderator',
    permissions: [] as string[]
  });

  const availablePermissions = [
    'User Management',
    'Product Vetting',
    'Reports Moderation',
    'Content Moderation',
    'Analytics Access',
    'System Settings',
    'All Permissions'
  ];

  const handleAddAdmin = () => {
    if (!newAdmin.name || !newAdmin.email) {
      alert('Please fill in all required fields');
      return;
    }

    const admin: AdminUser = {
      id: Date.now().toString(),
      name: newAdmin.name,
      email: newAdmin.email,
      role: newAdmin.role,
      status: 'Active',
      lastActive: 'Just now',
      permissions: newAdmin.role === 'Super Admin' ? ['All Permissions'] : newAdmin.permissions
    };

    setAdminUsers([...adminUsers, admin]);
    setNewAdmin({ name: '', email: '', role: 'Admin', permissions: [] });
    setShowAddModal(false);
    alert('Admin user added successfully!');
  };

  const handleToggleStatus = (id: string) => {
    setAdminUsers(adminUsers.map(admin => 
      admin.id === id 
        ? { ...admin, status: admin.status === 'Active' ? 'Inactive' : 'Active' }
        : admin
    ));
  };

  const handleDeleteAdmin = (id: string) => {
    if (window.confirm('Are you sure you want to remove this admin user?')) {
      setAdminUsers(adminUsers.filter(admin => admin.id !== id));
    }
  };

  return (
    <div className="glass-card p-6 rounded-[2rem] border-white/5">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="font-bold text-lg">Platform Admin Users</h4>
          <p className="text-gray-500 text-sm mt-1">Manage platform administrators and moderators</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold text-sm transition-all"
        >
          + Add Admin
        </button>
      </div>

      <div className="space-y-4">
        {adminUsers.map((admin) => (
          <div
            key={admin.id}
            className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center font-bold">
                  {admin.name.charAt(admin.name.length - 1)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h5 className="font-bold">{admin.name}</h5>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      admin.role === 'Super Admin' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      admin.role === 'Admin' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                      'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {admin.role}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      admin.status === 'Active'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                    }`}>
                      {admin.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{admin.email}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <p className="text-xs text-gray-500">Last active: {admin.lastActive}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Permissions:</span>
                      <div className="flex flex-wrap gap-1">
                        {admin.permissions.slice(0, 2).map((perm, idx) => (
                          <span key={idx} className="text-xs bg-white/5 px-2 py-0.5 rounded">
                            {perm}
                          </span>
                        ))}
                        {admin.permissions.length > 2 && (
                          <span className="text-xs text-gray-500">+{admin.permissions.length - 2} more</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedAdmin(admin)}
                  className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold transition-all"
                >
                  View
                </button>
                <button
                  onClick={() => handleToggleStatus(admin.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    admin.status === 'Active'
                      ? 'bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400'
                      : 'bg-green-500/10 hover:bg-green-500/20 text-green-400'
                  }`}
                >
                  {admin.status === 'Active' ? 'Deactivate' : 'Activate'}
                </button>
                {admin.role !== 'Super Admin' && (
                  <button
                    onClick={() => handleDeleteAdmin(admin.id)}
                    className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-xs font-bold transition-all"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Admin Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Add Platform Admin</h3>
              <button
                onClick={() => setShowAddModal(false)}
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
                <label className="block text-sm font-bold mb-2">Name *</label>
                <input
                  type="text"
                  value={newAdmin.name}
                  onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
                  placeholder="Agent Nexus-Admin"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Email *</label>
                <input
                  type="email"
                  value={newAdmin.email}
                  onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
                  placeholder="admin@bitnexus.io"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Role *</label>
                <select
                  value={newAdmin.role}
                  onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value as 'Super Admin' | 'Admin' | 'Moderator' })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-white"
                >
                  <option value="Admin">Admin</option>
                  <option value="Super Admin">Super Admin</option>
                  <option value="Moderator">Moderator</option>
                </select>
              </div>

              {newAdmin.role !== 'Super Admin' && (
                <div>
                  <label className="block text-sm font-bold mb-2">Permissions</label>
                  <div className="space-y-2">
                    {availablePermissions.filter(p => p !== 'All Permissions').map((permission) => (
                      <label key={permission} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl cursor-pointer hover:bg-white/10 transition-all">
                        <input
                          type="checkbox"
                          checked={newAdmin.permissions.includes(permission)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setNewAdmin({ ...newAdmin, permissions: [...newAdmin.permissions, permission] });
                            } else {
                              setNewAdmin({ ...newAdmin, permissions: newAdmin.permissions.filter(p => p !== permission) });
                            }
                          }}
                          className="w-4 h-4 rounded bg-white/5 border-white/10 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-sm">{permission}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleAddAdmin}
                  className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all"
                >
                  Add Admin User
                </button>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Admin Details Modal */}
      {selectedAdmin && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Admin Details</h3>
              <button
                onClick={() => setSelectedAdmin(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center font-bold text-xl">
                  {selectedAdmin.name.charAt(selectedAdmin.name.length - 1)}
                </div>
                <div>
                  <h4 className="text-xl font-bold">{selectedAdmin.name}</h4>
                  <p className="text-gray-400">{selectedAdmin.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Role</p>
                  <p className="font-bold">{selectedAdmin.role}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Status</p>
                  <p className={`font-bold ${selectedAdmin.status === 'Active' ? 'text-green-400' : 'text-gray-400'}`}>
                    {selectedAdmin.status}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold mb-2">Permissions</p>
                <div className="flex flex-wrap gap-2">
                  {selectedAdmin.permissions.map((perm, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-lg text-xs font-bold">
                      {perm}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-bold mb-2">Last Active</p>
                <p className="text-gray-400 text-sm">{selectedAdmin.lastActive}</p>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setSelectedAdmin(null)}
                  className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlatformAdminUsers;


