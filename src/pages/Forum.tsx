import React, { useState } from 'react';
import { ICONS } from '../constants';

interface ForumPost {
  id: string;
  title: string;
  author: string;
  category: string;
  replies: number;
  views: number;
  lastActivity: string;
  isPinned?: boolean;
  isHot?: boolean;
}

interface ForumCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  postCount: number;
  color: string;
}

const Forum: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ForumCategory[] = [
    { id: 'all', name: 'All Discussions', description: 'Browse all forum topics', icon: '💬', postCount: 1247, color: 'purple' },
    { id: 'affiliate', name: 'Affiliate Marketing', description: 'Strategies, tips, and success stories', icon: '📈', postCount: 456, color: 'cyan' },
    { id: 'mev', name: 'MEV Bot Trading', description: 'MEV bot strategies and staking discussions', icon: '🤖', postCount: 312, color: 'purple' },
    { id: 'xab', name: 'XAB Bot Trading (XRP)', description: 'XRP-specific bot strategies and staking', icon: '🤖', postCount: 289, color: 'green' },
    { id: 'network', name: 'Network Building', description: 'MLM strategies and team building', icon: '👥', postCount: 312, color: 'yellow' },
    { id: 'financial', name: 'Financial Freedom', description: 'Income goals and passive income', icon: '💰', postCount: 189, color: 'pink' },
    { id: 'support', name: 'Support & Help', description: 'Get help from the community', icon: '🆘', postCount: 156, color: 'red' },
  ];

  const posts: ForumPost[] = [
    { id: '1', title: 'How I Reached $5K/month in 6 Months', author: 'CryptoMaster-42', category: 'affiliate', replies: 89, views: 1245, lastActivity: '2 hours ago', isPinned: true, isHot: true },
    { id: '2', title: 'Best MEV Bot Strategy for Beginners', author: 'BotTrader-19', category: 'mev', replies: 89, views: 1124, lastActivity: '3 hours ago', isPinned: true },
    { id: '9', title: 'Best XAB Bot Strategy for XRP Trading', author: 'XRPBotMaster-22', category: 'xab', replies: 67, views: 892, lastActivity: '5 hours ago', isPinned: true },
    { id: '3', title: 'Network Building: From 0 to 100 Members', author: 'NetworkBuilder-55', category: 'network', replies: 45, views: 678, lastActivity: '1 day ago', isHot: true },
    { id: '4', title: 'Financial Freedom Progress: Month 3 Update', author: 'FreedomSeeker-88', category: 'financial', replies: 34, views: 456, lastActivity: '2 days ago' },
    { id: '5', title: 'Content Generator Tips & Tricks', author: 'ContentCreator-12', category: 'affiliate', replies: 28, views: 389, lastActivity: '3 days ago' },
    { id: '6', title: 'MEV vs XAB Bot: Which Should You Choose?', author: 'TradingExpert-44', category: 'mev', replies: 78, views: 945, lastActivity: '2 days ago', isHot: true },
    { id: '10', title: 'XAB Bot APY Comparison: XRP Strategies', author: 'StakingPro-33', category: 'xab', replies: 56, views: 567, lastActivity: '4 days ago', isHot: true },
    { id: '7', title: 'Alliance Tier Progression Guide', author: 'AllianceLeader-77', category: 'network', replies: 42, views: 512, lastActivity: '5 days ago' },
    { id: '8', title: 'Platform Update: New Features Coming Soon', author: 'Admin', category: 'all', replies: 123, views: 1890, lastActivity: '1 week ago', isPinned: true },
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (color: string) => {
    const colors: { [key: string]: string } = {
      purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      cyan: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      green: 'bg-green-500/20 text-green-400 border-green-500/30',
      yellow: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      pink: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
      red: 'bg-red-500/20 text-red-400 border-red-500/30',
    };
    return colors[color] || colors.purple;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-display">Community Forum</h2>
          <p className="text-gray-500 text-sm">Connect, learn, and grow with the BitNexus community</p>
        </div>
        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all">
          + New Post
        </button>
      </div>

      {/* Search Bar */}
      <div className="glass-card p-4 rounded-2xl border border-white/5">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-white placeholder:text-white/40"
            />
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-card p-6 rounded-2xl border border-white/5">
          <p className="text-gray-500 text-sm mb-2">Total Posts</p>
          <p className="text-2xl font-bold text-purple-400">1,247</p>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-white/5">
          <p className="text-gray-500 text-sm mb-2">Active Members</p>
          <p className="text-2xl font-bold text-cyan-400">892</p>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-white/5">
          <p className="text-gray-500 text-sm mb-2">Today's Posts</p>
          <p className="text-2xl font-bold text-green-400">23</p>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-white/5">
          <p className="text-gray-500 text-sm mb-2">Online Now</p>
          <p className="text-2xl font-bold text-yellow-400">156</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <div className="glass-card p-6 rounded-3xl border border-white/5 sticky top-6">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left p-3 rounded-xl transition-all ${
                    selectedCategory === category.id
                      ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{category.icon}</span>
                      <span className="font-bold text-sm">{category.name}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">{category.postCount} posts</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Posts List */}
        <div className="lg:col-span-3 space-y-4">
          {filteredPosts.length === 0 ? (
            <div className="glass-card p-12 rounded-3xl border border-white/5 text-center">
              <p className="text-gray-500">No posts found. Try a different search or category.</p>
            </div>
          ) : (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                className="glass-card p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {post.author.split('-')[1]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      {post.isPinned && (
                        <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-[10px] font-bold rounded">
                          📌 PINNED
                        </span>
                      )}
                      {post.isHot && (
                        <span className="px-2 py-0.5 bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-bold rounded">
                          🔥 HOT
                        </span>
                      )}
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${getCategoryColor(categories.find(c => c.id === post.category)?.color || 'purple')}`}>
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 hover:text-purple-400 transition-colors">{post.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>By <span className="text-cyan-400 font-bold">{post.author}</span></span>
                      <span>•</span>
                      <span>{post.replies} replies</span>
                      <span>•</span>
                      <span>{post.views.toLocaleString()} views</span>
                      <span>•</span>
                      <span>{post.lastActivity}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Forum;

