import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  company,
  getProductBySlug,
  productImageUrl,
  productUrl,
  products,
} from "lib/gem-catalog";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);
  if (!product) return notFound();
  return {
    title: product.title,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.title,
      description: product.description,
      url: productUrl(product),
      images: [productImageUrl(product)],
      type: "website",
    },
  };
}

export default async function ProductPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);
  if (!product) return notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    sku: product.sku,
    mpn: product.mpn,
    brand: { "@type": "Brand", name: company.name },
    description: product.description,
    image: productImageUrl(product),
    category: product.category,
    offers: {
      "@type": "Offer",
      url: productUrl(product),
      priceCurrency: "USD",
      price: product.priceValue,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-sm text-slate-400">
          <Link href="/" className="hover:text-white">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/store" className="hover:text-white">
            Store
          </Link>{" "}
          / {product.shortTitle}
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="gem-panel rounded-[2rem] p-8">
            <span className="gem-pill">{product.category}</span>
            <h1 className="mt-10 text-5xl font-black tracking-[-0.06em] text-white">
              {product.shortTitle}
            </h1>
            <p className="mt-4 text-slate-300">SKU {product.sku}</p>
            <p className="mt-8 text-3xl font-black text-emerald-200">
              {product.displayPrice}
            </p>
            <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-5">
              <p className="text-sm text-slate-400">
                Annual prepaid software subscription
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Digital delivery. In stock. 1-year license.
              </p>
            </div>
          </div>

          <div className="gem-panel rounded-[2rem] p-8">
            <h2 className="text-4xl font-black tracking-[-0.05em] text-white">
              {product.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              {product.description}
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-black text-white">Capabilities</h3>
                <ul className="mt-4 grid gap-2 text-sm text-slate-300">
                  {product.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-black text-white">Outcomes</h3>
                <ul className="mt-4 grid gap-2 text-sm text-slate-300">
                  {product.outcomes.map((outcome) => (
                    <li key={outcome}>✓ {outcome}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="font-black text-white">Best fit</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {product.bestFor}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/checkout?product=${product.slug}`}
                className="gem-btn-primary"
              >
                Start checkout
              </Link>
              <Link href="/contact" className="gem-btn-secondary">
                Ask a question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
