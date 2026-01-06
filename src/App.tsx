import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Marketplace from './pages/Marketplace';
import Alliance from './pages/Alliance';
import Earn from './pages/Earn';
import TokenShop from './pages/TokenShop';
import Chat from './pages/Chat';
import Friends from './pages/Friends';
import AffiliateManager from './pages/AffiliateManager';
import ContentGenerator from './pages/ContentGenerator';
import Goals from './pages/Goals';
import Academy from './pages/Academy';
import Vetting from './pages/Vetting';
import Users from './pages/Users';
import Reports from './pages/Reports';
import NexusHub from './pages/NexusHub';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { AppRoute } from './types';

const App: React.FC = () => {
  const [activeRoute, setActiveRoute] = useState<AppRoute>(AppRoute.DASHBOARD);
  const [showAIHub, setShowAIHub] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Default to true for demo, set to false for real auth

  const PlaceholderPage = ({ title, desc }: { title: string, desc: string }) => (
    <div className="flex items-center justify-center min-h-[60vh] flex-col gap-4 text-center px-6">
       <div className="w-20 h-20 rounded-3xl bg-purple-600/10 flex items-center justify-center border border-purple-500/20 animate-pulse">
          <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
       </div>
       <h3 className="text-3xl font-bold font-display">{title}</h3>
       <p className="text-gray-500 max-w-sm text-lg">{desc}</p>
       <button onClick={() => setActiveRoute(AppRoute.DASHBOARD)} className="mt-4 px-8 py-3 bg-white text-black font-bold rounded-xl">Return to Dashboard</button>
    </div>
  );

  const renderContent = () => {
    switch (activeRoute) {
      case AppRoute.DASHBOARD: return <Dashboard />;
      case AppRoute.MARKETPLACE: return <Marketplace />;
      case AppRoute.ALLIANCE: return <Alliance />;
      case AppRoute.EARN: return <Earn />;
      case AppRoute.SHOP: return <TokenShop setActiveRoute={setActiveRoute} />;
      case AppRoute.ACADEMY: return <Academy />;
      case AppRoute.CHAT: return <Chat />;
      case AppRoute.AFFILIATE: return <AffiliateManager />;
      case AppRoute.CONTENT_GENERATOR: return <ContentGenerator />;
      case AppRoute.GOALS: return <Goals />;
      case AppRoute.FRIENDS: return <Friends />;
      case AppRoute.ADMIN_VETTING: return <Vetting />;
      case AppRoute.ADMIN_USERS: return <Users />;
      case AppRoute.MOD_REPORTS: return <Reports />;
      case AppRoute.CART: return <Cart setActiveRoute={setActiveRoute} />;
      case AppRoute.CHECKOUT: return <Checkout setActiveRoute={setActiveRoute} />;
      case AppRoute.PROFILE: return (
        <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-3xl font-bold font-display">Command Profile</h2>
          <div className="glass-card p-8 rounded-[2.5rem] border-white/5 flex flex-col md:flex-row gap-8 items-center shadow-2xl">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-cyan-400 via-purple-600 to-purple-900">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=nexus" className="w-full h-full rounded-full object-cover border-4 border-[#030712]" alt="Profile" />
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-purple-600 rounded-full border-2 border-[#030712] hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </button>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold font-display">Agent Nexus-77</h3>
              <p className="text-gray-500 mt-1">Prime Core Member • Dec 2024</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">LEGACY NODE</span>
                <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">MASTER AFFILIATE</span>
              </div>
            </div>
            <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all text-sm uppercase">
              Wallet Connect
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-[2rem] border-white/5">
              <h4 className="font-bold mb-6 text-lg">Privacy Matrix</h4>
              <div className="space-y-6">
                {[
                  { label: 'Public Profile Visibility', active: true },
                  { label: 'Broadcast Earnings Stats', active: false },
                  { label: 'Allow Neural Direct Comms', active: true },
                ].map((ctrl, i) => (
                  <div key={ctrl.label} className="flex items-center justify-between">
                    <span className="text-sm text-gray-400 font-medium">{ctrl.label}</span>
                    <div className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${ctrl.active ? 'bg-purple-600' : 'bg-gray-700'}`}>
                       <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${ctrl.active ? 'left-7' : 'left-1'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card p-6 rounded-[2rem] border-white/5">
              <h4 className="font-bold mb-6 text-lg">Security Baseline</h4>
              <div className="space-y-4">
                <div className="p-5 bg-green-500/5 border border-green-500/10 rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-green-400">Two-Factor Auth</p>
                    <p className="text-[10px] text-green-500/60 uppercase font-bold tracking-widest mt-1">Shield Status: High</p>
                  </div>
                  <button className="text-xs font-bold text-green-400 hover:underline">Manage</button>
                </div>
                <button className="w-full py-4 text-gray-500 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">Rotate Access Token</button>
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full py-4 bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-widest rounded-2xl border border-red-500/20 hover:bg-red-500/20 transition-all"
                >
                  Terminate Session
                </button>
              </div>
            </div>
          </div>

          {/* Social Media Connections */}
          <div className="glass-card p-6 rounded-[2rem] border-white/5">
            <h4 className="font-bold mb-6 text-lg">Social Media Connections</h4>
            <p className="text-gray-500 text-sm mb-6">Connect your social accounts to enable content sharing and cross-platform promotion</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { id: 'youtube', name: 'YouTube', icon: '▶️', color: 'bg-red-600', connected: false },
                { id: 'instagram', name: 'Instagram', icon: '📷', color: 'bg-gradient-to-r from-purple-600 to-pink-600', connected: true },
                { id: 'facebook', name: 'Facebook', icon: '📘', color: 'bg-blue-600', connected: false },
                { id: 'tiktok', name: 'TikTok', icon: '🎵', color: 'bg-black', connected: true },
                { id: 'snapchat', name: 'Snapchat', icon: '👻', color: 'bg-yellow-400', connected: false },
                { id: 'twitter', name: 'X (Twitter)', icon: '🐦', color: 'bg-black', connected: false },
                { id: 'linkedin', name: 'LinkedIn', icon: '💼', color: 'bg-blue-700', connected: false },
              ].map((social) => (
                <div
                  key={social.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    social.connected
                      ? 'bg-green-500/10 border-green-500/30'
                      : 'bg-white/5 border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${social.color} flex items-center justify-center text-lg`}>
                        {social.icon}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{social.name}</p>
                        <p className={`text-xs ${social.connected ? 'text-green-400' : 'text-gray-500'}`}>
                          {social.connected ? 'Connected' : 'Not connected'}
                        </p>
                      </div>
                    </div>
                    {social.connected && (
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    )}
                  </div>
                  <button
                    className={`w-full py-2 rounded-xl text-xs font-bold transition-all ${
                      social.connected
                        ? 'bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20'
                        : 'bg-purple-600 hover:bg-purple-500 text-white'
                    }`}
                    onClick={() => {
                      // Mock connection toggle
                      alert(social.connected ? `Disconnect ${social.name}?` : `Connect to ${social.name}?`);
                    }}
                  >
                    {social.connected ? 'Disconnect' : 'Connect'}
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
              <p className="text-xs text-cyan-400 font-bold mb-1">💡 Tip</p>
              <p className="text-xs text-gray-400">
                Connected accounts enable automatic content sharing from the Content Generator and cross-platform analytics tracking.
              </p>
            </div>
          </div>
        </div>
      );
      default: return <Dashboard />;
    }
  };

  if (!isLoggedIn) {
    if (authView === 'login') {
      return (
        <Login
          onSuccess={() => setIsLoggedIn(true)}
          onSwitchToRegister={() => setAuthView('register')}
          onSwitchToForgotPassword={() => setAuthView('forgot-password')}
        />
      );
    }
    if (authView === 'register') {
      return (
        <Register
          onSuccess={() => setIsLoggedIn(true)}
          onSwitchToLogin={() => setAuthView('login')}
        />
      );
    }
    if (authView === 'forgot-password') {
      return (
        <ForgotPassword
          onSwitchToLogin={() => setAuthView('login')}
        />
      );
    }
  }

  return (
    <>
      <Layout 
        activeRoute={activeRoute} 
        setActiveRoute={setActiveRoute} 
        onOpenAI={() => setShowAIHub(true)}
        isLoggedIn={isLoggedIn}
      >
        {renderContent()}
      </Layout>
      {showAIHub && <NexusHub onClose={() => setShowAIHub(false)} />}
    </>
  );
};

export default App;
