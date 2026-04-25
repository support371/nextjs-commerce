import Link from "next/link";
import { company, getProductBySlug, products } from "lib/gem-catalog";

export const metadata = {
  title: "Checkout",
  description: "Checkout handoff for GEM Cybersecurity Assist annual software subscriptions.",
};

export default async function CheckoutPage(props: {
  searchParams?: Promise<{ product?: string }>;
}) {
  const searchParams = await props.searchParams;
  const selected = searchParams?.product ? getProductBySlug(searchParams.product) : products[0];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <span className="gem-pill">Checkout handoff</span>
        <h1 className="mt-5 text-5xl font-black tracking-[-0.06em] text-white">Request annual software access.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Production should connect this form to Stripe, Shopify, WooCommerce, or an invoice workflow before final Merchant Center review.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
        <form className="gem-panel grid gap-4 rounded-[2rem] p-8" action="/api/checkout" method="post">
          <label className="grid gap-2 text-sm font-bold text-slate-300">Product
            <select name="product" defaultValue={selected?.slug} className="rounded-2xl border border-white/10 bg-slate-950 p-4 text-white">
              {products.map((product) => <option key={product.id} value={product.slug}>{product.title}</option>)}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold text-slate-300">Full name<input required name="name" className="rounded-2xl border border-white/10 bg-slate-950 p-4 text-white" /></label>
          <label className="grid gap-2 text-sm font-bold text-slate-300">Business email<input required type="email" name="email" className="rounded-2xl border border-white/10 bg-slate-950 p-4 text-white" /></label>
          <label className="grid gap-2 text-sm font-bold text-slate-300">Company<input required name="company" className="rounded-2xl border border-white/10 bg-slate-950 p-4 text-white" /></label>
          <label className="grid gap-2 text-sm font-bold text-slate-300">Payment preference
            <select name="paymentMethod" className="rounded-2xl border border-white/10 bg-slate-950 p-4 text-white">
              <option>Card payment gateway</option>
              <option>Invoice request</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold text-slate-300">Notes<textarea name="notes" className="min-h-32 rounded-2xl border border-white/10 bg-slate-950 p-4 text-white" /></label>
          <p className="text-xs text-slate-400">By submitting, customer acknowledges the Terms, Refund Policy, and Digital Delivery Policy.</p>
          <button className="gem-btn-primary" type="submit">Submit checkout request</button>
        </form>
        <aside className="gem-panel h-fit rounded-[2rem] p-8">
          <h2 className="text-2xl font-black text-white">Order summary</h2>
          {selected ? <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/60 p-5"><p className="font-black text-white">{selected.title}</p><p className="mt-2 text-sm text-slate-400">SKU {selected.sku}</p><p className="mt-4 text-2xl font-black text-emerald-200">{selected.displayPrice}</p></div> : null}
          <div className="mt-6 grid gap-2 text-sm text-slate-400">
            <Link href="/policies/refund" className="hover:text-white">Refund Policy</Link>
            <Link href="/policies/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/policies/digital-delivery" className="hover:text-white">Digital Delivery</Link>
          </div>
          <p className="mt-6 text-sm text-slate-400">Support: <a className="text-emerald-200" href={`mailto:${company.email}`}>{company.email}</a></p>
        </aside>
      </div>
    </section>
  );
}
