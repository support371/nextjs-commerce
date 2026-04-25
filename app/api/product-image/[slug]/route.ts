import { getProductBySlug } from "lib/gem-catalog";

export function GET(_req: Request, context: { params: { slug: string } }) {
  const product = getProductBySlug(context.params.slug);
  const title = product?.shortTitle || "GEM Product";
  const category = product?.category || "Cybersecurity Software";
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#03111b" />
        <stop offset="100%" stop-color="#0f172a" />
      </linearGradient>
    </defs>
    <rect width="1200" height="1200" fill="url(#bg)" />
    <circle cx="980" cy="180" r="220" fill="#34d399" opacity="0.18" />
    <circle cx="180" cy="980" r="260" fill="#38bdf8" opacity="0.18" />
    <rect x="90" y="90" width="1020" height="1020" rx="42" fill="#071827" stroke="#34d399" stroke-opacity="0.4" />
    <text x="140" y="210" fill="#bbf7d0" font-size="34" font-family="Arial, Helvetica, sans-serif" font-weight="700">GEM CYBERSECURITY ASSIST</text>
    <text x="140" y="300" fill="#ffffff" font-size="76" font-family="Arial, Helvetica, sans-serif" font-weight="800">${title}</text>
    <text x="140" y="380" fill="#cbd5e1" font-size="34" font-family="Arial, Helvetica, sans-serif">${category}</text>
    <rect x="140" y="880" width="920" height="110" rx="26" fill="#052e2b" stroke="#34d399" stroke-opacity="0.4" />
    <text x="180" y="950" fill="#d1fae5" font-size="34" font-family="Arial, Helvetica, sans-serif" font-weight="700">Annual prepaid software subscription</text>
  </svg>`;
  return new Response(svg, { headers: { "content-type": "image/svg+xml; charset=utf-8" } });
}
