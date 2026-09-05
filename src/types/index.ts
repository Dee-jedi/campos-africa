export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface StatMetric {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
  accentColor?: string;
}

export interface University {
  id: string;
  name: string;
  shortName: string;
  state: string;
  country: string;
  logo?: string;
  popularCourses: string[];
  studentCount?: string;
  verified?: boolean;
}

export interface PillarFeature {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  accent: string;
  benefits: string[];
  screenImage?: string;
  screenAlt?: string;
}

export interface AppScreenshot {
  id: string;
  title: string;
  subtitle: string;
  category: "academic" | "marketplace" | "community" | "general";
  imagePath: string;
  highlightPill: string;
}
