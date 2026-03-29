import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
} satisfies Config;
        "error": "#fd6f85",
        "background": "#060e20",
        "surface": "#060e20",
        "primary-fixed-dim": "#a5adff",
        "on-primary-container": "#00055a",
        "on-secondary-fixed": "#004a41",
        "inverse-on-surface": "#4d556b",
        "outline": "#65759e"
      },
      fontFamily: {
        "headline": ["Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      },
      borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1.5rem", "full": "9999px" },
    },
  },
  plugins: [],
};
