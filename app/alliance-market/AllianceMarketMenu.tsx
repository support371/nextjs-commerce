"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    label: "Overview",
    href: "/alliance-market",
    description: "Omnichannel command center",
  },
  {
    label: "Stores",
    href: "/alliance-market/stores",
    description: "Separated channel framework",
  },
  {
    label: "TikTok Videos",
    href: "/alliance-market/tiktok-products",
    description: "Playable product media cards",
  },
  {
    label: "Products",
    href: "/alliance-market/products",
    description: "Universal catalog pages",
  },
  {
    label: "Policies",
    href: "/alliance-market/policies",
    description: "Compliance and review center",
  },
];

function isActive(pathname: string, href: string) {
  if (href === "/alliance-market") return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function AllianceMarketMenu() {
  const pathname = usePathname();

  return (
    <section className="border-b border-white/10 bg-slate-950/95 px-4 py-5 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <span className="gem-pill">Alliance Trust Market</span>
            <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-white md:text-3xl">
              Rearranged subpage menu
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            One Next.js Commerce framework with each channel and workstream
            isolated as its own highlighted subpage.
          </p>
        </div>

        <nav className="grid gap-3 md:grid-cols-5">
          {menuItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "rounded-3xl border border-emerald-300/40 bg-emerald-300/15 p-4 shadow-2xl shadow-emerald-950/20"
                    : "rounded-3xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]"
                }
              >
                <div className="flex items-center justify-between gap-3">
                  <strong className="text-sm font-black text-white">
                    {item.label}
                  </strong>
                  <span
                    className={
                      active
                        ? "h-3 w-3 rounded-full bg-emerald-300"
                        : "h-3 w-3 rounded-full bg-slate-600"
                    }
                  />
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-400">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
