import React, { useState, useRef, useEffect } from 'react';
import { ICONS } from '../constants';

interface Message {
  id: string;
  sender: string;
  text: string;
  timestamp: Date;
  isSelf: boolean;
}

const Chat: React.FC = () => {
  const [joinedGroups, setJoinedGroups] = useState<Set<string>>(new Set());
  const [showJoinModal, setShowJoinModal] = useState<{ name: string; icon: string; color: string } | null>(null);
  const [showChatGroupsModal, setShowChatGroupsModal] = useState(false);

  const [chats, setChats] = useState([
    { id: 'nexus-42', name: 'Agent Nexus-42', lastMessage: 'Ready for the alliance push?', unread: 0, online: true },
    { id: 'nexus-88', name: 'Agent Nexus-88', lastMessage: 'Count me in. I have 5 referrals ready.', unread: 1, online: true },
    { id: 'nexus-15', name: 'Agent Nexus-15', lastMessage: 'Thanks for the tip on the marketplace!', unread: 0, online: false },
  ]);

  const getChatIdFromName = (name: string): string | null => {
    const chat = chats.find(c => c.name === name);
    return chat ? chat.id : null;
  };

  // Messages per chat
  const [chatMessages, setChatMessages] = useState<{ [key: string]: Message[] }>({
    'nexus-42': [
      { id: '1', sender: 'Agent Nexus-42', text: 'Hey! Ready for the alliance push?', timestamp: new Date(Date.now() - 3600000), isSelf: false },
      { id: '2', sender: 'You', text: 'Absolutely! Let\'s coordinate at 3pm UTC', timestamp: new Date(Date.now() - 3500000), isSelf: true },
    ],
    'nexus-88': [
      { id: '3', sender: 'Agent Nexus-88', text: 'Count me in. I have 5 referrals ready.', timestamp: new Date(Date.now() - 1800000), isSelf: false },
      { id: '4', sender: 'You', text: 'Great! Let\'s sync up tomorrow', timestamp: new Date(Date.now() - 1700000), isSelf: true },
    ],
    'nexus-15': [
      { id: '5', sender: 'Agent Nexus-15', text: 'Thanks for the tip on the marketplace!', timestamp: new Date(Date.now() - 7200000), isSelf: false },
      { id: '6', sender: 'You', text: 'No problem! Happy to help', timestamp: new Date(Date.now() - 7100000), isSelf: true },
    ],
  });

  const handleJoinGroup = (groupName: string) => {
    if (joinedGroups.has(groupName)) {
      // Leave group
      setJoinedGroups(prev => {
        const newSet = new Set(prev);
        newSet.delete(groupName);
        return newSet;
      });
    } else {
      // Show join confirmation modal
      const group = chatGroups.find(g => g.name === groupName);
      if (group) {
        setShowJoinModal(group);
      }
    }
  };

  const confirmJoin = () => {
    if (showJoinModal) {
      setJoinedGroups(prev => new Set(prev).add(showJoinModal.name));
      setShowJoinModal(null);
    }
  };

  const chatGroups = [
    { name: 'Beginner Affiliates', members: 234, description: 'Support group for new affiliates', icon: '👶', color: 'green' },
    { name: 'High Earners', members: 89, description: 'Mastermind for top performers', icon: '💎', color: 'purple' },
    { name: 'MEV Bot Traders', members: 189, description: 'Discussion on MEV trading strategies', icon: '🤖', color: 'purple' },
    { name: 'XAB Bot Traders (XRP)', members: 156, description: 'XRP-specific bot trading discussions', icon: '🤖', color: 'cyan' },
    { name: 'Network Builders', members: 201, description: 'Team building and recruitment tips', icon: '🌐', color: 'yellow' },
  ];

  const [input, setInput] = useState('');
  const [selectedChat, setSelectedChat] = useState<string | null>(() => {
    // Check if user navigated from Friends page
    const selectedUser = sessionStorage.getItem('selectedChatUser');
    if (selectedUser) {
      const chatId = getChatIdFromName(selectedUser);
      sessionStorage.removeItem('selectedChatUser');
      return chatId || 'nexus-42';
    }
    return 'nexus-42';
  });
  const scrollRef = useRef<HTMLDivElement>(null);

  const selectedChatData = chats.find(c => c.id === selectedChat);
  const currentMessages = selectedChat ? (chatMessages[selectedChat] || []) : [];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [currentMessages, selectedChat]);

  const handleSend = () => {
    if (!input.trim() || !selectedChat) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'You',
      text: input,
      timestamp: new Date(),
      isSelf: true,
    };
    setChatMessages(prev => ({
      ...prev,
      [selectedChat]: [...(prev[selectedChat] || []), newMessage]
    }));
    
    // Update last message in chat list
    setChats(prev => prev.map(chat => 
      chat.id === selectedChat 
        ? { ...chat, lastMessage: input }
        : chat
    ));
    
    setInput('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold font-display">Encrypted Chat</h2>
        <p className="text-gray-500 text-sm">Real-time direct messaging with end-to-end NXC encryption</p>
      </div>

      {/* Financial Freedom Chat Groups */}
      {/* Mobile Button */}
      <button
        onClick={() => setShowChatGroupsModal(true)}
        className="md:hidden w-full glass-card p-4 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 mb-6 flex items-center justify-between hover:border-purple-500/40 transition-all"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">💬</span>
          <div className="text-left">
            <h3 className="text-lg font-bold">Financial Freedom Chat Groups</h3>
            <p className="text-xs text-gray-400">{chatGroups.length} groups available</p>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>

      {/* Desktop Full Section */}
      <div className="hidden md:block glass-card p-6 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 mb-6">
        <h3 className="text-xl font-bold mb-4">Financial Freedom Chat Groups</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {chatGroups.map((group) => {
            const isJoined = joinedGroups.has(group.name);
            const colorClasses = {
              green: { border: 'border-green-500/20', bg: 'bg-green-500/5', hover: 'hover:border-green-500/40', button: 'bg-green-600 hover:bg-green-500', buttonJoined: 'bg-green-500/20 text-green-400 border border-green-500/30' },
              purple: { border: 'border-purple-500/20', bg: 'bg-purple-500/5', hover: 'hover:border-purple-500/40', button: 'bg-purple-600 hover:bg-purple-500', buttonJoined: 'bg-purple-500/20 text-purple-400 border border-purple-500/30' },
              cyan: { border: 'border-cyan-500/20', bg: 'bg-cyan-500/5', hover: 'hover:border-cyan-500/40', button: 'bg-cyan-600 hover:bg-cyan-500', buttonJoined: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' },
              yellow: { border: 'border-yellow-500/20', bg: 'bg-yellow-500/5', hover: 'hover:border-yellow-500/40', button: 'bg-yellow-600 hover:bg-yellow-500', buttonJoined: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' },
            };
            const colors = colorClasses[group.color as keyof typeof colorClasses] || colorClasses.green;

            return (
              <div key={group.name} className={`p-4 rounded-xl border ${colors.border} ${colors.bg} ${colors.hover} transition-all cursor-pointer`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{group.icon}</span>
                  <h4 className="font-bold text-sm">{group.name}</h4>
                </div>
                <p className="text-xs text-gray-400 mb-2">{group.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">{group.members + (isJoined ? 1 : 0)} members</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleJoinGroup(group.name);
                    }}
                    className={`px-3 py-1 rounded-lg font-bold transition-all ${
                      isJoined 
                        ? `${colors.buttonJoined} text-xs` 
                        : `${colors.button} text-white text-xs`
                    }`}
                  >
                    {isJoined ? 'Joined' : 'Join'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Automated Financial Tips */}
      <div className="glass-card p-4 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 mb-6">
        <div className="flex items-start gap-3">
          <div className="text-2xl">💡</div>
          <div className="flex-1">
            <p className="text-xs font-bold text-cyan-400 mb-1">Today's Financial Freedom Tip</p>
            <p className="text-sm text-gray-300">
              Focus on products with recurring commissions - they build sustainable passive income over time. Check the Marketplace for products tagged "Recurring Income".
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-12rem)]">
        {/* Chat List */}
        <div className="lg:col-span-1 glass-card rounded-3xl border border-white/5 p-4 overflow-y-auto">
          <div className="space-y-2">
            {chats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => {
                  setSelectedChat(chat.id);
                  // Clear unread count when chat is selected
                  if (chat.unread > 0) {
                    setChats(prev => prev.map(c => 
                      c.id === chat.id ? { ...c, unread: 0 } : c
                    ));
                  }
                }}
                className={`w-full p-4 rounded-xl text-left transition-all ${
                  selectedChat === chat.id
                    ? 'bg-purple-600/20 border border-purple-500/30'
                    : 'bg-white/5 border border-transparent hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600" />
                    {chat.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#111827]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-sm truncate">{chat.name}</h4>
                      {chat.unread > 0 && (
                        <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-xs truncate">{chat.lastMessage}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="lg:col-span-3 glass-card rounded-3xl border border-white/5 flex flex-col">
          {selectedChatData ? (
            <>
              <div className="p-4 border-b border-white/5 flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600" />
                  {selectedChatData.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#111827]" />
                  )}
                </div>
                <div>
                  <h3 className="font-bold">{selectedChatData.name}</h3>
                  <p className="text-gray-500 text-xs">{selectedChatData.online ? 'Online' : 'Offline'} • Encrypted</p>
                </div>
              </div>
            </>
          ) : (
            <div className="p-4 border-b border-white/5 text-center">
              <p className="text-gray-500">Select a chat to start messaging</p>
            </div>
          )}

          {selectedChatData && (
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 hide-scrollbar">
              {currentMessages.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500 text-center">
                    No messages yet. Start the conversation!
                  </p>
                </div>
              ) : (
                currentMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isSelf ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[70%] p-4 rounded-2xl ${
                  msg.isSelf
                    ? 'bg-purple-600/20 border border-purple-500/30'
                    : 'bg-white/5 border border-white/5'
                }`}>
                  {!msg.isSelf && (
                    <p className="text-xs font-bold text-gray-400 mb-1">{msg.sender}</p>
                  )}
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
                ))
              )}
            </div>
          )}

          {selectedChatData && (
            <div className="p-4 border-t border-white/5 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500/50"
            />
            <button
              onClick={handleSend}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
            >
              Send
            </button>
          </div>
          )}
        </div>
      </div>

      {/* Join Group Confirmation Modal */}
      {showJoinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowJoinModal(null)} />
          <div className="relative w-full max-w-md glass-card rounded-3xl border border-white/5 z-10">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-display">Join Group</h2>
                <button
                  onClick={() => setShowJoinModal(null)}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 pb-6 border-b border-white/5">
                  <div className="text-4xl">{showJoinModal.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold">{showJoinModal.name}</h3>
                    <p className="text-gray-500 text-sm">
                      {chatGroups.find(g => g.name === showJoinModal.name)?.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <h4 className="text-sm font-bold mb-3">What you'll get:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Access to group chat discussions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Share strategies and tips with members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Get help from experienced affiliates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Network with like-minded members</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                  <p className="text-xs text-cyan-400 font-bold mb-1">💡 Group Rules</p>
                  <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
                    <li>Be respectful and supportive</li>
                    <li>No spam or self-promotion</li>
                    <li>Share valuable insights and experiences</li>
                    <li>Help newcomers when possible</li>
                  </ul>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setShowJoinModal(null)}
                    className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmJoin}
                    className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl font-bold hover:scale-[1.02] transition-transform"
                  >
                    Join Group
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Groups Modal (Mobile) */}
      {showChatGroupsModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:hidden">
          <div className="glass-card p-6 rounded-3xl border border-white/10 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Financial Freedom Chat Groups</h3>
              <button
                onClick={() => setShowChatGroupsModal(false)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              {chatGroups.map((group) => {
                const isJoined = joinedGroups.has(group.name);
                const colorClasses = {
                  green: { border: 'border-green-500/20', bg: 'bg-green-500/5', hover: 'hover:border-green-500/40', button: 'bg-green-600 hover:bg-green-500', buttonJoined: 'bg-green-500/20 text-green-400 border border-green-500/30' },
                  purple: { border: 'border-purple-500/20', bg: 'bg-purple-500/5', hover: 'hover:border-purple-500/40', button: 'bg-purple-600 hover:bg-purple-500', buttonJoined: 'bg-purple-500/20 text-purple-400 border border-purple-500/30' },
                  cyan: { border: 'border-cyan-500/20', bg: 'bg-cyan-500/5', hover: 'hover:border-cyan-500/40', button: 'bg-cyan-600 hover:bg-cyan-500', buttonJoined: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' },
                  yellow: { border: 'border-yellow-500/20', bg: 'bg-yellow-500/5', hover: 'hover:border-yellow-500/40', button: 'bg-yellow-600 hover:bg-yellow-500', buttonJoined: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' },
                };
                const colors = colorClasses[group.color as keyof typeof colorClasses] || colorClasses.green;

                return (
                  <div key={group.name} className={`p-4 rounded-xl border ${colors.border} ${colors.bg} transition-all`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{group.icon}</span>
                      <h4 className="font-bold">{group.name}</h4>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{group.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{group.members + (isJoined ? 1 : 0)} members</span>
                      <button 
                        onClick={() => {
                          handleJoinGroup(group.name);
                        }}
                        className={`px-4 py-2 rounded-lg font-bold transition-all ${
                          isJoined 
                            ? `${colors.buttonJoined} text-sm` 
                            : `${colors.button} text-white text-sm`
                        }`}
                      >
                        {isJoined ? 'Joined' : 'Join'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setShowChatGroupsModal(false)}
              className="w-full mt-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;


