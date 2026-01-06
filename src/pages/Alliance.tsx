import React, { useState } from 'react';

const Alliance: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyReferralLink = () => {
    const link = 'https://bitnexus.io/join?ref=NEXUS-7781-BETA';
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 pb-10">
      <div className="flex items-center justify-between">
         <h2 className="text-3xl font-bold font-display">Alliance Arena</h2>
         <div className="bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 rounded-2xl flex items-center gap-2">
            <span className="text-yellow-500 font-bold">Rank: Silver IV</span>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Progress & Referral */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card p-8 rounded-[2rem] border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-3xl" />
             <h3 className="text-xl font-bold mb-6">Tier Progression</h3>
             <div className="space-y-6">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-gray-400 text-sm">Target: $25,000 Volume</span>
                  <span className="text-purple-400 font-bold">$18,420 (74%)</span>
                </div>
                <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden border border-white/5 p-1">
                   <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(124,58,237,0.5)]" style={{ width: '74%' }} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Direct Referrals</p>
                      <p className="text-xl font-bold">14</p>
                   </div>
                   <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Total Network</p>
                      <p className="text-xl font-bold">142</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Success Stories Section */}
          <div className="glass-card p-8 rounded-[2rem] border-white/5 mb-8">
            <h3 className="text-xl font-bold mb-6">Success Stories</h3>
            <div className="space-y-4">
              {[
                { 
                  name: 'Agent Nexus-42', 
                  achievement: 'Reached $10K/month in 6 months',
                  strategy: 'Focused on high-commission products and built a team of 50+ affiliates',
                  earnings: '$10,240/month',
                  network: '142 members'
                },
                { 
                  name: 'Agent Nexus-88', 
                  achievement: 'From $0 to $5K in 90 days',
                  strategy: 'Consistent daily content creation and strategic product selection',
                  earnings: '$5,200/month',
                  network: '67 members'
                },
                { 
                  name: 'Agent Nexus-15', 
                  achievement: 'Built $1M+ network in 1 year',
                  strategy: 'Mastered team building and leveraged MEV bot staking for passive income',
                  earnings: '$15,800/month',
                  network: '342 members'
                },
              ].map((story, i) => (
                <div key={i} className="p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold">
                      {story.name.split(' ')[1]}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold">{story.name}</h4>
                      <p className="text-sm text-purple-400 font-bold">{story.achievement}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{story.strategy}</p>
                  <div className="flex gap-4 text-xs">
                    <div>
                      <span className="text-gray-500">Earnings: </span>
                      <span className="font-bold text-green-400">{story.earnings}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Network: </span>
                      <span className="font-bold text-cyan-400">{story.network}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-sm transition-all">
              View More Success Stories
            </button>
          </div>

          {/* Network Statistics Overview */}
          <div className="glass-card p-8 rounded-[2rem] border-white/5 mb-8">
            <h3 className="text-xl font-bold mb-6">Network Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-xs text-gray-500 mb-1">Total Network</p>
                <p className="text-3xl font-bold text-cyan-400">142</p>
                <p className="text-xs text-green-400 mt-1">+18 this month</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-xs text-gray-500 mb-1">Direct Referrals</p>
                <p className="text-3xl font-bold text-purple-400">14</p>
                <p className="text-xs text-green-400 mt-1">+3 this month</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-xs text-gray-500 mb-1">Active Members</p>
                <p className="text-3xl font-bold text-green-400">89</p>
                <p className="text-xs text-gray-500 mt-1">62.7% active</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-green-500/30 bg-green-500/5">
                <p className="text-xs text-gray-500 mb-1">Network Health</p>
                <p className="text-3xl font-bold text-green-400">8.7</p>
                <p className="text-xs text-green-400 mt-1">Top 15%</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <p className="text-xs font-bold text-cyan-400 mb-2">Network Growth</p>
                <p className="text-2xl font-bold mb-1">+9.2%</p>
                <p className="text-xs text-gray-400">Faster than 78% of networks</p>
              </div>
              <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                <p className="text-xs font-bold text-purple-400 mb-2">Monthly Revenue</p>
                <p className="text-2xl font-bold mb-1">$2,450</p>
                <p className="text-xs text-gray-400">+22% from last month</p>
              </div>
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                <p className="text-xs font-bold text-green-400 mb-2">Your Commission</p>
                <p className="text-2xl font-bold mb-1">$245</p>
                <p className="text-xs text-gray-400">10% from network</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-[2rem] border-white/5">
            <h3 className="text-xl font-bold mb-4">Referral Command</h3>
            <div className="p-4 bg-black/40 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1 font-mono text-purple-400 text-lg tracking-widest bg-purple-500/5 p-3 rounded-xl border border-purple-500/20 w-full text-center sm:text-left">
                NEXUS-7781-BETA
              </div>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">
                COPY LINK
              </button>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="glass-card rounded-[2rem] border-white/5 overflow-hidden flex flex-col">
           <div className="p-6 bg-gradient-to-b from-yellow-500/10 to-transparent border-b border-white/5">
              <h3 className="text-xl font-bold font-display text-yellow-500">Global Hall of Fame</h3>
              <p className="text-xs text-gray-500 mt-1">Top Network Performance (Monthly)</p>
           </div>
           <div className="p-6 space-y-4 flex-1">
              {[
                { name: 'TKR-CYBERX', value: '$1,106,689.2X' },
                { name: 'NEX-VOYAGER', value: '$928,450.5X' },
                { name: 'ALPHA-CORE', value: '$812,000.0X' },
                { name: 'STORM-DEV', value: '$745,210.0X' },
                { name: 'CRYPT-ZERO', value: '$692,110.0X' },
              ].map((entry, idx) => (
                <div key={idx} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-gray-600 w-4">{idx + 1}</span>
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 overflow-hidden">
                       <img src={`https://picsum.photos/seed/${idx}/50/50`} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" alt="" />
                    </div>
                    <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{entry.name}</span>
                  </div>
                  <span className="text-sm font-mono text-yellow-500/80">{entry.value}</span>
                </div>
              ))}
           </div>
           <div className="p-6 mt-auto">
              <button className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all">
                Alliance Arena View
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Alliance;

