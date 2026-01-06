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
    { id: AppRoute.SHOP, label: 'Token Shop', icon: ICONS.Shop },
  ];

  const socialNav = [
    { id: AppRoute.CHAT, label: 'Chat', icon: ICONS.Chat },
    { id: AppRoute.FRIENDS, label: 'Friends', icon: ICONS.Friends },
    { id: AppRoute.AFFILIATE, label: 'Affiliate Mgr', icon: ICONS.Affiliate },
    { id: AppRoute.CONTENT_GENERATOR, label: 'Content Generator', icon: ICONS.ContentGenerator },
    { id: AppRoute.GOALS, label: 'Goals', icon: ICONS.Dashboard },
    { id: AppRoute.ACADEMY, label: 'Academy', icon: ICONS.Academy },
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
      <main className="p-4 lg:p-8 max-w-7xl mx-auto min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;

