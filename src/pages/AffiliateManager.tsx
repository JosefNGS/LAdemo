import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ICONS } from '../constants';

const AffiliateManager: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

  const stats = {
    totalClicks: 52810,
    conversions: 1267,
    conversionRate: 2.4,
    totalEarnings: 14210,
    subAffiliates: 42,
    activeLinks: 18,
  };

  const chartData = [
    { date: 'Mon', clicks: 1200, conversions: 28 },
    { date: 'Tue', clicks: 1900, conversions: 45 },
    { date: 'Wed', clicks: 3000, conversions: 72 },
    { date: 'Thu', clicks: 2780, conversions: 67 },
    { date: 'Fri', clicks: 1890, conversions: 45 },
    { date: 'Sat', clicks: 2390, conversions: 57 },
    { date: 'Sun', clicks: 3490, conversions: 84 },
  ];

  const topProducts = [
    { name: 'Nexus Node License', clicks: 15200, conversions: 456, revenue: 4560 },
    { name: 'AI Copywriter Pro', clicks: 12400, conversions: 372, revenue: 3720 },
    { name: 'NXC Trading Masterclass', clicks: 9800, conversions: 245, revenue: 2450 },
  ];

  const subAffiliates = [
    { name: 'Agent Nexus-42', tier: 'Gold', clicks: 5200, conversions: 125, earnings: 1250, commission: 250 },
    { name: 'Agent Nexus-88', tier: 'Silver', clicks: 3200, conversions: 77, earnings: 770, commission: 77 },
    { name: 'Agent Nexus-15', tier: 'Platinum', clicks: 8900, conversions: 223, earnings: 2230, commission: 446 },
  ];

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

      <div className="glass-card p-6 rounded-3xl border border-white/5">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6 rounded-3xl border border-white/5">
          <h3 className="text-xl font-bold mb-6">Top Performing Products</h3>
          <div className="space-y-4">
            {topProducts.map((product, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-xl">
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
              <div key={i} className="p-4 bg-white/5 rounded-xl">
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
          {['Nexus Node License', 'AI Copywriter Pro', 'NXC Trading Masterclass'].map((product, i) => (
            <div key={i} className="p-4 bg-white/5 rounded-xl flex items-center justify-between">
              <div>
                <p className="font-bold text-sm">{product}</p>
                <p className="text-gray-500 text-xs font-mono">nexus.io/ref/7781/{product.toLowerCase().replace(/\s+/g, '-')}</p>
              </div>
              <button className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold transition-all">
                Copy
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AffiliateManager;

