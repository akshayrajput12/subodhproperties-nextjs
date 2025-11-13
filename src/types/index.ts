export interface Property {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  priceDisplay: string;
  status: 'for-sale' | 'for-rent' | 'sold';
  type: 'Apartment' | 'Villa' | 'Plot' | 'Commercial';
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
  carpetAreaSqFt: number | null;
  plotAreaSqYd: number | null;
  furnishing: 'Furnished' | 'Semi-Furnished' | 'Unfurnished';
  facing: string;
  floorNo: number | null;
  totalFloors: number | null;
  possessionStatus: 'Ready to Move' | 'Under Construction';
  possessionDate: string | null;
  reraNo: string | null;
  address: string;
  locality: string;
  city: string;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
  images: string[];
  videoUrl: string | null;
  description: string;
  amenities: string[];
  features: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
    photo?: string;
  };
  postedDate: string;
  floorPlanImage: string | null;
  galleryThumb: string;
  similarIds: string[];
  seo: {
    title?: string;
    description?: string;
    canonical?: string;
  };
}
