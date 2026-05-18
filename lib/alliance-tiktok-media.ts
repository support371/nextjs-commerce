export type TikTokProductMedia = {
  id: number;
  title: string;
  sku: string;
  poster: string;
  accent: string;
  description: string;
  script: string;
  bullets: string[];
  videoStatus: string;
  videoSrc: string;
};

export const tiktokProductMedia: TikTokProductMedia[] = [
  {
    id: 1,
    title: "Cybersecurity Is A Business Priority",
    sku: "ATM-TIKTOK-001",
    poster: "",
    accent: "from-yellow-400/30 via-amber-300/10 to-slate-950",
    description: "Protect your systems, customers, reputation, and revenue with a concise security awareness product card.",
    script: "Secure today. Stronger tomorrow.",
    bullets: ["Protect your systems", "Protect your customers", "Protect your reputation", "Protect your revenue"],
    videoStatus: "Video source ready to connect",
    videoSrc: "",
  },
  {
    id: 2,
    title: "Cybersecurity Checklist",
    sku: "ATM-TIKTOK-002",
    poster: "",
    accent: "from-cyan-400/30 via-sky-300/10 to-slate-950",
    description: "A checklist-style product video for baseline cyber hygiene and staff education.",
    script: "Start with the basics. Stay secure. Stay ahead.",
    bullets: ["Strong passwords", "Multi-factor authentication", "Software updates", "Secure backups"],
    videoStatus: "Video source ready to connect",
    videoSrc: "",
  },
  {
    id: 3,
    title: "Pause Before You Click",
    sku: "ATM-TIKTOK-003",
    poster: "",
    accent: "from-red-400/30 via-rose-300/10 to-slate-950",
    description: "A phishing prevention product card built for high-retention TikTok short-form awareness.",
    script: "Phishing looks real. Protect your business.",
    bullets: ["Check the sender", "Watch for urgency", "Verify the link", "Avoid unknown password pages"],
    videoStatus: "Video source ready to connect",
    videoSrc: "",
  },
  {
    id: 4,
    title: "Signs You Need A Cybersecurity Review",
    sku: "ATM-TIKTOK-004",
    poster: "",
    accent: "from-sky-400/30 via-cyan-300/10 to-slate-950",
    description: "A gap-assessment product video concept for moving prospects into a cybersecurity review flow.",
    script: "Find the gaps before attackers do.",
    bullets: ["No MFA", "Old software", "Reused passwords", "No backup plan"],
    videoStatus: "Video source ready to connect",
    videoSrc: "",
  },
  {
    id: 5,
    title: "One Leaked Password",
    sku: "ATM-TIKTOK-005",
    poster: "",
    accent: "from-blue-400/30 via-cyan-300/10 to-slate-950",
    description: "A password security product video card for simple, visual, conversion-friendly education.",
    script: "Fix the easy risk first.",
    bullets: ["Use unique passwords", "Avoid reuse", "Enable MFA", "Use a password manager"],
    videoStatus: "Video source ready to connect",
    videoSrc: "",
  },
];
