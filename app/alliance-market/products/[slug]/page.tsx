import Link from "next/link";
import { notFound } from "next/navigation";

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
      weight: `${130 + id * 11}g`,
      dimensions: `${6 + (id % 8)} x ${4 + (id % 5)} x ${1 + (id % 4)} in`,
      description: "A practical physical retail item for organized property, home, and office workflows. Built for move-in support, gifting, staging, desk organization, and everyday planning.",
    };
  })
);

export const dynamicParams = true;

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  return {
    title: product ? product.title : "Alliance Product",
    description: product?.description || "Alliance Trust Market product detail.",
  };
}

export default function AllianceProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) notFound();

  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Link href="/alliance-market/products" className="text-sm font-bold text-emerald-100 hover:text-white">Back to Alliance products</Link>
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="gem-panel min-h-[28rem] rounded-[2rem] bg-gradient-to-br from-emerald-300/20 via-sky-300/10 to-slate-900 p-8">
            <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs font-bold text-emerald-100">{product.collection}</span>
            <div className="mt-24 text-8xl font-black text-white/80">ATM</div>
            <p className="mt-6 max-w-sm text-slate-300">Production photography placeholder. Replace with verified product images before review.</p>
          </div>
          <div>
            <span className="gem-pill">{product.collection}</span>
            <h1 className="mt-6 text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl">{product.title}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">{product.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-300">SKU {product.sku}</span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-300">{product.weight}</span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-300">{product.dimensions}</span>
            </div>
            <strong className="mt-8 block text-4xl text-white">{product.price}</strong>
            <div className="mt-8 grid gap-3">
              {["Physical retail product only", "Inventory confirmation required", "UPC or GTIN review required", "Shipping and returns must be finalized"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-300">{item}</div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/alliance-market/policies" className="gem-btn-secondary">Policies</Link>
              <Link href="/contact" className="gem-btn-primary">Contact seller</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
