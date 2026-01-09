import React, { useState } from 'react';
import { Product, AppRoute } from '../types';
import { getAIAdvice } from '../services/geminiService';
import { ICONS } from '../constants';
import { getMarketingAssetImage, getDefaultMarketingAssets, downloadMarketingAsset, downloadAllMarketingAssets, MarketingAssetType } from '../utils/marketingAssets';

interface ContentGeneratorProps {
  setActiveRoute?: (route: AppRoute) => void;
}

interface ProductWithAssets extends Product {
  marketingAssets?: string[];
}

const mockProducts: ProductWithAssets[] = [
  { id: '1', name: 'NXC Trading Masterclass', category: 'Academy', price: 150, commission: 25, image: 'https://picsum.photos/seed/nxc1/400/300', status: 'Active', marketingAssets: ['Banner 1', 'Banner 2', 'Social Post', 'Email Template'] },
  { id: '2', name: 'Crypto Health Formula', category: 'Health', price: 85, commission: 40, image: 'https://picsum.photos/seed/nxc2/400/300', status: 'Active', marketingAssets: ['Banner 1', 'Banner 2', 'Social Post', 'Email Template'] },
  { id: '3', name: 'MEV Bot Pro License', category: 'Automation', price: 500, commission: 10, image: 'https://picsum.photos/seed/nxc3/400/300', status: 'Active', marketingAssets: ['Banner 1', 'Banner 2', 'Social Post', 'Email Template'] },
  { id: '7', name: 'XAB Bot Pro License (XRP)', category: 'Automation', price: 550, commission: 10, image: 'https://picsum.photos/seed/nxc7/400/300', status: 'Active', marketingAssets: ['Banner 1', 'Banner 2', 'Social Post', 'Email Template'] },
  { id: '4', name: 'Elite Performance Apparel', category: 'Shop', price: 45, commission: 15, image: 'https://picsum.photos/seed/nxc4/400/300', status: 'Active', marketingAssets: ['Banner 1', 'Banner 2', 'Social Post', 'Email Template'] },
  { id: '5', name: 'Nexus Private Node', category: 'Tech', price: 1200, commission: 5, image: 'https://picsum.photos/seed/nxc5/400/300', status: 'Active', marketingAssets: ['Banner 1', 'Banner 2', 'Social Post', 'Email Template'] },
  { id: '6', name: 'Blockchain Marketing Kit', category: 'Marketing', price: 95, commission: 30, image: 'https://picsum.photos/seed/nxc6/400/300', status: 'Active', marketingAssets: ['Banner 1', 'Banner 2', 'Social Post', 'Email Template'] },
];

type SocialPlatform = 'twitter' | 'facebook' | 'instagram' | 'linkedin' | 'tiktok';

interface GeneratedContent {
  text: string;
  hashtags: string;
  platform: SocialPlatform;
}

interface UploadedContent {
  id: string;
  type: 'image' | 'video' | 'text';
  file?: File;
  url?: string;
  text?: string;
  name: string;
  uploadedAt: string;
  platform?: SocialPlatform;
}

// Best practices file paths
const BEST_PRACTICES_FILES: Record<string, { path: string; name: string; icon: string; color: string }> = {
  'x-twitter': {
    path: 'docs/UI & Features/Content Generation Best Practices/X_TWITTER_TEXT_BEST_PRACTICES.md',
    name: 'X (Twitter) Text',
    icon: '🐦',
    color: 'green'
  },
  'linkedin': {
    path: 'docs/UI & Features/Content Generation Best Practices/LINKEDIN_TEXT_BEST_PRACTICES.md',
    name: 'LinkedIn Text',
    icon: '💼',
    color: 'green'
  },
  'facebook-text': {
    path: 'docs/UI & Features/Content Generation Best Practices/FACEBOOK_TEXT_BEST_PRACTICES.md',
    name: 'Facebook Text',
    icon: '📘',
    color: 'green'
  },
  'tiktok': {
    path: 'docs/UI & Features/Content Generation Best Practices/TIKTOK_SHORTS_BEST_PRACTICES.md',
    name: 'TikTok Shorts',
    icon: '🎵',
    color: 'purple'
  },
  'instagram': {
    path: 'docs/UI & Features/Content Generation Best Practices/INSTAGRAM_SHORTS_BEST_PRACTICES.md',
    name: 'Instagram Reels',
    icon: '📷',
    color: 'purple'
  },
  'facebook-shorts': {
    path: 'docs/UI & Features/Content Generation Best Practices/FACEBOOK_SHORTS_BEST_PRACTICES.md',
    name: 'Facebook Shorts',
    icon: '📘',
    color: 'purple'
  },
  'youtube-short': {
    path: 'docs/UI & Features/Content Generation Best Practices/YOUTUBE_SHORT_FORM_BEST_PRACTICES.md',
    name: 'YouTube Short-Form (10-30 min)',
    icon: '▶️',
    color: 'cyan'
  },
  'youtube-long': {
    path: 'docs/UI & Features/Content Generation Best Practices/YOUTUBE_LONG_FORM_BEST_PRACTICES.md',
    name: 'YouTube Long-Form (45+ min)',
    icon: '🎓',
    color: 'cyan'
  }
};

