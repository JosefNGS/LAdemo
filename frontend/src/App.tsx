import React, { useState, useEffect } from 'react';
import { NotificationProvider } from './contexts/NotificationContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Marketplace from './pages/Marketplace';
import MyProducts from './pages/MyProducts';
import Alliance from './pages/Alliance';
import Earn from './pages/Earn';
import BotLab from './pages/BotLab';
import TokenShop from './pages/TokenShop';
import Chat from './pages/Chat';
import Friends from './pages/Friends';
import Forum from './pages/Forum';
import AffiliateManager from './pages/AffiliateManager';
import ContentGenerator from './pages/ContentGenerator';
import Goals from './pages/Goals';
import Academy from './pages/Academy';
import GettingStarted from './pages/GettingStarted';
import Vetting from './pages/Vetting';
import Users from './pages/Users';
import Reports from './pages/Reports';
import NexusHub from './pages/NexusHub';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import News from './pages/News';
import AllUsers from './pages/AllUsers';
import Support from './pages/Support';
import Feed from './pages/Feed';
import Governance from './pages/Governance';
import AdminView from './pages/AdminView';
import GettingStartedModal from './components/GettingStartedModal';
import PlatformAdminUsers from './components/PlatformAdminUsers';
import { AppRoute } from './types';

const App: React.FC = () => {
  const [activeRoute, setActiveRoute] = useState<AppRoute>(AppRoute.DASHBOARD);
  const [showAIHub, setShowAIHub] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Default to true for demo, set to false for real auth
  const [showGettingStartedModal, setShowGettingStartedModal] = useState(false);

  // Check if user has seen getting started modal on login
  useEffect(() => {
    if (isLoggedIn) {
      const hasSeenGettingStarted = localStorage.getItem('hasSeenGettingStarted');
      if (!hasSeenGettingStarted) {
        setShowGettingStartedModal(true);
      }
    }
  }, [isLoggedIn]);

  // Scroll to top when route changes
  useEffect(() => {
    // Scroll window to top
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    
    // Also scroll main content area to top (for mobile/desktop layouts)
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [activeRoute]);

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
      case AppRoute.DASHBOARD: return <Dashboard setActiveRoute={setActiveRoute} />;
      case AppRoute.MARKETPLACE: return <Marketplace setActiveRoute={setActiveRoute} />;
      case AppRoute.MY_PRODUCTS: return <MyProducts />;
      case AppRoute.ALLIANCE: return <Alliance />;
      case AppRoute.EARN: return <Earn setActiveRoute={setActiveRoute} />;
      case AppRoute.BOT_LAB: return <BotLab />;
      case AppRoute.SHOP: return <TokenShop setActiveRoute={setActiveRoute} />;
      case AppRoute.ACADEMY: return <Academy setActiveRoute={setActiveRoute} />;
      case AppRoute.GETTING_STARTED: return <GettingStarted setActiveRoute={setActiveRoute} />;
      case AppRoute.FEED: return <Feed />;
      case AppRoute.CHAT: return <Chat />;
      case AppRoute.FORUM: return <Forum />;
      case AppRoute.AFFILIATE: return <AffiliateManager />;
      case AppRoute.CONTENT_GENERATOR: return <ContentGenerator setActiveRoute={setActiveRoute} />;
      case AppRoute.GOALS: return <Goals />;
      case AppRoute.FRIENDS: return <Friends setActiveRoute={setActiveRoute} />;
      case AppRoute.ABOUT: return <About />;
      case AppRoute.NEWS: return <News />;
      case AppRoute.USERS: return <AllUsers setActiveRoute={setActiveRoute} />;
      case AppRoute.SUPPORT: return <Support />;
      case AppRoute.GOVERNANCE: return <Governance />;
      case AppRoute.ADMIN_VIEW: return <AdminView setActiveRoute={setActiveRoute} />;
      case AppRoute.ADMIN_VETTING: return <Vetting />;
      case AppRoute.ADMIN_USERS: return <Users />;
      case AppRoute.MOD_REPORTS: return <Reports />;
      case AppRoute.PROFILE_JOSEF: return <TeamProfile profile={teamProfiles.find(p => p.id === 'josef')!} setActiveRoute={setActiveRoute} />;
      case AppRoute.PROFILE_CRAIG: return <TeamProfile profile={teamProfiles.find(p => p.id === 'craig')!} setActiveRoute={setActiveRoute} />;
      case AppRoute.PROFILE_JONNE: return <TeamProfile profile={teamProfiles.find(p => p.id === 'jonne')!} setActiveRoute={setActiveRoute} />;
      case AppRoute.PROFILE_SVEIN: return <TeamProfile profile={teamProfiles.find(p => p.id === 'svein')!} setActiveRoute={setActiveRoute} />;
      case AppRoute.PROFILE_LEE: return <TeamProfile profile={teamProfiles.find(p => p.id === 'lee')!} setActiveRoute={setActiveRoute} />;
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
                <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">ADMIN</span>
                <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">LEGACY NODE</span>
                <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">MASTER AFFILIATE</span>
                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">✅ VERIFIED</span>
                <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">⭐ PREMIUM VENDOR</span>
              </div>
            </div>
            <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all text-sm uppercase">
              Wallet Connect
            </button>
          </div>
          
          {/* Verification Status */}
          <div className="glass-card p-6 rounded-[2rem] border-white/5">
            <h4 className="font-bold mb-6 text-lg">Verification Status</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-400">Trust Score</span>
                  <span className="text-2xl font-bold text-cyan-400">92/100</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-400">Verification Level</span>
                  <span className="text-lg font-bold text-purple-400">Gold</span>
                </div>
                <p className="text-xs text-gray-500">Enhanced Profile Verified</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { type: 'email-verified', name: 'Email Verified', icon: '✉️', verified: true },
                { type: 'phone-verified', name: 'Phone Verified', icon: '📱', verified: true },
                { type: 'identity-verified', name: 'Identity Verified', icon: '🆔', verified: true },
                { type: 'profile-complete', name: 'Profile Complete', icon: '✅', verified: true },
                { type: 'photo-verified', name: 'Photo Verified', icon: '📷', verified: true },
                { type: 'payment-verified', name: 'Payment Verified', icon: '💳', verified: true },
                { type: 'first-sale', name: 'First Sale', icon: '🎯', verified: true },
                { type: 'active-member', name: 'Active Member', icon: '📈', verified: true },
                { type: 'network-builder', name: 'Network Builder', icon: '👥', verified: true },
              ].map((badge) => (
                <div
                  key={badge.type}
                  className="flex items-center gap-2 px-3 py-2 bg-green-500/10 border border-green-500/20 rounded-lg"
                  title={badge.name}
                >
                  <span className="text-sm">{badge.icon}</span>
                  <span className="text-xs font-bold text-green-400">{badge.name}</span>
                </div>
              ))}
            </div>
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

          {/* KYC/AML Verification (Optional) */}
          <div className="glass-card p-6 rounded-[2rem] border-white/5">
            <h4 className="font-bold mb-4 text-lg">Identity Verification (Optional)</h4>
            <p className="text-sm text-gray-400 mb-6">Complete KYC/AML verification to enhance your profile credibility and access premium features</p>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">✅</span>
                    <span className="font-bold text-green-400">Identity Verified</span>
                  </div>
                  <p className="text-xs text-gray-400">KYC/AML verification completed on Dec 15, 2024</p>
                </div>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold border border-green-500/30">Verified</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-400">Verification Level</span>
                    <span className="text-sm font-bold text-purple-400">Enhanced</span>
                  </div>
                  <p className="text-xs text-gray-500">Government ID + Selfie Verified</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-400">AML Status</span>
                    <span className="text-sm font-bold text-green-400">Clear</span>
                  </div>
                  <p className="text-xs text-gray-500">No sanctions or adverse media</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 px-4 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-sm transition-all">
                View Certificate
              </button>
              <button className="flex-1 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-sm transition-all">
                Update Verification
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">🔒 Your verification data is encrypted and GDPR compliant</p>
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

          {/* Goals Section */}
          <div className="mt-8">
            <Goals />
          </div>

          {/* Platform Admin Users */}
          <PlatformAdminUsers />
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

  const handleCloseGettingStarted = () => {
    setShowGettingStartedModal(false);
    localStorage.setItem('hasSeenGettingStarted', 'true');
  };

  return (
    <NotificationProvider userId="current-user">
      <Layout 
        activeRoute={activeRoute} 
        setActiveRoute={setActiveRoute} 
        onOpenAI={() => setShowAIHub(true)}
        isLoggedIn={isLoggedIn}
      >
        {renderContent()}
      </Layout>
      {showAIHub && <NexusHub onClose={() => setShowAIHub(false)} />}
      {showGettingStartedModal && (
        <GettingStartedModal 
          onClose={handleCloseGettingStarted}
          setActiveRoute={setActiveRoute}
        />
      )}
    </NotificationProvider>
  );
};

export default App;
