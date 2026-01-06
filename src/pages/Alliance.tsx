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
                  strategy: 'Mastered team building and leveraged MEV and XAB bot staking for passive income',
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

          {/* Global Hall of Fame */}
          <div className="glass-card p-8 rounded-[2rem] border-white/5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold font-display">Global Hall of Fame</h3>
              <span className="text-xs text-gray-500 font-bold">Top Network Performance (Monthly)</span>
            </div>
            <div className="space-y-3">
              {[
                { rank: 1, name: 'TKR-CYBERX', earnings: '$1,106,689', multiplier: '2X', tier: 'Platinum', badge: '🥇' },
                { rank: 2, name: 'NEX-VOYAGER', earnings: '$928,450', multiplier: '5X', tier: 'Platinum', badge: '🥈' },
                { rank: 3, name: 'ALPHA-CORE', earnings: '$812,000', multiplier: '0X', tier: 'Platinum', badge: '🥉' },
                { rank: 4, name: 'STORM-DEV', earnings: '$745,210', multiplier: '0X', tier: 'Gold', badge: '' },
                { rank: 5, name: 'CRYPT-ZERO', earnings: '$692,110', multiplier: '0X', tier: 'Gold', badge: '' },
              ].map((network) => (
                <div 
                  key={network.rank}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all bg-white/5"
                >
                  <div className="flex items-center gap-3 min-w-[80px]">
                    {network.badge ? (
                      <span className="text-3xl">{network.badge}</span>
                    ) : (
                      <span className="text-xl font-bold text-purple-400">#{network.rank}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-bold font-display">{network.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        network.tier === 'Platinum' 
                          ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {network.tier}
                      </span>
                      {network.multiplier !== '0X' && (
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded text-xs font-bold">
                          {network.multiplier} BONUS
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-400">Monthly Earnings:</span>
                      <span className="text-2xl font-bold text-green-400">{network.earnings}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-purple-600 to-purple-900 flex items-center justify-center font-bold text-lg border-2 border-white/10">
                      {network.name.split('-')[0].substring(0, 3)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Your Network Rank</p>
                  <p className="text-2xl font-bold text-purple-400">#127</p>
                  <p className="text-xs text-green-400 mt-1">↑ Moved up 8 positions this month</p>
                </div>
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all">
                  View Full Rankings
                </button>
              </div>
            </div>
          </div>

          {/* Network Activity Feed */}
          <div className="glass-card p-8 rounded-[2rem] border-white/5">
            <h3 className="text-xl font-bold mb-6">Network Activity</h3>
            <div className="space-y-3">
              {[
                { type: 'referral', user: 'Agent Nexus-42', action: 'joined your network', time: '2 hours ago', icon: '👤' },
                { type: 'sale', user: 'Agent Nexus-88', action: 'made a sale: $450', time: '5 hours ago', icon: '💰' },
                { type: 'tier', user: 'Agent Nexus-15', action: 'reached Gold tier', time: '1 day ago', icon: '⭐' },
                { type: 'referral', user: 'Agent Nexus-91', action: 'invited 3 new members', time: '2 days ago', icon: '📈' },
                { type: 'milestone', user: 'Your Network', action: 'reached 140+ members', time: '3 days ago', icon: '🎯' },
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/20 transition-all">
                  <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center text-xl">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-bold text-cyan-400">{activity.user}</span>
                      {' '}
                      <span className="text-gray-300">{activity.action}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-sm transition-all">
              View All Activity
            </button>
          </div>

          {/* Top Performers in Your Network */}
          <div className="glass-card p-8 rounded-[2rem] border-white/5">
            <h3 className="text-xl font-bold mb-6">Top Performers in Your Network</h3>
            <div className="space-y-3">
              {[
                { name: 'Agent Nexus-42', rank: 1, earnings: '$1,240', network: 23, tier: 'Gold', badge: '🥇' },
                { name: 'Agent Nexus-88', rank: 2, earnings: '$890', network: 15, tier: 'Silver', badge: '🥈' },
                { name: 'Agent Nexus-15', rank: 3, earnings: '$650', network: 12, tier: 'Silver', badge: '🥉' },
                { name: 'Agent Nexus-91', rank: 4, earnings: '$420', network: 8, tier: 'Bronze', badge: '' },
                { name: 'Agent Nexus-33', rank: 5, earnings: '$380', network: 6, tier: 'Bronze', badge: '' },
              ].map((performer) => (
                <div 
                  key={performer.rank}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-all bg-white/5"
                >
                  <div className="flex items-center gap-3 min-w-[60px]">
                    {performer.badge ? (
                      <span className="text-2xl">{performer.badge}</span>
                    ) : (
                      <span className="text-lg font-bold text-purple-400">#{performer.rank}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold">{performer.name}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        performer.tier === 'Gold' ? 'bg-yellow-500/20 text-yellow-400' :
                        performer.tier === 'Silver' ? 'bg-gray-500/20 text-gray-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {performer.tier}
                      </span>
                    </div>
                    <div className="flex gap-4 text-xs text-gray-400">
                      <span>Earnings: <span className="text-green-400 font-bold">{performer.earnings}/mo</span></span>
                      <span>Network: <span className="text-cyan-400 font-bold">{performer.network}</span></span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-sm">
                      {performer.name.split(' ')[1]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Network Value Calculator */}
          <div className="glass-card p-8 rounded-[2rem] border-white/5 mb-8">
            <h3 className="text-xl font-bold mb-6">Network Value Calculator</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl border border-purple-500/30">
                <p className="text-xs text-gray-500 mb-2">Total Network Value</p>
                <p className="text-3xl font-bold text-purple-400">$18,420</p>
                <p className="text-xs text-gray-400 mt-1">Combined earnings from all sub-affiliates</p>
              </div>
              <div className="p-5 bg-gradient-to-br from-green-600/20 to-cyan-600/20 rounded-2xl border border-green-500/30">
                <p className="text-xs text-gray-500 mb-2">Passive Income from Network</p>
                <p className="text-3xl font-bold text-green-400">$245/mo</p>
                <p className="text-xs text-gray-400 mt-1">10% commission from network revenue</p>
              </div>
            </div>
            <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
              <p className="text-xs font-bold text-cyan-400 mb-2">📈 Projected Network Growth</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Current growth rate:</span>
                  <span className="font-bold text-cyan-400">+9.2%/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Projected in 6 months:</span>
                  <span className="font-bold text-green-400">~245 members</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Projected passive income:</span>
                  <span className="font-bold text-purple-400">~$420/month</span>
                </div>
              </div>
            </div>
          </div>

          {/* Team Building Roadmap */}
          <div className="glass-card p-8 rounded-[2rem] border-white/5 mb-8">
            <h3 className="text-xl font-bold mb-6">Team Building Roadmap</h3>
            <div className="space-y-4">
              {[
                { step: 1, title: 'Recruit Your First 5 Members', description: 'Focus on quality over quantity. Find people who are motivated and coachable.', status: 'completed', icon: '✅' },
                { step: 2, title: 'Train Your Team', description: 'Share resources, host training calls, and provide ongoing support.', status: 'completed', icon: '✅' },
                { step: 3, title: 'Scale to 20+ Members', description: 'Build systems and processes to manage a larger team effectively.', status: 'in-progress', icon: '🔄' },
                { step: 4, title: 'Develop Team Leaders', description: 'Identify and develop top performers to become team leaders.', status: 'pending', icon: '⏳' },
                { step: 5, title: 'Reach 100+ Network', description: 'Focus on exponential growth through team leaders and systems.', status: 'pending', icon: '⏳' },
              ].map((roadmap) => (
                <div key={roadmap.step} className={`p-5 rounded-2xl border ${
                  roadmap.status === 'completed' 
                    ? 'bg-green-500/10 border-green-500/30' 
                    : roadmap.status === 'in-progress'
                    ? 'bg-cyan-500/10 border-cyan-500/30'
                    : 'bg-white/5 border-white/5'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{roadmap.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-gray-500">Step {roadmap.step}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          roadmap.status === 'completed' 
                            ? 'bg-green-500/20 text-green-400' 
                            : roadmap.status === 'in-progress'
                            ? 'bg-cyan-500/20 text-cyan-400'
                            : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {roadmap.status === 'completed' ? 'Completed' : roadmap.status === 'in-progress' ? 'In Progress' : 'Pending'}
                        </span>
                      </div>
                      <h4 className="font-bold mb-1">{roadmap.title}</h4>
                      <p className="text-sm text-gray-400">{roadmap.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recruitment Tools */}
          <div className="glass-card p-8 rounded-[2rem] border-white/5 mb-8">
            <h3 className="text-xl font-bold mb-6">Recruitment Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Email Template', description: 'Professional outreach email for potential recruits', icon: '📧' },
                { name: 'Social Media Post', description: 'Ready-to-use posts for Instagram, Twitter, Facebook', icon: '📱' },
                { name: 'Landing Page Builder', description: 'Create custom landing pages for your referrals', icon: '🌐' },
                { name: 'Follow-up Sequence', description: 'Automated email sequences for lead nurturing', icon: '📬' },
              ].map((tool) => (
                <div key={tool.name} className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{tool.icon}</span>
                    <h4 className="font-bold">{tool.name}</h4>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">{tool.description}</p>
                  <button className="w-full py-2 bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 rounded-lg text-xs font-bold transition-all">
                    Use Template
                  </button>
                </div>
              ))}
            </div>
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
              <button 
                onClick={copyReferralLink}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
              >
                {copied ? '✓ COPIED' : 'COPY LINK'}
              </button>
            </div>
            <div className="mt-4 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
              <p className="text-xs font-bold text-cyan-400 mb-2">📊 Referral Performance</p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Signups via link:</span>
                  <span className="text-cyan-400 font-bold ml-2">23</span>
                </div>
                <div>
                  <span className="text-gray-400">Conversion rate:</span>
                  <span className="text-green-400 font-bold ml-2">18.4%</span>
                </div>
                <div>
                  <span className="text-gray-400">This month:</span>
                  <span className="text-purple-400 font-bold ml-2">+5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Global Hall of Fame - Enhanced */}
          <div className="glass-card p-8 rounded-[2rem] border-white/5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold font-display">Global Hall of Fame</h3>
              <span className="text-xs text-gray-500 font-bold">Top Network Performance (Monthly)</span>
            </div>
            <div className="space-y-3">
              {[
                { rank: 1, name: 'TKR-CYBERX', earnings: '$1,106,689', multiplier: '2X', tier: 'Platinum', badge: '🥇' },
                { rank: 2, name: 'NEX-VOYAGER', earnings: '$928,450', multiplier: '5X', tier: 'Platinum', badge: '🥈' },
                { rank: 3, name: 'ALPHA-CORE', earnings: '$812,000', multiplier: '0X', tier: 'Platinum', badge: '🥉' },
                { rank: 4, name: 'STORM-DEV', earnings: '$745,210', multiplier: '0X', tier: 'Gold', badge: '' },
                { rank: 5, name: 'CRYPT-ZERO', earnings: '$692,110', multiplier: '0X', tier: 'Gold', badge: '' },
              ].map((network) => (
                <div 
                  key={network.rank}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all bg-white/5"
                >
                  <div className="flex items-center gap-3 min-w-[80px]">
                    {network.badge ? (
                      <span className="text-3xl">{network.badge}</span>
                    ) : (
                      <span className="text-xl font-bold text-purple-400">#{network.rank}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-bold font-display">{network.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        network.tier === 'Platinum' 
                          ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {network.tier}
                      </span>
                      {network.multiplier !== '0X' && (
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded text-xs font-bold">
                          {network.multiplier} BONUS
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-400">Monthly Earnings:</span>
                      <span className="text-2xl font-bold text-green-400">{network.earnings}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-purple-600 to-purple-900 flex items-center justify-center font-bold text-lg border-2 border-white/10">
                      {network.name.split('-')[0].substring(0, 3)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Your Network Rank</p>
                  <p className="text-2xl font-bold text-purple-400">#127</p>
                  <p className="text-xs text-green-400 mt-1">↑ Moved up 8 positions this month</p>
                </div>
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all">
                  View Full Rankings
                </button>
              </div>
            </div>
          </div>

          {/* Network Activity Feed */}
          <div className="glass-card p-8 rounded-[2rem] border-white/5">
            <h3 className="text-xl font-bold mb-6">Network Activity</h3>
            <div className="space-y-3">
              {[
                { type: 'referral', user: 'Agent Nexus-42', action: 'joined your network', time: '2 hours ago', icon: '👤' },
                { type: 'sale', user: 'Agent Nexus-88', action: 'made a sale: $450', time: '5 hours ago', icon: '💰' },
                { type: 'tier', user: 'Agent Nexus-15', action: 'reached Gold tier', time: '1 day ago', icon: '⭐' },
                { type: 'referral', user: 'Agent Nexus-91', action: 'invited 3 new members', time: '2 days ago', icon: '📈' },
                { type: 'milestone', user: 'Your Network', action: 'reached 140+ members', time: '3 days ago', icon: '🎯' },
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/20 transition-all">
                  <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center text-xl">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-bold text-cyan-400">{activity.user}</span>
                      {' '}
                      <span className="text-gray-300">{activity.action}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-sm transition-all">
              View All Activity
            </button>
          </div>

          {/* Top Performers in Your Network */}
          <div className="glass-card p-8 rounded-[2rem] border-white/5">
            <h3 className="text-xl font-bold mb-6">Top Performers in Your Network</h3>
            <div className="space-y-3">
              {[
                { name: 'Agent Nexus-42', rank: 1, earnings: '$1,240', network: 23, tier: 'Gold', badge: '🥇' },
                { name: 'Agent Nexus-88', rank: 2, earnings: '$890', network: 15, tier: 'Silver', badge: '🥈' },
                { name: 'Agent Nexus-15', rank: 3, earnings: '$650', network: 12, tier: 'Silver', badge: '🥉' },
                { name: 'Agent Nexus-91', rank: 4, earnings: '$420', network: 8, tier: 'Bronze', badge: '' },
                { name: 'Agent Nexus-33', rank: 5, earnings: '$380', network: 6, tier: 'Bronze', badge: '' },
              ].map((performer) => (
                <div 
                  key={performer.rank}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-all bg-white/5"
                >
                  <div className="flex items-center gap-3 min-w-[60px]">
                    {performer.badge ? (
                      <span className="text-2xl">{performer.badge}</span>
                    ) : (
                      <span className="text-lg font-bold text-purple-400">#{performer.rank}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold">{performer.name}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        performer.tier === 'Gold' ? 'bg-yellow-500/20 text-yellow-400' :
                        performer.tier === 'Silver' ? 'bg-gray-500/20 text-gray-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {performer.tier}
                      </span>
                    </div>
                    <div className="flex gap-4 text-xs text-gray-400">
                      <span>Earnings: <span className="text-green-400 font-bold">{performer.earnings}/mo</span></span>
                      <span>Network: <span className="text-cyan-400 font-bold">{performer.network}</span></span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-sm">
                      {performer.name.split(' ')[1]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Quick Stats */}
        <div className="space-y-6">
          {/* Quick Network Stats */}
          <div className="glass-card p-6 rounded-[2rem] border-white/5">
            <h3 className="text-lg font-bold mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Network Growth Rate</p>
                <p className="text-2xl font-bold text-cyan-400">+9.2%</p>
                <p className="text-xs text-gray-400 mt-1">This month</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Active Rate</p>
                <p className="text-2xl font-bold text-green-400">62.7%</p>
                <p className="text-xs text-gray-400 mt-1">89 of 142 active</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Avg Earnings/Member</p>
                <p className="text-2xl font-bold text-purple-400">$17.25</p>
                <p className="text-xs text-gray-400 mt-1">Per active member</p>
              </div>
            </div>
          </div>

          {/* Global Hall of Fame - Compact Sidebar Version */}
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
    </div>
  );
};

export default Alliance;

