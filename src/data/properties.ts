import { Property } from '@/types';

export const properties: Property[] = [
  {
    id: 'man-apt-001',
    title: '3 BHK Apartment in Mansarovar, Jaipur',
    subtitle: 'Modern 3 BHK with balcony & parking',
    price: 8500000,
    priceDisplay: '₹85,00,000',
    status: 'for-sale',
    type: 'Apartment',
    bedrooms: 3,
    bathrooms: 2,
    areaSqFt: 1550,
    carpetAreaSqFt: 1250,
    plotAreaSqYd: null,
    furnishing: 'Semi-Furnished',
    facing: 'East',
    floorNo: 4,
    totalFloors: 8,
    possessionStatus: 'Ready to Move',
    possessionDate: null,
    reraNo: 'JAIPUR12345',
    address: 'A-34, Metro Road, Mansarovar, Jaipur, Rajasthan 302020',
    locality: 'Mansarovar',
    city: 'Jaipur',
    state: 'Rajasthan',
    country: 'India',
    latitude: 26.9000,
    longitude: 75.8000,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
      'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80'
    ],
    videoUrl: null,
    description: 'This modern 3 BHK apartment features a modular kitchen, wooden flooring in master bedroom, spacious living room with balcony and premium fittings. Close to schools, malls and metro station.',
    amenities: ['lift', 'parking', 'power-backup', 'gym', 'cctv', 'clubhouse'],
    features: ['balcony', 'modular-kitchen', 'wooden-flooring'],
    agent: {
      name: 'Rohit Sharma',
      phone: '9653814628',
      email: 'rohit@company.com',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80'
    },
    postedDate: '2025-09-01T10:00:00.000Z',
    floorPlanImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    galleryThumb: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    similarIds: ['man-apt-002', 'man-villa-001'],
    seo: {
      title: '3 BHK Apartment in Mansarovar - Comfortable 1550 Sqft',
      description: 'Buy a modern 3 BHK apartment in Mansarovar, Jaipur. Close to amenities, ready to move, 2 parking spots available.',
      canonical: '/properties/man-apt-001'
    }
  },
  {
    id: 'man-apt-002',
    title: '2 BHK Apartment in Vaishali Nagar, Jaipur',
    subtitle: 'Compact 2 BHK near metro',
    price: 5500000,
    priceDisplay: '₹55,00,000',
    status: 'for-sale',
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    areaSqFt: 1100,
    carpetAreaSqFt: 950,
    plotAreaSqYd: null,
    furnishing: 'Unfurnished',
    facing: 'North',
    floorNo: 2,
    totalFloors: 5,
    possessionStatus: 'Ready to Move',
    possessionDate: null,
    reraNo: 'JAIPUR67890',
    address: 'B-12, Vaishali Nagar, Jaipur, Rajasthan 302021',
    locality: 'Vaishali Nagar',
    city: 'Jaipur',
    state: 'Rajasthan',
    country: 'India',
    latitude: 26.9124,
    longitude: 75.7873,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80'
    ],
    videoUrl: null,
    description: 'Affordable 2 BHK apartment perfect for small families. Well-ventilated rooms, ample natural light, and close proximity to metro station.',
    amenities: ['lift', 'parking', 'power-backup', 'security'],
    features: ['balcony', 'vitrified-tiles'],
    agent: {
      name: 'Priya Verma',
      phone: '9876543210',
      email: 'priya@company.com',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80'
    },
    postedDate: '2025-08-15T10:00:00.000Z',
    floorPlanImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    galleryThumb: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    similarIds: ['man-apt-001'],
    seo: {
      title: '2 BHK Apartment in Vaishali Nagar - Affordable Living',
      description: 'Buy a 2 BHK apartment in Vaishali Nagar, Jaipur. Near metro, ready to move.',
      canonical: '/properties/man-apt-002'
    }
  },
  {
    id: 'man-villa-001',
    title: '4 BHK Villa in Jagatpura, Jaipur',
    subtitle: 'Luxurious villa with private garden',
    price: 15000000,
    priceDisplay: '₹1.5 Cr',
    status: 'for-sale',
    type: 'Villa',
    bedrooms: 4,
    bathrooms: 4,
    areaSqFt: 3200,
    carpetAreaSqFt: 2800,
    plotAreaSqYd: 300,
    furnishing: 'Furnished',
    facing: 'South',
    floorNo: null,
    totalFloors: 2,
    possessionStatus: 'Ready to Move',
    possessionDate: null,
    reraNo: 'JAIPUR11111',
    address: 'Villa No. 45, Green Valley, Jagatpura, Jaipur, Rajasthan 302017',
    locality: 'Jagatpura',
    city: 'Jaipur',
    state: 'Rajasthan',
    country: 'India',
    latitude: 26.8467,
    longitude: 75.8648,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
    ],
    videoUrl: null,
    description: 'Stunning 4 BHK villa with private garden, swimming pool, and modern amenities. Perfect for families seeking luxury and space.',
    amenities: ['swimming-pool', 'parking', 'power-backup', 'gym', 'cctv', 'clubhouse', 'garden'],
    features: ['private-garden', 'modular-kitchen', 'wooden-flooring', 'home-theater'],
    agent: {
      name: 'Rohit Sharma',
      phone: '9653814628',
      email: 'rohit@company.com',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80'
    },
    postedDate: '2025-10-01T10:00:00.000Z',
    floorPlanImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    galleryThumb: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    similarIds: ['man-apt-001'],
    seo: {
      title: '4 BHK Villa in Jagatpura - Luxury Living',
      description: 'Buy a luxurious 4 BHK villa in Jagatpura, Jaipur with private garden and pool.',
      canonical: '/properties/man-villa-001'
    }
  }
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(p => p.id === id);
};

export const getFeaturedProperties = (limit: number = 6): Property[] => {
  return properties
    .sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime())
    .slice(0, limit);
};
