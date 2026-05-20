import Link from "next/link";
import {
  portalItems,
  sampleOrderInquiries,
  sampleSupportTickets,
} from "lib/gem-app";
import { company } from "lib/gem-catalog";

export const metadata = { title: "Customer Portal" };

export default function CustomerPortalPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="gem-pill">Customer portal</span>
      <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.06em] text-white">
        Customer workspace for orders, access, and support.
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
        A production-ready portal shell for customer onboarding, order inquiry
        history, and support ticket workflows.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {portalItems.map((item) => (
          <div key={item.title} className="gem-panel rounded-3xl p-6">
            <h2 className="text-xl font-black text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="gem-panel rounded-[2rem] p-6">
          <h2 className="text-2xl font-black text-white">
            Order inquiry history
          </h2>
          <div className="mt-5 grid gap-3">
            {sampleOrderInquiries.map((order) => (
              <div
                key={order.id}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm"
              >
                <p className="font-bold text-white">{order.product}</p>
                <p className="mt-1 text-slate-400">
                  {order.amount} · {order.users} users
                </p>
                <p className="mt-2 text-emerald-200">{order.status}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="gem-panel rounded-[2rem] p-6">
          <h2 className="text-2xl font-black text-white">Support tickets</h2>
          <div className="mt-5 grid gap-3">
            {sampleSupportTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm"
              >
                <p className="font-bold text-white">{ticket.subject}</p>
                <p className="mt-1 text-slate-400">
                  Priority: {ticket.priority}
                </p>
                <p className="mt-2 text-emerald-200">{ticket.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 gem-panel rounded-[2rem] p-8">
        <h2 className="text-2xl font-black text-white">Need help?</h2>
        <p className="mt-3 text-slate-300">
          Contact {company.name} at {company.email} or open a support request.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/support" className="gem-btn-primary">
            Open support
          </Link>
          <Link href="/contact" className="gem-btn-secondary">
            Contact GEM
          </Link>
        </div>
      </div>
    </section>
  );
}
