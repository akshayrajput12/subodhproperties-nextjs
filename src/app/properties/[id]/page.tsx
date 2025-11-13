import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getPropertyById, properties } from '@/data/properties';
import PropertyDetailPanel from '@/components/PropertyDetailPanel';
import PropertyCard from '@/components/PropertyCard';

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = getPropertyById(params.id);

  if (!property) {
    notFound();
  }

  const similarProperties = properties.filter(p => 
    property.similarIds.includes(p.id)
  ).slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Image Gallery */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <div className="relative h-96 rounded-2xl overflow-hidden mb-4">
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {property.images.slice(1, 5).map((img, i) => (
                <div key={i} className="relative h-24 rounded-lg overflow-hidden">
                  <Image
                    src={img}
                    alt={`${property.title} ${i + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
            <h2 className="font-heading font-bold text-2xl mb-4">Overview</h2>
            <p className="text-muted mb-4">{property.description}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><span className="font-semibold">Location:</span> {property.locality}, {property.city}</div>
              <div><span className="font-semibold">Possession:</span> {property.possessionStatus}</div>
              <div><span className="font-semibold">RERA No:</span> {property.reraNo}</div>
              <div><span className="font-semibold">Floor:</span> {property.floorNo}/{property.totalFloors}</div>
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
            <h2 className="font-heading font-bold text-2xl mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {property.amenities.map((amenity, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-peach rounded-full"></span>
                  <span className="capitalize">{amenity.replace('-', ' ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
            <h2 className="font-heading font-bold text-2xl mb-4">Location</h2>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-muted">Map: {property.latitude}, {property.longitude}</p>
            </div>
            <a 
              href={`https://www.google.com/maps?q=${property.latitude},${property.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-skysoft hover:underline mt-2 inline-block"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Similar Properties */}
          {similarProperties.length > 0 && (
            <div>
              <h2 className="font-heading font-bold text-2xl mb-6">Similar Properties</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {similarProperties.map((prop) => (
                  <PropertyCard key={prop.id} property={prop} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Detail Panel */}
        <div className="lg:col-span-1">
          <PropertyDetailPanel property={property} />
        </div>
      </div>
    </div>
  );
}
