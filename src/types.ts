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
  FORUM = 'forum'
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

