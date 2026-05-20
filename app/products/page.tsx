import Link from "next/link";
import { products } from "lib/gem-catalog";

export const metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="gem-pill">Product showcase</span>
      <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.06em] text-white">
        Cybersecurity products built around functions, benefits, and business
        outcomes.
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
        Each GEM product includes a visual operating concept, clear function
        map, practical benefit set, public price, and dedicated checkout
        pathway.
      </p>
      <div className="mt-10 grid gap-8">
        {products.map((product) => (
          <article
            key={product.id}
            className="gem-panel grid overflow-hidden rounded-[2rem] lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="relative min-h-72 overflow-hidden bg-slate-900 p-8">
              <div className="absolute right-[-5rem] top-[-5rem] h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
              <div className="absolute bottom-[-6rem] left-[-6rem] h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
              <div className="relative">
                <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs font-bold text-emerald-100">
                  {product.category}
                </span>
                <h2 className="mt-10 text-4xl font-black tracking-[-0.05em] text-white">
                  {product.visualTitle}
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {product.visualDescription}
                </p>
                <p className="mt-8 text-2xl font-black text-emerald-200">
                  {product.displayPrice}
                </p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-black text-white">
                {product.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {product.description}
              </p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-black text-white">Functions</h4>
                  <ul className="mt-3 grid gap-2 text-sm text-slate-300">
                    {product.functions.map((item) => (
                      <li key={item}>Function: {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-black text-white">Benefits</h4>
                  <ul className="mt-3 grid gap-2 text-sm text-slate-300">
                    {product.benefits.map((item) => (
                      <li key={item}>Benefit: {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/products/${product.slug}`}
                  className="gem-btn-primary"
                >
                  View product
                </Link>
                <Link
                  href={`/checkout?product=${product.slug}`}
                  className="gem-btn-secondary"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
