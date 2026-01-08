import React from 'react';
import { ICONS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 text-gradient-cyan-purple">
          About BitNexus
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          The world's first AI-powered decentralized affiliate revenue platform
        </p>
      </div>

      {/* Mission Section */}
      <div className="glass-card p-8 rounded-3xl border border-white/5 mb-8">
        <div className="flex items-start gap-6 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
            <ICONS.NexusAI />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              BitNexus is revolutionizing the affiliate marketing industry by combining the power of artificial intelligence, 
              blockchain technology, and decentralized networks. We're building a platform where creators, marketers, and 
              entrepreneurs can achieve true financial freedom through automated revenue streams.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="glass-card p-8 rounded-3xl border border-white/5 mb-8">
        <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          We envision a future where financial independence is accessible to everyone, not just the privileged few. 
          Through our innovative platform, we're creating a new economy where:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold">Decentralized Power</h3>
            </div>
            <p className="text-sm text-gray-400">Users control their data, earnings, and network without intermediaries</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-cyan-600/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold">AI-Powered Tools</h3>
            </div>
            <p className="text-sm text-gray-400">Advanced AI assists with content creation, strategy, and optimization</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-green-600/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold">Financial Freedom</h3>
            </div>
            <p className="text-sm text-gray-400">Multiple income streams including affiliate commissions, bot trading, and network building</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-yellow-600/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold">Community Driven</h3>
            </div>
            <p className="text-sm text-gray-400">A thriving network of affiliates supporting each other's success</p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="glass-card p-8 rounded-3xl border border-white/5 mb-8">
        <h2 className="text-2xl font-bold mb-6">Core Values</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-1">Transparency</h3>
              <p className="text-sm text-gray-400">All transactions, commissions, and network activities are recorded on-chain for complete transparency</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
            <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-1">Innovation</h3>
              <p className="text-sm text-gray-400">We continuously push the boundaries of what's possible with AI and blockchain technology</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-1">Empowerment</h3>
              <p className="text-sm text-gray-400">We provide the tools and resources needed for anyone to build a sustainable income stream</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
            <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-1">Integrity</h3>
              <p className="text-sm text-gray-400">We operate with honesty, fairness, and ethical business practices in everything we do</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="glass-card p-8 rounded-3xl border border-white/5 mb-8">
        <h2 className="text-2xl font-bold mb-6">Technology</h2>
        <p className="text-gray-300 mb-6">
          BitNexus is built on cutting-edge technology to ensure security, scalability, and performance:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-5 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-xl border border-purple-500/20">
            <h3 className="font-bold mb-2 text-purple-400">Blockchain</h3>
            <p className="text-sm text-gray-400">Decentralized infrastructure for transparent and secure transactions</p>
          </div>
          <div className="p-5 bg-gradient-to-br from-cyan-600/10 to-purple-600/10 rounded-xl border border-cyan-500/20">
            <h3 className="font-bold mb-2 text-cyan-400">AI & Machine Learning</h3>
            <p className="text-sm text-gray-400">Advanced AI models for content generation, strategy optimization, and personalized recommendations</p>
          </div>
          <div className="p-5 bg-gradient-to-br from-green-600/10 to-cyan-600/10 rounded-xl border border-green-500/20">
            <h3 className="font-bold mb-2 text-green-400">Smart Contracts</h3>
            <p className="text-sm text-gray-400">Automated commission distribution and secure escrow systems</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="glass-card p-6 rounded-2xl border border-white/5 text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">12,400+</div>
          <div className="text-sm text-gray-400">Active Users</div>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-white/5 text-center">
          <div className="text-3xl font-bold text-cyan-400 mb-2">500</div>
          <div className="text-sm text-gray-400">Early Adopters</div>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-white/5 text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">$2.4M+</div>
          <div className="text-sm text-gray-400">Total Earnings</div>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-white/5 text-center">
          <div className="text-3xl font-bold text-yellow-400 mb-2">142</div>
          <div className="text-sm text-gray-400">Remaining Spots</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="glass-card p-8 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 text-center">
        <h2 className="text-2xl font-bold mb-4">Join the Revolution</h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Be part of the future of affiliate marketing. Start building your decentralized revenue empire today.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all">
            Get Started
          </button>
          <button className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;


