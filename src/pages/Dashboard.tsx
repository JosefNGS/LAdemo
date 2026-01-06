import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MetricCardData } from '../types';

const data = [
  { name: 'Mon', sales: 4000, nxc: 2400 },
  { name: 'Tue', sales: 3000, nxc: 1398 },
  { name: 'Wed', sales: 2000, nxc: 9800 },
  { name: 'Thu', sales: 2780, nxc: 3908 },
  { name: 'Fri', sales: 1890, nxc: 4800 },
  { name: 'Sat', sales: 2390, nxc: 3800 },
  { name: 'Sun', sales: 3490, nxc: 4300 },
];

const metrics: MetricCardData[] = [
  { label: 'Daily ROI Target', value: '~1.2%', trend: 0.3, type: 'percent' },
  { label: 'Total Earnings', value: '$14,210.00', trend: 15.2, type: 'currency' },
  { label: 'Affiliate Clicks', value: '52,810', trend: 8.4, type: 'count' },
  { label: 'Conversion Rate', value: '2.4%', trend: 1.1, type: 'percent' },
];

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Due Diligence', 'Team Builder', 'My Products', 'Tools'];

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h2 className="text-3xl font-bold font-display">Command Center</h2>
           <p className="text-gray-500 text-sm">Welcome back, Agent Nexus-77.</p>
        </div>
        <div className="flex gap-2 bg-white/5 p-1 rounded-2xl border border-white/5">
           {tabs.map(t => (
             <button
               key={t}
               onClick={() => setActiveTab(t)}
               className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === t ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-gray-200'}`}
             >
               {t}
             </button>
           ))}
        </div>
      </div>

      {activeTab === 'Overview' && (
        <>
          {/* Financial Freedom Progress Bar */}
          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold font-display mb-1">Financial Freedom Progress</h3>
                <p className="text-gray-500 text-sm">Target: $5,000/month passive income</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-400">$1,184</p>
                <p className="text-xs text-gray-500">Current monthly income</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-400">Progress to Financial Freedom</span>
                <span className="font-bold text-cyan-400">23.7%</span>
              </div>
              <div className="w-full h-6 bg-gray-800 rounded-full overflow-hidden border border-white/5 p-1">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 via-cyan-500 to-purple-600 rounded-full shadow-lg shadow-green-500/30 transition-all duration-1000"
                  style={{ width: '23.7%' }}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs text-gray-500 mb-1">Estimated Time</p>
                <p className="text-sm font-bold text-cyan-400">~16 months</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Monthly Goal</p>
                <p className="text-sm font-bold">$5,000</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Remaining</p>
                <p className="text-sm font-bold text-purple-400">$3,816</p>
              </div>
            </div>
          </div>

          {/* Income Streams Widget */}
          <div className="glass-card p-8 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-bold mb-6">Income Streams Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-sm font-medium text-gray-400 mb-2">Affiliate Commissions</p>
                <p className="text-3xl font-bold text-purple-400 mb-2">$892</p>
                <p className="text-sm text-gray-500">75% of income</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-sm font-medium text-gray-400 mb-2">MEV/XAB Bot Returns</p>
                <p className="text-3xl font-bold text-cyan-400 mb-2">$234</p>
                <p className="text-sm text-gray-500">20% of income</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-sm font-medium text-gray-400 mb-2">Sub-Affiliate Network</p>
                <p className="text-3xl font-bold text-green-400 mb-2">$58</p>
                <p className="text-sm text-gray-500">5% of income</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-green-500/30 bg-green-500/5">
                <p className="text-sm font-medium text-gray-400 mb-2">Passive Income %</p>
                <p className="text-3xl font-bold text-green-400 mb-2">25%</p>
                <p className="text-sm text-green-400 font-medium">$292/month</p>
              </div>
            </div>
            <div className="p-5 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
              <p className="text-sm text-cyan-400 font-bold mb-2">💡 Goal: Reach 50% Passive Income</p>
              <p className="text-sm text-gray-400">Focus on MEV and XAB bot staking and building your network for more passive earnings</p>
            </div>
          </div>

          {/* Quick Actions Section */}
          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
            <p className="text-gray-500 text-sm mb-4">Daily checklist to boost your earnings</p>
            <div className="space-y-3">
              {[
                { id: '1', task: 'Share 1 product link on social media', completed: true },
                { id: '2', task: 'Follow up with 3 warm leads', completed: false },
                { id: '3', task: 'Post content using Content Generator', completed: false },
                { id: '4', task: 'Check today\'s earnings and goals', completed: true },
                { id: '5', task: 'Engage with 2 potential referrals', completed: false },
              ].map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => {}}
                    className="w-5 h-5 rounded accent-purple-600 cursor-pointer"
                  />
                  <span className={`flex-1 text-sm ${item.completed ? 'line-through text-gray-500' : 'text-gray-300'}`}>
                    {item.task}
                  </span>
                  {!item.completed && (
                    <button className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-lg text-xs font-bold hover:bg-purple-600/30 transition-all">
                      Do Now
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-gray-500">Progress: 2/5 completed</span>
              <button className="text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors">
                View All Actions →
              </button>
            </div>
          </div>

          {/* Network Health Summary */}
          <div className="glass-card p-6 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-purple-500/5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold font-display">Your Network Status</h3>
              <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                <span className="text-xs font-bold text-green-400">Thriving</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Direct Referrals</p>
                <p className="text-xl font-bold text-cyan-400">14</p>
                <p className="text-xs text-green-400 mt-1">+3 this month</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Sub-Affiliates</p>
                <p className="text-xl font-bold text-purple-400">128</p>
                <p className="text-xs text-green-400 mt-1">+18 this month</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Network Revenue</p>
                <p className="text-xl font-bold text-green-400">$2,450</p>
                <p className="text-xs text-green-400 mt-1">+22% growth</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Your Commission</p>
                <p className="text-xl font-bold text-yellow-400">$245</p>
                <p className="text-xs text-gray-500 mt-1">10% from network</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Network Activity Score</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-2 bg-black/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                  <span className="text-cyan-400 font-bold">87/100</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Your network is performing in the top 15% globally. Keep up the momentum!</p>
            </div>
          </div>

          {/* Financial Health Score */}
          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold font-display">Financial Health Score</h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-green-400">Excellent</span>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl font-bold text-green-400">87/100</span>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className={`w-8 h-2 rounded ${i <= 4 ? 'bg-green-400' : 'bg-gray-700'}`}></div>
                  ))}
                </div>
              </div>
              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-gradient-to-r from-green-500 via-cyan-500 to-purple-600 transition-all duration-1000" style={{ width: '87%' }}></div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Income Diversification</p>
                <p className="text-lg font-bold text-cyan-400">8.5/10</p>
                <p className="text-xs text-green-400 mt-1">✓ Good</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Earnings Consistency</p>
                <p className="text-lg font-bold text-green-400">9.0/10</p>
                <p className="text-xs text-green-400 mt-1">✓ Excellent</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Network Growth</p>
                <p className="text-lg font-bold text-purple-400">8.0/10</p>
                <p className="text-xs text-green-400 mt-1">✓ Good</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Portfolio Balance</p>
                <p className="text-lg font-bold text-yellow-400">8.5/10</p>
                <p className="text-xs text-green-400 mt-1">✓ Good</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
              <p className="text-xs font-bold text-cyan-400 mb-1">💡 How to Improve</p>
              <p className="text-xs text-gray-400">Focus on building more passive income streams. Increase MEV and XAB bot staking to reach 50% passive income target.</p>
            </div>
          </div>

          {/* Daily Tip */}
          <div className="glass-card p-4 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
            <div className="flex items-start gap-3">
              <div className="text-2xl">💡</div>
              <div className="flex-1">
                <p className="text-xs font-bold text-cyan-400 mb-1">Today's Tip</p>
                <p className="text-sm text-gray-300">
                  Focus on products with recurring commissions - they build sustainable passive income over time. Check the Marketplace for products tagged "Recurring Income".
                </p>
              </div>
            </div>
          </div>

          {/* Hero Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] p-8 border border-purple-500/20 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[100px] -mr-32 -mt-32" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Affiliate Link Revenue</span>
                <h2 className="text-5xl md:text-6xl font-bold font-display mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                  $14,210.00 <span className="text-2xl text-green-400/70">USD</span>
                </h2>
                <p className="text-gray-500 mt-2">Total earnings from affiliate links <span className="text-green-400 ml-2">(+15.2%)</span></p>
              </div>
              <div className="flex gap-3">
                 <button className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl border border-white/10 backdrop-blur-md transition-all font-semibold">
                   View Links
                 </button>
                 <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl transition-all font-semibold shadow-lg shadow-purple-900/40">
                   Generate Link
                 </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((m, i) => (
              <div key={i} className="glass-card p-6 rounded-3xl border border-white/5 group hover:border-purple-500/30 transition-colors">
                <p className="text-gray-400 text-sm font-medium">{m.label}</p>
                <div className="flex items-end justify-between mt-2">
                  <h3 className="text-2xl font-bold font-display group-hover:text-purple-400 transition-colors">{m.value}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${m.trend > 0 ? 'bg-green-500/10 text-green-400' : 'bg-gray-500/10 text-gray-400'}`}>
                    +{m.trend}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Network Performance Section */}
          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold font-display">Network Performance</h3>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-green-400">Excellent Health</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-xs text-gray-500 mb-1">Network Size</p>
                <p className="text-2xl font-bold text-cyan-400">142</p>
                <p className="text-xs text-green-400 mt-1">+12 this month</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-xs text-gray-500 mb-1">Active Members</p>
                <p className="text-2xl font-bold text-purple-400">89</p>
                <p className="text-xs text-gray-500 mt-1">62.7% active rate</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-xs text-gray-500 mb-1">Network Earnings</p>
                <p className="text-2xl font-bold text-green-400">$2,450</p>
                <p className="text-xs text-gray-500 mt-1">This month</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-green-500/30 bg-green-500/5">
                <p className="text-xs text-gray-500 mb-1">Network Score</p>
                <p className="text-2xl font-bold text-green-400">8.7/10</p>
                <p className="text-xs text-green-400 mt-1">Top 15%</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-cyan-400">Growth Rate</span>
                  <span className="text-sm font-bold text-cyan-400">+9.2%</span>
                </div>
                <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <p className="text-xs text-gray-400 mt-2">Faster than 78% of networks</p>
              </div>
              <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-purple-400">Engagement</span>
                  <span className="text-sm font-bold text-purple-400">High</span>
                </div>
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="flex-1 h-2 bg-purple-400 rounded"></div>
                  ))}
                </div>
                <p className="text-xs text-gray-400">5/5 engagement score</p>
              </div>
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-green-400">Retention</span>
                  <span className="text-sm font-bold text-green-400">94%</span>
                </div>
                <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
                  <div className="h-full bg-green-400 rounded-full" style={{ width: '94%' }}></div>
                </div>
                <p className="text-xs text-gray-400">Excellent member retention</p>
              </div>
            </div>
          </div>

          {/* Leaderboard Section */}
          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold font-display">Global Leaderboard</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-purple-600 text-white rounded-lg text-xs font-bold">Earnings</button>
                <button className="px-3 py-1 bg-white/5 text-gray-400 rounded-lg text-xs font-bold hover:bg-white/10">Network</button>
                <button className="px-3 py-1 bg-white/5 text-gray-400 rounded-lg text-xs font-bold hover:bg-white/10">Growth</button>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { rank: 1, name: 'Agent Nexus-15', earnings: '$15,800', network: 342, tier: 'Platinum', badge: '🥇', change: 0 },
                { rank: 2, name: 'Agent Nexus-42', earnings: '$10,240', network: 142, tier: 'Gold', badge: '🥈', change: 0 },
                { rank: 3, name: 'Agent Nexus-88', earnings: '$8,920', network: 98, tier: 'Gold', badge: '🥉', change: +1 },
                { rank: 4, name: 'Agent Nexus-33', earnings: '$7,450', network: 156, tier: 'Gold', badge: '', change: -1 },
                { rank: 5, name: 'Agent Nexus-91', earnings: '$6,200', network: 87, tier: 'Silver', badge: '', change: +2 },
                { rank: 27, name: 'Agent Nexus-77', earnings: '$2,450', network: 42, tier: 'Silver', badge: '', change: +3, isYou: true },
              ].map((user) => (
                <div 
                  key={user.rank} 
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                    user.isYou 
                      ? 'bg-purple-500/10 border-purple-500/30 shadow-lg shadow-purple-500/20' 
                      : 'bg-white/5 border-white/5 hover:border-purple-500/20'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-[60px]">
                    {user.badge ? (
                      <span className="text-2xl">{user.badge}</span>
                    ) : (
                      <span className={`text-lg font-bold ${user.rank <= 10 ? 'text-purple-400' : 'text-gray-500'}`}>
                        #{user.rank}
                      </span>
                    )}
                    {user.change !== 0 && (
                      <span className={`text-xs font-bold ${user.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {user.change > 0 ? '↑' : '↓'} {Math.abs(user.change)}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold">{user.name}</span>
                      {user.isYou && (
                        <span className="px-2 py-0.5 bg-purple-600 text-white text-[10px] font-bold rounded">YOU</span>
                      )}
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        user.tier === 'Platinum' ? 'bg-purple-500/20 text-purple-400' :
                        user.tier === 'Gold' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {user.tier}
                      </span>
                    </div>
                    <div className="flex gap-4 text-xs text-gray-400">
                      <span>Network: <span className="text-cyan-400 font-bold">{user.network}</span></span>
                      <span>Earnings: <span className="text-green-400 font-bold">{user.earnings}/mo</span></span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-sm">
                      {user.name.split(' ')[1]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
              <p className="text-xs text-gray-500">Your rank improved by 3 positions this week!</p>
              <button className="text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors">
                View Full Leaderboard →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 glass-card p-6 rounded-3xl">
              <h3 className="text-xl font-bold mb-6">Network Growth</h3>
              <div className="h-64 w-full" style={{ minHeight: '256px', minWidth: '0' }}>
                <ResponsiveContainer width="100%" height="100%" minHeight={256} minWidth={0}>
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorNxc" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                    <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis hide />
                    <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '12px' }} />
                    <Area type="monotone" dataKey="nxc" stroke="#7c3aed" fillOpacity={1} fill="url(#colorNxc)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="glass-card p-6 rounded-3xl">
              <h3 className="text-xl font-bold mb-6">Company Intro</h3>
              <div className="aspect-video bg-black/50 rounded-2xl flex items-center justify-center border border-white/5 relative group cursor-pointer overflow-hidden">
                 <img src="https://picsum.photos/seed/presentation/400/225" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform" alt="Video Thumb" />
                 <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 z-10 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white fill-white ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                 </div>
              </div>
              <p className="mt-4 text-sm text-gray-400 text-center italic">"BitNexus: Revolutionizing Affiliate Automation"</p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'Due Diligence' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="glass-card p-8 rounded-3xl space-y-4">
              <h3 className="text-2xl font-bold">Project Audits</h3>
              <p className="text-gray-400">View detailed reports from third-party security firms regarding our smart contracts and MEV/XAB bot logic.</p>
              <div className="space-y-2">
                 {['CertiK Audit 2024', 'OpenZeppelin Report', 'KPMG Fintech Review'].map(d => (
                   <div key={d} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer">
                      <span className="font-medium">{d}</span>
                      <span className="text-cyan-400 text-xs font-bold">DOWNLOAD PDF</span>
                   </div>
                 ))}
              </div>
           </div>
           <div className="glass-card p-8 rounded-3xl space-y-4">
              <h3 className="text-2xl font-bold">Transparency Ledger</h3>
              <div className="p-4 bg-black/40 rounded-2xl font-mono text-xs text-green-400 overflow-hidden leading-relaxed">
                 [BLOCK_SYNC] 0x82...12A verified at 14:02:11<br/>
                 [BOT_PROFIT] +0.124 NXC added to Liquidity Pool<br/>
                 [SYSTEM] Integrity check PASSED (99.98%)<br/>
                 [AUDIT] Continuous monitoring active...
              </div>
              <button className="w-full py-4 bg-white/5 rounded-2xl font-bold hover:bg-white/10 transition-colors">View On-Chain Ledger</button>
           </div>
        </div>
      )}

      {activeTab === 'Team Builder' && (
        <div className="glass-card p-8 rounded-3xl">
           <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold">Priority Prospects</h3>
              <button className="bg-purple-600 px-4 py-2 rounded-xl text-sm font-bold">+ Add Contact</button>
           </div>
           <div className="space-y-4">
              {[
                { name: 'Sarah Miller', score: '92/100', status: 'Warm' },
                { name: 'James Wilson', score: '88/100', status: 'Follow Up' },
                { name: 'Elena Korova', score: '74/100', status: 'Cold' },
                { name: 'Mike Thompson', score: '61/100', status: 'New' },
              ].map(c => (
                <div key={c.name} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                   <input type="checkbox" className="w-5 h-5 rounded accent-purple-600 cursor-pointer" />
                   <div className="flex-1 flex items-center justify-between">
                      <div>
                        <p className="font-bold">{c.name}</p>
                        <p className="text-xs text-gray-500">Contact Score: {c.score}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${c.status === 'Warm' ? 'bg-orange-500/20 text-orange-400' : 'bg-blue-500/20 text-blue-400'}`}>
                        {c.status}
                      </span>
                   </div>
                </div>
              ))}
           </div>
        </div>
      )}


      {activeTab === 'My Products' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <div className="glass-card p-6 rounded-3xl border-dashed border-2 border-white/10 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/5 transition-all min-h-[200px]">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                 <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
              </div>
              <p className="font-bold">Submit New Product</p>
              <p className="text-xs text-gray-500 mt-1">NXC Listing Fee: 25 Tokens</p>
           </div>
           <div className="glass-card p-6 rounded-3xl border border-white/5 relative">
              <span className="absolute top-4 right-4 px-2 py-1 bg-green-500/10 text-green-400 border border-green-500/20 text-[10px] font-bold rounded">ACTIVE</span>
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4">
                 <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              </div>
              <h4 className="font-bold">AI Copywriter Pro</h4>
              <p className="text-xs text-gray-500 mt-1">2,412 Sales • $12.4k Generated</p>
              <div className="mt-4 pt-4 border-t border-white/5 flex gap-2">
                 <button className="flex-1 py-2 bg-white/5 rounded-lg text-xs font-bold">Edit</button>
                 <button className="flex-1 py-2 bg-red-500/10 text-red-400 rounded-lg text-xs font-bold">Delist</button>
              </div>
           </div>
        </div>
      )}

      {activeTab === 'Tools' && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="mb-6">
            <h3 className="text-2xl font-bold font-display mb-2">Tools & Utilities</h3>
            <p className="text-gray-500 text-sm">Powerful tools to help you grow your affiliate business</p>
          </div>
          
          {/* Link Shortener */}
          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Link Shortener</h3>
                <p className="text-xs text-gray-500">Create short, trackable affiliate links</p>
              </div>
            </div>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Paste your affiliate link here..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-sm"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Custom slug (optional)"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-sm"
                />
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all">
                  Shorten
                </button>
              </div>
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl hidden" id="short-link-result">
                <p className="text-xs text-gray-500 mb-1">Short Link:</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 px-3 py-2 bg-black/40 rounded-lg text-green-400 font-mono text-sm">bitnex.us/abc123</code>
                  <button className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-xs font-bold hover:bg-green-500/30 transition-all">
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code Generator */}
          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-600/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">QR Code Generator</h3>
                <p className="text-xs text-gray-500">Generate QR codes for your affiliate links</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Enter URL or affiliate link"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 text-sm"
                />
                <button className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 rounded-xl font-bold transition-all">
                  Generate QR Code
                </button>
              </div>
              <div className="flex items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500">QR Code Preview</p>
                </div>
              </div>
            </div>
          </div>

          {/* Commission Calculator */}
          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Commission Calculator</h3>
                <p className="text-xs text-gray-500">Calculate your earnings from sales</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-bold text-gray-400 mb-2 block">Product Price ($)</label>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-green-500/50 text-lg font-bold"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-400 mb-2 block">Commission Rate (%)</label>
                  <input
                    type="number"
                    placeholder="10"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-green-500/50 text-lg font-bold"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-400 mb-2 block">Number of Sales</label>
                  <input
                    type="number"
                    placeholder="1"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-green-500/50 text-lg font-bold"
                  />
                </div>
              </div>
              <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
                <p className="text-xs text-gray-500 mb-2">Your Commission</p>
                <p className="text-4xl font-bold text-green-400 mb-4">$0.00</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Revenue:</span>
                    <span className="font-bold">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Commission:</span>
                    <span className="font-bold text-green-400">$0.00</span>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monthly (10 sales):</span>
                      <span className="font-bold text-cyan-400">$0.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Link Tracking */}
          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Link Performance Tracker</h3>
                <p className="text-xs text-gray-500">Monitor clicks and conversions in real-time</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <code className="text-xs text-cyan-400 font-mono">bitnex.us/abc123</code>
                    <span className="px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 text-[10px] font-bold rounded">ACTIVE</span>
                  </div>
                  <button className="text-xs text-gray-400 hover:text-white transition-colors">View Details</button>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Clicks</p>
                    <p className="text-lg font-bold text-purple-400">1,234</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Conversions</p>
                    <p className="text-lg font-bold text-green-400">89</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Rate</p>
                    <p className="text-lg font-bold text-cyan-400">7.2%</p>
                  </div>
                </div>
              </div>
              <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all">
                + Add New Link to Track
              </button>
            </div>
          </div>

          {/* UTM Builder */}
          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-pink-600/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">UTM Parameter Builder</h3>
                <p className="text-xs text-gray-500">Add tracking parameters to your links</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-bold text-gray-400 mb-2 block">Base URL</label>
                <input
                  type="text"
                  placeholder="https://example.com/product"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-pink-500/50 text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-bold text-gray-400 mb-2 block">Source</label>
                  <input
                    type="text"
                    placeholder="facebook"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-pink-500/50 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-400 mb-2 block">Medium</label>
                  <input
                    type="text"
                    placeholder="social"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-pink-500/50 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-400 mb-2 block">Campaign</label>
                  <input
                    type="text"
                    placeholder="summer-sale"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-pink-500/50 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-400 mb-2 block">Content</label>
                  <input
                    type="text"
                    placeholder="banner-ad"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-pink-500/50 text-sm"
                  />
                </div>
              </div>
              <button className="w-full py-3 bg-pink-600 hover:bg-pink-500 rounded-xl font-bold transition-all">
                Generate UTM Link
              </button>
              <div className="p-4 bg-black/40 rounded-xl border border-white/10 hidden" id="utm-result">
                <p className="text-xs text-gray-500 mb-2">Generated Link:</p>
                <code className="block px-3 py-2 bg-black/60 rounded-lg text-pink-400 font-mono text-xs break-all">
                  https://example.com/product?utm_source=facebook&utm_medium=social&utm_campaign=summer-sale&utm_content=banner-ad
                </code>
              </div>
            </div>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="glass-card p-4 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all text-center">
              <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                </svg>
              </div>
              <p className="text-xs font-bold">Bulk Link Creator</p>
            </button>
            <button className="glass-card p-4 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all text-center">
              <div className="w-10 h-10 bg-cyan-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <p className="text-xs font-bold">Export Reports</p>
            </button>
            <button className="glass-card p-4 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all text-center">
              <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <p className="text-xs font-bold">Revenue Forecast</p>
            </button>
            <button className="glass-card p-4 rounded-2xl border border-white/5 hover:border-yellow-500/30 transition-all text-center">
              <div className="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <p className="text-xs font-bold">A/B Test Links</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

