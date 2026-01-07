import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MetricCardData, AppRoute } from '../types';

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

interface DashboardProps {
  setActiveRoute?: (route: any) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setActiveRoute }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [showBulkLinkModal, setShowBulkLinkModal] = useState(false);
  const [showExportReportsModal, setShowExportReportsModal] = useState(false);
  const [showRevenueForecastModal, setShowRevenueForecastModal] = useState(false);
  const [showABTestModal, setShowABTestModal] = useState(false);
  const [showAuditModal, setShowAuditModal] = useState<string | null>(null);
  const [showTransparencyLedgerModal, setShowTransparencyLedgerModal] = useState(false);
  const [selectedIncomeStream, setSelectedIncomeStream] = useState<string | null>(null);
  const [selectedHealthMetric, setSelectedHealthMetric] = useState<string | null>(null);
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
  const [selectedNetworkMetric, setSelectedNetworkMetric] = useState<string | null>(null);
  const [selectedLeaderboardUser, setSelectedLeaderboardUser] = useState<string | null>(null);
  const [quickActions, setQuickActions] = useState([
    { id: '1', task: 'Share 1 product link on social media', completed: true },
    { id: '2', task: 'Follow up with 3 warm leads', completed: false },
    { id: '3', task: 'Post content using Content Generator', completed: false },
    { id: '4', task: 'Check today\'s earnings and goals', completed: true },
    { id: '5', task: 'Engage with 2 potential referrals', completed: false },
  ]);
  const [showAllActionsModal, setShowAllActionsModal] = useState(false);
  const [showAffiliateRevenueModal, setShowAffiliateRevenueModal] = useState(false);

  const tabs = ['Overview', 'Due Diligence', 'Tools'];

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h2 className="text-3xl font-bold font-display">Command Center</h2>
           <p className="text-gray-500 text-sm">Welcome back Commander, Agent Nexus-77.</p>
        </div>
        <div className="flex items-center gap-4">
          {/* AI Credits Balance */}
          <div className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-xl">
            <p className="text-xs text-gray-400 mb-0.5">AI Credits Balance</p>
            <p className="text-lg font-bold text-cyan-400">150 NXC</p>
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
              <div 
                onClick={() => setSelectedIncomeStream('affiliate')}
                className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer"
              >
                <p className="text-sm font-medium text-gray-400 mb-2">Affiliate Commissions</p>
                <p className="text-3xl font-bold text-purple-400 mb-2">$892</p>
                <p className="text-sm text-gray-500">75% of income</p>
              </div>
              <div 
                onClick={() => setSelectedIncomeStream('bot')}
                className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer"
              >
                <p className="text-sm font-medium text-gray-400 mb-2">MEV/XAB Bot Returns</p>
                <p className="text-3xl font-bold text-cyan-400 mb-2">$234</p>
                <p className="text-sm text-gray-500">20% of income</p>
              </div>
              <div 
                onClick={() => setSelectedIncomeStream('network')}
                className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all cursor-pointer"
              >
                <p className="text-sm font-medium text-gray-400 mb-2">Sub-Affiliate Network</p>
                <p className="text-3xl font-bold text-green-400 mb-2">$58</p>
                <p className="text-sm text-gray-500">5% of income</p>
              </div>
              <div 
                onClick={() => setSelectedIncomeStream('passive')}
                className="p-6 bg-white/5 rounded-2xl border border-green-500/30 bg-green-500/5 hover:border-green-400/50 transition-all cursor-pointer"
              >
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
              {quickActions.map((item) => {
                const handleActionClick = () => {
                  switch(item.id) {
                    case '1': // Share product link
                      if (setActiveRoute) setActiveRoute(AppRoute.MARKETPLACE);
                      break;
                    case '2': // Follow up with warm leads
                      if (setActiveRoute) setActiveRoute(AppRoute.FRIENDS);
                      break;
                    case '3': // Post content using Content Generator
                      if (setActiveRoute) setActiveRoute(AppRoute.CONTENT_GENERATOR);
                      break;
                    case '4': // Check earnings and goals
                      // Already on dashboard, just scroll to top or show earnings section
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      break;
                    case '5': // Engage with potential referrals
                      if (setActiveRoute) setActiveRoute(AppRoute.ALLIANCE);
                      break;
                  }
                };

                return (
                  <div 
                    key={item.id} 
                    onClick={handleActionClick}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={(e) => {
                        e.stopPropagation();
                        setQuickActions(prev => prev.map(action => 
                          action.id === item.id ? { ...action, completed: !action.completed } : action
                        ));
                      }}
                      className="w-5 h-5 rounded accent-purple-600 cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <span className={`flex-1 text-sm ${item.completed ? 'line-through text-gray-500' : 'text-gray-300'}`}>
                      {item.task}
                    </span>
                    {!item.completed && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleActionClick();
                        }}
                        className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-lg text-xs font-bold hover:bg-purple-600/30 transition-all"
                      >
                        Do Now
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-gray-500">
                Progress: {quickActions.filter(a => a.completed).length}/{quickActions.length} completed
              </span>
              <button 
                onClick={() => setShowAllActionsModal(true)}
                className="text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors"
              >
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
              <div 
                onClick={() => setSelectedHealthMetric('diversification')}
                className="p-3 bg-white/5 rounded-xl hover:bg-white/10 border border-transparent hover:border-cyan-500/30 transition-all cursor-pointer"
              >
                <p className="text-xs text-gray-500 mb-1">Income Diversification</p>
                <p className="text-lg font-bold text-cyan-400">8.5/10</p>
                <p className="text-xs text-green-400 mt-1">✓ Good</p>
              </div>
              <div 
                onClick={() => setSelectedHealthMetric('consistency')}
                className="p-3 bg-white/5 rounded-xl hover:bg-white/10 border border-transparent hover:border-green-500/30 transition-all cursor-pointer"
              >
                <p className="text-xs text-gray-500 mb-1">Earnings Consistency</p>
                <p className="text-lg font-bold text-green-400">9.0/10</p>
                <p className="text-xs text-green-400 mt-1">✓ Excellent</p>
              </div>
              <div 
                onClick={() => setSelectedHealthMetric('growth')}
                className="p-3 bg-white/5 rounded-xl hover:bg-white/10 border border-transparent hover:border-purple-500/30 transition-all cursor-pointer"
              >
                <p className="text-xs text-gray-500 mb-1">Network Growth</p>
                <p className="text-lg font-bold text-purple-400">8.0/10</p>
                <p className="text-xs text-green-400 mt-1">✓ Good</p>
              </div>
              <div 
                onClick={() => setSelectedHealthMetric('balance')}
                className="p-3 bg-white/5 rounded-xl hover:bg-white/10 border border-transparent hover:border-yellow-500/30 transition-all cursor-pointer"
              >
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
          <div 
            onClick={() => setShowAffiliateRevenueModal(true)}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] p-8 border border-purple-500/20 shadow-2xl hover:border-purple-400/40 transition-all cursor-pointer"
          >
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
                 <button 
                   onClick={(e) => {
                     e.stopPropagation();
                     if (setActiveRoute) setActiveRoute(AppRoute.AFFILIATE);
                   }}
                   className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl border border-white/10 backdrop-blur-md transition-all font-semibold"
                 >
                   View Links
                 </button>
                 <button 
                   onClick={(e) => {
                     e.stopPropagation();
                     if (setActiveRoute) setActiveRoute(AppRoute.MARKETPLACE);
                   }}
                   className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl transition-all font-semibold shadow-lg shadow-purple-900/40"
                 >
                   Generate Link
                 </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((m, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedMetric(m.label)}
                className="glass-card p-6 rounded-3xl border border-white/5 group hover:border-purple-500/30 transition-colors cursor-pointer"
              >
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
              <div 
                onClick={() => setSelectedNetworkMetric('size')}
                className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer"
              >
                <p className="text-xs text-gray-500 mb-1">Network Size</p>
                <p className="text-2xl font-bold text-cyan-400">142</p>
                <p className="text-xs text-green-400 mt-1">+12 this month</p>
              </div>
              <div 
                onClick={() => setSelectedNetworkMetric('active')}
                className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer"
              >
                <p className="text-xs text-gray-500 mb-1">Active Members</p>
                <p className="text-2xl font-bold text-purple-400">89</p>
                <p className="text-xs text-gray-500 mt-1">62.7% active rate</p>
              </div>
              <div 
                onClick={() => setSelectedNetworkMetric('earnings')}
                className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-green-500/30 transition-all cursor-pointer"
              >
                <p className="text-xs text-gray-500 mb-1">Network Earnings</p>
                <p className="text-2xl font-bold text-green-400">$2,450</p>
                <p className="text-xs text-gray-500 mt-1">This month</p>
              </div>
              <div 
                onClick={() => setSelectedNetworkMetric('score')}
                className="p-4 bg-white/5 rounded-xl border border-green-500/30 bg-green-500/5 hover:border-green-400/50 transition-all cursor-pointer"
              >
                <p className="text-xs text-gray-500 mb-1">Network Score</p>
                <p className="text-2xl font-bold text-green-400">8.7/10</p>
                <p className="text-xs text-green-400 mt-1">Top 15%</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div 
                onClick={() => setSelectedNetworkMetric('growth')}
                className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl hover:border-cyan-400/40 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-cyan-400">Growth Rate</span>
                  <span className="text-sm font-bold text-cyan-400">+9.2%</span>
                </div>
                <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <p className="text-xs text-gray-400 mt-2">Faster than 78% of networks</p>
              </div>
              <div 
                onClick={() => setSelectedNetworkMetric('engagement')}
                className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl hover:border-purple-400/40 transition-all cursor-pointer"
              >
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
              <div 
                onClick={() => setSelectedNetworkMetric('retention')}
                className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl hover:border-green-400/40 transition-all cursor-pointer"
              >
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
                  onClick={() => setSelectedLeaderboardUser(user.name)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all cursor-pointer ${
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
                   <div 
                     key={d} 
                     onClick={() => setShowAuditModal(d)}
                     className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer"
                   >
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
              <button 
                onClick={() => setShowTransparencyLedgerModal(true)}
                className="w-full py-4 bg-white/5 rounded-2xl font-bold hover:bg-white/10 transition-colors"
              >
                View On-Chain Ledger
              </button>
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
            <button 
              onClick={() => setShowBulkLinkModal(true)}
              className="glass-card p-4 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all text-center"
            >
              <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                </svg>
              </div>
              <p className="text-xs font-bold">Bulk Link Creator</p>
            </button>
            <button 
              onClick={() => setShowExportReportsModal(true)}
              className="glass-card p-4 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all text-center"
            >
              <div className="w-10 h-10 bg-cyan-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <p className="text-xs font-bold">Export Reports</p>
            </button>
            <button 
              onClick={() => setShowRevenueForecastModal(true)}
              className="glass-card p-4 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all text-center"
            >
              <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <p className="text-xs font-bold">Revenue Forecast</p>
            </button>
            <button 
              onClick={() => setShowABTestModal(true)}
              className="glass-card p-4 rounded-2xl border border-white/5 hover:border-yellow-500/30 transition-all text-center"
            >
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

      {/* Bulk Link Creator Modal */}
      {showBulkLinkModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowBulkLinkModal(false)} />
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-white/5 z-10">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-display">Bulk Link Creator</h2>
                <button
                  onClick={() => setShowBulkLinkModal(false)}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                    Select Products
                  </label>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {['NXC Trading Masterclass', 'MEV Bot Pro License', 'XAB Bot Pro License', 'Blockchain Marketing Kit', 'Nexus Private Node'].map((product, i) => (
                      <label key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/5" />
                        <span className="text-sm font-bold">{product}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                    UTM Parameters (Optional)
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="utm_source"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500/50 text-white placeholder:text-gray-500 text-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="utm_medium"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500/50 text-white placeholder:text-gray-500 text-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="utm_campaign"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500/50 text-white placeholder:text-gray-500 text-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="utm_content"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500/50 text-white placeholder:text-gray-500 text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                  <p className="text-xs text-purple-400 font-bold mb-2">💡 Preview</p>
                  <p className="text-xs text-gray-400 font-mono break-all">
                    nexus.io/ref/7781/product?utm_source=...&utm_medium=...
                  </p>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setShowBulkLinkModal(false)}
                    className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      alert('Bulk links generated! Check your Affiliate Manager.');
                      setShowBulkLinkModal(false);
                    }}
                    className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl font-bold hover:scale-[1.02] transition-transform"
                  >
                    Generate Links
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Export Reports Modal */}
      {showExportReportsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowExportReportsModal(false)} />
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-white/5 z-10">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-display">Export Reports</h2>
                <button
                  onClick={() => setShowExportReportsModal(false)}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                    Report Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Performance Summary', 'Earnings Report', 'Network Analytics', 'Product Performance', 'Tax Report', 'Full Export'].map((type, i) => (
                      <button
                        key={i}
                        className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-left transition-all"
                      >
                        <p className="text-sm font-bold mb-1">{type}</p>
                        <p className="text-xs text-gray-500">CSV, PDF, Excel</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                    Date Range
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-500 mb-1 block">From</label>
                      <input
                        type="date"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500/50 text-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 mb-1 block">To</label>
                      <input
                        type="date"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500/50 text-white text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                    Export Format
                  </label>
                  <div className="flex gap-3">
                    {['CSV', 'PDF', 'Excel'].map((format) => (
                      <button
                        key={format}
                        className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                      >
                        {format}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setShowExportReportsModal(false)}
                    className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      alert('Report exported successfully!');
                      setShowExportReportsModal(false);
                    }}
                    className="flex-1 py-3 bg-gradient-to-r from-cyan-600 to-purple-500 rounded-xl font-bold hover:scale-[1.02] transition-transform"
                  >
                    Export Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Revenue Forecast Modal */}
      {showRevenueForecastModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowRevenueForecastModal(false)} />
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-white/5 z-10">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-display">Revenue Forecast</h2>
                <button
                  onClick={() => setShowRevenueForecastModal(false)}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">Next Month</p>
                    <p className="text-2xl font-bold text-green-400">$1,350</p>
                    <p className="text-xs text-green-400 mt-1">+14% projected</p>
                  </div>
                  <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">3 Months</p>
                    <p className="text-2xl font-bold text-purple-400">$1,680</p>
                    <p className="text-xs text-green-400 mt-1">+42% projected</p>
                  </div>
                  <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">6 Months</p>
                    <p className="text-2xl font-bold text-cyan-400">$2,240</p>
                    <p className="text-xs text-green-400 mt-1">+89% projected</p>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                    Forecast Parameters
                  </label>
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs text-gray-500 mb-1 block">Growth Rate (%)</label>
                      <input
                        type="number"
                        defaultValue="9.2"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500/50 text-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 mb-1 block">Network Growth Rate (%)</label>
                      <input
                        type="number"
                        defaultValue="9.2"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500/50 text-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 mb-1 block">Average Commission (%)</label>
                      <input
                        type="number"
                        defaultValue="20"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500/50 text-white text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <p className="text-xs text-green-400 font-bold mb-2">📈 Forecast Insights</p>
                  <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
                    <li>Based on current performance trends</li>
                    <li>Assumes consistent network growth</li>
                    <li>Includes passive income from bot staking</li>
                    <li>Accounts for seasonal variations</li>
                  </ul>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setShowRevenueForecastModal(false)}
                    className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      alert('Forecast updated!');
                      setShowRevenueForecastModal(false);
                    }}
                    className="flex-1 py-3 bg-gradient-to-r from-green-600 to-cyan-500 rounded-xl font-bold hover:scale-[1.02] transition-transform"
                  >
                    Update Forecast
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* A/B Test Links Modal */}
      {showABTestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowABTestModal(false)} />
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-white/5 z-10">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-display">A/B Test Links</h2>
                <button
                  onClick={() => setShowABTestModal(false)}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                    Select Product
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500/50 text-white text-sm">
                    <option className="bg-gray-800">NXC Trading Masterclass</option>
                    <option className="bg-gray-800">MEV Bot Pro License</option>
                    <option className="bg-gray-800">XAB Bot Pro License</option>
                    <option className="bg-gray-800">Blockchain Marketing Kit</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                    Test Variations
                  </label>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-bold">Variant A</span>
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded text-xs font-bold">Control</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Link URL or UTM parameters"
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-gray-500 text-sm mb-2"
                        defaultValue="nexus.io/ref/7781/product"
                      />
                      <div className="flex gap-4 text-xs text-gray-500">
                        <span>Clicks: 1,240</span>
                        <span>Conversions: 28</span>
                        <span>Rate: 2.26%</span>
                      </div>
                    </div>

                    <div className="p-4 bg-white/5 border border-yellow-500/30 rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-bold">Variant B</span>
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded text-xs font-bold">Winning</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Link URL or UTM parameters"
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-gray-500 text-sm mb-2"
                        defaultValue="nexus.io/ref/7781/product?utm_source=test"
                      />
                      <div className="flex gap-4 text-xs text-gray-500">
                        <span>Clicks: 1,180</span>
                        <span>Conversions: 32</span>
                        <span className="text-green-400 font-bold">Rate: 2.71%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                    Test Settings
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                      <span className="text-sm font-bold">Traffic Split</span>
                      <span className="text-sm text-gray-400">50/50</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                      <span className="text-sm font-bold">Test Duration</span>
                      <span className="text-sm text-gray-400">7 days</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                      <span className="text-sm font-bold">Minimum Sample Size</span>
                      <span className="text-sm text-gray-400">1,000 clicks</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                  <p className="text-xs text-yellow-400 font-bold mb-2">⚡ Test Results</p>
                  <p className="text-xs text-gray-400">
                    Variant B is performing <span className="text-green-400 font-bold">+20% better</span> with 95% confidence. Consider making it the default.
                  </p>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setShowABTestModal(false)}
                    className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      alert('New A/B test created!');
                      setShowABTestModal(false);
                    }}
                    className="flex-1 py-3 bg-gradient-to-r from-yellow-600 to-orange-500 rounded-xl font-bold hover:scale-[1.02] transition-transform"
                  >
                    Create Test
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Audit Report Modals */}
      {showAuditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowAuditModal(null)} />
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-white/5 z-10">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold font-display">{showAuditModal}</h2>
                  <p className="text-gray-500 text-sm mt-1">
                    {showAuditModal === 'CertiK Audit 2024' && 'Smart Contract Security Audit'}
                    {showAuditModal === 'OpenZeppelin Report' && 'Security Review & Best Practices'}
                    {showAuditModal === 'KPMG Fintech Review' && 'Financial Compliance & Risk Assessment'}
                  </p>
                </div>
                <button
                  onClick={() => setShowAuditModal(null)}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                {/* Audit Summary */}
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-bold mb-4">Executive Summary</h3>
                  {showAuditModal === 'CertiK Audit 2024' && (
                    <div className="space-y-3 text-sm text-gray-300">
                      <p>CertiK conducted a comprehensive security audit of BitNexus smart contracts, focusing on:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Smart contract logic and implementation</li>
                        <li>MEV bot trading algorithms</li>
                        <li>XAB bot staking mechanisms</li>
                        <li>Token distribution and affiliate reward systems</li>
                        <li>Access control and permission management</li>
                      </ul>
                      <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                        <p className="text-green-400 font-bold mb-1">✅ Audit Status: PASSED</p>
                        <p className="text-xs text-gray-400">No critical vulnerabilities found. All identified issues have been resolved.</p>
                      </div>
                    </div>
                  )}
                  {showAuditModal === 'OpenZeppelin Report' && (
                    <div className="space-y-3 text-sm text-gray-300">
                      <p>OpenZeppelin performed a security review of BitNexus smart contracts, evaluating:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Code quality and best practices</li>
                        <li>Reentrancy vulnerabilities</li>
                        <li>Access control patterns</li>
                        <li>Gas optimization opportunities</li>
                        <li>Upgradeability patterns</li>
                      </ul>
                      <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                        <p className="text-green-400 font-bold mb-1">✅ Review Status: APPROVED</p>
                        <p className="text-xs text-gray-400">Contracts follow industry best practices and security standards.</p>
                      </div>
                    </div>
                  )}
                  {showAuditModal === 'KPMG Fintech Review' && (
                    <div className="space-y-3 text-sm text-gray-300">
                      <p>KPMG conducted a comprehensive fintech compliance review covering:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Regulatory compliance framework</li>
                        <li>AML/KYC procedures</li>
                        <li>Financial reporting standards</li>
                        <li>Risk management practices</li>
                        <li>Data protection and privacy</li>
                      </ul>
                      <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                        <p className="text-green-400 font-bold mb-1">✅ Review Status: COMPLIANT</p>
                        <p className="text-xs text-gray-400">Platform meets all regulatory requirements and industry standards.</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Key Findings */}
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-bold mb-4">Key Findings</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl">
                      <p className="text-sm font-bold text-green-400 mb-1">✅ Strengths</p>
                      <p className="text-xs text-gray-400">
                        {showAuditModal === 'CertiK Audit 2024' && 'Robust security architecture, comprehensive access controls, and well-tested smart contract logic.'}
                        {showAuditModal === 'OpenZeppelin Report' && 'Clean code structure, proper use of OpenZeppelin libraries, and adherence to security best practices.'}
                        {showAuditModal === 'KPMG Fintech Review' && 'Strong compliance framework, transparent reporting, and comprehensive risk management.'}
                      </p>
                    </div>
                    <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                      <p className="text-sm font-bold text-yellow-400 mb-1">⚠️ Recommendations</p>
                      <p className="text-xs text-gray-400">
                        {showAuditModal === 'CertiK Audit 2024' && 'Continue regular security audits, implement additional monitoring tools, and maintain documentation updates.'}
                        {showAuditModal === 'OpenZeppelin Report' && 'Consider additional gas optimization, implement more comprehensive test coverage, and document upgrade procedures.'}
                        {showAuditModal === 'KPMG Fintech Review' && 'Enhance KYC procedures, expand compliance training, and implement additional fraud detection measures.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Audit Details */}
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-bold mb-4">Audit Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500 mb-1">Audit Date</p>
                      <p className="font-bold">
                        {showAuditModal === 'CertiK Audit 2024' && 'December 2024'}
                        {showAuditModal === 'OpenZeppelin Report' && 'November 2024'}
                        {showAuditModal === 'KPMG Fintech Review' && 'January 2025'}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Audit Scope</p>
                      <p className="font-bold">Full Platform Review</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Contracts Audited</p>
                      <p className="font-bold">
                        {showAuditModal === 'CertiK Audit 2024' && '12 Smart Contracts'}
                        {showAuditModal === 'OpenZeppelin Report' && '8 Core Contracts'}
                        {showAuditModal === 'KPMG Fintech Review' && 'All Systems'}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Report Version</p>
                      <p className="font-bold">v1.0</p>
                    </div>
                  </div>
                </div>

                {/* Download Section */}
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setShowAuditModal(null)}
                    className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      alert(`Downloading ${showAuditModal} PDF...`);
                      setShowAuditModal(null);
                    }}
                    className="flex-1 py-3 bg-gradient-to-r from-cyan-600 to-purple-500 rounded-xl font-bold hover:scale-[1.02] transition-transform"
                  >
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Transparency Ledger Modal */}
      {showTransparencyLedgerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowTransparencyLedgerModal(false)} />
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-white/5 z-10">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold font-display">On-Chain Transparency Ledger</h2>
                  <p className="text-gray-500 text-sm mt-1">Real-time blockchain transaction history and system integrity logs</p>
                </div>
                <button
                  onClick={() => setShowTransparencyLedgerModal(false)}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                {/* Live Feed */}
                <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">Live Transaction Feed</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-green-400 font-bold">LIVE</span>
                    </div>
                  </div>
                  <div className="font-mono text-xs text-green-400 space-y-2 leading-relaxed max-h-64 overflow-y-auto">
                    <div>[BLOCK_SYNC] 0x82a3f4b7c9d1e2f5a8b6c3d4e7f9a1b2c3d4e5f verified at 14:02:11</div>
                    <div>[BOT_PROFIT] +0.124 NXC added to Liquidity Pool</div>
                    <div>[SYSTEM] Integrity check PASSED (99.98%)</div>
                    <div>[AUDIT] Continuous monitoring active...</div>
                    <div>[AFFILIATE] Commission paid: 0x123...abc → 2.5 NXC</div>
                    <div>[STAKING] MEV Bot reward: +0.045 NXC</div>
                    <div>[STAKING] XAB Bot reward: +0.032 NXC</div>
                    <div>[BLOCK_SYNC] 0x91b4c8d2e3f6a7b9c1d4e5f8a2b3c4d5e6f7a8 verified at 14:02:45</div>
                    <div>[NETWORK] New affiliate joined: Agent Nexus-143</div>
                    <div>[BOT_PROFIT] +0.089 NXC added to Liquidity Pool</div>
                    <div>[SYSTEM] Integrity check PASSED (99.98%)</div>
                    <div>[AFFILIATE] Commission paid: 0x456...def → 1.8 NXC</div>
                    <div>[STAKING] MEV Bot reward: +0.052 NXC</div>
                    <div>[BLOCK_SYNC] 0xa2c5d8e1f4b7a9c2d5e8f1b4a7c9d2e5f8a1 verified at 14:03:12</div>
                  </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-xs text-gray-500 mb-1">Total Transactions</p>
                    <p className="text-2xl font-bold text-cyan-400">12,847</p>
                    <p className="text-xs text-green-400 mt-1">+23 today</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-xs text-gray-500 mb-1">System Integrity</p>
                    <p className="text-2xl font-bold text-green-400">99.98%</p>
                    <p className="text-xs text-green-400 mt-1">All checks passed</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-xs text-gray-500 mb-1">Total NXC Distributed</p>
                    <p className="text-2xl font-bold text-purple-400">45,231</p>
                    <p className="text-xs text-gray-400 mt-1">NXC tokens</p>
                  </div>
                </div>

                {/* Recent Blocks */}
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-bold mb-4">Recent Verified Blocks</h3>
                  <div className="space-y-2">
                    {[
                      { hash: '0x82a3f4b7c9d1e2f5a8b6c3d4e7f9a1b2c3d4e5f', time: '14:02:11', status: 'Verified' },
                      { hash: '0x91b4c8d2e3f6a7b9c1d4e5f8a2b3c4d5e6f7a8', time: '14:02:45', status: 'Verified' },
                      { hash: '0xa2c5d8e1f4b7a9c2d5e8f1b4a7c9d2e5f8a1', time: '14:03:12', status: 'Verified' },
                      { hash: '0xb3d6e9f2c5a8b1d4e7f0a3c6d9e2f5a8b1c4d7', time: '14:03:38', status: 'Verified' },
                      { hash: '0xc4e7f0a3d6b9c2e5f8a1d4b7c0e3f6a9b2c5d8', time: '14:04:05', status: 'Pending' },
                    ].map((block, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-black/40 rounded-xl border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${block.status === 'Verified' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                          <div>
                            <p className="text-xs font-mono text-gray-400">{block.hash}</p>
                            <p className="text-xs text-gray-500">{block.time}</p>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                          block.status === 'Verified' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}>
                          {block.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setShowTransparencyLedgerModal(false)}
                    className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      window.open('https://etherscan.io/address/0x...', '_blank');
                    }}
                    className="flex-1 py-3 bg-gradient-to-r from-green-600 to-cyan-500 rounded-xl font-bold hover:scale-[1.02] transition-transform"
                  >
                    View on Etherscan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Income Stream Detail Modals */}
      {selectedIncomeStream === 'affiliate' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Affiliate Commissions</h3>
                <p className="text-gray-500 text-sm mt-1">Earnings from product sales through affiliate links</p>
              </div>
              <button
                onClick={() => setSelectedIncomeStream(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Current Earnings */}
              <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
                <p className="text-xs text-purple-400 font-bold mb-2">Monthly Earnings</p>
                <p className="text-4xl font-bold text-purple-400 mb-2">$892</p>
                <p className="text-sm text-gray-400">75% of total income • +15.2% from last month</p>
              </div>

              {/* Top Products */}
              <div>
                <h4 className="font-bold text-lg mb-4">Top Performing Products</h4>
                <div className="space-y-3">
                  {[
                    { name: 'NXC Trading Masterclass', earnings: 375, commission: 25, sales: 15 },
                    { name: 'Crypto Health Formula', earnings: 340, commission: 40, sales: 8.5 },
                    { name: 'MEV Bot Pro License', earnings: 500, commission: 10, sales: 50 },
                    { name: 'Blockchain Marketing Kit', earnings: 180, commission: 30, sales: 6 },
                    { name: 'Elite Performance Apparel', earnings: 95, commission: 15, sales: 6.3 },
                  ].map((product, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-bold">{product.name}</h5>
                        <span className="text-lg font-bold text-purple-400">${product.earnings}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Commission:</span>
                          <span className="font-bold text-cyan-400 ml-2">{product.commission}%</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Sales:</span>
                          <span className="font-bold text-green-400 ml-2">{product.sales}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Share:</span>
                          <span className="font-bold text-purple-400 ml-2">{((product.earnings / 892) * 100).toFixed(1)}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Total Clicks</p>
                  <p className="text-2xl font-bold text-cyan-400">12,450</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Conversion Rate</p>
                  <p className="text-2xl font-bold text-green-400">2.4%</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Avg Commission</p>
                  <p className="text-2xl font-bold text-purple-400">24.5%</p>
                </div>
              </div>

              {/* Growth Trend */}
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                <p className="text-xs font-bold text-green-400 mb-2">📈 Growth Trend</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Last month:</span>
                    <span className="font-bold text-green-400">$775 (+15.2%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">3-month average:</span>
                    <span className="font-bold text-cyan-400">$820/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Projected next month:</span>
                    <span className="font-bold text-purple-400">~$950</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedIncomeStream(null)}
                className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedIncomeStream === 'bot' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">MEV/XAB Bot Returns</h3>
                <p className="text-gray-500 text-sm mt-1">Passive income from automated trading bots</p>
              </div>
              <button
                onClick={() => setSelectedIncomeStream(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Current Earnings */}
              <div className="p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl">
                <p className="text-xs text-cyan-400 font-bold mb-2">Monthly Returns</p>
                <p className="text-4xl font-bold text-cyan-400 mb-2">$234</p>
                <p className="text-sm text-gray-400">20% of total income • +8.5% from last month</p>
              </div>

              {/* Bot Breakdown */}
              <div>
                <h4 className="font-bold text-lg mb-4">Bot Performance</h4>
                <div className="space-y-3">
                  {[
                    { name: 'MEV Bot Alpha', staked: 2500, apy: 12.5, earnings: 156.25, status: 'Active' },
                    { name: 'XAB Bot (XRP)', staked: 2000, apy: 14.8, earnings: 248.50, status: 'Active' },
                  ].map((bot, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h5 className="font-bold text-lg">{bot.name}</h5>
                          <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                            bot.status === 'Active'
                              ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                              : 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                          }`}>
                            {bot.status}
                          </span>
                        </div>
                        <span className="text-2xl font-bold text-cyan-400">${bot.earnings.toFixed(2)}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Staked:</span>
                          <span className="font-bold text-purple-400 ml-2">{bot.staked.toLocaleString()} NXC</span>
                        </div>
                        <div>
                          <span className="text-gray-500">APY:</span>
                          <span className="font-bold text-green-400 ml-2">{bot.apy}%</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Monthly:</span>
                          <span className="font-bold text-cyan-400 ml-2">${bot.earnings.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total Staked */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Total Staked</p>
                  <p className="text-2xl font-bold text-purple-400">4,500 NXC</p>
                  <p className="text-xs text-gray-400">≈ $13,500 USD</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Average APY</p>
                  <p className="text-2xl font-bold text-green-400">13.65%</p>
                  <p className="text-xs text-gray-400">Combined return</p>
                </div>
              </div>

              {/* Projections */}
              <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <p className="text-xs font-bold text-cyan-400 mb-2">📈 Projected Returns</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Next month:</span>
                    <span className="font-bold text-cyan-400">~$250</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Annual projection:</span>
                    <span className="font-bold text-green-400">~$3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">If you stake 10K NXC:</span>
                    <span className="font-bold text-purple-400">~$520/month</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedIncomeStream(null)}
                className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedIncomeStream === 'network' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Sub-Affiliate Network</h3>
                <p className="text-gray-500 text-sm mt-1">Commissions from your referral network</p>
              </div>
              <button
                onClick={() => setSelectedIncomeStream(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Current Earnings */}
              <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl">
                <p className="text-xs text-green-400 font-bold mb-2">Monthly Network Commissions</p>
                <p className="text-4xl font-bold text-green-400 mb-2">$58</p>
                <p className="text-sm text-gray-400">5% of total income • +12.3% from last month</p>
              </div>

              {/* Network Structure */}
              <div>
                <h4 className="font-bold text-lg mb-4">Network Structure</h4>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="p-4 bg-white/5 rounded-xl text-center">
                    <p className="text-xs text-gray-500 mb-1">Direct Referrals</p>
                    <p className="text-2xl font-bold text-cyan-400">14</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl text-center">
                    <p className="text-xs text-gray-500 mb-1">Sub-Affiliates</p>
                    <p className="text-2xl font-bold text-purple-400">128</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl text-center">
                    <p className="text-xs text-gray-500 mb-1">Total Network</p>
                    <p className="text-2xl font-bold text-green-400">142</p>
                  </div>
                </div>
              </div>

              {/* Commission Breakdown */}
              <div>
                <h4 className="font-bold text-lg mb-4">Commission Breakdown</h4>
                <div className="space-y-3">
                  {[
                    { level: 'Level 1 (Direct)', members: 14, earnings: 420, commission: 10 },
                    { level: 'Level 2', members: 45, earnings: 135, commission: 5 },
                    { level: 'Level 3+', members: 83, earnings: 25, commission: 2 },
                  ].map((level, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">{level.level}</span>
                        <span className="text-lg font-bold text-green-400">${level.earnings}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Members:</span>
                          <span className="font-bold text-cyan-400 ml-2">{level.members}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Commission:</span>
                          <span className="font-bold text-purple-400 ml-2">{level.commission}%</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Share:</span>
                          <span className="font-bold text-green-400 ml-2">{((level.earnings / 58) * 100).toFixed(1)}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Contributors */}
              <div>
                <h4 className="font-bold text-lg mb-4">Top Network Contributors</h4>
                <div className="space-y-2">
                  {[
                    { name: 'Agent Nexus-42', level: 1, earnings: 124, network: 23 },
                    { name: 'Agent Nexus-15', level: 1, earnings: 256, network: 45 },
                    { name: 'Agent Nexus-88', level: 1, earnings: 89, network: 15 },
                  ].map((contributor, idx) => (
                    <div key={idx} className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-gray-600 w-6">#{idx + 1}</span>
                        <span className="font-bold text-sm">{contributor.name}</span>
                        <span className="px-2 py-0.5 rounded text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          Level {contributor.level}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-green-400">${contributor.earnings}</span>
                        <p className="text-xs text-gray-500">Network: {contributor.network}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Growth Potential */}
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                <p className="text-xs font-bold text-green-400 mb-2">💡 Growth Potential</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">If network doubles:</span>
                    <span className="font-bold text-green-400">~$116/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Target (200 members):</span>
                    <span className="font-bold text-cyan-400">~$82/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Focus on Level 1 growth:</span>
                    <span className="font-bold text-purple-400">Highest ROI</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedIncomeStream(null)}
                className="w-full py-3 bg-green-600 hover:bg-green-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedIncomeStream === 'passive' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Passive Income Overview</h3>
                <p className="text-gray-500 text-sm mt-1">Automated income streams analysis</p>
              </div>
              <button
                onClick={() => setSelectedIncomeStream(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Current Passive Income */}
              <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl">
                <p className="text-xs text-green-400 font-bold mb-2">Current Passive Income</p>
                <p className="text-4xl font-bold text-green-400 mb-2">25%</p>
                <p className="text-sm text-gray-400">$292/month • Target: 50%</p>
              </div>

              {/* Passive Income Breakdown */}
              <div>
                <h4 className="font-bold text-lg mb-4">Passive Income Sources</h4>
                <div className="space-y-3">
                  {[
                    { source: 'MEV/XAB Bot Returns', amount: 234, percentage: 80.1, color: 'cyan' },
                    { source: 'Sub-Affiliate Network', amount: 58, percentage: 19.9, color: 'green' },
                  ].map((source, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">{source.source}</span>
                        <span className={`text-lg font-bold ${
                          source.color === 'cyan' ? 'text-cyan-400' : 'text-green-400'
                        }`}>
                          ${source.amount}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            source.color === 'cyan' ? 'bg-cyan-500' : 'bg-green-500'
                          } rounded-full`} 
                          style={{ width: `${source.percentage}%` }} 
                        />
                      </div>
                      <p className="text-xs text-gray-400 mt-1">{source.percentage}% of passive income</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active vs Passive */}
              <div>
                <h4 className="font-bold text-lg mb-4">Income Composition</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-xs text-gray-500 mb-1">Active Income</p>
                    <p className="text-2xl font-bold text-purple-400">75%</p>
                    <p className="text-xs text-gray-400">$892/month</p>
                    <p className="text-xs text-gray-500 mt-2">Requires active promotion</p>
                  </div>
                  <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                    <p className="text-xs text-gray-500 mb-1">Passive Income</p>
                    <p className="text-2xl font-bold text-green-400">25%</p>
                    <p className="text-xs text-gray-400">$292/month</p>
                    <p className="text-xs text-gray-500 mt-2">Automated earnings</p>
                  </div>
                </div>
              </div>

              {/* Path to 50% Passive */}
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                <p className="text-xs font-bold text-yellow-400 mb-2">🎯 Path to 50% Passive Income</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 font-bold mt-0.5">✓</span>
                    <div>
                      <p className="font-bold">Increase Bot Staking</p>
                      <p className="text-gray-400 text-xs">Stake 10K NXC → ~$520/month passive</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 font-bold mt-0.5">✓</span>
                    <div>
                      <p className="font-bold">Grow Network to 200+</p>
                      <p className="text-gray-400 text-xs">Network commissions → ~$120/month passive</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-400 font-bold mt-0.5">⏳</span>
                    <div>
                      <p className="font-bold">Maintain Active Income</p>
                      <p className="text-gray-400 text-xs">Keep affiliate commissions at $900+/month</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white/5 rounded-lg">
                  <p className="text-xs text-gray-400 mb-1">Projected at 50% passive:</p>
                  <p className="text-lg font-bold text-green-400">~$1,840/month total ($920 passive)</p>
                </div>
              </div>

              {/* Benefits */}
              <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <p className="text-xs font-bold text-cyan-400 mb-2">💡 Benefits of Higher Passive Income</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• More time freedom - less active promotion needed</li>
                  <li>• Stable income base - less dependent on daily activity</li>
                  <li>• Compound growth - passive income reinvests automatically</li>
                  <li>• Financial security - multiple income streams reduce risk</li>
                </ul>
              </div>

              <button
                onClick={() => setSelectedIncomeStream(null)}
                className="w-full py-3 bg-green-600 hover:bg-green-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Financial Health Score Detail Modals */}
      {selectedHealthMetric === 'overview' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Financial Health Score</h3>
                <p className="text-gray-500 text-sm mt-1">Complete financial health analysis</p>
              </div>
              <button
                onClick={() => setSelectedHealthMetric(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Overall Score */}
              <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-green-400 font-bold mb-2">Overall Financial Health</p>
                    <p className="text-5xl font-bold text-green-400 mb-2">87/100</p>
                    <p className="text-sm text-gray-400">Excellent • Top 15% of users</p>
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className={`w-8 h-2 rounded ${i <= 4 ? 'bg-green-400' : 'bg-gray-700'}`}></div>
                    ))}
                  </div>
                </div>
                <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-gradient-to-r from-green-500 via-cyan-500 to-purple-600 transition-all duration-1000" style={{ width: '87%' }}></div>
                </div>
              </div>

              {/* Score Breakdown */}
              <div>
                <h4 className="font-bold text-lg mb-4">Score Breakdown</h4>
                <div className="space-y-3">
                  {[
                    { metric: 'Income Diversification', score: 8.5, max: 10, weight: 25, status: 'Good', color: 'cyan' },
                    { metric: 'Earnings Consistency', score: 9.0, max: 10, weight: 30, status: 'Excellent', color: 'green' },
                    { metric: 'Network Growth', score: 8.0, max: 10, weight: 25, status: 'Good', color: 'purple' },
                    { metric: 'Portfolio Balance', score: 8.5, max: 10, weight: 20, status: 'Good', color: 'yellow' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">{item.metric}</span>
                        <div className="flex items-center gap-2">
                          <span className={`text-lg font-bold ${
                            item.color === 'cyan' ? 'text-cyan-400' :
                            item.color === 'green' ? 'text-green-400' :
                            item.color === 'purple' ? 'text-purple-400' :
                            'text-yellow-400'
                          }`}>
                            {item.score}/{item.max}
                          </span>
                          <span className="text-xs text-green-400">✓ {item.status}</span>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            item.color === 'cyan' ? 'bg-cyan-500' :
                            item.color === 'green' ? 'bg-green-500' :
                            item.color === 'purple' ? 'bg-purple-500' :
                            'bg-yellow-500'
                          } rounded-full`} 
                          style={{ width: `${(item.score / item.max) * 100}%` }} 
                        />
                      </div>
                      <p className="text-xs text-gray-400 mt-1">Weight: {item.weight}% of total score</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <p className="text-xs font-bold text-cyan-400 mb-2">💡 Recommendations to Reach 90+</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Increase passive income to 50% (currently 25%)</li>
                  <li>• Add 2-3 more income streams</li>
                  <li>• Maintain consistent monthly earnings above $1,000</li>
                  <li>• Grow network to 200+ active members</li>
                </ul>
              </div>

              <button
                onClick={() => setSelectedHealthMetric(null)}
                className="w-full py-3 bg-green-600 hover:bg-green-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedHealthMetric === 'diversification' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Income Diversification</h3>
                <p className="text-gray-500 text-sm mt-1">Score: 8.5/10 • Good</p>
              </div>
              <button
                onClick={() => setSelectedHealthMetric(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Current Score */}
              <div className="p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl">
                <p className="text-xs text-cyan-400 font-bold mb-2">Current Score</p>
                <p className="text-4xl font-bold text-cyan-400 mb-2">8.5/10</p>
                <p className="text-sm text-gray-400">Good • Above average</p>
              </div>

              {/* Income Streams */}
              <div>
                <h4 className="font-bold text-lg mb-4">Your Income Streams</h4>
                <div className="space-y-3">
                  {[
                    { name: 'Affiliate Commissions', percentage: 75, amount: 892, status: 'Active' },
                    { name: 'MEV/XAB Bot Returns', percentage: 20, amount: 234, status: 'Active' },
                    { name: 'Sub-Affiliate Network', percentage: 5, amount: 58, status: 'Active' },
                  ].map((stream, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">{stream.name}</span>
                        <span className="text-lg font-bold text-cyan-400">{stream.percentage}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${stream.percentage}%` }} />
                      </div>
                      <p className="text-xs text-gray-400 mt-1">${stream.amount}/month • {stream.status}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Improvement Tips */}
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                <p className="text-xs font-bold text-yellow-400 mb-2">💡 How to Improve to 10/10</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Add content monetization stream (target: 5-10%)</li>
                  <li>• Explore academy course sales (target: 3-5%)</li>
                  <li>• Consider product creation (target: 5-10%)</li>
                  <li>• Balance: No single stream should exceed 60%</li>
                </ul>
              </div>

              <button
                onClick={() => setSelectedHealthMetric(null)}
                className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedHealthMetric === 'consistency' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Earnings Consistency</h3>
                <p className="text-gray-500 text-sm mt-1">Score: 9.0/10 • Excellent</p>
              </div>
              <button
                onClick={() => setSelectedHealthMetric(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Current Score */}
              <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl">
                <p className="text-xs text-green-400 font-bold mb-2">Current Score</p>
                <p className="text-4xl font-bold text-green-400 mb-2">9.0/10</p>
                <p className="text-sm text-gray-400">Excellent • Top 10% of users</p>
              </div>

              {/* Monthly Earnings History */}
              <div>
                <h4 className="font-bold text-lg mb-4">Monthly Earnings History</h4>
                <div className="space-y-3">
                  {[
                    { month: 'January 2026', earnings: 1184, trend: 'stable', variance: 2.1 },
                    { month: 'December 2025', earnings: 1150, trend: 'up', variance: 1.8 },
                    { month: 'November 2025', earnings: 1120, trend: 'up', variance: 2.3 },
                    { month: 'October 2025', earnings: 1095, trend: 'stable', variance: 1.9 },
                    { month: 'September 2025', earnings: 1080, trend: 'up', variance: 2.5 },
                  ].map((period, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">{period.month}</span>
                        <span className="text-lg font-bold text-green-400">${period.earnings}</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs">
                        <span className={`px-2 py-0.5 rounded font-bold ${
                          period.trend === 'up' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                          'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                        }`}>
                          {period.trend === 'up' ? '↑ Increasing' : '→ Stable'}
                        </span>
                        <span className="text-gray-400">Variance: {period.variance}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consistency Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Avg Monthly</p>
                  <p className="text-xl font-bold text-green-400">$1,126</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Variance</p>
                  <p className="text-xl font-bold text-cyan-400">2.1%</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Growth Rate</p>
                  <p className="text-xl font-bold text-purple-400">+2.4%</p>
                </div>
              </div>

              {/* Why It's Excellent */}
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                <p className="text-xs font-bold text-green-400 mb-2">✓ Why This Score is Excellent</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Consistent monthly earnings with low variance</li>
                  <li>• Steady growth trend over 5 months</li>
                  <li>• No major income drops or gaps</li>
                  <li>• Multiple income streams provide stability</li>
                </ul>
              </div>

              <button
                onClick={() => setSelectedHealthMetric(null)}
                className="w-full py-3 bg-green-600 hover:bg-green-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedHealthMetric === 'growth' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Network Growth</h3>
                <p className="text-gray-500 text-sm mt-1">Score: 8.0/10 • Good</p>
              </div>
              <button
                onClick={() => setSelectedHealthMetric(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Current Score */}
              <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
                <p className="text-xs text-purple-400 font-bold mb-2">Current Score</p>
                <p className="text-4xl font-bold text-purple-400 mb-2">8.0/10</p>
                <p className="text-sm text-gray-400">Good • Above average growth</p>
              </div>

              {/* Growth Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Current Network</p>
                  <p className="text-2xl font-bold text-cyan-400">142</p>
                  <p className="text-xs text-green-400 mt-1">+18 this month</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Growth Rate</p>
                  <p className="text-2xl font-bold text-purple-400">+9.2%</p>
                  <p className="text-xs text-gray-400 mt-1">Monthly average</p>
                </div>
              </div>

              {/* Growth History */}
              <div>
                <h4 className="font-bold text-lg mb-4">Network Growth History</h4>
                <div className="space-y-3">
                  {[
                    { month: 'January 2026', members: 142, growth: 18, rate: 14.5 },
                    { month: 'December 2025', members: 124, growth: 12, rate: 10.7 },
                    { month: 'November 2025', members: 112, growth: 10, rate: 9.8 },
                    { month: 'October 2025', members: 102, growth: 8, rate: 8.5 },
                    { month: 'September 2025', members: 94, growth: 6, rate: 6.8 },
                  ].map((period, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">{period.month}</span>
                        <span className="text-lg font-bold text-purple-400">{period.members} members</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-green-400 font-bold">+{period.growth} new</span>
                        <span className="text-cyan-400">+{period.rate}% growth</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Improvement Tips */}
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                <p className="text-xs font-bold text-yellow-400 mb-2">💡 How to Improve to 10/10</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Increase monthly growth rate to 15%+ (currently 9.2%)</li>
                  <li>• Focus on quality referrals over quantity</li>
                  <li>• Develop team leaders to accelerate growth</li>
                  <li>• Target: 200+ members within 6 months</li>
                </ul>
              </div>

              <button
                onClick={() => setSelectedHealthMetric(null)}
                className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedHealthMetric === 'balance' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Portfolio Balance</h3>
                <p className="text-gray-500 text-sm mt-1">Score: 8.5/10 • Good</p>
              </div>
              <button
                onClick={() => setSelectedHealthMetric(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Current Score */}
              <div className="p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl">
                <p className="text-xs text-yellow-400 font-bold mb-2">Current Score</p>
                <p className="text-4xl font-bold text-yellow-400 mb-2">8.5/10</p>
                <p className="text-sm text-gray-400">Good • Well-balanced portfolio</p>
              </div>

              {/* Portfolio Composition */}
              <div>
                <h4 className="font-bold text-lg mb-4">Portfolio Composition</h4>
                <div className="space-y-3">
                  {[
                    { category: 'Active Income', percentage: 75, amount: 892, ideal: 50, status: 'High' },
                    { category: 'Passive Income', percentage: 25, amount: 292, ideal: 50, status: 'Low' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">{item.category}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-yellow-400">{item.percentage}%</span>
                          <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                            item.status === 'High' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                            'bg-green-500/10 text-green-400 border border-green-500/20'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-2">
                        <div className={`h-full ${idx === 0 ? 'bg-purple-500' : 'bg-green-500'} rounded-full`} style={{ width: `${item.percentage}%` }} />
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Current: ${item.amount}/month</span>
                        <span className="text-cyan-400">Ideal: {item.ideal}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Balance Analysis */}
              <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <p className="text-xs font-bold text-cyan-400 mb-2">📊 Balance Analysis</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Active/Passive Ratio:</span>
                    <span className="font-bold text-yellow-400">75/25 (Target: 50/50)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Risk Level:</span>
                    <span className="font-bold text-green-400">Moderate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Stability Score:</span>
                    <span className="font-bold text-cyan-400">8.2/10</span>
                  </div>
                </div>
              </div>

              {/* Improvement Tips */}
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                <p className="text-xs font-bold text-yellow-400 mb-2">💡 How to Improve to 10/10</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Increase passive income to 50% (currently 25%)</li>
                  <li>• Add more bot staking positions</li>
                  <li>• Grow network for passive commissions</li>
                  <li>• Maintain active income while building passive</li>
                </ul>
              </div>

              <button
                onClick={() => setSelectedHealthMetric(null)}
                className="w-full py-3 bg-yellow-600 hover:bg-yellow-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Metric Detail Modals */}
      {selectedMetric === 'Daily ROI Target' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Daily ROI Target</h3>
                <p className="text-gray-500 text-sm mt-1">Return on Investment tracking and analysis</p>
              </div>
              <button
                onClick={() => setSelectedMetric(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Current Target */}
              <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
                <p className="text-xs text-purple-400 font-bold mb-2">Current Daily ROI Target</p>
                <p className="text-4xl font-bold text-purple-400 mb-2">~1.2%</p>
                <p className="text-sm text-gray-400">+0.3% from last week • On track</p>
              </div>

              {/* Weekly Breakdown */}
              <div>
                <h4 className="font-bold text-lg mb-4">This Week's Performance</h4>
                <div className="space-y-3">
                  {[
                    { day: 'Monday', target: 1.2, actual: 1.3, status: 'exceeded' },
                    { day: 'Tuesday', target: 1.2, actual: 1.1, status: 'below' },
                    { day: 'Wednesday', target: 1.2, actual: 1.4, status: 'exceeded' },
                    { day: 'Thursday', target: 1.2, actual: 1.2, status: 'met' },
                    { day: 'Friday', target: 1.2, actual: 1.3, status: 'exceeded' },
                    { day: 'Saturday', target: 1.2, actual: 1.0, status: 'below' },
                    { day: 'Sunday', target: 1.2, actual: 1.2, status: 'met' },
                  ].map((day, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">{day.day}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-400">Target: {day.target}%</span>
                          <span className={`text-lg font-bold ${
                            day.status === 'exceeded' ? 'text-green-400' :
                            day.status === 'below' ? 'text-red-400' :
                            'text-cyan-400'
                          }`}>
                            {day.actual}%
                          </span>
                          <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                            day.status === 'exceeded' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                            day.status === 'below' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                            'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                          }`}>
                            {day.status === 'exceeded' ? '✓ Exceeded' : day.status === 'below' ? 'Below' : 'Met'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monthly Average */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Weekly Average</p>
                  <p className="text-xl font-bold text-purple-400">1.21%</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Monthly Average</p>
                  <p className="text-xl font-bold text-cyan-400">1.18%</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Target Achievement</p>
                  <p className="text-xl font-bold text-green-400">100.8%</p>
                </div>
              </div>

              {/* Tips */}
              <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <p className="text-xs font-bold text-cyan-400 mb-2">💡 Tips to Maintain ROI Target</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Focus on high-commission products (25%+)</li>
                  <li>• Optimize conversion rates through better targeting</li>
                  <li>• Increase daily link shares and engagement</li>
                  <li>• Track which products perform best for your audience</li>
                </ul>
              </div>

              <button
                onClick={() => setSelectedMetric(null)}
                className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedMetric === 'Total Earnings' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Total Earnings</h3>
                <p className="text-gray-500 text-sm mt-1">Complete earnings breakdown and analysis</p>
              </div>
              <button
                onClick={() => setSelectedMetric(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Current Earnings */}
              <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl">
                <p className="text-xs text-green-400 font-bold mb-2">Total Earnings (All Time)</p>
                <p className="text-4xl font-bold text-green-400 mb-2">$14,210.00</p>
                <p className="text-sm text-gray-400">+15.2% from last month • Excellent growth</p>
              </div>

              {/* Earnings Breakdown */}
              <div>
                <h4 className="font-bold text-lg mb-4">Earnings by Source</h4>
                <div className="space-y-3">
                  {[
                    { source: 'Affiliate Commissions', amount: 10680, percentage: 75.2, trend: '+12.5%' },
                    { source: 'MEV/XAB Bot Returns', amount: 2840, percentage: 20.0, trend: '+8.3%' },
                    { source: 'Sub-Affiliate Network', amount: 690, percentage: 4.8, trend: '+18.2%' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">{item.source}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-green-400">${item.amount.toLocaleString()}</span>
                          <span className="text-xs text-green-400 font-bold">{item.trend}</span>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: `${item.percentage}%` }} />
                      </div>
                      <p className="text-xs text-gray-400 mt-1">{item.percentage}% of total earnings</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monthly Breakdown */}
              <div>
                <h4 className="font-bold text-lg mb-4">Monthly Earnings History</h4>
                <div className="space-y-2">
                  {[
                    { month: 'January 2026', earnings: 1184, growth: '+15.2%' },
                    { month: 'December 2025', earnings: 1028, growth: '+12.8%' },
                    { month: 'November 2025', earnings: 912, growth: '+10.5%' },
                    { month: 'October 2025', earnings: 826, growth: '+8.2%' },
                    { month: 'September 2025', earnings: 763, growth: '+5.9%' },
                  ].map((period, idx) => (
                    <div key={idx} className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                      <span className="font-bold text-sm">{period.month}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-green-400">${period.earnings}</span>
                        <span className="text-xs text-green-400 font-bold">{period.growth}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projections */}
              <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <p className="text-xs font-bold text-cyan-400 mb-2">📈 Projections</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Next month (projected):</span>
                    <span className="font-bold text-green-400">~$1,365</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">3-month average (projected):</span>
                    <span className="font-bold text-cyan-400">~$1,450/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Annual projection:</span>
                    <span className="font-bold text-purple-400">~$17,400</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedMetric(null)}
                className="w-full py-3 bg-green-600 hover:bg-green-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedMetric === 'Affiliate Clicks' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Affiliate Clicks</h3>
                <p className="text-gray-500 text-sm mt-1">Click tracking and performance analysis</p>
              </div>
              <button
                onClick={() => setSelectedMetric(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Current Clicks */}
              <div className="p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl">
                <p className="text-xs text-cyan-400 font-bold mb-2">Total Affiliate Clicks (All Time)</p>
                <p className="text-4xl font-bold text-cyan-400 mb-2">52,810</p>
                <p className="text-sm text-gray-400">+8.4% from last month • Growing steadily</p>
              </div>

              {/* Click Sources */}
              <div>
                <h4 className="font-bold text-lg mb-4">Clicks by Source</h4>
                <div className="space-y-3">
                  {[
                    { source: 'Social Media', clicks: 21450, percentage: 40.6, trend: '+12.3%' },
                    { source: 'Email Marketing', clicks: 15820, percentage: 30.0, trend: '+6.8%' },
                    { source: 'Direct Links', clicks: 8950, percentage: 16.9, trend: '+5.2%' },
                    { source: 'Content Posts', clicks: 6590, percentage: 12.5, trend: '+9.1%' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">{item.source}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-cyan-400">{item.clicks.toLocaleString()}</span>
                          <span className="text-xs text-green-400 font-bold">{item.trend}</span>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${item.percentage}%` }} />
                      </div>
                      <p className="text-xs text-gray-400 mt-1">{item.percentage}% of total clicks</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monthly Breakdown */}
              <div>
                <h4 className="font-bold text-lg mb-4">Monthly Click History</h4>
                <div className="space-y-2">
                  {[
                    { month: 'January 2026', clicks: 4870, growth: '+8.4%' },
                    { month: 'December 2025', clicks: 4492, growth: '+7.2%' },
                    { month: 'November 2025', clicks: 4189, growth: '+5.8%' },
                    { month: 'October 2025', clicks: 3958, growth: '+4.5%' },
                    { month: 'September 2025', clicks: 3786, growth: '+3.2%' },
                  ].map((period, idx) => (
                    <div key={idx} className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                      <span className="font-bold text-sm">{period.month}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-cyan-400">{period.clicks.toLocaleString()}</span>
                        <span className="text-xs text-green-400 font-bold">{period.growth}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Daily Average</p>
                  <p className="text-xl font-bold text-cyan-400">157</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Conversion Rate</p>
                  <p className="text-xl font-bold text-green-400">2.4%</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Best Day</p>
                  <p className="text-xl font-bold text-purple-400">312</p>
                </div>
              </div>

              {/* Tips */}
              <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <p className="text-xs font-bold text-cyan-400 mb-2">💡 Tips to Increase Clicks</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Post affiliate links more frequently on social media</li>
                  <li>• Use compelling call-to-actions in your content</li>
                  <li>• Share links during peak engagement hours</li>
                  <li>• A/B test different link formats and placements</li>
                </ul>
              </div>

              <button
                onClick={() => setSelectedMetric(null)}
                className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedMetric === 'Conversion Rate' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Conversion Rate</h3>
                <p className="text-gray-500 text-sm mt-1">Conversion performance and optimization</p>
              </div>
              <button
                onClick={() => setSelectedMetric(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Current Rate */}
              <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl">
                <p className="text-xs text-green-400 font-bold mb-2">Current Conversion Rate</p>
                <p className="text-4xl font-bold text-green-400 mb-2">2.4%</p>
                <p className="text-sm text-gray-400">+1.1% from last month • Above industry average (2.0%)</p>
              </div>

              {/* Conversion by Product */}
              <div>
                <h4 className="font-bold text-lg mb-4">Conversion Rate by Product</h4>
                <div className="space-y-3">
                  {[
                    { product: 'NXC Trading Masterclass', rate: 3.2, clicks: 468, sales: 15, status: 'excellent' },
                    { product: 'Crypto Health Formula', rate: 2.8, clicks: 357, sales: 10, status: 'good' },
                    { product: 'MEV Bot Pro License', rate: 2.1, clicks: 476, sales: 10, status: 'average' },
                    { product: 'Blockchain Marketing Kit', rate: 1.9, clicks: 263, sales: 5, status: 'below' },
                    { product: 'Elite Performance Apparel', rate: 1.5, clicks: 400, sales: 6, status: 'below' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-sm">{item.product}</span>
                        <div className="flex items-center gap-2">
                          <span className={`text-lg font-bold ${
                            item.status === 'excellent' ? 'text-green-400' :
                            item.status === 'good' ? 'text-cyan-400' :
                            item.status === 'average' ? 'text-yellow-400' :
                            'text-red-400'
                          }`}>
                            {item.rate}%
                          </span>
                          <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                            item.status === 'excellent' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                            item.status === 'good' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' :
                            item.status === 'average' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                            'bg-red-500/10 text-red-400 border border-red-500/20'
                          }`}>
                            {item.status === 'excellent' ? 'Excellent' : item.status === 'good' ? 'Good' : item.status === 'average' ? 'Average' : 'Below Avg'}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span>{item.clicks} clicks</span>
                        <span>•</span>
                        <span>{item.sales} sales</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monthly Trends */}
              <div>
                <h4 className="font-bold text-lg mb-4">Monthly Conversion Trends</h4>
                <div className="space-y-2">
                  {[
                    { month: 'January 2026', rate: 2.4, trend: '+1.1%' },
                    { month: 'December 2025', rate: 2.2, trend: '+0.8%' },
                    { month: 'November 2025', rate: 2.0, trend: '+0.5%' },
                    { month: 'October 2025', rate: 1.9, trend: '+0.2%' },
                    { month: 'September 2025', rate: 1.8, trend: 'stable' },
                  ].map((period, idx) => (
                    <div key={idx} className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                      <span className="font-bold text-sm">{period.month}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-green-400">{period.rate}%</span>
                        <span className="text-xs text-green-400 font-bold">{period.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Industry Avg</p>
                  <p className="text-xl font-bold text-gray-400">2.0%</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Your Rate</p>
                  <p className="text-xl font-bold text-green-400">2.4%</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Top Performers</p>
                  <p className="text-xl font-bold text-purple-400">3.5%</p>
                </div>
              </div>

              {/* Optimization Tips */}
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                <p className="text-xs font-bold text-green-400 mb-2">💡 Tips to Improve Conversion Rate</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Focus on products with higher conversion rates (3%+)</li>
                  <li>• Improve targeting to reach more qualified leads</li>
                  <li>• Use social proof and testimonials in your promotions</li>
                  <li>• Create urgency with limited-time offers</li>
                  <li>• A/B test different promotional messages</li>
                </ul>
              </div>

              <button
                onClick={() => setSelectedMetric(null)}
                className="w-full py-3 bg-green-600 hover:bg-green-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Network Performance Modals */}
      {selectedNetworkMetric === 'size' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Network Size</h3>
                <p className="text-gray-500 text-sm mt-1">Complete network size analysis</p>
              </div>
              <button
                onClick={() => setSelectedNetworkMetric(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl">
                <p className="text-xs text-cyan-400 font-bold mb-2">Current Network Size</p>
                <p className="text-4xl font-bold text-cyan-400 mb-2">142</p>
                <p className="text-sm text-gray-400">+12 this month • +9.2% growth</p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Network Breakdown</h4>
                <div className="space-y-3">
                  {[
                    { level: 'Direct Referrals', count: 14, percentage: 9.9 },
                    { level: 'Level 2', count: 45, percentage: 31.7 },
                    { level: 'Level 3', count: 52, percentage: 36.6 },
                    { level: 'Level 4+', count: 31, percentage: 21.8 },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">{item.level}</span>
                        <span className="text-lg font-bold text-cyan-400">{item.count} members</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${item.percentage}%` }} />
                      </div>
                      <p className="text-xs text-gray-400 mt-1">{item.percentage}% of network</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Growth History</h4>
                <div className="space-y-2">
                  {[
                    { month: 'January 2026', size: 142, growth: 12, rate: 9.2 },
                    { month: 'December 2025', size: 130, growth: 10, rate: 8.3 },
                    { month: 'November 2025', size: 120, growth: 8, rate: 7.1 },
                    { month: 'October 2025', size: 112, growth: 6, rate: 5.7 },
                    { month: 'September 2025', size: 106, growth: 5, rate: 5.0 },
                  ].map((period, idx) => (
                    <div key={idx} className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                      <span className="font-bold text-sm">{period.month}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-cyan-400">{period.size} members</span>
                        <span className="text-xs text-green-400 font-bold">+{period.growth} (+{period.rate}%)</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <p className="text-xs font-bold text-cyan-400 mb-2">💡 Growth Projections</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Next month (projected):</span>
                    <span className="font-bold text-cyan-400">~155 members</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">6-month target:</span>
                    <span className="font-bold text-green-400">~200 members</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">At current growth rate:</span>
                    <span className="font-bold text-purple-400">~245 in 6 months</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedNetworkMetric(null)}
                className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedNetworkMetric === 'active' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Active Members</h3>
                <p className="text-gray-500 text-sm mt-1">Active member analysis and engagement</p>
              </div>
              <button
                onClick={() => setSelectedNetworkMetric(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
                <p className="text-xs text-purple-400 font-bold mb-2">Active Members</p>
                <p className="text-4xl font-bold text-purple-400 mb-2">89</p>
                <p className="text-sm text-gray-400">62.7% active rate • 53 inactive</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Active Rate</p>
                  <p className="text-2xl font-bold text-green-400">62.7%</p>
                  <p className="text-xs text-gray-400">Above average (55%)</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Inactive Members</p>
                  <p className="text-2xl font-bold text-gray-400">53</p>
                  <p className="text-xs text-gray-400">37.3% of network</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Activity Levels</h4>
                <div className="space-y-3">
                  {[
                    { level: 'Highly Active', count: 34, percentage: 38.2, description: 'Daily activity' },
                    { level: 'Active', count: 42, percentage: 47.2, description: 'Weekly activity' },
                    { level: 'Moderate', count: 13, percentage: 14.6, description: 'Monthly activity' },
                    { level: 'Inactive', count: 53, percentage: 37.3, description: 'No recent activity' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="font-bold">{item.level}</span>
                          <p className="text-xs text-gray-400">{item.description}</p>
                        </div>
                        <span className="text-lg font-bold text-purple-400">{item.count}</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full" style={{ width: `${item.percentage}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                <p className="text-xs font-bold text-purple-400 mb-2">💡 Tips to Increase Activity</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Send weekly engagement emails to inactive members</li>
                  <li>• Host monthly training calls for network members</li>
                  <li>• Create challenges and incentives for activity</li>
                  <li>• Provide resources and support to struggling members</li>
                </ul>
              </div>

              <button
                onClick={() => setSelectedNetworkMetric(null)}
                className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedNetworkMetric === 'earnings' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Network Earnings</h3>
                <p className="text-gray-500 text-sm mt-1">Network earnings breakdown and analysis</p>
              </div>
              <button
                onClick={() => setSelectedNetworkMetric(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl">
                <p className="text-xs text-green-400 font-bold mb-2">Network Earnings (This Month)</p>
                <p className="text-4xl font-bold text-green-400 mb-2">$2,450</p>
                <p className="text-sm text-gray-400">+18.5% from last month • Excellent growth</p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Earnings by Level</h4>
                <div className="space-y-3">
                  {[
                    { level: 'Level 1 (Direct)', earnings: 1680, percentage: 68.6, members: 14 },
                    { level: 'Level 2', earnings: 540, percentage: 22.0, members: 45 },
                    { level: 'Level 3', earnings: 156, percentage: 6.4, members: 52 },
                    { level: 'Level 4+', earnings: 74, percentage: 3.0, members: 31 },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">{item.level}</span>
                        <span className="text-lg font-bold text-green-400">${item.earnings}</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-2">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: `${item.percentage}%` }} />
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>{item.members} members</span>
                        <span>{item.percentage}% of earnings</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Monthly Earnings History</h4>
                <div className="space-y-2">
                  {[
                    { month: 'January 2026', earnings: 2450, growth: '+18.5%' },
                    { month: 'December 2025', earnings: 2068, growth: '+15.2%' },
                    { month: 'November 2025', earnings: 1795, growth: '+12.8%' },
                    { month: 'October 2025', earnings: 1591, growth: '+10.5%' },
                    { month: 'September 2025', earnings: 1440, growth: '+8.2%' },
                  ].map((period, idx) => (
                    <div key={idx} className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                      <span className="font-bold text-sm">{period.month}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-green-400">${period.earnings}</span>
                        <span className="text-xs text-green-400 font-bold">{period.growth}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                <p className="text-xs font-bold text-green-400 mb-2">📈 Projections</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Next month (projected):</span>
                    <span className="font-bold text-green-400">~$2,900</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">6-month projection:</span>
                    <span className="font-bold text-cyan-400">~$4,200/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">If network reaches 200:</span>
                    <span className="font-bold text-purple-400">~$3,500/month</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedNetworkMetric(null)}
                className="w-full py-3 bg-green-600 hover:bg-green-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedNetworkMetric === 'score' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Network Score</h3>
                <p className="text-gray-500 text-sm mt-1">Comprehensive network performance score</p>
              </div>
              <button
                onClick={() => setSelectedNetworkMetric(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl">
                <p className="text-xs text-green-400 font-bold mb-2">Network Score</p>
                <p className="text-4xl font-bold text-green-400 mb-2">8.7/10</p>
                <p className="text-sm text-gray-400">Top 15% • Excellent performance</p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Score Breakdown</h4>
                <div className="space-y-3">
                  {[
                    { factor: 'Growth Rate', score: 9.2, weight: 30, status: 'Excellent' },
                    { factor: 'Engagement', score: 9.0, weight: 25, status: 'Excellent' },
                    { factor: 'Retention', score: 9.4, weight: 25, status: 'Excellent' },
                    { factor: 'Earnings', score: 8.5, weight: 20, status: 'Good' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">{item.factor}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-green-400">{item.score}/10</span>
                          <span className="px-2 py-0.5 rounded text-xs font-bold bg-green-500/10 text-green-400 border border-green-500/20">
                            {item.status}
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: `${(item.score / 10) * 100}%` }} />
                      </div>
                      <p className="text-xs text-gray-400 mt-1">Weight: {item.weight}% of total score</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <p className="text-xs font-bold text-cyan-400 mb-2">💡 How to Reach 9.5+</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Increase network growth rate to 12%+ (currently 9.2%)</li>
                  <li>• Maintain engagement score above 9.0</li>
                  <li>• Improve retention to 96%+ (currently 94%)</li>
                  <li>• Boost network earnings to $3,000+/month</li>
                </ul>
              </div>

              <button
                onClick={() => setSelectedNetworkMetric(null)}
                className="w-full py-3 bg-green-600 hover:bg-green-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedNetworkMetric === 'growth' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Growth Rate</h3>
                <p className="text-gray-500 text-sm mt-1">Network growth rate analysis</p>
              </div>
              <button
                onClick={() => setSelectedNetworkMetric(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl">
                <p className="text-xs text-cyan-400 font-bold mb-2">Current Growth Rate</p>
                <p className="text-4xl font-bold text-cyan-400 mb-2">+9.2%</p>
                <p className="text-sm text-gray-400">Faster than 78% of networks • Excellent</p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Monthly Growth History</h4>
                <div className="space-y-2">
                  {[
                    { month: 'January 2026', rate: 9.2, members: 142, new: 12 },
                    { month: 'December 2025', rate: 8.3, members: 130, new: 10 },
                    { month: 'November 2025', rate: 7.1, members: 120, new: 8 },
                    { month: 'October 2025', rate: 5.7, members: 112, new: 6 },
                    { month: 'September 2025', rate: 5.0, members: 106, new: 5 },
                  ].map((period, idx) => (
                    <div key={idx} className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                      <span className="font-bold text-sm">{period.month}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-cyan-400">+{period.rate}%</span>
                        <span className="text-xs text-gray-400">+{period.new} new</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <p className="text-xs font-bold text-cyan-400 mb-2">💡 Tips to Increase Growth</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Focus on quality referrals over quantity</li>
                  <li>• Develop team leaders to accelerate growth</li>
                  <li>• Use recruitment tools and marketing assets</li>
                  <li>• Target 12%+ monthly growth rate</li>
                </ul>
              </div>

              <button
                onClick={() => setSelectedNetworkMetric(null)}
                className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedNetworkMetric === 'engagement' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Engagement</h3>
                <p className="text-gray-500 text-sm mt-1">Network engagement analysis</p>
              </div>
              <button
                onClick={() => setSelectedNetworkMetric(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
                <p className="text-xs text-purple-400 font-bold mb-2">Engagement Score</p>
                <p className="text-4xl font-bold text-purple-400 mb-2">5/5</p>
                <p className="text-sm text-gray-400">High • Excellent engagement levels</p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Engagement Metrics</h4>
                <div className="space-y-3">
                  {[
                    { metric: 'Active Participation', score: 5, description: 'Members actively engaging' },
                    { metric: 'Communication', score: 5, description: 'Regular communication flow' },
                    { metric: 'Training Attendance', score: 4, description: 'Training session participation' },
                    { metric: 'Content Sharing', score: 5, description: 'Members sharing content' },
                    { metric: 'Support Requests', score: 4, description: 'Members seeking help' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="font-bold">{item.metric}</span>
                          <p className="text-xs text-gray-400">{item.description}</p>
                        </div>
                        <span className="text-lg font-bold text-purple-400">{item.score}/5</span>
                      </div>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <div key={i} className={`flex-1 h-2 rounded ${i <= item.score ? 'bg-purple-400' : 'bg-gray-700'}`}></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                <p className="text-xs font-bold text-purple-400 mb-2">💡 Tips to Maintain High Engagement</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Host regular training calls and webinars</li>
                  <li>• Create engaging challenges and competitions</li>
                  <li>• Provide timely support and resources</li>
                  <li>• Celebrate member achievements publicly</li>
                </ul>
              </div>

              <button
                onClick={() => setSelectedNetworkMetric(null)}
                className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedNetworkMetric === 'retention' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Retention</h3>
                <p className="text-gray-500 text-sm mt-1">Member retention analysis</p>
              </div>
              <button
                onClick={() => setSelectedNetworkMetric(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl">
                <p className="text-xs text-green-400 font-bold mb-2">Member Retention Rate</p>
                <p className="text-4xl font-bold text-green-400 mb-2">94%</p>
                <p className="text-sm text-gray-400">Excellent • Top 10% of networks</p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Retention by Cohort</h4>
                <div className="space-y-3">
                  {[
                    { cohort: 'Joined This Month', retention: 100, members: 12, status: 'Perfect' },
                    { cohort: 'Joined Last Month', retention: 96, members: 10, status: 'Excellent' },
                    { cohort: 'Joined 3 Months Ago', retention: 94, members: 8, status: 'Excellent' },
                    { cohort: 'Joined 6 Months Ago', retention: 92, members: 15, status: 'Good' },
                    { cohort: 'Joined 1 Year Ago', retention: 88, members: 20, status: 'Good' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">{item.cohort}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-green-400">{item.retention}%</span>
                          <span className="px-2 py-0.5 rounded text-xs font-bold bg-green-500/10 text-green-400 border border-green-500/20">
                            {item.status}
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: `${item.retention}%` }} />
                      </div>
                      <p className="text-xs text-gray-400 mt-1">{item.members} members in cohort</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                <p className="text-xs font-bold text-green-400 mb-2">💡 Tips to Maintain High Retention</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Provide ongoing training and support</li>
                  <li>• Celebrate member milestones and achievements</li>
                  <li>• Create a sense of community and belonging</li>
                  <li>• Offer incentives for long-term commitment</li>
                </ul>
              </div>

              <button
                onClick={() => setSelectedNetworkMetric(null)}
                className="w-full py-3 bg-green-600 hover:bg-green-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Leaderboard User Modal */}
      {selectedLeaderboardUser && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">{selectedLeaderboardUser}</h3>
                <p className="text-gray-500 text-sm mt-1">Leaderboard profile details</p>
              </div>
              <button
                onClick={() => setSelectedLeaderboardUser(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {(() => {
                const userData = [
                  { name: 'Agent Nexus-15', rank: 1, earnings: 15800, network: 342, tier: 'Platinum', joinDate: 'Jan 2024', growth: '+12.5%' },
                  { name: 'Agent Nexus-42', rank: 2, earnings: 10240, network: 142, tier: 'Gold', joinDate: 'Mar 2024', growth: '+10.2%' },
                  { name: 'Agent Nexus-88', rank: 3, earnings: 8920, network: 98, tier: 'Gold', joinDate: 'Apr 2024', growth: '+9.8%' },
                  { name: 'Agent Nexus-33', rank: 4, earnings: 7450, network: 156, tier: 'Gold', joinDate: 'Feb 2024', growth: '+8.5%' },
                  { name: 'Agent Nexus-91', rank: 5, earnings: 6200, network: 87, tier: 'Silver', joinDate: 'May 2024', growth: '+7.2%' },
                  { name: 'Agent Nexus-77', rank: 27, earnings: 2450, network: 42, tier: 'Silver', joinDate: 'Jun 2024', growth: '+9.2%', isYou: true },
                ].find(u => u.name === selectedLeaderboardUser);

                if (!userData) return null;

                return (
                  <>
                    <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-xs text-purple-400 font-bold mb-2">Global Rank</p>
                          <p className="text-4xl font-bold text-purple-400">#{userData.rank}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                            userData.tier === 'Platinum' ? 'bg-purple-500/20 text-purple-400' :
                            userData.tier === 'Gold' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {userData.tier}
                          </span>
                          {userData.isYou && (
                            <span className="block mt-2 px-2 py-0.5 bg-purple-600 text-white text-[10px] font-bold rounded">YOU</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 rounded-xl">
                        <p className="text-xs text-gray-500 mb-1">Monthly Earnings</p>
                        <p className="text-2xl font-bold text-green-400">${userData.earnings.toLocaleString()}</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl">
                        <p className="text-xs text-gray-500 mb-1">Network Size</p>
                        <p className="text-2xl font-bold text-cyan-400">{userData.network}</p>
                      </div>
                    </div>

                    <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                      <p className="text-xs font-bold text-cyan-400 mb-2">Profile Information</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Joined:</span>
                          <span className="font-bold text-cyan-400">{userData.joinDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Growth Rate:</span>
                          <span className="font-bold text-green-400">{userData.growth}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Avg Earnings/Member:</span>
                          <span className="font-bold text-purple-400">${(userData.earnings / userData.network).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}

              <button
                onClick={() => setSelectedLeaderboardUser(null)}
                className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View All Actions Modal */}
      {showAllActionsModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">All Quick Actions</h3>
                <p className="text-gray-500 text-sm mt-1">Complete your daily checklist to boost earnings</p>
              </div>
              <button
                onClick={() => setShowAllActionsModal(false)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {quickActions.map((item) => {
                const handleActionClick = () => {
                  switch(item.id) {
                    case '1':
                      if (setActiveRoute) setActiveRoute(AppRoute.MARKETPLACE);
                      setShowAllActionsModal(false);
                      break;
                    case '2':
                      if (setActiveRoute) setActiveRoute(AppRoute.FRIENDS);
                      setShowAllActionsModal(false);
                      break;
                    case '3':
                      if (setActiveRoute) setActiveRoute(AppRoute.CONTENT_GENERATOR);
                      setShowAllActionsModal(false);
                      break;
                    case '4':
                      setShowAllActionsModal(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      break;
                    case '5':
                      if (setActiveRoute) setActiveRoute(AppRoute.ALLIANCE);
                      setShowAllActionsModal(false);
                      break;
                  }
                };

                return (
                  <div 
                    key={item.id} 
                    onClick={handleActionClick}
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={(e) => {
                        e.stopPropagation();
                        setQuickActions(prev => prev.map(action => 
                          action.id === item.id ? { ...action, completed: !action.completed } : action
                        ));
                      }}
                      className="w-5 h-5 rounded accent-purple-600 cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <div className="flex-1">
                      <span className={`text-sm font-medium block ${item.completed ? 'line-through text-gray-500' : 'text-gray-300'}`}>
                        {item.task}
                      </span>
                      {item.id === '1' && (
                        <p className="text-xs text-gray-500 mt-1">Navigate to Marketplace to share product links</p>
                      )}
                      {item.id === '2' && (
                        <p className="text-xs text-gray-500 mt-1">Check your Friends list for warm leads</p>
                      )}
                      {item.id === '3' && (
                        <p className="text-xs text-gray-500 mt-1">Use AI to generate engaging content</p>
                      )}
                      {item.id === '4' && (
                        <p className="text-xs text-gray-500 mt-1">Review your earnings and progress</p>
                      )}
                      {item.id === '5' && (
                        <p className="text-xs text-gray-500 mt-1">Connect with potential network members</p>
                      )}
                    </div>
                    {!item.completed && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleActionClick();
                        }}
                        className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-xs font-bold transition-all whitespace-nowrap"
                      >
                        Do Now
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl mb-6">
              <p className="text-xs font-bold text-cyan-400 mb-2">💡 Daily Tips</p>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• Complete all actions daily to maximize your earnings</li>
                <li>• Focus on high-commission products for better ROI</li>
                <li>• Engage consistently to build strong relationships</li>
                <li>• Track your progress to stay motivated</li>
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <span className="text-sm text-gray-400">
                Progress: <span className="font-bold text-purple-400">{quickActions.filter(a => a.completed).length}/{quickActions.length}</span> completed
              </span>
              <button
                onClick={() => setShowAllActionsModal(false)}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Affiliate Link Revenue Modal */}
      {showAffiliateRevenueModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Affiliate Link Revenue</h3>
                <p className="text-gray-500 text-sm mt-1">Complete revenue breakdown and analytics</p>
              </div>
              <button
                onClick={() => setShowAffiliateRevenueModal(false)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Total Revenue */}
              <div className="p-6 bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-2xl">
                <p className="text-xs text-green-400 font-bold mb-2">Total Affiliate Link Revenue</p>
                <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500 mb-2">
                  $14,210.00
                </p>
                <p className="text-sm text-gray-400">USD • +15.2% from last month • Excellent growth</p>
              </div>

              {/* Revenue Breakdown */}
              <div>
                <h4 className="font-bold text-lg mb-4">Revenue by Product</h4>
                <div className="space-y-3">
                  {[
                    { product: 'NXC Trading Masterclass', revenue: 5625, sales: 37.5, commission: 25, percentage: 39.6 },
                    { product: 'Crypto Health Formula', revenue: 3400, sales: 40, commission: 40, percentage: 23.9 },
                    { product: 'MEV Bot Pro License', revenue: 2500, sales: 50, commission: 10, percentage: 17.6 },
                    { product: 'Blockchain Marketing Kit', revenue: 1710, sales: 18, commission: 30, percentage: 12.0 },
                    { product: 'Elite Performance Apparel', revenue: 675, sales: 15, commission: 15, percentage: 4.8 },
                    { product: 'Other Products', revenue: 500, sales: 10, commission: 20, percentage: 3.5 },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-green-500/30 transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">{item.product}</span>
                        <span className="text-lg font-bold text-green-400">${item.revenue.toLocaleString()}</span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Sales:</span>
                          <span className="font-bold text-cyan-400 ml-2">{item.sales}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Commission:</span>
                          <span className="font-bold text-purple-400 ml-2">{item.commission}%</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Share:</span>
                          <span className="font-bold text-green-400 ml-2">{item.percentage}%</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Avg/Sale:</span>
                          <span className="font-bold text-yellow-400 ml-2">${(item.revenue / item.sales).toFixed(0)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Total Clicks</p>
                  <p className="text-2xl font-bold text-cyan-400">12,450</p>
                  <p className="text-xs text-gray-400">This month</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Conversion Rate</p>
                  <p className="text-2xl font-bold text-green-400">2.4%</p>
                  <p className="text-xs text-gray-400">Above average</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Avg Revenue/Day</p>
                  <p className="text-2xl font-bold text-purple-400">$458</p>
                  <p className="text-xs text-gray-400">Daily average</p>
                </div>
              </div>

              {/* Monthly Breakdown */}
              <div>
                <h4 className="font-bold text-lg mb-4">Monthly Revenue History</h4>
                <div className="space-y-2">
                  {[
                    { month: 'January 2026', revenue: 14210, growth: '+15.2%', clicks: 12450 },
                    { month: 'December 2025', revenue: 12332, growth: '+12.8%', clicks: 10890 },
                    { month: 'November 2025', revenue: 10940, growth: '+10.5%', clicks: 9650 },
                    { month: 'October 2025', revenue: 9900, growth: '+8.2%', clicks: 8720 },
                    { month: 'September 2025', revenue: 9145, growth: '+5.9%', clicks: 8050 },
                  ].map((period, idx) => (
                    <div key={idx} className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-sm">{period.month}</span>
                        <p className="text-xs text-gray-400">{period.clicks.toLocaleString()} clicks</p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-green-400">${period.revenue.toLocaleString()}</span>
                        <p className="text-xs text-green-400 font-bold">{period.growth}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Performing Links */}
              <div>
                <h4 className="font-bold text-lg mb-4">Top Performing Links</h4>
                <div className="space-y-2">
                  {[
                    { link: 'bitnex.us/nxc-masterclass', product: 'NXC Trading Masterclass', clicks: 3450, revenue: 2156, conversion: 3.2 },
                    { link: 'bitnex.us/crypto-health', product: 'Crypto Health Formula', clicks: 2890, revenue: 1632, conversion: 2.8 },
                    { link: 'bitnex.us/mev-bot', product: 'MEV Bot Pro License', clicks: 3120, revenue: 1560, conversion: 2.1 },
                  ].map((link, idx) => (
                    <div key={idx} className="p-3 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <code className="text-xs text-cyan-400 font-mono">{link.link}</code>
                          <p className="text-xs text-gray-400 mt-1">{link.product}</p>
                        </div>
                        <span className="text-lg font-bold text-green-400">${link.revenue.toLocaleString()}</span>
                      </div>
                      <div className="flex gap-4 text-xs text-gray-400">
                        <span>{link.clicks.toLocaleString()} clicks</span>
                        <span>•</span>
                        <span>{link.conversion}% conversion</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-white/5">
                <button
                  onClick={() => {
                    setShowAffiliateRevenueModal(false);
                    if (setActiveRoute) setActiveRoute(AppRoute.AFFILIATE);
                  }}
                  className="flex-1 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl font-bold transition-all"
                >
                  View All Links
                </button>
                <button
                  onClick={() => {
                    setShowAffiliateRevenueModal(false);
                    if (setActiveRoute) setActiveRoute(AppRoute.MARKETPLACE);
                  }}
                  className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all"
                >
                  Generate New Link
                </button>
                <button
                  onClick={() => setShowAffiliateRevenueModal(false)}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
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

export default Dashboard;

