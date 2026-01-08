import React, { useState } from 'react';
import { Product, AppRoute } from '../types';
import ProductDetailDrawer from '../components/ProductDetailDrawer';
import ProductUploadForm from '../components/ProductUploadForm';

interface ProductWithTags extends Product {
  tags: string[];
  avgMonthlyEarnings?: number;
  timeTo1K?: number; // months
  vendorCertification?: 'Basic' | 'Verified' | 'Premium' | null;
  certifications?: {
    qualityCertified?: boolean;
    securityCertified?: boolean;
    valueCertified?: boolean;
    trustCertified?: boolean;
  };
  vendor?: string;
}

const mockProducts: ProductWithTags[] = [
  { id: '1', name: 'NXC Trading Masterclass', category: 'Academy', price: 150, commission: 25, image: 'https://picsum.photos/seed/nxc1/400/300', status: 'Active', tags: ['🎯 High Commission', '👶 Beginner Friendly'], avgMonthlyEarnings: 375, timeTo1K: 2.7, vendorCertification: 'Premium', vendor: 'BitNexus Team', certifications: { qualityCertified: true, valueCertified: true, trustCertified: true } },
  { id: '2', name: 'Crypto Health Formula', category: 'Health', price: 85, commission: 40, image: 'https://picsum.photos/seed/nxc2/400/300', status: 'Active', tags: ['🔄 Recurring Income', '⚡ Quick Win', '🎯 High Commission'], avgMonthlyEarnings: 340, timeTo1K: 2.9, vendorCertification: 'Verified', vendor: 'Agent Nexus-42', certifications: { qualityCertified: true, valueCertified: true } },
  { id: '3', name: 'MEV Bot Pro License', category: 'Automation', price: 500, commission: 10, image: 'https://picsum.photos/seed/nxc3/400/300', status: 'Active', tags: ['🔄 Recurring Income'], avgMonthlyEarnings: 500, timeTo1K: 2.0, vendorCertification: 'Premium', vendor: 'Agent Nexus-15', certifications: { qualityCertified: true, securityCertified: true, valueCertified: true, trustCertified: true } },
  { id: '7', name: 'XAB Bot Pro License (XRP)', category: 'Automation', price: 550, commission: 10, image: 'https://picsum.photos/seed/nxc7/400/300', status: 'Active', tags: ['🔄 Recurring Income', '⚡ Quick Win'], avgMonthlyEarnings: 550, timeTo1K: 1.8, vendorCertification: 'Verified', vendor: 'Agent Nexus-88', certifications: { qualityCertified: true, securityCertified: true } },
  { id: '4', name: 'Elite Performance Apparel', category: 'Shop', price: 45, commission: 15, image: 'https://picsum.photos/seed/nxc4/400/300', status: 'Active', tags: ['⚡ Quick Win', '👶 Beginner Friendly'], avgMonthlyEarnings: 68, timeTo1K: 14.7, vendorCertification: 'Basic', vendor: 'Agent Nexus-91', certifications: { qualityCertified: true } },
  { id: '5', name: 'Nexus Private Node', category: 'Tech', price: 1200, commission: 5, image: 'https://picsum.photos/seed/nxc5/400/300', status: 'Active', tags: [], avgMonthlyEarnings: 600, timeTo1K: 1.7, vendorCertification: 'Premium', vendor: 'BitNexus Team', certifications: { qualityCertified: true, securityCertified: true, trustCertified: true } },
  { id: '6', name: 'Blockchain Marketing Kit', category: 'Marketing', price: 95, commission: 30, image: 'https://picsum.photos/seed/nxc6/400/300', status: 'Active', tags: ['🎯 High Commission', '⚡ Quick Win'], avgMonthlyEarnings: 285, timeTo1K: 3.5, vendorCertification: 'Verified', vendor: 'Agent Nexus-33', certifications: { qualityCertified: true, valueCertified: true } },
];

import ProductDetailDrawer from '../components/ProductDetailDrawer';
import ProductUploadForm from '../components/ProductUploadForm';

interface MarketplaceProps {
  setActiveRoute: (route: AppRoute) => void;
}

