import { approvalLanguage, complianceFrameworks, company } from "lib/gem-catalog";

export const metadata = {
  title: "Compliance Readiness",
  description: "Compliance readiness and control alignment support from GEM Cybersecurity Assist.",
};

const pillars = [
  "Security governance",
  "Evidence collection",
  "Control ownership",
  "Policy readiness",
  "Executive reporting",
  "Audit preparation",
];

export default function CompliancePage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="gem-pill">Compliance readiness</span>
      <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.06em] text-white">
        Make compliance easier to prove, operate, and explain.
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
        {company.name} helps businesses organize the security evidence, controls, policies, ownership, and reporting needed for stronger compliance readiness.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar} className="gem-panel rounded-3xl p-6">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl border border-emerald-300/30 bg-emerald-300/10 text-emerald-100">✓</div>
            <h2 className="text-xl font-black text-white">{pillar}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">Structured support for practical security operations and review-ready documentation.</p>
          </div>
        ))}
      </div>

      <div className="mt-12 gem-panel rounded-[2rem] p-8">
        <h2 className="text-3xl font-black tracking-[-0.04em] text-white">Frameworks supported for readiness and alignment</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {complianceFrameworks.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm font-bold text-slate-200">{item}</div>
          ))}
        </div>
        <p className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">{approvalLanguage}</p>
      </div>
    </section>
  );
}
