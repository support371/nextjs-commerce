import { company } from "lib/gem-catalog";

export const metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="gem-pill">Terms</span>
      <h1 className="mt-5 text-5xl font-black tracking-[-0.06em] text-white">Terms of Service</h1>
      <div className="mt-8 space-y-6 text-slate-300">
        <p>GEM products are annual prepaid software subscriptions unless a separate written agreement states otherwise.</p>
        <p>Customers should use the products for internal business operations, reporting, readiness, and support workflows.</p>
        <p>Production teams should replace this page with final legal language before launch.</p>
        <p>Contact: <a className="text-emerald-200" href={`mailto:${company.email}`}>{company.email}</a></p>
      </div>
    </section>
  );
}
