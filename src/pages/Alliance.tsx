import React, { useState } from 'react';
import { ICONS } from '../constants';

const Alliance: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'member' | 'admin'>('member');
  const [selectedAlliance, setSelectedAlliance] = useState<any>(null);
  const [showCreateAllianceModal, setShowCreateAllianceModal] = useState(false);
  const [selectedStory, setSelectedStory] = useState<any>(null);
  const [showAllStories, setShowAllStories] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState<any>(null);
  const [showReferralsModal, setShowReferralsModal] = useState(false);
  const [showNetworkModal, setShowNetworkModal] = useState(false);
  const [selectedStat, setSelectedStat] = useState<string | null>(null);
  const [selectedProductAlliance, setSelectedProductAlliance] = useState<string | null>(null);

  const copyReferralLink = () => {
    const link = 'https://bitnexus.io/join?ref=NEXUS-7781-BETA';
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Mock data for alliances the user leads
  const userAlliances = [
    {
      id: '1',
      name: 'Elite Affiliates Network',
      members: 142,
      tier: 'Platinum',
      totalEarnings: 125000,
      monthlyEarnings: 15200,
      created: '2024-01-15',
      status: 'Active'
    },
    {
      id: '2',
      name: 'Crypto Masters Alliance',
      members: 89,
      tier: 'Gold',
      totalEarnings: 78000,
      monthlyEarnings: 9200,
      created: '2024-03-20',
      status: 'Active'
    },
  ];

  // Mock data for product alliances the user is a member of
  const productAlliances = [
    {
      id: 'pa1',
      productName: 'NXC Trading Masterclass',
      productId: '1',
      members: 1247,
      yourRank: 42,
      yourEarnings: 1250,
      totalEarnings: 187500,
      commission: 25,
      status: 'Active',
      joined: '2024-01-10'
    },
    {
      id: 'pa2',
      productName: 'MEV Bot Pro License',
      productId: '3',
      members: 892,
      yourRank: 18,
      yourEarnings: 2100,
      totalEarnings: 446000,
      commission: 10,
      status: 'Active',
      joined: '2023-12-05'
    },
    {
      id: 'pa3',
      productName: 'Crypto Health Formula',
      productId: '2',
      members: 634,
      yourRank: 67,
      yourEarnings: 680,
      totalEarnings: 53890,
      commission: 40,
      status: 'Active',
      joined: '2024-01-20'
    },
    {
      id: 'pa4',
      productName: 'XAB Bot Pro License (XRP)',
      productId: '7',
      members: 523,
      yourRank: 12,
      yourEarnings: 1890,
      totalEarnings: 287650,
      commission: 10,
      status: 'Active',
      joined: '2023-11-15'
    },
    {
      id: 'pa5',
      productName: 'Blockchain Marketing Kit',
      productId: '6',
      members: 445,
      yourRank: 89,
      yourEarnings: 540,
      totalEarnings: 42275,
      commission: 30,
      status: 'Active',
      joined: '2024-02-01'
    },
  ];

  return (
    <div className="space-y-8 pb-10">
      <div className="flex items-center justify-between">
         <h2 className="text-3xl font-bold font-display">Alliance Arena</h2>
         <div className="bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 rounded-2xl flex items-center gap-2">
            <span className="text-yellow-500 font-bold">Rank: Silver IV</span>
         </div>
      </div>

      {/* Product Alliances Section */}
      <div className="glass-card p-6 rounded-3xl border border-white/5">
        <h3 className="text-xl font-bold mb-4">Product Alliances</h3>
        <p className="text-gray-500 text-sm mb-4">Alliances you're a member of for specific products</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {productAlliances.map((alliance) => (
            <button
              key={alliance.id}
              onClick={() => setSelectedProductAlliance(alliance.id)}
              className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all text-left"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-bold text-sm mb-1">{alliance.productName}</h4>
                  <p className="text-xs text-gray-400">{alliance.commission}% commission</p>
                </div>
                <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                  alliance.status === 'Active'
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                    : 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                }`}>
                  {alliance.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-500">Members:</span>
                  <span className="font-bold text-cyan-400 ml-1">{alliance.members.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-gray-500">Your Rank:</span>
                  <span className="font-bold text-purple-400 ml-1">#{alliance.yourRank}</span>
                </div>
                <div>
                  <span className="text-gray-500">Your Earnings:</span>
                  <span className="font-bold text-green-400 ml-1">${alliance.yourEarnings.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-gray-500">Total:</span>
                  <span className="font-bold text-yellow-400 ml-1">${alliance.totalEarnings.toLocaleString()}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Buttons */}
      <div className="flex gap-2 bg-white/5 p-1 rounded-2xl border border-white/5">
        <button
          onClick={() => setActiveTab('member')}
          className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${
            activeTab === 'member'
              ? 'bg-purple-600 text-white'
              : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          Alliance Member
        </button>
        <button
          onClick={() => setActiveTab('admin')}
          className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${
            activeTab === 'admin'
              ? 'bg-purple-600 text-white'
              : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          Alliance Admin
        </button>
      </div>

      {/* Alliance Member View */}
      {activeTab === 'member' && (
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
                   <div 
                     onClick={() => setShowReferralsModal(true)}
                     className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer"
                   >
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Direct Referrals</p>
                      <p className="text-xl font-bold">14</p>
                   </div>
                   <div 
                     onClick={() => setShowNetworkModal(true)}
                     className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer"
                   >
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
                  id: '1',
                  name: 'Agent Nexus-42', 
                  achievement: 'Reached $10K/month in 6 months',
                  strategy: 'Focused on high-commission products and built a team of 50+ affiliates',
                  earnings: '$10,240/month',
                  network: '142 members',
                  tier: 'Gold',
                  joined: '2023-06-15',
                  timeline: '6 months',
                  topProducts: ['NXC Trading Masterclass', 'MEV Bot Pro License', 'Blockchain Marketing Kit'],
                  keyStrategies: [
                    'Focused on products with 30%+ commission rates',
                    'Built a team of 50+ active affiliates',
                    'Consistent daily content creation',
                    'Leveraged social media marketing'
                  ],
                  milestones: [
                    { month: 1, achievement: 'First $1K month' },
                    { month: 3, achievement: 'Reached Silver tier' },
                    { month: 6, achievement: 'Hit $10K/month milestone' }
                  ],
                  quote: 'The key was focusing on high-commission products and building a strong team. Consistency and quality over quantity.'
                },
                { 
                  id: '2',
                  name: 'Agent Nexus-88', 
                  achievement: 'From $0 to $5K in 90 days',
                  strategy: 'Consistent daily content creation and strategic product selection',
                  earnings: '$5,200/month',
                  network: '67 members',
                  tier: 'Silver',
                  joined: '2024-01-10',
                  timeline: '90 days',
                  topProducts: ['Crypto Health Formula', 'Elite Performance Apparel', 'Content Generator'],
                  keyStrategies: [
                    'Posted 3-5 pieces of content daily',
                    'Focused on beginner-friendly products',
                    'Engaged actively in community forums',
                    'Used Content Generator for efficiency'
                  ],
                  milestones: [
                    { month: 1, achievement: 'First sale' },
                    { month: 2, achievement: 'Reached 50 members' },
                    { month: 3, achievement: 'Hit $5K/month' }
                  ],
                  quote: 'Content is king! Daily posting and engaging with my audience was the game-changer. The Content Generator saved me hours every week.'
                },
                { 
                  id: '3',
                  name: 'Agent Nexus-15', 
                  achievement: 'Built $1M+ network in 1 year',
                  strategy: 'Mastered team building and leveraged MEV and XAB bot staking for passive income',
                  earnings: '$15,800/month',
                  network: '342 members',
                  tier: 'Platinum',
                  joined: '2023-01-05',
                  timeline: '1 year',
                  topProducts: ['MEV Bot Pro License', 'XAB Bot Pro License', 'Nexus Private Node'],
                  keyStrategies: [
                    'Built a structured MLM network',
                    'Leveraged bot staking for passive income',
                    'Developed team leaders',
                    'Created training programs for network'
                  ],
                  milestones: [
                    { month: 3, achievement: 'Reached Gold tier' },
                    { month: 6, achievement: 'Network exceeded 200 members' },
                    { month: 12, achievement: 'Hit $1M+ network value' }
                  ],
                  quote: 'Building a network is about developing leaders, not just recruiting members. The passive income from bot staking accelerated everything.'
                },
                { 
                  id: '4',
                  name: 'Agent Nexus-77', 
                  achievement: 'Achieved Platinum tier in 8 months',
                  strategy: 'Strategic product mix and automated content distribution',
                  earnings: '$12,500/month',
                  network: '289 members',
                  tier: 'Platinum',
                  joined: '2023-05-20',
                  timeline: '8 months',
                  topProducts: ['XAB Bot Pro License', 'Nexus Private Node', 'Blockchain Marketing Kit'],
                  keyStrategies: [
                    'Automated content distribution across platforms',
                    'Focused on recurring income products',
                    'Built email marketing funnel',
                    'Leveraged automation tools'
                  ],
                  milestones: [
                    { month: 2, achievement: 'Reached Silver tier' },
                    { month: 5, achievement: 'Hit $5K/month' },
                    { month: 8, achievement: 'Achieved Platinum tier' }
                  ],
                  quote: 'Automation was the key. Once I set up systems, the income became truly passive.'
                },
                { 
                  id: '5',
                  name: 'Agent Nexus-91', 
                  achievement: '$3K/month in first 60 days',
                  strategy: 'Rapid content creation and community engagement',
                  earnings: '$3,200/month',
                  network: '45 members',
                  tier: 'Silver',
                  joined: '2024-02-01',
                  timeline: '60 days',
                  topProducts: ['NXC Trading Masterclass', 'Content Generator', 'Elite Performance Apparel'],
                  keyStrategies: [
                    'Created 10+ pieces of content daily',
                    'Engaged in 5+ community groups',
                    'Focused on high-converting products',
                    'Quick response to leads'
                  ],
                  milestones: [
                    { month: 1, achievement: 'First $1K month' },
                    { month: 2, achievement: 'Reached Silver tier' }
                  ],
                  quote: 'Speed and consistency. I posted content every single day and responded to every message within minutes.'
                },
                { 
                  id: '6',
                  name: 'Agent Nexus-33', 
                  achievement: 'Built 200+ member network in 4 months',
                  strategy: 'Team building focus with structured training',
                  earnings: '$8,900/month',
                  network: '203 members',
                  tier: 'Gold',
                  joined: '2023-09-15',
                  timeline: '4 months',
                  topProducts: ['MEV Bot Pro License', 'NXC Trading Masterclass', 'Academy Courses'],
                  keyStrategies: [
                    'Created comprehensive training program',
                    'Weekly team calls and support',
                    'Incentivized team performance',
                    'Focused on team leader development'
                  ],
                  milestones: [
                    { month: 2, achievement: 'Reached 100 members' },
                    { month: 3, achievement: 'Reached Gold tier' },
                    { month: 4, achievement: 'Exceeded 200 members' }
                  ],
                  quote: 'Investing in my team\'s success paid off exponentially. When they win, I win.'
                },
              ].slice(0, showAllStories ? undefined : 3).map((story) => (
                <div 
                  key={story.id} 
                  onClick={() => setSelectedStory(story)}
                  className="p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer"
                >
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
            <button 
              onClick={() => setShowAllStories(!showAllStories)}
              className="w-full mt-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-sm transition-all"
            >
              {showAllStories ? 'Show Less' : 'View More Success Stories'}
            </button>
          </div>

          {/* Global Hall of Fame */}
          <div className="glass-card p-8 rounded-[2rem] border-white/5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold font-display">Global Hall of Fame</h3>
              <span className="text-xs text-gray-500 font-bold">Top Network Performance (Monthly)</span>
            </div>
            <div className="space-y-3" id="hall-of-fame-full">
              {[
                { 
                  rank: 1, 
                  name: 'TKR-CYBERX', 
                  earnings: '$1,106,689', 
                  multiplier: '2X', 
                  tier: 'Platinum', 
                  badge: '🥇',
                  leader: 'Agent Nexus-01',
                  members: 2847,
                  totalEarnings: '$12,450,000',
                  growth: '+18.5%',
                  topProducts: ['MEV Bot Pro', 'XAB Bot Pro', 'Nexus Private Node'],
                  strategy: 'Focus on high-value bot licenses and automated trading systems',
                  joined: '2022-03-15'
                },
                { 
                  rank: 2, 
                  name: 'NEX-VOYAGER', 
                  earnings: '$928,450', 
                  multiplier: '5X', 
                  tier: 'Platinum', 
                  badge: '🥈',
                  leader: 'Agent Nexus-02',
                  members: 2156,
                  totalEarnings: '$9,820,000',
                  growth: '+15.2%',
                  topProducts: ['NXC Trading Masterclass', 'Blockchain Marketing Kit', 'MEV Bot Pro'],
                  strategy: 'Educational products and comprehensive training programs',
                  joined: '2022-05-20'
                },
                { 
                  rank: 3, 
                  name: 'ALPHA-CORE', 
                  earnings: '$812,000', 
                  multiplier: '0X', 
                  tier: 'Platinum', 
                  badge: '🥉',
                  leader: 'Agent Nexus-03',
                  members: 1892,
                  totalEarnings: '$8,150,000',
                  growth: '+12.8%',
                  topProducts: ['XAB Bot Pro', 'Elite Performance Apparel', 'Academy Courses'],
                  strategy: 'Diversified product portfolio with strong team building',
                  joined: '2022-07-10'
                },
                { 
                  rank: 4, 
                  name: 'STORM-DEV', 
                  earnings: '$745,210', 
                  multiplier: '0X', 
                  tier: 'Gold', 
                  badge: '',
                  leader: 'Agent Nexus-04',
                  members: 1654,
                  totalEarnings: '$6,890,000',
                  growth: '+9.5%',
                  topProducts: ['MEV Bot Pro', 'Content Generator', 'Crypto Health Formula'],
                  strategy: 'Content-driven marketing with automation tools',
                  joined: '2022-09-05'
                },
                { 
                  rank: 5, 
                  name: 'CRYPT-ZERO', 
                  earnings: '$692,110', 
                  multiplier: '0X', 
                  tier: 'Gold', 
                  badge: '',
                  leader: 'Agent Nexus-05',
                  members: 1423,
                  totalEarnings: '$5,920,000',
                  growth: '+8.3%',
                  topProducts: ['NXC Trading Masterclass', 'MEV Bot Pro', 'Nexus Private Node'],
                  strategy: 'Strategic product selection with focus on recurring income',
                  joined: '2022-11-18'
                },
              ].map((network) => (
                <div 
                  key={network.rank}
                  onClick={() => setSelectedNetwork(network)}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all bg-white/5 cursor-pointer"
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
                { 
                  name: 'Banner 1', 
                  description: 'High-impact promotional banner for websites and ads', 
                  icon: '🖼️',
                  hasImage: true,
                  imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop&q=80'
                },
                { 
                  name: 'Banner 2', 
                  description: 'Alternative banner design for different platforms', 
                  icon: '🖼️',
                  hasImage: true,
                  imageUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=400&fit=crop&q=80'
                },
                { 
                  name: 'Social Media Post', 
                  description: 'Ready-to-use posts for Instagram, Twitter, Facebook', 
                  icon: '📱',
                  hasImage: true,
                  imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&q=80'
                },
                { 
                  name: 'Email Template', 
                  description: 'Professional outreach email for potential recruits', 
                  icon: '📧',
                  hasImage: true,
                  imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop&q=80'
                },
                { 
                  name: 'Landing Page Builder', 
                  description: 'Create custom landing pages for your referrals', 
                  icon: '🌐',
                  hasImage: false
                },
                { 
                  name: 'Follow-up Sequence', 
                  description: 'Automated email sequences for lead nurturing', 
                  icon: '📬',
                  hasImage: false
                },
              ].map((tool) => (
                <div key={tool.name} className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{tool.icon}</span>
                    <h4 className="font-bold">{tool.name}</h4>
                  </div>
                  {tool.hasImage && tool.imageUrl && (
                    <div className="mb-3 rounded-lg overflow-hidden border border-white/10">
                      <img 
                        src={tool.imageUrl} 
                        alt={tool.name}
                        className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback to gradient if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-32 bg-gradient-to-br from-purple-600/30 to-cyan-500/30 flex items-center justify-center';
                          fallback.innerHTML = '<span class="text-4xl">' + tool.icon + '</span>';
                          target.parentNode?.insertBefore(fallback, target);
                        }}
                      />
                    </div>
                  )}
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
                { 
                  rank: 1, 
                  name: 'TKR-CYBERX', 
                  earnings: '$1,106,689', 
                  multiplier: '2X', 
                  tier: 'Platinum', 
                  badge: '🥇',
                  leader: 'Agent Nexus-01',
                  members: 2847,
                  totalEarnings: '$12,450,000',
                  growth: '+18.5%',
                  topProducts: ['MEV Bot Pro', 'XAB Bot Pro', 'Nexus Private Node'],
                  strategy: 'Focus on high-value bot licenses and automated trading systems',
                  joined: '2022-03-15'
                },
                { 
                  rank: 2, 
                  name: 'NEX-VOYAGER', 
                  earnings: '$928,450', 
                  multiplier: '5X', 
                  tier: 'Platinum', 
                  badge: '🥈',
                  leader: 'Agent Nexus-02',
                  members: 2156,
                  totalEarnings: '$9,820,000',
                  growth: '+15.2%',
                  topProducts: ['NXC Trading Masterclass', 'Blockchain Marketing Kit', 'MEV Bot Pro'],
                  strategy: 'Educational products and comprehensive training programs',
                  joined: '2022-05-20'
                },
                { 
                  rank: 3, 
                  name: 'ALPHA-CORE', 
                  earnings: '$812,000', 
                  multiplier: '0X', 
                  tier: 'Platinum', 
                  badge: '🥉',
                  leader: 'Agent Nexus-03',
                  members: 1892,
                  totalEarnings: '$8,150,000',
                  growth: '+12.8%',
                  topProducts: ['XAB Bot Pro', 'Elite Performance Apparel', 'Academy Courses'],
                  strategy: 'Diversified product portfolio with strong team building',
                  joined: '2022-07-10'
                },
                { 
                  rank: 4, 
                  name: 'STORM-DEV', 
                  earnings: '$745,210', 
                  multiplier: '0X', 
                  tier: 'Gold', 
                  badge: '',
                  leader: 'Agent Nexus-04',
                  members: 1654,
                  totalEarnings: '$6,890,000',
                  growth: '+9.5%',
                  topProducts: ['MEV Bot Pro', 'Content Generator', 'Crypto Health Formula'],
                  strategy: 'Content-driven marketing with automation tools',
                  joined: '2022-09-05'
                },
                { 
                  rank: 5, 
                  name: 'CRYPT-ZERO', 
                  earnings: '$692,110', 
                  multiplier: '0X', 
                  tier: 'Gold', 
                  badge: '',
                  leader: 'Agent Nexus-05',
                  members: 1423,
                  totalEarnings: '$5,920,000',
                  growth: '+8.3%',
                  topProducts: ['NXC Trading Masterclass', 'MEV Bot Pro', 'Nexus Private Node'],
                  strategy: 'Strategic product selection with focus on recurring income',
                  joined: '2022-11-18'
                },
              ].map((network) => (
                <div 
                  key={network.rank}
                  onClick={() => setSelectedNetwork(network)}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all bg-white/5 cursor-pointer"
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
              <div 
                onClick={() => setSelectedStat('growth')}
                className="p-3 bg-white/5 rounded-xl hover:bg-white/10 border border-transparent hover:border-purple-500/30 transition-all cursor-pointer"
              >
                <p className="text-xs text-gray-500 mb-1">Network Growth Rate</p>
                <p className="text-2xl font-bold text-cyan-400">+9.2%</p>
                <p className="text-xs text-gray-400 mt-1">This month</p>
              </div>
              <div 
                onClick={() => setSelectedStat('active')}
                className="p-3 bg-white/5 rounded-xl hover:bg-white/10 border border-transparent hover:border-purple-500/30 transition-all cursor-pointer"
              >
                <p className="text-xs text-gray-500 mb-1">Active Rate</p>
                <p className="text-2xl font-bold text-green-400">62.7%</p>
                <p className="text-xs text-gray-400 mt-1">89 of 142 active</p>
              </div>
              <div 
                onClick={() => setSelectedStat('earnings')}
                className="p-3 bg-white/5 rounded-xl hover:bg-white/10 border border-transparent hover:border-purple-500/30 transition-all cursor-pointer"
              >
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
                  { 
                    rank: 1, 
                    name: 'TKR-CYBERX', 
                    value: '$1,106,689.2X',
                    leader: 'Agent Nexus-01',
                    members: 2847,
                    tier: 'Platinum'
                  },
                  { 
                    rank: 2, 
                    name: 'NEX-VOYAGER', 
                    value: '$928,450.5X',
                    leader: 'Agent Nexus-02',
                    members: 2156,
                    tier: 'Platinum'
                  },
                  { 
                    rank: 3, 
                    name: 'ALPHA-CORE', 
                    value: '$812,000.0X',
                    leader: 'Agent Nexus-03',
                    members: 1892,
                    tier: 'Platinum'
                  },
                  { 
                    rank: 4, 
                    name: 'STORM-DEV', 
                    value: '$745,210.0X',
                    leader: 'Agent Nexus-04',
                    members: 1654,
                    tier: 'Gold'
                  },
                  { 
                    rank: 5, 
                    name: 'CRYPT-ZERO', 
                    value: '$692,110.0X',
                    leader: 'Agent Nexus-05',
                    members: 1423,
                    tier: 'Gold'
                  },
                ].map((entry) => (
                  <div 
                    key={entry.rank} 
                    onClick={() => setSelectedNetwork({
                      rank: entry.rank,
                      name: entry.name,
                      earnings: entry.value.split('.')[0],
                      multiplier: entry.value.includes('X') ? entry.value.split('.')[1] : '0X',
                      tier: entry.tier,
                      badge: entry.rank <= 3 ? ['🥇', '🥈', '🥉'][entry.rank - 1] : '',
                      leader: entry.leader,
                      members: entry.members,
                      totalEarnings: '$' + (parseInt(entry.value.replace(/[^0-9]/g, '')) * 11).toLocaleString(),
                      growth: ['+18.5%', '+15.2%', '+12.8%', '+9.5%', '+8.3%'][entry.rank - 1],
                      topProducts: [
                        ['MEV Bot Pro', 'XAB Bot Pro', 'Nexus Private Node'],
                        ['NXC Trading Masterclass', 'Blockchain Marketing Kit', 'MEV Bot Pro'],
                        ['XAB Bot Pro', 'Elite Performance Apparel', 'Academy Courses'],
                        ['MEV Bot Pro', 'Content Generator', 'Crypto Health Formula'],
                        ['NXC Trading Masterclass', 'MEV Bot Pro', 'Nexus Private Node']
                      ][entry.rank - 1],
                      strategy: 'Top performing network with exceptional growth',
                      joined: '2022-03-15'
                    })}
                    className="flex items-center justify-between group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-gray-600 w-4">{entry.rank}</span>
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 overflow-hidden">
                         <img src={`https://picsum.photos/seed/${entry.rank}/50/50`} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" alt="" />
                      </div>
                      <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{entry.name}</span>
                    </div>
                    <span className="text-sm font-mono text-yellow-500/80">{entry.value}</span>
                  </div>
                ))}
             </div>
             <div className="p-6 mt-auto">
                <button 
                  onClick={() => {
                    setActiveTab('member');
                    setTimeout(() => {
                      const element = document.getElementById('hall-of-fame-full');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  }}
                  className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all"
                >
                  Alliance Arena View
                </button>
             </div>
          </div>
        </div>
        </div>
      )}

      {/* Alliance Admin View */}
      {activeTab === 'admin' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">My Alliances</h3>
              <p className="text-gray-500 text-sm">Manage the alliances you lead</p>
            </div>
            <button
              onClick={() => setShowCreateAllianceModal(true)}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all"
            >
              + Create Alliance
            </button>
          </div>

          {/* Alliance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="glass-card p-4 rounded-2xl border border-white/5">
              <p className="text-gray-500 text-xs mb-1">Alliances Led</p>
              <p className="text-2xl font-bold">{userAlliances.length}</p>
            </div>
            <div className="glass-card p-4 rounded-2xl border border-white/5">
              <p className="text-gray-500 text-xs mb-1">Total Members</p>
              <p className="text-2xl font-bold text-cyan-400">{userAlliances.reduce((sum, a) => sum + a.members, 0)}</p>
            </div>
            <div className="glass-card p-4 rounded-2xl border border-white/5">
              <p className="text-gray-500 text-xs mb-1">Total Earnings</p>
              <p className="text-2xl font-bold text-green-400">${userAlliances.reduce((sum, a) => sum + a.totalEarnings, 0).toLocaleString()}</p>
            </div>
            <div className="glass-card p-4 rounded-2xl border border-white/5">
              <p className="text-gray-500 text-xs mb-1">Monthly Earnings</p>
              <p className="text-2xl font-bold text-purple-400">${userAlliances.reduce((sum, a) => sum + a.monthlyEarnings, 0).toLocaleString()}</p>
            </div>
          </div>

          {/* Alliances List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userAlliances.map((alliance) => (
              <div
                key={alliance.id}
                className="glass-card p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold mb-2">{alliance.name}</h4>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        alliance.tier === 'Platinum' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                        alliance.tier === 'Gold' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                        'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                      }`}>
                        {alliance.tier} Tier
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        alliance.status === 'Active'
                          ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                          : 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                      }`}>
                        {alliance.status}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedAlliance(alliance)}
                    className="p-2 hover:bg-white/10 rounded-xl transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="1"/>
                      <circle cx="19" cy="12" r="1"/>
                      <circle cx="5" cy="12" r="1"/>
                    </svg>
                  </button>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Members</span>
                    <span className="font-bold text-cyan-400">{alliance.members}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Total Earnings</span>
                    <span className="font-bold text-green-400">${alliance.totalEarnings.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Monthly Earnings</span>
                    <span className="font-bold text-purple-400">${alliance.monthlyEarnings.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Created</span>
                    <span className="text-sm text-gray-400">{alliance.created}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedAlliance(alliance)}
                    className="flex-1 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-sm transition-all"
                  >
                    Manage
                  </button>
                  <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-sm transition-all">
                    View Members
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {userAlliances.length === 0 && (
            <div className="glass-card p-12 rounded-2xl border border-white/5 text-center">
              <div className="w-20 h-20 rounded-full bg-purple-600/10 flex items-center justify-center mx-auto mb-4">
                <ICONS.Alliance />
              </div>
              <h3 className="text-xl font-bold mb-2">No Alliances Yet</h3>
              <p className="text-gray-500 mb-6">Create your first alliance to start building your network</p>
              <button
                onClick={() => setShowCreateAllianceModal(true)}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all"
              >
                Create Alliance
              </button>
            </div>
          )}

          {/* Team Builder Section */}
          <div className="glass-card p-8 rounded-3xl border border-white/5 mt-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold">Team Builder</h3>
                <p className="text-gray-500 text-sm mt-1">Manage priority prospects and build your team</p>
              </div>
              <button className="bg-purple-600 px-4 py-2 rounded-xl text-sm font-bold hover:bg-purple-500 transition-all">
                + Add Contact
              </button>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Sarah Miller', score: '92/100', status: 'Warm' },
                { name: 'James Wilson', score: '88/100', status: 'Follow Up' },
                { name: 'Elena Korova', score: '74/100', status: 'Cold' },
                { name: 'Mike Thompson', score: '61/100', status: 'New' },
              ].map(c => (
                <div key={c.name} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all">
                  <input type="checkbox" className="w-5 h-5 rounded accent-purple-600 cursor-pointer" />
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <p className="font-bold">{c.name}</p>
                      <p className="text-xs text-gray-500">Contact Score: {c.score}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                      c.status === 'Warm' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/20' :
                      c.status === 'Follow Up' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/20' :
                      c.status === 'Cold' ? 'bg-gray-500/20 text-gray-400 border border-gray-500/20' :
                      'bg-green-500/20 text-green-400 border border-green-500/20'
                    }`}>
                      {c.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Create Alliance Modal */}
      {showCreateAllianceModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Create New Alliance</h3>
              <button
                onClick={() => setShowCreateAllianceModal(false)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Alliance Name *</label>
                <input
                  type="text"
                  placeholder="Elite Affiliates Network"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-white placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Description</label>
                <textarea
                  placeholder="Describe your alliance's goals and focus..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-white placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Initial Tier</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-white">
                  <option value="Bronze">Bronze</option>
                  <option value="Silver">Silver</option>
                  <option value="Gold">Gold</option>
                  <option value="Platinum">Platinum</option>
                </select>
              </div>

              <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <p className="text-xs text-cyan-400 font-bold mb-1">💡 Alliance Leader Benefits</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Manage alliance members and permissions</li>
                  <li>• Set alliance goals and milestones</li>
                  <li>• Access advanced analytics and reports</li>
                  <li>• Create custom recruitment campaigns</li>
                </ul>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => {
                    setShowCreateAllianceModal(false);
                    alert('Alliance created successfully!');
                  }}
                  className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all"
                >
                  Create Alliance
                </button>
                <button
                  onClick={() => setShowCreateAllianceModal(false)}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Alliance Management Modal */}
      {selectedAlliance && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">{selectedAlliance.name}</h3>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    selectedAlliance.tier === 'Platinum' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                    selectedAlliance.tier === 'Gold' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                    'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                  }`}>
                    {selectedAlliance.tier} Tier
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    selectedAlliance.status === 'Active'
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                  }`}>
                    {selectedAlliance.status}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedAlliance(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Alliance Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Members</p>
                <p className="text-2xl font-bold text-cyan-400">{selectedAlliance.members}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Total Earnings</p>
                <p className="text-2xl font-bold text-green-400">${selectedAlliance.totalEarnings.toLocaleString()}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Monthly</p>
                <p className="text-2xl font-bold text-purple-400">${selectedAlliance.monthlyEarnings.toLocaleString()}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Created</p>
                <p className="text-sm font-bold">{selectedAlliance.created}</p>
              </div>
            </div>

            {/* Management Tabs */}
            <div className="flex gap-2 bg-white/5 p-1 rounded-xl mb-6">
              {['Members', 'Settings', 'Analytics', 'Recruitment'].map((tab) => (
                <button
                  key={tab}
                  className="flex-1 py-2 rounded-lg text-sm font-bold transition-all bg-purple-600 text-white"
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Members List */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-lg">Alliance Members</h4>
                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-sm transition-all">
                  Invite Members
                </button>
              </div>
              <div className="space-y-2">
                {[
                  { name: 'Agent Nexus-42', role: 'Co-Leader', earnings: 1240, joined: '2024-01-20' },
                  { name: 'Agent Nexus-88', role: 'Member', earnings: 890, joined: '2024-02-15' },
                  { name: 'Agent Nexus-15', role: 'Member', earnings: 650, joined: '2024-03-01' },
                ].map((member, idx) => (
                  <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center font-bold">
                        {member.name.charAt(member.name.length - 1)}
                      </div>
                      <div>
                        <p className="font-bold">{member.name}</p>
                        <p className="text-xs text-gray-500">{member.role} • Joined {member.joined}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Earnings</p>
                        <p className="font-bold text-green-400">${member.earnings.toLocaleString()}</p>
                      </div>
                      <button className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold transition-all">
                        Manage
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alliance Settings */}
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-4">Alliance Settings</h4>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold">Public Alliance</span>
                    <div className="w-12 h-6 rounded-full bg-purple-600 relative cursor-pointer">
                      <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-white transition-all" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">Allow anyone to join this alliance</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold">Auto-approve Members</span>
                    <div className="w-12 h-6 rounded-full bg-gray-700 relative cursor-pointer">
                      <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-all" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">Automatically approve new member requests</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold">Commission Sharing</span>
                    <div className="w-12 h-6 rounded-full bg-purple-600 relative cursor-pointer">
                      <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-white transition-all" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">Share commissions with alliance members</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedAlliance(null)}
                className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
              >
                Save Changes
              </button>
              <button
                onClick={() => setSelectedAlliance(null)}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Story Detail Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-xl">
                  {selectedStory.name.split(' ')[1]}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{selectedStory.name}</h3>
                  <p className="text-purple-400 font-bold">{selectedStory.achievement}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedStory(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Story Overview */}
            <div className="mb-6 p-6 bg-white/5 rounded-2xl border border-white/5">
              <p className="text-lg text-gray-300 mb-4 italic">"{selectedStory.quote}"</p>
              <p className="text-sm text-gray-400">{selectedStory.strategy}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Tier</p>
                <p className={`font-bold inline-block px-2 py-1 rounded text-sm border ${
                  selectedStory.tier === 'Platinum' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                  selectedStory.tier === 'Gold' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                  'bg-gray-500/10 text-gray-400 border-gray-500/20'
                }`}>
                  {selectedStory.tier}
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Earnings</p>
                <p className="font-bold text-green-400">{selectedStory.earnings}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Network</p>
                <p className="font-bold text-cyan-400">{selectedStory.network}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Timeline</p>
                <p className="font-bold text-purple-400">{selectedStory.timeline}</p>
              </div>
            </div>

            {/* Key Strategies */}
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-4">Key Strategies</h4>
              <div className="space-y-2">
                {selectedStory.keyStrategies.map((strategy: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-green-400 font-bold mt-0.5">✓</span>
                    <p className="text-sm text-gray-300">{strategy}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Products */}
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-4">Top Performing Products</h4>
              <div className="flex flex-wrap gap-2">
                {selectedStory.topProducts.map((product: string, idx: number) => (
                  <span key={idx} className="px-3 py-1.5 bg-purple-600/20 text-purple-400 border border-purple-500/30 rounded-lg text-sm font-bold">
                    {product}
                  </span>
                ))}
              </div>
            </div>

            {/* Milestones */}
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-4">Journey Milestones</h4>
              <div className="space-y-3">
                {selectedStory.milestones.map((milestone: any, idx: number) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center font-bold">
                      {milestone.month}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Month {milestone.month}</p>
                      <p className="font-bold text-sm">{milestone.achievement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  sessionStorage.setItem('selectedChatUser', selectedStory.name);
                  setSelectedStory(null);
                }}
                className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all"
              >
                Connect with {selectedStory.name.split(' ')[1]}
              </button>
              <button
                onClick={() => setSelectedStory(null)}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Network Detail Modal */}
      {selectedNetwork && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-purple-600 to-purple-900 flex items-center justify-center font-bold text-xl border-2 border-white/10">
                  {selectedNetwork.name.split('-')[0].substring(0, 3)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display">{selectedNetwork.name}</h3>
                  <p className="text-purple-400 font-bold">Rank #{selectedNetwork.rank} Network</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedNetwork(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Network Overview */}
            <div className="mb-6 p-6 bg-white/5 rounded-2xl border border-white/5">
              <p className="text-lg text-gray-300 mb-4">{selectedNetwork.strategy}</p>
              <div className="flex items-center gap-2">
                {selectedNetwork.badge && <span className="text-3xl">{selectedNetwork.badge}</span>}
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  selectedNetwork.tier === 'Platinum' 
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {selectedNetwork.tier} Tier
                </span>
                {selectedNetwork.multiplier !== '0X' && (
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded text-xs font-bold">
                    {selectedNetwork.multiplier} BONUS
                  </span>
                )}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Monthly Earnings</p>
                <p className="text-2xl font-bold text-green-400">{selectedNetwork.earnings}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Total Earnings</p>
                <p className="text-xl font-bold text-cyan-400">{selectedNetwork.totalEarnings}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Members</p>
                <p className="text-2xl font-bold text-purple-400">{selectedNetwork.members?.toLocaleString()}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Growth</p>
                <p className="text-2xl font-bold text-green-400">{selectedNetwork.growth}</p>
              </div>
            </div>

            {/* Network Leader */}
            {selectedNetwork.leader && (
              <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-xs text-gray-500 mb-1">Network Leader</p>
                <p className="font-bold text-lg">{selectedNetwork.leader}</p>
                {selectedNetwork.joined && (
                  <p className="text-xs text-gray-400 mt-1">Joined: {selectedNetwork.joined}</p>
                )}
              </div>
            )}

            {/* Top Products */}
            {selectedNetwork.topProducts && (
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-4">Top Performing Products</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedNetwork.topProducts.map((product: string, idx: number) => (
                    <span key={idx} className="px-3 py-1.5 bg-purple-600/20 text-purple-400 border border-purple-500/30 rounded-lg text-sm font-bold">
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4 border-t border-white/10">
              {selectedNetwork.leader && (
                <button
                  onClick={() => {
                    sessionStorage.setItem('selectedChatUser', selectedNetwork.leader);
                    setSelectedNetwork(null);
                  }}
                  className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all"
                >
                  Contact Leader
                </button>
              )}
              <button
                onClick={() => setSelectedNetwork(null)}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Direct Referrals Modal */}
      {showReferralsModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Direct Referrals</h3>
                <p className="text-gray-500 text-sm mt-1">People you directly referred to the platform</p>
              </div>
              <button
                onClick={() => setShowReferralsModal(false)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Total Referrals</p>
                <p className="text-2xl font-bold text-purple-400">14</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Active</p>
                <p className="text-2xl font-bold text-green-400">12</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Total Earnings</p>
                <p className="text-xl font-bold text-cyan-400">$8,420</p>
              </div>
            </div>

            {/* Referrals List */}
            <div className="space-y-3">
              {[
                { id: '1', name: 'Agent Nexus-42', tier: 'Gold', joined: '2024-01-15', earnings: 1240, status: 'Active', network: 23 },
                { id: '2', name: 'Agent Nexus-88', tier: 'Silver', joined: '2024-02-20', earnings: 890, status: 'Active', network: 15 },
                { id: '3', name: 'Agent Nexus-15', tier: 'Platinum', joined: '2024-01-10', earnings: 2560, status: 'Active', network: 45 },
                { id: '4', name: 'Agent Nexus-91', tier: 'Silver', joined: '2024-03-05', earnings: 650, status: 'Active', network: 12 },
                { id: '5', name: 'Agent Nexus-33', tier: 'Gold', joined: '2024-02-28', earnings: 1120, status: 'Active', network: 18 },
                { id: '6', name: 'Agent Nexus-55', tier: 'Bronze', joined: '2024-03-15', earnings: 320, status: 'Active', network: 5 },
                { id: '7', name: 'Agent Nexus-22', tier: 'Silver', joined: '2024-01-25', earnings: 780, status: 'Active', network: 10 },
                { id: '8', name: 'Agent Nexus-66', tier: 'Gold', joined: '2024-02-10', earnings: 980, status: 'Active', network: 16 },
                { id: '9', name: 'Agent Nexus-11', tier: 'Silver', joined: '2024-03-20', earnings: 450, status: 'Active', network: 8 },
                { id: '10', name: 'Agent Nexus-99', tier: 'Bronze', joined: '2024-04-01', earnings: 280, status: 'Active', network: 4 },
                { id: '11', name: 'Agent Nexus-77', tier: 'Gold', joined: '2024-01-30', earnings: 1050, status: 'Active', network: 20 },
                { id: '12', name: 'Agent Nexus-44', tier: 'Silver', joined: '2024-02-15', earnings: 720, status: 'Active', network: 11 },
                { id: '13', name: 'Agent Nexus-25', tier: 'Bronze', joined: '2024-03-25', earnings: 190, status: 'Inactive', network: 2 },
                { id: '14', name: 'Agent Nexus-38', tier: 'Silver', joined: '2024-02-05', earnings: 560, status: 'Active', network: 9 },
              ].map((referral) => (
                <div
                  key={referral.id}
                  className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center font-bold">
                        {referral.name.charAt(referral.name.length - 1)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold">{referral.name}</h4>
                          <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                            referral.tier === 'Platinum' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                            referral.tier === 'Gold' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                            referral.tier === 'Silver' ? 'bg-gray-500/10 text-gray-400 border border-gray-500/20' :
                            'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                          }`}>
                            {referral.tier}
                          </span>
                          <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                            referral.status === 'Active'
                              ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                              : 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                          }`}>
                            {referral.status}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">Joined: {referral.joined} • Network: {referral.network} members</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 mb-1">Earnings</p>
                      <p className="font-bold text-green-400">${referral.earnings.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-6 mt-6 border-t border-white/10">
              <button
                onClick={() => setShowReferralsModal(false)}
                className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Total Network Modal */}
      {showNetworkModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Total Network</h3>
                <p className="text-gray-500 text-sm mt-1">All members in your network (direct + indirect)</p>
              </div>
              <button
                onClick={() => setShowNetworkModal(false)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Total Network</p>
                <p className="text-2xl font-bold text-cyan-400">142</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Active</p>
                <p className="text-2xl font-bold text-green-400">89</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Total Earnings</p>
                <p className="text-xl font-bold text-purple-400">$18,420</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Active Rate</p>
                <p className="text-2xl font-bold text-yellow-400">62.7%</p>
              </div>
            </div>

            {/* Network Structure */}
            <div className="mb-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
              <p className="text-xs font-bold text-cyan-400 mb-2">📊 Network Structure</p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Level 1 (Direct):</span>
                  <span className="font-bold text-cyan-400 ml-2">14</span>
                </div>
                <div>
                  <span className="text-gray-400">Level 2:</span>
                  <span className="font-bold text-purple-400 ml-2">45</span>
                </div>
                <div>
                  <span className="text-gray-400">Level 3+:</span>
                  <span className="font-bold text-green-400 ml-2">83</span>
                </div>
              </div>
            </div>

            {/* Top Performers */}
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-4">Top Network Performers</h4>
              <div className="space-y-3">
                {[
                  { name: 'Agent Nexus-42', tier: 'Gold', earnings: 1240, network: 23, level: 1 },
                  { name: 'Agent Nexus-15', tier: 'Platinum', earnings: 2560, network: 45, level: 1 },
                  { name: 'Agent Nexus-88', tier: 'Silver', earnings: 890, network: 15, level: 1 },
                  { name: 'Agent Nexus-33', tier: 'Gold', earnings: 1120, network: 18, level: 1 },
                  { name: 'Agent Nexus-77', tier: 'Gold', earnings: 1050, network: 20, level: 1 },
                ].map((member, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center font-bold">
                          {member.name.charAt(member.name.length - 1)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold">{member.name}</h4>
                            <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                              member.tier === 'Platinum' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                              member.tier === 'Gold' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                              'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                            }`}>
                              {member.tier}
                            </span>
                            <span className="px-2 py-0.5 rounded text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                              Level {member.level}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500">Network: {member.network} members</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500 mb-1">Earnings</p>
                        <p className="font-bold text-green-400">${member.earnings.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Network Growth Chart */}
            <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/5">
              <h4 className="font-bold text-lg mb-4">Network Growth</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">This Month</span>
                  <span className="font-bold text-green-400">+18 members (+14.5%)</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Last Month</span>
                  <span className="font-bold text-cyan-400">+12 members (+9.2%)</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Growth Rate</span>
                  <span className="font-bold text-purple-400">+9.2%/month avg</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6 mt-6 border-t border-white/10">
              <button
                onClick={() => setShowNetworkModal(false)}
                className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Stats Detail Modals */}
      {selectedStat === 'growth' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Network Growth Rate</h3>
                <p className="text-gray-500 text-sm mt-1">Detailed growth analytics</p>
              </div>
              <button
                onClick={() => setSelectedStat(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Current Growth */}
              <div className="p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl">
                <p className="text-xs text-cyan-400 font-bold mb-2">Current Growth Rate</p>
                <p className="text-4xl font-bold text-cyan-400 mb-2">+9.2%</p>
                <p className="text-sm text-gray-400">This month (January 2026)</p>
              </div>

              {/* Growth History */}
              <div>
                <h4 className="font-bold text-lg mb-4">Growth History</h4>
                <div className="space-y-3">
                  {[
                    { month: 'January 2026', rate: '+9.2%', members: '+18', status: 'current' },
                    { month: 'December 2025', rate: '+8.5%', members: '+15', status: 'past' },
                    { month: 'November 2025', rate: '+7.8%', members: '+12', status: 'past' },
                    { month: 'October 2025', rate: '+6.2%', members: '+10', status: 'past' },
                    { month: 'September 2025', rate: '+5.5%', members: '+8', status: 'past' },
                  ].map((period, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border ${
                        period.status === 'current'
                          ? 'bg-cyan-500/10 border-cyan-500/20'
                          : 'bg-white/5 border-white/5'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold">{period.month}</p>
                          <p className="text-xs text-gray-400">New members: {period.members}</p>
                        </div>
                        <div className="text-right">
                          <p className={`text-xl font-bold ${
                            period.status === 'current' ? 'text-cyan-400' : 'text-gray-400'
                          }`}>
                            {period.rate}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Growth Projections */}
              <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                <p className="text-xs font-bold text-purple-400 mb-2">📈 Growth Projections</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Next month (Feb 2026):</span>
                    <span className="font-bold text-purple-400">~160 members (+12.7%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">3 months (Apr 2026):</span>
                    <span className="font-bold text-cyan-400">~185 members</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">6 months (Jul 2026):</span>
                    <span className="font-bold text-green-400">~245 members</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedStat(null)}
                className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedStat === 'active' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Active Rate</h3>
                <p className="text-gray-500 text-sm mt-1">Network activity breakdown</p>
              </div>
              <button
                onClick={() => setSelectedStat(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Current Active Rate */}
              <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl">
                <p className="text-xs text-green-400 font-bold mb-2">Current Active Rate</p>
                <p className="text-4xl font-bold text-green-400 mb-2">62.7%</p>
                <p className="text-sm text-gray-400">89 of 142 members active this month</p>
              </div>

              {/* Activity Breakdown */}
              <div>
                <h4 className="font-bold text-lg mb-4">Activity Breakdown</h4>
                <div className="space-y-3">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold">Active Members</span>
                      <span className="text-lg font-bold text-green-400">89 (62.7%)</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '62.7%' }} />
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold">Inactive Members</span>
                      <span className="text-lg font-bold text-gray-400">53 (37.3%)</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-600 rounded-full" style={{ width: '37.3%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity Levels */}
              <div>
                <h4 className="font-bold text-lg mb-4">Activity Levels</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                    <p className="text-xs text-gray-500 mb-1">Highly Active</p>
                    <p className="text-2xl font-bold text-green-400">42</p>
                    <p className="text-xs text-gray-400">Daily activity</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                    <p className="text-xs text-gray-500 mb-1">Moderately Active</p>
                    <p className="text-2xl font-bold text-cyan-400">47</p>
                    <p className="text-xs text-gray-400">Weekly activity</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                    <p className="text-xs text-gray-500 mb-1">Inactive</p>
                    <p className="text-2xl font-bold text-gray-400">53</p>
                    <p className="text-xs text-gray-400">No activity</p>
                  </div>
                </div>
              </div>

              {/* Activity Trends */}
              <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <p className="text-xs font-bold text-cyan-400 mb-2">📊 Activity Trends</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Last month:</span>
                    <span className="font-bold text-cyan-400">58.2% active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Change:</span>
                    <span className="font-bold text-green-400">+4.5% improvement</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Platform average:</span>
                    <span className="font-bold text-purple-400">55.3%</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedStat(null)}
                className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedStat === 'earnings' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Average Earnings Per Member</h3>
                <p className="text-gray-500 text-sm mt-1">Earnings distribution analysis</p>
              </div>
              <button
                onClick={() => setSelectedStat(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Current Average */}
              <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
                <p className="text-xs text-purple-400 font-bold mb-2">Average Earnings Per Active Member</p>
                <p className="text-4xl font-bold text-purple-400 mb-2">$17.25</p>
                <p className="text-sm text-gray-400">Based on 89 active members</p>
              </div>

              {/* Earnings Distribution */}
              <div>
                <h4 className="font-bold text-lg mb-4">Earnings Distribution</h4>
                <div className="space-y-3">
                  {[
                    { range: '$50+', count: 12, percentage: 13.5, color: 'green' },
                    { range: '$25-$50', count: 18, percentage: 20.2, color: 'cyan' },
                    { range: '$10-$25', count: 28, percentage: 31.5, color: 'purple' },
                    { range: '$5-$10', count: 21, percentage: 23.6, color: 'yellow' },
                    { range: 'Under $5', count: 10, percentage: 11.2, color: 'gray' },
                  ].map((tier, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold">{tier.range}</span>
                        <span className={`text-lg font-bold ${
                          tier.color === 'green' ? 'text-green-400' :
                          tier.color === 'cyan' ? 'text-cyan-400' :
                          tier.color === 'purple' ? 'text-purple-400' :
                          tier.color === 'yellow' ? 'text-yellow-400' :
                          'text-gray-400'
                        }`}>
                          {tier.count} members ({tier.percentage}%)
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            tier.color === 'green' ? 'bg-green-500' :
                            tier.color === 'cyan' ? 'bg-cyan-500' :
                            tier.color === 'purple' ? 'bg-purple-500' :
                            tier.color === 'yellow' ? 'bg-yellow-500' :
                            'bg-gray-500'
                          } rounded-full`} 
                          style={{ width: `${tier.percentage}%` }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Earners */}
              <div>
                <h4 className="font-bold text-lg mb-4">Top Earning Members</h4>
                <div className="space-y-2">
                  {[
                    { name: 'Agent Nexus-42', earnings: 1240, tier: 'Gold' },
                    { name: 'Agent Nexus-15', earnings: 2560, tier: 'Platinum' },
                    { name: 'Agent Nexus-88', earnings: 890, tier: 'Silver' },
                    { name: 'Agent Nexus-33', earnings: 1120, tier: 'Gold' },
                    { name: 'Agent Nexus-77', earnings: 1050, tier: 'Gold' },
                  ].map((member, idx) => (
                    <div key={idx} className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-gray-600 w-6">#{idx + 1}</span>
                        <span className="font-bold text-sm">{member.name}</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                          member.tier === 'Platinum' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                          member.tier === 'Gold' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                          'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                        }`}>
                          {member.tier}
                        </span>
                      </div>
                      <span className="font-bold text-green-400">${member.earnings.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Earnings Insights */}
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                <p className="text-xs font-bold text-green-400 mb-2">💡 Earnings Insights</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total network earnings:</span>
                    <span className="font-bold text-green-400">$18,420</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Your commission (10%):</span>
                    <span className="font-bold text-purple-400">$1,842</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Platform average:</span>
                    <span className="font-bold text-cyan-400">$14.50/member</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Your performance:</span>
                    <span className="font-bold text-green-400">+18.9% above average</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedStat(null)}
                className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Alliance Detail Modal */}
      {selectedProductAlliance && (() => {
        const alliance = productAlliances.find(a => a.id === selectedProductAlliance);
        if (!alliance) return null;

        return (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{alliance.productName} Alliance</h3>
                  <p className="text-gray-500 text-sm mt-1">Product alliance details and rankings</p>
                </div>
                <button
                  onClick={() => setSelectedProductAlliance(null)}
                  className="p-2 hover:bg-white/10 rounded-xl transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                {/* Your Stats */}
                <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
                  <p className="text-xs text-purple-400 font-bold mb-2">Your Performance</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Your Rank</p>
                      <p className="text-2xl font-bold text-purple-400">#{alliance.yourRank}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Your Earnings</p>
                      <p className="text-2xl font-bold text-green-400">${alliance.yourEarnings.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Commission</p>
                      <p className="text-2xl font-bold text-cyan-400">{alliance.commission}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Joined</p>
                      <p className="text-sm font-bold text-yellow-400">{alliance.joined}</p>
                    </div>
                  </div>
                </div>

                {/* Alliance Stats */}
                <div>
                  <h4 className="font-bold text-lg mb-4">Alliance Statistics</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white/5 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Total Members</p>
                      <p className="text-2xl font-bold text-cyan-400">{alliance.members.toLocaleString()}</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Total Earnings</p>
                      <p className="text-2xl font-bold text-green-400">${alliance.totalEarnings.toLocaleString()}</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Avg/Member</p>
                      <p className="text-2xl font-bold text-purple-400">${(alliance.totalEarnings / alliance.members).toFixed(0)}</p>
                    </div>
                  </div>
                </div>

                {/* Top Performers */}
                <div>
                  <h4 className="font-bold text-lg mb-4">Top Performers</h4>
                  <div className="space-y-2">
                    {[
                      { rank: 1, name: 'Agent Nexus-15', earnings: 12450, tier: 'Platinum' },
                      { rank: 2, name: 'Agent Nexus-42', earnings: 8920, tier: 'Gold' },
                      { rank: 3, name: 'Agent Nexus-88', earnings: 6750, tier: 'Gold' },
                      { rank: alliance.yourRank, name: 'You (Agent Nexus-77)', earnings: alliance.yourEarnings, tier: 'Silver', isYou: true },
                    ].map((performer, idx) => (
                      <div 
                        key={idx}
                        className={`p-3 bg-white/5 rounded-xl border ${
                          performer.isYou 
                            ? 'border-purple-500/30 bg-purple-500/10' 
                            : 'border-white/5'
                        } flex items-center justify-between`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-lg font-bold ${
                            performer.rank <= 3 ? 'text-yellow-400' : 'text-gray-400'
                          }`}>
                            #{performer.rank}
                          </span>
                          <span className="font-bold">{performer.name}</span>
                          {performer.isYou && (
                            <span className="px-2 py-0.5 bg-purple-600 text-white text-[10px] font-bold rounded">YOU</span>
                          )}
                          <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                            performer.tier === 'Platinum' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/20' :
                            performer.tier === 'Gold' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/20' :
                            'bg-gray-500/20 text-gray-400 border border-gray-500/20'
                          }`}>
                            {performer.tier}
                          </span>
                        </div>
                        <span className="font-bold text-green-400">${performer.earnings.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Insights */}
                <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                  <p className="text-xs font-bold text-cyan-400 mb-2">💡 Performance Insights</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Rank percentile:</span>
                      <span className="font-bold text-cyan-400">
                        Top {((alliance.members - alliance.yourRank) / alliance.members * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">To reach top 10:</span>
                      <span className="font-bold text-purple-400">
                        ${(alliance.totalEarnings / alliance.members * 10 - alliance.yourEarnings).toFixed(0)} more needed
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Your share of total:</span>
                      <span className="font-bold text-green-400">
                        {((alliance.yourEarnings / alliance.totalEarnings) * 100).toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProductAlliance(null)}
                  className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};

export default Alliance;
