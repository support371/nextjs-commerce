import { NextRequest, NextResponse } from "next/server";
import { sampleLeads } from "lib/gem-app";

export async function GET() {
  return NextResponse.json({ data: sampleLeads });
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const payload = Object.fromEntries(formData.entries());
  return NextResponse.json({ ok: true, type: "lead", data: payload }, { status: 201 });
}
