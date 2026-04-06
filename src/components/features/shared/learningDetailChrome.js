import profileImage from "../../../assets/images/profile_icon.png";

export const learningDetailChrome = {
  brand: "Luminescent Scholar",
  defaultStreakCount: 12,
  profileImage,
  headerLinks: [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Categories", to: "/categories" },
    { label: "Leaderboard", to: "/leaderboard" },
  ],
  sidebar: {
    title: "The Scholar",
    subtitle: "Grand Master",
    items: [
      { label: "Dashboard", icon: "dashboard", to: "/dashboard" },
      { label: "Categories", icon: "grid_view", to: "/categories" },
      { label: "Leaderboard", icon: "leaderboard", to: "/leaderboard" },
<<<<<<< HEAD
      { label: "Challenges", icon: "emoji_events", to: "/h" },
=======
      { label: "Challenges", icon: "emoji_events", to: "/dashboard" },
>>>>>>> 96a3493b5c110ab4042afb07630cc2bb86c10d5c
    ],
    ctaLabel: "New Challenge",
    ctaTo: "/signup",
  },
  footer: {
    copyright: "© 2026 Luminescent Scholar. Elevate your mind.",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Help Center", to: "/help" },
    ],
  },
  mobileNav: [
    { icon: "dashboard", label: "Home", to: "/dashboard", tone: "primary" },
    { icon: "grid_view", label: "Modules", to: "/categories", tone: "secondary" },
    {
      icon: "emoji_events",
      label: "Challenges",
      to: "/leaderboard",
      tone: "tertiary",
    },
    { icon: "person", label: "Profile", to: "/profile", tone: "primary" },
  ],
};
