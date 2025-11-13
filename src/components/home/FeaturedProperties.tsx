'use client';

import Link from 'next/link';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { getFeaturedProperties } from '@/data/properties';

export function FeaturedProperties() {
  const featuredProperties = getFeaturedProperties(6);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-4xl text-center mb-12 text-text">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/properties">
            <Button size="lg" className="bg-black hover:bg-black/90 text-white">
              View All Properties
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
