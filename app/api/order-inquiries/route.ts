import { NextRequest, NextResponse } from "next/server";
import { sampleOrderInquiries } from "lib/gem-app";

export async function GET() {
  return NextResponse.json({ data: sampleOrderInquiries });
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const payload = Object.fromEntries(formData.entries());
  return NextResponse.json(
    { ok: true, type: "orderInquiry", data: payload },
    { status: 201 },
  );
}
