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
  content?: string;
  tags?: string[];
  createdAt?: string;
}

interface ForumReply {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  likes: number;
  isAuthor?: boolean;
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
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<ForumPost | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [newPostData, setNewPostData] = useState({
    title: '',
    category: '',
    content: '',
    tags: [] as string[],
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    { 
      id: '1', 
      title: 'How I Reached $5K/month in 6 Months', 
      author: 'CryptoMaster-42', 
      category: 'affiliate', 
      replies: 89, 
      views: 1245, 
      lastActivity: '2 hours ago', 
      isPinned: true, 
      isHot: true,
      content: 'Hey everyone! I wanted to share my journey of reaching $5K/month in affiliate earnings in just 6 months. It wasn\'t easy, but with the right strategies and consistency, it\'s definitely achievable.\n\nHere\'s what worked for me:\n\n1. **Focus on High-Commission Products**: I started promoting products with 25%+ commission rates. The NXC Trading Masterclass was a game-changer for me.\n\n2. **Content Creation**: I posted daily on social media, sharing real results and testimonials. Authenticity is key!\n\n3. **Network Building**: I built a team of 50+ affiliates who are now generating passive income for me.\n\n4. **MEV Bot Staking**: I allocated 30% of my earnings to MEV bot staking, which now generates additional passive income.\n\n5. **Consistency**: I treated this like a real business, not a side hustle. Daily action, even if it\'s just 30 minutes.\n\nHappy to answer any questions!',
      tags: ['Success Story', 'Tutorial'],
      createdAt: '2 weeks ago'
    },
    { 
      id: '2', 
      title: 'Best MEV Bot Strategy for Beginners', 
      author: 'BotTrader-19', 
      category: 'mev', 
      replies: 89, 
      views: 1124, 
      lastActivity: '3 hours ago', 
      isPinned: true,
      content: 'New to MEV bot trading? Here\'s a comprehensive guide to get you started.\n\n**Understanding MEV Bots**:\nMEV (Maximal Extractable Value) bots automatically identify and execute profitable trades by finding arbitrage opportunities across different DEXs.\n\n**Getting Started**:\n1. Purchase MEV Bot Pro License\n2. Connect your wallet\n3. Allocate initial capital (I recommend starting with $500-$1000)\n4. Set your risk parameters\n5. Enable auto-staking for passive returns\n\n**Pro Tips**:\n- Start with conservative settings\n- Monitor performance for the first week\n- Reinvest profits to compound growth\n- Join the MEV Bot community for support\n\nFeel free to ask questions below!',
      tags: ['Tutorial', 'Discussion'],
      createdAt: '1 week ago'
    },
    { 
      id: '9', 
      title: 'Best XAB Bot Strategy for XRP Trading', 
      author: 'XRPBotMaster-22', 
      category: 'xab', 
      replies: 67, 
      views: 892, 
      lastActivity: '5 hours ago', 
      isPinned: true,
      content: 'XRP traders, this one\'s for you! The XAB Bot has been generating consistent returns for me.\n\n**Why XAB Bot?**\n- Optimized specifically for XRP trading pairs\n- Lower gas fees compared to Ethereum-based bots\n- Higher APY potential (I\'m seeing 12-18% monthly)\n\n**My Strategy**:\n1. Allocate 40% of portfolio to XAB bot staking\n2. Use remaining 60% for active trading\n3. Compound rewards weekly\n4. Take profits monthly for living expenses\n\n**Results**:\n- Month 1: $450 profit\n- Month 2: $680 profit\n- Month 3: $920 profit\n\nShare your XAB bot experiences below!',
      tags: ['Tutorial', 'Success Story'],
      createdAt: '5 days ago'
    },
    { 
      id: '3', 
      title: 'Network Building: From 0 to 100 Members', 
      author: 'NetworkBuilder-55', 
      category: 'network', 
      replies: 45, 
      views: 678, 
      lastActivity: '1 day ago', 
      isHot: true,
      content: 'Building a network from scratch? Here\'s how I went from 0 to 100 members in 90 days.\n\n**The Framework**:\n1. **Week 1-2**: Recruit your first 5 quality members\n2. **Week 3-4**: Train them to recruit\n3. **Month 2**: Scale to 25 members\n4. **Month 3**: Hit 100+ through team leaders\n\n**Key Principles**:\n- Quality over quantity\n- Provide value first\n- Support your team\n- Lead by example\n\n**Tools I Used**:\n- Content Generator for social posts\n- Email templates for outreach\n- Alliance Arena for tracking\n\nLet\'s discuss network building strategies!',
      tags: ['Tutorial', 'Discussion'],
      createdAt: '3 days ago'
    },
    { 
      id: '4', 
      title: 'Financial Freedom Progress: Month 3 Update', 
      author: 'FreedomSeeker-88', 
      category: 'financial', 
      replies: 34, 
      views: 456, 
      lastActivity: '2 days ago',
      content: 'Month 3 update on my financial freedom journey!\n\n**Current Status**:\n- Affiliate Income: $2,450/month\n- MEV Bot Returns: $320/month\n- XAB Bot Returns: $180/month\n- Network Commissions: $245/month\n\n**Total Passive Income**: $3,195/month\n\n**Goals**:\n- Month 6: $5,000/month\n- Month 12: $10,000/month\n- Year 2: Replace full-time income\n\n**What\'s Working**:\n- Consistent content creation\n- Strategic product selection\n- Team building focus\n- Bot staking diversification\n\nThanks to this community for the support!',
      tags: ['Success Story', 'Discussion'],
      createdAt: '2 weeks ago'
    },
    { 
      id: '5', 
      title: 'Content Generator Tips & Tricks', 
      author: 'ContentCreator-12', 
      category: 'affiliate', 
      replies: 28, 
      views: 389, 
      lastActivity: '3 days ago',
      content: 'The Content Generator is a powerful tool! Here are my top tips:\n\n1. **Use Custom Prompts**: Be specific about your audience and goals\n2. **Test Different Tones**: Professional works for LinkedIn, casual for Instagram\n3. **Generate for All Platforms**: Don\'t just use one - diversify!\n4. **Save Templates**: Reuse successful content structures\n5. **A/B Test**: Try different versions to see what converts\n\n**Pro Tip**: Generate content in batches to save NXC credits!\n\nShare your content generation strategies!',
      tags: ['Tutorial', 'Help Needed'],
      createdAt: '1 week ago'
    },
    { 
      id: '6', 
      title: 'MEV vs XAB Bot: Which Should You Choose?', 
      author: 'TradingExpert-44', 
      category: 'mev', 
      replies: 78, 
      views: 945, 
      lastActivity: '2 days ago', 
      isHot: true,
      content: 'Common question: MEV or XAB bot? Here\'s my analysis:\n\n**MEV Bot**:\n- Best for: Ethereum-based trading\n- APY: 8-15% monthly\n- Risk: Medium\n- Capital needed: $500+\n\n**XAB Bot**:\n- Best for: XRP-focused traders\n- APY: 12-18% monthly\n- Risk: Medium-Low\n- Capital needed: $500+\n\n**My Recommendation**:\n- If you trade ETH/ERC-20 tokens: MEV Bot\n- If you focus on XRP: XAB Bot\n- If you want diversification: Both!\n\nI run both bots and they complement each other well. What\'s your experience?',
      tags: ['Discussion', 'Question'],
      createdAt: '1 week ago'
    },
    { 
      id: '10', 
      title: 'XAB Bot APY Comparison: XRP Strategies', 
      author: 'StakingPro-33', 
      category: 'xab', 
      replies: 56, 
      views: 567, 
      lastActivity: '4 days ago', 
      isHot: true,
      content: 'Detailed APY analysis for XAB bot strategies:\n\n**Strategy 1: Conservative**\n- APY: 10-12%\n- Risk: Low\n- Best for: Beginners\n\n**Strategy 2: Balanced**\n- APY: 14-16%\n- Risk: Medium\n- Best for: Intermediate\n\n**Strategy 3: Aggressive**\n- APY: 18-22%\n- Risk: High\n- Best for: Experienced traders\n\n**My Setup**:\nI use 60% Balanced + 40% Conservative for steady growth with some upside.\n\nShare your XAB bot strategies!',
      tags: ['Tutorial', 'Discussion'],
      createdAt: '5 days ago'
    },
    { 
      id: '7', 
      title: 'Alliance Tier Progression Guide', 
      author: 'AllianceLeader-77', 
      category: 'network', 
      replies: 42, 
      views: 512, 
      lastActivity: '5 days ago',
      content: 'Complete guide to Alliance tier progression:\n\n**Bronze → Silver**:\n- 5 direct referrals\n- $5,000 network volume\n\n**Silver → Gold**:\n- 15 direct referrals\n- $25,000 network volume\n\n**Gold → Platinum**:\n- 50 direct referrals\n- $100,000 network volume\n\n**Benefits of Higher Tiers**:\n- Higher commission rates\n- Exclusive products\n- Priority support\n- Bonus multipliers\n\n**Pro Tips**:\n- Focus on quality team members\n- Provide training and support\n- Track progress in Alliance Arena\n\nQuestions about tier progression? Ask below!',
      tags: ['Tutorial', 'Help Needed'],
      createdAt: '2 weeks ago'
    },
    { 
      id: '8', 
      title: 'Platform Update: New Features Coming Soon', 
      author: 'Admin', 
      category: 'all', 
      replies: 123, 
      views: 1890, 
      lastActivity: '1 week ago', 
      isPinned: true,
      content: 'Exciting updates coming to BitNexus!\n\n**Q1 2024 Roadmap**:\n\n1. **Enhanced Content Generator**\n   - Video content support\n   - Multi-language generation\n   - Scheduled posting\n\n2. **Advanced Analytics**\n   - Real-time performance tracking\n   - Predictive insights\n   - Custom reports\n\n3. **Mobile App**\n   - iOS and Android\n   - Push notifications\n   - Mobile-optimized dashboard\n\n4. **New Bot Options**\n   - Additional trading pairs\n   - Risk management tools\n   - Auto-compounding\n\n5. **Community Features**\n   - Live chat rooms\n   - Video tutorials\n   - Expert Q&A sessions\n\nStay tuned for more updates!',
      tags: ['Announcement'],
      createdAt: '2 weeks ago'
    },
  ];

  // Mock replies data
  const getReplies = (postId: string): ForumReply[] => {
    const repliesMap: { [key: string]: ForumReply[] } = {
      '1': [
        { id: 'r1', author: 'AffiliatePro-99', content: 'Amazing journey! How did you find your first customers?', createdAt: '2 hours ago', likes: 12 },
        { id: 'r2', author: 'Newbie-23', content: 'This is so inspiring! Starting my journey today. Thanks for sharing!', createdAt: '1 hour ago', likes: 8 },
        { id: 'r3', author: 'CryptoMaster-42', content: '@AffiliatePro-99 I started by sharing my results on Twitter and Reddit. Authenticity attracts people!', createdAt: '1 hour ago', likes: 15, isAuthor: true },
      ],
      '2': [
        { id: 'r4', author: 'BotNewbie-11', content: 'Great guide! Just purchased my license. Any tips for the first week?', createdAt: '2 hours ago', likes: 5 },
        { id: 'r5', author: 'BotTrader-19', content: '@BotNewbie-11 Start with small amounts, monitor closely, and don\'t panic if you see small losses initially. It\'s normal!', createdAt: '1 hour ago', likes: 9, isAuthor: true },
      ],
    };
    return repliesMap[postId] || [];
  };

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

  const availableTags = ['Question', 'Discussion', 'Tutorial', 'Success Story', 'Help Needed', 'Announcement'];

  const handlePostChange = (field: string, value: string | string[]) => {
    setNewPostData({ ...newPostData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const toggleTag = (tag: string) => {
    const newTags = newPostData.tags.includes(tag)
      ? newPostData.tags.filter(t => t !== tag)
      : [...newPostData.tags, tag];
    handlePostChange('tags', newTags);
  };

  const validatePost = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!newPostData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!newPostData.category) {
      newErrors.category = 'Category is required';
    }

    if (!newPostData.content.trim()) {
      newErrors.content = 'Content is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePost()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Reset form and close modal
    setNewPostData({ title: '', category: '', content: '', tags: [] });
    setErrors({});
    setIsSubmitting(false);
    setShowNewPostModal(false);
    
    // In a real app, you would add the post to the list here
    alert('Post submitted successfully!');
  };

  const handlePostClick = (post: ForumPost) => {
    setSelectedPost(post);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
    setReplyContent('');
  };

  const handleSubmitReply = () => {
    if (!replyContent.trim()) return;
    // In a real app, this would submit the reply
    alert('Reply submitted!');
    setReplyContent('');
  };

  // Post Detail View
  if (selectedPost) {
    const replies = getReplies(selectedPost.id);
    const postCategory = categories.find(c => c.id === selectedPost.category);

    return (
      <div className="space-y-6">
        {/* Back Button */}
        <button
          onClick={handleBackToList}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-bold">Back to Forum</span>
        </button>

        {/* Post Detail */}
        <div className="glass-card p-8 rounded-3xl border border-white/5">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                {selectedPost.isPinned && (
                  <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-[10px] font-bold rounded">
                    📌 PINNED
                  </span>
                )}
                {selectedPost.isHot && (
                  <span className="px-2 py-0.5 bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-bold rounded">
                    🔥 HOT
                  </span>
                )}
                {postCategory && (
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold ${getCategoryColor(postCategory.color)}`}>
                    {postCategory.icon} {postCategory.name}
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold font-display mb-4">{selectedPost.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-sm">
                    {selectedPost.author.split('-')[1]}
                  </div>
                  <div>
                    <p className="font-bold text-white">{selectedPost.author}</p>
                    <p className="text-xs text-gray-500">{selectedPost.createdAt || selectedPost.lastActivity}</p>
                  </div>
                </div>
                <span>•</span>
                <span>{selectedPost.views.toLocaleString()} views</span>
                <span>•</span>
                <span>{selectedPost.replies} replies</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          {selectedPost.tags && selectedPost.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedPost.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-purple-600/20 text-purple-400 border border-purple-500/30 rounded-lg text-xs font-bold">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Content */}
          <div className="prose prose-invert max-w-none mb-8">
            <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
              {selectedPost.content || 'No content available.'}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-6 border-t border-white/5">
            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-sm font-bold">Like</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span className="text-sm font-bold">Share</span>
            </button>
          </div>
        </div>

        {/* Replies Section */}
        <div className="glass-card p-8 rounded-3xl border border-white/5">
          <h2 className="text-2xl font-bold font-display mb-6">
            Replies ({replies.length})
          </h2>

          {/* Replies List */}
          <div className="space-y-6 mb-8">
            {replies.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No replies yet. Be the first to reply!</p>
            ) : (
              replies.map(reply => (
                <div key={reply.id} className="flex gap-4 pb-6 border-b border-white/5 last:border-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {reply.author.split('-')[1]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-white">{reply.author}</span>
                      {reply.isAuthor && (
                        <span className="px-2 py-0.5 bg-purple-600/20 text-purple-400 border border-purple-500/30 text-[10px] font-bold rounded">
                          OP
                        </span>
                      )}
                      <span className="text-xs text-gray-500">• {reply.createdAt}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-3">{reply.content}</p>
                    <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-purple-400 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>{reply.likes} likes</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Reply Form */}
          <div className="pt-6 border-t border-white/5">
            <h3 className="text-lg font-bold mb-4">Write a Reply</h3>
            <textarea
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              placeholder="Share your thoughts..."
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500/50 transition-colors resize-none text-white placeholder:text-gray-500 mb-4"
            />
            <button
              onClick={handleSubmitReply}
              disabled={!replyContent.trim()}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl font-bold hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Post Reply
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Forum List View
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-display">Community Forum</h2>
          <p className="text-gray-500 text-sm">Connect, learn, and grow with the BitNexus community</p>
        </div>
        <button 
          onClick={() => setShowNewPostModal(true)}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
        >
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
                onClick={() => handlePostClick(post)}
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

      {/* New Post Modal */}
      {showNewPostModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowNewPostModal(false)}
          />

          {/* Modal */}
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-white/5 z-10">
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-display">Create New Post</h2>
                <button
                  onClick={() => setShowNewPostModal(false)}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmitPost} className="space-y-6">
                {/* Title */}
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                    Post Title *
                  </label>
                  <input
                    type="text"
                    value={newPostData.title}
                    onChange={(e) => handlePostChange('title', e.target.value)}
                    placeholder="Enter your post title..."
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 focus:outline-none transition-colors text-white placeholder:text-gray-500 ${
                      errors.title ? 'border-red-500/50' : 'border-white/10 focus:border-purple-500/50'
                    }`}
                    required
                  />
                  {errors.title && <p className="text-red-400 text-xs mt-1">{errors.title}</p>}
                </div>

                {/* Category */}
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                    Category *
                  </label>
                  <select
                    value={newPostData.category}
                    onChange={(e) => handlePostChange('category', e.target.value)}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 focus:outline-none transition-colors text-white ${
                      errors.category ? 'border-red-500/50' : 'border-white/10 focus:border-purple-500/50'
                    }`}
                    required
                  >
                    <option value="" className="bg-gray-800 text-white">Select a category</option>
                    {categories.filter(c => c.id !== 'all').map(cat => (
                      <option key={cat.id} value={cat.id} className="bg-gray-800 text-white">
                        {cat.icon} {cat.name}
                      </option>
                    ))}
                  </select>
                  {errors.category && <p className="text-red-400 text-xs mt-1">{errors.category}</p>}
                </div>

                {/* Content */}
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                    Content *
                  </label>
                  <textarea
                    value={newPostData.content}
                    onChange={(e) => handlePostChange('content', e.target.value)}
                    placeholder="Share your thoughts, ask questions, or start a discussion..."
                    rows={8}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 focus:outline-none transition-colors resize-none text-white placeholder:text-gray-500 ${
                      errors.content ? 'border-red-500/50' : 'border-white/10 focus:border-purple-500/50'
                    }`}
                    required
                  />
                  {errors.content && <p className="text-red-400 text-xs mt-1">{errors.content}</p>}
                </div>

                {/* Tags */}
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                    Tags (Optional)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableTags.map(tag => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          newPostData.tags.includes(tag)
                            ? 'bg-purple-600 text-white'
                            : 'bg-white/5 text-gray-400 border border-white/10 hover:border-purple-500/30'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                  <p className="text-xs text-cyan-400 font-bold mb-1">💡 Tips for Great Posts</p>
                  <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
                    <li>Be clear and specific in your title</li>
                    <li>Provide context and details in your content</li>
                    <li>Use tags to help others find your post</li>
                    <li>Be respectful and follow community guidelines</li>
                  </ul>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowNewPostModal(false)}
                    className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl font-bold shadow-xl shadow-purple-900/40 hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Publish Post'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forum;

