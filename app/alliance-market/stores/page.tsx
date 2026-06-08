import Link from "next/link";

export const metadata = {
  title: "Sales Channels | GEM Cybersecurity & Alliance Market",
  description:
    "Shop GEM Cybersecurity software and Alliance Market products across TikTok Shop, Shopify, and Google Shopping.",
};

const channels = [
  {
    name: "TikTok Shop",
    icon: "🎵",
    tagline: "Short-form product discovery",
    description:
      "Browse GEM and Alliance Market products formatted for TikTok Shop — vertical video cards, lifestyle hooks, and creator-style listings.",
    status: "active",
    statusLabel: "Live catalog",
    href: "/alliance-market/tiktok-products",
    externalHref: "https://www.tiktok.com/@alliance.trust.re",
    color: "from-pink-500/20 to-slate-950",
    badge: "bg-pink-500/20 text-pink-300",
  },
  {
    name: "Google Shopping",
    icon: "🛒",
    tagline: "Search-first product feed",
    description:
      "GEM Cybersecurity software SKUs structured for Google Merchant Center — clean product data, merchant feed, policy coverage, and SEO-safe pages.",
    status: "active",
    statusLabel: "Merchant feed active",
    href: "/store",
    externalHref: "https://store.gemcybersecurityassist.com",
    color: "from-blue-500/20 to-slate-950",
    badge: "bg-blue-500/20 text-blue-300",
  },
  {
    name: "Shopify",
    icon: "🏪",
    tagline: "Full e-commerce checkout",
    description:
      "Complete Alliance Market product catalog with SKUs, variants, images, inventory tracking, and checkout handoff — Shopify-import ready.",
    status: "active",
    statusLabel: "Catalog ready",
    href: "/alliance-market/products",
    externalHref: "https://alliancetrustrealty.ltd",
    color: "from-green-500/20 to-slate-950",
    badge: "bg-green-500/20 text-green-300",
  },
  {
    name: "Wish",
    icon: "🌟",
    tagline: "Value marketplace",
    description:
      "Alliance Market listings formatted for Wish — marketplace-ready cards, competitive pricing, lightweight product media.",
    status: "building",
    statusLabel: "In progress",
    href: "/alliance-market/products",
    externalHref: null,
    color: "from-purple-500/20 to-slate-950",
    badge: "bg-purple-500/20 text-purple-300",
  },
  {
    name: "Amazon / eBay",
    icon: "📦",
    tagline: "Mass-market listings",
    description:
      "Product listing content, SKU mapping, policy checks, title and bullet formatting optimised for Amazon and eBay search algorithms.",
    status: "building",
    statusLabel: "In progress",
    href: "/alliance-market/products",
    externalHref: null,
    color: "from-orange-500/20 to-slate-950",
    badge: "bg-orange-500/20 text-orange-300",
  },
  {
    name: "Meta / Pinterest",
    icon: "📱",
    tagline: "Social commerce",
    description:
      "Visual shopping cards, catalog creatives, and social discovery content formatted for Meta Shops and Pinterest Product Pins.",
    status: "building",
    statusLabel: "In progress",
    href: "/alliance-market/products",
    externalHref: null,
    color: "from-indigo-500/20 to-slate-950",
    badge: "bg-indigo-500/20 text-indigo-300",
  },
];

export default function StoresPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <span className="gem-pill">Sales channels</span>
        <h1 className="mt-5 text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl">
          Where we sell
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          GEM Cybersecurity and Alliance Market products are distributed across six
          sales channels. Each channel is structured with the right format — product
          feeds for Google, video cards for TikTok, full SKU catalog for Shopify, and
          more.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {channels.map((ch) => (
          <div
            key={ch.name}
            className={`relative rounded-2xl border border-white/10 bg-gradient-to-br ${ch.color} p-6 flex flex-col gap-4`}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-3xl">{ch.icon}</span>
                <h2 className="mt-2 text-xl font-bold text-white">{ch.name}</h2>
                <p className="text-xs text-slate-400">{ch.tagline}</p>
              </div>
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${ch.badge}`}>
                {ch.statusLabel}
              </span>
            </div>

            <p className="flex-1 text-sm leading-6 text-slate-300">{ch.description}</p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={ch.href}
                className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition"
              >
                View catalog →
              </Link>
              {ch.externalHref && (
                <a
                  href={ch.externalHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-slate-300 hover:border-white/40 hover:text-white transition"
                >
                  Visit store ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick stats */}
      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "Active channels", value: "3" },
          { label: "Total SKUs", value: "105" },
          { label: "GEM software products", value: "5" },
          { label: "Alliance Market items", value: "100" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
            <p className="text-3xl font-black text-white">{s.value}</p>
            <p className="mt-1 text-xs text-slate-400">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
