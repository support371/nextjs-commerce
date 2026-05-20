import Link from "next/link";

const tiktokProducts = [
  {
    title: "Cybersecurity Is A Business Priority",
    sku: "ATM-TIKTOK-001",
    accent: "from-yellow-400/30 via-amber-300/10 to-slate-950",
    description:
      "Protect your systems, customers, reputation, and revenue with a concise security awareness product card.",
    script: "Secure today. Stronger tomorrow.",
    bullets: [
      "Protect your systems",
      "Protect your customers",
      "Protect your reputation",
      "Protect your revenue",
    ],
  },
  {
    title: "Cybersecurity Checklist",
    sku: "ATM-TIKTOK-002",
    accent: "from-cyan-400/30 via-sky-300/10 to-slate-950",
    description:
      "A short checklist style product video for baseline cyber hygiene and staff education.",
    script: "Start with the basics. Stay secure. Stay ahead.",
    bullets: [
      "Strong passwords",
      "Multi-factor authentication",
      "Software updates",
      "Secure backups",
    ],
  },
  {
    title: "Pause Before You Click",
    sku: "ATM-TIKTOK-003",
    accent: "from-red-400/30 via-rose-300/10 to-slate-950",
    description:
      "A phishing prevention product card built for high-retention TikTok short-form awareness.",
    script: "Phishing looks real. Protect your business.",
    bullets: [
      "Check the sender",
      "Watch for urgency",
      "Verify the link",
      "Avoid unknown password pages",
    ],
  },
  {
    title: "Signs You Need A Cybersecurity Review",
    sku: "ATM-TIKTOK-004",
    accent: "from-sky-400/30 via-cyan-300/10 to-slate-950",
    description:
      "A gap-assessment product video concept for moving prospects into a cybersecurity review flow.",
    script: "Find the gaps before attackers do.",
    bullets: ["No MFA", "Old software", "Reused passwords", "No backup plan"],
  },
  {
    title: "One Leaked Password",
    sku: "ATM-TIKTOK-005",
    accent: "from-blue-400/30 via-cyan-300/10 to-slate-950",
    description:
      "A password security product video card for simple, visual, conversion-friendly education.",
    script: "Fix the easy risk first.",
    bullets: [
      "Use unique passwords",
      "Avoid reuse",
      "Enable MFA",
      "Use a password manager",
    ],
  },
];

export const metadata = {
  title: "TikTok Product Videos | Alliance Trust Market",
  description:
    "TikTok-ready product media gallery with vertical image cards, play controls, product descriptions, and video slots.",
};

export default function TikTokProductsPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <span className="gem-pill">TikTok product media</span>
        <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-[-0.06em] text-white sm:text-7xl">
          Vertical image cards with a playable video layer.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          This page is now structured exactly for the product-media use case:
          each TikTok product has a vertical poster, a play button, a product
          description, listing SKU, bullet points, and a short video caption
          area. The current cards are ready to connect to uploaded MP4 files or
          hosted TikTok-ready videos.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/alliance-market" className="gem-btn-secondary">
            Alliance home
          </Link>
          <Link href="/alliance-market/products" className="gem-btn-primary">
            Product catalog
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiktokProducts.map((product) => (
            <article
              key={product.sku}
              className="gem-panel overflow-hidden rounded-[2rem]"
            >
              <div
                className={`relative min-h-[620px] bg-gradient-to-br ${product.accent} p-6`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,.22)_1px,transparent_1px)] bg-[size:44px_44px]" />
                <div className="relative flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-slate-200">
                    Cybersecurity
                  </span>
                  <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-black text-white">
                    {product.sku}
                  </span>
                </div>
                <h2 className="relative mt-12 text-4xl font-black uppercase leading-tight tracking-[-0.05em] text-slate-200 sm:text-5xl">
                  {product.title}
                </h2>
                <div className="relative mx-auto mt-20 grid h-28 w-28 place-items-center rounded-full border-4 border-current text-emerald-200">
                  <button
                    aria-label={`Play video for ${product.title}`}
                    className="grid h-20 w-20 place-items-center rounded-full bg-current text-3xl text-slate-950 shadow-2xl"
                  >
                    ▶
                  </button>
                </div>
                <div className="relative mt-16 rounded-[2rem] border border-white/15 bg-black/55 p-6 backdrop-blur-md">
                  <div className="grid gap-4">
                    {product.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="flex items-center gap-4 text-lg font-black tracking-wide text-slate-200"
                      >
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-300/20 text-emerald-100">
                          ✓
                        </span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative mt-8 rounded-2xl bg-emerald-300/20 p-4 text-center text-sm font-black uppercase tracking-[0.18em] text-slate-200">
                  {product.script}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-white">
                  {product.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {product.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/alliance-market/products"
                    className="gem-btn-primary py-2"
                  >
                    Use in listing
                  </Link>
                  <Link
                    href="/alliance-market/policies"
                    className="gem-btn-secondary py-2"
                  >
                    Policy check
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
