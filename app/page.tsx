import Link from "next/link";
import { company, products } from "lib/gem-catalog";

export const metadata = {
  description:
    "Annual prepaid cybersecurity software subscriptions for endpoint posture, phishing readiness, compliance evidence, threat intelligence, and executive reporting.",
  openGraph: {
    type: "website",
  },
};

const readiness = [
  ["5", "Merchant-ready software SKUs"],
  ["1-year", "Prepaid subscription model"],
  ["HTTPS", "Production storefront structure"],
];

const capabilities = [
  {
    title: "Product-level landing pages",
    body: "Every submitted SKU has a crawlable product page with matching title, price, availability, product image, and subscription terms.",
  },
  {
    title: "Merchant feed alignment",
    body: "The feed uses clean product attributes instead of service descriptions, company biography text, or unsupported security-abuse content.",
  },
  {
    title: "Transparent checkout handoff",
    body: "Checkout is structured for a conventional payment gateway or invoice workflow, with contact and policy links visible before submission.",
  },
  {
    title: "Trust and policy coverage",
    body: "Privacy, terms, refund, digital delivery, support, and security policy pages are included for production review readiness.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div>
          <span className="gem-pill">Merchant-ready cybersecurity store</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            Defensive cybersecurity software for lean security operations.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {company.name} packages endpoint posture, phishing readiness, compliance evidence, and threat visibility into annual prepaid software subscriptions that are clear to buy, deploy, and review.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/store" className="gem-btn-primary">Browse software store</Link>
            <Link href="/merchant-feed.txt" className="gem-btn-secondary">View Merchant feed</Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {readiness.map(([value, label]) => (
              <div key={label} className="gem-panel rounded-3xl p-5">
                <strong className="block text-2xl text-white">{value}</strong>
                <span className="text-sm text-slate-400">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="gem-panel rounded-[2rem] p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <strong>GEM Store Readiness</strong>
            <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-black text-emerald-100">Preview</span>
          </div>
          <div className="mx-auto my-8 grid h-56 w-56 place-items-center rounded-full bg-[conic-gradient(#6ee7b7_0_92%,rgba(255,255,255,.12)_92%_100%)] p-3">
            <div className="grid h-full w-full place-items-center rounded-full bg-slate-950 text-center">
              <div>
                <strong className="block text-6xl">92</strong>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Launch fit</span>
              </div>
            </div>
          </div>
          {["Product pages", "Policy coverage", "Merchant feed", "Checkout handoff"].map((item) => (
            <div key={item} className="mt-3 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300">
              <span>{item}</span>
              <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-100">Included</span>
            </div>
          ))}
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-4">
          {capabilities.map((item) => (
            <article key={item.title} className="gem-panel rounded-3xl p-6">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl border border-emerald-300/30 bg-emerald-300/10 text-emerald-100">✓</div>
              <h2 className="text-lg font-black text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="gem-pill">Featured products</span>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white">Cybersecurity software catalog.</h2>
          </div>
          <Link href="/store" className="gem-btn-secondary">View all products</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <article key={product.id} className="gem-panel overflow-hidden rounded-[2rem]">
              <div className="relative min-h-56 overflow-hidden bg-slate-900 p-6">
                <div className="absolute right-[-4rem] top-[-4rem] h-48 w-48 rounded-full bg-emerald-300/20 blur-3xl" />
                <div className="absolute bottom-[-5rem] left-[-4rem] h-56 w-56 rounded-full bg-sky-300/20 blur-3xl" />
                <span className="relative rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs font-bold text-emerald-100">{product.category}</span>
                <h3 className="relative mt-10 text-2xl font-black tracking-tight text-white">{product.shortTitle}</h3>
                <p className="relative mt-2 text-sm text-slate-300">SKU {product.sku}</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-white">{product.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{product.description}</p>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <strong className="text-xl text-white">{product.displayPrice}</strong>
                  <Link href={`/products/${product.slug}`} className="gem-btn-primary py-2">Details</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="gem-panel grid gap-8 rounded-[2rem] p-8 lg:grid-cols-[1fr_360px] lg:p-10">
          <div>
            <span className="gem-pill">Production activation</span>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-white">Ready for domain, checkout, and Merchant Center activation.</h2>
            <p className="mt-4 text-slate-300">
              Deploy this storefront to {company.domain}, connect payment or invoice processing, confirm policy pages, then submit the live feed URL in Google Merchant Center.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
            <p className="text-sm font-bold text-slate-400">Production contact</p>
            <p className="mt-3 text-lg font-black text-white">{company.phone}</p>
            <p className="text-lg font-black text-white">{company.email}</p>
            <Link href="/contact" className="gem-btn-primary mt-6 w-full">Contact GEM</Link>
          </div>
        </div>
      </section>
    </>
  );
}
