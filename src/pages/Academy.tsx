import React, { useState } from 'react';
import { ICONS } from '../constants';

const Academy: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const courses = [
    { id: '1', title: 'Affiliate Fundamentals', level: 'Beginner', progress: 100, duration: '2h', category: 'basics' },
    { id: '2', title: 'Advanced Conversion Tactics', level: 'Intermediate', progress: 65, duration: '4h', category: 'marketing' },
    { id: '3', title: 'MEV Bot Mastery', level: 'Advanced', progress: 0, duration: '6h', category: 'trading' },
    { id: '4', title: 'Network Building Strategies', level: 'Intermediate', progress: 30, duration: '3h', category: 'marketing' },
    { id: '5', title: 'Tokenomics Deep Dive', level: 'Advanced', progress: 0, duration: '5h', category: 'trading' },
    { id: '6', title: 'Legal Compliance Guide', level: 'Beginner', progress: 0, duration: '1.5h', category: 'basics' },
  ];

  const liveEvents = [
    { id: '1', title: 'Weekly Q&A Session', date: 'Today, 3:00 PM UTC', attendees: 142, host: 'Agent Nexus-Admin' },
    { id: '2', title: 'Advanced Strategies Workshop', date: 'Tomorrow, 2:00 PM UTC', attendees: 89, host: 'Agent Nexus-Expert' },
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

      <div className="glass-card p-6 rounded-3xl border border-white/5">
        <h3 className="text-xl font-bold mb-4">Live Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {liveEvents.map((event) => (
            <div key={event.id} className="p-5 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl border border-purple-500/30">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-red-400 uppercase">Live</span>
              </div>
              <h4 className="font-bold text-lg mb-2">{event.title}</h4>
              <p className="text-gray-400 text-sm mb-3">{event.date}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <ICONS.Friends />
                  <span>{event.attendees} attending</span>
                </div>
                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-sm transition-all">
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Financial Freedom Learning Paths */}
      <div className="glass-card p-6 rounded-3xl border border-white/5 mb-6">
        <h3 className="text-xl font-bold mb-4">Financial Freedom Learning Paths</h3>
        <p className="text-gray-500 text-sm mb-6">Structured paths to help you achieve your financial goals</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { 
              title: 'Path to $1K/month', 
              duration: '30 days',
              description: 'Perfect for beginners. Learn the fundamentals and start earning your first $1,000/month.',
              progress: 0,
              color: 'from-green-500 to-cyan-500'
            },
            { 
              title: 'Path to $5K/month', 
              duration: '90 days',
              description: 'Scale your affiliate business and build multiple income streams to reach $5K/month.',
              progress: 0,
              color: 'from-cyan-500 to-purple-500'
            },
            { 
              title: 'Path to Financial Freedom', 
              duration: '6 months',
              description: 'Master advanced strategies, build a large network, and achieve true financial independence.',
              progress: 0,
              color: 'from-purple-500 to-pink-500'
            },
          ].map((path, i) => (
            <div key={i} className={`p-6 rounded-2xl border border-white/5 bg-gradient-to-br ${path.color} bg-opacity-10 hover:border-purple-500/30 transition-all cursor-pointer`}>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg">{path.title}</h4>
                <span className="px-2 py-1 bg-white/10 rounded text-xs font-bold">{path.duration}</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">{path.description}</p>
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-gray-500">Progress</span>
                  <span className="font-bold">{path.progress}%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${path.color} transition-all`}
                    style={{ width: `${path.progress}%` }}
                  />
                </div>
              </div>
              <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm transition-all">
                Start Path
              </button>
            </div>
          ))}
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
              {course.progress > 0 ? (
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-bold">{course.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-600 to-cyan-500 transition-all"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-sm mb-4">Not started</p>
              )}
              <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                course.progress === 100
                  ? 'bg-white/5 text-gray-400'
                  : course.progress > 0
                  ? 'bg-purple-600 hover:bg-purple-500'
                  : 'bg-purple-600 hover:bg-purple-500'
              }`}>
                {course.progress === 100 ? 'Completed' : course.progress > 0 ? 'Continue' : 'Start Course'}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Academy;

