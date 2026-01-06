import React, { useState } from 'react';
import { ICONS } from '../constants';

const TokenShop: React.FC = () => {
  const [cart, setCart] = useState<{ id: string; name: string; amount: number; price: number }[]>([]);

  const packages = [
    { id: '1', name: 'Starter Pack', amount: 50, price: 150, bonus: 0, popular: false },
    { id: '2', name: 'Growth Pack', amount: 100, price: 280, bonus: 5, popular: true },
    { id: '3', name: 'Pro Pack', amount: 250, price: 650, bonus: 15, popular: false },
    { id: '4', name: 'Enterprise Pack', amount: 500, price: 1200, bonus: 35, popular: false },
  ];

  const addToCart = (pkg: typeof packages[0]) => {
    setCart([...cart, { id: pkg.id, name: pkg.name, amount: pkg.amount, price: pkg.price }]);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-display">NXC Token Shop</h2>
          <p className="text-gray-500 text-sm">Purchase NXC packages for network interactions</p>
        </div>
        {cart.length > 0 && (
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all">
            Checkout ({cart.length})
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
              {pkg.bonus > 0 && (
                <p className="text-green-400 text-sm font-bold mb-4">+{pkg.bonus} Bonus NXC</p>
              )}
              <div className="mb-6">
                <p className="text-2xl font-bold">${pkg.price.toLocaleString()}</p>
                <p className="text-gray-500 text-xs">${(pkg.price / pkg.amount).toFixed(2)} per NXC</p>
              </div>
              <button 
                onClick={() => addToCart(pkg)}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center mb-3">
              <ICONS.Shop />
            </div>
            <h4 className="font-bold mb-2">Network Access</h4>
            <p className="text-gray-500 text-sm">Unlock premium features and marketplace access</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-cyan-600/20 flex items-center justify-center mb-3">
              <ICONS.Earn />
            </div>
            <h4 className="font-bold mb-2">Staking Rewards</h4>
            <p className="text-gray-500 text-sm">Earn passive income through MEV bot staking</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-green-600/20 flex items-center justify-center mb-3">
              <ICONS.Alliance />
            </div>
            <h4 className="font-bold mb-2">Tier Benefits</h4>
            <p className="text-gray-500 text-sm">Higher tiers unlock better commission rates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenShop;

