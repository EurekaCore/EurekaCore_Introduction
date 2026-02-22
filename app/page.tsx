import { Card, Link, Separator } from "@heroui/react";
import { LaunchEngagementSection } from "@/components/launch-engagement";

export default function Home() {
  const coreFeatures = [
    {
      title: "Search for a Product",
      description:
        "Search for a specific product or model and start from a structured, decision-ready research view.",
    },
    {
      title: "Overall Impression Score",
      description:
        "See a fast, high-level score to understand overall product standing before deeper evaluation.",
    },
    {
      title: "Internet Sentiment Summary",
      description:
        "See recurring praise and recurring complaints in one place so real-world expectations are clearer before you buy.",
    },
    {
      title: "Strengths and Weaknesses",
      description:
        "Review core strengths, limitations, and practical trade-offs so you can choose with fewer surprises.",
    },
    {
      title: "Compare with Alternatives",
      description:
        "Compare shortlisted alternatives side by side using consistent criteria and practical context.",
    },
    {
      title: "Confidence and Uncertainty",
      description:
        "See where confidence is strong and where evidence is weak, so you know what is clear and what still needs caution.",
    },
    {
      title: "Clear Conflict Notes",
      description:
        "If reliable sources disagree, you see the disagreement directly so important conflicts are not hidden.",
    },
    {
      title: "Product Media and Tutorials",
      description:
        "Impact is designed to bring visuals and practical tutorials into one flow so everyday use is easier to understand before purchase.",
    },
    {
      title: "Region-Specific Buying Links",
      description:
        "Impact is designed to show buying links that match your location and currency so final purchase steps feel more practical.",
    },
  ];

  const principles = [
    "User First: every part of Impact is built to help you choose better, faster.",
    "No Brand Bias: recommendations are driven by product evidence, not brand preference.",
    "Clear and Honest: we are transparent about how Impact works and how trust is protected.",
  ];

  const section35Points = [
    {
      title: "Built for buying decisions, not general chat",
      description:
        "Impact is focused on helping you choose the right product, not just giving fast replies.",
    },
    {
      title: "A clearer picture before you spend",
      description:
        "You see practical strengths, real limitations, and where a product fits or does not fit.",
    },
    {
      title: "Honest handling of uncertainty",
      description:
        "When evidence is weak or unclear, Impact shows that directly instead of acting certain.",
    },
    {
      title: "Decision-friendly comparisons",
      description:
        "You can review relevant alternatives and understand why each one is worth considering.",
    },
    {
      title: "Research that can become more dependable over time",
      description:
        "Impact is designed to keep product analysis available and reusable instead of treating every query as one-off chat output.",
    },
    {
      title: "Practical buying context",
      description:
        "Impact is designed to support purchase options in ways that can match your location and currency.",
    },
    {
      title: "Designed for higher-stakes purchases",
      description:
        "For expensive decisions, Impact aims to reduce avoidable mistakes by making trade-offs clearer.",
    },
    {
      title: "Conflicts are surfaced, not hidden",
      description:
        "If trusted sources disagree on key points, Impact is designed to surface that disagreement clearly instead of smoothing it over.",
    },
  ];

  return (
    <main className="relative overflow-hidden px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <section className="hero-surface rounded-3xl border border-white/10 p-6 sm:p-10">
          <div className="text-center">
            <img
              src="https://cdn.eurekacore.com/logo.png"
              alt="EurekaCore Logo"
              className="mx-auto mb-6 h-36 rounded-3xl object-contain sm:h-44"
            />
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Impact by EurekaCore
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base text-slate-200 sm:text-lg">
              Impact is an AI-powered product decision platform designed to make
              pre-purchase research clearer, faster, and more reliable for
              higher-stakes purchases. It helps you reduce costly mistakes by
              making trade-offs, uncertainty, and practical buying context
              easier to understand before you spend.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
              We are actively developing Impact and preparing for launch.
            </p>
          </div>
        </section>

        <Card className="section-card">
          <Card.Content className="space-y-4 p-6 sm:p-8">
            <h2 className="section-title">1. Abstract</h2>
            <p className="section-copy">
              This page outlines the vision, architecture principles, and
              product commitments behind <strong>Impact</strong>, EurekaCore’s
              flagship product platform. Impact is designed to deliver
              comprehensive, impartial, and personalized product guidance so you
              can make confident purchase decisions with less regret.
            </p>
          </Card.Content>
        </Card>

        <Card className="section-card">
          <Card.Content className="space-y-4 p-6 sm:p-8">
            <h2 className="section-title">2. About EurekaCore</h2>
            <p className="section-copy">
              <strong>EurekaCore</strong> is a technology company focused on
              solving real-world information problems through responsible AI and
              practical product design. Based in Dubrajpur, West Bengal, India,
              we build people-centric systems that reduce noise, increase clarity,
              and create practical value.
            </p>
          </Card.Content>
        </Card>

        <Card className="section-card">
          <Card.Content className="space-y-6 p-6 sm:p-8">
            <h2 className="section-title">3. About Impact</h2>
            <div>
              <h3 className="subsection-title">3.1. What Is Impact?</h3>
              <p className="section-copy">
                <strong>Impact</strong> is an AI-powered product decision
                platform for pre-purchase research. It brings together expert
                reviews, community discussions, and practical product feedback
                into one clear, structured view. Impact is not an e-commerce
                store; it is built to support your final buying decisions.
                You can search a product, review overall scoring and internet
                sentiment, and compare alternatives in one structured workflow.
              </p>
              <p className="section-copy">
                Each product is deeply analyzed before results are presented, so
                you can evaluate real capabilities, limitations, and
                trade-offs with clarity. Product analysis pages are designed to
                stay available, so your research can be reused over time.
              </p>
              <p className="section-copy">
                If an analysis is not ready, Impact is designed to prepare it
                when you need it.
              </p>
            </div>

            <div>
              <h3 className="subsection-title">3.2. The Problem We Solve</h3>
              <p className="section-copy">
                Product research is often fragmented and hard to trust. You
                open too many tabs, encounter sponsored recommendations, read
                inconsistent or low-quality reviews, and still second-guess the
                final choice. The result is wasted time, decision fatigue, and
                avoidable purchase regret.
              </p>
            </div>

            <div>
              <h3 className="subsection-title">3.3. The Solution</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {coreFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-white/10 bg-slate-900/50 p-4"
                  >
                    <p className="text-base font-semibold text-white">
                      {feature.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="subsection-title">3.4. Core Principles</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-200 sm:text-base">
                {principles.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="subsection-title">
                3.5. Shopping-Research Features vs Impact
              </h3>
              <p className="section-copy">
                Generic AI shopping answers can be useful, but they are often
                inconsistent. Impact is built to help you make better buying
                decisions with clearer trade-offs and less guesswork.
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {section35Points.map((point) => (
                  <div
                    key={point.title}
                    className="rounded-2xl border border-sky-300/20 bg-slate-900/45 p-4 ring-1 ring-sky-500/10"
                  >
                    <p className="text-base font-semibold text-white">
                      {point.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                Impact is not trying to be a general chatbot with a shopping mode.
                It is built as a trusted product decision platform for real buyers.
              </p>
            </div>
          </Card.Content>
        </Card>

        <Card className="section-card">
          <Card.Content className="space-y-6 p-6 sm:p-8">
            <h2 className="section-title">4. Technology</h2>
            <div>
              <h3 className="subsection-title">4.1. AI Architecture</h3>
              <p className="section-copy">
                Impact is designed to check product evidence across multiple
                sources before key conclusions are shown. When information is
                weak, incomplete, or inconsistent, it is handled cautiously
                instead of being presented as certainty.
              </p>
            </div>
            <Separator className="bg-white/15" />
            <div>
              <h3 className="subsection-title">4.2. Engineering Approach</h3>
              <p className="section-copy">
                Our systems are designed for consistency, speed, and reliability
                over time. We prioritize measurable quality and transparent
                evaluation so your guidance stays dependable as products and
                markets evolve.
              </p>
            </div>
          </Card.Content>
        </Card>

        <Card className="section-card">
          <Card.Content className="space-y-4 p-6 sm:p-8">
            <h2 className="section-title">5. Business Model</h2>
            <p className="section-copy">
              Impact follows a trust-first affiliate model with explicit
              safeguards for you.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-200 sm:text-base">
              <li>
                <strong>Phase 1 (Launch):</strong> no affiliate links while we
                focus on product quality and your trust.
              </li>
              <li>
                <strong>Phase 2 (Monetization):</strong> curated affiliate
                partnerships introduced after trust and utility are established.
              </li>
              <li>
                <strong>Transparency Rule:</strong> you should always see the
                best available option within our verified retailer set.
              </li>
            </ul>
          </Card.Content>
        </Card>

        <Card className="section-card">
          <Card.Content className="space-y-4 p-6 sm:p-8">
            <h2 className="section-title">6. Team</h2>
            <p className="section-copy">
              EurekaCore is founded by Arijit Dey and Dipak Dey. We are a small
              team focused on building Impact into a dependable global product
              decision platform.
            </p>
          </Card.Content>
        </Card>

        <Card className="section-card">
          <Card.Content className="space-y-4 p-3 sm:p-8">
            <h2 className="section-title">
              7. Share Feedback and Get Launch Notification
            </h2>
            <p className="section-copy">
              Tell us what you want from Impact, and optionally get one launch
              notification when we go live.
            </p>
            <LaunchEngagementSection />
          </Card.Content>
        </Card>

        <footer className="rounded-2xl border border-white/10 bg-slate-950/50 px-6 py-8 text-center">
          <p className="text-sm text-slate-300">
            For inquiries, partnerships, or early access, contact{" "}
            <Link
              href="mailto:info@eurekacore.com"
              className="font-semibold text-sky-300 hover:text-sky-200"
            >
              info@eurekacore.com
            </Link>
            .
          </p>
          <p className="mt-3 text-xs text-slate-400">
            &copy; 2026 EurekaCore. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
