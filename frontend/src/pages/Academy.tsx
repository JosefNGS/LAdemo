import React, { useState } from 'react';
import { ICONS } from '../constants';
import { AppRoute } from '../types';

interface AcademyProps {
  setActiveRoute?: (route: AppRoute) => void;
}

interface LearningPath {
  title: string;
  duration: string;
  description: string;
  progress: number;
  color: string;
  modules?: string[];
  prerequisites?: string[];
}

interface Course {
  id: string;
  title: string;
  level: string;
  progress: number;
  duration: string;
  category: string;
  modules?: string[];
  description?: string;
}

const Academy: React.FC<AcademyProps> = ({ setActiveRoute }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPath, setSelectedPath] = useState<LearningPath | null>(null);
  const [enrolledPaths, setEnrolledPaths] = useState<Set<string>>(new Set());
  const [pathProgress, setPathProgress] = useState<{ [key: string]: number }>({});
  const [joiningEvent, setJoiningEvent] = useState<{ id: string; title: string } | null>(null);
  const [isJoining, setIsJoining] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [courseProgress, setCourseProgress] = useState<{ [key: string]: number }>({
    '1': 100, // Affiliate Fundamentals - completed
    '2': 65,  // Advanced Conversion Tactics
    '4': 30,  // Network Building Strategies
  });

  const courses: Course[] = [
    { 
      id: '1', 
      title: 'Affiliate Fundamentals', 
      level: 'Beginner', 
      progress: 100, 
      duration: '2h', 
      category: 'basics',
      description: 'Master the basics of affiliate marketing. Learn how to create links, track performance, and earn your first commissions.',
      modules: [
        'Introduction to Affiliate Marketing',
        'Creating Your First Affiliate Link',
        'Understanding Commissions',
        'Tracking Performance',
        'Best Practices',
        'Final Assessment'
      ]
    },
    { 
      id: '2', 
      title: 'Advanced Conversion Tactics', 
      level: 'Intermediate', 
      progress: 65, 
      duration: '4h', 
      category: 'marketing',
      description: 'Learn advanced strategies to maximize conversions and increase your affiliate revenue.',
      modules: [
        'Conversion Psychology',
        'A/B Testing Strategies',
        'Landing Page Optimization',
        'Email Marketing Tactics',
        'Retargeting Campaigns',
        'Advanced Analytics',
        'Case Studies',
        'Final Project'
      ]
    },
    { 
      id: '3', 
      title: 'MEV Bot Mastery', 
      level: 'Advanced', 
      progress: 0, 
      duration: '6h', 
      category: 'trading',
      description: 'Master MEV (Maximal Extractable Value) bot trading. Learn to set up, configure, and optimize automated trading strategies.',
      modules: [
        'Introduction to MEV',
        'Bot Setup & Configuration',
        'Strategy Development',
        'Risk Management',
        'Performance Optimization',
        'Advanced Techniques',
        'Troubleshooting',
        'Portfolio Management'
      ]
    },
    { 
      id: '8', 
      title: 'XAB Bot Mastery (XRP)', 
      level: 'Advanced', 
      progress: 0, 
      duration: '6h', 
      category: 'trading',
      description: 'Specialized course for XRP trading with XAB Bot. Learn XRP-specific strategies and optimization techniques.',
      modules: [
        'XRP Ecosystem Overview',
        'XAB Bot Setup for XRP',
        'XRP Trading Strategies',
        'Liquidity Management',
        'XRP-Specific Risks',
        'Advanced XRP Techniques',
        'Performance Monitoring',
        'Expert Strategies'
      ]
    },
    { 
      id: '4', 
      title: 'Network Building Strategies', 
      level: 'Intermediate', 
      progress: 30, 
      duration: '3h', 
      category: 'marketing',
      description: 'Build and scale your affiliate network. Learn recruitment strategies and team management.',
      modules: [
        'Network Building Fundamentals',
        'Recruitment Strategies',
        'Team Training',
        'Motivation Techniques',
        'Scaling Your Network',
        'Advanced Leadership'
      ]
    },
    { 
      id: '5', 
      title: 'Tokenomics Deep Dive', 
      level: 'Advanced', 
      progress: 0, 
      duration: '5h', 
      category: 'trading',
      description: 'Deep dive into tokenomics, staking mechanisms, and DeFi protocols. Understand the economics behind crypto projects.',
      modules: [
        'Tokenomics Fundamentals',
        'Staking Mechanisms',
        'Yield Farming',
        'Liquidity Pools',
        'Governance Tokens',
        'Economic Models',
        'Risk Analysis',
        'Advanced Concepts'
      ]
    },
    { 
      id: '6', 
      title: 'Legal Compliance Guide', 
      level: 'Beginner', 
      progress: 0, 
      duration: '1.5h', 
      category: 'basics',
      description: 'Understand legal requirements and compliance for affiliate marketing and crypto activities.',
      modules: [
        'Legal Basics',
        'Tax Obligations',
        'Disclosure Requirements',
        'Regional Compliance',
        'Best Practices'
      ]
    },
    { 
      id: '7', 
      title: 'What Are Airdrops?', 
      level: 'Beginner', 
      progress: 0, 
      duration: '1.5h', 
      category: 'basics',
      description: 'Learn about crypto airdrops, how to find them, and how to maximize your rewards.',
      modules: [
        'Airdrop Basics',
        'Finding Airdrops',
        'Qualification Strategies',
        'Maximizing Rewards',
        'Safety & Security'
      ]
    },
  ];

  const liveEvents = [
    { id: '1', title: 'Weekly Q&A Session', date: 'Today, 3:00 PM UTC', attendees: 142, host: 'Agent Nexus-Admin', category: 'affiliate', icon: '💬' },
    { id: '2', title: 'Advanced Strategies Workshop', date: 'Tomorrow, 2:00 PM UTC', attendees: 89, host: 'Agent Nexus-Expert', category: 'affiliate', icon: '📈' },
    { id: '3', title: 'AI Content Generation Masterclass', date: 'Jan 15, 4:00 PM UTC', attendees: 234, host: 'AI Specialist', category: 'ai', icon: '🤖' },
    { id: '4', title: 'Financial Freedom Blueprint', date: 'Jan 16, 1:00 PM UTC', attendees: 189, host: 'Finance Coach', category: 'financial', icon: '💰' },
    { id: '5', title: 'Affiliate Link Optimization', date: 'Jan 17, 3:30 PM UTC', attendees: 156, host: 'Marketing Pro', category: 'affiliate', icon: '🔗' },
    { id: '6', title: 'AI-Powered Market Analysis', date: 'Jan 18, 2:00 PM UTC', attendees: 201, host: 'Data Analyst', category: 'ai', icon: '📊' },
    { id: '7', title: 'Building Passive Income Streams', date: 'Jan 19, 5:00 PM UTC', attendees: 178, host: 'Wealth Advisor', category: 'financial', icon: '💎' },
    { id: '8', title: 'Social Media Affiliate Strategies', date: 'Jan 20, 3:00 PM UTC', attendees: 167, host: 'Social Media Expert', category: 'affiliate', icon: '📱' },
  ];

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'basics', label: 'Basics' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'trading', label: 'Trading' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-display">Nexus Academy</h2>
          <p className="text-gray-500 text-sm">Master the affiliate game. Beginner to Mastery modules with live Zoom events</p>
        </div>
      </div>

      {/* Getting Started Course - Featured at Top */}
      <div className="glass-card p-6 rounded-3xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-600/10 to-cyan-600/10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-bold">NEW</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/20 rounded-full text-xs font-bold">BEGINNER</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Getting Started with BitNexus</h3>
            <p className="text-gray-400 text-sm mb-4">
              Complete onboarding guide covering platform overview, user flow, video tutorials, and downloadable resources. 
              Perfect for new users to understand the system and start earning.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Self-paced
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                30 min
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                0% Complete
              </span>
            </div>
            <button
              onClick={() => setActiveRoute && setActiveRoute(AppRoute.GETTING_STARTED)}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all shadow-lg shadow-purple-900/40"
            >
              Start Course →
            </button>
          </div>
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-purple-500/30 flex items-center justify-center">
            <span className="text-5xl">🚀</span>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 rounded-3xl border border-white/5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Live Events</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-purple-600 text-white rounded-lg text-xs font-bold">All</button>
            <button className="px-3 py-1 bg-white/5 text-gray-400 rounded-lg text-xs font-bold hover:bg-white/10">AI</button>
            <button className="px-3 py-1 bg-white/5 text-gray-400 rounded-lg text-xs font-bold hover:bg-white/10">Financial</button>
            <button className="px-3 py-1 bg-white/5 text-gray-400 rounded-lg text-xs font-bold hover:bg-white/10">Affiliate</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {liveEvents.map((event) => {
            const categoryColors = {
              ai: 'from-cyan-600/20 to-blue-600/20 border-cyan-500/30',
              financial: 'from-green-600/20 to-emerald-600/20 border-green-500/30',
              affiliate: 'from-purple-600/20 to-pink-600/20 border-purple-500/30',
            };
            const categoryLabels = {
              ai: 'AI Learning',
              financial: 'Financial Freedom',
              affiliate: 'Affiliate Marketing',
            };
            return (
              <div key={event.id} className={`p-5 bg-gradient-to-br ${categoryColors[event.category as keyof typeof categoryColors]} rounded-2xl border`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-red-400 uppercase">Live</span>
                  </div>
                  <span className="text-2xl">{event.icon}</span>
                </div>
                <div className="mb-2">
                  <span className={`px-2 py-1 rounded text-[10px] font-bold ${
                    event.category === 'ai' ? 'bg-cyan-500/20 text-cyan-400' :
                    event.category === 'financial' ? 'bg-green-500/20 text-green-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {categoryLabels[event.category as keyof typeof categoryLabels]}
                  </span>
                </div>
                <h4 className="font-bold text-lg mb-2">{event.title}</h4>
                <p className="text-gray-400 text-sm mb-1">{event.date}</p>
                <p className="text-xs text-gray-500 mb-3">Host: {event.host}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <ICONS.Friends />
                    <span>{event.attendees} attending</span>
                  </div>
                  <button 
                    onClick={() => {
                      setJoiningEvent({ id: event.id, title: event.title });
                      setIsJoining(true);
                      // Simulate joining Zoom (in real app, this would redirect to Zoom)
                      setTimeout(() => {
                        // In real app, redirect to Zoom URL here
                        // window.location.href = event.zoomUrl;
                        setIsJoining(false);
                        // For demo, we'll just close after showing the joining state
                        setTimeout(() => {
                          setJoiningEvent(null);
                        }, 2000);
                      }, 2000);
                    }}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-sm transition-all"
                  >
                    Join
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Joining Zoom Modal */}
      {joiningEvent && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-white/5 max-w-md w-full text-center">
            {isJoining ? (
              <>
                <div className="w-20 h-20 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-6">
                  <svg className="animate-spin h-10 w-10 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Joining Zoom...</h3>
                <p className="text-gray-400 mb-2">{joiningEvent.title}</p>
                <p className="text-sm text-gray-500">Please wait while we connect you to the meeting</p>
              </>
            ) : (
              <>
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-green-400">Connected!</h3>
                <p className="text-gray-400 mb-4">You're now joining the Zoom meeting</p>
                <p className="text-sm text-gray-500 mb-6">Redirecting to Zoom...</p>
              </>
            )}
          </div>
        </div>
      )}

      {/* Financial Freedom Learning Paths */}
      <div className="glass-card p-6 rounded-3xl border border-white/5 mb-6">
        <h3 className="text-xl font-bold mb-4">Financial Freedom Learning Paths</h3>
        <p className="text-gray-500 text-sm mb-6">Structured paths to help you achieve your financial goals</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(() => {
            const paths: LearningPath[] = [
              { 
                title: 'Path to $1K/month', 
                duration: '30 days',
                description: 'Perfect for beginners. Learn the fundamentals and start earning your first $1,000/month.',
                progress: pathProgress['Path to $1K/month'] || 0,
                color: 'from-green-500 to-cyan-500',
                modules: [
                  'Introduction to Affiliate Marketing',
                  'Setting Up Your First Campaign',
                  'Content Creation Basics',
                  'Social Media Strategy',
                  'Tracking & Analytics',
                  'Scaling to $1K/month'
                ]
              },
              { 
                title: 'Path to $5K/month', 
                duration: '90 days',
                description: 'Scale your affiliate business and build multiple income streams to reach $5K/month.',
                progress: pathProgress['Path to $5K/month'] || 0,
                color: 'from-cyan-500 to-purple-500',
                modules: [
                  'Advanced Marketing Strategies',
                  'Email Marketing Mastery',
                  'Video Content Creation',
                  'Network Building Fundamentals',
                  'MEV Bot Integration',
                  'XAB Bot Staking',
                  'Multiple Income Streams',
                  'Automation Tools',
                  'Team Building Basics',
                  'Advanced Analytics',
                  'Scaling Systems',
                  'Reaching $5K/month'
                ],
                prerequisites: ['Path to $1K/month']
              },
              { 
                title: 'Path to Financial Freedom', 
                duration: '6 months',
                description: 'Master advanced strategies, build a large network, and achieve true financial independence.',
                progress: pathProgress['Path to Financial Freedom'] || 0,
                color: 'from-purple-500 to-pink-500',
                modules: [
                  'Master Network Building',
                  'Advanced Team Leadership',
                  'Passive Income Systems',
                  'Bot Trading Mastery',
                  'Portfolio Diversification',
                  'Business Automation',
                  'Scaling to 100+ Members',
                  'Advanced Content Strategy',
                  'Strategic Partnerships',
                  'Financial Planning',
                  'Tax Optimization',
                  'Long-term Wealth Building',
                  'Exit Strategies',
                  'Legacy Building',
                  'And 10 more advanced modules...'
                ],
                prerequisites: ['Path to $5K/month']
              },
            ];
            return paths.map((path, i) => (
              <div key={i} className={`p-6 rounded-2xl border border-white/5 bg-gradient-to-br ${path.color} bg-opacity-10 hover:border-purple-500/30 transition-all cursor-pointer relative overflow-hidden`}>
                {/* Background overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-lg text-white">{path.title}</h4>
                    <span className="px-2 py-1 bg-white/20 text-white rounded text-xs font-bold backdrop-blur-sm">{path.duration}</span>
                  </div>
                  <p className="text-sm text-white/90 mb-4 leading-relaxed">{path.description}</p>
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-white/80 font-medium">Progress</span>
                      <span className="font-bold text-white">{path.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden border border-white/10">
                      <div 
                        className={`h-full bg-gradient-to-r ${path.color} transition-all`}
                        style={{ width: `${path.progress}%` }}
                      />
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedPath(path)}
                    className="w-full py-2.5 bg-white/20 hover:bg-white/30 text-white rounded-xl font-bold text-sm transition-all backdrop-blur-sm border border-white/20"
                  >
                    {enrolledPaths.has(path.title) ? 'Continue Path' : 'Start Path'}
                  </button>
                </div>
              </div>
            ))
          })()}
        </div>
      </div>

      <div className="flex gap-2 bg-white/5 p-1 rounded-2xl border border-white/5 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex-1 ${
              selectedCategory === cat.id
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses
          .filter(course => selectedCategory === 'all' || course.category === selectedCategory)
          .map((course) => (
            <div key={course.id} className="glass-card p-6 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  course.level === 'Beginner' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                  course.level === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                  'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                }`}>
                  {course.level}
                </span>
                <span className="text-gray-500 text-xs">{course.duration}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{course.title}</h3>
              {courseProgress[course.id] > 0 ? (
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-bold">{courseProgress[course.id]}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-600 to-cyan-500 transition-all"
                      style={{ width: `${courseProgress[course.id]}%` }}
                    />
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-sm mb-4">Not started</p>
              )}
              <button 
                onClick={() => setSelectedCourse(course)}
                className={`w-full py-3 rounded-xl font-bold transition-all ${
                  courseProgress[course.id] === 100
                    ? 'bg-white/5 text-gray-400'
                    : courseProgress[course.id] > 0
                    ? 'bg-purple-600 hover:bg-purple-500'
                    : 'bg-purple-600 hover:bg-purple-500'
                }`}
              >
                {courseProgress[course.id] === 100 ? 'Completed' : courseProgress[course.id] > 0 ? 'Continue' : 'Start Course'}
              </button>
            </div>
          ))}
      </div>

      {/* Path Detail Modal */}
      {selectedPath && (() => {
        const currentProgress = pathProgress[selectedPath.title] || selectedPath.progress || 0;
        return (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedPath.title}</h3>
                  <p className="text-gray-400">{selectedPath.duration} • {selectedPath.modules?.length || 0} modules</p>
                </div>
                <button
                  onClick={() => setSelectedPath(null)}
                  className="p-2 hover:bg-white/10 rounded-xl transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>

              <p className="text-gray-300 mb-6">{selectedPath.description}</p>

              {selectedPath.prerequisites && selectedPath.prerequisites.length > 0 && (
                <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                  <p className="text-yellow-400 font-bold mb-2">Prerequisites:</p>
                  <ul className="list-disc list-inside text-yellow-300/80 space-y-1">
                    {selectedPath.prerequisites.map((prereq, idx) => (
                      <li key={idx}>{prereq}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-lg">Progress</span>
                  <span className="font-bold text-purple-400">{currentProgress}%</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden border border-white/10">
                  <div 
                    className={`h-full bg-gradient-to-r ${selectedPath.color} transition-all`}
                    style={{ width: `${currentProgress}%` }}
                  />
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-lg mb-4">Learning Modules</h4>
                <div className="space-y-3">
                  {selectedPath.modules?.map((module, idx) => {
                    const completed = (idx + 1) <= Math.floor((selectedPath.modules!.length * currentProgress) / 100);
                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border ${
                        completed
                          ? 'bg-green-500/10 border-green-500/30'
                          : 'bg-white/5 border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          completed
                            ? 'bg-green-500 text-white'
                            : 'bg-white/10 text-gray-400'
                        }`}>
                          {completed ? '✓' : idx + 1}
                        </div>
                        <div className="flex-1">
                          <p className={`font-medium ${completed ? 'text-green-400' : 'text-white'}`}>
                            {module}
                          </p>
                          {completed && (
                            <p className="text-xs text-green-400/70 mt-1">Completed</p>
                          )}
                        </div>
                        {!completed && (
                          <button
                            onClick={() => {
                              // Mark module as completed and update progress
                              const newProgress = Math.min(100, Math.round(((idx + 1) / selectedPath.modules!.length) * 100));
                              setPathProgress(prev => ({
                                ...prev,
                                [selectedPath.title]: newProgress
                              }));
                            }}
                            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm font-bold transition-all"
                          >
                            Start Module
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-4">
              {!enrolledPaths.has(selectedPath.title) ? (
                <button
                  onClick={() => {
                    setEnrolledPaths(prev => new Set([...prev, selectedPath.title]));
                    setSelectedPath(null);
                  }}
                  className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all"
                >
                  Enroll in Path
                </button>
              ) : (
                <button
                  onClick={() => setSelectedPath(null)}
                  className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
                >
                  Continue Learning
                </button>
              )}
              <button
                onClick={() => setSelectedPath(null)}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
        );
      })()}

      {/* Course Detail Modal */}
      {selectedCourse && (() => {
        const currentProgress = courseProgress[selectedCourse.id] || 0;
        return (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      selectedCourse.level === 'Beginner' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                      selectedCourse.level === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                      'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                    }`}>
                      {selectedCourse.level}
                    </span>
                    <span className="text-gray-500 text-sm">{selectedCourse.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold">{selectedCourse.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="p-2 hover:bg-white/10 rounded-xl transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>

              {selectedCourse.description && (
                <p className="text-gray-300 mb-6">{selectedCourse.description}</p>
              )}

              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-lg">Progress</span>
                  <span className="font-bold text-purple-400">{currentProgress}%</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden border border-white/10">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-600 to-cyan-500 transition-all"
                    style={{ width: `${currentProgress}%` }}
                  />
                </div>
              </div>

              {selectedCourse.modules && selectedCourse.modules.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-4">Course Modules</h4>
                  <div className="space-y-3">
                    {selectedCourse.modules.map((module, idx) => {
                      const completed = (idx + 1) <= Math.floor((selectedCourse.modules!.length * currentProgress) / 100);
                      return (
                        <div
                          key={idx}
                          className={`p-4 rounded-xl border ${
                            completed
                              ? 'bg-green-500/10 border-green-500/30'
                              : 'bg-white/5 border-white/10'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                              completed
                                ? 'bg-green-500 text-white'
                                : 'bg-white/10 text-gray-400'
                            }`}>
                              {completed ? '✓' : idx + 1}
                            </div>
                            <div className="flex-1">
                              <p className={`font-medium ${completed ? 'text-green-400' : 'text-white'}`}>
                                {module}
                              </p>
                              {completed && (
                                <p className="text-xs text-green-400/70 mt-1">Completed</p>
                              )}
                            </div>
                            {!completed && (
                              <button
                                onClick={() => {
                                  // Mark module as completed and update progress
                                  const newProgress = Math.min(100, Math.round(((idx + 1) / selectedCourse.modules!.length) * 100));
                                  setCourseProgress(prev => ({
                                    ...prev,
                                    [selectedCourse.id]: newProgress
                                  }));
                                }}
                                className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm font-bold transition-all"
                              >
                                Start Module
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                {currentProgress === 0 ? (
                  <button
                    onClick={() => {
                      setCourseProgress(prev => ({
                        ...prev,
                        [selectedCourse.id]: 0
                      }));
                      // Auto-enroll by starting first module
                      if (selectedCourse.modules && selectedCourse.modules.length > 0) {
                        const newProgress = Math.round((1 / selectedCourse.modules.length) * 100);
                        setCourseProgress(prev => ({
                          ...prev,
                          [selectedCourse.id]: newProgress
                        }));
                      }
                    }}
                    className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl font-bold transition-all"
                  >
                    Enroll in Course
                  </button>
                ) : currentProgress < 100 ? (
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all"
                  >
                    Continue Learning
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="flex-1 py-3 bg-green-600 hover:bg-green-500 rounded-xl font-bold transition-all"
                  >
                    Course Completed ✓
                  </button>
                )}
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};

export default Academy;

