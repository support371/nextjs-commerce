export const company = {
  name: "GEM Cybersecurity Assist",
  legalName: "GEM Cybersecurity Assist",
  domain: "gemcybersecurityassist.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gemcybersecurityassist.com",
  email: "Marketing@gemcybersecurityassist.com",
  phone: "+1 (401) 702-2460",
  phoneRaw: "+14017022460",
  country: "US",
  address: "Business address to be finalized in production",
  mission:
    "GEM Cybersecurity Assist helps growing businesses operationalize defensive cybersecurity through practical software subscriptions, evidence workflows, executive reporting, and compliance-ready security operations.",
  positioning:
    "A product-led cybersecurity company focused on making security visibility, governance, and readiness understandable for business owners, operators, and technical teams.",
} as const;

export type GemProduct = {
  id: string;
  sku: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  priceValue: string;
  displayPrice: string;
  category: string;
  googleProductCategory: string;
  productType: string;
  mpn: string;
  icon: string;
  visualTitle: string;
  visualDescription: string;
  functions: string[];
  benefits: string[];
  features: string[];
  outcomes: string[];
  bestFor: string;
};

export const products: GemProduct[] = [
  {
    id: "gem-endpoint-shield-1yr",
    sku: "GEM-ES-1YR",
    slug: "gem-endpoint-shield-1-year-software-subscription",
    title: "GEM Endpoint Shield - 1 Year Software Subscription",
    shortTitle: "Endpoint Shield",
    description:
      "Annual prepaid cybersecurity software subscription for endpoint posture tracking, security task workflow, device baseline visibility, and executive-ready risk reporting.",
    priceValue: "299.00",
    displayPrice: "$299.00/year",
    category: "Endpoint Security Software",
    googleProductCategory: "5299",
    productType: "Cybersecurity Software > Endpoint Security",
    mpn: "GEM-ES-1YR",
    icon: "device",
    visualTitle: "Endpoint posture control center",
    visualDescription:
      "Show laptops, servers, users, and security tasks in one simple posture board so leadership can see what is protected, exposed, or overdue.",
    functions: [
      "Track device posture and baseline security tasks",
      "Organize endpoint risk items by owner and status",
      "Export a weekly executive posture summary",
    ],
    benefits: [
      "Clear device visibility",
      "Fewer unmanaged security gaps",
      "Better accountability across technical owners",
    ],
    features: [
      "Endpoint posture dashboard",
      "Device baseline checklist",
      "Risk register workflow",
      "Weekly executive posture export",
      "Annual prepaid license",
    ],
    outcomes: [
      "Cleaner endpoint visibility",
      "Simple device risk governance",
      "Leadership-ready reporting",
    ],
    bestFor:
      "Small teams that need lightweight endpoint visibility and governance without buying a heavy enterprise suite.",
  },
  {
    id: "gem-phishing-defense-1yr",
    sku: "GEM-PD-1YR",
    slug: "gem-phishing-defense-toolkit-1-year-software-subscription",
    title: "GEM Phishing Defense Toolkit - 1 Year Software Subscription",
    shortTitle: "Phishing Defense Toolkit",
    description:
      "Annual prepaid software subscription for phishing readiness workflows, training campaign planning, reporting templates, and user risk visibility.",
    priceValue: "199.00",
    displayPrice: "$199.00/year",
    category: "Security Awareness Software",
    googleProductCategory: "313",
    productType: "Cybersecurity Software > Security Awareness",
    mpn: "GEM-PD-1YR",
    icon: "mail",
    visualTitle: "Phishing readiness operating board",
    visualDescription:
      "Map training, campaign readiness, user risk, and response actions into an awareness program that is easy to track and explain.",
    functions: [
      "Plan phishing-readiness campaigns",
      "Track training and user-risk visibility",
      "Create recurring awareness reports",
    ],
    benefits: [
      "Stronger employee readiness",
      "Repeatable awareness cadence",
      "Simpler management reporting",
    ],
    features: [
      "Phishing campaign planner",
      "User risk tracker",
      "Training status dashboard",
      "Executive awareness reporting",
      "Annual prepaid license",
    ],
    outcomes: [
      "Structured phishing readiness",
      "Better awareness visibility",
      "Repeatable reporting cadence",
    ],
    bestFor:
      "Organizations that need a structured phishing defense operating cadence and awareness tracking.",
  },
  {
    id: "gem-compliance-vault-1yr",
    sku: "GEM-CV-1YR",
    slug: "gem-compliance-vault-1-year-software-subscription",
    title: "GEM Compliance Vault - 1 Year Software Subscription",
    shortTitle: "Compliance Vault",
    description:
      "Annual prepaid compliance management software subscription for security policy tracking, evidence register management, control mapping, and audit readiness workflows.",
    priceValue: "499.00",
    displayPrice: "$499.00/year",
    category: "Compliance Management Software",
    googleProductCategory: "313",
    productType: "Cybersecurity Software > Compliance Management",
    mpn: "GEM-CV-1YR",
    icon: "vault",
    visualTitle: "Compliance evidence command vault",
    visualDescription:
      "Collect policies, control ownership, audit evidence, and readiness status in one evidence workspace for security reviews.",
    functions: [
      "Map controls to internal evidence",
      "Track owners, due dates, and policy readiness",
      "Prepare audit-ready evidence views",
    ],
    benefits: [
      "Faster audit preparation",
      "Cleaner evidence ownership",
      "Reduced last-minute compliance scramble",
    ],
    features: [
      "Policy and control library",
      "Evidence register",
      "Audit readiness tracker",
      "Owner and due-date workflow",
      "Annual prepaid license",
    ],
    outcomes: [
      "Faster evidence collection",
      "Cleaner control ownership",
      "Audit-ready source of truth",
    ],
    bestFor:
      "Leadership teams that need a clean compliance evidence workspace before external audit pressure increases.",
  },
  {
    id: "gem-threat-intel-dashboard-1yr",
    sku: "GEM-TI-1YR",
    slug: "gem-threat-intel-dashboard-1-year-software-subscription",
    title: "GEM Threat Intel Dashboard - 1 Year Software Subscription",
    shortTitle: "Threat Intel Dashboard",
    description:
      "Annual prepaid threat intelligence software subscription for risk watchlists, cyber trend briefings, executive digest preparation, and security signal tracking.",
    priceValue: "399.00",
    displayPrice: "$399.00/year",
    category: "Threat Intelligence Software",
    googleProductCategory: "5299",
    productType: "Cybersecurity Software > Threat Intelligence",
    mpn: "GEM-TI-1YR",
    icon: "radar",
    visualTitle: "Threat signal and priority dashboard",
    visualDescription:
      "Translate noisy cyber risk signals into a practical watchlist, security priorities, and executive digest structure.",
    functions: [
      "Track relevant cyber risk signals",
      "Prioritize watchlist items",
      "Structure leadership threat briefings",
    ],
    benefits: [
      "Less noise, more priority",
      "Better leadership visibility",
      "Faster risk triage conversations",
    ],
    features: [
      "Threat watchlist workspace",
      "Risk signal dashboard",
      "Monthly executive digest structure",
      "Security priority tracker",
      "Annual prepaid license",
    ],
    outcomes: [
      "Actionable threat visibility",
      "Clear executive digests",
      "Prioritized security decisions",
    ],
    bestFor:
      "Teams that want leadership-friendly threat visibility without a full intelligence operations program.",
  },
  {
    id: "gem-security-starter-suite-1yr",
    sku: "GEM-SSS-1YR",
    slug: "gem-security-starter-suite-1-year-software-subscription",
    title: "GEM Security Starter Suite - 1 Year Software Subscription",
    shortTitle: "Security Starter Suite",
    description:
      "Annual prepaid cybersecurity software bundle combining endpoint posture, phishing readiness, compliance evidence workflows, and executive security reporting.",
    priceValue: "799.00",
    displayPrice: "$799.00/year",
    category: "Cybersecurity Software Suite",
    googleProductCategory: "5299",
    productType: "Cybersecurity Software > Security Suite",
    mpn: "GEM-SSS-1YR",
    icon: "suite",
    visualTitle: "Security operating system for growing teams",
    visualDescription:
      "Bundle endpoint posture, phishing readiness, compliance evidence, and executive reporting into a single security operating layer.",
    functions: [
      "Unify core security operating workflows",
      "Track posture, awareness, evidence, and reporting",
      "Give leadership a single view of security maturity",
    ],
    benefits: [
      "Reduced tool sprawl",
      "Faster security maturity ramp",
      "One operational source of truth",
    ],
    features: [
      "Endpoint posture module",
      "Phishing readiness module",
      "Compliance vault starter",
      "Executive reporting dashboard",
      "Annual prepaid license",
    ],
    outcomes: [
      "Bundled security operating base",
      "Reduced tool sprawl",
      "Faster maturity ramp",
    ],
    bestFor:
      "Founders, operators, and small companies that need a bundled cybersecurity operating foundation.",
  },
];

