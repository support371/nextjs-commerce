import Link from "next/link";

const policies = [
  {
    title: "Privacy Policy",
    body: "Alliance Trust Market collects only the operational information needed to support catalog inquiries, fulfillment workflows, and customer support. Do not submit sensitive financial, legal, or security credentials through this static storefront route.",
  },
  {
    title: "Terms of Service",
    body: "Use of this app route is governed by standard website terms. Product records are draft retail catalog entries until inventory, pricing, authorization, shipping, tax, and marketplace eligibility are verified.",
  },
  {
    title: "Shipping Policy",
    body: "Shipping timelines, carrier selection, package weight, dimensions, and handling fees must be finalized against real inventory before live sale or marketplace submission.",
  },
  {
    title: "Return Policy",
    body: "Returns are subject to final seller approval, product condition, fulfillment channel rules, and any applicable marketplace policy once products are activated for sale.",
  },
];

export const metadata = {
  title: "Alliance Trust Market Policies",
  description: "Policy center for the Alliance Trust Market app route.",
};

export default function AlliancePoliciesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <span className="gem-pill">Alliance policy center</span>
      <h1 className="mt-6 text-5xl font-black tracking-[-0.06em] text-white sm:text-7xl">Operational policies.</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        These pages provide the compliance surface for the new Alliance Trust Market app while preserving the existing GEM application and its Google Merchant-oriented policy structure.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {policies.map((policy) => (
          <article key={policy.title} className="gem-panel rounded-[2rem] p-8">
            <h2 className="text-2xl font-black text-white">{policy.title}</h2>
            <p className="mt-4 leading-7 text-slate-300">{policy.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 rounded-3xl border border-amber-300/20 bg-amber-300/10 p-6 text-amber-100">
        Final human review is required before publishing real products, submitting listings, or claiming marketplace approval.
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/alliance-market" className="gem-btn-secondary">Alliance home</Link>
        <Link href="/alliance-market/products" className="gem-btn-primary">Product catalog</Link>
      </div>
    </section>
  );
}
