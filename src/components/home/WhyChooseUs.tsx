'use client';

import { Shield, Users, TrendingUp, Award, Clock, HeartHandshake, LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  iconBg: string;
}

const features: Feature[] = [
  {
    icon: Shield,
    title: 'Verified Properties',
    description: 'Every property is thoroughly verified and RERA approved, ensuring complete transparency and legal compliance for your peace of mind.',
    gradient: 'from-skysoft/20 to-skysoft/5',
    iconBg: 'bg-skysoft',
  },
  {
    icon: Users,
    title: 'Expert Agents',
    description: 'Our team of professional real estate agents brings years of experience and local market knowledge to guide you through every step.',
    gradient: 'from-peach/20 to-peach/5',
    iconBg: 'bg-peach',
  },
  {
    icon: TrendingUp,
    title: 'Best Market Deals',
    description: 'Access exclusive listings and competitive pricing with our extensive network, ensuring you get the best value for your investment.',
    gradient: 'from-skysoft/20 to-skysoft/5',
    iconBg: 'bg-skysoft',
  },
  {
    icon: Award,
    title: 'Award-Winning Service',
    description: 'Recognized for excellence in customer service and successful transactions, we consistently exceed client expectations.',
    gradient: 'from-peach/20 to-peach/5',
    iconBg: 'bg-peach',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your queries and concerns, because your property journey doesn\'t follow a 9-to-5 schedule.',
    gradient: 'from-skysoft/20 to-skysoft/5',
    iconBg: 'bg-skysoft',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Approach',
    description: 'We understand that every client is unique. Our tailored solutions match your specific needs, budget, and lifestyle preferences.',
    gradient: 'from-peach/20 to-peach/5',
    iconBg: 'bg-peach',
  },
];

interface FeatureCardProps {
  feature: Feature;
  large?: boolean;
}

function FeatureCard({ feature, large = false }: FeatureCardProps) {
  const Icon = feature.icon;
  
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group hover:-translate-y-1">
      <div className={`bg-gradient-to-br ${feature.gradient} rounded-xl p-6 h-full flex flex-col justify-between gap-6`}>
        <div className={`${feature.iconBg} w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-7 h-7 stroke-[1.5] text-text" />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className={`font-heading ${large ? 'text-2xl' : 'text-xl'} font-semibold tracking-tight text-text`}>
            {feature.title}
          </h3>
          <p className={`text-muted ${large ? 'text-base' : 'text-sm'} leading-relaxed`}>
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="w-full py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex gap-4 flex-col items-start max-w-3xl mx-auto text-center w-full">
            <div className="mx-auto">
              <Badge className="bg-text text-white hover:bg-text/90">Why Choose Us</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="font-heading text-3xl md:text-5xl tracking-tight font-bold text-text">
                Your Trusted Real Estate Partner
              </h2>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed text-muted">
                We combine expertise, integrity, and innovation to deliver exceptional real estate experiences that exceed expectations.
              </p>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
            {/* Large Card 1 - Spans 2 columns on large screens */}
            <div className="lg:col-span-2">
              <FeatureCard feature={features[0]} large />
            </div>

            {/* Regular Card 1 */}
            <FeatureCard feature={features[1]} />

            {/* Regular Card 2 */}
            <FeatureCard feature={features[2]} />

            {/* Large Card 2 - Spans 2 columns on large screens */}
            <div className="lg:col-span-2">
              <FeatureCard feature={features[3]} large />
            </div>

            {/* Regular Card 3 */}
            <FeatureCard feature={features[4]} />

            {/* Regular Card 4 - Spans 2 columns on small screens, 1 on large */}
            <div className="sm:col-span-2 lg:col-span-1">
              <FeatureCard feature={features[5]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
