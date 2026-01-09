import React, { useState, useEffect } from 'react';
import { ICONS } from '../constants';
import { AppRoute } from '../types';
import { navigateToUserProfile } from '../utils/profileNavigation';

interface FeedPost {
  id: string;
  author: string;
  authorAvatar: string;
  authorTier: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  type: 'post' | 'achievement' | 'product' | 'update';
  tags?: string[];
}

interface FeedProps {
  setActiveRoute?: (route: AppRoute) => void;
}

const Feed: React.FC<FeedProps> = ({ setActiveRoute }) => {
  const [selectedPost, setSelectedPost] = useState<FeedPost | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [postLikes, setPostLikes] = useState<Record<string, number>>({});
  const [postComments, setPostComments] = useState<Record<string, number>>({});
  const [postShares, setPostShares] = useState<Record<string, number>>({});
  const [showComments, setShowComments] = useState<string | null>(null);
  const [commentInput, setCommentInput] = useState<Record<string, string>>({});

  const filters = ['all', 'achievements', 'products', 'updates', 'community'];

  const feedPosts: FeedPost[] = [
    {
      id: '1',
      author: 'Agent Nexus-42',
      authorAvatar: '42',
      authorTier: 'Gold',
      content: 'Just hit $10K/month! 🎉 The combination of high-commission products and building my network has been incredible. Thanks to everyone who supported me on this journey!',
      image: 'https://picsum.photos/seed/feed1/600/400',
      likes: 124,
      comments: 23,
      shares: 8,
      timestamp: '2 hours ago',
      type: 'achievement',
      tags: ['#SuccessStory', '#FinancialFreedom']
    },
    {
      id: '2',
      author: 'Agent Nexus-15',
      authorAvatar: '15',
      authorTier: 'Platinum',
      content: 'New product alert! 🚀 The MEV Bot Pro License is now available. I\'ve been testing it for a week and the returns are solid. Check it out in the marketplace!',
      image: 'https://picsum.photos/seed/feed2/600/400',
      likes: 89,
      comments: 15,
      shares: 12,
      timestamp: '5 hours ago',
      type: 'product',
      tags: ['#NewProduct', '#MEVBot']
    },
    {
      id: '3',
      author: 'BitNexus Team',
      authorAvatar: 'BN',
      authorTier: 'Admin',
      content: 'Platform Update: We\'ve just launched the new Content Generator with AI-powered features. Create engaging posts in seconds! 🎨✨',
      likes: 256,
      comments: 45,
      shares: 67,
      timestamp: '1 day ago',
      type: 'update',
      tags: ['#PlatformUpdate', '#NewFeature']
    },
    {
      id: '4',
      author: 'Agent Nexus-88',
      authorAvatar: '88',
      authorTier: 'Silver',
      content: 'Quick tip: Focus on products with recurring commissions. They build sustainable passive income over time. My monthly recurring revenue just hit $2K! 💰',
      likes: 67,
      comments: 12,
      shares: 5,
      timestamp: '1 day ago',
      type: 'post',
      tags: ['#Tip', '#PassiveIncome']
    },
    {
      id: '5',
      author: 'Agent Nexus-33',
      authorAvatar: '33',
      authorTier: 'Gold',
      content: 'Reached 200 members in my network! 🎊 The team building strategies from the Academy really work. If you\'re serious about scaling, check out the Network Building course.',
      likes: 145,
      comments: 34,
      shares: 19,
      timestamp: '2 days ago',
      type: 'achievement',
      tags: ['#NetworkBuilding', '#Milestone']
    },
    {
      id: '6',
      author: 'Agent Nexus-91',
      authorAvatar: '91',
      authorTier: 'Silver',
      content: 'Just discovered the XAB Bot for XRP trading. The returns are amazing! 14.8% APY and it\'s been running smoothly for 3 months now. Highly recommend! 🤖',
      likes: 98,
      comments: 28,
      shares: 14,
      timestamp: '2 days ago',
      type: 'product',
      tags: ['#XABBot', '#PassiveIncome']
    },
  ];

  const filteredPosts = activeFilter === 'all' 
    ? feedPosts 
    : feedPosts.filter(post => {
        if (activeFilter === 'achievements') return post.type === 'achievement';
        if (activeFilter === 'products') return post.type === 'product';
        if (activeFilter === 'updates') return post.type === 'update';
        if (activeFilter === 'community') return post.type === 'post';
        return true;
      });

  // Initialize post counts
  useEffect(() => {
    const initialLikes: Record<string, number> = {};
    const initialComments: Record<string, number> = {};
    const initialShares: Record<string, number> = {};
    feedPosts.forEach(post => {
      initialLikes[post.id] = post.likes;
      initialComments[post.id] = post.comments;
      initialShares[post.id] = post.shares;
    });
    setPostLikes(initialLikes);
    setPostComments(initialComments);
    setPostShares(initialShares);
  }, []);

  const handleLike = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const isLiked = likedPosts.has(postId);
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (isLiked) {
        newSet.delete(postId);
        setPostLikes(prevLikes => ({ ...prevLikes, [postId]: (prevLikes[postId] || feedPosts.find(p => p.id === postId)?.likes || 0) - 1 }));
      } else {
        newSet.add(postId);
        setPostLikes(prevLikes => ({ ...prevLikes, [postId]: (prevLikes[postId] || feedPosts.find(p => p.id === postId)?.likes || 0) + 1 }));
      }
      return newSet;
    });
  };

  const handleComment = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setShowComments(prev => prev === postId ? null : postId);
    if (showComments !== postId) {
      setSelectedPost(feedPosts.find(p => p.id === postId) || null);
    }
  };

  const handleShare = (post: FeedPost, e: React.MouseEvent) => {
    e.stopPropagation();
    const shareUrl = `https://bitnexus.io/feed/post/${post.id}`;
    const shareText = `${post.content}\n\n- ${post.author} on BitNexus`;
    
    if (navigator.share) {
      navigator.share({
        title: `Post by ${post.author}`,
        text: shareText,
        url: shareUrl,
      }).then(() => {
        setPostShares(prevShares => ({ ...prevShares, [post.id]: (prevShares[post.id] || post.shares) + 1 }));
      }).catch(() => {
        // Fallback to clipboard
        copyToClipboard(shareUrl, post.id);
      });
    } else {
      copyToClipboard(shareUrl, post.id);
    }
  };

  const copyToClipboard = (text: string, postId: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Link copied to clipboard!');
      setPostShares(prevShares => ({ ...prevShares, [postId]: (prevShares[postId] || feedPosts.find(p => p.id === postId)?.shares || 0) + 1 }));
    });
  };

  const handleSubmitComment = (postId: string, e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const comment = commentInput[postId];
    if (comment && comment.trim()) {
      setPostComments(prevComments => ({ ...prevComments, [postId]: (prevComments[postId] || feedPosts.find(p => p.id === postId)?.comments || 0) + 1 }));
      setCommentInput(prev => ({ ...prev, [postId]: '' }));
      alert('Comment posted!');
    }
  };

  const getTierColor = (tier: string) => {
    switch(tier) {
      case 'Platinum': return 'bg-purple-500/20 text-purple-400 border-purple-500/20';
      case 'Gold': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/20';
      case 'Silver': return 'bg-gray-500/20 text-gray-400 border-gray-500/20';
      case 'Admin': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/20';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/20';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-display">Feed</h2>
          <p className="text-gray-500 text-sm mt-1">Stay updated with community activities and achievements</p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
              activeFilter === filter 
              ? 'bg-purple-600 border-purple-500 shadow-lg shadow-purple-500/20' 
              : 'bg-white/5 border-white/5 text-gray-400 hover:text-gray-200 hover:border-white/10'
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Feed Posts */}
      <div className="space-y-4">
        {filteredPosts.map(post => (
          <div
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="glass-card p-6 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-sm">
                {post.authorAvatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold">{post.author}</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-bold border ${getTierColor(post.authorTier)}`}>
                    {post.authorTier}
                  </span>
                  <span className="text-xs text-gray-500">• {post.timestamp}</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{post.content}</p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs text-cyan-400 font-medium">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {post.image && (
              <div className="mb-4 rounded-2xl overflow-hidden">
                <img src={post.image} alt={post.content.substring(0, 50)} className="w-full h-auto" />
              </div>
            )}

            <div className="flex items-center gap-6 pt-4 border-t border-white/5">
              <button 
                onClick={(e) => handleLike(post.id, e)}
                className={`flex items-center gap-2 transition-colors ${
                  likedPosts.has(post.id) 
                    ? 'text-red-400' 
                    : 'text-gray-400 hover:text-red-400'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill={likedPosts.has(post.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                <span className="text-sm font-medium">{postLikes[post.id] !== undefined ? postLikes[post.id] : post.likes}</span>
              </button>
              <button 
                onClick={(e) => handleComment(post.id, e)}
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <span className="text-sm font-medium">{postComments[post.id] !== undefined ? postComments[post.id] : post.comments}</span>
              </button>
              <button 
                onClick={(e) => handleShare(post, e)}
                className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                  <polyline points="16 6 12 2 8 6"/>
                  <line x1="12" y1="2" x2="12" y2="15"/>
                </svg>
                <span className="text-sm font-medium">{postShares[post.id] !== undefined ? postShares[post.id] : post.shares}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Post Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Post Details</h3>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold">
                  {selectedPost.authorAvatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <button
                      onClick={() => {
                        if (setActiveRoute && selectedPost.author.startsWith('Agent Nexus-')) {
                          navigateToUserProfile(selectedPost.author, setActiveRoute);
                        }
                      }}
                      className="font-bold text-lg hover:text-purple-400 transition-colors cursor-pointer text-left"
                    >
                      {selectedPost.author}
                    </button>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getTierColor(selectedPost.authorTier)}`}>
                      {selectedPost.authorTier}
                    </span>
                    <span className="text-sm text-gray-500">• {selectedPost.timestamp}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{selectedPost.content}</p>
                  {selectedPost.tags && selectedPost.tags.length > 0 && (
                    <div className="flex gap-2 mt-3 flex-wrap">
                      {selectedPost.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded-lg text-xs font-medium border border-cyan-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {selectedPost.image && (
                <div className="rounded-2xl overflow-hidden">
                  <img src={selectedPost.image} alt={selectedPost.content.substring(0, 50)} className="w-full h-auto" />
                </div>
              )}

              <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(selectedPost.id, e);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                    likedPosts.has(selectedPost.id)
                      ? 'bg-red-500/20 text-red-400 border-red-500/30 hover:bg-red-500/30'
                      : 'bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={likedPosts.has(selectedPost.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  <span className="font-bold">{postLikes[selectedPost.id] !== undefined ? postLikes[selectedPost.id] : selectedPost.likes}</span>
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowComments(prev => prev === selectedPost.id ? null : selectedPost.id);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20 hover:bg-cyan-500/20 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  <span className="font-bold">{postComments[selectedPost.id] !== undefined ? postComments[selectedPost.id] : selectedPost.comments}</span>
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare(selectedPost, e);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-xl border border-green-500/20 hover:bg-green-500/20 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                    <polyline points="16 6 12 2 8 6"/>
                    <line x1="12" y1="2" x2="12" y2="15"/>
                  </svg>
                  <span className="font-bold">{postShares[selectedPost.id] !== undefined ? postShares[selectedPost.id] : selectedPost.shares}</span>
                </button>
              </div>

              {/* Comments Section */}
              {showComments === selectedPost.id && (
                <div className="pt-4 border-t border-white/5 space-y-4">
                  <h4 className="font-bold text-lg">Comments</h4>
                  <form onSubmit={(e) => handleSubmitComment(selectedPost.id, e)} className="space-y-3">
                    <textarea
                      value={commentInput[selectedPost.id] || ''}
                      onChange={(e) => setCommentInput(prev => ({ ...prev, [selectedPost.id]: e.target.value }))}
                      placeholder="Write a comment..."
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 resize-none"
                      rows={3}
                      onClick={(e) => e.stopPropagation()}
                    />
                    <button
                      type="submit"
                      className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-xl font-bold text-sm transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Post Comment
                    </button>
                  </form>
                  <div className="space-y-3 mt-4">
                    <div className="p-3 bg-white/5 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-xs">
                          U1
                        </div>
                        <span className="font-bold text-sm">Agent Nexus-42</span>
                        <span className="text-xs text-gray-500">• 2 hours ago</span>
                      </div>
                      <p className="text-sm text-gray-300">Great update! Can't wait to try the new features.</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-xs">
                          U2
                        </div>
                        <span className="font-bold text-sm">Agent Nexus-15</span>
                        <span className="text-xs text-gray-500">• 5 hours ago</span>
                      </div>
                      <p className="text-sm text-gray-300">This is exactly what I needed! Thanks BitNexus Team 🚀</p>
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={() => {
                  setSelectedPost(null);
                  setShowComments(null);
                }}
                className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;