export const services = [
  {
    title: "Security Readiness Review",
    price: "From $1,500",
    description:
      "A focused review of current security posture, visible risk gaps, control ownership, and prioritized remediation actions.",
    deliverables: ["Readiness scorecard", "Risk register", "30-day action plan"],
  },
  {
    title: "Compliance Evidence Setup",
    price: "From $2,500",
    description:
      "Practical setup support for policies, evidence registers, control mapping, and internal audit preparation workflows.",
    deliverables: ["Evidence map", "Policy tracker", "Control ownership model"],
  },
  {
    title: "Executive Cyber Risk Reporting",
    price: "From $750/month",
    description:
      "Recurring security posture reporting for business leaders who need plain-English visibility into risk and progress.",
    deliverables: ["Monthly risk digest", "Posture trend report", "Priority recommendations"],
  },
];

export const complianceFrameworks = [
  "SOC 2 readiness support",
  "ISO 27001 control alignment support",
  "NIST Cybersecurity Framework alignment",
  "CIS Controls implementation tracking",
  "PCI DSS evidence readiness support",
  "HIPAA security administrative safeguard mapping support",
  "FTC Safeguards Rule readiness support",
  "GLBA security program documentation support",
];

export const trustSignals = [
  "Transparent annual software pricing",
  "Visible refund and digital delivery policies",
  "Business contact phone and email published",
  "Merchant feed and product pages aligned",
  "Trustpilot-ready review footer placement",
  "Google Merchant Center readiness workflow",
];

