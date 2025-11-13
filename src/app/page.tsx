'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Loader from '@/components/Loader';
import { HeroSection, MarqueeSection, FeaturedProperties, HomeAbout, WhyChooseUs, Testimonials } from '@/components/home';
import { CTASection } from '@/components/CTASection';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
          <MarqueeSection />
          <FeaturedProperties />
          <HomeAbout />
          <WhyChooseUs />
          <Testimonials />
          <CTASection
            badge={{ text: "Get Started Today" }}
            title="Ready to Find Your Dream Property?"
            description="Contact us today for personalized assistance and expert guidance in finding your perfect home"
            action={{
              text: "Get in Touch",
              href: "/contact",
              variant: "default"
            }}
            withGlow={true}
            className="bg-gradient-to-br from-skysoft via-peach/30 to-peach"
          />
        </motion.div>
      )}
    </>
  );
}
