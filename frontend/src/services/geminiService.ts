import { GoogleGenAI } from "@google/genai";

// Get API key from window config or use empty string (will fallback to mock)
const getApiKey = (): string => {
  // Check if API key is set in window config (set via index.html script)
  if (typeof window !== 'undefined' && (window as any).GEMINI_API_KEY) {
    return (window as any).GEMINI_API_KEY;
  }
  return '';
};

// Fallback mock responses
const getMockResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  
  // ROI, Earnings, Profit Questions
  if (lowerQuery.includes('roi') || lowerQuery.includes('return') || lowerQuery.includes('profit') || lowerQuery.includes('earn') || lowerQuery.includes('income')) {
    return "💰 **ROI Optimization Strategy**:\n\nBased on your current metrics:\n• Conversion rate: 2.4% (above average)\n• Total earnings: $14,210\n• Network size: 142 members\n\n**Action Plan**:\n1. Focus on products with 30%+ commission (NXC Trading Masterclass, MEV Bot Pro)\n2. Optimize your top 3 performing links with A/B testing\n3. Increase passive income by 40% through MEV/XAB bot staking\n4. Target $5K/month by Month 6 through network expansion\n\n**Quick Win**: Promote the Blockchain Marketing Kit (30% commission) - it's trending and converts well.";
  }
  
  // Referral & Affiliate Link Questions
  if (lowerQuery.includes('referral') || lowerQuery.includes('affiliate') || lowerQuery.includes('link') || lowerQuery.includes('code')) {
    return "🔗 **Referral Link Optimization**:\n\nYour code **NEXUS-7781-BETA** is active. Here's how to maximize it:\n\n**Distribution Strategy**:\n• Social Media: Post 3x daily on Twitter/X, LinkedIn, Instagram\n• Email Campaigns: Send to your warm list weekly\n• Direct Outreach: Message 10 prospects daily\n• Content Marketing: Create tutorials mentioning your link\n\n**Pro Tips**:\n• Use UTM parameters for tracking (already enabled)\n• Create urgency: \"Limited Genesis spots remaining\"\n• Share success stories with screenshots\n• Join relevant crypto/affiliate communities\n\n**Track Performance**: Check Alliance Arena → Referral Performance for real-time stats.";
  }
  
  // Strategy & Planning Questions
  if (lowerQuery.includes('strategy') || lowerQuery.includes('plan') || lowerQuery.includes('optimize') || lowerQuery.includes('improve') || lowerQuery.includes('grow')) {
    return "📈 **30-Day Growth Strategy**:\n\n**Week 1-2: Foundation**\n• Audit your current product mix (aim for 5-7 active products)\n• Identify your top 3 converting products\n• Set up content calendar (daily posts)\n• Recruit first 5 quality team members\n\n**Week 3-4: Scale**\n• Launch email sequence for warm leads\n• Create video tutorials for top products\n• Activate your network (142 members → 200+)\n• Implement bot staking (MEV + XAB)\n\n**Key Metrics to Track**:\n• Daily clicks (target: 200+)\n• Conversion rate (maintain 2.4%+)\n• Network growth (5+ new members/week)\n• Passive income % (target: 30%+)\n\n**Tools to Use**: Content Generator, Alliance Arena, Bot Lab";
  }
  
  // Marketplace & Product Questions
  if (lowerQuery.includes('marketplace') || lowerQuery.includes('product') || lowerQuery.includes('promote') || lowerQuery.includes('sell')) {
    return "🛒 **Product Recommendations**:\n\n**Top Performers** (Your Network):\n1. **NXC Trading Masterclass** - 25% commission, $150 price\n   → High demand, beginner-friendly\n2. **MEV Bot Pro License** - 10% commission, $500 price\n   → High ticket, recurring interest\n3. **Blockchain Marketing Kit** - 30% commission, $95 price\n   → Best ROI, trending now\n\n**Hidden Gems**:\n• **XAB Bot Pro (XRP)** - 10% commission, great for XRP traders\n• **Nexus Private Node** - 5% commission, but $1,200 price = $60 per sale\n\n**Strategy**:\n• Promote 3-4 products simultaneously\n• Focus on products matching your audience\n• Use Content Generator for platform-specific posts\n• Track performance in Affiliate Manager";
  }
  
  // Alliance, Network, Tier Questions
  if (lowerQuery.includes('alliance') || lowerQuery.includes('network') || lowerQuery.includes('tier') || lowerQuery.includes('rank') || lowerQuery.includes('team')) {
    return "👥 **Alliance & Network Building**:\n\n**Your Current Status**:\n• Rank: Silver IV\n• Network Volume: $18,420 (74% to Gold)\n• Direct Referrals: 14\n• Total Network: 142 members\n\n**Path to Gold Tier** ($25K target):\n1. **Recruit 3-5 quality members** this month\n2. **Promote high-ticket items** ($500+) to boost volume\n3. **Activate existing network** - 89 active (62.7% rate)\n4. **Develop team leaders** - identify top 3 performers\n\n**Network Building Tips**:\n• Use Recruitment Tools (Banner 1, Email Template, Social Posts)\n• Host weekly training calls\n• Share resources in Alliance Arena\n• Recognize top performers publicly\n\n**Goal**: Reach 200+ members by Month 3 for exponential growth.";
  }
  
  // Bot Trading Questions (MEV/XAB)
  if (lowerQuery.includes('mev') || lowerQuery.includes('xab') || lowerQuery.includes('bot') || lowerQuery.includes('staking') || lowerQuery.includes('trading')) {
    return "🤖 **Bot Trading Strategy**:\n\n**MEV Bot Pro** (Ethereum-based):\n• APY: 8-15% monthly\n• Best for: ETH/ERC-20 traders\n• Risk: Medium\n• Minimum: $500 capital\n• Strategy: Start conservative, scale as you learn\n\n**XAB Bot Pro** (XRP-focused):\n• APY: 12-18% monthly\n• Best for: XRP traders\n• Risk: Medium-Low\n• Minimum: $500 capital\n• Strategy: Higher returns, lower gas fees\n\n**Recommended Approach**:\n• Diversify: 60% MEV + 40% XAB\n• Reinvest profits for compounding\n• Monitor performance weekly\n• Take profits monthly (20-30%)\n\n**Pro Tip**: Use Bot Lab to track performance and optimize settings. Start with $500-1000 total, scale up as you gain confidence.";
  }
  
  // Content Creation Questions
  if (lowerQuery.includes('content') || lowerQuery.includes('post') || lowerQuery.includes('social') || lowerQuery.includes('marketing') || lowerQuery.includes('create')) {
    return "📱 **Content Creation Strategy**:\n\n**Content Generator Tips**:\n• Use custom prompts for better results\n• Generate for all platforms (Twitter, LinkedIn, Instagram, Facebook)\n• Test different tones (Professional vs Casual)\n• Save successful templates for reuse\n\n**Content Calendar**:\n• **Monday**: Product spotlight\n• **Wednesday**: Success story/testimonial\n• **Friday**: Educational tip/tutorial\n• **Daily**: Behind-the-scenes, network updates\n\n**High-Converting Content Types**:\n1. Before/After earnings screenshots\n2. Step-by-step tutorials\n3. Success stories from your network\n4. Product comparisons\n5. Quick tips/strategies\n\n**Pro Tip**: Use the Marketing Assets (Banner 1, Banner 2, Social Post) from Alliance Arena for ready-made visuals.";
  }
  
  // Financial Freedom Questions
  if (lowerQuery.includes('financial freedom') || lowerQuery.includes('passive income') || lowerQuery.includes('goal') || lowerQuery.includes('target') || lowerQuery.includes('freedom')) {
    return "🎯 **Financial Freedom Roadmap**:\n\n**Your Current Status**:\n• Monthly Income: $1,184\n• Progress: 23.7% to $5K goal\n• Passive Income: 25% ($292/month)\n• Time to Freedom: ~16 months\n\n**Acceleration Strategy**:\n1. **Increase Active Income** (Month 1-3)\n   → Focus on high-commission products\n   → Build content funnel\n   → Recruit quality team members\n\n2. **Build Passive Streams** (Month 4-6)\n   → MEV Bot staking (target: $300/month)\n   → XAB Bot staking (target: $200/month)\n   → Network commissions (target: $500/month)\n\n3. **Scale Network** (Month 7-12)\n   → Reach 300+ members\n   → Develop 5+ team leaders\n   → Target $5K/month passive\n\n**Quick Wins**:\n• Activate your 142-member network (currently 89 active)\n• Promote 3 high-ticket products this week\n• Set up bot staking with $1,000 capital";
  }
  
  // Getting Started / Beginner Questions
  if (lowerQuery.includes('start') || lowerQuery.includes('beginner') || lowerQuery.includes('new') || lowerQuery.includes('first') || lowerQuery.includes('how to begin')) {
    return "🚀 **Getting Started Guide**:\n\n**Day 1-3: Setup**\n1. Complete your profile\n2. Explore the Marketplace\n3. Generate your first affiliate link\n4. Join the Community Forum\n\n**Week 1: First Actions**\n1. **Choose 3 Products** to promote:\n   → NXC Trading Masterclass (beginner-friendly)\n   → Blockchain Marketing Kit (high commission)\n   → One high-ticket item ($500+)\n\n2. **Create Content**:\n   → Use Content Generator for 10 posts\n   → Share on 3 platforms minimum\n   → Post daily for consistency\n\n3. **Start Building Network**:\n   → Invite 5 friends/contacts\n   → Use Recruitment Tools\n   → Share your success story\n\n**Week 2-4: Scale**\n• Track performance in Affiliate Manager\n• Optimize top-performing links\n• Recruit 10+ team members\n• Set up bot staking for passive income\n\n**Resources**: Academy, Forum, Alliance Arena";
  }
  
  // NXC Credits Questions
  if (lowerQuery.includes('nxc') || lowerQuery.includes('credit') || lowerQuery.includes('token') || lowerQuery.includes('currency')) {
    return "💎 **NXC Credits Explained**:\n\n**What are NXC Credits?**\nNXC (Nexus Credits) are the platform's internal currency used for:\n• AI Content Generation (10 NXC per generation)\n• Product submissions (25 NXC fee)\n• Premium features access\n• Platform transactions\n\n**How to Earn NXC**:\n• Affiliate commissions (paid in NXC)\n• Bot staking rewards\n• Network bonuses\n• Platform rewards/airdrops\n\n**How to Use NXC**:\n• Generate AI content\n• Submit products to marketplace\n• Purchase premium tools\n• Convert to fiat (when available)\n\n**Current Balance**: 150 NXC\n**Recommendation**: Use 50 NXC for Content Generator this month to create 5 high-quality campaigns.";
  }
  
  // Help / Support Questions
  if (lowerQuery.includes('help') || lowerQuery.includes('support') || lowerQuery.includes('issue') || lowerQuery.includes('problem') || lowerQuery.includes('stuck')) {
    return "🆘 **How Can I Help?**:\n\nI can assist with:\n• **Strategy**: Growth plans, optimization tips\n• **Products**: Recommendations, promotion strategies\n• **Network Building**: Team recruitment, tier progression\n• **Content**: Creation tips, platform strategies\n• **Bots**: MEV/XAB setup, staking strategies\n• **Technical**: Platform navigation, feature usage\n\n**Quick Resources**:\n• **Forum**: Community discussions and Q&A\n• **Academy**: Video tutorials and guides\n• **Alliance Arena**: Network building tools\n• **Affiliate Manager**: Performance tracking\n\n**Specific Question?** Ask me about:\n• \"How do I increase my earnings?\"\n• \"What products should I promote?\"\n• \"How to build my network?\"\n• \"MEV bot strategy\"\n• \"Content creation tips\"\n\nWhat would you like help with?";
  }
  
  // General / Default Response
  return "🤖 **NexusAI Analysis**:\n\nI've reviewed your BitNexus dashboard. Here's your current status:\n\n**Performance Summary**:\n• Affiliate ROI: 42.5% (Strong)\n• Network Size: 142 members\n• Monthly Earnings: $1,184\n• Conversion Rate: 2.4%\n\n**Quick Recommendations**:\n1. **Diversify Products**: Add 2-3 more high-commission items\n2. **Activate Network**: 89/142 active (target: 70%+)\n3. **Content Strategy**: Post 3x daily using Content Generator\n4. **Passive Income**: Set up MEV + XAB bot staking\n\n**Next Steps**:\n• Focus on reaching Gold tier ($25K volume)\n• Promote Blockchain Marketing Kit (30% commission)\n• Recruit 5 quality team members this month\n• Generate 10 content pieces for social media\n\n**Ask me about**: Strategy, ROI tips, product recommendations, network building, bot trading, or content creation!";
};

export const getAIAdvice = async (query: string): Promise<string> => {
  const apiKey = getApiKey();
  
  // If no API key, use mock responses
  if (!apiKey) {
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
    return getMockResponse(query);
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: "You are the BitNexus AI Hub Assistant. You help users with affiliate marketing, understanding the NXC ecosystem, product sales strategies, and MLM team building. Be professional, concise, and highly strategic.",
      },
    });
    return response.text || "I'm having trouble processing that right now. Please try again.";
  } catch (error) {
    console.error("Gemini API error:", error);
    // Fallback to mock on error
    return getMockResponse(query);
  }
};

