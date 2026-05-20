import Link from "next/link";

export const metadata = { title: "Thank You" };

export default function ThankYouPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <span className="gem-pill">Request received</span>
      <h1 className="mt-6 text-5xl font-black tracking-[-0.06em] text-white">
        Thank you.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
        Your request has been captured. Production workflows should route
        submissions to CRM, email, helpdesk, or payment processing.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/store" className="gem-btn-primary">
          Return to store
        </Link>
        <Link href="/contact" className="gem-btn-secondary">
          Contact support
        </Link>
      </div>
    </section>
  );
}
