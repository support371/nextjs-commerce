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

const products = collections.flatMap((collection, group) =>
  Array.from({ length: 10 }, (_, index) => {
    const id = group * 10 + index + 1;
    return {
      id,
      sku: `ATM-${String(1000 + id).padStart(5, "0")}`,
      title: `${collection} Product ${index + 1}`,
      collection,
      price: `$${(14.99 + group * 3 + index * 1.45).toFixed(2)}`,
      slug: `alliance-product-${id}`,
      body: "Physical retail product draft for home, office, gifting, moving, and organization workflows.",
    };
  })
);

export const metadata = {
  title: "Alliance Trust Market | New App",
  description: "New Alliance Trust Market catalog app inside the existing Next.js Commerce repository.",
};

export default function AllianceMarketPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <span className="gem-pill">New app module</span>
        <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-[-0.06em] text-white sm:text-7xl">
          Alliance Trust Market storefront.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          This route publishes the Alliance Trust Market catalog as a separate app experience while preserving the existing GEM cybersecurity commerce app and Google Merchant workflows.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="gem-btn-secondary">Existing GEM app</Link>
          <Link href="/alliance-market/products" className="gem-btn-primary">Browse Alliance products</Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-4">
          <div className="gem-panel rounded-3xl p-5"><strong className="block text-3xl">100</strong><span className="text-sm text-slate-400">Draft products</span></div>
          <div className="gem-panel rounded-3xl p-5"><strong className="block text-3xl">10</strong><span className="text-sm text-slate-400">Collections</span></div>
          <div className="gem-panel rounded-3xl p-5"><strong className="block text-3xl">Static</strong><span className="text-sm text-slate-400">Vercel-ready route</span></div>
          <div className="gem-panel rounded-3xl p-5"><strong className="block text-3xl">Safe</strong><span className="text-sm text-slate-400">Existing app preserved</span></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="gem-pill">Featured Alliance catalog</span>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em]">Launch-ready product grid.</h2>
          </div>
          <Link href="/alliance-market/policies" className="gem-btn-secondary">Policy center</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.slice(0, 9).map((product) => (
            <article key={product.id} className="gem-panel overflow-hidden rounded-[2rem]">
              <div className="min-h-48 bg-gradient-to-br from-emerald-300/20 via-sky-300/10 to-slate-900 p-6">
                <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs font-bold text-emerald-100">{product.collection}</span>
                <h3 className="mt-10 text-2xl font-black tracking-tight">{product.title}</h3>
                <p className="mt-2 text-sm text-slate-300">SKU {product.sku}</p>
              </div>
              <div className="p-6">
                <p className="text-sm leading-6 text-slate-400">{product.body}</p>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <strong className="text-xl">{product.price}</strong>
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
