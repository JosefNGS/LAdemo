import React, { useState } from 'react';

interface AuthProps {
  onSuccess: () => void;
}

const Auth: React.FC<AuthProps> = ({ onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo mode - just call onSuccess
    onSuccess();
  };

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h1 className="text-3xl font-bold font-display text-gradient-cyan-purple">BitNexus</h1>
          </div>
          <p className="text-gray-500">Access the Command Center</p>
        </div>

        <div className="glass-card p-8 rounded-[2rem] border-white/5">
          <div className="flex gap-2 mb-6 bg-white/5 p-1 rounded-xl">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
                isLogin ? 'bg-purple-600 text-white' : 'text-gray-400'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
                !isLogin ? 'bg-purple-600 text-white' : 'text-gray-400'
              }`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="agent@nexus.io"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500/50 transition-colors"
                required
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500/50 transition-colors"
                required
              />
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded accent-purple-600" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-purple-400 hover:text-purple-300">Forgot password?</a>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl font-bold shadow-xl shadow-purple-900/40 hover:scale-[1.02] transition-transform"
            >
              {isLogin ? 'Access Command Center' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/5 text-center">
            <p className="text-xs text-gray-500">
              Demo Mode: Click to enter without authentication
            </p>
            <button
              onClick={onSuccess}
              className="mt-3 text-sm text-purple-400 hover:text-purple-300 font-bold"
            >
              Continue as Guest →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;



