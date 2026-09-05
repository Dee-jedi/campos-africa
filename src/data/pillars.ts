import { PillarFeature } from "@/types";

export const ACADEMIC_FEATURES: PillarFeature[] = [
  {
    id: "materials-archive",
    title: "Instant Course Material Library",
    tagline: "One-click access to thousands of slides, handouts, and departmental syllabus packs.",
    description: "Never miss a handout or lecture slide again. Find verified departmental notes organized by university, faculty, department, and level.",
    icon: "📚",
    accent: "from-blue-500 to-indigo-600",
    benefits: [
      "Department & Level filtering (100L through 500L)",
      "Instant in-app PDF rendering with offline-friendly saving",
      "Direct downloads straight to your phone or laptop",
    ],
    screenImage: "/images/materials-bank.jpeg",
    screenAlt: "Campos Materials Bank screenshot showing categorized lecture notes and past questions",
  },
  {
    id: "ai-tutor",
    title: "Campos AI Academic Partner",
    tagline: "Your 24/7 intelligent study tutor trained on your exact course material.",
    description: "Stuck on a 60-page PDF at 2 AM? Ask Campos AI to break down complex medical terms, explain mathematical proofs, generate mock exams, or summarize lecture packs.",
    icon: "✨",
    accent: "from-sky-500 to-blue-600",
    benefits: [
      "Instant PDF summarization and key takeaways",
      "Generate custom mock exam questions on the fly",
      "Step-by-step concept breakdown in conversational language",
    ],
    screenImage: "/images/ai-chat.jpeg",
    screenAlt: "Campos AI Academic Chat showing instant document summarization and exam preparation",
  },
  {
    id: "cbt-simulator",
    title: "Real-Time CBT Test Simulator",
    tagline: "Exam-condition timed practice with instant scoring and detailed answer keys.",
    description: "Conquer GST, GES, and departmental computer-based tests before stepping into the exam hall. Real countdown timers, question randomization, and score analytics.",
    icon: "⏱️",
    accent: "from-indigo-500 to-violet-600",
    benefits: [
      "Timed exam pressure simulations matching actual campus CBT",
      "Instant score breakdown with performance analytics",
      "Comprehensive answer explanations for every question",
    ],
  },
];

export const MARKETPLACE_FEATURES: PillarFeature[] = [
  {
    id: "p2p-trading",
    title: "Peer-to-Peer Campus Trading",
    tagline: "Buy and sell safely with verified coursemates on your specific campus.",
    description: "Looking for second-hand textbooks, scientific calculators, laptops, lab coats, or pressing irons? Browse deals right from students on your campus.",
    icon: "🛍️",
    accent: "from-emerald-500 to-teal-600",
    benefits: [
      "Verified student vendor badges",
      "Designated on-campus safe pickup locations",
      "Direct chat with sellers without sharing your private phone number",
    ],
    screenImage: "/images/marketplace.jpeg",
    screenAlt: "Campos Campus Marketplace screenshot showing student vendor products and deals",
  },
  {
    id: "hostel-finder",
    title: "Hostel & Roommate Finder",
    tagline: "Verified off-campus student accommodation and reliable roommate pairing.",
    description: "Skip fake agent fees. Discover student self-con flats, shared apartments, and verified lodges near your campus gate.",
    icon: "🏠",
    accent: "from-teal-500 to-emerald-600",
    benefits: [
      "Zero hidden agent commission scams",
      "Filter by distance to school gate and amenities",
      "Match with compatible coursemates looking for roommates",
    ],
  },
  {
    id: "student-storefronts",
    title: "Student Entrepreneur Storefronts",
    tagline: "Turn your campus hustle into a thriving business.",
    description: "Whether you bake cakes, repair laptops, make hair, sell sneakers, or thrift clothes, launch your verified digital storefront in minutes.",
    icon: "🚀",
    accent: "from-blue-600 to-cyan-600",
    benefits: [
      "Zero monthly fee to list your products and services",
      "Reaches thousands of active students on your campus daily",
      "Direct order management and student reviews",
    ],
  },
];

export const COMMUNITY_FEATURES: PillarFeature[] = [
  {
    id: "campus-wire",
    title: "Verified Campus Wire & News Feed",
    tagline: "Real-time updates on circulars, timetables, and breaking school notices.",
    description: "No more confusing WhatsApp rumors. Get authentic faculty memos, academic calendar circulars, and breaking campus notices verified directly from the source.",
    icon: "📰",
    accent: "from-amber-500 to-orange-600",
    benefits: [
      "Filtered specifically to your university & department",
      "Instant notifications on exam timetable releases & room shifts",
      "Authentic academic circulars and official strike updates",
    ],
    screenImage: "/images/blog.jpeg",
    screenAlt: "Campos Campus Gist screenshot with student discussions and community updates",
  },
  {
    id: "leaderboard",
    title: "Leaderboard Rankings & Monthly Cash Prizes",
    tagline: "Get rewarded for studying and contributing to the campus community.",
    description: "Top students and study streaks win tangible prizes and direct cash payouts every single month. Build your study streak, answer CBT questions, and top your university rank.",
    icon: "🏆",
    accent: "from-yellow-500 to-amber-600",
    benefits: [
      "Real monthly cash payouts transferred straight to your bank/OPay account",
      "Daily study streaks and competitive university leaderboards",
      "Campus bragging rights and academic achievement badges",
    ],
    screenImage: "/images/leaderboard.jpeg",
    screenAlt: "Campos All-Time and Monthly Rankings leaderboard screenshot showing verified cash winners",
  },
];
