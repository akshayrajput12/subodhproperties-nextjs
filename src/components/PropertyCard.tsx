'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Property } from '@/types';
import { Button } from './ui/button';
import { Bed, Bath, Maximize } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-peach transition-all"
    >
      <div className="relative h-64">
        <Image
          src={property.galleryThumb}
          alt={property.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4 bg-peach text-text px-4 py-1 rounded-full font-semibold">
          {property.priceDisplay}
        </div>
        <div className="absolute top-4 left-4 bg-white text-text px-3 py-1 rounded-full text-sm">
          {property.status === 'for-sale' ? 'For Sale' : property.status === 'for-rent' ? 'For Rent' : 'Sold'}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-heading font-bold text-xl mb-2 line-clamp-1">{property.title}</h3>
        <p className="text-muted text-sm mb-4 line-clamp-1">{property.subtitle}</p>

        {/* Quick Specs */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted">
          <div className="flex items-center gap-1">
            <Bed size={16} />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={16} />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize size={16} />
            <span>{property.areaSqFt} sqft</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Link href={`/properties/${property.id}`} className="flex-1">
            <Button className="w-full" variant="default">View Details</Button>
          </Link>
          <Button variant="ghost">Enquire</Button>
        </div>
      </div>
    </motion.div>
  );
}
