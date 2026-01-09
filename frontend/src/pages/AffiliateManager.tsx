import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ICONS } from '../constants';
import { AppRoute } from '../types';
import { navigateToUserProfile } from '../utils/profileNavigation';

interface AffiliateManagerProps {
  setActiveRoute?: (route: AppRoute) => void;
}

const AffiliateManager: React.FC<AffiliateManagerProps> = ({ setActiveRoute }) => {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');
  const [showTaxDetails, setShowTaxDetails] = useState(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  // Data based on time range
  const getStats = () => {
    const baseStats = {
      '7d': { totalClicks: 12450, conversions: 298, conversionRate: 2.4, totalEarnings: 3350, subAffiliates: 42, activeLinks: 18 },
      '30d': { totalClicks: 52810, conversions: 1267, conversionRate: 2.4, totalEarnings: 14210, subAffiliates: 42, activeLinks: 18 },
      '90d': { totalClicks: 158430, conversions: 3802, conversionRate: 2.4, totalEarnings: 42630, subAffiliates: 42, activeLinks: 18 },
    };
    return baseStats[timeRange];
  };

  const stats = getStats();

  const getChartData = () => {
    if (timeRange === '7d') {
      return [
        { date: 'Mon', clicks: 1200, conversions: 28 },
        { date: 'Tue', clicks: 1900, conversions: 45 },
        { date: 'Wed', clicks: 3000, conversions: 72 },
        { date: 'Thu', clicks: 2780, conversions: 67 },
        { date: 'Fri', clicks: 1890, conversions: 45 },
        { date: 'Sat', clicks: 2390, conversions: 57 },
        { date: 'Sun', clicks: 3490, conversions: 84 },
      ];
    } else if (timeRange === '30d') {
      return [
        { date: 'Week 1', clicks: 12450, conversions: 298 },
        { date: 'Week 2', clicks: 15200, conversions: 365 },
        { date: 'Week 3', clicks: 13800, conversions: 331 },
        { date: 'Week 4', clicks: 11360, conversions: 273 },
      ];
    } else {
      return [
        { date: 'Month 1', clicks: 52810, conversions: 1267 },
        { date: 'Month 2', clicks: 61200, conversions: 1469 },
        { date: 'Month 3', clicks: 44420, conversions: 1066 },
      ];
    }
  };

  const chartData = getChartData();

  const getTopProducts = () => {
    const baseProducts = {
      '7d': [
        { name: 'Nexus Node License', clicks: 3600, conversions: 108, revenue: 1080 },
        { name: 'AI Copywriter Pro', clicks: 2900, conversions: 87, revenue: 870 },
        { name: 'NXC Trading Masterclass', clicks: 2300, conversions: 58, revenue: 580 },
      ],
      '30d': [
        { name: 'Nexus Node License', clicks: 15200, conversions: 456, revenue: 4560 },
        { name: 'AI Copywriter Pro', clicks: 12400, conversions: 372, revenue: 3720 },
        { name: 'NXC Trading Masterclass', clicks: 9800, conversions: 245, revenue: 2450 },
      ],
      '90d': [
        { name: 'Nexus Node License', clicks: 45600, conversions: 1368, revenue: 13680 },
        { name: 'AI Copywriter Pro', clicks: 37200, conversions: 1116, revenue: 11160 },
        { name: 'NXC Trading Masterclass', clicks: 29400, conversions: 735, revenue: 7350 },
      ],
    };
    return baseProducts[timeRange];
  };

  const topProducts = getTopProducts();

  const getSubAffiliates = () => {
    const baseSubAffiliates = {
      '7d': [
        { name: 'Agent Nexus-42', tier: 'Gold', clicks: 1230, conversions: 30, earnings: 295, commission: 59 },
        { name: 'Agent Nexus-88', tier: 'Silver', clicks: 760, conversions: 18, earnings: 182, commission: 18 },
        { name: 'Agent Nexus-15', tier: 'Platinum', clicks: 2100, conversions: 53, earnings: 527, commission: 105 },
      ],
      '30d': [
        { name: 'Agent Nexus-42', tier: 'Gold', clicks: 5200, conversions: 125, earnings: 1250, commission: 250 },
        { name: 'Agent Nexus-88', tier: 'Silver', clicks: 3200, conversions: 77, earnings: 770, commission: 77 },
        { name: 'Agent Nexus-15', tier: 'Platinum', clicks: 8900, conversions: 223, earnings: 2230, commission: 446 },
      ],
      '90d': [
        { name: 'Agent Nexus-42', tier: 'Gold', clicks: 15600, conversions: 375, earnings: 3750, commission: 750 },
        { name: 'Agent Nexus-88', tier: 'Silver', clicks: 9600, conversions: 231, earnings: 2310, commission: 231 },
        { name: 'Agent Nexus-15', tier: 'Platinum', clicks: 26700, conversions: 669, earnings: 6690, commission: 1338 },
      ],
    };
    return baseSubAffiliates[timeRange];
  };

  const subAffiliates = getSubAffiliates();

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-display">Affiliate Manager</h2>
          <p className="text-gray-500 text-sm">Track clicks, conversions, and sub-affiliate performance</p>
        </div>
        <div className="flex gap-2 bg-white/5 p-1 rounded-2xl border border-white/5">
          {(['7d', '30d', '90d'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                timeRange === range
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="glass-card p-4 rounded-2xl border border-white/5">
          <p className="text-gray-500 text-xs mb-1">Total Clicks</p>
          <p className="text-2xl font-bold">{stats.totalClicks.toLocaleString()}</p>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-white/5">
          <p className="text-gray-500 text-xs mb-1">Conversions</p>
          <p className="text-2xl font-bold">{stats.conversions.toLocaleString()}</p>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-white/5">
          <p className="text-gray-500 text-xs mb-1">Conversion Rate</p>
          <p className="text-2xl font-bold text-cyan-400">{stats.conversionRate}%</p>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-white/5">
          <p className="text-gray-500 text-xs mb-1">Total Earnings</p>
          <p className="text-2xl font-bold text-green-400">${stats.totalEarnings.toLocaleString()}</p>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-white/5">
          <p className="text-gray-500 text-xs mb-1">Sub-Affiliates</p>
          <p className="text-2xl font-bold">{stats.subAffiliates}</p>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-white/5">
          <p className="text-gray-500 text-xs mb-1">Active Links</p>
          <p className="text-2xl font-bold">{stats.activeLinks}</p>
        </div>
      </div>

      {/* Financial Freedom Dashboard */}
      <div className="glass-card p-6 rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-cyan-500/5 mb-6">
        <h3 className="text-xl font-bold mb-4">Financial Freedom Dashboard</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
            <p className="text-xs text-gray-500 mb-1">Progress to Goal</p>
            <p className="text-2xl font-bold text-green-400">
              {timeRange === '7d' ? '4.7%' : timeRange === '30d' ? '23.7%' : '71.1%'}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              ${timeRange === '7d' ? '235' : timeRange === '30d' ? '1,184' : '3,553'} / $5,000
            </p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
            <p className="text-xs text-gray-500 mb-1">Income Diversification</p>
            <p className="text-2xl font-bold text-cyan-400">8.5/10</p>
            <p className="text-xs text-green-400 mt-1">✓ Good</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
            <p className="text-xs text-gray-500 mb-1">Passive Income %</p>
            <p className="text-2xl font-bold text-purple-400">25%</p>
            <p className="text-xs text-gray-400 mt-1">
              ${timeRange === '7d' ? '73' : timeRange === '30d' ? '292' : '876'}/{timeRange === '7d' ? 'week' : 'month'}
            </p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
            <p className="text-xs text-gray-500 mb-1">Time to Freedom</p>
            <p className="text-2xl font-bold text-yellow-400">~16 mo</p>
            <p className="text-xs text-gray-400 mt-1">At current rate</p>
          </div>
        </div>
        <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
          <p className="text-xs font-bold text-cyan-400 mb-2">📈 Revenue Forecast ({timeRange})</p>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-400 mb-1">
                {timeRange === '7d' ? 'Next Week' : timeRange === '30d' ? 'Next Month' : 'Next Quarter'}
              </p>
              <p className="font-bold text-cyan-400">
                ${timeRange === '7d' ? '380' : timeRange === '30d' ? '1,350' : '4,050'}
              </p>
              <p className="text-xs text-green-400">+14% projected</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">
                {timeRange === '7d' ? 'Next 2 Weeks' : timeRange === '30d' ? '3 Months' : '6 Months'}
              </p>
              <p className="font-bold text-purple-400">
                ${timeRange === '7d' ? '760' : timeRange === '30d' ? '1,680' : '5,040'}
              </p>
              <p className="text-xs text-green-400">+42% projected</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">
                {timeRange === '7d' ? 'Next Month' : timeRange === '30d' ? '6 Months' : '1 Year'}
              </p>
              <p className="font-bold text-green-400">
                ${timeRange === '7d' ? '1,520' : timeRange === '30d' ? '2,240' : '6,720'}
              </p>
              <p className="text-xs text-green-400">+89% projected</p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="glass-card p-6 rounded-3xl border border-white/5 mb-6">
        <h3 className="text-xl font-bold mb-6">Performance Overview</h3>
        <div className="h-64 w-full" style={{ minHeight: '256px', minWidth: '0' }}>
          <ResponsiveContainer width="100%" height="100%" minHeight={256} minWidth={0}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
              <XAxis dataKey="date" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis hide />
              <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '12px' }} />
              <Line type="monotone" dataKey="clicks" stroke="#06b6d4" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="conversions" stroke="#7c3aed" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tax Preparation Tools */}
      <div className="glass-card p-6 rounded-3xl border border-white/5 mb-6">
        <h3 className="text-xl font-bold mb-4">Tax Preparation Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
            <h4 className="font-bold mb-2">Earnings Export</h4>
            <p className="text-xs text-gray-400 mb-3">Download your earnings data for tax filing</p>
            <button className="w-full py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-xs font-bold transition-all">
              Export CSV
            </button>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
            <h4 className="font-bold mb-2">Quarterly Tax Estimate</h4>
            <p className="text-xs text-gray-400 mb-1">Estimated Q4 taxes:</p>
            <p className="text-2xl font-bold text-yellow-400 mb-3">$1,420</p>
            <button 
              onClick={() => setShowTaxDetails(true)}
              className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold transition-all"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6 rounded-3xl border border-white/5">
          <h3 className="text-xl font-bold mb-6">Top Performing Products</h3>
          <div className="space-y-4">
            {topProducts.map((product, i) => (
              <div 
                key={i} 
                onClick={() => {
                  if (setActiveRoute) {
                    setActiveRoute(AppRoute.MARKETPLACE);
                  }
                }}
                className="p-4 bg-white/5 hover:bg-purple-500/10 border border-white/5 hover:border-purple-500/30 rounded-xl cursor-pointer transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">{product.name}</h4>
                  <span className="text-green-400 font-bold">${product.revenue.toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Clicks</p>
                    <p className="font-bold">{product.clicks.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Conversions</p>
                    <p className="font-bold text-cyan-400">{product.conversions}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 rounded-3xl border border-white/5">
          <h3 className="text-xl font-bold mb-6">Sub-Affiliate Network</h3>
          <div className="space-y-4">
            {subAffiliates.map((aff, i) => (
              <div 
                key={i} 
                onClick={() => {
                  if (setActiveRoute && aff.name.startsWith('Agent Nexus-')) {
                    navigateToUserProfile(aff.name, setActiveRoute);
                  }
                }}
                className="p-4 bg-white/5 hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/30 rounded-xl cursor-pointer transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-bold">{aff.name}</h4>
                    <p className="text-gray-500 text-xs">{aff.tier} Tier</p>
                  </div>
                  <span className="text-purple-400 font-bold">${aff.commission}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs mt-3">
                  <div>
                    <p className="text-gray-500">Clicks</p>
                    <p className="font-bold">{aff.clicks.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Conv.</p>
                    <p className="font-bold">{aff.conversions}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Earnings</p>
                    <p className="font-bold text-green-400">${aff.earnings}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-card p-6 rounded-3xl border border-white/5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Affiliate Links</h3>
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-sm transition-all">
            Generate New Link
          </button>
        </div>
        <div className="space-y-3">
          {['Nexus Node License', 'AI Copywriter Pro', 'NXC Trading Masterclass'].map((product, i) => {
            const linkPath = `nexus.io/ref/7781/${product.toLowerCase().replace(/\s+/g, '-')}`;
            const fullLink = `https://${linkPath}`;
            const isCopied = copiedLink === fullLink;
            
            return (
              <div 
                key={i} 
                onClick={() => {
                  if (setActiveRoute) {
                    setActiveRoute(AppRoute.MARKETPLACE);
                  }
                }}
                className="p-4 bg-white/5 hover:bg-purple-500/10 border border-white/5 hover:border-purple-500/30 rounded-xl flex items-center justify-between cursor-pointer transition-all"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm">{product}</p>
                  <p className="text-gray-500 text-xs font-mono truncate">{linkPath}</p>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click when clicking copy button
                    navigator.clipboard.writeText(fullLink).then(() => {
                      setCopiedLink(fullLink);
                      setTimeout(() => setCopiedLink(null), 2000);
                    }).catch((err) => {
                      console.error('Failed to copy:', err);
                    });
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex-shrink-0 ml-3 ${
                    isCopied 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-white/5 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {isCopied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tax Details Modal */}
      {showTaxDetails && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Q4 Tax Estimate Details</h3>
              <button
                onClick={() => setShowTaxDetails(false)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Summary */}
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold">Total Estimated Tax</h4>
                  <p className="text-3xl font-bold text-yellow-400">$1,420</p>
                </div>
                <p className="text-sm text-gray-400">
                  Based on Q4 earnings: ${stats.totalEarnings.toLocaleString()}
                </p>
              </div>

              {/* Tax Breakdown */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold">Tax Breakdown</h4>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                    <div>
                      <p className="font-bold text-sm">Federal Income Tax</p>
                      <p className="text-xs text-gray-400">Estimated at 22%</p>
                    </div>
                    <p className="text-lg font-bold text-red-400">$1,120</p>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                    <div>
                      <p className="font-bold text-sm">Self-Employment Tax</p>
                      <p className="text-xs text-gray-400">15.3% on net earnings</p>
                    </div>
                    <p className="text-lg font-bold text-orange-400">$240</p>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                    <div>
                      <p className="font-bold text-sm">State Income Tax</p>
                      <p className="text-xs text-gray-400">Estimated at 5%</p>
                    </div>
                    <p className="text-lg font-bold text-yellow-400">$60</p>
                  </div>
                </div>
              </div>

              {/* Quarterly Earnings Breakdown */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold">Q4 Earnings Breakdown</h4>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <p className="text-sm text-gray-300">October Earnings</p>
                    <p className="font-bold">${Math.floor(stats.totalEarnings * 0.35).toLocaleString()}</p>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <p className="text-sm text-gray-300">November Earnings</p>
                    <p className="font-bold">${Math.floor(stats.totalEarnings * 0.33).toLocaleString()}</p>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <p className="text-sm text-gray-300">December Earnings</p>
                    <p className="font-bold">${Math.floor(stats.totalEarnings * 0.32).toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                <h5 className="font-bold text-yellow-400 mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                  Important Notes
                </h5>
                <ul className="text-xs text-gray-300 space-y-1 list-disc list-inside">
                  <li>This is an estimate based on current earnings and standard tax rates</li>
                  <li>Actual tax liability may vary based on deductions, credits, and other factors</li>
                  <li>Consult with a tax professional for accurate tax planning</li>
                  <li>Quarterly estimated tax payments may be required if annual tax exceeds $1,000</li>
                </ul>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => {
                    // Generate CSV export for tax purposes
                    const csvContent = `Quarter,Earnings,Estimated Tax\nQ4 2024,${stats.totalEarnings},1420`;
                    const blob = new Blob([csvContent], { type: 'text/csv' });
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'q4-tax-estimate.csv';
                    a.click();
                    window.URL.revokeObjectURL(url);
                  }}
                  className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
                >
                  Export Tax Report
                </button>
                <button
                  onClick={() => setShowTaxDetails(false)}
                  className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
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

export default AffiliateManager;


