import { company } from "lib/gem-catalog";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="gem-pill">About GEM</span>
      <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.06em] text-white">A product-led company built for clear business protection workflows.</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{company.positioning}</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="gem-panel rounded-3xl p-6"><h2 className="text-xl font-black text-white">Clear products</h2><p className="mt-3 text-sm text-slate-400">Visible scope, price, delivery terms, and support pathways for every product.</p></div>
        <div className="gem-panel rounded-3xl p-6"><h2 className="text-xl font-black text-white">Business clarity</h2><p className="mt-3 text-sm text-slate-400">Simple dashboards, evidence workflows, and leadership reporting.</p></div>
        <div className="gem-panel rounded-3xl p-6"><h2 className="text-xl font-black text-white">Trust posture</h2><p className="mt-3 text-sm text-slate-400">Public contact details, policies, product feeds, and transparent checkout paths.</p></div>
      </div>
    </section>
  );
}
