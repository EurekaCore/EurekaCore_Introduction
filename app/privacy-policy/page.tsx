import { Card, Link } from "@heroui/react";

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <section className="hero-surface rounded-3xl border border-white/10 p-6 sm:p-10">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Effective date: February 22, 2026
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-200 sm:text-base">
            This policy explains what data we collect and how we use it on this
            site today.
          </p>
        </section>

        <Card className="section-card">
          <Card.Content className="space-y-5 p-6 sm:p-8">
            <div>
              <h2 className="section-title">1. What We Collect</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-200 sm:text-base">
                <li>`name` (optional)</li>
                <li>`email` (optional)</li>
                <li>`suggestion` (required)</li>
                <li>`wantsLaunchNotification` (yes/no preference)</li>
                <li>`createdAt` timestamp</li>
              </ul>
            </div>

            <div>
              <h2 className="section-title">2. How We Use It</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-200 sm:text-base">
                <li>Store feedback and launch-notification preferences.</li>
                <li>Send a confirmation email when an email is provided.</li>
                <li>
                  Send an additional launch-signup confirmation email when the
                  launch notification option is selected.
                </li>
                <li>Improve the current pre-launch experience of Impact.</li>
              </ul>
            </div>

            <div>
              <h2 className="section-title">3. Data Sharing</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-200 sm:text-base">
                <li>
                  Data is stored in our MongoDB database for current site
                  operations.
                </li>
                <li>
                  Email delivery is handled through Postmark when email is
                  provided.
                </li>
                <li>We do not sell your personal data.</li>
              </ul>
            </div>

            <div>
              <h2 className="section-title">4. Your Choices</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-200 sm:text-base">
                <li>You can submit feedback without providing an email.</li>
                <li>
                  A valid email is required only if you want launch
                  notifications.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="section-title">5. Future Updates</h2>
              <p className="section-copy">
                This Privacy Policy will change in the future as Impact evolves.
                Updated versions will be published on this page.
              </p>
            </div>

            <div>
              <h2 className="section-title">6. Contact</h2>
              <p className="section-copy">
                Questions:{" "}
                <Link
                  href="mailto:info@eurekacore.com"
                  className="font-semibold text-sky-300 hover:text-sky-200"
                >
                  info@eurekacore.com
                </Link>
              </p>
            </div>
          </Card.Content>
        </Card>

        <p className="text-center text-sm text-slate-300">
          <Link href="/" className="font-semibold text-sky-300 hover:text-sky-200">
            Back to EurekaCore
          </Link>
        </p>
      </div>
    </main>
  );
}
