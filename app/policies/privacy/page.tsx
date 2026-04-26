import { company } from "lib/gem-catalog";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="gem-pill">Privacy Policy</span>
      <h1 className="mt-5 text-5xl font-black tracking-[-0.06em] text-white">Privacy Policy</h1>
      <div className="mt-8 space-y-6 text-slate-300">
        <p>{company.name} collects contact, checkout, product-interest, and support information submitted through this website to respond to inquiries, provide product access, process orders, and operate customer support.</p>
        <p>Production teams should connect this page to final legal language, retention terms, processor details, and user request procedures before final launch.</p>
        <p>Privacy contact: <a className="text-emerald-200" href={`mailto:${company.email}`}>{company.email}</a></p>
      </div>
    </section>
  );
}
