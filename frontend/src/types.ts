export enum AppRoute {
  DASHBOARD = 'dashboard',
  MARKETPLACE = 'marketplace',
  EARN = 'earn',
  BOT_LAB = 'bot-lab',
  ALLIANCE = 'alliance',
  SHOP = 'shop',
  PROFILE = 'profile',
  ACADEMY = 'academy',
  CHAT = 'chat',
  FRIENDS = 'friends',
  AFFILIATE = 'affiliate',
  CONTENT_GENERATOR = 'content-generator',
  GOALS = 'goals',
  CART = 'cart',
  CHECKOUT = 'checkout',
  ADMIN_VETTING = 'admin-vetting',
  ADMIN_USERS = 'admin-users',
  MOD_REPORTS = 'mod-reports',
  LOGIN = 'login',
  REGISTER = 'register',
  FORGOT_PASSWORD = 'forgot-password',
  MANIFESTO = 'manifesto',
  FORUM = 'forum',
  MY_PRODUCTS = 'my-products',
  GETTING_STARTED = 'getting-started',
  ABOUT = 'about',
  NEWS = 'news',
  USERS = 'users',
  SUPPORT = 'support',
  FEED = 'feed',
  GOVERNANCE = 'governance',
  ADMIN_VIEW = 'admin-view',
  PROFILE_JOSEF = 'profile-josef',
  PROFILE_CRAIG = 'profile-craig',
  PROFILE_JONNE = 'profile-jonne',
  PROFILE_SVEIN = 'profile-svein',
  PROFILE_LEE = 'profile-lee',
  USER_PROFILE = 'user-profile'
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  commission: number;
  image: string;
  status: 'Active' | 'Pending' | 'Rejected';
}

export interface MetricCardData {
  label: string;
  value: string;
  trend: number;
  type: 'currency' | 'percent' | 'count';
}

export interface Message {
  id: string;
  sender: string;
  text: string;
  timestamp: Date;
  isSelf: boolean;
}

// Notification System Types
export type NotificationType = 
  | 'task-update'
  | 'task-verification'
  | 'system-update'
  | 'commission'
  | 'product-approval'
  | 'alliance'
  | 'governance'
  | 'message'
  | 'achievement'
  | 'warning'
  | 'info';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
  actionLabel?: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  userId?: string; // For user-specific notifications
}

// Trust System Types
export type VerificationBadgeType = 
  | 'email-verified' 
  | 'phone-verified' 
  | 'identity-verified' 
  | 'social-linked'
  | 'profile-complete'
  | 'photo-verified'
  | 'bio-verified'
  | 'payment-verified'
  | 'first-sale'
  | 'active-member'
  | 'content-creator'
  | 'network-builder'
  | 'verified-account'
  | 'trusted-vendor'
  | 'community-leader'
  | 'platform-veteran';

export interface VerificationBadge {
  type: VerificationBadgeType;
  name: string;
  description: string;
  icon: string;
  verified: boolean;
  verifiedAt?: string;
}

export type VerificationLevel = 'Basic' | 'Standard' | 'Enhanced' | 'Institutional';
export type VendorCertificationLevel = 'Basic' | 'Verified' | 'Premium' | null;
export type ProductCertificationType = 'Quality' | 'Security' | 'Value' | 'Trust' | null;

export interface UserVerification {
  emailVerified: boolean;
  phoneVerified: boolean;
  identityVerified: boolean;
  kycCompleted: boolean;
  verificationLevel: VerificationLevel;
  badges: VerificationBadge[];
  trustScore: number;
  vendorCertification?: VendorCertificationLevel;
}

export interface GovernanceProposal {
  id: string;
  title: string;
  description: string;
  type: 'feature' | 'policy' | 'product' | 'budget' | 'partnership';
  author: string;
  createdAt: string;
  discussionEndDate: string;
  votingStartDate: string;
  votingEndDate: string;
  status: 'draft' | 'discussion' | 'voting' | 'passed' | 'rejected';
  votesFor: number;
  votesAgainst: number;
  userVote?: 'for' | 'against' | null;
  userVotingPower: number;
}

export interface ProductVote {
  productId: string;
  userId: string;
  vote: 'approve' | 'reject';
  timestamp: string;
  comment?: string;
}

export interface ProductCertification {
  qualityCertified: boolean;
  securityCertified: boolean;
  valueCertified: boolean;
  trustCertified: boolean;
  certifiedAt?: string;
  certificationBadges: ProductCertificationType[];
}

// Team Member Profile Types
export interface TeamMemberProfile {
  id: string;
  name: string;
  role: string;
  email: string;
  bio: string;
  avatar: string;
  responsibilities: string[];
  skills: string[];
  contact: {
    email: string;
    phone?: string;
  };
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}