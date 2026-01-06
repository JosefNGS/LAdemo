import React, { useState, useEffect } from 'react';
import { ICONS } from '../constants';

const Earn: React.FC = () => {
  const [stakeAmount, setStakeAmount] = useState(1000);
  const [apyRate, setApyRate] = useState(12);
  const nxcToUsd = 3.0;

  const calculateIncome = () => {
    const monthlyRate = apyRate / 100 / 12;
    const monthlyIncome = stakeAmount * monthlyRate * nxcToUsd;
    const yearlyIncome = stakeAmount * (apyRate / 100) * nxcToUsd;
    // Compound interest: A = P(1 + r/n)^(nt)
    const fiveYearCompound = stakeAmount * Math.pow(1 + apyRate / 100, 5) * nxcToUsd;
    return {
      monthly: monthlyIncome.toFixed(2),
      yearly: yearlyIncome.toFixed(2),
      fiveYear: fiveYearCompound.toFixed(2)
    };
  };

  const income = calculateIncome();

  const mevBots = [
    { id: 1, name: 'Arbitrage Bot Alpha', apy: 12.5, status: 'Active', balance: 1250, earnings: 156.25 },
    { id: 2, name: 'Liquidity Pool Beta', apy: 8.3, status: 'Active', balance: 3200, earnings: 265.60 },
    { id: 3, name: 'Flash Loan Gamma', apy: 15.2, status: 'Pending', balance: 0, earnings: 0 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-display">MEV Bot Lab</h2>
          <p className="text-gray-500 text-sm">Automated trading nodes for high-yield opportunities</p>
        </div>
        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all">
          Deploy New Bot
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-3xl border border-white/5">
          <p className="text-gray-400 text-sm font-medium">Total Staked</p>
          <h3 className="text-3xl font-bold font-display mt-2">4,450.00 <span className="text-lg text-gray-500">NXC</span></h3>
          <p className="text-green-400 text-sm mt-2">+421.85 NXC earned</p>
        </div>
        <div className="glass-card p-6 rounded-3xl border border-white/5">
          <p className="text-gray-400 text-sm font-medium">Average APY</p>
          <h3 className="text-3xl font-bold font-display mt-2">12.0%</h3>
          <p className="text-cyan-400 text-sm mt-2">Across all active bots</p>
        </div>
        <div className="glass-card p-6 rounded-3xl border border-white/5">
          <p className="text-gray-400 text-sm font-medium">Active Bots</p>
          <h3 className="text-3xl font-bold font-display mt-2">2</h3>
          <p className="text-gray-500 text-sm mt-2">1 pending activation</p>
        </div>
      </div>

      {/* Passive Income Projection Calculator */}
      <div className="glass-card p-6 rounded-3xl border border-white/5">
        <h3 className="text-xl font-bold mb-4">Passive Income Projection Calculator</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-bold text-gray-400 mb-2 block">Stake Amount (NXC)</label>
              <input
                type="number"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(Number(e.target.value) || 0)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-lg font-bold"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-400 mb-2 block">APY (%)</label>
              <input
                type="number"
                value={apyRate}
                onChange={(e) => setApyRate(Number(e.target.value) || 0)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-lg font-bold"
              />
            </div>
            <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
              <p className="text-xs text-gray-500 mb-1">NXC to USD Rate</p>
              <p className="text-sm font-bold">1 NXC = $3.00 USD</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-2xl border border-green-500/30">
              <p className="text-xs text-gray-400 mb-2">Monthly Passive Income</p>
              <p className="text-3xl font-bold text-green-400">${income.monthly}</p>
              <p className="text-xs text-gray-500 mt-1">Based on {apyRate}% APY</p>
            </div>
            <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
              <p className="text-xs text-gray-400 mb-2">Yearly Passive Income</p>
              <p className="text-2xl font-bold text-cyan-400">${income.yearly}</p>
            </div>
            <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
              <p className="text-xs text-gray-400 mb-2">In 5 Years (Compound)</p>
              <p className="text-2xl font-bold text-purple-400">${income.fiveYear}</p>
              <p className="text-xs text-gray-500 mt-1">With reinvestment</p>
            </div>
          </div>
        </div>
        <div className="mt-4 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
          <p className="text-xs text-cyan-400 font-bold mb-1">💡 Pro Tip</p>
          <p className="text-xs text-gray-400">
            Staking 1,000 NXC at 12% APY generates $30/month passive income. To reach $500/month, stake ~16,667 NXC.
          </p>
        </div>
      </div>

      <div className="glass-card p-6 rounded-3xl border border-white/5">
        <h3 className="text-xl font-bold mb-6">My MEV Bots</h3>
        <div className="space-y-4">
          {mevBots.map((bot) => (
            <div key={bot.id} className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-bold">{bot.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      bot.status === 'Active' 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                        : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                    }`}>
                      {bot.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div>
                      <p className="text-gray-500 text-xs">APY</p>
                      <p className="text-lg font-bold text-cyan-400">{bot.apy}%</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Staked</p>
                      <p className="text-lg font-bold">{bot.balance.toLocaleString()} NXC</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Earnings</p>
                      <p className="text-lg font-bold text-green-400">+{bot.earnings.toFixed(2)} NXC</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-bold hover:bg-white/10 transition-all">
                    Manage
                  </button>
                  {bot.status === 'Active' && (
                    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl text-sm font-bold transition-all">
                      Withdraw
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card p-6 rounded-3xl border border-white/5">
        <h3 className="text-xl font-bold mb-4">Available Bot Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['Arbitrage Scanner', 'Liquidity Sniffer', 'Flash Loan Executor', 'Front-Run Defender'].map((template) => (
            <div key={template} className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer">
              <h4 className="font-bold mb-2">{template}</h4>
              <p className="text-gray-500 text-sm">Estimated APY: 10-15%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Earn;

