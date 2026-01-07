import React, { useState } from 'react';
import { ICONS } from '../constants';

const Support: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('general');
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketMessage, setTicketMessage] = useState('');
  const [ticketPriority, setTicketPriority] = useState<'low' | 'medium' | 'high'>('medium');

  const faqCategories = [
    { id: 'general', label: 'General', icon: '💡' },
    { id: 'account', label: 'Account', icon: '👤' },
    { id: 'payments', label: 'Payments', icon: '💰' },
    { id: 'technical', label: 'Technical', icon: '🔧' },
    { id: 'affiliate', label: 'Affiliate', icon: '📈' },
    { id: 'alliance', label: 'Alliance', icon: '🤝' },
  ];

  const faqs = {
    general: [
      {
        question: 'What is BitNexus?',
        answer: 'BitNexus is a decentralized affiliate revenue platform designed to help you achieve financial freedom through multiple income streams. You can earn through affiliate marketing, bot trading, network building, and more.',
      },
      {
        question: 'How do I get started?',
        answer: 'Getting started is easy! Sign up for an account, complete your profile, and explore the Marketplace to find products to promote. Check out the Getting Started guide in your dashboard for a complete walkthrough.',
      },
      {
        question: 'Is BitNexus free to join?',
        answer: 'Yes, creating an account is completely free. However, some features like premium products, advanced tools, and bot licenses may require credits or purchases.',
      },
    ],
    account: [
      {
        question: 'How do I update my profile?',
        answer: 'Navigate to your Profile page from the sidebar. Click on any section you want to edit and make your changes. Don\'t forget to save!',
      },
      {
        question: 'Can I change my username?',
        answer: 'Your username (Agent Nexus-XX) is assigned when you join and cannot be changed. However, you can update your display name and profile information.',
      },
      {
        question: 'How do I enable two-factor authentication?',
        answer: 'Go to Profile > Security Settings. Click on "Two-Factor Auth" and follow the setup instructions. We recommend enabling 2FA for better account security.',
      },
    ],
    payments: [
      {
        question: 'How do I withdraw my earnings?',
        answer: 'Navigate to the Dashboard and click on "Withdraw" in your earnings section. You can withdraw to your connected wallet or bank account. Minimum withdrawal amounts apply.',
      },
      {
        question: 'What payment methods are supported?',
        answer: 'We support cryptocurrency payments (NXC tokens, Bitcoin, Ethereum) and traditional payment methods (bank transfer, PayPal) for withdrawals.',
      },
      {
        question: 'How long do withdrawals take?',
        answer: 'Cryptocurrency withdrawals are typically processed within 24 hours. Bank transfers may take 3-5 business days. Premium members enjoy faster processing times.',
      },
    ],
    technical: [
      {
        question: 'The platform is not loading correctly',
        answer: 'Try clearing your browser cache and cookies, or use an incognito/private window. If the issue persists, check your internet connection or try a different browser.',
      },
      {
        question: 'I can\'t access my bot trading features',
        answer: 'Make sure you have an active bot license and sufficient NXC credits. Check your Bot Lab page for license status and renewal options.',
      },
      {
        question: 'How do I report a bug?',
        answer: 'Use the "Submit Ticket" button on this page to report bugs. Include as much detail as possible: what you were doing, what happened, and any error messages you saw.',
      },
    ],
    affiliate: [
      {
        question: 'How do I generate affiliate links?',
        answer: 'Go to the Marketplace, find a product you want to promote, and click "Generate Link". Copy your unique affiliate link and share it anywhere!',
      },
      {
        question: 'How are commissions calculated?',
        answer: 'Commissions are calculated based on the product\'s commission percentage and your tier level. Higher tiers earn more! Check each product page for specific commission rates.',
      },
      {
        question: 'When do I receive my commissions?',
        answer: 'Commissions are credited to your account immediately after a sale is confirmed. You can track all earnings in your Dashboard and Affiliate Manager.',
      },
    ],
    alliance: [
      {
        question: 'What is an Alliance?',
        answer: 'An Alliance is a group of affiliates working together. Alliance leaders can manage members, set goals, and earn additional commissions from their network\'s performance.',
      },
      {
        question: 'How do I create an Alliance?',
        answer: 'Go to Alliance Arena > Alliance Admin tab. Click "Create Alliance" and fill in the details. You\'ll need to be at least Silver tier to create an alliance.',
      },
      {
        question: 'How do I join an Alliance?',
        answer: 'Browse available alliances in the Alliance Arena or get invited by an alliance leader. Some alliances are public (anyone can join) while others require approval.',
      },
    ],
  };

  const tickets = [
    { id: '1', subject: 'Payment withdrawal issue', status: 'open', priority: 'high', created: '2024-01-15', updated: '2024-01-16' },
    { id: '2', subject: 'Bot license renewal', status: 'resolved', priority: 'medium', created: '2024-01-10', updated: '2024-01-12' },
    { id: '3', subject: 'Account verification', status: 'in-progress', priority: 'low', created: '2024-01-20', updated: '2024-01-20' },
  ];

  const handleSubmitTicket = () => {
    if (!ticketSubject || !ticketMessage) {
      alert('Please fill in all required fields');
      return;
    }
    alert('Support ticket submitted successfully! Ticket ID: #' + Math.floor(Math.random() * 10000));
    setShowTicketModal(false);
    setTicketSubject('');
    setTicketMessage('');
    setTicketPriority('medium');
  };

  return (
    <div className="space-y-8 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold font-display">Support Center</h2>
          <p className="text-gray-500 text-sm">Get help, find answers, and contact our support team</p>
        </div>
        <button
          onClick={() => setShowTicketModal(true)}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all"
        >
          Submit Ticket
        </button>
      </div>

      {/* Quick Help Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer">
          <div className="text-4xl mb-3">📚</div>
          <h3 className="font-bold mb-2">Knowledge Base</h3>
          <p className="text-sm text-gray-400">Browse comprehensive guides and tutorials</p>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer">
          <div className="text-4xl mb-3">💬</div>
          <h3 className="font-bold mb-2">Live Chat</h3>
          <p className="text-sm text-gray-400">Chat with our support team in real-time</p>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer">
          <div className="text-4xl mb-3">🎥</div>
          <h3 className="font-bold mb-2">Video Tutorials</h3>
          <p className="text-sm text-gray-400">Watch step-by-step video guides</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* FAQ Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-white/5">
            <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs[selectedCategory as keyof typeof faqs]?.map((faq, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all"
                >
                  <h4 className="font-bold mb-2">{faq.question}</h4>
                  <p className="text-sm text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Support Tickets Sidebar */}
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-white/5">
            <h3 className="text-lg font-bold mb-4">My Support Tickets</h3>
            <div className="space-y-3">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-sm">{ticket.subject}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      ticket.status === 'resolved' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                      ticket.status === 'in-progress' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' :
                      'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                    }`}>
                      {ticket.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>#{ticket.id}</span>
                    <span>{ticket.created}</span>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowTicketModal(true)}
              className="w-full mt-4 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-sm transition-all"
            >
              + New Ticket
            </button>
          </div>

          {/* Contact Information */}
          <div className="glass-card p-6 rounded-2xl border border-white/5">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-bold text-sm">support@bitnexus.io</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-600/20 flex items-center justify-center">
                  <span className="text-xl">💬</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Live Chat</p>
                  <p className="font-bold text-sm">Available 24/7</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-600/20 flex items-center justify-center">
                  <span className="text-xl">⏱️</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Response Time</p>
                  <p className="font-bold text-sm">Usually within 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Ticket Modal */}
      {showTicketModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Submit Support Ticket</h3>
              <button
                onClick={() => setShowTicketModal(false)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Subject *</label>
                <input
                  type="text"
                  placeholder="Brief description of your issue"
                  value={ticketSubject}
                  onChange={(e) => setTicketSubject(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-white placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Category</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-white">
                  <option value="general">General</option>
                  <option value="account">Account</option>
                  <option value="payments">Payments</option>
                  <option value="technical">Technical</option>
                  <option value="affiliate">Affiliate</option>
                  <option value="alliance">Alliance</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Priority</label>
                <div className="flex gap-2">
                  {(['low', 'medium', 'high'] as const).map((priority) => (
                    <button
                      key={priority}
                      onClick={() => setTicketPriority(priority)}
                      className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
                        ticketPriority === priority
                          ? 'bg-purple-600 text-white'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {priority.charAt(0).toUpperCase() + priority.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Message *</label>
                <textarea
                  placeholder="Describe your issue in detail..."
                  rows={6}
                  value={ticketMessage}
                  onChange={(e) => setTicketMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-white placeholder:text-gray-500"
                />
              </div>

              <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <p className="text-xs text-cyan-400 font-bold mb-1">💡 Tips for faster resolution</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Include screenshots if applicable</li>
                  <li>• Describe what you were doing when the issue occurred</li>
                  <li>• Mention any error messages you saw</li>
                  <li>• Provide your account information if relevant</li>
                </ul>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSubmitTicket}
                  className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all"
                >
                  Submit Ticket
                </button>
                <button
                  onClick={() => setShowTicketModal(false)}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Support;


