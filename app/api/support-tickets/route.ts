import { NextRequest, NextResponse } from "next/server";
import { sampleSupportTickets } from "lib/gem-app";

export async function GET() {
  return NextResponse.json({ data: sampleSupportTickets });
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const payload = Object.fromEntries(formData.entries());
  return NextResponse.json({ ok: true, type: "supportTicket", data: payload }, { status: 201 });
}
