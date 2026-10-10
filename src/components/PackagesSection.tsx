import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  MessageCircle, 
  ArrowRight, 
  Star, 
  Calendar, 
  MapPin, 
  Clock, 
  Sparkles, 
  X, 
  Check, 
  ChevronRight 
} from 'lucide-react';
import { TRAVEL_PACKAGES } from '../data/packages';
import { TravelPackage, PackageCategory } from '../types/travel';
import { buildWhatsAppUrl, formatPackageInquiryMessage, formatGeneralInquiryMessage } from '../utils/whatsapp';

interface PackagesSectionProps {
  onSelectPackage: (pkg: TravelPackage) => void;
  onOpenCustomPlanner: () => void;
  whatsAppNumber: string;
  agencyName: string;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  onSelectPackage,
  onOpenCustomPlanner,
  whatsAppNumber,
  agencyName,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<PackageCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState<number>(3500);

  const categories = [
    { id: 'all', label: 'All Packages' },
    { id: 'tropical', label: 'Tropical & Beach' },
    { id: 'alpine', label: 'Alpine & Nature' },
    { id: 'cultural', label: 'Cultural Heritage' },
    { id: 'luxury', label: 'Luxury & Honeymoon' },
    { id: 'adventure', label: 'Adventure & Expeditions' },
  ];

  const filteredPackages = useMemo(() => {
    return TRAVEL_PACKAGES.filter((pkg) => {
      const matchesCategory =
        selectedCategory === 'all' || pkg.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.overview.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = pkg.priceUSD <= maxPrice;

      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [selectedCategory, searchQuery, maxPrice]);

  const generalWaUrl = buildWhatsAppUrl(
    whatsAppNumber,
    formatGeneralInquiryMessage(agencyName)
  );

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Page Header */}
      <div className="border-b border-neutral-200 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              Worldwide & Sri Lanka Destinations
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
              Curated Travel Packages & Tours
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Featuring popular trips to <strong className="text-neutral-900">Turkey, Thailand, Sri Lanka, Maldives, Switzerland & Dubai</strong>. Direct booking and customized packages handled via WhatsApp on <strong className="text-emerald-700 font-mono">077 194 7844</strong>.
            </p>
          </div>

          <div className="bg-gradient-to-r from-emerald-900 to-teal-950 text-white border border-amber-400/40 rounded-2xl p-4.5 flex items-center gap-3.5 shrink-0 shadow-lg">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-neutral-950 flex items-center justify-center shrink-0 shadow-sm">
              <MessageCircle className="w-6 h-6 fill-neutral-950" />
            </div>
            <div>
              <div className="text-2xs text-amber-300 font-bold uppercase tracking-wider">Direct WhatsApp Inquiry</div>
              <a
                href={generalWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono font-bold text-white hover:text-amber-200 underline inline-flex items-center gap-1"
              >
                077 194 7844 (+94 77 194 7844)
              </a>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-8 space-y-4">
          {/* Category Tabs (Functional Segmented Control) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as PackageCategory)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Price Filter Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-white border border-neutral-200 rounded-xl p-3 shadow-2xs">
            <div className="sm:col-span-7 relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search destination, country or package name (e.g. Maldives, Japan, Swiss)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-hidden focus:border-emerald-600 focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="sm:col-span-5 flex items-center justify-between sm:justify-end gap-4 px-2">
              <div className="text-xs text-neutral-600 whitespace-nowrap">
                Max Price: <span className="font-mono font-semibold text-neutral-900">${maxPrice.toLocaleString()} USD</span>
              </div>
              <input
                type="range"
                min="1200"
                max="3500"
                step="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-32 accent-emerald-600 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Package Count Indicator */}
      <div className="flex items-center justify-between text-xs text-neutral-500 font-medium">
        <span>Showing {filteredPackages.length} package{filteredPackages.length === 1 ? '' : 's'}</span>
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setMaxPrice(3500);
            }}
            className="text-emerald-700 hover:underline cursor-pointer"
          >
            Reset all filters
          </button>
        )}
      </div>

      {/* Packages Grid */}
      {filteredPackages.length === 0 ? (
        <div className="bg-white border border-neutral-200 rounded-2xl p-12 text-center space-y-4 max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-full bg-neutral-100 text-neutral-400 flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-neutral-900">No matching packages found</h3>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            We couldn't find a ready package matching your exact filters. However, we can craft a 100% custom itinerary for you on WhatsApp!
          </p>
          <div className="pt-2">
            <a
              href={generalWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Ask on WhatsApp for Custom Route</span>
            </a>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => {
            const pkgWaUrl = buildWhatsAppUrl(
              whatsAppNumber,
              formatPackageInquiryMessage({
                packageItem: pkg,
                agencyName,
              })
            );

            return (
              <div
                key={pkg.id}
                className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Photo with fallback container */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-neutral-950/75 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-medium">
                      {pkg.country}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-neutral-900 text-xs px-2.5 py-1 rounded-md font-mono font-semibold shadow-xs">
                      ${pkg.priceUSD.toLocaleString()} USD <span className="font-sans font-normal text-neutral-500">/ person</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    {/* Unboxed metadata */}
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <span>{pkg.duration}</span>
                      <span aria-hidden="true">·</span>
                      <span>{pkg.bestTimeToVisit}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-semibold text-neutral-800">{pkg.rating} ★</span>
                    </div>

                    <h2 className="text-xl font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {pkg.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                      {pkg.overview}
                    </p>

                    {/* Highlights bullets */}
                    <div className="pt-2 border-t border-neutral-100">
                      <div className="text-xs font-semibold text-neutral-800 mb-2">Package Highlights:</div>
                      <ul className="space-y-1.5 text-xs text-neutral-600">
                        {pkg.highlights.slice(0, 3).map((hl, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-emerald-600 shrink-0 font-bold">•</span>
                            <span className="line-clamp-1">{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Action Row */}
                <div className="p-6 pt-0 space-y-2.5">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className="py-2.5 px-3 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-colors cursor-pointer text-center"
                    >
                      View Itinerary
                    </button>
                    <a
                      href={pkgWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 rounded-xl transition-all shadow-xs cursor-pointer text-center"
                      title="Send WhatsApp Inquiry directly"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Inquire (WA)</span>
                    </a>
                  </div>
                  <div className="text-center">
                    <a
                      href={pkgWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xs text-emerald-700 hover:text-emerald-800 font-mono font-medium underline"
                    >
                      WhatsApp: 077 194 7844
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Custom Inquiry Bottom Banner */}
      <div className="mt-16 bg-neutral-100 border border-neutral-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-lg font-bold text-neutral-900">Need a Different Destination or Group Booking?</h3>
          <p className="text-xs sm:text-sm text-neutral-600">
            Tell us where you want to go, your dates, and budget. Our WhatsApp travel experts will craft your customized itinerary.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCustomPlanner}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-neutral-900 bg-white border border-neutral-200 hover:bg-neutral-50 rounded-lg transition-colors cursor-pointer"
          >
            Open Trip Planner
          </button>
          <a
            href={generalWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
