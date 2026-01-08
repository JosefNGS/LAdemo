import React, { useState } from 'react';
import { AppRoute } from '../types';
import { ICONS } from '../constants';

interface GettingStartedProps {
  setActiveRoute?: (route: AppRoute) => void;
}

const GettingStarted: React.FC<GettingStartedProps> = ({ setActiveRoute }) => {
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
    // In real app, this would trigger actual PDF download
    // For now, we'll just close the modal and show a message
    setOpenModal(null);
    alert(`Downloading ${resourceInfo[resourceId as keyof typeof resourceInfo].title}...`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => setActiveRoute && setActiveRoute(AppRoute.ACADEMY)}
          className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <h2 className="text-3xl font-bold font-display">Getting Started with BitNexus</h2>
          <p className="text-gray-500 text-sm">Your complete guide to the BitNexus platform</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="glass-card p-4 rounded-2xl border border-white/5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold">Course Progress</span>
          <span className="text-sm font-bold text-cyan-400">0%</span>
        </div>
        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-600 to-cyan-500" style={{ width: '0%' }} />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 bg-white/5 p-1 rounded-xl border border-white/5">
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

      {/* Content Sections */}
      <div className="space-y-6">
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold mb-4">Welcome to BitNexus</h3>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                    <div className="text-2xl mb-2">🎯</div>
                    <h4 className="font-bold mb-1">Quick Start</h4>
                    <p className="text-xs text-gray-400">Get up and running in minutes</p>
                  </div>
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                    <div className="text-2xl mb-2">💰</div>
                    <h4 className="font-bold mb-1">Earn Income</h4>
                    <p className="text-xs text-gray-400">Multiple revenue streams available</p>
                  </div>
                  <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                    <div className="text-2xl mb-2">🚀</div>
                    <h4 className="font-bold mb-1">Scale Fast</h4>
                    <p className="text-xs text-gray-400">Build your network and grow</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold mb-4">Platform Overview</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-xl">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <ICONS.Dashboard />
                    Dashboard
                  </h4>
                  <p className="text-sm text-gray-400">
                    Your financial headquarters. Track earnings, view performance metrics, and monitor your progress toward financial freedom.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <ICONS.Marketplace />
                    Marketplace
                  </h4>
                  <p className="text-sm text-gray-400">
                    Discover products to promote, generate affiliate links, and access marketing assets. Find high-commission opportunities.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <ICONS.Earn />
                    Earn (Bot Lab)
                  </h4>
                  <p className="text-sm text-gray-400">
                    Passive income through MEV Bot and XAB Bot staking. Set up automated trading nodes and earn 10-15% APY.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <ICONS.Alliance />
                    Alliance Network
                  </h4>
                  <p className="text-sm text-gray-400">
                    Build your network, earn team commissions, and scale through the MLM structure. Track referrals and network growth.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <ICONS.ContentGenerator />
                    Content Generator
                  </h4>
                  <p className="text-sm text-gray-400">
                    AI-powered content creation for social media. Generate posts, stories, and videos optimized for multiple platforms.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <ICONS.Academy />
                    Academy
                  </h4>
                  <p className="text-sm text-gray-400">
                    Learn proven strategies through structured learning paths, live events, and comprehensive courses. Achieve financial freedom systematically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* User Flow Section */}
        {activeSection === 'flow' && (
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold mb-6">BitNexus User Flow</h3>
              
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-cyan-500"></div>
                  <div className="space-y-8 pl-12">
                    {/* Step 1 */}
                    <div className="relative">
                      <div className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                        <h4 className="font-bold mb-2">Landing Page & Signup</h4>
                        <p className="text-sm text-gray-400">
                          Start by visiting the BitNexus landing page. Click "Try Demo" to explore or "Initiate Access" to create your account. 
                          Fill out the signup form with your name, email, and phone number.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative">
                      <div className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                        <h4 className="font-bold mb-2">Registration & Onboarding</h4>
                        <p className="text-sm text-gray-400">
                          Complete your registration with email verification. Set up your profile, connect social media accounts, 
                          and optionally enter a referral code if you were referred by someone.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative">
                      <div className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                        <h4 className="font-bold mb-2">Dashboard Overview</h4>
                        <p className="text-sm text-gray-400">
                          Explore your Dashboard to understand your financial overview. View affiliate link revenue, income streams, 
                          network health, and set your financial freedom goals.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative">
                      <div className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-sm">
                        4
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                        <h4 className="font-bold mb-2">Marketplace Exploration</h4>
                        <p className="text-sm text-gray-400">
                          Browse the Marketplace to discover products you can promote. Use filters to find high-commission products, 
                          view earning potential, and generate your first affiliate link.
                        </p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="relative">
                      <div className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-sm">
                        5
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                        <h4 className="font-bold mb-2">Generate Affiliate Links</h4>
                        <p className="text-sm text-gray-400">
                          Click on any product to open the Product Details drawer. Generate your unique affiliate link, 
                          download the QR code for easy sharing, and access marketing assets.
                        </p>
                      </div>
                    </div>

                    {/* Step 6 */}
                    <div className="relative">
                      <div className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-sm">
                        6
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                        <h4 className="font-bold mb-2">Content Creation</h4>
                        <p className="text-sm text-gray-400">
                          Use the Content Generator to create AI-powered social media content. Select a product, choose your content type 
                          (Post, Story, Video), set the tone, and generate platform-specific content. Download marketing assets as needed.
                        </p>
                      </div>
                    </div>

                    {/* Step 7 */}
                    <div className="relative">
                      <div className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-sm">
                        7
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                        <h4 className="font-bold mb-2">Share & Promote</h4>
                        <p className="text-sm text-gray-400">
                          Share your generated content across social media platforms. Use the affiliate links and QR codes to track 
                          clicks and conversions. Monitor performance in the Affiliate Manager.
                        </p>
                      </div>
                    </div>

                    {/* Step 8 */}
                    <div className="relative">
                      <div className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-sm">
                        8
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                        <h4 className="font-bold mb-2">Build Your Network</h4>
                        <p className="text-sm text-gray-400">
                          Share your referral link from the Alliance page. Build your network by inviting others. Earn commissions 
                          from your direct referrals and sub-affiliates. Track your network growth and tier progression.
                        </p>
                      </div>
                    </div>

                    {/* Step 9 */}
                    <div className="relative">
                      <div className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-sm">
                        9
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                        <h4 className="font-bold mb-2">Passive Income Setup</h4>
                        <p className="text-sm text-gray-400">
                          Explore the Bot Lab (Earn page) to set up MEV Bot or XAB Bot staking. Configure your trading nodes, 
                          stake NXC credits, and start earning passive income with 10-15% APY.
                        </p>
                      </div>
                    </div>

                    {/* Step 10 */}
                    <div className="relative">
                      <div className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-sm">
                        10
                      </div>
                      <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                        <h4 className="font-bold mb-2 text-cyan-400">Scale & Optimize</h4>
                        <p className="text-sm text-gray-400">
                          Continue learning through the Academy, optimize your strategies, track your goals, and scale your income streams. 
                          Use analytics to identify top-performing products and content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Guide Section */}
        {activeSection === 'video' && (
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold mb-6">Video Tutorial</h3>
              
              <div className="aspect-video bg-white/5 rounded-2xl border border-white/5 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 font-bold mb-2">Getting Started Video</p>
                  <p className="text-sm text-gray-500">Complete platform walkthrough</p>
                  <button className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-sm transition-all">
                    Play Video
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold">Video Chapters</h4>
                <div className="space-y-2">
                  {[
                    { time: '0:00', title: 'Introduction to BitNexus' },
                    { time: '2:30', title: 'Platform Overview' },
                    { time: '5:15', title: 'Dashboard Navigation' },
                    { time: '8:45', title: 'Creating Your First Affiliate Link' },
                    { time: '12:20', title: 'Using the Content Generator' },
                    { time: '16:10', title: 'Building Your Network' },
                    { time: '19:30', title: 'Setting Up Passive Income' },
                    { time: '23:00', title: 'Tips for Success' },
                  ].map((chapter, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
                      <span className="text-xs font-bold text-gray-500 w-12">{chapter.time}</span>
                      <span className="text-sm">{chapter.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Resources Section */}
        {activeSection === 'resources' && (
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold mb-6">Downloadable Resources</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold">Getting Started Guide (PDF)</h4>
                      <p className="text-xs text-gray-500">Complete onboarding manual</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setOpenModal('getting-started')}
                    className="w-full py-2 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-sm transition-all"
                  >
                    Download PDF
                  </button>
                </div>

                <div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold">User Flow Diagram (PDF)</h4>
                      <p className="text-xs text-gray-500">Visual navigation guide</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setOpenModal('user-flow')}
                    className="w-full py-2 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-sm transition-all"
                  >
                    Download PDF
                  </button>
                </div>

                <div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold">Quick Reference Card (PDF)</h4>
                      <p className="text-xs text-gray-500">Keyboard shortcuts & tips</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setOpenModal('quick-reference')}
                    className="w-full py-2 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-sm transition-all"
                  >
                    Download PDF
                  </button>
                </div>

                <div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold">Platform Glossary (PDF)</h4>
                      <p className="text-xs text-gray-500">Terms and definitions</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setOpenModal('glossary')}
                    className="w-full py-2 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-sm transition-all"
                  >
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Download Modals */}
      {openModal && resourceInfo[openModal as keyof typeof resourceInfo] && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/5 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-xl ${resourceInfo[openModal as keyof typeof resourceInfo].bgColor} flex items-center justify-center text-3xl`}>
                  {resourceInfo[openModal as keyof typeof resourceInfo].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">
                    {resourceInfo[openModal as keyof typeof resourceInfo].title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {resourceInfo[openModal as keyof typeof resourceInfo].description}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpenModal(null)}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <h4 className="font-bold mb-3 text-cyan-400">About This Resource</h4>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-sm text-gray-300 whitespace-pre-line leading-relaxed">
                  {resourceInfo[openModal as keyof typeof resourceInfo].info}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleDownload(openModal)}
                className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all"
              >
                Download PDF
              </button>
              <button
                onClick={() => setOpenModal(null)}
                className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Next Steps */}
      <div className="glass-card p-6 rounded-3xl border border-white/5">
        <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setActiveRoute && setActiveRoute(AppRoute.MARKETPLACE)}
            className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all"
          >
            Explore Marketplace
          </button>
          <button
            onClick={() => setActiveRoute && setActiveRoute(AppRoute.DASHBOARD)}
            className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;

