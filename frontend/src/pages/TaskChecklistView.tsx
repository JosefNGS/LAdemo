import React from 'react';
import TeamTaskChecklist from '../components/TeamTaskChecklist';
import { AppRoute } from '../types';

interface TaskChecklistViewProps {
  teamMember: string;
  setActiveRoute: (route: AppRoute) => void;
}

const TaskChecklistView: React.FC<TaskChecklistViewProps> = ({ teamMember, setActiveRoute }) => {
  // Task definitions for each team member
  const taskDefinitions: { [key: string]: { name: string; tasks: Array<{ key: string; label: string; category: string; requiresVerification?: boolean }> } } = {
    josef: {
      name: 'Josef Lindbom',
      tasks: [
        { key: 'landing-page-countdown', label: 'Landing page with countdown timer', category: 'UX/UI & Design', requiresVerification: false },
        { key: 'responsive-design', label: 'Responsive design system (mobile-first, all viewports)', category: 'UX/UI & Design', requiresVerification: false },
        { key: 'glassmorphism', label: 'Glassmorphism design implementation', category: 'UX/UI & Design', requiresVerification: false },
        { key: 'layout-component', label: 'Layout component with sidebar navigation', category: 'User Flow & Navigation', requiresVerification: false },
        { key: 'dashboard', label: 'Dashboard with financial overview', category: 'Platform Logic & Features', requiresVerification: false },
        { key: 'marketplace', label: 'Marketplace with product discovery', category: 'Platform Logic & Features', requiresVerification: false },
        { key: 'content-generator', label: 'Content Generator with upload modal', category: 'Platform Logic & Features', requiresVerification: false },
      ],
    },
    craig: {
      name: 'Craig Martin',
      tasks: [
        { key: 'netlify-deployment', label: 'Netlify deployment setup', category: 'Hosting & Infrastructure', requiresVerification: true },
        { key: 'netlify-config', label: 'Netlify configuration (netlify.toml)', category: 'Hosting & Infrastructure', requiresVerification: true },
        { key: 'github-setup', label: 'GitHub repository setup', category: 'Version Control', requiresVerification: true },
        { key: 'branch-protection', label: 'Branch protection rules', category: 'Version Control', requiresVerification: true },
        { key: 'gitlab-setup', label: 'Set up GitLab repository', category: 'GitLab & GitHub Setup', requiresVerification: true },
        { key: 'gitlab-cicd', label: 'Configure GitLab CI/CD pipelines', category: 'GitLab & GitHub Setup', requiresVerification: true },
        { key: 'discourse-setup', label: 'Discourse installation and configuration', category: 'Discourse (Forum) Setup', requiresVerification: true },
        { key: 'n8n-setup', label: 'n8n installation and configuration', category: 'n8n Automation Setup', requiresVerification: true },
      ],
    },
    jonne: {
      name: 'Jonne Waselius',
      tasks: [
        { key: 'netlify-functions', label: 'Netlify Functions setup', category: 'Backend Services', requiresVerification: true },
        { key: 'email-functions', label: 'Email collection functions', category: 'Backend Services', requiresVerification: true },
        { key: 'supabase-integration', label: 'Supabase integration setup', category: 'Backend Services', requiresVerification: true },
        { key: 'api-structure', label: 'Basic API structure', category: 'Backend Services', requiresVerification: true },
        { key: 'realtime-services', label: 'Hosting real-time services', category: 'Real-Time Services', requiresVerification: true },
        { key: 'authentication', label: 'Authentication system', category: 'Authentication', requiresVerification: true },
        { key: 'n8n-integration', label: 'n8n integration', category: 'n8n Integration', requiresVerification: true },
      ],
    },
    svein: {
      name: 'Svein Nilsen',
      tasks: [
        { key: 'investment-alignment', label: 'Initial investment and vision alignment', category: 'Business Development', requiresVerification: true },
        { key: 'strategic-planning', label: 'Strategic planning participation', category: 'Business Development', requiresVerification: true },
        { key: 'market-analysis', label: 'Market analysis contribution', category: 'Business Development', requiresVerification: true },
        { key: 'revenue-plan', label: 'Revenue plan development (coordination)', category: 'Business Development', requiresVerification: true },
      ],
    },
    lee: {
      name: 'Lee',
      tasks: [
        { key: 'office-setup', label: 'Initial office setup and organization', category: 'Office Management', requiresVerification: true },
        { key: 'admin-systems', label: 'Administrative systems setup', category: 'Office Management', requiresVerification: true },
        { key: 'team-coordination', label: 'Team coordination setup', category: 'Office Management', requiresVerification: true },
        { key: 'admin-processes', label: 'Basic administrative processes', category: 'Office Management', requiresVerification: true },
      ],
    },
  };

  const teamData = taskDefinitions[teamMember];

  if (!teamData) {
    return (
      <div className="p-6 text-center text-gray-500">
        Team member not found
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold font-display">{teamData.name} - Task Checklist</h2>
        <button
          onClick={() => setActiveRoute(AppRoute.ADMIN_VIEW)}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all"
        >
          Back to Admin View
        </button>
      </div>

      <TeamTaskChecklist
        teamMember={teamMember}
        teamMemberName={teamData.name}
        tasks={teamData.tasks}
      />
    </div>
  );
};

export default TaskChecklistView;

