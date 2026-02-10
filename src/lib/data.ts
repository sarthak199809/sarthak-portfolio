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
        imageUrl: "/projects/bugdazz.webp"
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
        imageUrl: "/projects/bijnis.webp"
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
        imageUrl: "/projects/eazybe.webp"
    }
];

export const aiProjects: AIProject[] = [
    {
        id: "n8n-support-automation",
        title: "n8n Support Bot",
        summary: "Automated support resolution using n8n and AI.",
        description: "Built a complex workflow on n8n that triggers on new support tickets, analyzes sentiment via OpenAI, and maps to internal docs for immediate resolution.",
        n8nScreenshotUrl: "/projects/n8n-workflow.webp",
        testLink: "https://n8n.sarthak.dev",
        toolsUsed: ["n8n", "OpenAI", "Webhook", "Redis"]
    }
];

export const skillsData = {
    product: ["Agile", "PRDs", "Roadmap", "GTM", "User Research"],
    technical: ["n8n", "Retool", "SQL", "APIs", "Docker", "Cursor"],
    analytics: ["Amplitude", "Segment", "Clevertap", "Mixpanel"],
    design: ["Figma", "Canva", "Whimsical"]
};
