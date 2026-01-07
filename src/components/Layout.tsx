import React, { useState } from 'react';
import { AppRoute } from '../types';
import { ICONS } from '../constants';
import { useCart } from '../contexts/CartContext';

const CartBadge: React.FC = () => {
  const { getItemCount } = useCart();
  const count = getItemCount();
  if (count === 0) return null;
  return (
    <span className="absolute -top-1 -right-1 w-5 h-5 bg-cyan-500 rounded-full text-[10px] flex items-center justify-center text-black font-bold">
      {count}
    </span>
  );
};

interface LayoutProps {
  children: React.ReactNode;
  activeRoute: AppRoute;
  setActiveRoute: (route: AppRoute) => void;
  onOpenAI: () => void;
  isLoggedIn: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, activeRoute, setActiveRoute, onOpenAI, isLoggedIn }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const mainNav = [
    { id: AppRoute.DASHBOARD, label: 'Dashboard', icon: ICONS.Dashboard },
    { id: AppRoute.MARKETPLACE, label: 'Marketplace', icon: ICONS.Marketplace },
    { id: AppRoute.EARN, label: 'Earn', icon: ICONS.Earn },
    { id: AppRoute.ALLIANCE, label: 'Alliance', icon: ICONS.Alliance },
  ];

  const socialNav = [
    { id: AppRoute.FEED, label: 'Feed', icon: ICONS.Feed },
    { id: AppRoute.CHAT, label: 'Chat', icon: ICONS.Chat },
    { id: AppRoute.FRIENDS, label: 'Friends', icon: ICONS.Friends },
    { id: AppRoute.USERS, label: 'Users', icon: ICONS.Users },
    { id: AppRoute.FORUM, label: 'Forum', icon: ICONS.Forum },
    { id: AppRoute.AFFILIATE, label: 'Affiliate Mgr', icon: ICONS.Affiliate },
    { id: AppRoute.CONTENT_GENERATOR, label: 'Content Generator', icon: ICONS.ContentGenerator },
    { id: AppRoute.GOALS, label: 'Goals', icon: ICONS.Dashboard },
    { id: AppRoute.ACADEMY, label: 'Academy', icon: ICONS.Academy },
    { id: AppRoute.ABOUT, label: 'About Us', icon: ICONS.About },
    { id: AppRoute.NEWS, label: 'News', icon: ICONS.News },
    { id: AppRoute.PROFILE, label: 'Profile', icon: ICONS.Profile },
    { id: AppRoute.SUPPORT, label: 'Support', icon: ICONS.Support },
  ];

  const adminNav = [
    { id: AppRoute.ADMIN_VETTING, label: 'Vetting', icon: ICONS.Admin },
    { id: AppRoute.ADMIN_USERS, label: 'Users', icon: ICONS.Admin },
    { id: AppRoute.MOD_REPORTS, label: 'Reports', icon: ICONS.Admin },
  ];

  const NavContent = () => (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="mb-8 flex items-center gap-2 px-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
          <ICONS.NexusAI />
        </div>
        <h1 className="text-xl font-bold font-display text-gradient-cyan-purple">BitNexus</h1>
      </div>

      <div className="space-y-6">
        <section>
          <p className="px-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Main Core</p>
          <nav className="space-y-1">
            {mainNav.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveRoute(item.id); setIsSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${
                  activeRoute === item.id 
                  ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30 shadow-lg shadow-purple-500/10' 
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
              >
                <item.icon />
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            ))}
          </nav>
        </section>

        <section>
          <p className="px-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Social & Performance</p>
          <nav className="space-y-1">
            {socialNav.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveRoute(item.id); setIsSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${
                  activeRoute === item.id 
                  ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30' 
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
              >
                <item.icon />
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            ))}
          </nav>
        </section>

        <section>
          <p className="px-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Administration</p>
          <nav className="space-y-1">
            {adminNav.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveRoute(item.id); setIsSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${
                  activeRoute === item.id 
                  ? 'bg-red-500/10 text-red-400 border border-red-500/30' 
                  : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/50'
                }`}
              >
                <item.icon />
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            ))}
          </nav>
        </section>
      </div>

      <div className="mt-auto pt-6 border-t border-gray-800">
        <button 
          onClick={onOpenAI}
          className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 p-3 rounded-xl flex items-center justify-center gap-2 font-bold shadow-xl shadow-purple-900/20 hover:scale-[1.02] transition-transform text-sm"
        >
          <ICONS.NexusAI />
          AI Command
        </button>
        <button 
          onClick={() => {
            // Reload page to return to landing page
            window.location.reload();
          }}
          className="w-full mt-3 flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 border border-transparent hover:border-white/5 hover:text-cyan-400 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <span className="text-sm font-bold">Back to Landing</span>
        </button>
        <button 
          onClick={() => setActiveRoute(AppRoute.PROFILE)}
          className="w-full mt-3 flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 border border-transparent hover:border-white/5"
        >
          <div className="w-8 h-8 rounded-full bg-purple-600/30 border border-purple-500/50" />
          <span className="text-sm font-bold">Profile Settings</span>
        </button>
      </div>
    </div>
  );

  if (!isLoggedIn) return <div className="min-h-screen bg-[#030712]">{children}</div>;

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 lg:pl-64">
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 glass-card border-r border-gray-800 hidden lg:flex flex-col p-6 z-40">
        <NavContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          <aside 
            className="w-64 h-full bg-[#111827] border-r border-gray-800 p-6 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <NavContent />
          </aside>
        </div>
      )}

      {/* Header Mobile */}
      <header className="lg:hidden p-4 flex justify-between items-center glass-card border-b border-gray-800 sticky top-0 z-50">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 text-gray-400 hover:text-white"
        >
          <ICONS.Menu />
        </button>
        <h1 className="text-lg font-bold font-display text-gradient-cyan-purple">BitNexus</h1>
        <div className="flex gap-4 items-center">
           <button onClick={() => setActiveRoute(AppRoute.CART)} className="text-gray-400 relative">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
             <CartBadge />
           </button>
           <div 
             onClick={() => setActiveRoute(AppRoute.PROFILE)}
             className="w-8 h-8 rounded-full bg-purple-600/30 border border-purple-500/50 cursor-pointer" 
           />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 lg:p-8 max-w-7xl mx-auto min-h-screen pb-20 lg:pb-8">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 lg:hidden bg-[#1e1b4b] border-t border-purple-500/20 z-50">
        {/* Top Indicator Bar */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-purple-400 to-purple-500 rounded-b-full shadow-lg shadow-purple-500/50"></div>
        
        <div className="flex items-center justify-around px-2 py-3 pb-safe">
          {/* Forum */}
          <button
            onClick={() => { setActiveRoute(AppRoute.FORUM); setIsSidebarOpen(false); }}
            className={`flex flex-col items-center gap-1 px-2 py-1.5 rounded-xl transition-all ${
              activeRoute === AppRoute.FORUM
                ? 'text-purple-400'
                : 'text-gray-300'
            }`}
          >
            <ICONS.Forum />
            <span className="text-[10px] font-medium">Forum</span>
          </button>

          {/* Market */}
          <button
            onClick={() => { setActiveRoute(AppRoute.MARKETPLACE); setIsSidebarOpen(false); }}
            className={`flex flex-col items-center gap-1 px-2 py-1.5 rounded-xl transition-all ${
              activeRoute === AppRoute.MARKETPLACE
                ? 'text-purple-400'
                : 'text-gray-300'
            }`}
          >
            <ICONS.Marketplace />
            <span className="text-[10px] font-medium">Market</span>
          </button>

          {/* Central N Button (NexusAI/Dashboard) */}
          <button
            onClick={() => { setActiveRoute(AppRoute.DASHBOARD); setIsSidebarOpen(false); }}
            className="relative flex items-center justify-center w-14 h-14 -mt-6 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-500 shadow-lg shadow-purple-500/50 hover:scale-105 transition-transform z-10"
          >
            <span className="text-2xl font-bold text-white">N</span>
          </button>

          {/* Chat */}
          <button
            onClick={() => { setActiveRoute(AppRoute.CHAT); setIsSidebarOpen(false); }}
            className={`flex flex-col items-center gap-1 px-2 py-1.5 rounded-xl transition-all relative ${
              activeRoute === AppRoute.CHAT
                ? 'text-purple-400'
                : 'text-gray-300'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {/* First bubble (back) */}
              <path d="M19 13a2 2 0 0 1-2 2H5l-4 4V3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/>
              {/* Second overlapping bubble (front) */}
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span className="text-[10px] font-medium">Chat</span>
          </button>

          {/* Profile */}
          <button
            onClick={() => { setActiveRoute(AppRoute.PROFILE); setIsSidebarOpen(false); }}
            className={`flex flex-col items-center gap-1 px-2 py-1.5 rounded-xl transition-all ${
              activeRoute === AppRoute.PROFILE
                ? 'text-purple-400'
                : 'text-gray-300'
            }`}
          >
            <ICONS.Profile />
            <span className="text-[10px] font-medium">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Layout;

