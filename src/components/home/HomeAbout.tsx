"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HomeAbout() {
  const stats = [
    { value: "500+", label: "Properties" },
    { value: "1000+", label: "Clients" },
    { value: "10+", label: "Years" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white via-skysoft/20 to-peach/20">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-bold text-4xl md:text-5xl text-center mb-16 text-text max-w-4xl mx-auto leading-tight"
        >
          We are a global, boutique real estate brokerage
        </motion.h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Section Title */}
            <h3 className="font-heading font-bold text-3xl md:text-4xl text-text">
              The transfer of real estate
            </h3>

            {/* Description */}
            <p className="text-muted text-base md:text-lg leading-relaxed">
              We are committed to making property buying and selling simple,
              transparent, and hassle-free. With years of experience in the
              Jaipur real estate market, we help you find your dream home or
              investment property with confidence and professional guidance.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-text hover:bg-text/90 text-white rounded-full px-8"
                >
                  Book Now!
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-2 border-text/20 hover:border-text/40"
                >
                  Read More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Real estate professionals"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
