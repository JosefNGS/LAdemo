import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-card border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black font-futuristic tracking-tighter">
            BIT<span className="text-cyan-400">NEXUS</span>
          </div>
          <a 
            href="/" 
            className="px-6 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold font-futuristic hover:bg-cyan-500 hover:text-black transition-all uppercase tracking-widest"
          >
            ← Return
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 via-transparent to-cyan-600/10" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6 px-4 py-1 border border-cyan-400/30 rounded-full bg-cyan-400/5">
            <span className="text-[10px] font-bold font-futuristic text-cyan-400 tracking-[0.3em] uppercase">The Declaration</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-futuristic mb-8 uppercase italic leading-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-600 to-cyan-400">Manifesto</span>
          </h1>
          <p className="text-xl text-white/70 font-medium max-w-2xl mx-auto">
            A declaration of independence from the old economy. A blueprint for sovereign wealth in the age of AI.
          </p>
        </div>
      </section>

      {/* Manifesto Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Principle 1 */}
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-3xl font-black font-futuristic flex-shrink-0">
                01
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black font-futuristic mb-4 uppercase">Decentralization is Freedom</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  The centralized economy has failed us. It extracts value from creators, rewards gatekeepers, and traps individuals in cycles of dependency. 
                  <span className="text-cyan-400 font-bold"> BitNexus is the antidote.</span>
                </p>
                <p className="text-base text-white/60 mt-4 leading-relaxed">
                  We believe in a world where every affiliate link, every product promotion, and every network connection operates on a transparent, decentralized infrastructure. 
                  No middlemen. No gatekeepers. Just pure value exchange between creators and consumers.
                </p>
              </div>
            </div>
          </div>

          {/* Principle 2 */}
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-3xl font-black font-futuristic flex-shrink-0">
                02
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black font-futuristic mb-4 uppercase">AI is Your Co-Pilot</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  Artificial intelligence isn't here to replace you—it's here to amplify you. 
                  <span className="text-purple-400 font-bold"> The future belongs to those who leverage AI, not those who fear it.</span>
                </p>
                <p className="text-base text-white/60 mt-4 leading-relaxed">
                  BitNexus integrates AI at every level: content generation, market analysis, network optimization, and revenue automation. 
                  We're not building a platform; we're building an AI-powered revenue engine that works while you sleep.
                </p>
              </div>
            </div>
          </div>

          {/* Principle 3 */}
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 hover:border-green-500/30 transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center text-3xl font-black font-futuristic flex-shrink-0">
                03
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black font-futuristic mb-4 uppercase">Financial Freedom is a Right</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  The 9-to-5 is dead. The corporate ladder is a trap. 
                  <span className="text-green-400 font-bold"> True wealth comes from building systems that generate value independently.</span>
                </p>
                <p className="text-base text-white/60 mt-4 leading-relaxed">
                  We're not here to help you "get rich quick." We're here to help you build sustainable, automated income streams that compound over time. 
                  Through affiliate marketing, MEV bot staking, network building, and strategic product promotion, financial independence isn't a dream—it's an achievable reality.
                </p>
              </div>
            </div>
          </div>

          {/* Principle 4 */}
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 hover:border-yellow-500/30 transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-3xl font-black font-futuristic flex-shrink-0">
                04
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black font-futuristic mb-4 uppercase">Community is Power</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  The lone wolf dies alone. The pack thrives together. 
                  <span className="text-yellow-400 font-bold"> Your network is your net worth.</span>
                </p>
                <p className="text-base text-white/60 mt-4 leading-relaxed">
                  BitNexus isn't just a platform—it's an alliance. Through our MLM structure, every member you bring into the network strengthens the entire ecosystem. 
                  We share knowledge, we share opportunities, and we share success. Together, we're unstoppable.
                </p>
              </div>
            </div>
          </div>

          {/* Principle 5 */}
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-500 flex items-center justify-center text-3xl font-black font-futuristic flex-shrink-0">
                05
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black font-futuristic mb-4 uppercase">Transparency Builds Trust</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  In a world of scams and empty promises, 
                  <span className="text-purple-400 font-bold"> we choose radical transparency.</span>
                </p>
                <p className="text-base text-white/60 mt-4 leading-relaxed">
                  Every transaction is verifiable. Every commission is trackable. Every bot's performance is auditable. 
                  We've undergone third-party security audits, and we publish our smart contract code. 
                  Trust isn't given—it's earned through consistent action and transparent operations.
                </p>
              </div>
            </div>
          </div>

          {/* Principle 6 */}
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-3xl font-black font-futuristic flex-shrink-0">
                06
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black font-futuristic mb-4 uppercase">The Future is Now</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  We're not waiting for permission. We're not asking for approval. 
                  <span className="text-cyan-400 font-bold"> We're building the future of revenue generation today.</span>
                </p>
                <p className="text-base text-white/60 mt-4 leading-relaxed">
                  The old economy is collapsing. The new economy is being built by pioneers like you. 
                  Every day you wait is a day your competitors gain ground. The time to act is now. 
                  The time to build is now. The time to claim your financial sovereignty is now.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="glass-card p-12 rounded-3xl border-2 border-purple-500/50 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 text-center">
            <h2 className="text-4xl md:text-5xl font-black font-futuristic mb-6 uppercase italic">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Revolution</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              This is more than a platform. This is a movement. A declaration of independence from the old ways. 
              A commitment to building wealth on your own terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#genesis" 
                className="px-12 py-5 bg-purple-600 text-white font-black font-futuristic rounded-sm glow-purple uppercase tracking-widest text-sm transition-all hover:scale-105"
              >
                Secure Your Spot
              </a>
              <a 
                href="/" 
                onClick={(e) => {
                  e.preventDefault();
                  if (window.enterDemo) window.enterDemo();
                }}
                className="px-12 py-5 border border-cyan-400/50 text-cyan-400 font-black font-futuristic rounded-sm uppercase tracking-widest text-sm hover:bg-cyan-400/10 transition-all"
              >
                Explore Demo
              </a>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center py-12 border-t border-white/5">
            <p className="text-2xl font-bold font-futuristic mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-600 to-cyan-400">
              "The future belongs to those who build it."
            </p>
            <p className="text-white/60 text-sm uppercase tracking-widest font-futuristic">
              — The BitNexus Alliance
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black/40 text-center">
        <div className="text-2xl font-black font-futuristic mb-8">BIT<span className="text-cyan-400">NEXUS</span></div>
        <div className="flex justify-center space-x-12 text-[10px] font-bold font-futuristic uppercase tracking-[0.3em] text-white/40 mb-12">
          <a href="/" className="hover:text-cyan-400 transition">Home</a>
          <a href="/#genesis" className="hover:text-cyan-400 transition">Join Launch</a>
          <a href="/#courses" className="hover:text-cyan-400 transition">Academy</a>
        </div>
        <p className="text-[8px] uppercase tracking-[0.5em] text-white/20">The Future of Decentralized Revenue &copy; 2026</p>
      </footer>
    </div>
  );
};

export default Manifesto;

