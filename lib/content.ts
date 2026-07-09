import {
  MessageSquareText,
  BookOpen,
  Presentation,
  Swords,
  Gauge,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";

export const nav = {
  brand: "Pitch your investor",
  links: [
    { label: "Features", href: "#solution" },
    { label: "How it works", href: "#how" },
    { label: "Demo", href: "#demo" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: "Start Building Free",
};

export const hero = {
  eyebrow: "AI fundraising coach for founders",
  headline: "Turn Your Startup Into an Investor-Ready Pitch",
  accent: "Investor-Ready",
  subheadline:
    "Build compelling pitch decks, uncover weaknesses before investors do, practice live with AI investors, and raise capital with confidence.",
  primaryCta: "Start Building Free",
  secondaryCta: "Watch Demo",
};

export const trustedBy = [
  "YC Startups",
  "Techstars",
  "500 Global",
  "Antler",
  "Founder Institute",
  "Product Hunt",
];

export const problems = [
  {
    title: "Investors ask difficult questions",
    body: "Unit economics, TAM, moat, go-to-market — one shaky answer and the momentum is gone.",
  },
  {
    title: "Weak storytelling kills great startups",
    body: "A brilliant product buried in a confusing narrative never gets the second meeting.",
  },
  {
    title: "Founders don't know why investors say \"No\"",
    body: "Rejections are polite and vague. You never learn the real reason you were passed on.",
  },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const features: Feature[] = [
  {
    icon: MessageSquareText,
    title: "AI Founder Interview",
    body: "AI interviews founders until it completely understands the business.",
  },
  {
    icon: BookOpen,
    title: "Story Builder",
    body: "Transforms scattered ideas into an investor-ready narrative.",
  },
  {
    icon: Presentation,
    title: "Pitch Deck Generator",
    body: "Creates beautiful presentations automatically.",
  },
  {
    icon: Swords,
    title: "AI VC Simulator",
    body: "Practice against realistic investors who interrupt and ask difficult questions.",
  },
  {
    icon: Gauge,
    title: "Fundability Score",
    body: "Receive a detailed investor readiness report.",
  },
  {
    icon: ShieldAlert,
    title: "Red Flag Detection",
    body: "Find weak assumptions before real investors do.",
  },
];

export const showcaseTabs = [
  {
    id: "interview",
    label: "Interview",
    title: "AI Founder Interview",
    body: "The AI probes your business model, market, and traction until the story is airtight.",
  },
  {
    id: "deck",
    label: "Pitch Deck",
    title: "Auto-generated Deck",
    body: "Every slide generated from your answers — problem, solution, market, ask.",
  },
  {
    id: "sim",
    label: "Investor Simulation",
    title: "AI VC Simulator",
    body: "Face realistic investors who interrupt, push back, and pressure-test your numbers.",
  },
  {
    id: "analytics",
    label: "Analytics",
    title: "Fundability Analytics",
    body: "Track your readiness score, red flags resolved, and pitch improvement over time.",
  },
];

export const steps = [
  { n: "01", title: "Tell us about your startup", body: "Answer a few questions or drop in your notes — the AI takes it from there." },
  { n: "02", title: "AI builds your story", body: "Your scattered ideas become a sharp, investor-ready narrative and deck." },
  { n: "03", title: "Practice your pitch", body: "Rehearse against AI investors who ask the questions real VCs will." },
  { n: "04", title: "Meet investors with confidence", body: "Walk in prepared, with every weak spot already found and fixed." },
];

export const demo = [
  { role: "investor", name: "AI Investor", text: "Your TAM seems optimistic. How did you calculate it?" },
  { role: "founder", name: "You", text: "We estimated it top-down from the total industry spend…" },
  { role: "feedback", name: "AI Feedback", text: "Investors usually expect bottom-up market sizing. Try: users × ACV × reachable segment." },
];

export const metrics = [
  { value: 10000, suffix: "+", label: "Pitch Decks Created" },
  { value: 92, suffix: "%", label: "Average Pitch Improvement" },
  { value: 500, suffix: "+", label: "Investor Questions Practiced" },
  { value: 250, prefix: "$", suffix: "M+", label: "Funding Raised by Users" },
];

export const testimonials = [
  {
    quote:
      "I found three red flags in my deck that every investor would have caught. Fixed them before my seed round and closed in six weeks.",
    name: "Ava Chen",
    role: "Founder & CEO, Northwind",
    rating: 5,
  },
  {
    quote:
      "The AVC simulator is brutal in the best way. By my real pitch, no question surprised me anymore.",
    name: "Marcus Reyes",
    role: "Co-founder, Loopwork",
    rating: 5,
  },
  {
    quote:
      "It turned a messy brain-dump into a story investors actually leaned into. Our meeting-to-callback rate doubled.",
    name: "Priya Nair",
    role: "Founder, Cadence AI",
    rating: 5,
  },
];

export const pricing = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    tagline: "For founders getting their story straight.",
    features: ["AI founder interview", "1 pitch deck", "Basic fundability score", "Community support"],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$39",
    period: "/mo",
    tagline: "For founders actively raising.",
    features: [
      "Everything in Starter",
      "Unlimited decks & revisions",
      "AI VC simulator",
      "Red flag detection",
      "PowerPoint & PDF export",
    ],
    cta: "Start Pro Trial",
    highlight: true,
  },
  {
    name: "Fundraising",
    price: "$129",
    period: "/mo",
    tagline: "For teams going all-in on a round.",
    features: [
      "Everything in Pro",
      "Unlimited investor simulations",
      "Detailed readiness reports",
      "Team collaboration",
      "Priority support",
    ],
    cta: "Talk to Us",
    highlight: false,
  },
];

export const faqs = [
  {
    q: "How accurate is the AI?",
    a: "It's trained on thousands of real pitch patterns and investor questions. It won't replace human judgment, but it catches the weaknesses and questions founders consistently miss.",
  },
  {
    q: "Can I export to PowerPoint?",
    a: "Yes. Decks export to PowerPoint and PDF on Pro and Fundraising plans, so you can keep editing in the tools you already use.",
  },
  {
    q: "Does it replace a pitch coach?",
    a: "It's not a replacement — it's a coach that's available 24/7. Use it to prepare between sessions, or on its own if you don't have a coach yet.",
  },
  {
    q: "Can I practice unlimited times?",
    a: "Pro includes generous practice, and Fundraising unlocks unlimited investor simulations so you can rehearse until every answer is sharp.",
  },
];

export const finalCta = {
  headline: "Your next investor meeting starts here.",
  subheadline:
    "Build your pitch. Practice with AI. Walk into every meeting prepared.",
  cta: "Start Free Today",
};

export const footer = {
  columns: [
    { title: "Product", links: ["Features", "Pricing", "Demo", "Changelog"] },
    { title: "Resources", links: ["Blog", "Guides", "Templates", "Help Center"] },
    { title: "Company", links: ["About", "Contact", "Careers"] },
    { title: "Legal", links: ["Privacy", "Terms", "Security"] },
  ],
};
