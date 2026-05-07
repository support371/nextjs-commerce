import { products, services } from "./gem-catalog";

export type LeadStatus = "New" | "Qualified" | "In Review" | "Converted" | "Closed";
export type TicketStatus = "New" | "In Review" | "Waiting on Customer" | "Resolved";
export type InquiryStatus = "New" | "Invoice Pending" | "Payment Pending" | "Provisioning" | "Completed";

export const dashboardMetrics = [
  { label: "Products", value: products.length, detail: "Active software subscriptions" },
  { label: "Services", value: services.length, detail: "Professional service offerings" },
  { label: "Open Leads", value: 12, detail: "Contact and consultation requests" },
  { label: "Open Tickets", value: 4, detail: "Customer support queue" },
];

export const adminModules = [
  {
    title: "Product Management",
    description: "Manage product copy, SKU, pricing, benefits, Merchant Center fields, and product landing content.",
    href: "/admin/products",
  },
  {
    title: "Lead Pipeline",
    description: "Review contact form submissions, qualification status, company details, and product interest.",
    href: "/admin/leads",
  },
  {
    title: "Order Inquiries",
    description: "Track checkout requests, invoice status, payment handoff, and customer provisioning.",
    href: "/admin/orders",
  },
  {
    title: "Support Desk",
    description: "Track access issues, billing questions, onboarding requests, and ticket resolution.",
    href: "/admin/support",
  },
];

export const sampleLeads = [
  {
    id: "lead-1001",
    name: "Morgan Lee",
    email: "morgan@example.com",
    company: "Northstar Finance Group",
    interest: "GEM Compliance Evidence Hub",
    status: "Qualified" as LeadStatus,
    source: "Contact form",
  },
  {
    id: "lead-1002",
    name: "Alex Carter",
    email: "alex@example.com",
    company: "Atlas Health Partners",
    interest: "Security Readiness Review",
    status: "New" as LeadStatus,
    source: "Services page",
  },
  {
    id: "lead-1003",
    name: "Priya Raman",
    email: "priya@example.com",
    company: "Vector Retail Ops",
    interest: "GEM Vendor Risk Tracker",
    status: "In Review" as LeadStatus,
    source: "Product checkout",
  },
];

export const sampleOrderInquiries = [
  {
    id: "order-2001",
    product: "GEM Risk Clarity Dashboard",
    customer: "Northstar Finance Group",
    email: "morgan@example.com",
    users: 15,
    status: "Invoice Pending" as InquiryStatus,
    amount: "$1,200/year",
  },
  {
    id: "order-2002",
    product: "GEM Policy Readiness Kit",
    customer: "Harbor Legal Advisors",
    email: "ops@example.com",
    users: 8,
    status: "Provisioning" as InquiryStatus,
    amount: "$750/year",
  },
];

export const sampleSupportTickets = [
  {
    id: "ticket-3001",
    subject: "Need access link resent",
    customer: "Harbor Legal Advisors",
    status: "Waiting on Customer" as TicketStatus,
    priority: "Medium",
  },
  {
    id: "ticket-3002",
    subject: "Compliance dashboard onboarding question",
    customer: "Atlas Health Partners",
    status: "In Review" as TicketStatus,
    priority: "High",
  },
  {
    id: "ticket-3003",
    subject: "Invoice copy request",
    customer: "Vector Retail Ops",
    status: "New" as TicketStatus,
    priority: "Low",
  },
];

export const portalItems = [
  {
    title: "Order inquiry history",
    description: "View product interest, status, invoice handoff, and provisioning progress.",
  },
  {
    title: "Support tickets",
    description: "Submit access, billing, onboarding, and product support requests.",
  },
  {
    title: "Account profile",
    description: "Maintain company contact information and product ownership details.",
  },
];

export const auditEvents = [
  "Product catalog reviewed",
  "Merchant feed generated",
  "Checkout request created",
  "Support ticket opened",
  "Policy page updated",
];
