'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { getFeaturedProperties } from '@/data/properties';
import Link from 'next/link';
import Loader from '@/components/Loader';
import Image from 'next/image';

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const featuredProperties = getFeaturedProperties(6);

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
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-[#c1dee8] via-[#e8d5c4] to-[#fbd9b9] py-8 md:py-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6 lg:pr-8"
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-muted text-sm md:text-base"
                  >
                    Welcome to SubodhProperties
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-text leading-tight"
                  >
                    Manage Your{' '}
                    <span className="relative inline-block">
                      Property
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="absolute bottom-2 left-0 h-3 bg-text/20 -z-10"
                      />
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-muted text-base md:text-lg max-w-md"
                  >
                    Find your dream property with verified listings and expert guidance
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-text text-white rounded-full font-medium hover:bg-text/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Get a Quote
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="relative lg:pl-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.03, rotateY: 5 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-[500px] md:h-[550px] lg:h-[600px]"
                    style={{ perspective: '1000px' }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className="w-full h-full"
                    >
                      <Image
                        src="/images/hero-house.svg"
                        alt="Modern Property"
                        width={800}
                        height={800}
                        className="w-full h-full object-contain drop-shadow-2xl"
                        priority
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{
                opacity: { delay: 0.5, duration: 1 },
                rotate: { duration: 50, repeat: Infinity, ease: 'linear' },
              }}
              className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: -360 }}
              transition={{
                opacity: { delay: 0.7, duration: 1 },
                rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
              }}
              className="absolute bottom-20 left-20 w-40 h-40 bg-peach/20 rounded-full blur-3xl"
            />
          </section>

          {/* Featured Properties */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="font-heading font-bold text-4xl text-center mb-12">
                Featured Properties
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>

              <div className="text-center mt-12">
                <Link href="/properties">
                  <Button size="lg">View All Properties</Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="font-heading font-bold text-4xl text-center mb-12">
                Why Choose Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Verified Properties', desc: 'All properties are verified and RERA approved' },
                  { title: 'Expert Agents', desc: 'Professional agents to guide you' },
                  { title: 'Best Deals', desc: 'Competitive pricing and great offers' },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-md text-center">
                    <h3 className="font-heading font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-peach">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-heading font-bold text-4xl mb-4">Ready to Find Your Home?</h2>
              <p className="text-xl text-muted mb-8">Contact us today for personalized assistance</p>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </section>
        </motion.div>
      )}
    </>
  );
}
