import { NextResponse } from "next/server";

const requiredFields = {
  lead: ["fullName", "email", "monthlyAdSpend", "goal"],
  consultation: ["fullName", "email", "slot"],
} as const;

type SubmissionType = keyof typeof requiredFields;

function isSubmissionType(value: unknown): value is SubmissionType {
  return value === "lead" || value === "consultation";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const type = body?.type;

    if (!isSubmissionType(type)) {
      return NextResponse.json(
        { error: "Invalid submission type." },
        { status: 400 }
      );
    }

    for (const field of requiredFields[type]) {
      if (!body?.[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    console.info(`[lead:${type}]`, {
      ...body,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[lead:error]", error);
    return NextResponse.json(
      { error: "Unable to process submission." },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
