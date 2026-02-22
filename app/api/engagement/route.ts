import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { sendImpactTemplateEmail } from "@/lib/postmark";

type EngagementPayload = {
  name?: string;
  email?: string;
  suggestion?: string;
  wantsLaunchNotification?: boolean;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isDuplicateKeyError(error: unknown): boolean {
  if (!error || typeof error !== "object") {
    return false;
  }

  const maybeCode = (error as { code?: unknown }).code;
  return typeof maybeCode === "number" && maybeCode === 11000;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as EngagementPayload;
    const name = body.name?.trim() || "";
    const email = body.email?.trim().toLowerCase() || "";
    const suggestion = body.suggestion?.trim() || "";
    const wantsLaunchNotification = Boolean(body.wantsLaunchNotification);

    if (!suggestion) {
      return NextResponse.json(
        { ok: false, error: "Suggestion is required." },
        { status: 400 },
      );
    }

    if (suggestion.length > 4000) {
      return NextResponse.json(
        { ok: false, error: "Suggestion must be 4000 characters or fewer." },
        { status: 400 },
      );
    }

    if (name && name.length > 120) {
      return NextResponse.json(
        { ok: false, error: "Name must be 120 characters or fewer." },
        { status: 400 },
      );
    }

    if (email && !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    if (wantsLaunchNotification && !email) {
      return NextResponse.json(
        {
          ok: false,
          error: "A valid email is required for launch notifications.",
        },
        { status: 400 },
      );
    }

    const db = await getDb();
    const collection = db.collection("impactEngagement");
    const now = new Date();

    await collection.insertOne({
      name: name || null,
      email: email || null,
      suggestion,
      wantsLaunchNotification,
      createdAt: now,
    });

    if (email) {
      try {
        await sendImpactTemplateEmail({
          to: email,
          name: name || undefined,
          context: "feedback",
        });

        if (wantsLaunchNotification) {
          await sendImpactTemplateEmail({
            to: email,
            name: name || undefined,
            context: "launchSignup",
          });
        }
      } catch (emailError) {
        console.error("Postmark engagement email failed:", emailError);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (isDuplicateKeyError(error)) {
      return NextResponse.json(
        { ok: false, error: "This email is already registered." },
        { status: 409 },
      );
    }

    console.error("Engagement API failed:", error);
    return NextResponse.json(
      { ok: false, error: "Could not process your request right now." },
      { status: 500 },
    );
  }
}
