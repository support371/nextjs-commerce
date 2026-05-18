import Link from "next/link";

const stores = [
  {
    name: "TikTok Shop",
    href: "/alliance-market/tiktok-products",
    focus: "Vertical videos, image posters, short captions, creator-style product storytelling.",
    status: "Building media cards",
  },
  {
    name: "Google Shopping",
    href: "/store",
    focus: "Structured product data, merchant feed, policy coverage, SEO-safe product pages.",
    status: "Existing app preserved",
  },
  {
    name: "Shopify",
    href: "/alliance-market/products",
    focus: "Product import workflow, SKUs, variants, images, inventory and checkout handoff.",
    status: "Catalog route active",
  },
  {
    name: "Wish",
    href: "/alliance-market/products",
    focus: "Marketplace-ready listing cards, pricing, descriptions and lightweight product media.",
    status: "Framework route active",
  },
  {
    name: "Amazon / eBay",
    href: "/alliance-market/products",
    focus: "Listing content, SKU mapping, policy checks, title and bullet formatting.",
    status: "Framework route active",
  },
  {
    name: "Meta / Pinterest",
    href: "/alliance-market/products",
    focus: "Visual shopping cards, catalog creatives, social discovery and product links.",
    status: "Framework route active",
  },
];

export const metadata = {
  title: "Store Channels | Alliance Trust Market",
  description: "Separated store channels inside one Next.js Commerce framework.",
};

export default function StoreChannelsPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <span className="gem-pill">One framework, separated stores</span>
        <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-[-0.06em] text-white sm:text-7xl">
          Every channel gets its own storefront logic.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          This is the reconstruction model: one Next.js Commerce codebase, but not one blended platform. TikTok, Google, Shopify, Wish, Amazon, eBay, Meta, and Pinterest are separated by route, content model, and channel-specific presentation.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/alliance-market" className="gem-btn-secondary">Alliance home</Link>
          <Link href="/alliance-market/tiktok-products" className="gem-btn-primary">TikTok video products</Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stores.map((store) => (
            <Link key={store.name} href={store.href} className="gem-panel rounded-[2rem] p-6 transition hover:bg-white/[0.09]">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl font-black text-white">{store.name}</h2>
                <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-black text-emerald-100">{store.status}</span>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-300">{store.focus}</p>
              <div className="mt-8 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm font-bold text-slate-200">
                Dedicated channel route + shared commerce framework
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
