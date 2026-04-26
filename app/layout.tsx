import type { Metadata } from "next";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";
import { company, products, trustSignals } from "lib/gem-catalog";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} | Cybersecurity Software Store`,
    template: `%s | ${company.name}`,
  },
  description: "Cybersecurity software, services, pricing, compliance readiness, and trust-center resources from GEM Cybersecurity Assist.",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const nav = [
  ["Products", "/store"],
  ["Services", "/services"],
  ["Pricing", "/pricing"],
  ["Compliance", "/compliance"],
  ["Trust", "/trust"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-black tracking-tight">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-emerald-300/40 bg-emerald-400/10 text-emerald-200">GEM</span>
          <span className="hidden text-white sm:block">{company.name}</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-300 lg:flex">
          {nav.map(([label, href]) => <Link key={href} href={href} className="hover:text-white">{label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/checkout" className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white hover:bg-white/10 sm:inline-flex">Checkout</Link>
          <Link href="/store" className="rounded-full bg-emerald-300 px-4 py-2 text-sm font-black text-slate-950 hover:bg-emerald-200">Shop software</Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-400">
      <div className="border-b border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-3 lg:grid-cols-6 lg:px-8">
          {trustSignals.map((signal) => (
            <div key={signal} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-center text-xs font-bold text-slate-200">
              <div className="mb-2 text-emerald-200">*****</div>
              {signal}
            </div>
          ))}
        </div>
        <p className="mx-auto max-w-7xl px-4 pb-6 text-center text-xs text-slate-500 sm:px-6 lg:px-8">Trustpilot, Google, certification, and approval marks should be activated only after verified third-party accounts or formal certifications are obtained.</p>
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-5 lg:px-8">
        <div className="md:col-span-2">
          <h2 className="text-lg font-black text-white">{company.name}</h2>
          <p className="mt-3 max-w-md text-sm">{company.mission}</p>
          <p className="mt-4 text-sm"><a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a><br /><a href={`tel:${company.phoneRaw}`} className="hover:text-white">{company.phone}</a></p>
        </div>
        <div><h3 className="font-bold text-white">Products</h3><div className="mt-3 grid gap-2 text-sm"><Link href="/store" className="hover:text-white">All products</Link><Link href="/pricing" className="hover:text-white">Pricing</Link><Link href="/checkout" className="hover:text-white">Checkout</Link><Link href="/merchant-feed.txt" className="hover:text-white">Merchant feed</Link></div></div>
        <div><h3 className="font-bold text-white">Company</h3><div className="mt-3 grid gap-2 text-sm"><Link href="/about" className="hover:text-white">About GEM</Link><Link href="/services" className="hover:text-white">Services</Link><Link href="/compliance" className="hover:text-white">Compliance</Link><Link href="/trust" className="hover:text-white">Trust Center</Link><Link href="/support" className="hover:text-white">Support</Link><span>{products.length} software SKUs</span></div></div>
        <div><h3 className="font-bold text-white">Policies</h3><div className="mt-3 grid gap-2 text-sm"><Link href="/policies/privacy" className="hover:text-white">Privacy</Link><Link href="/policies/terms" className="hover:text-white">Terms</Link><Link href="/policies/refund" className="hover:text-white">Refunds</Link><Link href="/policies/digital-delivery" className="hover:text-white">Digital delivery</Link><Link href="/policies/security" className="hover:text-white">Security</Link></div></div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">© {new Date().getFullYear()} {company.name}. Business address: {company.address}.</div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={GeistSans.variable}><body className="min-h-screen bg-slate-950 text-white antialiased selection:bg-emerald-300 selection:text-slate-950"><Header /><main>{children}</main><Footer /></body></html>;
}
