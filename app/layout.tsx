import type { Metadata } from "next";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";
import { company, products } from "lib/gem-catalog";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} | Cybersecurity Software Store`,
    template: `%s | ${company.name}`,
  },
  description:
    "Merchant-ready cybersecurity software subscriptions for endpoint posture, phishing readiness, compliance evidence, threat intelligence, and executive reporting.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    url: company.url,
    siteName: company.name,
    title: `${company.name} | Cybersecurity Software Store`,
    description:
      "Annual prepaid defensive cybersecurity software subscriptions built for lean security operations.",
  },
};

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-black tracking-tight">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-emerald-300/40 bg-emerald-400/10 text-emerald-200">
            GEM
          </span>
          <span className="hidden text-white sm:block">{company.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          <Link href="/store" className="hover:text-white">Store</Link>
          <Link href="/pricing" className="hover:text-white">Pricing</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/support" className="hover:text-white">Support</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/checkout" className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white hover:bg-white/10 sm:inline-flex">
            Checkout
          </Link>
          <Link href="/store" className="rounded-full bg-emerald-300 px-4 py-2 text-sm font-black text-slate-950 hover:bg-emerald-200">
            Shop software
          </Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-5 lg:px-8">
        <div className="md:col-span-2">
          <h2 className="text-lg font-black text-white">{company.name}</h2>
          <p className="mt-3 max-w-md text-sm">
            Defensive cybersecurity software subscriptions for posture visibility, phishing readiness, compliance evidence, threat intelligence, and executive reporting.
          </p>
          <p className="mt-4 text-sm">
            <a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a><br />
            <a href={`tel:${company.phoneRaw}`} className="hover:text-white">{company.phone}</a>
          </p>
        </div>
        <div>
          <h3 className="font-bold text-white">Store</h3>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href="/store" className="hover:text-white">All products</Link>
            <Link href="/pricing" className="hover:text-white">Pricing</Link>
            <Link href="/checkout" className="hover:text-white">Checkout</Link>
            <Link href="/merchant-feed.txt" className="hover:text-white">Merchant feed</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-white">Company</h3>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/support" className="hover:text-white">Support</Link>
            <span>{products.length} software SKUs</span>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-white">Policies</h3>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href="/policies/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/policies/terms" className="hover:text-white">Terms</Link>
            <Link href="/policies/refund" className="hover:text-white">Refunds</Link>
            <Link href="/policies/digital-delivery" className="hover:text-white">Digital delivery</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {company.name}. Business address: {company.address}.
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="min-h-screen bg-slate-950 text-white antialiased selection:bg-emerald-300 selection:text-slate-950">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
