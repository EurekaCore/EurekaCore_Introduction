# Project: Impact - A EurekaCore Initiative

## 1. Abstract

This document outlines the vision, architecture, and principles of **Impact**, a state-of-the-art product intelligence platform developed by **EurekaCore**. Impact is designed to revolutionize how consumers make purchasing decisions by providing comprehensive, unbiased, and deeply personalized analysis for any product, powered by a next-generation AI engine.

## 2. About EurekaCore

**EurekaCore** is a technology company founded on the principle of solving real-world information problems through the ethical and innovative application of artificial intelligence. Our mission is to create tools that empower users, cut through digital noise, and deliver clarity and confidence. Based in Dubrajpur West Bengal, India, EurekaCore is committed to building scalable, user-centric solutions that have a meaningful and positive impact on people's lives. Impact is our flagship consumer platform and the primary focus of our development efforts.

## 3. About Impact

### 3.1. What is Impact?

**Impact** is an AI-native platform designed to be the definitive destination for product research. It functions as a comprehensive analysis engine that scours the entire internet including reviews, articles, social media discussions, and video tutorials to generate a single, easy-to-understand overview of any product. It is not an e-commerce store; it is a pre-purchase guide that helps users make the most informed decision possible, acting as a powerful, complementary catalyst for the e-commerce ecosystem.

### 3.2. The Problem We Solve

The modern consumer is overwhelmed. Product research involves navigating dozens of tabs, biased sponsored content, fake reviews, and conflicting information. This process is time-consuming, confusing, and often leads to purchase anxiety or regret. There is a deep and growing need for a single source of truth that is trustworthy, comprehensive, and tailored to the individual.

### 3.3. The Solution: Core Features

Impact addresses this problem by offering a suite of powerful, AI-driven features:

- **The Overall Impression Score:** A dynamic score out of 5 stars, calculated by the AI based on a real-time, multimodal analysis of global sentiment and data.
- **Deep Analysis:** A clear, concise summary of a product's pros, cons, key features, and real-world performance, synthesized from millions of data points.
- **Personalized AI Chatbot:** Users can converse with our advanced AI to ask specific questions like, *"Is this laptop good for my graphic design course in college, given my budget of ₹80,000?"* The AI will provide a reasoned, personalized recommendation based on the user's unique needs.
- **Unbiased Comparisons:** Intelligent side-by-side comparisons and alternative product suggestions based on user experience and value, not just on-paper specifications.
- **Transparent Deal-Finding:** Impact finds the best purchase options for a product and presents them with absolute transparency, building a foundation of user trust.

### 3.4. Core Principles

Our commitment to the user is absolute and governed by three core principles:

1.  **Absolute User-Centricity:** Every feature is designed with the primary goal of empowering the user and simplifying their decision-making process.
2.  **Unwavering Impartiality:** Our analysis and recommendations are driven solely by data. We are unbiased towards any brand or retail platform.
3.  **Radical Transparency:** We are open about how our platform works and how we sustain it. Our business model will never compromise our commitment to providing the best, most honest advice.

## 4. Technology

### 4.1. The AI Engine: A Dual-Model Architecture

Our engine is composed of two specialized AI systems working in tandem:

1.  **The Research & Analysis Core (Backend):** For deep product research and data synthesis, we utilize **Perplexity's Sonar family of models**. These models are purpose-built for high-quality, real-time web exploration and information extraction. This allows us to gather and cross-reference a vast array of sources from technical reviews to user forums ensuring our foundational data is accurate, comprehensive, and verifiable.

2.  **The Conversational & Reasoning Layer (Frontend):** For all user-facing interactions, including the personalized AI chatbot and the generation of product page summaries, we leverage a state-of-the-art Large Language Model like **GPT-5** or **Claude 4 Sonnet**. These models excel at nuanced conversation, deep reasoning, and creating fluid, easy-to-understand content. This layer takes the structured data from our Research Core and transforms it into a helpful, engaging, and personalized experience for the user.

This dual-AI approach allows us to use the best tool for each specific task: a world-class research engine to find the truth, and a world-class conversational engine to communicate it.

### 4.2. The Tech Stack

To deliver a best-in-class experience, Impact is built on a modern, high-performance tech stack:

- **Backend:** **Go (Golang)** for its exceptional speed, concurrency, and efficiency in handling data-intensive operations.
- **Web Framework:** **Gin** for its lightweight and high-performance routing capabilities.
- **Database:** **MongoDB** for its flexibility and scalability in managing diverse and unstructured product data.
- **Frontend:** **Next.js** (React Framework) to create a server-rendered, incredibly fast, and fluid user experience.

## 5. Business Model

Impact's revenue will be generated through **affiliate marketing**. However, this is governed by our "Trust-First" strategy:

1.  **Phase 1 (Launch):** We will intentionally launch with **no affiliate links**. Our sole focus is on building the most comprehensive and trustworthy product database and earning the loyalty of our users.
2.  **Phase 2 (Monetization):** Once we have established significant traffic and trust, we will integrate affiliate links from our vetted partners (initially Amazon, Flipkart, Myntra).
3.  **The Transparency Rule:** Our AI will always show the user the **absolute best deal** it can find within our curated "safe sandbox" of trusted retailers, even if that deal is from a non-affiliated platform. This commitment ensures our impartiality and reinforces user trust above all else.