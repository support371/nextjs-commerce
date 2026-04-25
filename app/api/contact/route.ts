import { NextRequest, NextResponse } from "next/server";
import { company } from "lib/gem-catalog";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const payload = Object.fromEntries(formData.entries());

  console.log("GEM contact request", {
    ...payload,
    routedTo: company.email,
  });

  return NextResponse.redirect(new URL("/thank-you", req.url), {
    status: 303,
  });
}
