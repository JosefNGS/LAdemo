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
  
  if (lowerQuery.includes('roi') || lowerQuery.includes('return') || lowerQuery.includes('profit')) {
    return "Based on your current network metrics, I recommend focusing on high-commission products (40%+) in the Marketplace. Your conversion rate of 2.4% suggests optimizing your referral links with UTM tracking. Consider A/B testing different landing pages to boost affiliate clicks by 15-20%.";
  }
  
  if (lowerQuery.includes('referral') || lowerQuery.includes('affiliate') || lowerQuery.includes('link')) {
    return "Your referral code NEXUS-7781-BETA is performing well. To maximize conversions, share it across multiple channels: social media (Twitter/X, LinkedIn), email campaigns, and direct messaging. Track performance in the Alliance dashboard. Pro tip: Create urgency with limited-time offers to increase click-through rates.";
  }
  
  if (lowerQuery.includes('strategy') || lowerQuery.includes('plan') || lowerQuery.includes('optimize')) {
    return "Strategic optimization plan: 1) Diversify your product portfolio across 3-4 categories, 2) Focus on products with 25%+ commission rates, 3) Build a content funnel (blog posts, videos) around high-value items, 4) Leverage the Team Builder tool to identify warm prospects, 5) Set up automated follow-ups for cold leads.";
  }
  
  if (lowerQuery.includes('marketplace') || lowerQuery.includes('product')) {
    return "Top-performing products in your network: Nexus Node License (40% commission, high demand), AI Copywriter Pro (active, $12.4k generated). I recommend promoting the NXC Trading Masterclass next - it has a 25% commission and aligns with your audience's interests. Use the 'Get Link' feature to generate tracked affiliate URLs.";
  }
  
  if (lowerQuery.includes('alliance') || lowerQuery.includes('network') || lowerQuery.includes('tier')) {
    return "You're currently at Silver IV rank with $18,420 volume (74% to next tier). To reach Gold tier ($25k target), focus on: 1) Recruiting 3-5 direct referrals this month, 2) Promoting high-ticket items ($500+), 3) Activating your existing network (142 total members). The Global Hall of Fame shows top performers generating $1M+ monthly - study their strategies.";
  }
  
  return "I've analyzed your BitNexus dashboard. Your current performance shows strong potential with a 42.5% affiliate ROI. To accelerate growth, I recommend: diversifying your product mix, optimizing your referral funnel, and leveraging the Team Builder tools to identify high-value prospects. Would you like specific advice on any area?";
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

