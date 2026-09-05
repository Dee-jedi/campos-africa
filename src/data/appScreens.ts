import { AppScreenshot } from "@/types";

export const APP_SCREENS: AppScreenshot[] = [
  {
    id: "homescreen",
    title: "Student Dashboard",
    subtitle: "Daily streak, quick material search, and study progress tracking",
    category: "general",
    imagePath: "/images/homescreen.jpeg",
    highlightPill: "🔥 1 Day Streak Active",
  },
  {
    id: "ai-chat",
    title: "Campos AI Tutor",
    subtitle: "24/7 intelligent study tutor summarizing PDFs and generating mock exams",
    category: "academic",
    imagePath: "/images/ai-chat.jpeg",
    highlightPill: "✨ Instant PDF Summarization",
  },
  {
    id: "materials-bank",
    title: "Materials Bank",
    subtitle: "Downloadable past questions and lecture slides organized by department",
    category: "academic",
    imagePath: "/images/materials-bank.jpeg",
    highlightPill: "📚 50,000+ Verified Handouts",
  },
  {
    id: "marketplace",
    title: "Campus Marketplace",
    subtitle: "Peer-to-peer student trading, student vendor storefronts, and hostels",
    category: "marketplace",
    imagePath: "/images/marketplace.jpeg",
    highlightPill: "🛍️ Verified Student Vendors",
  },
  {
    id: "blog",
    title: "Campus Wire & Gist",
    subtitle: "Real-time campus news, student gist, and community achievements",
    category: "community",
    imagePath: "/images/blog.jpeg",
    highlightPill: "📰 Real-Time Campus Wire",
  },
  {
    id: "leaderboard",
    title: "Rankings & Prizes",
    subtitle: "Study leaderboard with monthly cash prizes sent directly to student accounts",
    category: "community",
    imagePath: "/images/leaderboard.jpeg",
    highlightPill: "🏆 Monthly Cash Rewards",
  },
];
