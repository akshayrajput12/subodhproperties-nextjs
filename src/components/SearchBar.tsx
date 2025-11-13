'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const router = useRouter();
  const [filters, setFilters] = useState({
    city: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
  });

  const handleSearch = () => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <input
          type="text"
          placeholder="City"
          className="input-field"
          value={filters.city}
          onChange={(e) => setFilters({ ...filters, city: e.target.value })}
        />
        <select
          className="input-field"
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
          <option value="">Property Type</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Plot">Plot</option>
        </select>
        <input
          type="number"
          placeholder="Min Price"
          className="input-field"
          value={filters.minPrice}
          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
        />
        <input
          type="number"
          placeholder="Max Price"
          className="input-field"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
        />
        <Button onClick={handleSearch} className="flex items-center gap-2 bg-black hover:bg-black/90 text-white">
          <Search size={20} />
          Search
        </Button>
      </div>
    </div>
  );
}
