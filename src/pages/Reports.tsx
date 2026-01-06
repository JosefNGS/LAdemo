import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ICONS } from '../constants';

const Reports: React.FC = () => {
  const [reportType, setReportType] = useState<'revenue' | 'users' | 'products'>('revenue');

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
    { name: 'MEV Bot Alpha', sales: 189, revenue: 5670 },
  ];

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
    </div>
  );
};

export default Reports;

