import React, { useState } from 'react';
import { AppRoute } from '../types';
import { ICONS } from '../constants';

interface GettingStartedModalProps {
  onClose: () => void;
  setActiveRoute: (route: AppRoute) => void;
}

const GettingStartedModal: React.FC<GettingStartedModalProps> = ({ onClose, setActiveRoute }) => {
  const [activeSection, setActiveSection] = useState<'overview' | 'flow' | 'video' | 'resources'>('overview');
  const [openModal, setOpenModal] = useState<string | null>(null);

  const resourceInfo = {
    'getting-started': {
      title: 'Getting Started Guide (PDF)',
      description: 'Complete onboarding manual',
      info: `This comprehensive guide covers everything you need to know to get started with BitNexus. It includes:

• Platform overview and key features
• Step-by-step account setup
• Dashboard navigation guide
• Creating your first affiliate link
• Using the Content Generator
• Building your network
• Setting up passive income
• Best practices and tips
• Troubleshooting common issues

Perfect for new users who want a complete reference guide to keep handy while learning the platform.`,
      icon: '📘',
      bgColor: 'bg-red-500/20',
      iconColor: 'text-red-400'
    },
    'user-flow': {
      title: 'User Flow Diagram (PDF)',
      description: 'Visual navigation guide',
      info: `This visual diagram shows the complete user journey through the BitNexus platform. It includes:

• Entry points and authentication flow
• Main navigation paths
• Feature access flows
• Decision points and branching paths
• Conversion funnels
• State transitions
• Error handling flows

Ideal for understanding how different features connect and the optimal paths to achieve your goals. Great for visual learners and those who want to see the big picture.`,
      icon: '📊',
      bgColor: 'bg-blue-500/20',
      iconColor: 'text-blue-400'
    },
    'quick-reference': {
      title: 'Quick Reference Card (PDF)',
      description: 'Keyboard shortcuts & tips',
      info: `A handy one-page reference card with essential information for quick access. Includes:

• Keyboard shortcuts for common actions
• Quick navigation tips
• Essential commands and shortcuts
• Platform hotkeys
• Time-saving tips and tricks
• Common workflows
• Quick links to key features

Perfect for printing and keeping on your desk for quick reference while using the platform.`,
      icon: '⚡',
      bgColor: 'bg-green-500/20',
      iconColor: 'text-green-400'
    },
    'glossary': {
      title: 'Platform Glossary (PDF)',
      description: 'Terms and definitions',
      info: `A comprehensive glossary of all BitNexus platform terms and definitions. Covers:

• Platform-specific terminology
• Cryptocurrency and DeFi terms
• Affiliate marketing definitions
• Network building concepts
• Bot staking terminology
• NXC Credits explanations
• Technical terms and acronyms
• Industry jargon explained

Essential for understanding all platform communications, documentation, and community discussions.`,
      icon: '📚',
      bgColor: 'bg-purple-500/20',
      iconColor: 'text-purple-400'
    }
  };

  const handleDownload = (resourceId: string) => {
    setOpenModal(null);
    alert(`Downloading ${resourceInfo[resourceId as keyof typeof resourceInfo].title}...`);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 overflow-y-auto">
      <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 max-w-6xl w-full max-h-[95vh] overflow-y-auto my-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-display">Getting Started with BitNexus</h2>
            <p className="text-gray-500 text-sm">Your complete guide to the BitNexus platform</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="glass-card p-4 rounded-2xl border border-white/5 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold">Course Progress</span>
            <span className="text-sm font-bold text-cyan-400">0%</span>
          </div>
          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-600 to-cyan-500" style={{ width: '0%' }} />
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 bg-white/5 p-1 rounded-xl border border-white/5 mb-6">
          <button
            onClick={() => setActiveSection('overview')}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
              activeSection === 'overview'
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveSection('flow')}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
              activeSection === 'flow'
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            User Flow
          </button>
          <button
            onClick={() => setActiveSection('video')}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
              activeSection === 'video'
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Video Guide
          </button>
          <button
            onClick={() => setActiveSection('resources')}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
              activeSection === 'resources'
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Resources
          </button>
        </div>

        {/* Content Sections - Simplified for Modal */}
        <div className="space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Overview Section */}
          {activeSection === 'overview' && (
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl border border-white/5">
                <h3 className="text-xl font-bold mb-4">Welcome to BitNexus</h3>
                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed text-sm">
                    BitNexus is a decentralized affiliate revenue platform designed to help you achieve financial freedom through multiple income streams. This comprehensive onboarding guide will walk you through everything you need to know to get started.
                  </p>
                  
                  <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                    <h4 className="font-bold text-purple-400 mb-2">What You'll Learn</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">✓</span>
                        <span>Understanding the BitNexus platform architecture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">✓</span>
                        <span>Navigating the user interface and key features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">✓</span>
                        <span>Setting up your first affiliate links</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">✓</span>
                        <span>Understanding income streams and revenue opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">✓</span>
                        <span>Building your network and scaling your earnings</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-center">
                      <div className="text-xl mb-1">🎯</div>
                      <h4 className="font-bold text-xs mb-1">Quick Start</h4>
                      <p className="text-[10px] text-gray-400">Get up and running in minutes</p>
                    </div>
                    <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-center">
                      <div className="text-xl mb-1">💰</div>
                      <h4 className="font-bold text-xs mb-1">Earn Income</h4>
                      <p className="text-[10px] text-gray-400">Multiple revenue streams available</p>
                    </div>
                    <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-center">
                      <div className="text-xl mb-1">🚀</div>
                      <h4 className="font-bold text-xs mb-1">Scale Fast</h4>
                      <p className="text-[10px] text-gray-400">Build your network and grow</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-white/5">
                <h3 className="text-xl font-bold mb-4">Platform Overview</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-white/5 rounded-xl">
                    <h4 className="font-bold mb-1 text-sm flex items-center gap-2">
                      <ICONS.Dashboard />
                      Dashboard
                    </h4>
                    <p className="text-xs text-gray-400">
                      Your financial headquarters. Track earnings, view performance metrics, and monitor your progress toward financial freedom.
                    </p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl">
                    <h4 className="font-bold mb-1 text-sm flex items-center gap-2">
                      <ICONS.Marketplace />
                      Marketplace
                    </h4>
                    <p className="text-xs text-gray-400">
                      Discover products to promote, generate affiliate links, and access marketing assets. Find high-commission opportunities.
                    </p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl">
                    <h4 className="font-bold mb-1 text-sm flex items-center gap-2">
                      <ICONS.Earn />
                      Earn (Bot Lab)
                    </h4>
                    <p className="text-xs text-gray-400">
                      Passive income through MEV Bot and XAB Bot staking. Set up automated trading nodes and earn 10-15% APY.
                    </p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl">
                    <h4 className="font-bold mb-1 text-sm flex items-center gap-2">
                      <ICONS.Alliance />
                      Alliance Network
                    </h4>
                    <p className="text-xs text-gray-400">
                      Build your network, earn team commissions, and scale through the MLM structure. Track referrals and network growth.
                    </p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl">
                    <h4 className="font-bold mb-1 text-sm flex items-center gap-2">
                      <ICONS.ContentGenerator />
                      Content Generator
                    </h4>
                    <p className="text-xs text-gray-400">
                      AI-powered content creation for social media. Generate posts, stories, and videos optimized for multiple platforms.
                    </p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl">
                    <h4 className="font-bold mb-1 text-sm flex items-center gap-2">
                      <ICONS.Academy />
                      Academy
                    </h4>
                    <p className="text-xs text-gray-400">
                      Learn proven strategies through structured learning paths, live events, and comprehensive courses. Achieve financial freedom systematically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* User Flow Section - Simplified */}
          {activeSection === 'flow' && (
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold mb-4">BitNexus User Flow</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <p>1. Landing Page & Signup → Create your account</p>
                <p>2. Registration & Onboarding → Set up your profile</p>
                <p>3. Dashboard Overview → Explore your financial overview</p>
                <p>4. Marketplace Exploration → Discover products to promote</p>
                <p>5. Generate Affiliate Links → Create your unique links</p>
                <p>6. Content Creation → Use AI to generate content</p>
                <p>7. Share & Promote → Distribute across platforms</p>
                <p>8. Build Your Network → Invite others and earn commissions</p>
                <p>9. Passive Income Setup → Configure bot staking</p>
                <p>10. Scale & Optimize → Continue learning and growing</p>
              </div>
            </div>
          )}

          {/* Video Guide Section */}
          {activeSection === 'video' && (
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold mb-4">Video Tutorial</h3>
              <div className="aspect-video bg-white/5 rounded-xl border border-white/5 mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 font-bold text-sm mb-1">Getting Started Video</p>
                  <p className="text-xs text-gray-500">Complete platform walkthrough</p>
                  <button className="mt-3 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-xs transition-all">
                    Play Video
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Resources Section */}
          {activeSection === 'resources' && (
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold mb-4">Downloadable Resources</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(resourceInfo).map(([key, resource]) => (
                  <div key={key} className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg ${resource.bgColor} flex items-center justify-center text-xl`}>
                        {resource.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm">{resource.title}</h4>
                        <p className="text-xs text-gray-500">{resource.description}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setOpenModal(key)}
                      className="w-full py-2 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-xs transition-all"
                    >
                      Download PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Next Steps */}
        <div className="glass-card p-6 rounded-2xl border border-white/5 mt-6">
          <h3 className="text-lg font-bold mb-4">Ready to Get Started?</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                setActiveRoute(AppRoute.MARKETPLACE);
              }}
              className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all text-sm"
            >
              Explore Marketplace
            </button>
            <button
              onClick={() => {
                onClose();
                setActiveRoute(AppRoute.DASHBOARD);
              }}
              className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all text-sm"
            >
              Go to Dashboard
            </button>
          </div>
        </div>

        {/* Download Modals */}
        {openModal && resourceInfo[openModal as keyof typeof resourceInfo] && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
            <div className="glass-card p-6 rounded-2xl border border-white/5 max-w-xl w-full">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl ${resourceInfo[openModal as keyof typeof resourceInfo].bgColor} flex items-center justify-center text-2xl`}>
                    {resourceInfo[openModal as keyof typeof resourceInfo].icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      {resourceInfo[openModal as keyof typeof resourceInfo].title}
                    </h3>
                    <p className="text-gray-500 text-xs">
                      {resourceInfo[openModal as keyof typeof resourceInfo].description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setOpenModal(null)}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-300 whitespace-pre-line leading-relaxed">
                  {resourceInfo[openModal as keyof typeof resourceInfo].info}
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleDownload(openModal)}
                  className="flex-1 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all text-sm"
                >
                  Download PDF
                </button>
                <button
                  onClick={() => setOpenModal(null)}
                  className="flex-1 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GettingStartedModal;


