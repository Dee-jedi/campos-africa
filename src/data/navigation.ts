import { NavItem } from "@/types";

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "What We Offer", href: "#what-we-offer" },
  { label: "Why Us", href: "#why-us" },
];

export const APP_URLS = {
  webApp: "https://app.campos.africa",
  playStore: "https://play.google.com/store/apps/details?id=com.divthedev.elearn",
  login: "https://app.campos.africa/login",
  signup: "https://app.campos.africa/signup",
  marketplace: "https://app.campos.africa/marketplace",
  studyHub: "https://app.campos.africa/study",
  cbtSimulator: "https://app.campos.africa/cbt",
  supportEmail: "support@campos.africa",
};

export const FOOTER_LINKS = {
  academic: [
    { label: "Instant Material Library", href: "https://app.campos.africa/materials" },
    { label: "Past Questions Archive", href: "https://app.campos.africa/past-questions" },
    { label: "CBT Exam Simulator", href: "https://app.campos.africa/cbt" },
    { label: "Campos AI Academic Tutor", href: "https://app.campos.africa/ai" },
    { label: "Target CGPA Calculator", href: "https://app.campos.africa/gpa" },
  ],
  marketplace: [
    { label: "Student Marketplace", href: "https://app.campos.africa/marketplace" },
    { label: "Hostel & Roommate Finder", href: "https://app.campos.africa/hostels" },
    { label: "Become a Student Vendor", href: "https://app.campos.africa/vendor" },
    { label: "Safe Meetup Guidelines", href: "#marketplace" },
  ],
  community: [
    { label: "Campus Wire & Gist", href: "https://app.campos.africa/news" },
    { label: "Leaderboard & Prizes", href: "https://app.campos.africa/leaderboard" },
    { label: "Campus Ambassador Program", href: "mailto:support@campos.africa?subject=Ambassador" },
    { label: "Faculty Directory", href: "#universities" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Honor Code", href: "/honor-code" },
    { label: "Contact Support", href: "mailto:support@campos.africa" },
  ],
};
