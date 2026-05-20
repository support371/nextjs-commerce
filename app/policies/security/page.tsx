import { company } from "lib/gem-catalog";

export const metadata = { title: "Security Policy" };

export default function SecurityPolicyPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="gem-pill">Security Policy</span>
      <h1 className="mt-5 text-5xl font-black tracking-[-0.06em] text-white">
        Security Policy
      </h1>
      <div className="mt-8 space-y-6 text-slate-300">
        <p>
          GEM Cybersecurity Assist maintains a security-first posture for its
          website, product pages, support workflows, and customer request
          handling.
        </p>
        <p>
          Production deployment should enforce HTTPS, secure headers, input
          validation, rate limiting, least-privilege access, and monitored
          operational logs.
        </p>
        <p>
          Security contact:{" "}
          <a className="text-emerald-200" href={`mailto:${company.email}`}>
            {company.email}
          </a>
        </p>
      </div>
    </section>
  );
}
