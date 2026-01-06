import React, { useState } from 'react';
import { Product } from '../types';
import { getAIAdvice } from '../services/geminiService';
import { ICONS } from '../constants';

const mockProducts: Product[] = [
  { id: '1', name: 'NXC Trading Masterclass', category: 'Academy', price: 150, commission: 25, image: 'https://picsum.photos/seed/nxc1/400/300', status: 'Active' },
  { id: '2', name: 'Crypto Health Formula', category: 'Health', price: 85, commission: 40, image: 'https://picsum.photos/seed/nxc2/400/300', status: 'Active' },
  { id: '3', name: 'MEV Bot Pro License', category: 'Automation', price: 500, commission: 10, image: 'https://picsum.photos/seed/nxc3/400/300', status: 'Active' },
  { id: '4', name: 'Elite Performance Apparel', category: 'Shop', price: 45, commission: 15, image: 'https://picsum.photos/seed/nxc4/400/300', status: 'Active' },
  { id: '5', name: 'Nexus Private Node', category: 'Tech', price: 1200, commission: 5, image: 'https://picsum.photos/seed/nxc5/400/300', status: 'Active' },
  { id: '6', name: 'Blockchain Marketing Kit', category: 'Marketing', price: 95, commission: 30, image: 'https://picsum.photos/seed/nxc6/400/300', status: 'Active' },
];

type SocialPlatform = 'twitter' | 'facebook' | 'instagram' | 'linkedin' | 'tiktok';

interface GeneratedContent {
  text: string;
  hashtags: string;
  platform: SocialPlatform;
}

