import React, { useState } from 'react';
import { 
  MessageCircle, 
  Compass, 
  Calendar, 
  Users, 
  MapPin, 
  DollarSign, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { WhatsAppInquiryForm } from '../types/travel';
import { buildWhatsAppUrl, formatCustomPlanInquiryMessage } from '../utils/whatsapp';

interface CustomTripPlannerProps {
  whatsAppNumber: string;
  agencyName: string;
  onExplorePackages: () => void;
}

export const CustomTripPlanner: React.FC<CustomTripPlannerProps> = ({
  whatsAppNumber,
  agencyName,
  onExplorePackages,
}) => {
  const [formData, setFormData] = useState<WhatsAppInquiryForm>({
    travelerName: '',
    travelerPhone: '',
    destination: 'Switzerland & Italian Lakes',
    travelersCount: 2,
    targetMonth: 'Autumn 2026',
    tripStyle: 'Luxury & Relaxation',
    estimatedBudget: '$2,500 – $4,000 / person',
    specialRequests: 'Looking for scenic train passes, boutique hotels with mountain views, and romantic dinners.',
  });

  const [hasCopied, setHasCopied] = useState(false);

  const popularDestinations = [
    'Turkey (Cappadocia & Istanbul)',
    'Thailand (Phuket & Bangkok)',
    'Sri Lanka (Sigiriya, Ella & Yala)',
    'Maldives Overwater Resort',
    'Dubai Luxury & Desert Dunes',
    'Switzerland & Alps Panoramic',
    'Malaysia & Singapore Combo',
    'Europe Grand Multi-Country',
    'Other Custom Destination',
  ];

  const tripStyles = [
    'Luxury & Relaxation',
    'Cultural & Heritage Explorer',
    'Romantic Honeymoon',
    'Family Vacation with Kids',
    'Alpine & Outdoor Adventure',
    'Foodie & Culinary Tour',
  ];

  const budgetTiers = [
    'Under $1,500 / person',
    '$1,500 – $2,500 / person',
    '$2,500 – $4,000 / person',
    '$4,000 – $6,000 / person',
    'VIP Luxury ($6,000+ / person)',
    'Flexible / Looking for Options',
  ];

  const formattedMessage = formatCustomPlanInquiryMessage(formData, agencyName);
  const whatsAppUrl = buildWhatsAppUrl(whatsAppNumber, formattedMessage);

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-emerald-700 font-semibold mb-2">
          Tailor-Made Vacation Design
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
          Plan Your Custom Dream Itinerary
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 mt-2">
          Don't see the exact package you want? Fill in your travel wishes below. Our system formats your custom trip inquiry and sends it straight to our WhatsApp concierge.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Inputs (7 Cols) */}
        <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xs">
          {/* Destination */}
          <div>
            <label className="text-xs font-semibold text-neutral-800 uppercase tracking-wider block mb-2">
              1. Where would you like to travel?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
              {popularDestinations.slice(0, 6).map((dest) => (
                <button
                  key={dest}
                  type="button"
                  onClick={() => setFormData({ ...formData, destination: dest })}
                  className={`px-3 py-2 text-xs rounded-lg text-left truncate transition-colors cursor-pointer ${
                    formData.destination === dest
                      ? 'bg-neutral-900 text-white font-medium'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {dest}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Or type any specific city, country or multiple stops..."
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              className="w-full text-xs sm:text-sm px-3.5 py-2.5 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-emerald-600 focus:bg-white"
            />
          </div>

          {/* Travelers & Timing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-neutral-800 uppercase tracking-wider block mb-2">
                2. Number of Travelers
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, travelersCount: Math.max(1, formData.travelersCount - 1) })}
                  className="w-9 h-9 rounded-lg border border-neutral-300 hover:bg-neutral-100 flex items-center justify-center font-bold text-sm cursor-pointer"
                >
                  -
                </button>
                <span className="font-mono font-bold text-base w-8 text-center">
                  {formData.travelersCount}
                </span>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, travelersCount: formData.travelersCount + 1 })}
                  className="w-9 h-9 rounded-lg border border-neutral-300 hover:bg-neutral-100 flex items-center justify-center font-bold text-sm cursor-pointer"
                >
                  +
                </button>
                <span className="text-xs text-neutral-500">
                  {formData.travelersCount === 1 ? 'Solo explorer' : 'Travelers'}
                </span>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-neutral-800 uppercase tracking-wider block mb-2">
                3. Approximate Dates / Month
              </label>
              <input
                type="text"
                placeholder="e.g. November 2026 or Spring 2027"
                value={formData.targetMonth}
                onChange={(e) => setFormData({ ...formData, targetMonth: e.target.value })}
                className="w-full text-xs sm:text-sm px-3.5 py-2 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-emerald-600"
              />
            </div>
          </div>

          {/* Trip Style & Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-neutral-800 uppercase tracking-wider block mb-2">
                4. Preferred Trip Style
              </label>
              <select
                value={formData.tripStyle}
                onChange={(e) => setFormData({ ...formData, tripStyle: e.target.value })}
                className="w-full text-xs sm:text-sm px-3 py-2 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
              >
                {tripStyles.map((style) => (
                  <option key={style} value={style}>
                    {style}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-neutral-800 uppercase tracking-wider block mb-2">
                5. Estimated Budget
              </label>
              <select
                value={formData.estimatedBudget}
                onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                className="w-full text-xs sm:text-sm px-3 py-2 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
              >
                {budgetTiers.map((tier) => (
                  <option key={tier} value={tier}>
                    {tier}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Traveler Name */}
          <div>
            <label className="text-xs font-semibold text-neutral-800 uppercase tracking-wider block mb-2">
              6. Your Name
            </label>
            <input
              type="text"
              placeholder="e.g. Alexander Mitchell"
              value={formData.travelerName}
              onChange={(e) => setFormData({ ...formData, travelerName: e.target.value })}
              className="w-full text-xs sm:text-sm px-3.5 py-2 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-emerald-600"
            />
          </div>

          {/* Specific requests */}
          <div>
            <label className="text-xs font-semibold text-neutral-800 uppercase tracking-wider block mb-2">
              7. Notes & Specific Requirements (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="e.g. We require kid-friendly hotels, 5-star ocean view rooms, airport transfer, vegan meal recommendations..."
              value={formData.specialRequests}
              onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
              className="w-full text-xs sm:text-sm px-3.5 py-2 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-emerald-600"
            />
          </div>
        </div>

        {/* Live WhatsApp Preview & Send Trigger (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 text-neutral-950 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 fill-neutral-950" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Live WhatsApp Preview</h3>
                  <p className="text-3xs text-neutral-400">Pre-formatted inquiry message</p>
                </div>
              </div>

              <span className="text-3xs font-mono text-emerald-400 font-semibold">
                wa.me/{whatsAppNumber.replace(/[^0-9]/g, '')}
              </span>
            </div>

            <div className="bg-neutral-950/80 border border-white/10 rounded-xl p-4">
              <pre className="whitespace-pre-wrap font-sans text-xs text-neutral-300 leading-relaxed max-h-56 overflow-y-auto">
                {formattedMessage}
              </pre>
            </div>

            <div className="pt-2">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-400 hover:from-amber-300 hover:to-teal-300 rounded-xl transition-all shadow-md cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-neutral-950" />
                <span>Send to WhatsApp (077 194 7844)</span>
              </a>
              <p className="text-center text-3xs text-neutral-400 mt-2 font-mono">
                Opens directly in WhatsApp with your customized inquiry for Ceylon Aura Travels.
              </p>
            </div>
          </div>

          {/* Quick FAQ Card */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 space-y-3">
            <h4 className="text-sm font-bold text-neutral-900">What happens after I send this on WhatsApp?</h4>
            <ul className="space-y-2 text-xs text-neutral-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>A dedicated destination consultant reviews your preferences.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>You receive a structured day-by-day draft itinerary with resort options.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>All modifications, inquiries, and final vouchers happen in the same WhatsApp chat.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
