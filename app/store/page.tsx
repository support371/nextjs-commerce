import Link from "next/link";
import { products } from "lib/gem-catalog";

export const metadata = {
  title: "Store",
  description:
    "Shop annual prepaid GEM Cybersecurity Assist software subscriptions for endpoint security, phishing defense, compliance, threat intelligence, and security operations.",
};

export default function StorePage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <span className="gem-pill">Software store</span>
        <h1 className="mt-5 text-5xl font-black tracking-[-0.06em] text-white">
          Annual cybersecurity software subscriptions.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Each product is framed as defensive software with a fixed annual prepaid price, visible license term, digital delivery model, and dedicated landing page.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article key={product.id} className="gem-panel flex overflow-hidden rounded-[2rem]">
            <div className="flex w-full flex-col">
              <div className="relative min-h-52 overflow-hidden bg-slate-900 p-6">
                <div className="absolute right-[-5rem] top-[-5rem] h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl" />
                <div className="absolute bottom-[-5rem] left-[-4rem] h-56 w-56 rounded-full bg-sky-300/20 blur-3xl" />
                <span className="relative rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs font-bold text-emerald-100">
                  {product.category}
                </span>
                <h2 className="relative mt-10 text-2xl font-black tracking-tight text-white">
                  {product.shortTitle}
                </h2>
                <p className="relative mt-2 text-sm text-slate-300">{product.sku}</p>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-black text-white">{product.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{product.description}</p>
                <ul className="mt-5 grid gap-2 text-sm text-slate-300">
                  {product.features.slice(0, 3).map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                  <strong className="text-xl text-white">{product.displayPrice}</strong>
                  <Link href={`/products/${product.slug}`} className="gem-btn-primary py-2">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