const ContentGenerator: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [contentType, setContentType] = useState<'post' | 'story' | 'video'>('post');
  const [tone, setTone] = useState<'professional' | 'casual' | 'enthusiastic' | 'educational'>('professional');
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<SocialPlatform>('twitter');
  const [customPrompt, setCustomPrompt] = useState('');

  const platforms: { id: SocialPlatform; name: string; icon: string; color: string }[] = [
    { id: 'twitter', name: 'Twitter/X', icon: '🐦', color: 'bg-blue-500' },
    { id: 'facebook', name: 'Facebook', icon: '📘', color: 'bg-blue-600' },
    { id: 'instagram', name: 'Instagram', icon: '📷', color: 'bg-gradient-to-r from-purple-600 to-pink-600' },
    { id: 'linkedin', name: 'LinkedIn', icon: '💼', color: 'bg-blue-700' },
    { id: 'tiktok', name: 'TikTok', icon: '🎵', color: 'bg-black' },
  ];

  const handleGenerate = async () => {
    if (!selectedProduct) {
      alert('Please select a product first');
      return;
    }

    setIsGenerating(true);
    try {
      const prompt = customPrompt || `Create engaging social media content for ${selectedProduct.name}. 
        Product details: ${selectedProduct.category} category, $${selectedProduct.price} price, ${selectedProduct.commission}% commission.
        Content type: ${contentType}, Tone: ${tone}.
        Create content optimized for multiple social media platforms.`;

      const aiResponse = await getAIAdvice(prompt);

      // Parse AI response and create platform-specific content
      const contents: GeneratedContent[] = platforms.map(platform => ({
        text: generatePlatformContent(selectedProduct, platform.id, contentType, tone, aiResponse),
        hashtags: generateHashtags(selectedProduct, platform.id),
        platform: platform.id,
      }));

      setGeneratedContent(contents);
    } catch (error) {
      console.error('Error generating content:', error);
      alert('Failed to generate content. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const generatePlatformContent = (
    product: Product,
    platform: SocialPlatform,
    type: string,
    tone: string,
    aiSuggestion: string
  ): string => {
    const baseContent = `🚀 ${product.name} - ${product.category}\n\n`;
    
    const toneText = {
      professional: 'Discover how this innovative solution can transform your workflow.',
      casual: 'Check this out! This is pretty cool and might be exactly what you need.',
      enthusiastic: 'OMG! You HAVE to see this! This is absolutely game-changing! 🔥',
      educational: 'Learn how this tool can help you achieve better results with proven strategies.',
    };

    const platformSpecific = {
      twitter: `${baseContent}${toneText[tone as keyof typeof toneText]}\n\n💰 Earn ${product.commission}% commission\n🔗 Get your link: nexus.io/ref/7781/${product.id}`,
      facebook: `${baseContent}${toneText[tone as keyof typeof toneText]}\n\n💵 Price: $${product.price}\n💼 Commission: ${product.commission}%\n\nLearn more and get your affiliate link!`,
      instagram: `${baseContent}${toneText[tone as keyof typeof toneText]}\n\n✨ Perfect for ${product.category.toLowerCase()} enthusiasts\n💰 ${product.commission}% commission available\n\nLink in bio! 👆`,
      linkedin: `${baseContent}${toneText[tone as keyof typeof toneText]}\n\nThis ${product.category.toLowerCase()} solution offers:\n• Professional-grade features\n• ${product.commission}% affiliate commission\n• Proven results\n\nInterested? Get your affiliate link.`,
      tiktok: `${baseContent}${toneText[tone as keyof typeof toneText]}\n\n💰 ${product.commission}% commission\n🔗 Link in bio!\n\n#affiliatemarketing #passiveincome`,
    };

    return platformSpecific[platform] || baseContent;
  };

  const generateHashtags = (product: Product, platform: SocialPlatform): string => {
    const baseTags = `#BitNexus #AffiliateMarketing #PassiveIncome`;
    const categoryTag = `#${product.category.replace(/\s+/g, '')}`;
    const platformTags = {
      twitter: `${baseTags} ${categoryTag} #Crypto #Marketing`,
      facebook: `${baseTags} ${categoryTag} #Business`,
      instagram: `${baseTags} ${categoryTag} #Entrepreneur #SideHustle`,
      linkedin: `${baseTags} ${categoryTag} #BusinessGrowth #Networking`,
      tiktok: `${baseTags} ${categoryTag} #Money #Hustle`,
    };
    return platformTags[platform] || baseTags;
  };

  const handleCopy = (content: GeneratedContent) => {
    const fullContent = `${content.text}\n\n${content.hashtags}`;
    navigator.clipboard.writeText(fullContent);
    alert('Content copied to clipboard!');
  };

  const handleShare = (platform: SocialPlatform, content: GeneratedContent) => {
    const fullContent = `${content.text}\n\n${content.hashtags}`;
    const encodedText = encodeURIComponent(fullContent);
    const affiliateLink = `https://nexus.io/ref/7781/${selectedProduct?.id}`;
    
    const shareUrls: Record<SocialPlatform, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodeURIComponent(affiliateLink)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(affiliateLink)}&quote=${encodedText}`,
      instagram: `https://www.instagram.com/`, // Instagram doesn't support direct sharing
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(affiliateLink)}`,
      tiktok: `https://www.tiktok.com/upload`, // TikTok requires app
    };

    if (platform === 'instagram' || platform === 'tiktok') {
      navigator.clipboard.writeText(fullContent);
      alert(`Content copied! Open ${platform === 'instagram' ? 'Instagram' : 'TikTok'} app and paste.`);
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-display">Content Generator</h2>
          <p className="text-gray-500 text-sm">Generate and share product content across social media platforms</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Panel - Product Selection & Settings */}
        <div className="lg:col-span-1 space-y-6">
          {/* Product Selection */}
          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <h3 className="text-xl font-bold mb-4">Select Product</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {mockProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={`w-full p-4 rounded-xl text-left transition-all border ${
                    selectedProduct?.id === product.id
                      ? 'bg-purple-600/20 border-purple-500/30'
                      : 'bg-white/5 border-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm truncate">{product.name}</p>
                      <p className="text-gray-500 text-xs">{product.category} • {product.commission}%</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Settings */}
          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <h3 className="text-xl font-bold mb-4">Content Settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold text-gray-400 mb-2 block">Content Type</label>
                <div className="grid grid-cols-3 gap-2">
                  {['post', 'story', 'video'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setContentType(type as any)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                        contentType === type
                          ? 'bg-purple-600 text-white'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-400 mb-2 block">Tone</label>
                <div className="grid grid-cols-2 gap-2">
                  {['professional', 'casual', 'enthusiastic', 'educational'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTone(t as any)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                        tone === t
                          ? 'bg-cyan-600 text-white'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-400 mb-2 block">Custom Prompt (Optional)</label>
                <textarea
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  placeholder="Add specific instructions for content generation..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-sm resize-none"
                  rows={3}
                />
              </div>

              <button
                onClick={handleGenerate}
                disabled={!selectedProduct || isGenerating}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? 'Generating...' : 'Generate Content'}
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel - Generated Content */}
        <div className="lg:col-span-2 space-y-6">
          {generatedContent.length === 0 ? (
            <div className="glass-card p-12 rounded-3xl border border-white/5 text-center">
              <div className="w-20 h-20 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-4">
                <ICONS.Marketplace />
              </div>
              <h3 className="text-xl font-bold mb-2">No Content Generated Yet</h3>
              <p className="text-gray-500 text-sm">Select a product and click "Generate Content" to create social media posts</p>
            </div>
          ) : (
            <>
              {/* Platform Tabs */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {platforms.map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => setSelectedPlatform(platform.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                      selectedPlatform === platform.id
                        ? `${platform.color} text-white`
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <span className="mr-2">{platform.icon}</span>
                    {platform.name}
                  </button>
                ))}
              </div>

              {/* Content Preview */}
              {generatedContent
                .filter(c => c.platform === selectedPlatform)
                .map((content, index) => (
                  <div key={index} className="glass-card p-6 rounded-3xl border border-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl ${platforms.find(p => p.id === selectedPlatform)?.color} flex items-center justify-center text-xl`}>
                          {platforms.find(p => p.id === selectedPlatform)?.icon}
                        </div>
                        <div>
                          <h3 className="font-bold">{platforms.find(p => p.id === selectedPlatform)?.name} Content</h3>
                          <p className="text-gray-500 text-xs">{contentType.charAt(0).toUpperCase() + contentType.slice(1)} • {tone}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleCopy(content)}
                          className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold transition-all"
                        >
                          Copy
                        </button>
                        <button
                          onClick={() => handleShare(selectedPlatform, content)}
                          className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl text-xs font-bold transition-all"
                        >
                          Share
                        </button>
                      </div>
                    </div>

                    {/* Content Preview */}
                    <div className="bg-white/5 rounded-2xl p-4 mb-4">
                      <p className="text-sm whitespace-pre-wrap">{content.text}</p>
                      <div className="mt-3 pt-3 border-t border-white/5">
                        <p className="text-xs text-cyan-400">{content.hashtags}</p>
                      </div>
                    </div>

                    {/* Character Count */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Character count: {content.text.length + content.hashtags.length}</span>
                      {selectedProduct && (
                        <span>Affiliate link: nexus.io/ref/7781/{selectedProduct.id}</span>
                      )}
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>

      {/* Recent Generations */}
      {generatedContent.length > 0 && (
        <div className="glass-card p-6 rounded-3xl border border-white/5">
          <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-all text-center">
              <div className="text-2xl mb-2">📋</div>
              <p className="text-xs font-bold">Save Template</p>
            </button>
            <button className="p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-all text-center">
              <div className="text-2xl mb-2">📅</div>
              <p className="text-xs font-bold">Schedule Post</p>
            </button>
            <button className="p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-all text-center">
              <div className="text-2xl mb-2">📊</div>
              <p className="text-xs font-bold">View Analytics</p>
            </button>
            <button className="p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-all text-center">
              <div className="text-2xl mb-2">🔄</div>
              <p className="text-xs font-bold">Regenerate</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentGenerator;

