import React, { useState } from 'react';
import { ICONS } from '../constants';
import { useCart } from '../contexts/CartContext';
import { AppRoute } from '../types';

interface TokenShopProps {
  setActiveRoute?: (route: AppRoute) => void;
}

interface FreedomPackage {
  name: string;
  goal: string;
  price: number;
  description: string;
  color: 'green' | 'cyan' | 'purple';
}

const TokenShop: React.FC<TokenShopProps> = ({ setActiveRoute }) => {
  const { addItem, getItemCount } = useCart();
  const [selectedPackage, setSelectedPackage] = useState<FreedomPackage | null>(null);

  const packages = [
    { id: '1', name: 'Starter Pack', amount: 50, price: 150, bonus: 0, aiCredits: 25, popular: false },
    { id: '2', name: 'Growth Pack', amount: 100, price: 280, bonus: 5, aiCredits: 50, popular: true },
    { id: '3', name: 'Pro Pack', amount: 250, price: 650, bonus: 15, aiCredits: 125, popular: false },
    { id: '4', name: 'Enterprise Pack', amount: 500, price: 1200, bonus: 35, aiCredits: 250, popular: false },
  ];

  const handleAddToCart = (pkg: typeof packages[0]) => {
    addItem({
      id: pkg.id,
      name: pkg.name,
      amount: pkg.amount,
      price: pkg.price,
      type: 'token',
    });
  };

  const handleSelectPackage = (pkg: FreedomPackage, e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setSelectedPackage(pkg);
  };

  const handleAddPackageToCart = () => {
    if (selectedPackage) {
      addItem({
        id: `freedom-${selectedPackage.name.toLowerCase().replace(/\s+/g, '-')}`,
        name: selectedPackage.name,
        amount: selectedPackage.price,
        price: selectedPackage.price * 3, // USD price
        type: 'token',
      });
      setSelectedPackage(null);
    }
  };

  const colorClasses = {
    green: {
      bg: 'bg-green-600',
      hover: 'hover:bg-green-500',
      border: 'border-green-500/30',
      bgGradient: 'from-green-500/10',
      text: 'text-green-400',
      bgBadge: 'bg-green-500/20',
      borderBadge: 'border-green-500/30',
    },
    cyan: {
      bg: 'bg-cyan-600',
      hover: 'hover:bg-cyan-500',
      border: 'border-cyan-500/30',
      bgGradient: 'from-cyan-500/10',
      text: 'text-cyan-400',
      bgBadge: 'bg-cyan-500/20',
      borderBadge: 'border-cyan-500/30',
    },
    purple: {
      bg: 'bg-purple-600',
      hover: 'hover:bg-purple-500',
      border: 'border-purple-500/30',
      bgGradient: 'from-purple-500/10',
      text: 'text-purple-400',
      bgBadge: 'bg-purple-500/20',
      borderBadge: 'border-purple-500/30',
    },
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-display">NXC Credits Shop</h2>
          <p className="text-gray-500 text-sm">Purchase NXC packages for network interactions and AI usage credits for the AI tools</p>
        </div>
        {getItemCount() > 0 && (
          <button
            onClick={() => setActiveRoute && setActiveRoute(AppRoute.CART)}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all relative"
          >
            View Cart ({getItemCount()})
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg) => (
          <div 
            key={pkg.id} 
            className={`glass-card p-6 rounded-3xl border transition-all relative ${
              pkg.popular 
                ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' 
                : 'border-white/5 hover:border-purple-500/30'
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-xs font-bold">
                MOST POPULAR
              </div>
            )}
            <div className="text-center">
              <h3 className="text-xl font-bold font-display mb-2">{pkg.name}</h3>
              <div className="my-6">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  {pkg.amount}
                </div>
                <p className="text-gray-500 text-sm mt-1">NXC Credits</p>
              </div>
              <div className="mb-4 space-y-1">
                {pkg.bonus > 0 && (
                  <p className="text-green-400 text-sm font-bold">+{pkg.bonus} Bonus NXC</p>
                )}
                <p className="text-cyan-400 text-sm font-bold">+{pkg.aiCredits} AI Credits</p>
              </div>
              <div className="mb-6">
                <p className="text-2xl font-bold">${pkg.price.toLocaleString()}</p>
                <p className="text-gray-500 text-xs">${(pkg.price / pkg.amount).toFixed(2)} per NXC</p>
              </div>
              <button 
                onClick={() => handleAddToCart(pkg)}
                className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ROI Calculator */}
      <div className="glass-card p-6 rounded-3xl border border-white/5 mb-6">
        <h3 className="text-xl font-bold mb-4">ROI Calculator</h3>
        <p className="text-sm text-gray-400 mb-4">Calculate expected returns from NXC credits packages</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Starter Pack', price: 50, apy: 10, years: 1 },
            { name: 'Growth Pack', price: 250, apy: 12, years: 1 },
            { name: 'Elite Pack', price: 500, apy: 15, years: 1 },
          ].map((pack) => {
            const nxcToUsd = 3.0;
            const initialUsd = pack.price * nxcToUsd;
            const yearlyReturn = initialUsd * (pack.apy / 100);
            const fiveYearCompound = initialUsd * Math.pow(1 + pack.apy / 100, 5);
            const breakEvenMonths = 12 / (pack.apy / 100);
            
            return (
              <div key={pack.name} className="p-4 bg-white/5 rounded-xl border border-white/5">
                <h4 className="font-bold mb-3">{pack.name}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Initial:</span>
                    <span className="font-bold">${initialUsd.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">1 Year Return:</span>
                    <span className="font-bold text-green-400">${yearlyReturn.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">5 Year (Compound):</span>
                    <span className="font-bold text-cyan-400">${fiveYearCompound.toFixed(0)}</span>
                  </div>
                  <div className="pt-2 border-t border-white/5 flex justify-between">
                    <span className="text-gray-400">Break-even:</span>
                    <span className="font-bold text-purple-400">~{breakEvenMonths.toFixed(1)} months</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Financial Freedom Packages */}
      <div className="glass-card p-6 rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-cyan-500/5 mb-6">
        <h3 className="text-xl font-bold mb-4">Financial Freedom Packages</h3>
        <p className="text-sm text-gray-400 mb-4">Pre-configured bundles designed to help you reach specific income goals</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {([
            { name: 'Starter Freedom', goal: '$500/month', price: 250, description: 'Perfect for beginners starting their journey', color: 'green' as const },
            { name: 'Moderate Freedom', goal: '$2,000/month', price: 1000, description: 'For those ready to scale their income', color: 'cyan' as const },
            { name: 'Full Freedom', goal: '$5,000+/month', price: 2500, description: 'Complete financial independence package', color: 'purple' as const },
          ] as FreedomPackage[]).map((pkg) => {
            const colors = colorClasses[pkg.color];
            return (
              <div key={pkg.name} className={`p-5 rounded-xl border ${colors.border} bg-gradient-to-br ${colors.bgGradient} to-transparent`}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-lg">{pkg.name}</h4>
                  <span className={`px-2 py-1 ${colors.bgBadge} ${colors.text} border ${colors.borderBadge} rounded text-xs font-bold`}>
                    {pkg.goal}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{pkg.description}</p>
                <div className="mb-3">
                  <p className="text-xs text-gray-500 mb-1">Package Value</p>
                  <p className="text-2xl font-bold">{pkg.price} NXC</p>
                  <p className="text-xs text-gray-500">≈ ${(pkg.price * 3).toFixed(0)} USD</p>
                </div>
                <button 
                  onClick={(e) => handleSelectPackage(pkg, e)}
                  className={`w-full py-3 ${colors.bg} ${colors.hover} rounded-xl font-bold transition-all`}
                  type="button"
                >
                  Select Package
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="glass-card p-6 rounded-3xl border border-white/5">
        <h3 className="text-xl font-bold mb-4">Why Buy NXC?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center mb-3">
              <ICONS.Shop />
            </div>
            <h4 className="font-bold mb-2">Network Access</h4>
            <p className="text-gray-500 text-sm">Unlock premium features and marketplace access</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-cyan-600/20 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="font-bold mb-2">AI Credits</h4>
            <p className="text-gray-500 text-sm">Power AI tools like Content Generator and NexusHub</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-green-600/20 flex items-center justify-center mb-3">
              <ICONS.Earn />
            </div>
            <h4 className="font-bold mb-2">Staking Rewards</h4>
            <p className="text-gray-500 text-sm">Earn passive income through MEV and XAB bot staking</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-yellow-600/20 flex items-center justify-center mb-3">
              <ICONS.Alliance />
            </div>
            <h4 className="font-bold mb-2">Tier Benefits</h4>
            <p className="text-gray-500 text-sm">Higher tiers unlock better commission rates</p>
          </div>
        </div>
      </div>

      {/* AI Usage Info */}
      <div className="glass-card p-6 rounded-3xl border border-cyan-500/20 bg-cyan-500/5">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-600/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-lg mb-2 text-cyan-400">AI Usage Credits</h4>
            <p className="text-gray-300 text-sm mb-3">
              NXC credits are used for AI-powered features across the platform:
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Content Generator:</strong> Generate social media content (10 NXC per generation)</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>NexusHub AI:</strong> Chat with AI assistant (5 NXC per conversation)</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>AI Recommendations:</strong> Get personalized product suggestions (2 NXC per query)</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-black/20 rounded-xl border border-cyan-500/10">
              <p className="text-xs text-cyan-300">
                <strong>💡 Tip:</strong> Higher credits packages include bonus AI credits. The Growth Pack includes 50 bonus AI credits!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Package Detail Modal */}
      {selectedPackage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedPackage(null);
            }
          }}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div 
            className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">{selectedPackage.name}</h3>
                <span className={`inline-block px-3 py-1 ${colorClasses[selectedPackage.color].bgBadge} ${colorClasses[selectedPackage.color].text} border ${colorClasses[selectedPackage.color].borderBadge} rounded-lg text-sm font-bold`}>
                  {selectedPackage.goal}
                </span>
              </div>
              <button
                onClick={() => setSelectedPackage(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <ICONS.Close className="w-6 h-6" />
              </button>
            </div>

            <p className="text-gray-300 mb-6">{selectedPackage.description}</p>

            <div className="mb-6 p-6 bg-white/5 rounded-xl border border-white/10">
              <h4 className="font-bold text-lg mb-4">Package Contents</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">NXC Credits</span>
                  <span className="text-2xl font-bold">{selectedPackage.price} NXC</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">USD Value</span>
                  <span className="text-xl font-bold">≈ ${(selectedPackage.price * 3).toFixed(0)} USD</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">AI Credits</span>
                  <span className="text-lg font-bold text-cyan-400">+{Math.floor(selectedPackage.price / 2)} AI Credits</span>
                </div>
                {selectedPackage.price >= 1000 && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Bonus NXC</span>
                    <span className="text-lg font-bold text-green-400">+{Math.floor(selectedPackage.price * 0.05)} Bonus NXC</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-6 p-6 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-xl border border-green-500/20">
              <h4 className="font-bold text-lg mb-3">What's Included</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full access to BitNexus marketplace</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI-powered content generation credits</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>MEV Bot & XAB Bot staking eligibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Premium affiliate commission rates</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority customer support</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleAddPackageToCart}
                className={`flex-1 py-3 ${colorClasses[selectedPackage.color].bg} ${colorClasses[selectedPackage.color].hover} rounded-xl font-bold transition-all`}
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  handleAddPackageToCart();
                  setActiveRoute && setActiveRoute(AppRoute.CART);
                }}
                className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all"
              >
                Buy Now
              </button>
              <button
                onClick={() => setSelectedPackage(null)}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenShop;

