import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { ICONS } from '../constants';

const Reports: React.FC = () => {
  const [reportType, setReportType] = useState<'revenue' | 'users' | 'products' | 'affiliate'>('revenue');

  const revenueData = [
    { month: 'Jan', revenue: 45000, expenses: 12000 },
    { month: 'Feb', revenue: 52000, expenses: 15000 },
    { month: 'Mar', revenue: 48000, expenses: 13000 },
    { month: 'Apr', revenue: 61000, expenses: 18000 },
    { month: 'May', revenue: 55000, expenses: 16000 },
    { month: 'Jun', revenue: 67000, expenses: 20000 },
  ];

  const userGrowthData = [
    { month: 'Jan', new: 120, active: 450 },
    { month: 'Feb', new: 150, active: 520 },
    { month: 'Mar', new: 180, active: 580 },
    { month: 'Apr', new: 200, active: 650 },
    { month: 'May', new: 220, active: 720 },
    { month: 'Jun', new: 250, active: 800 },
  ];

  const productPerformance = [
    { name: 'Nexus Node License', sales: 456, revenue: 22800 },
    { name: 'AI Copywriter Pro', sales: 372, revenue: 5580 },
    { name: 'NXC Trading Masterclass', sales: 245, revenue: 6125 },
    { name: 'MEV Bot Alpha', sales: 234, revenue: 7020 },
    { name: 'XAB Bot Alpha (XRP)', sales: 189, revenue: 5670 },
  ];

  // Affiliate Marketing Data
  const affiliateStats = {
    totalClicks: 52810,
    totalConversions: 1267,
    conversionRate: 2.4,
    totalCommissions: 14210,
    averageOrderValue: 112.15,
    clickGrowth: 8.4,
    conversionGrowth: 15.2,
  };

  const topAffiliateLinks = [
    { id: 'LNK-001', name: 'AI Copywriter Pro', clicks: 12450, conversions: 312, rate: 2.51, revenue: 35040, commission: 3504 },
    { id: 'LNK-002', name: 'Nexus Node License', clicks: 9870, conversions: 289, rate: 2.93, revenue: 57800, commission: 5780 },
    { id: 'LNK-003', name: 'MEV Bot Alpha', clicks: 9230, conversions: 231, rate: 2.50, revenue: 115500, commission: 3465 },
    { id: 'LNK-006', name: 'XAB Bot Alpha (XRP)', clicks: 8230, conversions: 198, rate: 2.40, revenue: 99000, commission: 2970 },
    { id: 'LNK-004', name: 'NXC Trading Course', clicks: 6540, conversions: 156, rate: 2.38, revenue: 3900, commission: 975 },
    { id: 'LNK-005', name: 'Premium Membership', clicks: 5670, conversions: 142, rate: 2.50, revenue: 14200, commission: 1420 },
  ];

  const trafficSources = [
    { source: 'Social Media', clicks: 21450, conversions: 514, rate: 2.40, percentage: 40.6 },
    { source: 'Email Marketing', clicks: 15890, conversions: 412, rate: 2.59, percentage: 30.1 },
    { source: 'Direct', clicks: 8920, conversions: 214, rate: 2.40, percentage: 16.9 },
    { source: 'Search Engines', clicks: 4550, conversions: 98, rate: 2.15, percentage: 8.6 },
    { source: 'Referrals', clicks: 2000, conversions: 29, rate: 1.45, percentage: 3.8 },
  ];

  const deviceBreakdown = [
    { device: 'Mobile', clicks: 32150, conversions: 771, rate: 2.40, percentage: 60.9 },
    { device: 'Desktop', clicks: 18560, conversions: 456, rate: 2.46, percentage: 35.2 },
    { device: 'Tablet', clicks: 2100, conversions: 40, rate: 1.90, percentage: 3.9 },
  ];

  const geographicData = [
    { country: 'United States', clicks: 18920, conversions: 454, revenue: 50920 },
    { country: 'United Kingdom', clicks: 8230, conversions: 198, revenue: 22210 },
    { country: 'Canada', clicks: 6540, conversions: 156, revenue: 17490 },
    { country: 'Australia', clicks: 5670, conversions: 136, revenue: 15250 },
    { country: 'Germany', clicks: 4450, conversions: 107, revenue: 12000 },
  ];

  const campaignPerformance = [
    { campaign: 'Summer Sale 2024', clicks: 12450, conversions: 312, revenue: 35040, roi: 285 },
    { campaign: 'New Product Launch', clicks: 9870, conversions: 289, revenue: 32420, roi: 245 },
    { campaign: 'Black Friday', clicks: 15670, conversions: 452, revenue: 50720, roi: 320 },
    { campaign: 'Email Newsletter', clicks: 8230, conversions: 214, revenue: 24020, roi: 195 },
  ];

  const topAffiliates = [
    { name: 'Agent Nexus-77', network: 142, sales: 456, earnings: 5472, tier: 'Platinum' },
    { name: 'CryptoMaster-42', network: 98, sales: 312, earnings: 3744, tier: 'Gold' },
    { name: 'AffiliatePro-19', network: 76, sales: 289, earnings: 3468, tier: 'Gold' },
    { name: 'NetworkBuilder-55', network: 65, sales: 234, earnings: 2808, tier: 'Silver' },
    { name: 'LinkMaster-88', network: 54, sales: 198, earnings: 2376, tier: 'Silver' },
  ];

  const clickTrendData = [
    { day: 'Mon', clicks: 8200, conversions: 197 },
    { day: 'Tue', clicks: 9100, conversions: 218 },
    { day: 'Wed', clicks: 8700, conversions: 209 },
    { day: 'Thu', clicks: 9500, conversions: 228 },
    { day: 'Fri', clicks: 10200, conversions: 245 },
    { day: 'Sat', clicks: 7800, conversions: 187 },
    { day: 'Sun', clicks: 7300, conversions: 175 },
  ];

  const pieColors = ['#7c3aed', '#06b6d4', '#10b981', '#fbbf24', '#ef4444'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-display">Reports & Analytics</h2>
          <p className="text-gray-500 text-sm">Comprehensive platform analytics and performance metrics</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl font-bold text-sm hover:bg-white/10 transition-all">
            Export PDF
          </button>
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl font-bold text-sm hover:bg-white/10 transition-all">
            Export CSV
          </button>
        </div>
      </div>

      <div className="flex gap-2 bg-white/5 p-1 rounded-2xl border border-white/5">
        {[
          { id: 'revenue', label: 'Revenue' },
          { id: 'users', label: 'User Growth' },
          { id: 'products', label: 'Products' },
          { id: 'affiliate', label: 'Affiliate Marketing' },
        ].map((type) => (
          <button
            key={type.id}
            onClick={() => setReportType(type.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex-1 ${
              reportType === type.id
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {reportType === 'revenue' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <p className="text-gray-500 text-sm mb-2">Total Revenue</p>
              <p className="text-3xl font-bold text-green-400">$328,000</p>
              <p className="text-green-400 text-sm mt-2">+24.5% from last period</p>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <p className="text-gray-500 text-sm mb-2">Total Expenses</p>
              <p className="text-3xl font-bold text-red-400">$95,000</p>
              <p className="text-gray-500 text-sm mt-2">Operating costs</p>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <p className="text-gray-500 text-sm mb-2">Net Profit</p>
              <p className="text-3xl font-bold text-cyan-400">$233,000</p>
              <p className="text-cyan-400 text-sm mt-2">71% profit margin</p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <h3 className="text-xl font-bold mb-6">Revenue vs Expenses</h3>
            <div className="h-64 w-full" style={{ minHeight: '256px', minWidth: '0' }}>
              <ResponsiveContainer width="100%" height="100%" minHeight={256} minWidth={0}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                  <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '12px' }} />
                  <Bar dataKey="revenue" fill="#7c3aed" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="expenses" fill="#ef4444" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </>
      )}

      {reportType === 'users' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <p className="text-gray-500 text-sm mb-2">Total Users</p>
              <p className="text-3xl font-bold">3,720</p>
              <p className="text-green-400 text-sm mt-2">+250 this month</p>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <p className="text-gray-500 text-sm mb-2">Active Users</p>
              <p className="text-3xl font-bold text-cyan-400">2,800</p>
              <p className="text-gray-500 text-sm mt-2">75% active rate</p>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <p className="text-gray-500 text-sm mb-2">New Signups</p>
              <p className="text-3xl font-bold text-purple-400">250</p>
              <p className="text-purple-400 text-sm mt-2">This month</p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <h3 className="text-xl font-bold mb-6">User Growth Trend</h3>
            <div className="h-64 w-full" style={{ minHeight: '256px', minWidth: '0' }}>
              <ResponsiveContainer width="100%" height="100%" minHeight={256} minWidth={0}>
                <BarChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                  <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '12px' }} />
                  <Bar dataKey="new" fill="#06b6d4" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="active" fill="#7c3aed" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </>
      )}

      {reportType === 'products' && (
        <div className="glass-card p-6 rounded-3xl border border-white/5">
          <h3 className="text-xl font-bold mb-6">Product Performance</h3>
          <div className="space-y-4">
            {productPerformance.map((product, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold">{product.name}</h4>
                  <span className="text-green-400 font-bold">${product.revenue.toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Sales</p>
                    <p className="font-bold">{product.sales} units</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Revenue</p>
                    <p className="font-bold text-cyan-400">${product.revenue.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {reportType === 'affiliate' && (
        <>
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <p className="text-gray-500 text-sm mb-2">Total Clicks</p>
              <p className="text-3xl font-bold text-purple-400">52,810</p>
              <p className="text-green-400 text-sm mt-2">+8.4% from last month</p>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <p className="text-gray-500 text-sm mb-2">Conversions</p>
              <p className="text-3xl font-bold text-green-400">1,267</p>
              <p className="text-green-400 text-sm mt-2">+15.2% growth</p>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <p className="text-gray-500 text-sm mb-2">Conversion Rate</p>
              <p className="text-3xl font-bold text-cyan-400">2.4%</p>
              <p className="text-cyan-400 text-sm mt-2">+0.3% improvement</p>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <p className="text-gray-500 text-sm mb-2">Total Commissions</p>
              <p className="text-3xl font-bold text-yellow-400">$14,210</p>
              <p className="text-yellow-400 text-sm mt-2">This month</p>
            </div>
          </div>

          {/* Click & Conversion Trend */}
          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <h3 className="text-xl font-bold mb-6">Clicks & Conversions Trend</h3>
            <div className="h-64 w-full" style={{ minHeight: '256px', minWidth: '0' }}>
              <ResponsiveContainer width="100%" height="100%" minHeight={256} minWidth={0}>
                <LineChart data={clickTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                  <XAxis dataKey="day" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis yAxisId="left" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '12px' }} />
                  <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="#7c3aed" strokeWidth={3} dot={{ fill: '#7c3aed', r: 4 }} />
                  <Line yAxisId="right" type="monotone" dataKey="conversions" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex gap-6 mt-4 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                <span className="text-sm text-gray-400">Clicks</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-sm text-gray-400">Conversions</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Performing Links */}
            <div className="glass-card p-6 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold mb-4">Top Performing Affiliate Links</h3>
              <div className="space-y-3">
                {topAffiliateLinks.map((link, i) => (
                  <div key={link.id} className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center text-xs font-bold">
                          {i + 1}
                        </span>
                        <span className="font-bold text-sm">{link.name}</span>
                      </div>
                      <span className="text-green-400 font-bold">${link.commission.toLocaleString()}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs mt-3">
                      <div>
                        <p className="text-gray-500">Clicks</p>
                        <p className="font-bold text-purple-400">{link.clicks.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Conversions</p>
                        <p className="font-bold text-green-400">{link.conversions}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Rate</p>
                        <p className="font-bold text-cyan-400">{link.rate}%</p>
                      </div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-white/5">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Revenue Generated:</span>
                        <span className="font-bold text-yellow-400">${link.revenue.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Traffic Sources */}
            <div className="glass-card p-6 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold mb-4">Traffic Sources</h3>
              <div className="space-y-3 mb-4">
                {trafficSources.map((source, i) => (
                  <div key={source.source} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-bold">{source.source}</span>
                      <span className="text-gray-400">{source.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-cyan-500"
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs text-gray-500">
                      <span>Clicks: {source.clicks.toLocaleString()}</span>
                      <span>Conv: {source.conversions}</span>
                      <span>Rate: {source.rate}%</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/5">
                <h4 className="text-sm font-bold mb-3">Source Performance</h4>
                <div className="h-48 w-full" style={{ minHeight: '192px', minWidth: '0' }}>
                  <ResponsiveContainer width="100%" height="100%" minHeight={192} minWidth={0}>
                    <PieChart>
                      <Pie
                        data={trafficSources}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percentage }) => `${name}: ${percentage}%`}
                        outerRadius={70}
                        fill="#8884d8"
                        dataKey="percentage"
                      >
                        {trafficSources.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '12px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Device Breakdown */}
            <div className="glass-card p-6 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold mb-4">Device Performance</h3>
              <div className="space-y-4">
                {deviceBreakdown.map((device) => (
                  <div key={device.device} className="p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold">{device.device}</span>
                      <span className="text-cyan-400 font-bold">{device.rate}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
                        style={{ width: `${device.percentage}%` }}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs text-gray-400">
                      <span>Clicks: {device.clicks.toLocaleString()}</span>
                      <span>Conv: {device.conversions}</span>
                      <span>{device.percentage}% of traffic</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Geographic Performance */}
            <div className="glass-card p-6 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold mb-4">Top Countries</h3>
              <div className="space-y-3">
                {geographicData.map((geo, i) => (
                  <div key={geo.country} className="p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-cyan-600/20 text-cyan-400 flex items-center justify-center text-xs font-bold">
                          {i + 1}
                        </span>
                        <span className="font-bold">{geo.country}</span>
                      </div>
                      <span className="text-green-400 font-bold">${geo.revenue.toLocaleString()}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                      <span>Clicks: {geo.clicks.toLocaleString()}</span>
                      <span>Conversions: {geo.conversions}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Campaign Performance */}
          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <h3 className="text-xl font-bold mb-4">Campaign Performance</h3>
            <div className="space-y-3">
              {campaignPerformance.map((campaign) => (
                <div key={campaign.campaign} className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold">{campaign.campaign}</h4>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-xs text-gray-500">ROI</p>
                        <p className="text-lg font-bold text-green-400">{campaign.roi}%</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Revenue</p>
                        <p className="text-lg font-bold text-yellow-400">${campaign.revenue.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Clicks</p>
                      <p className="font-bold text-purple-400">{campaign.clicks.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Conversions</p>
                      <p className="font-bold text-green-400">{campaign.conversions}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Conversion Rate</p>
                      <p className="font-bold text-cyan-400">
                        {((campaign.conversions / campaign.clicks) * 100).toFixed(2)}%
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Affiliates */}
          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <h3 className="text-xl font-bold mb-4">Top Performing Affiliates</h3>
            <div className="space-y-3">
              {topAffiliates.map((affiliate, i) => (
                <div key={affiliate.name} className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold">{affiliate.name}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            affiliate.tier === 'Platinum' ? 'bg-purple-500/20 text-purple-400' :
                            affiliate.tier === 'Gold' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {affiliate.tier}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">Network: {affiliate.network} members</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-400">${affiliate.earnings.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">{affiliate.sales} sales</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <p className="text-gray-500 text-sm mb-2">Average Order Value</p>
              <p className="text-2xl font-bold text-cyan-400">$112.15</p>
              <p className="text-gray-500 text-xs mt-2">Per conversion</p>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <p className="text-gray-500 text-sm mb-2">Cost Per Click</p>
              <p className="text-2xl font-bold text-purple-400">$0.27</p>
              <p className="text-gray-500 text-xs mt-2">Average CPC</p>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <p className="text-gray-500 text-sm mb-2">Revenue Per Click</p>
              <p className="text-2xl font-bold text-green-400">$0.27</p>
              <p className="text-gray-500 text-xs mt-2">RPC metric</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Reports;