export const approvalLanguage =
  "GEM supports compliance readiness and control alignment. Certifications, regulator approvals, Trustpilot ratings, Google ratings, and third-party seals should only be displayed after the company has verified and obtained them.";

export const primaryRoutes = [
  "/",
  "/store",
  "/products",
  "/services",
  "/pricing",
  "/compliance",
  "/trust",
  "/checkout",
  "/contact",
  "/support",
  "/about",
  "/policies/privacy",
  "/policies/terms",
  "/policies/refund",
  "/policies/digital-delivery",
  "/policies/security",
];

export function normalizeSlug(slug: string) {
  return slug.replace(/\.png$/i, "");
}

export function getProductBySlug(slug: string) {
  const normalized = normalizeSlug(slug);
  return products.find((product) => product.slug === normalized || product.id === normalized);
}

export function productUrl(product: GemProduct) {
  return `${company.url}/products/${product.slug}`;
}

export function productImageUrl(product: GemProduct) {
  return `${company.url}/api/product-image/${product.slug}.png`;
}

function sanitizeFeedValue(value: string) {
  return value.replace(/[\t\n\r]+/g, " ").trim();
}

export function buildMerchantFeed() {
  const headers = [
    "id",
    "title",
    "description",
    "link",
    "image_link",
    "availability",
    "price",
    "brand",
    "google_product_category",
    "product_type",
    "condition",
    "identifier_exists",
    "mpn",
    "shipping(country:price)",
    "tax(country:rate)",
  ];

  const rows = products.map((product) => [
    product.id,
    product.title,
    product.description,
    productUrl(product),
    productImageUrl(product),
    "in_stock",
    `${product.priceValue} USD`,
    company.name,
    product.googleProductCategory,
    product.productType,
    "new",
    "no",
    product.mpn,
    "US:0.00 USD",
    "US:0.00",
  ]);

  return [headers, ...rows]
    .map((row) => row.map((cell) => sanitizeFeedValue(cell)).join("\t"))
    .join("\n");
}
