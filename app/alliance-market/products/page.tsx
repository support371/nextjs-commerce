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
    };
  })
);

export const metadata = {
  title: "Alliance Trust Products",
  description: "Alliance Trust Market product catalog route.",
};

export default function AllianceProductsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <span className="gem-pill">Alliance Trust Market</span>
      <h1 className="mt-6 text-5xl font-black tracking-[-0.06em] text-white sm:text-7xl">Product catalog.</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        One hundred draft physical retail products arranged as a separate app module inside this repository. Final inventory, UPC or GTIN status, photography, and shipping data should be verified before marketplace publication.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <Link key={product.id} href={`/alliance-market/products/${product.slug}`} className="gem-panel rounded-3xl p-6 transition hover:bg-white/[0.09]">
            <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-bold text-emerald-100">{product.collection}</span>
            <h2 className="mt-6 text-xl font-black text-white">{product.title}</h2>
            <p className="mt-3 text-sm text-slate-400">SKU {product.sku}</p>
            <strong className="mt-5 block text-2xl text-white">{product.price}</strong>
          </Link>
        ))}
      </div>
    </section>
  );
}
