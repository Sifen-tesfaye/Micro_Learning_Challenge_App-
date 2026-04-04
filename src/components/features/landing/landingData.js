import avatar1 from "../../../assets/images/avatar1_icon.png";
import avatar2 from "../../../assets/images/avatar2_icon.png";
import avatar3 from "../../../assets/images/avatar3_icon.png";
import challengeCover from "../../../assets/images/challenge_image.avif";
import profilePic from "../../../assets/images/profile_icon.png";
import moduleCover from "../../../assets/images/module_main.png";
import streakCover from "../../../assets/images/streak.png";
import testimonialImage from "../../../assets/images/testimonial_image.png";
import testimonialPlatformImage from "../../../assets/images/testimonial_platform_image.png";

export const landingPageData = {
  nav: {
    companyName: "Luminescent Scholar",
    links: [
      { label: "Dashboard", to: "/dashboard" },
      { label: "Categories", to: "/categories" },
      { label: "Leaderboard", to: "/leaderboard" },
    ],
    quickActions: [
      { icon: "local_fire_department", label: "Streaks" },
      { icon: "military_tech", label: "Achievements" },
    ],
    profileImage: profilePic,
  },
  hero: {
    badge: "New Season Live",
    titleLines: ["Elevate Your Mind,", "One Daily Challenge", "at a Time."],
    description:
      "Master new skills through gamified micro-learning. Track your streaks, earn points, and climb the global leaderboard.",
    primaryCta: { label: "Get Started", to: "/signup" },
    secondaryCta: { label: "Explore Categories", to: "/categories" },
    communityLabel: "12k+ Scholars learning today",
    avatars: [avatar1, avatar2, avatar3],
    streakCard: {
      title: "Daily Streak",
      description: "You've reached a 15-day learning streak. Keep it up!",
      progressWidth: "75%",
    },
    moduleCard: {
      label: "Current Task",
      moduleName: "Quantum Computing 101",
      image: moduleCover,
    },
    leaderboard: [
      { name: "Jibril Abdi", xp: 2450 },
      { name: "Sarah J.", xp: 2100 },
    ],
    streakImage: streakCover,
  },
  features: {
    title: "Built for Continuous",
    highlightedTitle: "Evolution",
    description:
      "Traditional learning is broken. We use cognitive science to make knowledge stick in under 10 minutes a day.",
    items: [
      {
        icon: "psychology",
        title: "Micro-Learning",
        description:
          "Byte-sized modules designed for maximum retention and cognitive ease. Learn anywhere, anytime.",
        iconTone: "primary",
      },
      {
        icon: "bolt",
        title: "Daily Challenges",
        description:
          "Gamified daily tasks that keep your curiosity sparked and your brain sharp through active recall.",
        iconTone: "secondary",
      },
      {
        icon: "leaderboard",
        title: "Global Leaderboard",
        description:
          "Compete with scholars worldwide. Earn prestigious titles and showcase your cognitive mastery.",
        iconTone: "tertiary",
      },
    ],
  },
  trustSignals: [
    { value: "98%", label: "Retention Rate" },
    { value: "5M+", label: "Challenges Completed" },
    { value: "200+", label: "Skill Categories" },
  ],
  challenge: {
    eyebrow: "Challenge of the Day",
    title: "Mastering The Art of Focus",
    description:
      'Join 4,200 scholars in today\'s deep-work simulation. Unlock the "Flow State" badge and earn double XP.',
    cta: { label: "Start Now", to: "/signup" },
    meta: "10 Min Duration",
    image: challengeCover,
  },
  testimonials: {
    title: "Voices from the",
    highlightedTitle: "Scholarship",
    items: [
      {
        name: "Dr. Marcus Thorne",
        role: "Cognitive Researcher",
        quote:
          "Luminescent Scholar transformed my morning commute. I've learned more about Behavioral Economics in two weeks than I did in a semester of college.",
        avatar: testimonialImage,
      },
      {
        name: "Elena Rodriguez",
        role: "Senior Product Designer",
        quote:
          "The gamification isn't just fluff. It actually works. The streak system is incredibly motivating for building a consistent learning habit.",
        avatar: testimonialImage,
      },
    ],
    platformImage: testimonialPlatformImage,
  },
  footer: {
    brand: "Luminescent Scholar",
    description: "Elevate your mind. Master your craft. One challenge at a time.",
    links: [
      { label: "Privacy Policy", to: "#" },
      { label: "Terms of Service", to: "#" },
      { label: "Help Center", to: "#" },
    ],
    actions: [
      { icon: "share", label: "Share" },
      { icon: "alternate_email", label: "Contact" },
    ],
    copyright: "© 2026 Luminescent Scholar. Elevate your mind.",
  },
  mobileNav: [
    { icon: "dashboard", label: "Dashboard", to: "/dashboard", tone: "primary" },
    { icon: "grid_view", label: "Categories", to: "/categories", tone: "tertiary" },
    { icon: "emoji_events", label: "Leaderboard", to: "/leaderboard", tone: "secondary" },
    { icon: "person", label: "Profile", to: "/login", tone: "primary" },
  ],
};