// Load best practices markdown file
const loadBestPractice = async (filePath: string): Promise<string> => {
  try {
    const response = await fetch(`/${filePath}`);
    if (!response.ok) {
      throw new Error(`Failed to load: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading best practice:', error);
    throw error;
  }
};

// Simple markdown to HTML converter (basic)
const formatMarkdown = (markdown: string): string => {
  let html = markdown
    // Code blocks first (before other processing)
    .replace(/```[\s\S]*?```/g, (match) => {
      const code = match.replace(/```/g, '').trim();
      return `<pre class="bg-white/5 p-4 rounded-lg my-4 overflow-x-auto border border-white/10"><code class="text-sm text-gray-300 font-mono">${code}</code></pre>`;
    })
    // Headers
    .replace(/^#### (.*$)/gim, '<h4 class="text-base font-bold mt-4 mb-2 text-white">$1</h4>')
    .replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold mt-6 mb-3 text-white">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mt-8 mb-4 text-white">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-8 mb-4 text-white">$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em class="italic text-gray-200">$1</em>')
    // Inline code (after code blocks)
    .replace(/`([^`]+)`/g, '<code class="bg-white/10 px-1.5 py-0.5 rounded text-sm text-purple-300 font-mono">$1</code>')
    // Horizontal rules
    .replace(/^---$/gim, '<hr class="my-6 border-white/10">')
    // Unordered lists
    .replace(/^- (.*$)/gim, '<li class="ml-6 mb-2 text-gray-300 list-disc">$1</li>')
    // Ordered lists
    .replace(/^\d+\. (.*$)/gim, '<li class="ml-6 mb-2 text-gray-300 list-decimal">$1</li>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-purple-400 hover:text-purple-300 underline">$1</a>')
    // Line breaks - preserve paragraphs
    .split('\n\n')
    .map(para => {
      if (para.trim().startsWith('<')) {
        return para; // Already formatted
      }
      if (para.trim() === '') {
        return '';
      }
      return `<p class="mb-4 text-gray-300 leading-relaxed">${para.trim()}</p>`;
    })
    .join('');
  
  return html;
};

const ContentGenerator: React.FC<ContentGeneratorProps> = ({ setActiveRoute }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductWithAssets | null>(null);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [contentType, setContentType] = useState<'post' | 'story' | 'video'>('post');
  const [tone, setTone] = useState<'professional' | 'casual' | 'enthusiastic' | 'educational'>('professional');
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<SocialPlatform>('twitter');
  const [customPrompt, setCustomPrompt] = useState('');
  const [creditsBalance, setCreditsBalance] = useState(150);
  const [showInsufficientCredits, setShowInsufficientCredits] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadedContent, setUploadedContent] = useState<UploadedContent[]>([]);
  const [uploadType, setUploadType] = useState<'image' | 'video' | 'text'>('image');
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadText, setUploadText] = useState('');
  const [uploadName, setUploadName] = useState('');
  const [useUploadedContent, setUseUploadedContent] = useState(false);
  const [selectedUploadedContent, setSelectedUploadedContent] = useState<UploadedContent | null>(null);
  const [showSaveTemplateModal, setShowSaveTemplateModal] = useState(false);
  const [showSchedulePostModal, setShowSchedulePostModal] = useState(false);
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);
  const [showHowToModal, setShowHowToModal] = useState(false);
  const [selectedBestPractice, setSelectedBestPractice] = useState<string | null>(null);
  const [bestPracticeContent, setBestPracticeContent] = useState<string>('');
  const [loadingBestPractice, setLoadingBestPractice] = useState(false);
  const [templateName, setTemplateName] = useState('');
  const [scheduledDateTime, setScheduledDateTime] = useState('');
  const [selectedPlatformForSchedule, setSelectedPlatformForSchedule] = useState<SocialPlatform>('twitter');
  const [savedTemplates, setSavedTemplates] = useState<Array<{id: string; name: string; content: GeneratedContent[]; product: ProductWithAssets; createdAt: string}>>([]);
  
  const GENERATION_COST = 10;

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

    if (creditsBalance < GENERATION_COST) {
      setShowInsufficientCredits(true);
      setTimeout(() => setShowInsufficientCredits(false), 3000);
      return;
    }

    setIsGenerating(true);
    try {
      const prompt = customPrompt || `Create engaging social media content for ${selectedProduct.name}. 
        Product details: ${selectedProduct.category} category, $${selectedProduct.price} price, ${selectedProduct.commission}% commission.
        Content type: ${contentType}, Tone: ${tone}.
        Create content optimized for multiple social media platforms.`;

      const aiResponse = await getAIAdvice(prompt);

      const contents: GeneratedContent[] = platforms.map(platform => ({
        text: generatePlatformContent(selectedProduct, platform.id, contentType, tone, aiResponse),
        hashtags: generateHashtags(selectedProduct, platform.id),
        platform: platform.id,
      }));

      setCreditsBalance(prev => prev - GENERATION_COST);
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
      instagram: `https://www.instagram.com/`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(affiliateLink)}`,
      tiktok: `https://www.tiktok.com/upload`,
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
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowHowToModal(true)}
            className="px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 rounded-xl font-bold text-sm transition-all"
          >
            <span className="mr-2">📚</span>
            How to Generate Content
          </button>
          <button
            onClick={() => setShowUploadModal(true)}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-sm transition-all"
          >
            <span className="mr-2">📤</span>
            Upload Content
          </button>
          <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
            <p className="text-xs text-gray-500 mb-1">AI Credits Balance</p>
            <p className="text-lg font-bold text-cyan-400">{creditsBalance} NXC</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <h3 className="text-xl font-bold mb-4">Select Product</h3>
            <div className="grid grid-cols-2 gap-3">
              {mockProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={`p-3 rounded-xl text-left transition-all border ${
                    selectedProduct?.id === product.id
                      ? 'bg-purple-600/20 border-purple-500/30'
                      : 'bg-white/5 border-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <img src={product.image} alt={product.name} className="w-full h-20 rounded-lg object-cover" />
                    <div className="min-w-0">
                      <p className="font-bold text-xs truncate mb-1">{product.name}</p>
                      <p className="text-gray-500 text-xs">{product.category} • {product.commission}%</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
            {selectedProduct && (
              <div className="mt-6">
                <h3 className="text-lg font-bold mb-4">Marketing Assets</h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {(selectedProduct.marketingAssets && selectedProduct.marketingAssets.length > 0 
                    ? selectedProduct.marketingAssets 
                    : getDefaultMarketingAssets()
                  ).map((asset, idx) => {
                    const assetType = asset as MarketingAssetType;
                    const imageUrl = getMarketingAssetImage(selectedProduct, assetType);
                    const imageKey = `${selectedProduct.id}-${assetType}`;
                    const hasFailed = failedImages.has(imageKey);
                    
                    return (
                      <div 
                        key={idx} 
                        className="group relative aspect-video bg-white/5 rounded-xl border border-white/5 overflow-hidden hover:border-purple-500/30 transition-all cursor-pointer"
                        onClick={() => downloadMarketingAsset(selectedProduct, assetType)}
                      >
                        {!hasFailed ? (
                          <img 
                            src={imageUrl} 
                            alt={asset}
                            className="w-full h-full object-cover"
                            onError={() => {
                              setFailedImages(prev => new Set(prev).add(imageKey));
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center">
                            <span className="text-xs text-gray-500 mb-2">{asset}</span>
                            <button className="text-xs text-cyan-400 font-bold">Download</button>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                          <div className="text-center">
                            <p className="text-xs font-bold text-white mb-1">{asset}</p>
                            <button className="text-xs text-cyan-400 hover:text-cyan-300 font-bold">
                              Download
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button 
                  onClick={() => downloadAllMarketingAssets(selectedProduct)}
                  className="w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-sm transition-all"
                >
                  Download All Assets
                </button>
              </div>
            )}
          </div>

          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <h3 className="text-xl font-bold mb-4">Content Settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold text-gray-400 mb-3 block">Content Type</label>
                <div className="space-y-2">
                  <button
                    onClick={() => setContentType('post')}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                      contentType === 'post'
                        ? 'bg-purple-600/20 border-purple-500 text-white'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${
                        contentType === 'post' ? 'bg-purple-600' : 'bg-white/10'
                      }`}>
                        📝
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-sm">Post</span>
                          {contentType === 'post' && (
                            <span className="px-2 py-0.5 bg-purple-600 text-xs font-bold rounded">Active</span>
                          )}
                        </div>
                        <p className="text-xs opacity-70">Permanent feed post with full text, images, and links</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => setContentType('story')}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                      contentType === 'story'
                        ? 'bg-gradient-to-r from-pink-600/20 to-purple-600/20 border-pink-500 text-white'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${
                        contentType === 'story' ? 'bg-gradient-to-r from-pink-600 to-purple-600' : 'bg-white/10'
                      }`}>
                        ✨
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-sm">Story</span>
                          {contentType === 'story' && (
                            <span className="px-2 py-0.5 bg-gradient-to-r from-pink-600 to-purple-600 text-xs font-bold rounded">Active</span>
                          )}
                        </div>
                        <p className="text-xs opacity-70">24-hour temporary content, vertical format, swipe-up links</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => setContentType('video')}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                      contentType === 'video'
                        ? 'bg-cyan-600/20 border-cyan-500 text-white'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${
                        contentType === 'video' ? 'bg-cyan-600' : 'bg-white/10'
                      }`}>
                        🎥
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-sm">Video</span>
                          {contentType === 'video' && (
                            <span className="px-2 py-0.5 bg-cyan-600 text-xs font-bold rounded">Active</span>
                          )}
                        </div>
                        <p className="text-xs opacity-70">Video content with captions, thumbnails, and descriptions</p>
                      </div>
                    </div>
                  </button>
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

              {uploadedContent.length > 0 && (
                <div>
                  <label className="text-sm font-bold text-gray-400 mb-2 block">Use Uploaded Content</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={useUploadedContent}
                        onChange={(e) => setUseUploadedContent(e.target.checked)}
                        className="w-4 h-4 rounded bg-white/5 border-white/10 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm text-gray-400">Use uploaded content with generated content</span>
                    </label>
                    {useUploadedContent && (
                      <select
                        value={selectedUploadedContent?.id || ''}
                        onChange={(e) => {
                          const content = uploadedContent.find(c => c.id === e.target.value);
                          setSelectedUploadedContent(content || null);
                        }}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-purple-500/50"
                      >
                        <option value="">Select uploaded content...</option>
                        {uploadedContent.map((content) => (
                          <option key={content.id} value={content.id}>
                            {content.name} ({content.type})
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                </div>
              )}

              <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Generation Cost</p>
                    <p className="text-sm font-bold text-cyan-400">{GENERATION_COST} NXC Credits</p>
                  </div>
                  {creditsBalance < GENERATION_COST && (
                    <span className="px-2 py-1 bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-bold rounded">
                      Insufficient Credits
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={!selectedProduct || isGenerating || creditsBalance < GENERATION_COST}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed relative"
              >
                {isGenerating ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </span>
                ) : creditsBalance < GENERATION_COST ? (
                  'Insufficient Credits'
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Generate Content
                    <span className="text-xs opacity-80">({GENERATION_COST} NXC)</span>
                  </span>
                )}
              </button>
              
              {creditsBalance < GENERATION_COST && (
                <p className="text-xs text-red-400 text-center mt-2">
                  You need {GENERATION_COST - creditsBalance} more credits.{' '}
                  {setActiveRoute && (
                    <button
                      onClick={() => setActiveRoute(AppRoute.SHOP)}
                      className="underline hover:text-red-300 font-bold"
                    >
                      Buy Credits
                    </button>
                  )}
                </p>
              )}
            </div>
          </div>
        </div>

        {generatedContent.length > 0 ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold font-display">Generated Content</h3>
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
            </div>

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

                  <div className="bg-white/5 rounded-2xl p-4 mb-4">
                    <p className="text-sm whitespace-pre-wrap">{content.text}</p>
                    <div className="mt-3 pt-3 border-t border-white/5">
                      <p className="text-xs text-cyan-400">{content.hashtags}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Character count: {content.text.length + content.hashtags.length}</span>
                    {selectedProduct && (
                      <span>Affiliate link: nexus.io/ref/7781/{selectedProduct.id}</span>
                    )}
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="glass-card p-12 rounded-3xl border border-white/5 text-center">
            <div className="w-20 h-20 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-4">
              <ICONS.Marketplace />
            </div>
            <h3 className="text-xl font-bold mb-2">No Content Generated Yet</h3>
            <p className="text-gray-500 text-sm">Select a product and click "Generate Content" to create social media posts</p>
          </div>
        )}
      </div>

      {showInsufficientCredits && (
        <div className="fixed top-4 right-4 z-50 glass-card p-4 rounded-xl border border-red-500/30 bg-red-500/10 animate-in slide-in-from-right">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm text-red-400">Insufficient Credits</p>
              <p className="text-xs text-gray-400">You need {GENERATION_COST} NXC credits to generate content. Current balance: {creditsBalance} NXC</p>
            </div>
          </div>
        </div>
      )}

      {generatedContent.length > 0 && (
        <div className="glass-card p-6 rounded-3xl border border-white/5 mt-6">
          <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button 
              onClick={() => setShowSaveTemplateModal(true)}
              className="p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-all text-center"
            >
              <div className="text-2xl mb-2">📋</div>
              <p className="text-xs font-bold">Save Template</p>
            </button>
            <button 
              onClick={() => setShowSchedulePostModal(true)}
              className="p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-all text-center"
            >
              <div className="text-2xl mb-2">📅</div>
              <p className="text-xs font-bold">Schedule Post</p>
            </button>
            <button 
              onClick={() => setShowAnalyticsModal(true)}
              className="p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-all text-center"
            >
              <div className="text-2xl mb-2">📊</div>
              <p className="text-xs font-bold">View Analytics</p>
            </button>
            <button 
              onClick={handleGenerate}
              disabled={isGenerating || creditsBalance < GENERATION_COST}
              className="p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-all text-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="text-2xl mb-2">🔄</div>
              <p className="text-xs font-bold">Regenerate</p>
            </button>
          </div>
        </div>
      )}

      {/* Save Template Modal */}
      {showSaveTemplateModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Save Template</h3>
              <button
                onClick={() => {
                  setShowSaveTemplateModal(false);
                  setTemplateName('');
                }}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-bold text-gray-400 mb-2 block">Template Name</label>
                <input
                  type="text"
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                  placeholder="e.g., Twitter Product Launch Template"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-400 mb-2 block">Template Preview</label>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5 space-y-3 max-h-48 overflow-y-auto">
                  <div className="text-xs text-gray-500 mb-2">Selected Product: {selectedProduct?.name}</div>
                  {generatedContent.map((content, idx) => (
                    <div key={idx} className="pb-3 border-b border-white/5 last:border-0">
                      <div className="text-xs font-bold text-cyan-400 mb-1">
                        {platforms.find(p => p.id === content.platform)?.name}
                      </div>
                      <div className="text-xs text-gray-400 line-clamp-2">{content.text}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    if (!templateName.trim()) {
                      alert('Please enter a template name');
                      return;
                    }
                    if (!selectedProduct) {
                      alert('No product selected');
                      return;
                    }
                    
                    const newTemplate = {
                      id: Date.now().toString(),
                      name: templateName,
                      content: generatedContent,
                      product: selectedProduct,
                      createdAt: new Date().toISOString(),
                    };
                    
                    setSavedTemplates([...savedTemplates, newTemplate]);
                    setShowSaveTemplateModal(false);
                    setTemplateName('');
                    alert(`Template "${templateName}" saved successfully!`);
                  }}
                  className="flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
                >
                  Save Template
                </button>
                <button
                  onClick={() => {
                    setShowSaveTemplateModal(false);
                    setTemplateName('');
                  }}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Post Modal */}
      {showSchedulePostModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Schedule Post</h3>
              <button
                onClick={() => {
                  setShowSchedulePostModal(false);
                  setScheduledDateTime('');
                  setSelectedPlatformForSchedule('twitter');
                }}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-bold text-gray-400 mb-2 block">Select Platform</label>
                <div className="grid grid-cols-2 gap-2">
                  {platforms.map((platform) => (
                    <button
                      key={platform.id}
                      onClick={() => setSelectedPlatformForSchedule(platform.id)}
                      className={`p-3 rounded-xl text-sm font-bold transition-all border ${
                        selectedPlatformForSchedule === platform.id
                          ? `${platform.color} text-white border-transparent`
                          : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      <span className="mr-2">{platform.icon}</span>
                      {platform.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-400 mb-2 block">Date & Time</label>
                <input
                  type="datetime-local"
                  value={scheduledDateTime}
                  onChange={(e) => setScheduledDateTime(e.target.value)}
                  min={new Date().toISOString().slice(0, 16)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-sm"
                />
                <p className="text-xs text-gray-500 mt-2">Select when to publish this post</p>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-400 mb-2 block">Content Preview</label>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  {generatedContent.find(c => c.platform === selectedPlatformForSchedule) ? (
                    <div>
                      <div className="text-xs text-gray-500 mb-2">
                        {platforms.find(p => p.id === selectedPlatformForSchedule)?.name} • {selectedProduct?.name}
                      </div>
                      <div className="text-sm text-gray-300 mb-2 whitespace-pre-wrap">
                        {generatedContent.find(c => c.platform === selectedPlatformForSchedule)?.text}
                      </div>
                      <div className="text-xs text-cyan-400">
                        {generatedContent.find(c => c.platform === selectedPlatformForSchedule)?.hashtags}
                      </div>
                    </div>
                  ) : (
                    <div className="text-xs text-gray-500">No content generated for this platform yet</div>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    if (!scheduledDateTime) {
                      alert('Please select a date and time');
                      return;
                    }
                    const selectedContent = generatedContent.find(c => c.platform === selectedPlatformForSchedule);
                    if (!selectedContent) {
                      alert('No content available for selected platform');
                      return;
                    }
                    
                    const scheduledDate = new Date(scheduledDateTime);
                    const now = new Date();
                    if (scheduledDate <= now) {
                      alert('Please select a future date and time');
                      return;
                    }
                    
                    setShowSchedulePostModal(false);
                    setScheduledDateTime('');
                    alert(`Post scheduled for ${platforms.find(p => p.id === selectedPlatformForSchedule)?.name} on ${scheduledDate.toLocaleString()}!`);
                  }}
                  className="flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
                >
                  Schedule Post
                </button>
                <button
                  onClick={() => {
                    setShowSchedulePostModal(false);
                    setScheduledDateTime('');
                    setSelectedPlatformForSchedule('twitter');
                  }}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Analytics Modal */}
      {showAnalyticsModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Content Analytics</h3>
              <button
                onClick={() => setShowAnalyticsModal(false)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/5 text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    {generatedContent.length}
                  </div>
                  <div className="text-xs text-gray-400">Platforms</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5 text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    {generatedContent.reduce((sum, c) => sum + c.text.length + c.hashtags.length, 0)}
                  </div>
                  <div className="text-xs text-gray-400">Total Characters</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {generatedContent.filter(c => c.text.length <= 280).length}
                  </div>
                  <div className="text-xs text-gray-400">Twitter Ready</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5 text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    {selectedProduct ? `${selectedProduct.commission}%` : 'N/A'}
                  </div>
                  <div className="text-xs text-gray-400">Commission</div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Platform Breakdown</h4>
                <div className="space-y-3">
                  {generatedContent.map((content, idx) => {
                    const platform = platforms.find(p => p.id === content.platform);
                    const charCount = content.text.length + content.hashtags.length;
                    const isTwitterReady = charCount <= 280;
                    
                    return (
                      <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/5">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl ${platform?.color} flex items-center justify-center text-xl`}>
                              {platform?.icon}
                            </div>
                            <div>
                              <div className="font-bold text-sm">{platform?.name}</div>
                              <div className="text-xs text-gray-500">{contentType} • {tone}</div>
                            </div>
                          </div>
                          {isTwitterReady && (
                            <span className="px-2 py-1 bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-bold rounded">
                              ✓ Ready
                            </span>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-3 gap-3 text-xs">
                          <div>
                            <div className="text-gray-500 mb-1">Characters</div>
                            <div className="font-bold text-white">{charCount}</div>
                          </div>
                          <div>
                            <div className="text-gray-500 mb-1">Words</div>
                            <div className="font-bold text-white">
                              {(content.text + ' ' + content.hashtags).split(/\s+/).filter(w => w).length}
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-500 mb-1">Hashtags</div>
                            <div className="font-bold text-white">
                              {content.hashtags.split('#').length - 1}
                            </div>
                          </div>
                        </div>
                        
                        {charCount > 280 && content.platform === 'twitter' && (
                          <div className="mt-2 px-3 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                            <div className="text-xs text-yellow-400 font-bold">
                              ⚠️ Exceeds Twitter character limit ({charCount}/280)
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {selectedProduct && (
                <div>
                  <h4 className="text-lg font-bold mb-4">Product Information</h4>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500 mb-1">Product Name</div>
                      <div className="font-bold text-white">{selectedProduct.name}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Category</div>
                      <div className="font-bold text-white">{selectedProduct.category}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Price</div>
                      <div className="font-bold text-white">${selectedProduct.price}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Commission Rate</div>
                      <div className="font-bold text-green-400">{selectedProduct.commission}%</div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-end">
                <button
                  onClick={() => setShowAnalyticsModal(false)}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upload Content Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Upload Content</h3>
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setUploadFile(null);
                  setUploadText('');
                  setUploadName('');
                  setUploadType('image');
                }}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Content Type Selection */}
              <div>
                <label className="text-sm font-bold text-gray-400 mb-3 block">Content Type</label>
                <div className="grid grid-cols-3 gap-2">
                  {['image', 'video', 'text'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setUploadType(type as any)}
                      className={`px-4 py-3 rounded-xl font-bold text-sm transition-all border ${
                        uploadType === type
                          ? 'bg-purple-600 border-purple-500 text-white'
                          : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {type === 'image' && '📷 Image'}
                      {type === 'video' && '🎥 Video'}
                      {type === 'text' && '📝 Text'}
                    </button>
                  ))}
                </div>
              </div>

              {/* File Upload for Image/Video */}
              {(uploadType === 'image' || uploadType === 'video') && (
                <div>
                  <label className="text-sm font-bold text-gray-400 mb-2 block">
                    Upload {uploadType === 'image' ? 'Image' : 'Video'} File
                  </label>
                  <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-purple-500/30 transition-all cursor-pointer">
                    <input
                      type="file"
                      accept={uploadType === 'image' ? 'image/*' : 'video/*'}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setUploadFile(file);
                          if (!uploadName) {
                            setUploadName(file.name);
                          }
                        }
                      }}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="17 8 12 3 7 8"/>
                          <line x1="12" y1="3" x2="12" y2="15"/>
                        </svg>
                      </div>
                      {uploadFile ? (
                        <div>
                          <p className="font-bold text-white mb-1">{uploadFile.name}</p>
                          <p className="text-xs text-gray-400">
                            {(uploadFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p className="font-bold text-gray-300 mb-1">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            {uploadType === 'image' ? 'PNG, JPG, GIF up to 10MB' : 'MP4, MOV up to 100MB'}
                          </p>
                        </div>
                      )}
                    </label>
                  </div>
                  {uploadFile && (
                    <div className="mt-4">
                      {uploadType === 'image' ? (
                        <img
                          src={URL.createObjectURL(uploadFile)}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded-xl border border-white/10"
                        />
                      ) : (
                        <video
                          src={URL.createObjectURL(uploadFile)}
                          controls
                          className="w-full h-48 object-cover rounded-xl border border-white/10"
                        />
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Text Upload */}
              {uploadType === 'text' && (
                <div>
                  <label className="text-sm font-bold text-gray-400 mb-2 block">Text Content</label>
                  <textarea
                    value={uploadText}
                    onChange={(e) => setUploadText(e.target.value)}
                    placeholder="Paste or type your content here..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-sm resize-none"
                    rows={8}
                  />
                </div>
              )}

              {/* Content Name */}
              <div>
                <label className="text-sm font-bold text-gray-400 mb-2 block">Content Name</label>
                <input
                  type="text"
                  value={uploadName}
                  onChange={(e) => setUploadName(e.target.value)}
                  placeholder="Enter a name for this content..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-sm"
                />
              </div>

              {/* Platform Selection */}
              <div>
                <label className="text-sm font-bold text-gray-400 mb-2 block">Platform (Optional)</label>
                <select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value as SocialPlatform)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-purple-500/50"
                >
                  <option value="">All Platforms</option>
                  {platforms.map((platform) => (
                    <option key={platform.id} value={platform.id}>
                      {platform.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Upload Button */}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    if ((uploadType === 'image' || uploadType === 'video') && !uploadFile) {
                      alert(`Please upload a ${uploadType} file`);
                      return;
                    }
                    if (uploadType === 'text' && !uploadText.trim()) {
                      alert('Please enter text content');
                      return;
                    }
                    if (!uploadName.trim()) {
                      alert('Please enter a content name');
                      return;
                    }

                    const newContent: UploadedContent = {
                      id: Date.now().toString(),
                      type: uploadType,
                      file: uploadFile || undefined,
                      url: uploadFile ? URL.createObjectURL(uploadFile) : undefined,
                      text: uploadType === 'text' ? uploadText : undefined,
                      name: uploadName,
                      uploadedAt: new Date().toISOString(),
                      platform: selectedPlatform || undefined,
                    };

                    setUploadedContent([...uploadedContent, newContent]);
                    setShowUploadModal(false);
                    setUploadFile(null);
                    setUploadText('');
                    setUploadName('');
                    setUploadType('image');
                    alert('Content uploaded successfully!');
                  }}
                  className="flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
                >
                  Upload Content
                </button>
                <button
                  onClick={() => {
                    setShowUploadModal(false);
                    setUploadFile(null);
                    setUploadText('');
                    setUploadName('');
                    setUploadType('image');
                  }}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* How to Generate Content Modal */}
      {showHowToModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">How to Generate Content</h3>
              <button
                onClick={() => {
                  setShowHowToModal(false);
                  setSelectedBestPractice(null);
                  setBestPracticeContent('');
                }}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-hidden flex gap-6">
              {/* Left Sidebar - Best Practice Buttons */}
              <div className="w-80 flex-shrink-0 overflow-y-auto pr-4">
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-400 mb-4 text-sm">
                      Select a best practices guide to view detailed strategies and tips.
                    </p>
                  </div>

                  {/* Text-Based Content Section */}
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-green-400">Text-Based Content</h4>
                    <div className="space-y-2">
                      {['x-twitter', 'linkedin', 'facebook-text'].map((key) => {
                        const practice = BEST_PRACTICES_FILES[key];
                        return (
                          <button
                            key={key}
                            onClick={async () => {
                              setSelectedBestPractice(key);
                              setLoadingBestPractice(true);
                              try {
                                const content = await loadBestPractice(practice.path);
                                setBestPracticeContent(content);
                              } catch (error) {
                                setBestPracticeContent(`Error loading ${practice.name}: ${error}`);
                              } finally {
                                setLoadingBestPractice(false);
                              }
                            }}
                            className={`w-full p-3 text-left rounded-xl transition-all border ${
                              selectedBestPractice === key
                                ? 'bg-green-600/20 border-green-500/30 text-white'
                                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-xl">{practice.icon}</span>
                              <span className="font-bold text-sm">{practice.name}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Short-Form Content Section */}
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-purple-400">Short-Form Content</h4>
                    <div className="space-y-2">
                      {['tiktok', 'instagram', 'facebook-shorts'].map((key) => {
                        const practice = BEST_PRACTICES_FILES[key];
                        return (
                          <button
                            key={key}
                            onClick={async () => {
                              setSelectedBestPractice(key);
                              setLoadingBestPractice(true);
                              try {
                                const content = await loadBestPractice(practice.path);
                                setBestPracticeContent(content);
                              } catch (error) {
                                setBestPracticeContent(`Error loading ${practice.name}: ${error}`);
                              } finally {
                                setLoadingBestPractice(false);
                              }
                            }}
                            className={`w-full p-3 text-left rounded-xl transition-all border ${
                              selectedBestPractice === key
                                ? 'bg-purple-600/20 border-purple-500/30 text-white'
                                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-xl">{practice.icon}</span>
                              <span className="font-bold text-sm">{practice.name}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Long-Form Content Section */}
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-cyan-400">Long-Form Content</h4>
                    <div className="space-y-2">
                      {['youtube-short', 'youtube-long'].map((key) => {
                        const practice = BEST_PRACTICES_FILES[key];
                        return (
                          <button
                            key={key}
                            onClick={async () => {
                              setSelectedBestPractice(key);
                              setLoadingBestPractice(true);
                              try {
                                const content = await loadBestPractice(practice.path);
                                setBestPracticeContent(content);
                              } catch (error) {
                                setBestPracticeContent(`Error loading ${practice.name}: ${error}`);
                              } finally {
                                setLoadingBestPractice(false);
                              }
                            }}
                            className={`w-full p-3 text-left rounded-xl transition-all border ${
                              selectedBestPractice === key
                                ? 'bg-cyan-600/20 border-cyan-500/30 text-white'
                                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-xl">{practice.icon}</span>
                              <span className="font-bold text-sm">{practice.name}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content Area */}
              <div className="flex-1 overflow-y-auto">
                {loadingBestPractice ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mb-4"></div>
                      <p className="text-gray-400">Loading best practices...</p>
                    </div>
                  </div>
                ) : selectedBestPractice && bestPracticeContent ? (
                  <div className="prose prose-invert max-w-none">
                    <div 
                      className="text-gray-300 space-y-4"
                      dangerouslySetInnerHTML={{ __html: formatMarkdown(bestPracticeContent) }}
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center text-gray-400">
                      <p className="text-lg mb-2">Select a best practices guide</p>
                      <p className="text-sm">Choose a guide from the left sidebar to view detailed strategies and tips.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Uploaded Content Library */}
      {uploadedContent.length > 0 && (
        <div className="glass-card p-6 rounded-3xl border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Your Uploaded Content</h3>
            <button
              onClick={() => setShowUploadModal(true)}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-sm transition-all"
            >
              + Upload More
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {uploadedContent.map((content) => (
              <div
                key={content.id}
                className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">
                    {content.type === 'image' && '📷'}
                    {content.type === 'video' && '🎥'}
                    {content.type === 'text' && '📝'}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm truncate">{content.name}</p>
                    <p className="text-xs text-gray-500 capitalize">{content.type}</p>
                  </div>
                </div>
                {content.url && content.type === 'image' && (
                  <img
                    src={content.url}
                    alt={content.name}
                    className="w-full h-32 object-cover rounded-lg mb-3 border border-white/5"
                  />
                )}
                {content.url && content.type === 'video' && (
                  <video
                    src={content.url}
                    className="w-full h-32 object-cover rounded-lg mb-3 border border-white/5"
                  />
                )}
                {content.text && (
                  <p className="text-xs text-gray-400 line-clamp-3 mb-3">{content.text}</p>
                )}
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedUploadedContent(content);
                      setUseUploadedContent(true);
                      if (content.text) {
                        setCustomPrompt(prev => prev ? `${prev}\n\nUploaded content: ${content.text}` : content.text);
                      }
                    }}
                    className="flex-1 px-3 py-1.5 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 rounded-lg text-xs font-bold transition-all"
                  >
                    Use
                  </button>
                  <button
                    onClick={() => {
                      if (content.url) {
                        navigator.clipboard.writeText(content.url);
                        alert('Content URL copied to clipboard!');
                      } else if (content.text) {
                        navigator.clipboard.writeText(content.text);
                        alert('Content copied to clipboard!');
                      }
                    }}
                    className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold transition-all"
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => {
                      setUploadedContent(uploadedContent.filter(c => c.id !== content.id));
                    }}
                    className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-lg text-xs font-bold transition-all"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentGenerator;
