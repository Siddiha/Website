export type PackageCategory = 
  | 'all'
  | 'tropical' 
  | 'alpine' 
  | 'cultural' 
  | 'luxury' 
  | 'adventure';

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface TravelPackage {
  id: string;
  title: string;
  destination: string;
  country: string;
  category: 'tropical' | 'alpine' | 'cultural' | 'luxury' | 'adventure';
  duration: string;
  durationDays: number;
  priceUSD: number;
  originalPriceUSD?: number;
  image: string;
  accentGradient: string;
  rating: number;
  reviewsCount: number;
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  bestTimeToVisit: string;
  groupType: string;
  itinerary: ItineraryDay[];
  featured?: boolean;
}

export interface WhatsAppInquiryForm {
  travelerName: string;
  travelerPhone?: string;
  destination: string;
  packageId?: string;
  packageTitle?: string;
  travelersCount: number;
  targetMonth: string;
  tripStyle: string;
  estimatedBudget: string;
  specialRequests: string;
}
