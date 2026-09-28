export type Language = 'uz' | 'uz_cyr' | 'ru' | 'en';

export type Theme = 'dark' | 'light';

export interface ProjectItem {
  id: string;
  category: 'scratch' | 'robotics' | 'android' | 'prompt' | 'python';
  titleKey: string;
  descKey: string;
  fullDescKey: string;
  featuresKey: string[];
  techStack: string[];
  date: string;
  iconName: string;
  image?: string;
  demoUrl?: string;
  badgeKey?: string;
}

export interface TimelineMilestone {
  year: string;
  titleKey: string;
  subtitleKey: string;
  descKey: string;
  skills: string[];
}

export interface GuestbookMessage {
  id: string;
  name: string;
  message: string;
  date: string;
  avatarEmoji: string;
  likes: number;
}
