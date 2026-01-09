export interface UserProfile {
  id: string;
  name: string;
  email: string;
  tier: 'Platinum' | 'Gold' | 'Silver' | 'Bronze';
  status: 'Online' | 'Offline';
  joined: string;
  earnings: number;
  networkSize: number;
  avatar: string;
  bio?: string;
  achievements?: string[];
  topProducts?: string[];
  mutualConnections?: number;
}

export const userProfiles: UserProfile[] = [
  {
    id: 'nexus-15',
    name: 'Agent Nexus-15',
    email: 'nexus15@example.com',
    tier: 'Platinum',
    status: 'Online',
    joined: '2023-12-05',
    earnings: 25600,
    networkSize: 512,
    avatar: '15',
    bio: 'Top performer and network builder. Built a $1M+ network in 1 year through strategic team building and leveraging MEV and XAB bot staking for passive income.',
    achievements: [
      'Built $1M+ network in 1 year',
      'Reached Platinum tier in 8 months',
      'Top 1% earner on platform',
      'Network exceeded 500 members'
    ],
    topProducts: ['MEV Bot Pro License', 'XAB Bot Pro License', 'Nexus Private Node'],
    mutualConnections: 25
  },
  {
    id: 'nexus-42',
    name: 'Agent Nexus-42',
    email: 'nexus42@example.com',
    tier: 'Gold',
    status: 'Online',
    joined: '2024-02-20',
    earnings: 10240,
    networkSize: 189,
    avatar: '42',
    bio: 'Rising star in affiliate marketing. Hit $10K/month milestone through high-commission products and strategic network building.',
    achievements: [
      'Hit $10K/month milestone',
      'Reached Gold tier',
      'Network exceeded 150 members'
    ],
    topProducts: ['Crypto Health Formula', 'MEV Bot Pro License'],
    mutualConnections: 8
  },
  {
    id: 'nexus-88',
    name: 'Agent Nexus-88',
    email: 'nexus88@example.com',
    tier: 'Silver',
    status: 'Offline',
    joined: '2024-03-10',
    earnings: 8920,
    networkSize: 98,
    avatar: '88',
    bio: 'Focused on recurring income products. Monthly recurring revenue just hit $2K through strategic product selection.',
    achievements: [
      'Reached Silver tier',
      'Monthly recurring revenue $2K+',
      'Network exceeded 90 members'
    ],
    topProducts: ['XAB Bot Pro License (XRP)', 'MEV Bot Pro License'],
    mutualConnections: 3
  },
  {
    id: 'nexus-33',
    name: 'Agent Nexus-33',
    email: 'nexus33@example.com',
    tier: 'Gold',
    status: 'Online',
    joined: '2024-02-15',
    earnings: 7450,
    networkSize: 156,
    avatar: '33',
    bio: 'Network building specialist. Reached 200 members in network using team building strategies from the Academy.',
    achievements: [
      'Reached 200 network members',
      'Reached Gold tier',
      'Top network builder'
    ],
    topProducts: ['Blockchain Marketing Kit', 'MEV Bot Pro License'],
    mutualConnections: 2
  },
  {
    id: 'nexus-91',
    name: 'Agent Nexus-91',
    email: 'nexus91@example.com',
    tier: 'Silver',
    status: 'Online',
    joined: '2024-05-10',
    earnings: 6200,
    networkSize: 87,
    avatar: '91',
    bio: 'Product discovery expert. Discovered XAB Bot for XRP trading with 14.8% APY returns. Highly active in marketplace.',
    achievements: [
      'Reached Silver tier',
      'Product discovery expert',
      'Network exceeded 80 members'
    ],
    topProducts: ['Elite Performance Apparel', 'XAB Bot Pro License (XRP)'],
    mutualConnections: 1
  },
  {
    id: 'nexus-77',
    name: 'Agent Nexus-77',
    email: 'nexus77@example.com',
    tier: 'Silver',
    status: 'Online',
    joined: '2024-06-15',
    earnings: 2450,
    networkSize: 42,
    avatar: '77',
    bio: 'Active community member building network and exploring platform features. Prime Core Member since December 2024.',
    achievements: [
      'Reached Silver tier',
      'Prime Core Member',
      'Active community contributor'
    ],
    topProducts: ['MEV Bot Pro License'],
    mutualConnections: 0
  },
  {
    id: 'nexus-99',
    name: 'Agent Nexus-99',
    email: 'nexus99@example.com',
    tier: 'Gold',
    status: 'Offline',
    joined: '2024-04-01',
    earnings: 5600,
    networkSize: 124,
    avatar: '99',
    bio: 'Strategic affiliate marketer focused on high-commission products and building sustainable income streams.',
    achievements: [
      'Reached Gold tier',
      'Network exceeded 100 members'
    ],
    topProducts: ['MEV Bot Pro License', 'Crypto Health Formula'],
    mutualConnections: 5
  },
  {
    id: 'nexus-11',
    name: 'Agent Nexus-11',
    email: 'nexus11@example.com',
    tier: 'Platinum',
    status: 'Online',
    joined: '2023-11-18',
    earnings: 18900,
    networkSize: 428,
    avatar: '11',
    bio: 'Early adopter and platform veteran. One of the first Platinum tier members with extensive network and proven track record.',
    achievements: [
      'Early platform adopter',
      'Reached Platinum tier',
      'Network exceeded 400 members',
      'Top 5% earner'
    ],
    topProducts: ['MEV Bot Pro License', 'XAB Bot Pro License', 'Nexus Private Node'],
    mutualConnections: 18
  },
  {
    id: 'nexus-55',
    name: 'Agent Nexus-55',
    email: 'nexus55@example.com',
    tier: 'Bronze',
    status: 'Online',
    joined: '2024-06-20',
    earnings: 850,
    networkSize: 12,
    avatar: '55',
    bio: 'New member actively learning and building network. Focused on understanding platform features and best practices.',
    achievements: [
      'New member',
      'Active learner'
    ],
    topProducts: [],
    mutualConnections: 1
  }
];

export const getUserProfile = (userId: string): UserProfile | undefined => {
  return userProfiles.find(profile => profile.id === userId || profile.name === userId);
};

export const getUserProfileByName = (name: string): UserProfile | undefined => {
  return userProfiles.find(profile => profile.name === name);
};
