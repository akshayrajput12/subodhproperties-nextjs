"use client";

import { MarqueeAnimation } from "@/components/ui/marquee-effect";

export function MarqueeSection() {
  return (
    <section className="py-8 bg-gradient-to-r from-skysoft via-peach/40 to-peach overflow-hidden">
      <div className="flex flex-col gap-4">
        <MarqueeAnimation
          direction="left"
          baseVelocity={2}
          className="font-heading text-text/90 py-3 text-3xl md:text-4xl lg:text-5xl"
        >
          Premium Properties • Expert Guidance • Trusted Service
        </MarqueeAnimation>
        <MarqueeAnimation
          direction="right"
          baseVelocity={2}
          className="font-heading text-text/70 py-3 text-3xl md:text-4xl lg:text-5xl"
        >
          Your Dream Home Awaits • Verified Listings • Professional Support
        </MarqueeAnimation>
      </div>
    </section>
  );
}
