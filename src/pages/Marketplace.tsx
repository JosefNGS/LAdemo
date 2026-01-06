import React, { useState } from 'react';
import { Product } from '../types';
import ProductDetailDrawer from '../components/ProductDetailDrawer';
import ProductUploadForm from '../components/ProductUploadForm';

interface ProductWithTags extends Product {
  tags: string[];
  avgMonthlyEarnings?: number;
  timeTo1K?: number; // months
}

const mockProducts: ProductWithTags[] = [
  { id: '1', name: 'NXC Trading Masterclass', category: 'Academy', price: 150, commission: 25, image: 'https://picsum.photos/seed/nxc1/400/300', status: 'Active', tags: ['🎯 High Commission', '👶 Beginner Friendly'], avgMonthlyEarnings: 375, timeTo1K: 2.7 },
  { id: '2', name: 'Crypto Health Formula', category: 'Health', price: 85, commission: 40, image: 'https://picsum.photos/seed/nxc2/400/300', status: 'Active', tags: ['🔄 Recurring Income', '⚡ Quick Win', '🎯 High Commission'], avgMonthlyEarnings: 340, timeTo1K: 2.9 },
  { id: '3', name: 'MEV Bot Pro License', category: 'Automation', price: 500, commission: 10, image: 'https://picsum.photos/seed/nxc3/400/300', status: 'Active', tags: ['🔄 Recurring Income'], avgMonthlyEarnings: 500, timeTo1K: 2.0 },
  { id: '4', name: 'Elite Performance Apparel', category: 'Shop', price: 45, commission: 15, image: 'https://picsum.photos/seed/nxc4/400/300', status: 'Active', tags: ['⚡ Quick Win', '👶 Beginner Friendly'], avgMonthlyEarnings: 68, timeTo1K: 14.7 },
  { id: '5', name: 'Nexus Private Node', category: 'Tech', price: 1200, commission: 5, image: 'https://picsum.photos/seed/nxc5/400/300', status: 'Active', tags: [], avgMonthlyEarnings: 600, timeTo1K: 1.7 },
  { id: '6', name: 'Blockchain Marketing Kit', category: 'Marketing', price: 95, commission: 30, image: 'https://picsum.photos/seed/nxc6/400/300', status: 'Active', tags: ['🎯 High Commission', '⚡ Quick Win'], avgMonthlyEarnings: 285, timeTo1K: 3.5 },
];

import ProductDetailDrawer from '../components/ProductDetailDrawer';
import ProductUploadForm from '../components/ProductUploadForm';

const Marketplace: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<ProductWithTags | null>(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);

  const categories = ['All', 'Crypto', 'Health', 'Tech', 'Marketing', 'Automation'];

  const filtered = mockProducts.filter(p => 
    (activeCategory === 'All' || p.category === activeCategory) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  ) as ProductWithTags[];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold font-display">Nexus Marketplace</h2>
          <p className="text-gray-500 text-sm mt-1">Discover products and generate affiliate links</p>
        </div>
        <button
          onClick={() => setShowUploadForm(true)}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
        >
          + Submit Product
        </button>
        <div className="relative group max-w-md w-full">
           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
             <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
           </div>
           <input 
             type="text" 
             value={search}
             onChange={e => setSearch(e.target.value)}
             placeholder="Search products, bots, or courses..." 
             className="block w-full pl-10 pr-3 py-3 border border-white/5 rounded-2xl bg-white/5 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-sm"
           />
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
              activeCategory === c 
              ? 'bg-purple-600 border-purple-500 shadow-lg shadow-purple-500/20' 
              : 'bg-white/5 border-white/5 text-gray-400 hover:text-gray-200 hover:border-white/10'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map(product => (
          <div key={product.id} className="glass-card rounded-3xl overflow-hidden group hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
               <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute top-4 left-4">
                 <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                   {product.category}
                 </span>
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
               <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="text-xl font-bold font-display">{product.price} NXC</span>
                  <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded-lg border border-green-500/20">
                    EARN {product.commission}%
                  </span>
               </div>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <h3 className="font-bold text-lg leading-tight group-hover:text-purple-400 transition-colors line-clamp-2 mb-2">{product.name}</h3>
                {/* Product Tags */}
                {product.tags && product.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {product.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded text-[10px] font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {/* Earning Potential Calculator */}
                {product.avgMonthlyEarnings && (
                  <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl mb-3">
                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-400">10 sales/month:</span>
                        <span className="font-bold text-cyan-400">${(product.price * product.commission / 100 * 10).toFixed(0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Avg affiliate earns:</span>
                        <span className="font-bold text-green-400">${product.avgMonthlyEarnings}/mo</span>
                      </div>
                      <div className="flex justify-between border-t border-cyan-500/20 pt-1.5 mt-1.5">
                        <span className="text-gray-400">Time to $1K/month:</span>
                        <span className="font-bold text-purple-400">~{product.timeTo1K} months</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setShowDrawer(true);
                  }}
                  className="flex-1 bg-purple-600 hover:bg-purple-500 py-3 rounded-xl text-sm font-bold shadow-lg shadow-purple-900/20 transition-all"
                >
                  View Details
                </button>
                <button className="p-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Drawer */}
      {selectedProduct && (
        <ProductDetailDrawer
          product={selectedProduct}
          isOpen={showDrawer}
          onClose={() => {
            setShowDrawer(false);
            setSelectedProduct(null);
          }}
        />
      )}

      {/* Product Upload Form */}
      {showUploadForm && (
        <ProductUploadForm
          onClose={() => setShowUploadForm(false)}
          onSubmit={(product) => {
            console.log('Product submitted:', product);
            // In real app, this would submit to API
            setShowUploadForm(false);
          }}
        />
      )}
    </div>
  );
};

export default Marketplace;

