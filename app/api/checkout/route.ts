import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const payload = Object.fromEntries(formData.entries());
  console.log("GEM checkout request", payload);
  return NextResponse.redirect(new URL("/thank-you", req.url), {
    status: 303,
  });
}
