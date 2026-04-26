import { company } from "lib/gem-catalog";

export const metadata = { title: "Refund Policy" };

export default function RefundPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="gem-pill">Refund Policy</span>
      <h1 className="mt-5 text-5xl font-black tracking-[-0.06em] text-white">Refund Policy</h1>
      <div className="mt-8 space-y-6 text-slate-300">
        <p>GEM products are digital annual software subscriptions. Refund handling should follow the final production billing policy published before launch.</p>
        <p>Refund requests should include customer name, product, purchase email, and order reference.</p>
        <p>Contact: <a className="text-emerald-200" href={`mailto:${company.email}`}>{company.email}</a></p>
      </div>
    </section>
  );
}
