import React, { useState } from 'react';
import { ICONS } from '../constants';
import { useNotifications } from '../contexts/NotificationContext';

interface Product {
  id: string;
  name: string;
  category: string;
  submitter: string;
  submitted: string;
  price: number;
  votesFor?: number;
  votesAgainst?: number;
  approvalRate?: number;
  userVote?: 'approve' | 'reject' | null;
  status?: string;
  approved?: string;
  rejected?: string;
  reason?: string;
  description?: string;
  features?: string[];
  requirements?: string[];
}

const Vetting: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pending' | 'community' | 'approved' | 'rejected'>('pending');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const { addNotification } = useNotifications();

  const [pendingItems, setPendingItems] = useState<Product[]>([
    { 
      id: '1', 
      name: 'Crypto Trading Bot Pro', 
      category: 'Trading Tools', 
      submitter: 'Agent Nexus-99', 
      submitted: '2 hours ago', 
      price: 299,
      votesFor: 0,
      votesAgainst: 0,
      userVote: null,
      description: 'Advanced cryptocurrency trading bot with AI-powered market analysis and automated trading strategies.',
      features: ['AI Market Analysis', 'Automated Trading', 'Risk Management', 'Multi-Exchange Support'],
      requirements: ['Verified Account', 'Minimum $1000 Balance']
    },
    { 
      id: '2', 
      name: 'AI Content Generator', 
      category: 'Marketing', 
      submitter: 'Agent Nexus-55', 
      submitted: '5 hours ago', 
      price: 149,
      votesFor: 0,
      votesAgainst: 0,
      userVote: null,
      description: 'AI-powered content generation tool for creating marketing materials, social media posts, and blog content.',
      features: ['AI Content Generation', 'Multiple Templates', 'SEO Optimization', 'Brand Voice Customization'],
      requirements: ['Active Subscription', 'Content Guidelines Compliance']
    },
    { 
      id: '3', 
      name: 'Portfolio Tracker Plus', 
      category: 'Analytics', 
      submitter: 'Agent Nexus-22', 
      submitted: '1 day ago', 
      price: 199,
      votesFor: 0,
      votesAgainst: 0,
      userVote: null,
      description: 'Comprehensive portfolio tracking and analytics tool for monitoring cryptocurrency investments and performance.',
      features: ['Real-Time Tracking', 'Performance Analytics', 'Tax Reporting', 'Multi-Wallet Support'],
      requirements: ['API Access', 'Wallet Connection']
    },
  ]);

  const [communityItems, setCommunityItems] = useState<Product[]>([
    { 
      id: '4', 
      name: 'MEV Bot Pro License', 
      category: 'Trading Tools', 
      submitter: 'Agent Nexus-88', 
      submitted: '3 days ago', 
      price: 499,
      votesFor: 124,
      votesAgainst: 23,
      approvalRate: 84,
      userVote: 'approve' as 'approve' | 'reject' | null,
      status: 'community-review'
    },
    { 
      id: '5', 
      name: 'Staking Pool Manager', 
      category: 'DeFi', 
      submitter: 'Agent Nexus-42', 
      submitted: '5 days ago', 
      price: 349,
      votesFor: 89,
      votesAgainst: 45,
      approvalRate: 66,
      userVote: null,
      status: 'community-review'
    },
  ]);

  const [approvedItems, setApprovedItems] = useState<Product[]>([
    { id: '6', name: 'Nexus Node License', category: 'Infrastructure', submitter: 'Agent Nexus-Admin', approved: '3 days ago', price: 499 },
  ]);

  const [rejectedItems, setRejectedItems] = useState<Product[]>([
    { id: '7', name: 'Suspicious Tool', category: 'Unknown', submitter: 'Agent Nexus-11', rejected: '1 week ago', reason: 'Security concerns' },
  ]);

  const handleApprove = (product: Product, e?: any) => {
    // Prevent event bubbling
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    
    // Remove from pending - only remove the specific product by ID
    setPendingItems(prev => {
      const filtered = prev.filter(p => p.id !== product.id);
      console.log('Approving product:', product.id, 'Remaining:', filtered.length);
      return filtered;
    });
    
    // Add to approved with timestamp
    const approvedProduct: Product = {
      ...product,
      approved: 'just now'
    };
    setApprovedItems(prev => [...prev, approvedProduct]);
    
    // Switch to approved tab
    setActiveTab('approved');
    
    // Show notification
    addNotification({
      type: 'success',
      title: 'Product Approved',
      message: `${product.name} has been approved and moved to the marketplace.`,
    });
  };

  const handleReject = (product: Product, e?: any) => {
    // Prevent event bubbling
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    
    // Remove from pending - only remove the specific product by ID
    setPendingItems(prev => {
      const filtered = prev.filter(p => p.id !== product.id);
      console.log('Rejecting product:', product.id, 'Remaining:', filtered.length);
      return filtered;
    });
    
    // Add to rejected with timestamp and reason
    const rejectedProduct: Product = {
      ...product,
      rejected: 'just now',
      reason: 'Does not meet quality standards'
    };
    setRejectedItems(prev => [...prev, rejectedProduct]);
    
    // Switch to rejected tab
    setActiveTab('rejected');
    
    // Show notification
    addNotification({
      type: 'error',
      title: 'Product Rejected',
      message: `${product.name} has been rejected. Reason: ${rejectedProduct.reason}`,
    });
  };

  const handleReview = (product: Product) => {
    setSelectedProduct(product);
    setShowReviewModal(true);
  };

  const handleCloseReviewModal = () => {
    setShowReviewModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-display">Admin Vetting</h2>
          <p className="text-gray-500 text-sm">Review queue for marketplace submissions and product quality control</p>
        </div>
      </div>

      {/* Eligibility Notice */}
      <div className="glass-card p-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
        <div className="flex items-center gap-3">
          <span className="text-2xl">✅</span>
          <div>
            <p className="font-bold text-cyan-400 mb-1">You're eligible to review products!</p>
            <p className="text-sm text-gray-400">As a verified user, you can vote on product approvals in the Community Review queue</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 bg-white/5 p-1 rounded-2xl border border-white/5 overflow-x-auto scrollbar-hide">
        {[
          { id: 'pending', label: 'Admin Review', count: pendingItems.length },
          { id: 'community', label: 'Community Review', count: communityItems.length },
          { id: 'approved', label: 'Approved', count: approvedItems.length },
          { id: 'rejected', label: 'Rejected', count: rejectedItems.length },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {activeTab === 'community' && (
        <div className="space-y-4">
          {communityItems.map((item) => (
            <div key={item.id} className="glass-card p-6 rounded-3xl border border-purple-500/30">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full text-xs font-bold">
                      COMMUNITY REVIEW
                    </span>
                    {item.approvalRate >= 70 && (
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-xs font-bold">
                        {item.approvalRate}% Approval
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                    <div>
                      <p className="text-gray-500">Category</p>
                      <p className="font-bold">{item.category}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Price</p>
                      <p className="font-bold">${item.price}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Submitted by</p>
                      <p className="font-bold">{item.submitter}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Submitted</p>
                      <p className="font-bold">{item.submitted}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">Votes For:</span>
                          <span className="text-lg font-bold text-green-400">{item.votesFor}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">Votes Against:</span>
                          <span className="text-lg font-bold text-red-400">{item.votesAgainst}</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" 
                        style={{ width: `${item.approvalRate}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500">
                      Approval threshold: 70%+ positive votes required
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {!item.userVote ? (
                    <>
                      <button 
                        onClick={() => {
                          setCommunityItems(prev => prev.map(p => 
                            p.id === item.id 
                              ? { 
                                  ...p, 
                                  userVote: 'approve' as const,
                                  votesFor: (p.votesFor || 0) + 1,
                                  approvalRate: p.votesFor && p.votesAgainst 
                                    ? Math.round(((p.votesFor + 1) / ((p.votesFor + 1) + p.votesAgainst)) * 100)
                                    : 100
                                }
                              : p
                          ));
                          addNotification({
                            type: 'success',
                            title: 'Vote Submitted',
                            message: `You voted to approve ${item.name}`,
                          });
                        }}
                        className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-xl font-bold text-sm transition-all"
                      >
                        Vote Approve
                      </button>
                      <button 
                        onClick={() => {
                          setCommunityItems(prev => prev.map(p => 
                            p.id === item.id 
                              ? { 
                                  ...p, 
                                  userVote: 'reject' as const,
                                  votesAgainst: (p.votesAgainst || 0) + 1,
                                  approvalRate: p.votesFor && p.votesAgainst 
                                    ? Math.round((p.votesFor / (p.votesFor + (p.votesAgainst + 1))) * 100)
                                    : 0
                                }
                              : p
                          ));
                          addNotification({
                            type: 'info',
                            title: 'Vote Submitted',
                            message: `You voted to reject ${item.name}`,
                          });
                        }}
                        className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-xl font-bold text-sm transition-all"
                      >
                        Vote Reject
                      </button>
                    </>
                  ) : (
                    <div className="px-4 py-2 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-xl text-sm font-bold text-center">
                      You voted {item.userVote.toUpperCase()}
                    </div>
                  )}
                  <button 
                    onClick={() => handleReview(item)}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-sm transition-all"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'pending' && (
        <div className="space-y-4">
          {pendingItems.map((item) => (
            <div key={item.id} className="glass-card p-6 rounded-3xl border border-yellow-500/30">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full text-xs font-bold">
                      PENDING
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Category</p>
                      <p className="font-bold">{item.category}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Price</p>
                      <p className="font-bold">${item.price}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Submitted by</p>
                      <p className="font-bold">{item.submitter}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Submitted</p>
                      <p className="font-bold">{item.submitted}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={(e) => handleApprove(item, e)}
                    className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-xl font-bold text-sm transition-all"
                  >
                    Approve
                  </button>
                  <button 
                    onClick={(e) => handleReject(item, e)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-xl font-bold text-sm transition-all"
                  >
                    Reject
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReview(item);
                    }}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-sm transition-all"
                  >
                    Review
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'approved' && (
        <div className="space-y-4">
          {approvedItems.map((item) => (
            <div key={item.id} className="glass-card p-6 rounded-3xl border border-green-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-xs font-bold">
                      APPROVED
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">Approved {item.approved} • ${item.price}</p>
                </div>
                <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-sm transition-all">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'rejected' && (
        <div className="space-y-4">
          {rejectedItems.map((item) => (
            <div key={item.id} className="glass-card p-6 rounded-3xl border border-red-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-xs font-bold">
                      REJECTED
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">Rejected {item.rejected} • Reason: {item.reason}</p>
                </div>
                <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-sm transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Review Modal */}
      {showReviewModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">{selectedProduct.name}</h3>
                <p className="text-gray-500 text-sm mt-1">Product Review Details</p>
              </div>
              <button
                onClick={handleCloseReviewModal}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Product Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Category</p>
                  <p className="font-bold">{selectedProduct.category}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Price</p>
                  <p className="font-bold text-green-400">${selectedProduct.price}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Submitted by</p>
                  <p className="font-bold">{selectedProduct.submitter}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Submitted</p>
                  <p className="font-bold">{selectedProduct.submitted}</p>
                </div>
              </div>

              {/* Description */}
              {selectedProduct.description && (
                <div>
                  <h4 className="font-bold text-lg mb-3">Description</h4>
                  <p className="text-gray-300 bg-white/5 p-4 rounded-xl">{selectedProduct.description}</p>
                </div>
              )}

              {/* Features */}
              {selectedProduct.features && selectedProduct.features.length > 0 && (
                <div>
                  <h4 className="font-bold text-lg mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProduct.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-3 bg-white/5 rounded-xl">
                        <span className="text-green-400">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Requirements */}
              {selectedProduct.requirements && selectedProduct.requirements.length > 0 && (
                <div>
                  <h4 className="font-bold text-lg mb-3">Requirements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProduct.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-3 bg-white/5 rounded-xl">
                        <span className="text-yellow-400">⚠</span>
                        <span className="text-gray-300">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-white/10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (selectedProduct) {
                      handleApprove(selectedProduct, e);
                      handleCloseReviewModal();
                    }
                  }}
                  className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-500 rounded-xl font-bold transition-all"
                >
                  Approve Product
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (selectedProduct) {
                      handleReject(selectedProduct, e);
                      handleCloseReviewModal();
                    }
                  }}
                  className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-500 rounded-xl font-bold transition-all"
                >
                  Reject Product
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCloseReviewModal();
                  }}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-bold transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vetting;



