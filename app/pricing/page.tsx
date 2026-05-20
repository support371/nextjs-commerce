import Link from "next/link";
import { products } from "lib/gem-catalog";

export const metadata = {
  title: "Pricing",
  description:
    "Transparent annual prepaid pricing for GEM Cybersecurity Assist software subscriptions.",
};

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <span className="gem-pill">Transparent pricing</span>
        <h1 className="mt-5 text-5xl font-black tracking-[-0.06em] text-white">
          Fixed annual software pricing.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          All GEM products are listed as one-year prepaid software subscriptions
          with public pricing and digital delivery.
        </p>
      </div>
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06]">
        <table className="w-full min-w-[850px] text-left text-sm">
          <thead className="bg-white/[0.06] text-emerald-100">
            <tr>
              <th className="p-4">SKU</th>
              <th className="p-4">Product</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Availability</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-slate-300">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="p-4 font-bold text-white">{product.sku}</td>
                <td className="p-4">
                  <Link
                    href={`/products/${product.slug}`}
                    className="font-bold text-emerald-200 hover:text-emerald-100"
                  >
                    {product.title}
                  </Link>
                </td>
                <td className="p-4">{product.category}</td>
                <td className="p-4 font-black text-white">
                  {product.displayPrice}
                </td>
                <td className="p-4">In stock</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
