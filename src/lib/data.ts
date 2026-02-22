export interface AIProject {
    id: string;
    title: string;
    summary: string;
    description: string;
    n8nScreenshotUrl: string;
    testLink: string;
    toolsUsed: string[];
}

export interface PortfolioProject {
    id: string;
    title: string;
    role: string;
    period: string;
    company: string;
    description: string;
    highlights: string[];
    metrics: {
        label: string;
        value: string;
    }[];
    techStack: string[];
    imageUrl: string;
}

export const careerData: PortfolioProject[] = [
    {
        id: "securelayer7",
        title: "Product Manager",
        company: "SecureLayer7",
        period: "Jan’25 - Nov’25",
        role: "B2B SaaS PM",
        description: "Led development of Bugdazz API Scanner, an enterprise-grade cybersecurity product.",
        highlights: [
            "Conducted 50+ product demos, converting 4 enterprise clients.",
            "Redesigned entire product UI/UX for enterprise standards.",
            "Launched self-service trial program to boost acquisition.",
            "Automated support ticketing, cutting response time from 3 days to 5 mins."
        ],
        metrics: [
            { label: "New Clients", value: "4" },
            { label: "Response Time", value: "<5m" }
        ],
        techStack: ["API Security", "Vulnerability Scanning", "UI/UX Redesign"],
        imageUrl: "https://zmucqnfxnsdtevzmjtzb.supabase.co/storage/v1/object/sign/portfoliodata/SL7.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wY2YxNTBhNC1jZDNlLTQzZjItOGU2Zi0yNmY3ZmU5ZGU4ZjIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW9kYXRhL1NMNy5wbmciLCJpYXQiOjE3NzE3NTcyNDYsImV4cCI6MTgwMzI5MzI0Nn0.7-Qa1_fYVPDdD5cebhY0eIxmJVQ1_0gpdBo5Ub6eXPk"
    },
    {
        id: "bijnis",
        title: "Associate Product Manager",
        company: "Bijnis",
        period: "Sept’22 - Feb’24",
        role: "Marketplace & Search PM",
        description: "Optimized search and personalization for a B2B wholesale marketplace.",
        highlights: [
            "Optimized search success rate from 67% to 92% via smart suggestions.",
            "Built personalized homepage framework, increasing engagement by 18%.",
            "Created real-time sales dashboard, improving connectivity by 14%.",
            "Established user tracking via Segment and Clevertap."
        ],
        metrics: [
            { label: "Search Success", value: "92%" },
            { label: "Engagement Lift", value: "18%" }
        ],
        techStack: ["Segment", "Clevertap", "SQL", "BigQuery"],
        imageUrl: "https://zmucqnfxnsdtevzmjtzb.supabase.co/storage/v1/object/sign/portfoliodata/Bijnis.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wY2YxNTBhNC1jZDNlLTQzZjItOGU2Zi0yNmY3ZmU5ZGU4ZjIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW9kYXRhL0Jpam5pcy5wbmciLCJpYXQiOjE3NzE3NTcyMTcsImV4cCI6MTgwMzI5MzIxN30.3IsKC43xU_K52JMYg8UpangCVecNRiLQduHFrodZ8kU"
    },
    {
        id: "sticker-project",
        title: "Founder",
        company: "The Sticker Project",
        period: "Feb’21 - Aug’22",
        role: "Founder & Growth Lead",
        description: "Bootstrapped a D2C brand from 0 to ₹50K monthly revenue using organic content strategies.",
        highlights: [
            "Scaled to ₹50K/month revenue in just 4 months.",
            "Executed zero-cost marketing strategy via Instagram Reels.",
            "Partnered with 20+ micro-influencers for brand awareness.",
            "Managed end-to-end supply chain and logistics."
        ],
        metrics: [
            { label: "Monthly Revenue", value: "50K" },
            { label: "Time to Scale", value: "4mo" }
        ],
        techStack: ["Shopify", "Instagram Growth", "Canva", "Analytics"],
        imageUrl: "/projects/sticker.webp"
    },
    {
        id: "eazybe",
        title: "Product Manager",
        company: "EazyBe",
        period: "Mar’24 - Dec’24",
        role: "Growth PM",
        description: "Enhanced WhatsApp-based CRM adoption through UI/UX improvements and feature optimization.",
        highlights: [
            "Revamped onboarding flow, increasing user retention by 25%.",
            "Launched 'Smart Labels' feature, adopted by 40% of active users.",
            "Optimized extension performance, reducing load time by 30%.",
            "Conducted user research to identify key churn drivers."
        ],
        metrics: [
            { label: "Retention Lift", value: "25%" },
            { label: "Feature Adoption", value: "40%" }
        ],
        techStack: ["React", "Chrome Extension", "Mixpanel"],
        imageUrl: "https://zmucqnfxnsdtevzmjtzb.supabase.co/storage/v1/object/sign/portfoliodata/Eazybe.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wY2YxNTBhNC1jZDNlLTQzZjItOGU2Zi0yNmY3ZmU5ZGU4ZjIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW9kYXRhL0VhenliZS5wbmciLCJpYXQiOjE3NzE3NTcyMzMsImV4cCI6MTgwMzI5MzIzM30.0VLW0unnBeJYEDoxF2aCchotfDsf5PsEwHmolQZrxgY"
    }
];

export const aiProjects: AIProject[] = [
    {
        id: "gmatrc-automation",
        title: "GMAT RC Automation",
        summary: "Automated GMAT Reading Comprehension analysis.",
        description: "Built a specialized GMAT RC helper that leverages AI to break down complex passages, identify logic patterns, and suggest focus areas for improved comprehension.",
        n8nScreenshotUrl: "https://zmucqnfxnsdtevzmjtzb.supabase.co/storage/v1/object/sign/portfoliodata/gmatRC.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wY2YxNTBhNC1jZDNlLTQzZjItOGU2Zi0yNmY3ZmU5ZGU4ZjIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW9kYXRhL2dtYXRSQy5wbmciLCJpYXQiOjE3NzExNTI3NzgsImV4cCI6MTgwMjY4ODc3OH0.xeOm70QrOLwnMuUX0TxV7YlUcArKFEt7Tlu5fxynBh8",
        testLink: "https://portfolio.sarthakpm.online/gmatrcMVP",
        toolsUsed: ["n8n", "OpenAI", "Next.js"]
    }
];

export const skillsData = {
    product: ["Agile", "PRDs", "Roadmap", "GTM", "User Research"],
    technical: ["n8n", "Retool", "SQL", "APIs", "Docker", "Cursor"],
    analytics: ["Amplitude", "Segment", "Clevertap", "Mixpanel"],
    design: ["Figma", "Canva", "Whimsical"]
};
