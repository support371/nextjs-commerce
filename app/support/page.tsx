import { company, products } from "lib/gem-catalog";

export const metadata = { title: "Support" };

export default function SupportPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="gem-pill">Support</span>
      <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.06em] text-white">Customer support and product access.</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Get help with product access, billing, software setup, digital delivery, and account questions.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="gem-panel rounded-3xl p-6"><h2 className="text-xl font-black text-white">Email support</h2><p className="mt-3 text-sm text-slate-400">{company.email}</p></div>
        <div className="gem-panel rounded-3xl p-6"><h2 className="text-xl font-black text-white">Phone</h2><p className="mt-3 text-sm text-slate-400">{company.phone}</p></div>
        <div className="gem-panel rounded-3xl p-6"><h2 className="text-xl font-black text-white">Product coverage</h2><p className="mt-3 text-sm text-slate-400">{products.length} annual software subscriptions.</p></div>
      </div>
    </section>
  );
}
