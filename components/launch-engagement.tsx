"use client";

import { FormEvent, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Checkbox,
  Description,
  Input,
  Link,
  Spinner,
  TextArea,
} from "@heroui/react";

type ApiResult = {
  ok: boolean;
  error?: string;
};

function normalizeInput(value: string): string {
  return value.trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function LaunchEngagementSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [wantsLaunchNotification, setWantsLaunchNotification] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const normalizedEmail = normalizeInput(email);
  const hasValidEmail = normalizedEmail.length > 0 && isValidEmail(normalizedEmail);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(null);
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/engagement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: normalizeInput(name) || undefined,
          email: normalizedEmail || undefined,
          suggestion: normalizeInput(suggestion),
          wantsLaunchNotification,
        }),
      });
      const data = (await res.json()) as ApiResult;
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Could not submit your input.");
      }

      if (normalizedEmail && wantsLaunchNotification) {
        setMessage(
          "Thank you. Your suggestion is saved, and your launch notification confirmation has been sent.",
        );
      } else if (normalizedEmail) {
        setMessage(
          "Thank you. Your suggestion is saved, and a confirmation email has been sent.",
        );
      } else {
        setMessage("Thank you. Your suggestion has been submitted.");
      }
      setName("");
      setEmail("");
      setSuggestion("");
      setWantsLaunchNotification(false);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Could not submit your input.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <Card className="border border-white/10 bg-slate-900/35 backdrop-blur-sm">
        <Card.Header className="flex flex-col gap-2 p-4 pb-2 sm:p-6 sm:pb-3">
          <Card.Title className="text-xl text-white">Help Us Build Impact</Card.Title>
          <Card.Description className="text-sm leading-6 text-slate-300">
            Share what you are excited about and what we should improve first.
            Add your email if you want one launch notification when Impact goes
            live.
          </Card.Description>
        </Card.Header>
        <Card.Content className="space-y-4 p-4 pt-4 sm:p-6 sm:pt-4">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="engagement-name"
                className="block text-[11px] font-medium uppercase tracking-[0.08em] text-slate-300"
              >
                Name (Optional)
              </label>
              <Input
                id="engagement-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={120}
                placeholder="Your name"
                fullWidth
                className="border border-white/10 bg-slate-900/65 text-white"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="engagement-email"
                className="block text-[11px] font-medium uppercase tracking-[0.08em] text-slate-300"
              >
                Email (Optional)
              </label>
              <Input
                id="engagement-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (!isValidEmail(normalizeInput(e.target.value))) {
                    setWantsLaunchNotification(false);
                  }
                }}
                placeholder="you@example.com"
                fullWidth
                className="border border-white/10 bg-slate-900/65 text-white"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="engagement-suggestion"
                className="block text-[11px] font-medium uppercase tracking-[0.08em] text-slate-300"
              >
                Suggestion
              </label>
              <TextArea
                id="engagement-suggestion"
                required
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                maxLength={4000}
                rows={5}
                placeholder="Tell us what you are excited about and what we should improve."
                fullWidth
                className="border border-white/10 bg-slate-900/65 text-white"
              />
            </div>

            <div className="space-y-2">
              <div className="rounded-xl border border-white/10 bg-slate-900/50 p-3">
                <Checkbox
                  isSelected={wantsLaunchNotification}
                  onChange={(isSelected) =>
                    setWantsLaunchNotification(Boolean(isSelected))
                  }
                  isDisabled={!hasValidEmail}
                  className={!hasValidEmail ? "opacity-70" : "opacity-100"}
                  variant="secondary"
                >
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.Content>
                    Send me a launch notification when Impact launches
                  </Checkbox.Content>
                </Checkbox>
                {!hasValidEmail ? (
                  <Description className="mt-2 text-xs text-slate-400">
                    Enter a valid email to unlock launch notification.
                  </Description>
                ) : (
                  <Description className="mt-2 text-xs text-slate-400">
                    You will receive one launch notification when Impact launches.
                  </Description>
                )}
              </div>

              <Description className="text-xs text-slate-400">
                By submitting, you agree to our{" "}
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  className="font-medium text-sky-300 hover:text-sky-200"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/terms-and-conditions"
                  target="_blank"
                  className="font-medium text-sky-300 hover:text-sky-200"
                >
                  Terms & Conditions
                </Link>
                .
              </Description>
            </div>

            <Button
              type="submit"
              variant="primary"
              fullWidth
              isDisabled={loading}
              className="mt-4 font-semibold"
            >
              <span className="inline-flex items-center gap-2">
                {loading ? <Spinner size="sm" color="current" /> : null}
                {loading ? "Submitting..." : "Submit"}
              </span>
            </Button>
          </form>

          {message || error ? (
            <div aria-live="polite" className="space-y-3">
              {message ? (
                <Alert status="success" className="bg-emerald-500/10">
                  <Alert.Indicator />
                  <Alert.Content>
                    <Alert.Title>Submission received</Alert.Title>
                    <Alert.Description>{message}</Alert.Description>
                  </Alert.Content>
                </Alert>
              ) : null}
              {error ? (
                <Alert status="danger" className="bg-rose-500/10">
                  <Alert.Indicator />
                  <Alert.Content>
                    <Alert.Title>Submission failed</Alert.Title>
                    <Alert.Description>{error}</Alert.Description>
                  </Alert.Content>
                </Alert>
              ) : null}
            </div>
          ) : null}
        </Card.Content>
      </Card>
    </section>
  );
}
