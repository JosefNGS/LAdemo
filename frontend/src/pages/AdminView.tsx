import React, { useState, useEffect } from 'react';
import AdminLoginModal from '../components/AdminLoginModal';
import { AppRoute } from '../types';
import { useNotifications } from '../contexts/NotificationContext';
import { teamProfiles } from '../data/teamProfiles';
import TaskChecklistView from './TaskChecklistView';
import Vetting from './Vetting';
import Users from './Users';
import Reports from './Reports';

interface AdminViewProps {
  setActiveRoute: (route: AppRoute) => void;
}

const AdminView: React.FC<AdminViewProps> = ({ setActiveRoute }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'vetting' | 'users' | 'reports' | 'tasks' | 'guide'>('tasks');
  const [selectedTeamMember, setSelectedTeamMember] = useState<string | null>(null);
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {teamProfiles.map((member) => {
                  const isJosef = member.id === 'josef';
                  return (
                    <div
                      key={member.id}
                      className="glass-card p-4 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all"
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
                      <div className="space-y-2 text-sm mb-3">
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
                      <button
                        onClick={() => {
                          setSelectedTeamMember(member.id);
                          setActiveTab('checklist' as any);
                        }}
                        className="w-full px-3 py-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-purple-400 rounded-lg text-sm font-medium transition-all"
                      >
                        View Task Checklist
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Task Checklist View */}
              {activeTab === 'checklist' && (
                <div className="mt-6">
                  <TaskChecklistView
                    teamMember={selectedTeamMember}
                    setActiveRoute={setActiveRoute}
                  />
                </div>
              )}

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
                      <li>• Supabase: <code className="bg-white/10 px-2 py-1 rounded">docs/Services/supabase/SERVICE_RULES.md</code></li>
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

