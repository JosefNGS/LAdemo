import React, { useState, useEffect, useRef } from 'react';
import { getAIAdvice } from '../services/geminiService';
import { ICONS } from '../constants';

interface NexusHubProps {
  onClose: () => void;
}

const NexusHub: React.FC<NexusHubProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: "Welcome to the NexusAI Command Center. How can I optimize your affiliate empire today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const aiResponse = await getAIAdvice(userMsg);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'assistant', text: aiResponse }]);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-[#0b0f1a] rounded-[2rem] border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 rounded-xl text-cyan-400">
              <ICONS.NexusAI />
            </div>
            <div>
              <h2 className="text-xl font-bold font-display">NexusAI Hub</h2>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-gray-500">Neural Network Active</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        {/* Input Area - Moved to Top */}
        <div className="p-6 border-b border-white/5">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask for strategy, ROI tips, or ecosystem help..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
            <button 
              onClick={handleSend}
              disabled={isTyping}
              className="p-3 bg-cyan-500 text-black rounded-xl hover:bg-cyan-400 transition-colors disabled:opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 14-7-7 14-2-7-5-2Z"/></svg>
            </button>
          </div>
          <p className="text-[10px] text-center text-gray-600 mt-4 uppercase tracking-widest font-bold">Encrypted Communication Stream v3.1</p>
        </div>

        {/* Chat Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 hide-scrollbar">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl ${
                m.role === 'user' 
                ? 'bg-purple-600 text-white rounded-tr-none' 
                : 'bg-white/5 text-gray-200 border border-white/10 rounded-tl-none'
              }`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 rounded-tl-none flex gap-1">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" />
              </div>
            </div>
          )}
          
          {/* Quick Action Buttons - Show when only welcome message exists */}
          {messages.length === 1 && !isTyping && (
            <div className="space-y-3">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Quick Actions</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { text: 'How to increase ROI?', icon: '💰' },
                  { text: 'Best products to promote?', icon: '🛒' },
                  { text: 'Network building strategy?', icon: '👥' },
                  { text: 'MEV bot trading tips?', icon: '🤖' },
                  { text: 'Content creation help?', icon: '📱' },
                  { text: 'Financial freedom plan?', icon: '🎯' },
                ].map((action, i) => (
                  <button
                    key={i}
                    onClick={async () => {
                      const userMsg = action.text;
                      setInput('');
                      setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
                      setIsTyping(true);
                      const aiResponse = await getAIAdvice(userMsg);
                      setIsTyping(false);
                      setMessages(prev => [...prev, { role: 'assistant', text: aiResponse }]);
                    }}
                    className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-left transition-all text-xs"
                  >
                    <span className="mr-2">{action.icon}</span>
                    <span className="text-gray-300">{action.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NexusHub;


