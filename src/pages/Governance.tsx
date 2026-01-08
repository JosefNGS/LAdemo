import React, { useState } from 'react';
import { ICONS } from '../constants';

interface GovernanceProposal {
  id: string;
  title: string;
  description: string;
  type: 'feature' | 'policy' | 'product' | 'budget' | 'partnership';
  author: string;
  createdAt: string;
  discussionEndDate: string;
  votingStartDate: string;
  votingEndDate: string;
  status: 'draft' | 'discussion' | 'voting' | 'passed' | 'rejected';
  votesFor: number;
  votesAgainst: number;
  userVote?: 'for' | 'against' | null;
  userVotingPower: number;
}

const Governance: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'feature' | 'policy' | 'product' | 'budget' | 'partnership'>('all');
  const [selectedProposal, setSelectedProposal] = useState<GovernanceProposal | null>(null);

  const proposals: GovernanceProposal[] = [
    {
      id: '1',
      title: 'Add Multi-Chain Support for NXC Credits',
      description: 'Proposal to expand NXC Credits to support Ethereum, Polygon, and BSC networks for better interoperability and user choice.',
      type: 'feature',
      author: 'Agent Nexus-15',
      createdAt: '2025-01-10',
      discussionEndDate: '2025-01-24',
      votingStartDate: '2025-01-25',
      votingEndDate: '2025-01-31',
      status: 'voting',
      votesFor: 1245,
      votesAgainst: 342,
      userVote: 'for',
      userVotingPower: 15
    },
    {
      id: '2',
      title: 'Update Platform Terms of Service',
      description: 'Proposed updates to Terms of Service to include new governance features and clarify dispute resolution procedures.',
      type: 'policy',
      author: 'BitNexus Team',
      createdAt: '2025-01-08',
      discussionEndDate: '2025-01-22',
      votingStartDate: '2025-01-23',
      votingEndDate: '2025-01-29',
      status: 'voting',
      votesFor: 892,
      votesAgainst: 156,
      userVote: null,
      userVotingPower: 15
    },
    {
      id: '3',
      title: 'Community Product Approval Process',
      description: 'Implement community-driven product approval system where verified users can vote on product submissions.',
      type: 'product',
      author: 'Agent Nexus-42',
      createdAt: '2025-01-05',
      discussionEndDate: '2025-01-19',
      votingStartDate: '2025-01-20',
      votingEndDate: '2025-01-26',
      status: 'passed',
      votesFor: 2156,
      votesAgainst: 234,
      userVote: 'for',
      userVotingPower: 12
    },
    {
      id: '4',
      title: 'Platform Development Budget Allocation',
      description: 'Allocate platform revenue to development priorities: 40% infrastructure, 30% new features, 20% security, 10% marketing.',
      type: 'budget',
      author: 'BitNexus Team',
      createdAt: '2025-01-12',
      discussionEndDate: '2025-01-26',
      votingStartDate: '2025-01-27',
      votingEndDate: '2025-02-02',
      status: 'discussion',
      votesFor: 0,
      votesAgainst: 0,
      userVotingPower: 15
    },
    {
      id: '5',
      title: 'Strategic Partnership with Major DeFi Protocol',
      description: 'Proposed partnership with leading DeFi protocol to expand staking options and increase earning potential for users.',
      type: 'partnership',
      author: 'Agent Nexus-88',
      createdAt: '2025-01-15',
      discussionEndDate: '2025-01-29',
      votingStartDate: '2025-01-30',
      votingEndDate: '2025-02-05',
      status: 'discussion',
      votesFor: 0,
      votesAgainst: 0,
      userVotingPower: 15
    }
  ];

  const filteredProposals = activeTab === 'all' 
    ? proposals 
    : proposals.filter(p => p.type === activeTab);

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'feature': return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      case 'policy': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'product': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'budget': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'partnership': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'voting': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'passed': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'rejected': return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'discussion': return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  const handleVote = (proposalId: string, vote: 'for' | 'against') => {
    // Update proposal vote
    const proposal = proposals.find(p => p.id === proposalId);
    if (proposal && proposal.status === 'voting' && !proposal.userVote) {
      alert(`Vote ${vote === 'for' ? 'FOR' : 'AGAINST'} submitted! You have ${proposal.userVotingPower} voting power.`);
      setSelectedProposal(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-display">Governance</h2>
          <p className="text-gray-500 text-sm mt-1">Vote on platform changes and participate in decentralized decision-making</p>
        </div>
        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-sm transition-all">
          Submit Proposal
        </button>
      </div>

      {/* Voting Power Display */}
      <div className="glass-card p-6 rounded-3xl border-white/5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Your Voting Power</h3>
          <span className="text-2xl font-bold text-purple-400">15 votes</span>
        </div>
        <div className="space-y-2 text-sm text-gray-400">
          <div className="flex justify-between">
            <span>Base vote:</span>
            <span className="text-white font-bold">1</span>
          </div>
          <div className="flex justify-between">
            <span>Tier multiplier (Gold x2):</span>
            <span className="text-white font-bold">2x</span>
          </div>
          <div className="flex justify-between">
            <span>NXC Credits bonus:</span>
            <span className="text-white font-bold">+10</span>
          </div>
          <div className="flex justify-between">
            <span>Network size bonus:</span>
            <span className="text-white font-bold">+4</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {['all', 'feature', 'policy', 'product', 'budget', 'partnership'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
              activeTab === tab
                ? 'bg-purple-600 border-purple-500 shadow-lg shadow-purple-500/20'
                : 'bg-white/5 border-white/5 text-gray-400 hover:text-gray-200 hover:border-white/10'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Proposals List */}
      <div className="space-y-4">
        {filteredProposals.map(proposal => (
          <div
            key={proposal.id}
            onClick={() => setSelectedProposal(proposal)}
            className="glass-card p-6 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className="text-xl font-bold">{proposal.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getTypeColor(proposal.type)}`}>
                    {proposal.type.toUpperCase()}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(proposal.status)}`}>
                    {proposal.status.toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{proposal.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>By {proposal.author}</span>
                  <span>•</span>
                  <span>Created {proposal.createdAt}</span>
                </div>
              </div>
            </div>
            {proposal.status === 'voting' && (
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">For:</span>
                        <span className="text-lg font-bold text-green-400">{proposal.votesFor}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">Against:</span>
                        <span className="text-lg font-bold text-red-400">{proposal.votesAgainst}</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" 
                        style={{ width: `${(proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  {proposal.userVote && (
                    <span className="ml-4 px-3 py-1 bg-purple-500/20 text-purple-400 rounded-lg text-xs font-bold">
                      You voted {proposal.userVote.toUpperCase()}
                    </span>
                  )}
                </div>
              </div>
            )}
            {proposal.status === 'passed' && (
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-green-400 font-bold">✅ PASSED</span>
                    <p className="text-xs text-gray-500 mt-1">Approved by {proposal.votesFor} votes ({Math.round((proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100)}%)</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Proposal Detail Modal */}
      {selectedProposal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Proposal Details</h3>
              <button
                onClick={() => setSelectedProposal(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getTypeColor(selectedProposal.type)}`}>
                    {selectedProposal.type.toUpperCase()}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(selectedProposal.status)}`}>
                    {selectedProposal.status.toUpperCase()}
                  </span>
                </div>
                <h4 className="text-2xl font-bold mb-3">{selectedProposal.title}</h4>
                <p className="text-gray-300 leading-relaxed mb-4">{selectedProposal.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>By {selectedProposal.author}</span>
                  <span>•</span>
                  <span>Created {selectedProposal.createdAt}</span>
                </div>
              </div>

              {selectedProposal.status === 'voting' && (
                <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
                  <h5 className="font-bold mb-4">Voting Status</h5>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Votes For:</span>
                        <span className="text-xl font-bold text-green-400">{selectedProposal.votesFor}</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Votes Against:</span>
                        <span className="text-xl font-bold text-red-400">{selectedProposal.votesAgainst}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-green-400 h-3 rounded-full" 
                          style={{ width: `${(selectedProposal.votesFor / (selectedProposal.votesFor + selectedProposal.votesAgainst)) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500">
                        Voting ends: {selectedProposal.votingEndDate}
                      </p>
                    </div>
                    {!selectedProposal.userVote && (
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleVote(selectedProposal.id, 'for')}
                          className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-500 rounded-xl font-bold transition-all"
                        >
                          Vote FOR ({selectedProposal.userVotingPower} votes)
                        </button>
                        <button
                          onClick={() => handleVote(selectedProposal.id, 'against')}
                          className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-500 rounded-xl font-bold transition-all"
                        >
                          Vote AGAINST ({selectedProposal.userVotingPower} votes)
                        </button>
                      </div>
                    )}
                    {selectedProposal.userVote && (
                      <div className="p-4 bg-purple-500/20 border border-purple-500/30 rounded-xl">
                        <p className="text-sm text-purple-400 font-bold">
                          You voted {selectedProposal.userVote.toUpperCase()} with {selectedProposal.userVotingPower} votes
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <button
                onClick={() => setSelectedProposal(null)}
                className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Governance;

