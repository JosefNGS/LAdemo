import React, { useState } from 'react';
import { AppRoute } from '../types';
import { UserProfile as UserProfileType } from '../data/userProfiles';
import { ICONS } from '../constants';

interface UserProfileProps {
  profile: UserProfileType;
  setActiveRoute: (route: AppRoute) => void;
}

const getTierColor = (tier: string) => {
  switch (tier) {
    case 'Platinum': return 'bg-purple-500/20 text-purple-400 border-purple-500/20';
    case 'Gold': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/20';
    case 'Silver': return 'bg-gray-400/20 text-gray-300 border-gray-400/20';
    case 'Bronze': return 'bg-orange-500/20 text-orange-400 border-orange-500/20';
    default: return 'bg-white/5 text-gray-400 border-white/10';
  }
};

const getStatusColor = (status: string) => {
  return status === 'Online' ? 'bg-green-500' : 'bg-gray-500';
};

const UserProfile: React.FC<UserProfileProps> = ({ profile, setActiveRoute }) => {
  const [showProposalModal, setShowProposalModal] = useState(false);
  
  // Calculate potential value (example: combined network size * average earnings per member)
  const potentialValue = Math.floor((profile.networkSize + 189) * 4.8); // Example calculation
  const combinedAudience = profile.networkSize + 189; // Example: current user's network + partner's network
  const monthlyEarnings = Math.floor(profile.earnings / 12); // Approximate monthly from total

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-4xl font-bold">
            {profile.avatar}
          </div>
          <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${getStatusColor(profile.status)} rounded-full border-4 border-[#030712]`}></div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold font-display text-gradient-cyan-purple">{profile.name}</h1>
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getTierColor(profile.tier)}`}>
              {profile.tier}
            </span>
          </div>
          <p className="text-gray-400 mt-1">Member since {new Date(profile.joined).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          {profile.bio && (
            <p className="text-gray-500 mt-3">{profile.bio}</p>
          )}
        </div>
        <button
          onClick={() => setActiveRoute(AppRoute.DASHBOARD)}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all"
        >
          Back
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-card p-6 rounded-2xl border border-white/5">
          <div className="flex items-center gap-3 mb-2">
            <ICONS.Wallet />
            <h3 className="text-lg font-bold">Total Earnings</h3>
          </div>
          <p className="text-2xl font-bold text-green-400">${profile.earnings.toLocaleString()}</p>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-white/5">
          <div className="flex items-center gap-3 mb-2">
            <ICONS.Network />
            <h3 className="text-lg font-bold">Network Size</h3>
          </div>
          <p className="text-2xl font-bold text-cyan-400">{profile.networkSize}</p>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-white/5">
          <div className="flex items-center gap-3 mb-2">
            <ICONS.Profile />
            <h3 className="text-lg font-bold">Status</h3>
          </div>
          <p className={`text-2xl font-bold ${profile.status === 'Online' ? 'text-green-400' : 'text-gray-400'}`}>
            {profile.status}
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="glass-card p-6 rounded-2xl border border-white/5">
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-300">{profile.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-300">Joined {new Date(profile.joined).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
      </div>

      {/* Achievements */}
      {profile.achievements && profile.achievements.length > 0 && (
        <div className="glass-card p-6 rounded-2xl border border-white/5">
          <h2 className="text-xl font-bold mb-4">Achievements</h2>
          <ul className="space-y-2">
            {profile.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">🏆</span>
                <span className="text-gray-300">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Top Products */}
      {profile.topProducts && profile.topProducts.length > 0 && (
        <div className="glass-card p-6 rounded-2xl border border-white/5">
          <h2 className="text-xl font-bold mb-4">Top Products</h2>
          <div className="flex flex-wrap gap-2">
            {profile.topProducts.map((product, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-xl text-sm"
              >
                {product}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-4">
        <button
          onClick={() => {
            sessionStorage.setItem('selectedChatUser', profile.name);
            setActiveRoute(AppRoute.CHAT);
          }}
          className="flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
        >
          Send Message
        </button>
        <button
          onClick={() => {
            sessionStorage.setItem('selectedFriendUser', profile.name);
            setActiveRoute(AppRoute.FRIENDS);
          }}
          className="flex-1 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
        >
          Add Friend
        </button>
        <button
          onClick={() => setShowProposalModal(true)}
          className="flex-1 px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 text-cyan-400 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
        >
          <span>🤝</span>
          Send Proposal
        </button>
      </div>

      {/* Send Proposal Modal */}
      {showProposalModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🤝</span>
                <div>
                  <h3 className="text-2xl font-bold">Joint Venture</h3>
                  <p className="text-gray-400 text-sm">with {profile.name}</p>
                </div>
              </div>
              <button
                onClick={() => setShowProposalModal(false)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Opportunity Overview */}
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <h4 className="text-lg font-bold mb-2">Opportunity Overview</h4>
                <p className="text-gray-300 leading-relaxed">
                  Combine your marketing efforts with {profile.name} to reach a larger audience and maximize revenue potential.
                </p>
              </div>

              {/* Potential Value */}
              <div className="p-6 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl border border-purple-500/30">
                <p className="text-sm text-gray-400 mb-1">Potential Value</p>
                <p className="text-3xl font-bold text-purple-400">${potentialValue.toLocaleString()} potential</p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold">Key Benefits</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                    <span className="text-green-400 text-xl">✓</span>
                    <p className="text-gray-300">Access to {combinedAudience}+ combined audience</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                    <span className="text-green-400 text-xl">✓</span>
                    <p className="text-gray-300">Shared marketing costs</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                    <span className="text-green-400 text-xl">✓</span>
                    <p className="text-gray-300">Higher conversion rates through trust</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                    <span className="text-green-400 text-xl">✓</span>
                    <p className="text-gray-300">Cross-promotion opportunities</p>
                  </div>
                </div>
              </div>

              {/* Action Plan */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold">Action Plan</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm">1</span>
                    <p className="text-gray-300">Schedule initial strategy call</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm">2</span>
                    <p className="text-gray-300">Identify top 3 products to promote</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm">3</span>
                    <p className="text-gray-300">Create joint marketing campaign</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm">4</span>
                    <p className="text-gray-300">Set up revenue sharing agreement</p>
                  </div>
                </div>
              </div>

              {/* Partner Profile */}
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <h4 className="text-lg font-bold mb-4">Partner Profile</h4>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-2xl font-bold">
                    {profile.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-lg">{profile.name}</p>
                    <p className="text-sm text-gray-400">
                      {profile.tier} Tier • {profile.networkSize} network • ${monthlyEarnings.toLocaleString()}/month
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => {
                    sessionStorage.setItem('selectedChatUser', profile.name);
                    setShowProposalModal(false);
                    setActiveRoute(AppRoute.CHAT);
                  }}
                  className="flex-1 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                >
                  Message Partner
                </button>
                <button
                  onClick={() => {
                    // Here you would typically send the proposal via API
                    alert(`Proposal sent to ${profile.name}!`);
                    setShowProposalModal(false);
                  }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all"
                >
                  Send Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
