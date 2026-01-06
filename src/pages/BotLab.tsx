import React, { useState, useEffect } from 'react';
import { ICONS } from '../constants';

const BotLab: React.FC = () => {
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

  const [activeTab, setActiveTab] = useState<'mev' | 'xab'>('mev');

  const mevBots = [
    { id: 1, name: 'Arbitrage Bot Alpha', apy: 12.5, status: 'Active', balance: 1250, earnings: 156.25, type: 'MEV' },
    { id: 2, name: 'Liquidity Pool Beta', apy: 8.3, status: 'Active', balance: 3200, earnings: 265.60, type: 'MEV' },
    { id: 3, name: 'Flash Loan Gamma', apy: 15.2, status: 'Pending', balance: 0, earnings: 0, type: 'MEV' },
  ];

  const xabBots = [
    { id: 4, name: 'XRP Arbitrage Bot', apy: 14.2, status: 'Active', balance: 2100, earnings: 248.50, type: 'XAB' },
    { id: 5, name: 'XRP Liquidity Sniffer', apy: 10.8, status: 'Active', balance: 1800, earnings: 162.00, type: 'XAB' },
    { id: 6, name: 'XRP Flash Loan Bot', apy: 16.5, status: 'Pending', balance: 0, earnings: 0, type: 'XAB' },
  ];

  const allBots = [...mevBots, ...xabBots];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-display">Bot Lab</h2>
          <p className="text-gray-500 text-sm">MEV Bot & XAB Bot automated trading nodes for high-yield opportunities</p>
        </div>
        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all">
          Deploy New Bot
        </button>
      </div>

      {/* Tab Selector */}
      <div className="flex gap-2 bg-white/5 p-1 rounded-2xl border border-white/5">
        <button
          onClick={() => setActiveTab('mev')}
          className={`flex-1 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
            activeTab === 'mev'
              ? 'bg-purple-600 text-white shadow-lg'
              : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          MEV Bots
        </button>
        <button
          onClick={() => setActiveTab('xab')}
          className={`flex-1 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
            activeTab === 'xab'
              ? 'bg-purple-600 text-white shadow-lg'
              : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          XAB Bots (XRP)
        </button>
      </div>

      {/* My Bots Section */}
      <div className="glass-card p-6 rounded-3xl border border-white/5">
        <h3 className="text-xl font-bold mb-4">My Bots</h3>
        <div className="space-y-4">
          {(activeTab === 'mev' ? mevBots : xabBots).map((bot) => (
            <div key={bot.id} className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-bold text-lg">{bot.name}</h4>
                  <p className="text-sm text-gray-500">{bot.type} Bot</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  bot.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {bot.status}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">APY</p>
                  <p className="text-lg font-bold text-cyan-400">{bot.apy}%</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Balance</p>
                  <p className="text-lg font-bold">{bot.balance} NXC</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Earnings</p>
                  <p className="text-lg font-bold text-green-400">${bot.earnings}</p>
                </div>
              </div>
              {bot.status === 'Active' && (
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg text-sm font-bold hover:bg-purple-600/30 transition-all">
                    Withdraw
                  </button>
                  <button className="flex-1 px-4 py-2 bg-white/5 text-gray-400 rounded-lg text-sm font-bold hover:bg-white/10 transition-all">
                    Reinvest
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Passive Income Projection Calculator */}
      <div className="glass-card p-6 rounded-3xl border border-white/5">
        <h3 className="text-xl font-bold mb-4">Passive Income Projection Calculator</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-400 mb-2">Stake Amount (NXC)</label>
            <input
              type="number"
              value={stakeAmount}
              onChange={(e) => setStakeAmount(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-400 mb-2">APY Rate (%)</label>
            <input
              type="number"
              value={apyRate}
              onChange={(e) => setApyRate(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
            <p className="text-xs text-gray-500 mb-1">Monthly Income</p>
            <p className="text-2xl font-bold text-green-400">${income.monthly}</p>
          </div>
          <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
            <p className="text-xs text-gray-500 mb-1">Yearly Income</p>
            <p className="text-2xl font-bold text-green-400">${income.yearly}</p>
          </div>
          <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
            <p className="text-xs text-gray-500 mb-1">5-Year Compound</p>
            <p className="text-2xl font-bold text-green-400">${income.fiveYear}</p>
          </div>
        </div>
      </div>

      {/* Available Bot Templates */}
      <div className="glass-card p-6 rounded-3xl border border-white/5">
        <h3 className="text-xl font-bold mb-4">Available Bot Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(activeTab === 'mev' ? [
            { name: 'Arbitrage Bot', apy: '10-15%', risk: 'Low', desc: 'Price differences across exchanges' },
            { name: 'Liquidity Bot', apy: '8-12%', risk: 'Medium', desc: 'Liquidity provision and market making' },
            { name: 'Flash Loan Bot', apy: '15-20%', risk: 'High', desc: 'Advanced arbitrage opportunities' },
          ] : [
            { name: 'XRP Arbitrage Bot', apy: '12-18%', risk: 'Low', desc: 'XRP price differences across exchanges' },
            { name: 'XRP Liquidity Bot', apy: '10-14%', risk: 'Medium', desc: 'XRP liquidity provision' },
            { name: 'XRP Flash Loan Bot', apy: '16-22%', risk: 'High', desc: 'Advanced XRP arbitrage' },
          ]).map((template, i) => (
            <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold">{template.name}</h4>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-lg text-xs font-bold">{template.apy} APY</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">{template.desc}</p>
              <div className="flex items-center justify-between">
                <span className={`text-xs font-bold ${
                  template.risk === 'Low' ? 'text-green-400' : template.risk === 'Medium' ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  Risk: {template.risk}
                </span>
                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm font-bold transition-all">
                  Deploy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Diversification Recommendations */}
      <div className="glass-card p-6 rounded-3xl border border-white/5">
        <h3 className="text-xl font-bold mb-4">Diversification Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl">
            <p className="text-xs text-gray-500 mb-1">Portfolio Health</p>
            <p className="text-2xl font-bold text-green-400">Excellent</p>
            <p className="text-xs text-gray-500 mt-2">Well-diversified across bot types</p>
          </div>
          <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
            <p className="text-xs text-gray-500 mb-1">Risk Level</p>
            <p className="text-2xl font-bold text-yellow-400">Moderate</p>
            <p className="text-xs text-gray-500 mt-2">Balanced risk-reward ratio</p>
          </div>
          <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
            <p className="text-xs text-gray-500 mb-1">Recommended Allocation</p>
            <p className="text-2xl font-bold text-cyan-400">60/40</p>
            <p className="text-xs text-gray-500 mt-2">MEV / XAB Bot split</p>
          </div>
        </div>
      </div>

      {/* Automated Strategies */}
      <div className="glass-card p-6 rounded-3xl border border-white/5">
        <h3 className="text-xl font-bold mb-4">Automated Strategies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'Conservative Growth', risk: 'Low', apy: '8-12%', desc: 'Steady, low-risk returns' },
            { name: 'Aggressive Growth', risk: 'High', apy: '15-20%', desc: 'Maximum returns, higher risk' },
            { name: 'Balanced', risk: 'Medium', apy: '10-15%', desc: 'Balanced risk and reward' },
            { name: 'Income Focus', risk: 'Low', apy: '9-13%', desc: 'Regular monthly income' },
          ].map((strategy, i) => (
            <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold">{strategy.name}</h4>
                <span className={`text-xs font-bold px-2 py-1 rounded-lg ${
                  strategy.risk === 'Low' ? 'bg-green-500/20 text-green-400' : 
                  strategy.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' : 
                  'bg-red-500/20 text-red-400'
                }`}>
                  {strategy.risk}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-3">{strategy.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-cyan-400">{strategy.apy} APY</span>
                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm font-bold transition-all">
                  Activate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Educational Resources */}
      <div className="glass-card p-6 rounded-3xl border border-white/5">
        <h3 className="text-xl font-bold mb-4">Educational Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: activeTab === 'mev' ? 'What is MEV?' : 'What is XAB?', desc: 'Learn the fundamentals', icon: '📚' },
            { title: 'Risk Management', desc: 'Protect your investments', icon: '🛡️' },
            { title: 'Reading Metrics', desc: 'Understand bot performance', icon: '📊' },
            { title: 'Reinvest vs Withdraw', desc: 'Optimize your strategy', icon: '💰' },
          ].map((resource, i) => (
            <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{resource.icon}</span>
                <div className="flex-1">
                  <h4 className="font-bold mb-1">{resource.title}</h4>
                  <p className="text-sm text-gray-500">{resource.desc}</p>
                </div>
                <button className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg text-sm font-bold hover:bg-purple-600/30 transition-all">
                  Read
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BotLab;

