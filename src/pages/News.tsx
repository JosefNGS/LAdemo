import React, { useState } from 'react';
import { ICONS } from '../constants';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;
  featured?: boolean;
}

const News: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Platform Updates', 'Product Launches', 'Community', 'Partnerships', 'Technical'];

  const articles: NewsArticle[] = [
    {
      id: '1',
      title: 'BitNexus Genesis Launch: 500 Early Adopter Spots Available',
      excerpt: 'The revolutionary decentralized affiliate platform is now live. Secure your Founder-tier benefits before they\'re gone.',
      content: 'BitNexus has officially launched its Genesis phase, marking a historic moment in decentralized affiliate marketing. The platform combines AI-powered tools, blockchain technology, and a thriving community to create the world\'s first truly decentralized affiliate revenue ecosystem.\n\nEarly adopters will receive:\n- Founder-tier commission rates (up to 50% higher)\n- Early Node deployment rights\n- Exclusive access to beta features\n- Lifetime benefits and priority support\n\nOnly 142 spots remain out of the initial 500. Don\'t miss your chance to be part of the revolution.',
      author: 'BitNexus Team',
      date: 'January 15, 2026',
      category: 'Platform Updates',
      featured: true,
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop'
    },
    {
      id: '2',
      title: 'MEV Bot Pro License Now Available in Marketplace',
      excerpt: 'The highly anticipated MEV Bot Pro License is now available for affiliates. Earn passive income through automated trading.',
      content: 'We\'re excited to announce that the MEV Bot Pro License is now available in the BitNexus Marketplace. This powerful tool allows affiliates to earn passive income through automated MEV (Maximal Extractable Value) trading.\n\nKey Features:\n- 10-15% APY returns\n- Fully automated trading\n- Low risk, high reward\n- Compound interest options\n- Real-time performance tracking\n\nAffiliates can now promote this product and earn commissions on every sale. The MEV Bot integrates seamlessly with the BitNexus ecosystem, providing a complete passive income solution.',
      author: 'Product Team',
      date: 'January 12, 2026',
      category: 'Product Launches',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=400&fit=crop'
    },
    {
      id: '3',
      title: 'Community Milestone: 12,400+ Active Users',
      excerpt: 'BitNexus community reaches a major milestone with over 12,400 active affiliates building their revenue empires.',
      content: 'We\'re thrilled to announce that BitNexus has reached a major milestone: 12,400+ active users are now building their decentralized revenue empires on the platform.\n\nThis achievement represents:\n- 12,400+ active affiliates\n- $2.4M+ in total earnings generated\n- 500+ products in the marketplace\n- 1,200+ successful network builders\n- 89% user satisfaction rate\n\nThe community continues to grow at an unprecedented rate, with new members joining daily. Our network effect is creating exponential value for all participants.',
      author: 'Community Team',
      date: 'January 10, 2026',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop'
    },
    {
      id: '4',
      title: 'New AI Content Generator Features Released',
      excerpt: 'Enhanced AI capabilities now support video content, multi-platform posting, and advanced customization options.',
      content: 'The AI Content Generator has received a major update with powerful new features designed to help affiliates create engaging content faster.\n\nNew Features:\n- Video content generation with captions\n- Multi-platform posting (Instagram, TikTok, YouTube)\n- Advanced tone customization\n- Brand voice training\n- A/B testing for content variations\n- Performance analytics integration\n\nThese updates reduce content creation time by 70% while improving engagement rates. Affiliates can now generate professional-quality content in minutes instead of hours.',
      author: 'AI Team',
      date: 'January 8, 2026',
      category: 'Platform Updates',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop'
    },
    {
      id: '5',
      title: 'Strategic Partnership with Major DeFi Protocol',
      excerpt: 'BitNexus announces partnership with leading DeFi protocol to expand staking options and increase earning potential.',
      content: 'We\'re excited to announce a strategic partnership with one of the leading DeFi protocols in the space. This partnership will bring:\n\nBenefits:\n- Additional staking options for NXC credits\n- Higher APY rates (up to 20%)\n- Cross-platform integration\n- Exclusive DeFi products in marketplace\n- Joint educational initiatives\n\nThis partnership strengthens BitNexus\'s position as the premier platform for decentralized affiliate marketing and passive income generation.',
      author: 'Partnerships Team',
      date: 'January 5, 2026',
      category: 'Partnerships',
      image: 'https://images.unsplash.com/photo-1639322537504-6427a1b0b3e3?w=800&h=400&fit=crop'
    },
    {
      id: '6',
      title: 'Security Audit Completed: CertiK Verification',
      excerpt: 'BitNexus smart contracts have passed comprehensive security audits from CertiK, ensuring platform safety and reliability.',
      content: 'We\'re proud to announce that BitNexus has completed comprehensive security audits from CertiK, one of the industry\'s leading blockchain security firms.\n\nAudit Results:\n- 99.98% security score\n- Zero critical vulnerabilities found\n- All smart contracts verified\n- Continuous monitoring enabled\n- Full transparency report available\n\nThe audit covered all smart contracts, including commission distribution, escrow systems, and token mechanics. Users can access the full audit report in the Due Diligence section of the Dashboard.',
      author: 'Security Team',
      date: 'January 3, 2026',
      category: 'Technical',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop'
    },
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticle = articles.find(article => article.featured);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-2 text-gradient-cyan-purple">
            BitNexus News
          </h1>
          <p className="text-gray-500">Stay updated with the latest platform updates, launches, and community news</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              selectedCategory === category
                ? 'bg-purple-600 text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === 'all' && (
        <div 
          className="glass-card p-6 md:p-8 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 cursor-pointer hover:border-purple-500/50 transition-all"
          onClick={() => setSelectedArticle(featuredArticle)}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-bold uppercase">Featured</span>
            <span className="text-xs text-gray-400">{featuredArticle.category}</span>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs text-gray-400">{featuredArticle.date}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredArticle.title}</h2>
          <p className="text-gray-300 mb-4">{featuredArticle.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center">
                <ICONS.NexusAI />
              </div>
              <span className="text-sm text-gray-400">{featuredArticle.author}</span>
            </div>
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-sm transition-all">
              Read More →
            </button>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles
          .filter(article => !article.featured || selectedCategory !== 'all')
          .map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 cursor-pointer transition-all group"
            >
              {article.image && (
                <div className="w-full h-40 rounded-xl mb-4 overflow-hidden bg-gradient-to-br from-purple-600/20 to-cyan-600/20">
                  <div className="w-full h-full flex items-center justify-center text-4xl opacity-20">
                    📰
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-white/5 text-gray-400 rounded text-xs font-bold">
                  {article.category}
                </span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-500">{article.date}</span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4 line-clamp-3">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center">
                    <ICONS.NexusAI />
                  </div>
                  <span className="text-xs text-gray-500">{article.author}</span>
                </div>
                <span className="text-purple-400 text-xs font-bold group-hover:translate-x-1 transition-transform">
                  Read →
                </span>
              </div>
            </div>
          ))}
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
                  <ICONS.News />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs font-bold">
                      {selectedArticle.category}
                    </span>
                    {selectedArticle.featured && (
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-bold">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">{selectedArticle.date}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">{selectedArticle.title}</h2>
            
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
              <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
                <ICONS.NexusAI />
              </div>
              <div>
                <p className="font-bold text-sm">{selectedArticle.author}</p>
                <p className="text-xs text-gray-500">{selectedArticle.date}</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                {selectedArticle.content}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex gap-4">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
              <button className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all">
                Share Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;


