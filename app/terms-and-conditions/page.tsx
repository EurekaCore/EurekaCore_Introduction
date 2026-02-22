import { Card, Link } from "@heroui/react";

export default function TermsAndConditionsPage() {
  return (
    <main className="relative overflow-hidden px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <section className="hero-surface rounded-3xl border border-white/10 p-6 sm:p-10">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Terms and Conditions
          </h1>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Effective date: February 22, 2026
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-200 sm:text-base">
            These terms describe how this site can be used in its current
            pre-launch state.
          </p>
        </section>

        <Card className="section-card">
          <Card.Content className="space-y-5 p-6 sm:p-8">
            <div>
              <h2 className="section-title">1. Acceptance of Terms</h2>
              <p className="section-copy">
                By using this site and submitting the form, you agree to these
                Terms and Conditions.
              </p>
            </div>

            <div>
              <h2 className="section-title">2. Current Purpose of This Site</h2>
              <p className="section-copy">
                This site currently provides information about Impact and a form
                to submit feedback and optional launch-notification preferences.
              </p>
            </div>

            <div>
              <h2 className="section-title">3. Form Submissions</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-200 sm:text-base">
                <li>
                  You are responsible for the content you submit through the
                  form.
                </li>
                <li>
                  Submissions must not include unlawful, abusive, or harmful
                  content.
                </li>
                <li>
                  Duplicate email submissions may be rejected by the system.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="section-title">4. Communications</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-200 sm:text-base">
                <li>
                  If you provide an email, we may send a confirmation email
                  related to your submission.
                </li>
                <li>
                  If you opt in to launch notifications, we may send an
                  additional launch-signup confirmation email.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="section-title">5. Availability and Liability</h2>
              <p className="section-copy">
                This site is provided on an as-is basis in its current pre-launch
                form. We do not guarantee uninterrupted availability or specific
                outcomes from use of the site.
              </p>
            </div>

            <div>
              <h2 className="section-title">6. Future Updates</h2>
              <p className="section-copy">
                These Terms and Conditions will change in the future as Impact
                evolves. Updated versions will be published on this page.
              </p>
            </div>

            <div>
              <h2 className="section-title">7. Contact</h2>
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
