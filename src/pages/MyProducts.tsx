import React, { useState } from 'react';
import { Product } from '../types';
import ProductDetailDrawer from '../components/ProductDetailDrawer';
import ProductUploadForm from '../components/ProductUploadForm';

interface MyProduct extends Product {
  sales: number;
  revenue: number;
  clicks: number;
  conversions: number;
  status: 'Active' | 'Pending' | 'Rejected' | 'Paused';
}

const myProducts: MyProduct[] = [
  { 
    id: '1', 
    name: 'AI Copywriter Pro', 
    category: 'Marketing', 
    price: 199, 
    commission: 30, 
    image: 'https://picsum.photos/seed/ai1/400/300', 
    status: 'Active',
    sales: 2412,
    revenue: 12400,
    clicks: 15234,
    conversions: 2412
  },
  { 
    id: '2', 
    name: 'Crypto Trading Bot', 
    category: 'Automation', 
    price: 499, 
    commission: 25, 
    image: 'https://picsum.photos/seed/bot1/400/300', 
    status: 'Active',
    sales: 856,
    revenue: 4275,
    clicks: 8921,
    conversions: 856
  },
  { 
    id: '3', 
    name: 'Health Supplement Pack', 
    category: 'Health', 
    price: 89, 
    commission: 40, 
    image: 'https://picsum.photos/seed/health1/400/300', 
    status: 'Pending',
    sales: 0,
    revenue: 0,
    clicks: 0,
    conversions: 0
  },
];

const MyProducts: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<MyProduct | null>(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);

  const filters = ['All', 'Active', 'Pending', 'Rejected', 'Paused'];

  const filtered = myProducts.filter(p => {
    const matchesFilter = activeFilter === 'All' || p.status === activeFilter;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'Pending': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'Rejected': return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'Paused': return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold font-display">My Products</h2>
          <p className="text-gray-500 text-sm mt-1">Manage your product listings and track performance</p>
        </div>
        <button
          onClick={() => setShowUploadForm(true)}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
        >
          + Submit Product
        </button>
        <div className="relative group max-w-md w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <input 
            type="text" 
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search your products..." 
            className="block w-full pl-10 pr-3 py-3 border border-white/5 rounded-2xl bg-white/5 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-sm"
          />
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
              activeFilter === f 
              ? 'bg-purple-600 border-purple-500 shadow-lg shadow-purple-500/20' 
              : 'bg-white/5 border-white/5 text-gray-400 hover:text-gray-200 hover:border-white/10'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Submit New Product Card */}
      <div className="glass-card p-6 rounded-3xl border-dashed border-2 border-white/10 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/5 transition-all min-h-[200px]">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Submit New Product</h3>
        <p className="text-sm text-gray-500 mb-4">Add a new product to the marketplace</p>
        <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-xl mb-4">
          <p className="text-xs text-yellow-400 font-bold">📋 Listing Fee: 25 NXC Credits</p>
        </div>
        <button
          onClick={() => setShowUploadForm(true)}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
        >
          Submit Product
        </button>
      </div>

      {/* Products Grid */}
      {filtered.length === 0 ? (
        <div className="glass-card p-12 rounded-3xl border border-white/5 text-center">
          <div className="w-20 h-20 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">No Products Found</h3>
          <p className="text-gray-500 text-sm mb-4">
            {activeFilter !== 'All' 
              ? `You don't have any ${activeFilter.toLowerCase()} products.`
              : "You haven't submitted any products yet."}
          </p>
          <button
            onClick={() => setShowUploadForm(true)}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
          >
            Submit Your First Product
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div 
              key={product.id}
              className="glass-card p-6 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all relative"
            >
              <span className={`absolute top-4 right-4 px-2 py-1 ${getStatusColor(product.status)} text-[10px] font-bold rounded border`}>
                {product.status.toUpperCase()}
              </span>
              
              <div className="mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-40 rounded-xl object-cover mb-4"
                />
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-sm font-bold text-green-400">{product.commission}% commission</span>
                </div>
              </div>

              {product.status === 'Active' && (
                <div className="mb-4 p-3 bg-white/5 rounded-xl border border-white/5">
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="text-gray-500 mb-1">Sales</p>
                      <p className="font-bold text-purple-400">{product.sales.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Revenue</p>
                      <p className="font-bold text-green-400">${(product.revenue / 1000).toFixed(1)}k</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Clicks</p>
                      <p className="font-bold text-cyan-400">{product.clicks.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Conversion</p>
                      <p className="font-bold text-yellow-400">
                        {product.clicks > 0 ? ((product.conversions / product.clicks) * 100).toFixed(1) : 0}%
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-2 pt-4 border-t border-white/5">
                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setShowDrawer(true);
                  }}
                  className="flex-1 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold transition-all"
                >
                  View Details
                </button>
                <button className="flex-1 py-2 bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 rounded-lg text-xs font-bold transition-all">
                  Edit
                </button>
                {product.status === 'Active' ? (
                  <button className="px-4 py-2 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-lg text-xs font-bold transition-all border border-red-500/20">
                    Pause
                  </button>
                ) : (
                  <button className="px-4 py-2 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-lg text-xs font-bold transition-all border border-red-500/20">
                    Delist
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

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
          onSubmit={(productData) => {
            console.log('Product submitted:', productData);
            setShowUploadForm(false);
            // In real app, this would add the product to the list
          }}
        />
      )}
    </div>
  );
};

export default MyProducts;

