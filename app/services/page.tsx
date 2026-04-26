const services = [
  {
    title: "Security Readiness Review",
    price: "From $1,500",
    text: "A practical review of current posture, ownership, gaps, and priority actions.",
    items: ["Readiness scorecard", "Risk register", "30-day action plan"],
  },
  {
    title: "Compliance Evidence Setup",
    price: "From $2,500",
    text: "Setup support for policies, evidence tracking, control ownership, and audit prep.",
    items: ["Evidence map", "Policy tracker", "Control ownership model"],
  },
  {
    title: "Executive Risk Reporting",
    price: "From $750/month",
    text: "Recurring leadership-ready reporting on risk, progress, priorities, and status.",
    items: ["Monthly digest", "Posture trends", "Priority recommendations"],
  },
];

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="gem-pill">Services</span>
      <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.06em] text-white">Professional support for product rollout and security maturity.</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">GEM services help customers implement the software stack, organize evidence, and produce executive-ready reporting.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="gem-panel rounded-[2rem] p-6">
            <h2 className="text-2xl font-black text-white">{service.title}</h2>
            <p className="mt-3 text-xl font-black text-emerald-200">{service.price}</p>
            <p className="mt-4 text-sm leading-6 text-slate-300">{service.text}</p>
            <ul className="mt-6 grid gap-2 text-sm text-slate-400">
              {service.items.map((item) => <li key={item}>Included: {item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
