import React from 'react';
import { TeamMemberProfile } from '../types';
import { AppRoute } from '../types';

interface TeamProfileProps {
  profile: TeamMemberProfile;
  setActiveRoute: (route: AppRoute) => void;
}

const TeamProfile: React.FC<TeamProfileProps> = ({ profile, setActiveRoute }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-6">
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-4xl font-bold">
          {profile.avatar}
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold font-display text-gradient-cyan-purple">{profile.name}</h1>
          <p className="text-xl text-gray-400 mt-1">{profile.role}</p>
          <p className="text-gray-500 mt-3">{profile.bio}</p>
        </div>
        <button
          onClick={() => setActiveRoute(AppRoute.DASHBOARD)}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all"
        >
          Back
        </button>
      </div>

      {/* Contact Information */}
      <div className="glass-card p-6 rounded-2xl border border-white/5">
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-300">{profile.contact.email}</span>
          </div>
          {profile.contact.phone && (
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-300">{profile.contact.phone}</span>
            </div>
          )}
        </div>
      </div>

      {/* Responsibilities */}
      <div className="glass-card p-6 rounded-2xl border border-white/5">
        <h2 className="text-xl font-bold mb-4">Responsibilities</h2>
        <ul className="space-y-2">
          {profile.responsibilities.map((resp, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">•</span>
              <span className="text-gray-300">{resp}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="glass-card p-6 rounded-2xl border border-white/5">
        <h2 className="text-xl font-bold mb-4">Skills & Expertise</h2>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-xl text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Social Links */}
      {profile.social && (profile.social.linkedin || profile.social.twitter || profile.social.github) && (
        <div className="glass-card p-6 rounded-2xl border border-white/5">
          <h2 className="text-xl font-bold mb-4">Social Links</h2>
          <div className="flex gap-4">
            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-xl transition-all"
              >
                LinkedIn
              </a>
            )}
            {profile.social.twitter && (
              <a
                href={profile.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-xl transition-all"
              >
                Twitter
              </a>
            )}
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-500/10 hover:bg-gray-500/20 border border-gray-500/30 text-gray-400 rounded-xl transition-all"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamProfile;

