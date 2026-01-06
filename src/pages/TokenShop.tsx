import React from 'react';
import { ICONS } from '../constants';
import { useCart } from '../contexts/CartContext';
import { AppRoute } from '../types';

interface TokenShopProps {
  setActiveRoute?: (route: AppRoute) => void;
}

const TokenShop: React.FC<TokenShopProps> = ({ setActiveRoute }) => {
  const { addItem, getItemCount } = useCart();

  const packages = [
    { id: '1', name: 'Starter Pack', amount: 50, price: 150, bonus: 0, popular: false },
    { id: '2', name: 'Growth Pack', amount: 100, price: 280, bonus: 5, popular: true },
    { id: '3', name: 'Pro Pack', amount: 250, price: 650, bonus: 15, popular: false },
    { id: '4', name: 'Enterprise Pack', amount: 500, price: 1200, bonus: 35, popular: false },
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

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-display">NXC Token Shop</h2>
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
                <p className="text-gray-500 text-sm mt-1">NXC Tokens</p>
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
            <p className="text-gray-500 text-sm">Earn passive income through MEV bot staking</p>
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
              NXC tokens are used as credits for AI-powered features across the platform:
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
                <strong>💡 Tip:</strong> Higher token packages include bonus AI credits. The Growth Pack includes 50 bonus AI credits!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenShop;

