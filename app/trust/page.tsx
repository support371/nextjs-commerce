import { approvalLanguage, company, trustSignals } from "lib/gem-catalog";

export const metadata = {
  title: "Trust Center",
  description: "Trust, transparency, policy, contact, and verification information for GEM Cybersecurity Assist.",
};

const trustBlocks = [
  ["Published contact", `${company.email} and ${company.phone}`],
  ["Clear product terms", "Annual prepaid software subscriptions"],
  ["Visible policies", "Privacy, terms, refund, delivery, and security pages"],
  ["Merchant alignment", "Feed data maps directly to product pages"],
];

export default function TrustPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="gem-pill">Trust Center</span>
      <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.06em] text-white">Clarity, policy visibility, and operational transparency.</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">GEM is structured to give customers clear product pages, public contact information, transparent pricing, visible policies, and consistent Merchant Center product data.</p>

      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {trustBlocks.map(([title, text]) => (
          <div key={title} className="gem-panel rounded-3xl p-6">
            <h2 className="text-xl font-black text-white">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 gem-panel rounded-[2rem] p-8">
        <h2 className="text-3xl font-black tracking-[-0.04em] text-white">Trust footer signals</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {trustSignals.map((signal) => (
            <div key={signal} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-center text-sm font-bold text-slate-200">
              <div className="mb-2 text-emerald-200">*****</div>
              {signal}
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">{approvalLanguage}</p>
      </div>
    </section>
  );
}
