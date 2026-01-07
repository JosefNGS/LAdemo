import React, { useState } from 'react';
import { Product } from '../types';

interface ProductDetailDrawerProps {
  product: Product & {
    tags?: string[];
    avgMonthlyEarnings?: number;
    timeTo1K?: number;
    description?: string;
    marketingAssets?: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailDrawer: React.FC<ProductDetailDrawerProps> = ({ product, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'assets' | 'link'>('overview');
  const [affiliateLink, setAffiliateLink] = useState('');
  const [linkGenerated, setLinkGenerated] = useState(false);

  if (!isOpen) return null;

  const generateAffiliateLink = () => {
    const baseLink = `https://bitnexus.io/product/${product.id}`;
    const userId = 'user-123'; // In real app, get from auth context
    const link = `${baseLink}?ref=${userId}&affiliate=${product.id}`;
    setAffiliateLink(link);
    setLinkGenerated(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(affiliateLink);
    alert('Link copied to clipboard!');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full md:w-[600px] bg-[#030712] border-l border-white/5 z-50 overflow-y-auto animate-in slide-in-from-right">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold font-display">Product Details</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Product Image */}
          <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4">
              <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                {product.category}
              </span>
            </div>
            <div className="absolute bottom-4 right-4">
              <span className="text-xl font-bold font-display bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                {product.price} NXC
              </span>
            </div>
          </div>

          {/* Product Info */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold font-display mb-2">{product.name}</h3>
            {product.tags && product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full text-xs font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="flex items-center gap-4">
              <span className="px-4 py-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-xl text-sm font-bold">
                EARN {product.commission}%
              </span>
              <span className={`px-4 py-2 rounded-xl text-sm font-bold ${
                product.status === 'Active' 
                  ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                  : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
              }`}>
                {product.status}
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 bg-white/5 p-1 rounded-xl mb-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'overview'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('assets')}
              className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'assets'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Marketing Assets
            </button>
            <button
              onClick={() => setActiveTab('link')}
              className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'link'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Affiliate Link
            </button>
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">Description</h4>
                  <p className="text-gray-400 text-sm">
                    {product.description || `Promote ${product.name} and earn ${product.commission}% commission on every sale. This product is perfect for affiliates looking to build sustainable income.`}
                  </p>
                </div>
                {product.avgMonthlyEarnings && (
                  <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                    <h4 className="font-bold mb-3 text-cyan-400">Earning Potential</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">10 sales/month:</span>
                        <span className="font-bold text-cyan-400">${(product.price * product.commission / 100 * 10).toFixed(0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Avg affiliate earns:</span>
                        <span className="font-bold text-green-400">${product.avgMonthlyEarnings}/mo</span>
                      </div>
                      {product.timeTo1K && (
                        <div className="flex justify-between border-t border-cyan-500/20 pt-2 mt-2">
                          <span className="text-gray-400">Time to $1K/month:</span>
                          <span className="font-bold text-purple-400">~{product.timeTo1K} months</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'assets' && (
              <div className="space-y-4">
                <h4 className="font-bold mb-4">Marketing Assets</h4>
                <div className="grid grid-cols-2 gap-4">
                  {product.marketingAssets && product.marketingAssets.length > 0 ? (
                    product.marketingAssets.map((asset, idx) => (
                      <div key={idx} className="aspect-video bg-white/5 rounded-xl border border-white/5 p-4 flex items-center justify-center">
                        <span className="text-xs text-gray-500">{asset}</span>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="aspect-video bg-white/5 rounded-xl border border-white/5 p-4 flex items-center justify-center">
                        <span className="text-xs text-gray-500">Banner 1</span>
                      </div>
                      <div className="aspect-video bg-white/5 rounded-xl border border-white/5 p-4 flex items-center justify-center">
                        <span className="text-xs text-gray-500">Banner 2</span>
                      </div>
                      <div className="aspect-video bg-white/5 rounded-xl border border-white/5 p-4 flex items-center justify-center">
                        <span className="text-xs text-gray-500">Social Post</span>
                      </div>
                      <div className="aspect-video bg-white/5 rounded-xl border border-white/5 p-4 flex items-center justify-center">
                        <span className="text-xs text-gray-500">Email Template</span>
                      </div>
                    </>
                  )}
                </div>
                <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all text-sm">
                  Download All Assets
                </button>
              </div>
            )}

            {activeTab === 'link' && (
              <div className="space-y-4">
                <h4 className="font-bold mb-4">Generate Affiliate Link</h4>
                {!linkGenerated ? (
                  <div className="space-y-4">
                    <p className="text-gray-400 text-sm">
                      Generate your unique affiliate link to start earning commissions from this product.
                    </p>
                    <button
                      onClick={generateAffiliateLink}
                      className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl font-bold shadow-xl shadow-purple-900/40 hover:scale-[1.02] transition-transform"
                    >
                      Generate Link
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                        Your Affiliate Link
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={affiliateLink}
                          readOnly
                          className="flex-1 bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-sm font-mono"
                        />
                        <button
                          onClick={copyToClipboard}
                          className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg font-bold transition-all"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                    <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                      <h5 className="font-bold mb-3 text-cyan-400">QR Code</h5>
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-48 h-48 bg-white rounded-xl p-3 flex items-center justify-center shadow-lg">
                          {affiliateLink ? (
                            <img 
                              src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(affiliateLink)}&bgcolor=ffffff&color=000000&margin=1`}
                              alt="QR Code"
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <div className="text-center">
                              <svg className="w-24 h-24 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
                              </svg>
                              <p className="text-xs text-gray-500">Generate link first</p>
                            </div>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 text-center">Scan to share affiliate link</p>
                        {affiliateLink && (
                          <button
                            onClick={() => {
                              const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(affiliateLink)}&bgcolor=ffffff&color=000000&margin=1`;
                              const link = document.createElement('a');
                              link.href = qrUrl;
                              link.download = `qr-code-${product.name.replace(/\s+/g, '-')}.png`;
                              link.click();
                            }}
                            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-xs font-bold transition-all"
                          >
                            Download QR Code
                          </button>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setLinkGenerated(false);
                        setAffiliateLink('');
                      }}
                      className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all text-sm"
                    >
                      Generate New Link
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailDrawer;



