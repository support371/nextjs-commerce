import { company, products } from "lib/gem-catalog";

export const metadata = {
  title: "Contact",
  description:
    "Contact GEM Cybersecurity Assist for software access, product support, billing, and Merchant Center verification.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <span className="gem-pill">Contact</span>
        <h1 className="mt-5 text-5xl font-black tracking-[-0.06em] text-white">
          Talk to GEM Cybersecurity Assist.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Use this page for product questions, software access, billing,
          refunds, support, and business verification.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
        <form
          className="gem-panel grid gap-4 rounded-[2rem] p-8"
          action="/api/contact"
          method="post"
        >
          <label className="grid gap-2 text-sm font-bold text-slate-300">
            Full name
            <input
              required
              name="name"
              className="rounded-2xl border border-white/10 bg-slate-950 p-4 text-white"
            />
          </label>
          <label className="grid gap-2 text-sm font-bold text-slate-300">
            Email address
            <input
              required
              type="email"
              name="email"
              className="rounded-2xl border border-white/10 bg-slate-950 p-4 text-white"
            />
          </label>
          <label className="grid gap-2 text-sm font-bold text-slate-300">
            Topic
            <select
              name="topic"
              className="rounded-2xl border border-white/10 bg-slate-950 p-4 text-white"
            >
              <option>Product question</option>
              <option>Software access</option>
              <option>Billing or invoice</option>
              <option>Refund request</option>
              <option>Support</option>
              <option>Business verification</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold text-slate-300">
            Product interest
            <select
              name="product"
              className="rounded-2xl border border-white/10 bg-slate-950 p-4 text-white"
            >
              <option>General question</option>
              {products.map((product) => (
                <option key={product.id}>{product.title}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold text-slate-300">
            Message
            <textarea
              required
              name="message"
              className="min-h-36 rounded-2xl border border-white/10 bg-slate-950 p-4 text-white"
            />
          </label>
          <button className="gem-btn-primary" type="submit">
            Send message
          </button>
        </form>

        <aside className="gem-panel h-fit rounded-[2rem] p-8">
          <h2 className="text-2xl font-black text-white">Business contact</h2>
          <div className="mt-6 grid gap-4 text-slate-300">
            <p>
              <strong className="block text-white">Email</strong>
              <a className="text-emerald-200" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
            <p>
              <strong className="block text-white">Phone</strong>
              <a className="text-emerald-200" href={`tel:${company.phoneRaw}`}>
                {company.phone}
              </a>
            </p>
            <p>
              <strong className="block text-white">Domain</strong>
              {company.domain}
            </p>
            <p>
              <strong className="block text-white">Business address</strong>
              {company.address}
            </p>
          </div>
          <p className="mt-6 rounded-3xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm text-amber-100">
            Add the final business address before final Merchant Center review.
          </p>
        </aside>
      </div>
    </section>
  );
}