const Marketplace: React.FC<MarketplaceProps> = ({ setActiveRoute }) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<ProductWithTags | null>(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [activeTab, setActiveTab] = useState<'Overview' | 'Due Diligence'>('Overview');
  const [showAuditModal, setShowAuditModal] = useState<string | null>(null);
  const [showTransparencyLedgerModal, setShowTransparencyLedgerModal] = useState(false);

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
        <div className="flex gap-2 bg-white/5 p-1 rounded-2xl border border-white/5">
          {['Overview', 'Due Diligence'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex gap-2 bg-white/5 p-1 rounded-2xl border border-white/5">
          <button
            onClick={() => setActiveRoute(AppRoute.SHOP)}
            className="px-4 py-2 rounded-xl text-sm font-bold transition-all text-gray-400 hover:text-gray-200"
          >
            NXC Credits Shop
          </button>
          <button
            onClick={() => setActiveRoute(AppRoute.BOT_LAB)}
            className="px-4 py-2 rounded-xl text-sm font-bold transition-all text-gray-400 hover:text-gray-200"
          >
            Bot Lab
          </button>
          <button
            onClick={() => setActiveRoute(AppRoute.MY_PRODUCTS)}
            className="px-4 py-2 rounded-xl text-sm font-bold transition-all text-gray-400 hover:text-gray-200"
          >
            My Products
          </button>
          <button
            onClick={() => setShowUploadForm(true)}
            className="px-4 py-2 rounded-xl text-sm font-bold transition-all text-gray-400 hover:text-gray-200"
          >
            + Submit Product
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'Overview' && (
        <>
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

      {/* Smart Recommendations */}
      <div className="glass-card p-6 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-cyan-500/5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold font-display">🤖 AI-Powered Recommendations</h3>
          <span className="px-3 py-1 bg-purple-600/20 text-purple-400 border border-purple-500/30 rounded-full text-xs font-bold">For You</span>
        </div>
        <p className="text-sm text-gray-400 mb-4">Based on your network and performance, we recommend promoting these products:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockProducts.slice(0, 3).map(product => (
            <div key={product.id} className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover" />
                <div className="flex-1">
                  <h4 className="font-bold text-sm">{product.name}</h4>
                  <p className="text-xs text-gray-500">{product.commission}% commission</p>
                </div>
              </div>
              <div className="flex gap-2 mb-2">
                {product.tags.slice(0, 2).map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded text-[10px] font-bold">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => {
                  setSelectedProduct(product);
                  setShowDrawer(true);
                }}
                className="w-full py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-xs font-bold transition-all"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Commission Comparison Tool */}
      <div className="glass-card p-6 rounded-3xl border border-white/5">
        <h3 className="text-xl font-bold mb-4">Commission Comparison Tool</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left py-3 px-4 text-xs font-bold text-gray-500 uppercase">Product</th>
                <th className="text-center py-3 px-4 text-xs font-bold text-gray-500 uppercase">Commission</th>
                <th className="text-center py-3 px-4 text-xs font-bold text-gray-500 uppercase">Type</th>
                <th className="text-center py-3 px-4 text-xs font-bold text-gray-500 uppercase">Avg Earnings</th>
                <th className="text-center py-3 px-4 text-xs font-bold text-gray-500 uppercase">Demand</th>
              </tr>
            </thead>
            <tbody>
              {mockProducts.slice(0, 5).map((product, idx) => (
                <tr key={product.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover" />
                      <span className="font-bold text-sm">{product.name}</span>
                    </div>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="font-bold text-green-400">{product.commission}%</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      product.tags.includes('🔄 Recurring Income') 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                        : 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                    }`}>
                      {product.tags.includes('🔄 Recurring Income') ? 'Recurring' : 'One-time'}
                    </span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="font-bold text-cyan-400">${product.avgMonthlyEarnings || 0}/mo</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <div className="flex items-center justify-center gap-1">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i <= (idx % 3 + 3) ? 'bg-green-400' : 'bg-gray-700'}`}></div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map(product => (
          <div key={product.id} className="glass-card rounded-3xl overflow-hidden group hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
               <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute top-4 left-4 flex flex-col gap-2">
                 <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                   {product.category}
                 </span>
                 {product.vendorCertification && (
                   <span className={`px-2 py-1 rounded-full text-[9px] font-bold border ${
                     product.vendorCertification === 'Premium' ? 'bg-purple-500/80 text-white border-purple-400' :
                     product.vendorCertification === 'Verified' ? 'bg-cyan-500/80 text-white border-cyan-400' :
                     'bg-yellow-500/80 text-white border-yellow-400'
                   }`}>
                     {product.vendorCertification === 'Premium' ? '⭐ Premium Vendor' :
                      product.vendorCertification === 'Verified' ? '✅ Verified Vendor' :
                      '📦 Basic Vendor'}
                   </span>
                 )}
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
                {/* Product Certification Badges */}
                {product.certifications && (product.certifications.qualityCertified || product.certifications.securityCertified || product.certifications.valueCertified || product.certifications.trustCertified) && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {product.certifications.qualityCertified && (
                      <span className="px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded text-[10px] font-bold flex items-center gap-1" title="Quality Certified - Passed comprehensive quality review">
                        ✅ Quality
                      </span>
                    )}
                    {product.certifications.securityCertified && (
                      <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded text-[10px] font-bold flex items-center gap-1" title="Security Certified - Passed security assessment">
                        🔒 Security
                      </span>
                    )}
                    {product.certifications.valueCertified && (
                      <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded text-[10px] font-bold flex items-center gap-1" title="Value Certified - Exceptional value proposition">
                        💎 Value
                      </span>
                    )}
                    {product.certifications.trustCertified && (
                      <span className="px-2 py-0.5 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded text-[10px] font-bold flex items-center gap-1" title="Trust Certified - Verified vendor and reliable delivery">
                        ⭐ Trust
                      </span>
                    )}
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
      </>
      )}

      {activeTab === 'Due Diligence' && (
        <div className="space-y-6">
          {/* Research Process Section */}
          <div className="glass-card p-8 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-bold mb-4">Our Research Process</h3>
            <p className="text-gray-400 mb-6">
              Every product in the BitNexus marketplace undergoes comprehensive research and evaluation using our proprietary research methodology. We ensure that only high-quality, secure, and valuable products are made available to our affiliates.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔬</span>
                  Our Research Recipe
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Comprehensive product analysis using our proprietary evaluation framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Security assessment and verification (if applicable to the product type)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Built-in security system evaluation for technical products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Market validation and competitive analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Value proposition and affiliate potential assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Continuous monitoring and re-evaluation</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🛡️</span>
                  Security Evaluation
                </h4>
                <p className="text-sm text-gray-300 mb-4">
                  For products with technical components, we conduct thorough security assessments:
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Security architecture review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Built-in security feature verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Vulnerability assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Compliance and best practices review</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Product Ranking System */}
          <div className="glass-card p-8 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-bold mb-4">Product Ranking System</h3>
            <p className="text-gray-400 mb-6">
              All products are graded using our comprehensive ranking system. Products are sorted in the catalog based on their grade, ensuring the highest quality products appear first.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
              {[
                { grade: 'S', color: 'from-purple-600 to-pink-600', desc: 'Exceptional' },
                { grade: 'A+', color: 'from-green-500 to-emerald-500', desc: 'Excellent' },
                { grade: 'A', color: 'from-green-400 to-cyan-500', desc: 'Very Good' },
                { grade: 'A-', color: 'from-cyan-400 to-blue-500', desc: 'Good' },
                { grade: 'B+', color: 'from-blue-400 to-indigo-500', desc: 'Above Average' },
                { grade: 'B', color: 'from-indigo-400 to-purple-500', desc: 'Average' },
                { grade: 'B-', color: 'from-purple-400 to-pink-500', desc: 'Below Average' },
                { grade: 'C+', color: 'from-yellow-400 to-orange-500', desc: 'Fair' },
                { grade: 'C', color: 'from-orange-400 to-red-500', desc: 'Poor' },
                { grade: 'C-', color: 'from-red-400 to-pink-500', desc: 'Very Poor' },
                { grade: 'D', color: 'from-red-500 to-red-600', desc: 'Failing' },
                { grade: 'F', color: 'from-gray-600 to-gray-800', desc: 'Unacceptable' },
              ].map((item) => (
                <div 
                  key={item.grade}
                  className={`p-4 rounded-xl border border-white/5 bg-gradient-to-br ${item.color} bg-opacity-10 text-center`}
                >
                  <div className={`text-2xl font-bold mb-1 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.grade}
                  </div>
                  <div className="text-xs text-gray-400">{item.desc}</div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
              <p className="text-sm text-cyan-400 font-bold mb-1">📊 Grading Criteria</p>
              <p className="text-xs text-gray-300">
                Products are evaluated based on: Quality, Security (if applicable), Value Proposition, Affiliate Potential, Market Demand, User Reviews, and Compliance. 
                Only products graded B- or higher are featured in the main catalog.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="glass-card p-8 rounded-3xl space-y-4">
                <h3 className="text-2xl font-bold">Project Audits</h3>
                <p className="text-gray-400">View detailed reports from third-party security firms regarding our smart contracts and MEV/XAB bot logic.</p>
                <div className="space-y-2">
                   {['CertiK Audit 2024', 'OpenZeppelin Report', 'KPMG Fintech Review'].map(d => (
                     <div 
                       key={d} 
                       onClick={() => setShowAuditModal(d)}
                       className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer"
                     >
                        <span className="font-medium">{d}</span>
                        <span className="text-cyan-400 text-xs font-bold">DOWNLOAD PDF</span>
                     </div>
                   ))}
                </div>
             </div>
             <div className="glass-card p-8 rounded-3xl space-y-4">
                <h3 className="text-2xl font-bold">Transparency Ledger</h3>
                <div className="p-4 bg-black/40 rounded-2xl font-mono text-xs text-green-400 overflow-hidden leading-relaxed">
                   [BLOCK_SYNC] 0x82...12A verified at 14:02:11<br/>
                   [BOT_PROFIT] +0.124 NXC added to Liquidity Pool<br/>
                   [SYSTEM] Integrity check PASSED (99.98%)<br/>
                   [AUDIT] Continuous monitoring active...
                </div>
                <button 
                  onClick={() => setShowTransparencyLedgerModal(true)}
                  className="w-full py-4 bg-white/5 rounded-2xl font-bold hover:bg-white/10 transition-colors"
                >
                  View On-Chain Ledger
                </button>
             </div>
          </div>

          {/* ISO Certifications */}
          <div className="glass-card p-8 rounded-3xl space-y-4">
            <h3 className="text-2xl font-bold">Information Security Certifications</h3>
            <p className="text-gray-400">Formal certifications demonstrating our commitment to information security and privacy management for global affiliate programs.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                onClick={() => setShowAuditModal('ISO 27001')}
                className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🛡️</span>
                      <h4 className="font-bold text-lg">ISO/IEC 27001</h4>
                    </div>
                    <p className="text-xs text-cyan-400 font-bold">Information Security Management</p>
                  </div>
                  <span className="text-green-400 text-xs font-bold">CERTIFIED</span>
                </div>
                <p className="text-sm text-gray-400">
                  The single most important certification for global affiliate programs. Demonstrates formal information security controls, data protection, and risk management.
                </p>
                <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                  <span className="text-cyan-400 text-xs font-bold">VIEW CERTIFICATE</span>
                </div>
              </div>

              <div 
                onClick={() => setShowAuditModal('ISO 27701')}
                className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🔒</span>
                      <h4 className="font-bold text-lg">ISO/IEC 27701</h4>
                    </div>
                    <p className="text-xs text-cyan-400 font-bold">Privacy Information Management</p>
                  </div>
                  <span className="text-green-400 text-xs font-bold">CERTIFIED</span>
                </div>
                <p className="text-sm text-gray-400">
                  Extension of ISO 27001 focused on privacy. Provides formal governance of personal data, GDPR alignment, and privacy by design principles.
                </p>
                <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                  <span className="text-cyan-400 text-xs font-bold">VIEW CERTIFICATE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Information Section */}
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-2">Product Information</h3>
            <p className="text-gray-400 mb-6">Complete information about every product in the BitNexus ecosystem</p>
            
            <div className="space-y-4">
              {/* NXC Trading Masterclass */}
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <img src="https://picsum.photos/seed/nxc1/400/300" alt="NXC Trading Masterclass" className="w-20 h-20 rounded-xl object-cover" />
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1">NXC Trading Masterclass</h4>
                    <p className="text-sm text-gray-400 mb-3">Academy • $150 • 25% Commission</p>
                    <p className="text-sm text-gray-300">Comprehensive trading course covering cryptocurrency fundamentals, technical analysis, risk management, and advanced trading strategies. Includes lifetime access to course materials, community forum, and monthly live Q&A sessions.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Category</p>
                    <p className="font-bold">Academy</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Price</p>
                    <p className="font-bold text-green-400">$150</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Commission</p>
                    <p className="font-bold text-cyan-400">25%</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Status</p>
                    <p className="font-bold text-green-400">Active</p>
                  </div>
                </div>
              </div>

              {/* Crypto Health Formula */}
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <img src="https://picsum.photos/seed/nxc2/400/300" alt="Crypto Health Formula" className="w-20 h-20 rounded-xl object-cover" />
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1">Crypto Health Formula</h4>
                    <p className="text-sm text-gray-400 mb-3">Health • $85 • 40% Commission</p>
                    <p className="text-sm text-gray-300">A comprehensive health and wellness program designed for crypto traders and digital nomads. Includes nutrition plans, exercise routines, stress management techniques, and ergonomic workspace setup guides.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Category</p>
                    <p className="font-bold">Health</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Price</p>
                    <p className="font-bold text-green-400">$85</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Commission</p>
                    <p className="font-bold text-cyan-400">40%</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Status</p>
                    <p className="font-bold text-green-400">Active</p>
                  </div>
                </div>
              </div>

              {/* MEV Bot Pro License */}
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <img src="https://picsum.photos/seed/nxc3/400/300" alt="MEV Bot Pro License" className="w-20 h-20 rounded-xl object-cover" />
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1">MEV Bot Pro License</h4>
                    <p className="text-sm text-gray-400 mb-3">Automation • $500 • 10% Commission</p>
                    <p className="text-sm text-gray-300">Professional-grade MEV (Maximal Extractable Value) bot for automated trading on Ethereum and other EVM chains. Features advanced arbitrage detection, gas optimization, and real-time monitoring dashboard.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Category</p>
                    <p className="font-bold">Automation</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Price</p>
                    <p className="font-bold text-green-400">$500</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Commission</p>
                    <p className="font-bold text-cyan-400">10%</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Status</p>
                    <p className="font-bold text-green-400">Active</p>
                  </div>
                </div>
              </div>

              {/* XAB Bot Pro License (XRP) */}
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <img src="https://picsum.photos/seed/nxc7/400/300" alt="XAB Bot Pro License" className="w-20 h-20 rounded-xl object-cover" />
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1">XAB Bot Pro License (XRP)</h4>
                    <p className="text-sm text-gray-400 mb-3">Automation • $550 • 10% Commission</p>
                    <p className="text-sm text-gray-300">Specialized automated trading bot for XRP (Ripple) network. Optimized for XRP Ledger transactions with low fees and fast execution. Includes staking capabilities and passive income generation.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Category</p>
                    <p className="font-bold">Automation</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Price</p>
                    <p className="font-bold text-green-400">$550</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Commission</p>
                    <p className="font-bold text-cyan-400">10%</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Status</p>
                    <p className="font-bold text-green-400">Active</p>
                  </div>
                </div>
              </div>

              {/* Elite Performance Apparel */}
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <img src="https://picsum.photos/seed/nxc4/400/300" alt="Elite Performance Apparel" className="w-20 h-20 rounded-xl object-cover" />
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1">Elite Performance Apparel</h4>
                    <p className="text-sm text-gray-400 mb-3">Shop • $45 • 15% Commission</p>
                    <p className="text-sm text-gray-300">Premium branded merchandise including t-shirts, hoodies, and accessories featuring BitNexus branding. High-quality materials with modern designs perfect for crypto enthusiasts and affiliate marketers.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Category</p>
                    <p className="font-bold">Shop</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Price</p>
                    <p className="font-bold text-green-400">$45</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Commission</p>
                    <p className="font-bold text-cyan-400">15%</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Status</p>
                    <p className="font-bold text-green-400">Active</p>
                  </div>
                </div>
              </div>

              {/* Nexus Private Node */}
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <img src="https://picsum.photos/seed/nxc5/400/300" alt="Nexus Private Node" className="w-20 h-20 rounded-xl object-cover" />
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1">Nexus Private Node</h4>
                    <p className="text-sm text-gray-400 mb-3">Tech • $1,200 • 5% Commission</p>
                    <p className="text-sm text-gray-300">Dedicated blockchain node infrastructure for high-frequency trading and MEV operations. Includes 24/7 monitoring, automatic failover, and priority support. Ideal for professional traders and institutions.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Category</p>
                    <p className="font-bold">Tech</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Price</p>
                    <p className="font-bold text-green-400">$1,200</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Commission</p>
                    <p className="font-bold text-cyan-400">5%</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Status</p>
                    <p className="font-bold text-green-400">Active</p>
                  </div>
                </div>
              </div>

              {/* Blockchain Marketing Kit */}
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <img src="https://picsum.photos/seed/nxc6/400/300" alt="Blockchain Marketing Kit" className="w-20 h-20 rounded-xl object-cover" />
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1">Blockchain Marketing Kit</h4>
                    <p className="text-sm text-gray-400 mb-3">Marketing • $95 • 30% Commission</p>
                    <p className="text-sm text-gray-300">Complete marketing toolkit for crypto and blockchain projects. Includes social media templates, email sequences, landing page designs, ad copy, and conversion optimization guides.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Category</p>
                    <p className="font-bold">Marketing</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Price</p>
                    <p className="font-bold text-green-400">$95</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Commission</p>
                    <p className="font-bold text-cyan-400">30%</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Status</p>
                    <p className="font-bold text-green-400">Active</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          onSubmit={(product) => {
            console.log('Product submitted:', product);
            // In real app, this would submit to API
            setShowUploadForm(false);
          }}
        />
      )}

      {/* Audit/Certification Modal */}
      {showAuditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowAuditModal(null)} />
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-white/5 z-10">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold font-display">{showAuditModal}</h2>
                  <p className="text-gray-500 text-sm mt-1">
                    {showAuditModal === 'CertiK Audit 2024' && 'Smart Contract Security Audit'}
                    {showAuditModal === 'OpenZeppelin Report' && 'Security Review & Best Practices'}
                    {showAuditModal === 'KPMG Fintech Review' && 'Financial Compliance & Risk Assessment'}
                    {showAuditModal === 'ISO 27001' && 'Information Security Management System (ISMS)'}
                    {showAuditModal === 'ISO 27701' && 'Privacy Information Management System (PIMS)'}
                  </p>
                </div>
                <button
                  onClick={() => setShowAuditModal(null)}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                {/* ISO 27001 Content */}
                {showAuditModal === 'ISO 27001' && (
                  <>
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                      <p className="text-green-400 font-bold mb-1">✅ CERTIFIED - January 2025</p>
                      <p className="text-xs text-gray-400">Information Security Management System</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-lg mb-2">What It Proves</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Formal information security controls are in place</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Affiliate data, payout data, and tracking information are protected</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Access control, incident response, and risk management are formally managed</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Comprehensive security framework for all platform operations</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Why It Matters</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span><strong>Critical for Global Programs:</strong> The single most important certification for a global affiliate program</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span><strong>Enterprise Requirement:</strong> Often requested during affiliate onboarding</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span><strong>Trust Builder:</strong> Builds trust with enterprise publishers and networks</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span><strong>Risk Reduction:</strong> Reduces legal and reputational risk from data breaches</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                        <p className="text-purple-400 font-bold text-sm">💡 Recommendation: If choosing only one certification → ISO 27001 is essential</p>
                      </div>
                    </div>
                  </>
                )}

                {/* ISO 27701 Content */}
                {showAuditModal === 'ISO 27701' && (
                  <>
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                      <p className="text-green-400 font-bold mb-1">✅ CERTIFIED - January 2025</p>
                      <p className="text-xs text-gray-400">Privacy Information Management System (Extension of ISO 27001)</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-lg mb-2">What It Adds</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Formal governance of personal data</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Clear controller/processor responsibilities</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Stronger alignment with GDPR and global privacy laws</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Privacy by design principles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Data subject rights management</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Why It Matters</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span><strong>EU-Focused Markets:</strong> Especially valuable for EU-focused or privacy-sensitive markets</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span><strong>Maturity Indicator:</strong> Shows maturity beyond "basic compliance"</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span><strong>Regulated Industries:</strong> Increasingly requested in regulated industries</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span><strong>Competitive Differentiator:</strong> Not mandatory, but a strong differentiator</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span><strong>Future-Proofing:</strong> Prepares platform for evolving privacy regulations</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                {/* CertiK Audit 2024 Content */}
                {showAuditModal === 'CertiK Audit 2024' && (
                  <>
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                      <p className="text-green-400 font-bold mb-1">✅ PASSED - December 2024</p>
                      <p className="text-xs text-gray-400">Smart Contract Security Audit • 99.98% Security Score</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-lg mb-2">Scope</h3>
                        <p className="text-sm text-gray-300 mb-3">Smart Contract Security Audit - 12 Smart Contracts Audited</p>
                        <h4 className="font-bold text-sm mb-2 text-cyan-400">Focus Areas</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>Smart contract logic and implementation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>MEV bot trading algorithms</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>XAB bot staking mechanisms</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>Token distribution and affiliate reward systems</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>Access control and permission management</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Key Findings</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Zero critical vulnerabilities found</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Robust security architecture</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Comprehensive access controls</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Well-tested smart contract logic</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>All identified issues resolved</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                {/* OpenZeppelin Report Content */}
                {showAuditModal === 'OpenZeppelin Report' && (
                  <>
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                      <p className="text-green-400 font-bold mb-1">✅ APPROVED - November 2024</p>
                      <p className="text-xs text-gray-400">Security Review & Best Practices • 8 Core Contracts Audited</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-lg mb-2">Scope</h3>
                        <p className="text-sm text-gray-300 mb-3">Security Review & Best Practices Assessment</p>
                        <h4 className="font-bold text-sm mb-2 text-cyan-400">Focus Areas</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>Code quality and best practices</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>Reentrancy vulnerabilities</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>Access control patterns</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>Gas optimization opportunities</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>Upgradeability patterns</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Key Findings</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Clean code structure</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Proper use of OpenZeppelin libraries</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Adherence to security best practices</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>No reentrancy vulnerabilities detected</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Recommendations</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>Continue regular security audits</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>Implement additional monitoring tools</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>Maintain documentation updates</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                {/* KPMG Fintech Review Content */}
                {showAuditModal === 'KPMG Fintech Review' && (
                  <>
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                      <p className="text-green-400 font-bold mb-1">✅ COMPLIANT - January 2025</p>
                      <p className="text-xs text-gray-400">Financial Compliance & Risk Assessment • All Systems Reviewed</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-lg mb-2">Scope</h3>
                        <p className="text-sm text-gray-300 mb-3">Financial Compliance & Risk Assessment - Comprehensive Review</p>
                        <h4 className="font-bold text-sm mb-2 text-cyan-400">Focus Areas</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>Regulatory compliance framework</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>AML/KYC procedures</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>Financial reporting standards</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>Risk management practices</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>Data protection and privacy</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Key Findings</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Strong compliance framework</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Transparent reporting mechanisms</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Comprehensive risk management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Meets all regulatory requirements</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Recommendations</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>Enhance KYC procedures</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>Expand compliance training</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>Implement additional fraud detection measures</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                <div className="pt-4 border-t border-white/5">
                  <button
                    onClick={() => {
                      alert('Downloading ' + showAuditModal + ' certificate/report...');
                    }}
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all"
                  >
                    Download {showAuditModal === 'ISO 27001' || showAuditModal === 'ISO 27701' ? 'Certificate' : 'Report'} (PDF)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;

