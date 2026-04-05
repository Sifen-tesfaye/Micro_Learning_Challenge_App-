import avatar1 from "../../../assets/images/avatar1_icon.png";
import avatar2 from "../../../assets/images/avatar2_icon.png";
import avatar3 from "../../../assets/images/avatar3_icon.png";
import challengeCover from "../../../assets/images/challenge_image.avif";
import moduleCover from "../../../assets/images/module_main.png";

export const categoryDetailData = {
  "web-architecture": {
    id: "web-architecture",
    breadcrumbs: [
      { label: "Categories", to: "/categories" },
      { label: "Web Architecture" },
    ],
    title: "Modern Web",
    highlightedTitle: "Ecosystems",
    description:
      "Deep dive into the structural foundations of high-performance applications. Master scalable logic, resilient APIs, and elegant styling systems.",
    progress: {
      label: "Total Progress",
      value: 64,
      icon: "star",
    },
    filters: [
      { key: "all", label: "All Modules" },
      { key: "in-progress", label: "In Progress" },
      { key: "unlocked", label: "Unlocked" },
      { key: "expert-tracks", label: "Expert Tracks" },
    ],
    modules: [
      {
        id: "flexbox-grid",
        colSpan: "md:col-span-8",
        filterTags: ["in-progress", "unlocked"],
        status: "Active",
        statusTone: "secondary",
        time: "45 mins",
        title: "Mastering Flexbox & Grid",
        description:
          "The definitive guide to responsive layout orchestration without the headaches of float-era CSS.",
        completedModules: 3,
        totalModules: 5,
        progress: 60,
        buttonText: "Resume Learning",
        ctaTo: "/modules/focus-fundamentals",
      },
      {
        id: "restful-api-design",
        filterTags: [],
        status: "Intermediate",
        title: "RESTful API Design",
        description:
          "Architect robust resources, authentication flows, and versioning rules for production systems.",
        isLocked: true,
        prerequisite: "Mastering Flexbox & Grid",
      },
      {
        id: "tailwind-engineering",
        colSpan: "md:col-span-4",
        filterTags: ["unlocked", "expert-tracks"],
        status: "Expert",
        statusTone: "tertiary",
        time: "2h",
        title: "Tailwind Engineering",
        description:
          "Design tokens, config extensions, theming, and performance auditing for scalable frontend systems.",
        completedModules: 0,
        totalModules: 8,
        progress: 0,
        buttonText: "Start Module",
        ctaTo: "/modules/focus-fundamentals",
      },
      {
        id: "visual-performance",
        colSpan: "md:col-span-8",
        filterTags: ["unlocked", "expert-tracks"],
        variant: "image",
        imageUrl: moduleCover,
        title: "Visual Performance & WebGL",
        description:
          "Leverage the GPU for rich interactions, motion, and 3D experiences without sacrificing accessibility.",
        avatars: [avatar1, avatar2, avatar3],
        enrolledCount: 12,
        buttonText: "Enroll Now",
        ctaTo: "/modules/focus-fundamentals",
      },
    ],
    featuredChallenge: {
      eyebrow: "Challenge of the Week",
      title: "Can you refactor this monolith in under 10 minutes?",
      description:
        'Earn the "Optimization Architect" badge and 500 Lumens by completing the weekend sprint.',
      cta: {
        label: "Accept Challenge",
        to: "/signup",
      },
      highlights: [
        { icon: "speed", tone: "secondary" },
        { image: challengeCover, dimmed: true },
        { image: moduleCover },
        { icon: "terminal", tone: "primary" },
      ],
    },
  },
  "ai-foundations": {
    id: "ai-foundations",
    breadcrumbs: [
      { label: "Categories", to: "/categories" },
      { label: "AI Foundations" },
    ],
    title: "Applied AI",
    highlightedTitle: "Foundations",
    description:
      "Build intuition for modern AI systems, from prompt design and embeddings to evaluation and responsible deployment.",
    progress: {
      label: "Total Progress",
      value: 29,
      icon: "neurology",
    },
    filters: [
      { key: "all", label: "All Modules" },
      { key: "beginner-friendly", label: "Beginner Friendly" },
      { key: "hands-on-labs", label: "Hands-On Labs" },
      { key: "capstones", label: "Capstones" },
    ],
    modules: [
      {
        id: "prompt-patterns",
        colSpan: "md:col-span-8",
        filterTags: ["beginner-friendly", "hands-on-labs"],
        status: "Recommended",
        statusTone: "primary",
        time: "30 mins",
        title: "Prompt Patterns for Reliable Outputs",
        description:
          "Learn chaining, role framing, structured outputs, and evaluation-first prompting.",
        completedModules: 1,
        totalModules: 4,
        progress: 25,
        buttonText: "Continue",
        ctaTo: "/modules/focus-fundamentals",
      },
      {
        id: "mlops-basics",
        colSpan: "md:col-span-4",
        filterTags: ["hands-on-labs", "capstones"],
        status: "Expert",
        statusTone: "tertiary",
        time: "1h 20m",
        title: "MLOps for Product Teams",
        description:
          "Ship smarter with monitoring, data quality checks, rollback planning, and eval dashboards.",
        completedModules: 0,
        totalModules: 6,
        progress: 0,
        buttonText: "Start Module",
        ctaTo: "/modules/focus-fundamentals",
      },
      {
        id: "responsible-ai",
        filterTags: [],
        status: "Locked",
        title: "Responsible AI Review Systems",
        description:
          "Bias checks, incident review loops, and human-in-the-loop safeguards for production teams.",
        isLocked: true,
        prerequisite: "Prompt Patterns for Reliable Outputs",
      },
      {
        id: "agent-workflows",
        colSpan: "md:col-span-8",
        filterTags: ["beginner-friendly", "hands-on-labs"],
        variant: "image",
        imageUrl: challengeCover,
        title: "Agent Workflows & Tooling",
        description:
          "Understand tool use, delegation, and orchestration patterns for practical AI-powered applications.",
        avatars: [avatar2, avatar3, avatar1],
        enrolledCount: 24,
        buttonText: "Join Cohort",
        ctaTo: "/modules/focus-fundamentals",
      },
    ],
    featuredChallenge: {
      eyebrow: "Challenge of the Week",
      title: "Can your agent plan, verify, and recover from failure?",
      description:
        "Complete the orchestration challenge to unlock the Systems Thinker badge and bonus XP.",
      cta: {
        label: "Take the Challenge",
        to: "/signup",
      },
      highlights: [
        { icon: "psychology", tone: "secondary" },
        { image: moduleCover, dimmed: true },
        { image: challengeCover },
        { icon: "memory", tone: "tertiary" },
      ],
    },
  },
};

export async function fetchCategoryDetailById(id) {
  await new Promise((resolve) => setTimeout(resolve, 120));
  return categoryDetailData[id] ?? null;
}
