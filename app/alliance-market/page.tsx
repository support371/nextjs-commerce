import Link from "next/link";

const collections = [
  "Client Closing Kits",
  "Document Organization",
  "Desk & Office Essentials",
  "Moving & Packing Support",
  "Home Maintenance Tools",
  "Open House Supplies",
  "Client Gift Accessories",
  "Storage & Labeling",
  "Planning & Productivity",
  "Everyday Home Office",
];

const platforms = [
  "TikTok Shop",
  "Google Shopping",
  "Shopify",
  "Wish",
  "Amazon",
  "eBay",
  "Meta Shop",
  "Pinterest Catalog",
];

const mediaPlan = [
  ["Hero image", "Primary marketplace thumbnail and store collection cover"],
  ["Short demo video", "TikTok/Reels style product use case preview"],
  ["Lifestyle image", "In-context visual for catalog and shopping ads"],
  ["Detail image", "Close-up product proof for product page confidence"],
];

const products = collections.flatMap((collection, group) =>
  Array.from({ length: 10 }, (_, index) => {
    const id = group * 10 + index + 1;
    return {
      id,
      sku: `ATM-${String(1000 + id).padStart(5, "0")}`,
      title: `${collection} Product ${index + 1}`,
      collection,
      price: (14.99 + group * 3 + index * 1.45).toFixed(2),
      slug: `alliance-product-${id}`,
      body: "Physical retail product draft for home, office, gifting, moving, and organization workflows.",
    };
  })
);

export const metadata = {
  title: "Alliance Trust Market | Omnichannel Product Media App",
  description:
    "Alliance Trust Market omnichannel catalog for product images, videos, descriptions, policies, and marketplace-ready product showcase pages.",
};

export default function AllianceMarketPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <div>
          <span className="gem-pill">Omnichannel product media app</span>
          <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-[-0.06em] text-white sm:text-7xl">
            One product showcase built to serve every sales channel.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Alliance Trust Market is now positioned as a cross-platform storefront hub: image-first, video-ready, product-description driven, and structured for TikTok Shop, Google Shopping, Shopify, Wish, Amazon, eBay, Meta, and future catalog feeds.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/alliance-market/products" className="gem-btn-primary">Browse media catalog</Link>
            <Link href="/alliance-market/policies" className="gem-btn-secondary">Policy center</Link>
            <Link href="/" className="gem-btn-secondary">Existing GEM app</Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-4">
            <div className="gem-panel rounded-3xl p-5"><strong className="block text-3xl">100</strong><span className="text-sm text-slate-400">Product records</span></div>
            <div className="gem-panel rounded-3xl p-5"><strong className="block text-3xl">8</strong><span className="text-sm text-slate-400">Marketplace targets</span></div>
            <div className="gem-panel rounded-3xl p-5"><strong className="block text-3xl">Media</strong><span className="text-sm text-slate-400">Image and video slots</span></div>
            <div className="gem-panel rounded-3xl p-5"><strong className="block text-3xl">Safe</strong><span className="text-sm text-slate-400">Google app preserved</span></div>
          </div>
        </div>

        <aside className="gem-panel rounded-[2rem] p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <strong>Media storefront preview</strong>
            <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-black text-emerald-100">Ready</span>
          </div>
          <div className="mt-6 grid gap-4">
            <div className="min-h-56 rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-300/20 via-sky-300/10 to-slate-900 p-6">
              <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs font-bold text-emerald-100">Product hero image</span>
              <h2 className="mt-16 text-3xl font-black tracking-tight">Visual first listing module</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-emerald-300/10 text-2xl">▶</div>
                <strong>Short video slot</strong>
                <p className="mt-2 text-sm text-slate-400">Built for TikTok, Reels, Shorts, and product demos.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-sky-300/10 text-2xl">▧</div>
                <strong>Image gallery</strong>
                <p className="mt-2 text-sm text-slate-400">Hero, lifestyle, detail, and package shots.</p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="gem-pill">Marketplace coverage</span>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em]">One catalog, many storefronts.</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {platforms.map((platform) => (
            <div key={platform} className="gem-panel rounded-3xl p-5">
              <strong className="text-white">{platform}</strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">Product media, title, description, price, SKU, policy, and feed alignment.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="gem-pill">Media requirements</span>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em]">Product image and video structure.</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          {mediaPlan.map(([title, body]) => (
            <article key={title} className="gem-panel rounded-3xl p-6">
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-emerald-300/30 bg-emerald-300/10 text-emerald-100">✓</div>
              <h3 className="text-xl font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="gem-pill">Featured Alliance catalog</span>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em]">Image and video-ready product grid.</h2>
          </div>
          <Link href="/alliance-market/products" className="gem-btn-secondary">View all products</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.slice(0, 9).map((product) => (
            <article key={product.id} className="gem-panel overflow-hidden rounded-[2rem]">
              <div className="min-h-56 bg-gradient-to-br from-emerald-300/20 via-sky-300/10 to-slate-900 p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs font-bold text-emerald-100">{product.collection}</span>
                  <span className="rounded-full bg-black/30 px-3 py-1 text-xs font-black text-white">▶ Video</span>
                </div>
                <h3 className="mt-12 text-2xl font-black tracking-tight">{product.title}</h3>
                <p className="mt-2 text-sm text-slate-300">SKU {product.sku}</p>
              </div>
              <div className="p-6">
                <p className="text-sm leading-6 text-slate-400">{product.body}</p>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <strong className="text-xl">USD {product.price}</strong>
                  <Link href={`/alliance-market/products/${product.slug}`} className="gem-btn-primary py-2">Details</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
