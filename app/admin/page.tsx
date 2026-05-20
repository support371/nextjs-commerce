import Link from "next/link";
import {
  adminModules,
  auditEvents,
  dashboardMetrics,
  sampleLeads,
  sampleOrderInquiries,
  sampleSupportTickets,
} from "lib/gem-app";

export const metadata = { title: "Admin Dashboard" };

export default function AdminDashboardPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="gem-pill">Admin dashboard</span>
      <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.06em] text-white">
        GEM operations control center.
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
        Manage storefront content, lead intake, checkout inquiries, support
        tickets, and operational audit activity.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <div key={metric.label} className="gem-panel rounded-3xl p-6">
            <p className="text-sm font-bold text-slate-400">{metric.label}</p>
            <p className="mt-3 text-4xl font-black text-white">
              {metric.value}
            </p>
            <p className="mt-2 text-xs text-slate-500">{metric.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {adminModules.map((module) => (
          <Link
            key={module.title}
            href={module.href}
            className="gem-panel rounded-3xl p-6 transition hover:border-emerald-300/40"
          >
            <h2 className="text-xl font-black text-white">{module.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {module.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="gem-panel rounded-[2rem] p-6">
          <h2 className="text-2xl font-black text-white">Recent leads</h2>
          <div className="mt-5 grid gap-3">
            {sampleLeads.map((lead) => (
              <div
                key={lead.id}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm"
              >
                <p className="font-bold text-white">
                  {lead.name} — {lead.company}
                </p>
                <p className="mt-1 text-slate-400">{lead.interest}</p>
                <p className="mt-2 text-emerald-200">{lead.status}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="gem-panel rounded-[2rem] p-6">
          <h2 className="text-2xl font-black text-white">Order inquiries</h2>
          <div className="mt-5 grid gap-3">
            {sampleOrderInquiries.map((order) => (
              <div
                key={order.id}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm"
              >
                <p className="font-bold text-white">{order.product}</p>
                <p className="mt-1 text-slate-400">
                  {order.customer} · {order.amount}
                </p>
                <p className="mt-2 text-emerald-200">{order.status}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="gem-panel rounded-[2rem] p-6">
          <h2 className="text-2xl font-black text-white">Support queue</h2>
          <div className="mt-5 grid gap-3">
            {sampleSupportTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm"
              >
                <p className="font-bold text-white">{ticket.subject}</p>
                <p className="mt-1 text-slate-400">
                  {ticket.customer} · {ticket.priority}
                </p>
                <p className="mt-2 text-emerald-200">{ticket.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 gem-panel rounded-[2rem] p-6">
        <h2 className="text-2xl font-black text-white">Audit activity</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-5">
          {auditEvents.map((event) => (
            <div
              key={event}
              className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300"
            >
              {event}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
