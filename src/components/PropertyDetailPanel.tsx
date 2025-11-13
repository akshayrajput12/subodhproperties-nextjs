'use client';

import { Property } from '@/types';
import { Bed, Bath, Maximize, Compass, Building } from 'lucide-react';
import Image from 'next/image';
import EnquiryForm from './EnquiryForm';

interface PropertyDetailPanelProps {
  property: Property;
}

export default function PropertyDetailPanel({ property }: PropertyDetailPanelProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
      <h1 className="font-heading font-bold text-3xl mb-2">{property.title}</h1>
      <p className="text-muted mb-4">{property.subtitle}</p>

      <div className="text-4xl font-bold text-peach mb-4">{property.priceDisplay}</div>

      <div className="inline-block bg-skysoft text-text px-4 py-1 rounded-full text-sm mb-6">
        {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
      </div>

      {/* Quick Specs */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Bed className="text-muted" size={20} />
          <span>{property.bedrooms} Bedrooms</span>
        </div>
        <div className="flex items-center gap-2">
          <Bath className="text-muted" size={20} />
          <span>{property.bathrooms} Bathrooms</span>
        </div>
        <div className="flex items-center gap-2">
          <Maximize className="text-muted" size={20} />
          <span>{property.areaSqFt} sqft</span>
        </div>
        <div className="flex items-center gap-2">
          <Compass className="text-muted" size={20} />
          <span>{property.facing} Facing</span>
        </div>
        <div className="flex items-center gap-2">
          <Building className="text-muted" size={20} />
          <span>{property.furnishing}</span>
        </div>
      </div>

      {/* Agent Card */}
      <div className="border-t pt-6 mb-6">
        <h3 className="font-heading font-semibold mb-4">Contact Agent</h3>
        <div className="flex items-center gap-4 mb-4">
          {property.agent.photo && (
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={property.agent.photo}
                alt={property.agent.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <p className="font-semibold">{property.agent.name}</p>
            <a href={`tel:${property.agent.phone}`} className="text-skysoft hover:underline">
              {property.agent.phone}
            </a>
            <br />
            <a href={`mailto:${property.agent.email}`} className="text-skysoft hover:underline text-sm">
              {property.agent.email}
            </a>
          </div>
        </div>
      </div>

      {/* Enquiry Form */}
      <div className="border-t pt-6">
        <h3 className="font-heading font-semibold mb-4">Send Enquiry</h3>
        <EnquiryForm propertyId={property.id} propertyTitle={property.title} />
      </div>
    </div>
  );
}
