import { Card, Link, Separator } from "@heroui/react";

export default function Home() {
  const coreFeatures = [
    {
      title: "Overall Impression Score",
      description:
        "Get a fast, high-level signal before investing time in deeper research.",
    },
    {
      title: "Deep Analysis",
      description:
        "Review core strengths, limitations, and trade-offs early to reduce post-purchase surprises.",
    },
    {
      title: "Personalized Guidance",
      description:
        "Ask in plain language and receive guidance aligned with your budget, priorities, and actual use case.",
    },
    {
      title: "Unbiased Comparisons",
      description:
        "Compare shortlisted options side by side with clear criteria and practical context.",
    },
    {
      title: "Transparent Deal Discovery",
      description:
        "Review purchase options with transparent context so you can proceed with greater confidence.",
    },
  ];

  const principles = [
    "User First: every part of Impact is built to help people choose better, faster.",
    "No Brand Bias: recommendations are driven by product evidence, not brand preference.",
    "Clear and Honest: we are transparent about how Impact works and how trust is protected.",
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
              pre-purchase research clearer, faster, and more reliable. It acts
              as the decision layer between research and purchase, helping users
              reduce uncertainty, avoid avoidable mistakes, and choose products
              that fit their budget and actual use case.
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
              flagship consumer initiative. Impact is designed to deliver
              comprehensive, impartial, and personalized product intelligence so
              users can make confident purchase decisions.
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
              we build user-centric systems that reduce noise, increase clarity,
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
                store; it is the decision layer between research and purchase.
              </p>
            </div>

            <div>
              <h3 className="subsection-title">3.2. The Problem We Solve</h3>
              <p className="section-copy">
                Product research is often fragmented and hard to trust. Users
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
                Shopping-research features in AI chatbots are useful for quick
                exploration, but final purchase decisions require clearer
                trade-offs, fewer surprises, and stronger confidence. That is
                where Impact is stronger.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-200 sm:text-base">
                <li>
                  <strong>Less second-guessing:</strong> Impact applies a
                  consistent decision framework so comparisons remain fair and
                  easier to trust.
                </li>
                <li>
                  <strong>Fewer post-purchase surprises:</strong> key product
                  claims are verified across independent sources before they are
                  treated as reliable.
                </li>
                <li>
                  <strong>Clearer conflict handling:</strong> when reviews or
                  reports disagree, Impact surfaces the conflict instead of
                  hiding it.
                </li>
                <li>
                  <strong>Confidence under uncertainty:</strong> missing or weak
                  information is clearly marked as unknown instead of guessed.
                </li>
                <li>
                  <strong>Decision-ready output:</strong> results are organized
                  for shortlist, compare, and buy workflows rather than one-off
                  chat responses.
                </li>
              </ul>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                Use chatbot shopping features to explore quickly. Use Impact
                when you are ready to make a confident final decision.
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
                Impact uses a dual-layer approach: a research and synthesis layer
                that gathers and evaluates product evidence, and a conversational
                reasoning layer that translates that evidence into clear,
                personalized guidance. This design keeps the platform
                model-agnostic and supports continuous quality improvement over
                time.
              </p>
            </div>
            <Separator className="bg-white/15" />
            <div>
              <h3 className="subsection-title">4.2. Engineering Approach</h3>
              <p className="section-copy">
                Our systems are designed for accuracy, speed, and reliability at
                scale. We prioritize measurable quality, transparent evaluation,
                and fast iteration so users receive reliable guidance as
                products and markets evolve.
              </p>
            </div>
          </Card.Content>
        </Card>

        <Card className="section-card">
          <Card.Content className="space-y-4 p-6 sm:p-8">
            <h2 className="section-title">5. Business Model</h2>
            <p className="section-copy">
              Impact follows a trust-first affiliate model with explicit user
              safeguards.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-200 sm:text-base">
              <li>
                <strong>Phase 1 (Launch):</strong> no affiliate links while we
                focus on product quality and user trust.
              </li>
              <li>
                <strong>Phase 2 (Monetization):</strong> curated affiliate
                partnerships introduced after trust and utility are established.
              </li>
              <li>
                <strong>Transparency Rule:</strong> users should always see the
                best available option within our trusted retailer sandbox.
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
              research platform.
            </p>
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
