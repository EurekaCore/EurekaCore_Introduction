import { TracingBeam } from "@/components/ui/tracing-beam";
import { Button } from "@heroui/react";
import Image from "next/image";

export default function Home() {
  return (
    <TracingBeam>
      <div className="flex min-h-screen flex-col items-center p-6 max-w-5xl m-auto text-center">
        {/* Header Section */}
        <header className="mb-12">
          <img
            src="https://cdn.eurekacore.com/logo.png"
            alt="EurekaCore Logo"
            className="rounded-3xl h-50 mx-auto"
          />
          <h1 className="text-4xl font-extrabold mt-6">
            Project: Impact - A EurekaCore Initiative
          </h1>
        </header>

        {/* Abstract Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">1. Abstract</h2>
          <p className="text-lg leading-relaxed">
            This document outlines the vision, architecture, and principles of{" "}
            <strong>Impact</strong>, a state-of-the-art product intelligence
            platform developed by <strong>EurekaCore</strong>. Impact is
            designed to revolutionize how consumers make purchasing decisions by
            providing comprehensive, unbiased, and deeply personalized analysis
            for any product, powered by a next-generation AI engine.
          </p>
        </section>

        {/* About EurekaCore Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">2. About EurekaCore</h2>
          <p className="text-lg leading-relaxed">
            <strong>EurekaCore</strong> is a technology company founded on the
            principle of solving real-world information problems through the
            ethical and innovative application of artificial intelligence. Our
            mission is to create tools that empower users, cut through digital
            noise, and deliver clarity and confidence. Based in Dubrajpur West
            Bengal, India, EurekaCore is committed to building scalable,
            user-centric solutions that have a meaningful and positive impact on
            people's lives. Impact is our flagship consumer platform and the
            primary focus of our development efforts.
          </p>
        </section>

        {/* About Impact Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">3. About Impact</h2>

          <h3 className="text-2xl font-semibold mb-3">3.1. What is Impact?</h3>
          <p className="text-lg leading-relaxed mb-6">
            <strong>Impact</strong> is an AI-native platform designed to be the
            definitive destination for product research. It functions as a
            comprehensive analysis engine that scours the entire internet
            including reviews, articles, social media discussions, and video
            tutorials to generate a single, easy-to-understand overview of any
            product. It is not an e-commerce store; it is a pre-purchase guide
            that helps users make the most informed decision possible, acting as
            a powerful, complementary catalyst for the e-commerce ecosystem.
          </p>

          <h3 className="text-2xl font-semibold mb-3">
            3.2. The Problem We Solve
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            The modern consumer is overwhelmed. Product research involves
            navigating dozens of tabs, biased sponsored content, fake reviews,
            and conflicting information. This process is time-consuming,
            confusing, and often leads to purchase anxiety or regret. There is a
            deep and growing need for a single source of truth that is
            trustworthy, comprehensive, and tailored to the individual.
          </p>

          <h3 className="text-2xl font-semibold mb-3">
            3.3. The Solution: Core Features
          </h3>
          <ul className="list-disc list-inside text-lg leading-relaxed mb-6">
            <li>
              <strong>The Overall Impression Score:</strong> A dynamic score out
              of 5 stars, calculated by the AI based on a real-time, multimodal
              analysis of global sentiment and data.
            </li>
            <li>
              <strong>Deep Analysis:</strong> A clear, concise summary of a
              product's pros, cons, key features, and real-world performance,
              synthesized from millions of data points.
            </li>
            <li>
              <strong>Personalized AI Chatbot:</strong> Users can converse with
              our advanced AI to ask specific questions like,{" "}
              <em>
                "Is this laptop good for my graphic design course in college,
                given my budget of ₹80,000?"
              </em>
            </li>
            <li>
              <strong>Unbiased Comparisons:</strong> Intelligent side-by-side
              comparisons and alternative product suggestions based on user
              experience and value, not just on-paper specifications.
            </li>
            <li>
              <strong>Transparent Deal-Finding:</strong> Impact finds the best
              purchase options for a product and presents them with absolute
              transparency, building a foundation of user trust.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3">3.4. Core Principles</h3>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>
              <strong>Absolute User-Centricity:</strong> Every feature is
              designed with the primary goal of empowering the user and
              simplifying their decision-making process.
            </li>
            <li>
              <strong>Unwavering Impartiality:</strong> Our analysis and
              recommendations are driven solely by data. We are unbiased towards
              any brand or retail platform.
            </li>
            <li>
              <strong>Radical Transparency:</strong> We are open about how our
              platform works and how we sustain it. Our business model will
              never compromise our commitment to providing the best, most honest
              advice.
            </li>
          </ul>
        </section>

        {/* Technology Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">4. Technology</h2>

          <h3 className="text-2xl font-semibold mb-3">
            4.1. The AI Engine: A Dual-Model Architecture
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            Our engine is composed of two specialized AI systems working in
            tandem:
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed mb-6">
            <li>
              <strong>The Research & Analysis Core (Backend):</strong> For deep
              product research and data synthesis, we will utilize tools like{" "}
              <strong>Gemini Deep Research</strong>.
            </li>
            <li>
              <strong>The Conversational & Reasoning Layer (Frontend):</strong>{" "}
              For all user-facing interactions, we leverage a state-of-the-art
              Large Language Model like <strong>Gemini 3 Pro</strong>.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3">4.2. The Tech Stack</h3>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>
              <strong>Backend:</strong> <strong>Go (Golang)</strong> for its
              exceptional speed, concurrency, and efficiency in handling
              data-intensive operations.
            </li>
            <li>
              <strong>Web Framework:</strong> <strong>Gin</strong> for its
              lightweight and high-performance routing capabilities.
            </li>
            <li>
              <strong>Database:</strong> <strong>MongoDB</strong> for its
              flexibility and scalability in managing diverse and unstructured
              product data.
            </li>
            <li>
              <strong>Frontend:</strong> <strong>Next.js</strong> (React
              Framework) to create a server-rendered, incredibly fast, and fluid
              user experience.
            </li>
          </ul>
        </section>

        {/* Business Model Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">5. Business Model</h2>
          <p className="text-lg leading-relaxed mb-6">
            Impact's revenue will be generated through{" "}
            <strong>affiliate marketing</strong>. However, this is governed by
            our "Trust-First" strategy:
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>
              <strong>Phase 1 (Launch):</strong> We will intentionally launch
              with <strong>no affiliate links</strong>.
            </li>
            <li>
              <strong>Phase 2 (Monetization):</strong> Once we have established
              significant traffic and trust, we will integrate affiliate links
              from our vetted partners.
            </li>
            <li>
              <strong>The Transparency Rule:</strong> Our AI will always show
              the user the <strong>absolute best deal</strong> it can find
              within our curated "safe sandbox" of trusted retailers.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-3 mt-4">About Our Team</h2>
          <p>
            Our small team at EurekaCore consists of just two highly passionate founders—Arijit Dey and Dipak Dey. We are deeply committed to building Impact into the world's best product research platform, and we're excited to share this journey with you.
          </p>
        </section>

        <section>
          <p className="mt-6 text-2xl font-semibold">
            We are actively working on developing Impact. We expect to launch it
            very soon.
          </p>
        </section>

<div className="mt-16 mb-4">
        <section className="text-sm text-gray-400 max-w-md mb-2">
          If you have any inquiries or want to get a sneak peek into EurekaCore
          and Impact, feel free to reach us out at{" "}
          <strong>info@eurekacore.com</strong>
        </section>
        <footer className="text-sm text-gray-500">
          &copy; 2026 EurekaCore. All rights reserved.
        </footer>
        </div>
      </div>
    </TracingBeam>
  );
}
