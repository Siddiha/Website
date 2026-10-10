import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  Calendar, 
  Users, 
  Clock, 
  Check, 
  Minus, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  Info 
} from 'lucide-react';
import { TravelPackage } from '../types/travel';
import { buildWhatsAppUrl, formatPackageInquiryMessage } from '../utils/whatsapp';

interface PackageModalProps {
  packageItem: TravelPackage | null;
  onClose: () => void;
  whatsAppNumber: string;
  agencyName: string;
}

export const PackageModal: React.FC<PackageModalProps> = ({
  packageItem,
  onClose,
  whatsAppNumber,
  agencyName,
}) => {
  if (!packageItem) return null;

  const [travelersCount, setTravelersCount] = useState<number>(2);
  const [preferredMonth, setPreferredMonth] = useState<string>('Upcoming 3-6 Months');
  const [travelerName, setTravelerName] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'quote'>('itinerary');

  const totalPrice = packageItem.priceUSD * travelersCount;

  const whatsAppMessage = formatPackageInquiryMessage({
    packageItem,
    travelerName,
    travelersCount,
    travelDate: preferredMonth,
    notes: specialNotes,
    agencyName,
  });

  const whatsAppUrl = buildWhatsAppUrl(whatsAppNumber, whatsAppMessage);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="relative aspect-21/9 sm:aspect-16/6 w-full overflow-hidden bg-neutral-900 shrink-0">
          <img
            src={packageItem.image}
            alt={packageItem.title}
            className="w-full h-full object-cover object-center brightness-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-900/80 hover:bg-neutral-900 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on image scrim */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-1">
              {packageItem.destination}, {packageItem.country}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
              {packageItem.title}
            </h2>
          </div>
        </div>

        {/* Modal Nav Tabs */}
        <div className="border-b border-neutral-200 px-6 flex items-center justify-between bg-neutral-50 shrink-0">
          <div className="flex items-center gap-6 text-xs sm:text-sm font-medium">
            <button
              onClick={() => setActiveTab('itinerary')}
              className={`py-3.5 border-b-2 cursor-pointer transition-colors ${
                activeTab === 'itinerary'
                  ? 'border-emerald-600 text-neutral-900 font-semibold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-800'
              }`}
            >
              Day-by-Day Itinerary ({packageItem.itinerary.length} Days)
            </button>
            <button
              onClick={() => setActiveTab('inclusions')}
              className={`py-3.5 border-b-2 cursor-pointer transition-colors ${
                activeTab === 'inclusions'
                  ? 'border-emerald-600 text-neutral-900 font-semibold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-800'
              }`}
            >
              Inclusions & Exclusions
            </button>
            <button
              onClick={() => setActiveTab('quote')}
              className={`py-3.5 border-b-2 cursor-pointer transition-colors ${
                activeTab === 'quote'
                  ? 'border-emerald-600 text-neutral-900 font-semibold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-800'
              }`}
            >
              WhatsApp Booking Form
            </button>
          </div>

          <div className="hidden sm:block text-xs font-mono font-semibold text-emerald-800">
            ${packageItem.priceUSD.toLocaleString()} USD / person
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Quick info metadata strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-neutral-50 border border-neutral-200 rounded-xl p-4 text-xs">
            <div>
              <span className="text-neutral-400 block">Duration</span>
              <span className="font-semibold text-neutral-900">{packageItem.duration}</span>
            </div>
            <div>
              <span className="text-neutral-400 block">Best Season</span>
              <span className="font-semibold text-neutral-900">{packageItem.bestTimeToVisit}</span>
            </div>
            <div>
              <span className="text-neutral-400 block">Trip Style</span>
              <span className="font-semibold text-neutral-900">{packageItem.groupType}</span>
            </div>
            <div>
              <span className="text-neutral-400 block">Client Rating</span>
              <span className="font-semibold text-neutral-900 font-mono">{packageItem.rating} / 5.0 ({packageItem.reviewsCount} reviews)</span>
            </div>
          </div>

          {/* TAB 1: ITINERARY */}
          {activeTab === 'itinerary' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                  Trip Overview
                </h4>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {packageItem.overview}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-4">
                  Day-by-Day Schedule
                </h4>
                <div className="space-y-4">
                  {packageItem.itinerary.map((item) => (
                    <div 
                      key={item.day}
                      className="border border-neutral-200 rounded-xl p-4.5 bg-white hover:border-neutral-300 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-neutral-900 text-white">
                          Day {item.day}
                        </span>
                        <h5 className="text-sm font-bold text-neutral-900">
                          {item.title}
                        </h5>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pl-1">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INCLUSIONS & EXCLUSIONS */}
          {activeTab === 'inclusions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-50/50 border border-emerald-200/60 rounded-xl p-5">
                <h4 className="text-sm font-bold text-emerald-900 flex items-center gap-2 mb-3">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>What is Included in This Package</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950">
                  {packageItem.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5">
                <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-2 mb-3">
                  <Minus className="w-4 h-4 text-neutral-400" />
                  <span>What is Not Included (Exclusions)</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
                  {packageItem.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-neutral-400 font-bold">•</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: WHATSAPP BOOKING FORM & INQUIRY PREVIEW */}
          {activeTab === 'quote' && (
            <div className="space-y-6">
              <div className="bg-white border border-neutral-200 rounded-xl p-5 space-y-4">
                <h4 className="text-sm font-bold text-neutral-900">
                  Customize Your WhatsApp Booking Request
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={travelerName}
                      onChange={(e) => setTravelerName(e.target.value)}
                      className="w-full text-xs sm:text-sm px-3 py-2 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1">
                      Target Travel Month / Dates
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. October 2026 or Spring 2027"
                      value={preferredMonth}
                      onChange={(e) => setPreferredMonth(e.target.value)}
                      className="w-full text-xs sm:text-sm px-3 py-2 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-700 block mb-1">
                    Special Wishes or Requests (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Anniversary celebration, vegetarian food preferences, hotel room upgrade..."
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-emerald-600"
                  />
                </div>
              </div>

              {/* Live Preview Box */}
              <div className="bg-neutral-900 text-neutral-100 rounded-xl p-4 font-mono text-xs">
                <div className="text-3xs uppercase tracking-wider text-emerald-400 font-bold mb-2">
                  Preview of WhatsApp Message to be Sent:
                </div>
                <pre className="whitespace-pre-wrap font-sans text-neutral-300 text-xs leading-relaxed max-h-36 overflow-y-auto">
                  {whatsAppMessage}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-4 sm:p-6 border-t border-neutral-200 bg-neutral-50 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
            <div>
              <span className="text-3xs uppercase tracking-wider text-neutral-500 font-semibold block">
                Travelers
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <button
                  onClick={() => setTravelersCount(Math.max(1, travelersCount - 1))}
                  className="w-7 h-7 rounded-md bg-white border border-neutral-300 hover:bg-neutral-100 flex items-center justify-center text-xs font-bold cursor-pointer"
                  aria-label="Decrease travelers"
                >
                  -
                </button>
                <span className="font-mono font-bold text-sm w-5 text-center">
                  {travelersCount}
                </span>
                <button
                  onClick={() => setTravelersCount(travelersCount + 1)}
                  className="w-7 h-7 rounded-md bg-white border border-neutral-300 hover:bg-neutral-100 flex items-center justify-center text-xs font-bold cursor-pointer"
                  aria-label="Increase travelers"
                >
                  +
                </button>
              </div>
            </div>

            <div className="border-l border-neutral-200 pl-4">
              <span className="text-3xs uppercase tracking-wider text-neutral-500 font-semibold block">
                Estimated Total ({travelersCount} {travelersCount === 1 ? 'person' : 'people'})
              </span>
              <span className="font-mono font-bold text-base sm:text-lg text-neutral-900">
                ${totalPrice.toLocaleString()} USD
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="py-2.5 px-4 text-xs font-semibold text-neutral-600 hover:text-neutral-900 cursor-pointer"
            >
              Close
            </button>
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-400 hover:from-amber-300 hover:to-teal-300 rounded-xl transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-neutral-950" />
              <span>Book via WhatsApp (077 194 7844)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
