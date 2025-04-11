import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const issueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

export async function GET() {
  return NextResponse.json({ message: "well done" });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = issueSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  console.log("body: ", body);

  return NextResponse.json({ message: "thanks for posting", data: body });
}
