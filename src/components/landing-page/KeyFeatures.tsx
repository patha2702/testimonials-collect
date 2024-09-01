"use client";
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const features = [
  {
    title: "Custom Questions",
    description: "Create tailored questions for each project to gather specific feedback from your customers.",
    link: "#custom-questions",
  },
  {
    title: "Dashboard Analytics",
    description: "Gain insights into your testimonials' performance with a comprehensive analytics dashboard.",
    link: "#dashboard-analytics",
  },
  {
    title: "Customizable Testimonial Display",
    description: "Showcase your testimonials with customizable widgets that fit your brand's style.",
    link: "#customizable-display",
  },
  {
    title: "Social Media Integration",
    description: "Easily share your best testimonials on social media platforms to boost your online presence.",
    link: "#social-media-integration",
  },
  {
    title: "Blockchain-Verified Testimonials",
    description: "Ensure the authenticity of your testimonials by storing and verifying them on the Solana blockchain, providing immutable proof that your customer feedback is genuine.",
    link: "#blockchain-verification",
  },
  {
    title: "Dual Payment Options",
    description: "Support both crypto payments via Solana and traditional payments through Stripe for maximum flexibility.",
    link: "#payment-options",
  },
];

export default function KeyFeatures() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Key Features
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover how our platform can transform your customer feedback into powerful testimonials.
          </p>
        </div>
        <div className="mt-16">
          <HoverEffect items={features} />
        </div>
      </div>
    </section>
  );
}
