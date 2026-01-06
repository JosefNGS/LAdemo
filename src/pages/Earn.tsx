import React from 'react';
import { ICONS } from '../constants';
import { AppRoute } from '../types';

interface EarnProps {
  setActiveRoute?: (route: AppRoute) => void;
}

const Earn: React.FC<EarnProps> = ({ setActiveRoute }) => {
  // All income streams data
  const incomeStreams = [
    {
      id: 'affiliate',
      name: 'Affiliate Commissions',
      amount: 892,
      percentage: 75,
      trend: +15.2,
      icon: '💰',
      color: 'purple',
      description: 'Earnings from product sales through affiliate links',
      monthlyGrowth: '+$120',
      topProducts: [
        { name: 'NXC Trading Masterclass', earnings: 375 },
        { name: 'Crypto Health Formula', earnings: 340 },
        { name: 'MEV Bot Pro License', earnings: 500 },
      ]
    },
    {
      id: 'bot',
      name: 'MEV/XAB Bot Returns',
      amount: 234,
      percentage: 20,
      trend: +8.5,
      icon: '🤖',
      color: 'cyan',
      description: 'Passive income from automated trading bots',
      monthlyGrowth: '+$45',
      botDetails: [
        { name: 'MEV Bot Alpha', earnings: 156.25 },
        { name: 'XAB Bot (XRP)', earnings: 248.50 },
      ]
    },
    {
      id: 'network',
      name: 'Sub-Affiliate Network',
      amount: 58,
      percentage: 5,
      trend: +12.3,
      icon: '🌐',
      color: 'green',
      description: 'Commissions from your referral network',
      monthlyGrowth: '+$8',
      networkStats: {
        directReferrals: 12,
        subAffiliates: 30,
        totalNetwork: 42
      }
    },
    {
      id: 'content',
      name: 'Content Monetization',
      amount: 26,
      percentage: 2,
      trend: +25.0,
      icon: '📝',
      color: 'yellow',
      description: 'Revenue from content generation and sharing',
      monthlyGrowth: '+$5',
      contentStats: {
        postsGenerated: 45,
        shares: 120,
        engagement: 890
      }
    },
    {
      id: 'academy',
      name: 'Academy Revenue',
      amount: 0,
      percentage: 0,
      trend: 0,
      icon: '🎓',
      color: 'purple',
      description: 'Earnings from course sales and referrals',
      monthlyGrowth: '$0',
      potential: 'Start promoting courses to unlock this income stream'
    }
  ];

  const totalIncome = incomeStreams.reduce((sum, stream) => sum + stream.amount, 0);
  const passiveIncome = incomeStreams.filter(s => s.id === 'bot' || s.id === 'network').reduce((sum, s) => sum + s.amount, 0);
  const passivePercentage = Math.round((passiveIncome / totalIncome) * 100);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-display">Earn</h2>
          <p className="text-gray-500 text-sm">Complete overview of all your income streams</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setActiveRoute?.(AppRoute.BOT_LAB)}
            className="px-6 py-3 bg-purple-600/20 text-purple-400 border border-purple-500/30 rounded-xl font-bold hover:bg-purple-600/30 transition-all"
          >
            Bot Lab
          </button>
          <button 
            onClick={() => setActiveRoute?.(AppRoute.MARKETPLACE)}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
          >
            Find Products
          </button>
        </div>
      </div>

      {/* Total Income Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-card p-6 rounded-3xl border border-white/5 col-span-1 md:col-span-2">
          <p className="text-gray-400 text-sm font-medium mb-2">Total Monthly Income</p>
          <h3 className="text-4xl font-bold font-display mb-2">${totalIncome.toLocaleString()}</h3>
          <p className="text-green-400 text-sm">+18.5% from last month</p>
        </div>
        <div className="glass-card p-6 rounded-3xl border border-white/5">
          <p className="text-gray-400 text-sm font-medium mb-2">Passive Income</p>
          <h3 className="text-3xl font-bold text-green-400 mb-2">{passivePercentage}%</h3>
          <p className="text-gray-500 text-sm">${passiveIncome}/month</p>
        </div>
        <div className="glass-card p-6 rounded-3xl border border-white/5">
          <p className="text-gray-400 text-sm font-medium mb-2">Active Income</p>
          <h3 className="text-3xl font-bold text-purple-400 mb-2">{100 - passivePercentage}%</h3>
          <p className="text-gray-500 text-sm">${totalIncome - passiveIncome}/month</p>
        </div>
      </div>

      {/* Income Streams */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Income Streams</h3>
        {incomeStreams.map((stream) => (
          <div key={stream.id} className="glass-card p-6 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className={`w-12 h-12 rounded-2xl bg-${stream.color}-500/10 border border-${stream.color}-500/20 flex items-center justify-center text-2xl`}>
                  {stream.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-bold">{stream.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold bg-${stream.color}-500/10 text-${stream.color}-400 border border-${stream.color}-500/20`}>
                      {stream.percentage}% of income
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{stream.description}</p>
                  
                  {/* Stream-specific details */}
                  {stream.id === 'affiliate' && stream.topProducts && (
                    <div className="mt-3 space-y-2">
                      <p className="text-xs font-bold text-gray-400 uppercase">Top Products</p>
                      {stream.topProducts.map((product, i) => (
                        <div key={i} className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                          <span className="text-sm text-gray-300">{product.name}</span>
                          <span className="text-sm font-bold text-green-400">${product.earnings}/mo</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {stream.id === 'bot' && stream.botDetails && (
                    <div className="mt-3 space-y-2">
                      <p className="text-xs font-bold text-gray-400 uppercase">Bot Earnings</p>
                      {stream.botDetails.map((bot, i) => (
                        <div key={i} className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                          <span className="text-sm text-gray-300">{bot.name}</span>
                          <span className="text-sm font-bold text-cyan-400">${bot.earnings}/mo</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {stream.id === 'network' && stream.networkStats && (
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="p-2 bg-white/5 rounded-lg text-center">
                        <p className="text-xs text-gray-500">Direct</p>
                        <p className="text-sm font-bold">{stream.networkStats.directReferrals}</p>
                      </div>
                      <div className="p-2 bg-white/5 rounded-lg text-center">
                        <p className="text-xs text-gray-500">Sub-Affiliates</p>
                        <p className="text-sm font-bold">{stream.networkStats.subAffiliates}</p>
                      </div>
                      <div className="p-2 bg-white/5 rounded-lg text-center">
                        <p className="text-xs text-gray-500">Total Network</p>
                        <p className="text-sm font-bold">{stream.networkStats.totalNetwork}</p>
                      </div>
                    </div>
                  )}
                  
                  {stream.id === 'content' && stream.contentStats && (
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="p-2 bg-white/5 rounded-lg text-center">
                        <p className="text-xs text-gray-500">Posts</p>
                        <p className="text-sm font-bold">{stream.contentStats.postsGenerated}</p>
                      </div>
                      <div className="p-2 bg-white/5 rounded-lg text-center">
                        <p className="text-xs text-gray-500">Shares</p>
                        <p className="text-sm font-bold">{stream.contentStats.shares}</p>
                      </div>
                      <div className="p-2 bg-white/5 rounded-lg text-center">
                        <p className="text-xs text-gray-500">Engagement</p>
                        <p className="text-sm font-bold">{stream.contentStats.engagement}</p>
                      </div>
                    </div>
                  )}
                  
                  {stream.id === 'academy' && stream.potential && (
                    <div className="mt-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                      <p className="text-xs text-yellow-400 font-bold mb-1">💡 Opportunity</p>
                      <p className="text-xs text-gray-400">{stream.potential}</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-2">
                <div className="text-right">
                  <p className="text-3xl font-bold text-green-400">${stream.amount}</p>
                  <p className="text-sm text-gray-500">per month</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-bold ${stream.trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {stream.trend > 0 ? '+' : ''}{stream.trend}%
                  </span>
                  <span className="text-xs text-gray-500">vs last month</span>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Growth</p>
                  <p className="text-sm font-bold text-green-400">{stream.monthlyGrowth}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Income Breakdown Chart */}
      <div className="glass-card p-6 rounded-3xl border border-white/5">
        <h3 className="text-xl font-bold mb-4">Income Breakdown</h3>
        <div className="space-y-3">
          {incomeStreams.filter(s => s.amount > 0).map((stream) => (
            <div key={stream.id} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span>{stream.icon}</span>
                  <span className="font-medium">{stream.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500">{stream.percentage}%</span>
                  <span className="font-bold">${stream.amount}</span>
                </div>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r from-${stream.color}-500 to-${stream.color}-400 rounded-full transition-all`}
                  style={{ width: `${stream.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="glass-card p-6 rounded-3xl border border-white/5">
        <h3 className="text-xl font-bold mb-4">Boost Your Earnings</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => setActiveRoute?.(AppRoute.MARKETPLACE)}
            className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all text-left"
          >
            <div className="flex items-center gap-3 mb-2">
              <ICONS.Marketplace />
              <h4 className="font-bold">Find Products</h4>
            </div>
            <p className="text-sm text-gray-500">Discover high-commission products to promote</p>
          </button>
          
          <button 
            onClick={() => setActiveRoute?.(AppRoute.BOT_LAB)}
            className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all text-left"
          >
            <div className="flex items-center gap-3 mb-2">
              <ICONS.Earn />
              <h4 className="font-bold">Deploy Bots</h4>
            </div>
            <p className="text-sm text-gray-500">Start earning passive income with MEV/XAB bots</p>
          </button>
          
          <button 
            onClick={() => setActiveRoute?.(AppRoute.ALLIANCE)}
            className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all text-left"
          >
            <div className="flex items-center gap-3 mb-2">
              <ICONS.Alliance />
              <h4 className="font-bold">Build Network</h4>
            </div>
            <p className="text-sm text-gray-500">Grow your sub-affiliate network for passive commissions</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Earn;
