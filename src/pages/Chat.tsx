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
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'Agent Nexus-42', text: 'Hey! Ready for the alliance push?', timestamp: new Date(Date.now() - 3600000), isSelf: false },
    { id: '2', sender: 'You', text: 'Absolutely! Let\'s coordinate at 3pm UTC', timestamp: new Date(Date.now() - 3500000), isSelf: true },
    { id: '3', sender: 'Agent Nexus-88', text: 'Count me in. I have 5 referrals ready.', timestamp: new Date(Date.now() - 1800000), isSelf: false },
  ]);
  const [input, setInput] = useState('');
  const [selectedChat, setSelectedChat] = useState<string | null>('nexus-42');
  const scrollRef = useRef<HTMLDivElement>(null);

  const chats = [
    { id: 'nexus-42', name: 'Agent Nexus-42', lastMessage: 'Ready for the alliance push?', unread: 0, online: true },
    { id: 'nexus-88', name: 'Agent Nexus-88', lastMessage: 'Count me in. I have 5 referrals ready.', unread: 1, online: true },
    { id: 'nexus-15', name: 'Agent Nexus-15', lastMessage: 'Thanks for the tip on the marketplace!', unread: 0, online: false },
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'You',
      text: input,
      timestamp: new Date(),
      isSelf: true,
    };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold font-display">Encrypted Chat</h2>
        <p className="text-gray-500 text-sm">Real-time direct messaging with end-to-end NXC encryption</p>
      </div>

      {/* Financial Freedom Chat Groups */}
      <div className="glass-card p-6 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 mb-6">
        <h3 className="text-xl font-bold mb-4">Financial Freedom Chat Groups</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Beginner Affiliates', members: 234, description: 'Support group for new affiliates', icon: '👶', color: 'green' },
            { name: 'High Earners', members: 89, description: 'Mastermind for top performers', icon: '💎', color: 'purple' },
            { name: 'MEV Bot Traders', members: 189, description: 'Discussion on MEV trading strategies', icon: '🤖', color: 'purple' },
            { name: 'XAB Bot Traders (XRP)', members: 156, description: 'XRP-specific bot trading discussions', icon: '🤖', color: 'cyan' },
            { name: 'Network Builders', members: 201, description: 'Team building and recruitment tips', icon: '🌐', color: 'yellow' },
          ].map((group) => (
            <div key={group.name} className={`p-4 rounded-xl border border-${group.color}-500/20 bg-${group.color}-500/5 hover:border-${group.color}-500/40 transition-all cursor-pointer`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{group.icon}</span>
                <h4 className="font-bold text-sm">{group.name}</h4>
              </div>
              <p className="text-xs text-gray-400 mb-2">{group.description}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">{group.members} members</span>
                <button className={`px-3 py-1 bg-${group.color}-600 hover:bg-${group.color}-500 rounded-lg font-bold transition-all`}>
                  Join
                </button>
              </div>
            </div>
          ))}
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
                onClick={() => setSelectedChat(chat.id)}
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
          <div className="p-4 border-b border-white/5 flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#111827]" />
            </div>
            <div>
              <h3 className="font-bold">Agent Nexus-42</h3>
              <p className="text-gray-500 text-xs">Online • Encrypted</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
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
            ))}
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default Chat;

