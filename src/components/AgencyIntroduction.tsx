import React from 'react';
import { 
  MessageCircle, 
  ArrowRight, 
  Compass, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Users, 
  MapPin, 
  Clock 
} from 'lucide-react';
import { TRAVEL_PACKAGES, AGENCY_PILLARS, TRAVELER_TESTIMONIALS } from '../data/packages';
import { TravelPackage } from '../types/travel';
import { buildWhatsAppUrl, formatPackageInquiryMessage, formatGeneralInquiryMessage } from '../utils/whatsapp';

interface AgencyIntroductionProps {
  onSelectPackage: (pkg: TravelPackage) => void;
  onExploreAllPackages: () => void;
  onOpenCustomPlanner: () => void;
  whatsAppNumber: string;
  agencyName: string;
}

export const AgencyIntroduction: React.FC<AgencyIntroductionProps> = ({
  onSelectPackage,
  onExploreAllPackages,
  onOpenCustomPlanner,
  whatsAppNumber,
  agencyName,
}) => {
  const featuredPackages = TRAVEL_PACKAGES.filter((p) => p.featured);
  const generalWaUrl = buildWhatsAppUrl(
    whatsAppNumber,
    formatGeneralInquiryMessage(agencyName)
  );

  return (
    <div className="space-y-24 py-16">
      {/* 01. Agency Mission & Heritage Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider">
              <span>Ayubowan & Welcome</span>
              <span>·</span>
              <span>Based in Sri Lanka</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight text-balance">
              Sri Lanka's Premier Travel Agency for Domestic & Worldwide Luxury Tours
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              Proudly based in Sri Lanka, <span className="font-bold text-emerald-800">{agencyName}</span> offers bespoke, unforgettable journeys. 
              Whether you are looking to explore Sri Lanka's misty Ceylon tea hills, Sigiriya fortress, and Yala leopards, or travel outbound to world-famous destinations like <strong className="text-neutral-900">Turkey (Cappadocia & Istanbul)</strong>, <strong className="text-neutral-900">Thailand (Phuket & Phi Phi)</strong>, <strong className="text-neutral-900">Maldives</strong>, or <strong className="text-neutral-900">Dubai</strong>, we arrange all flights, luxury accommodations, visas, and private excursions.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Every inquiry is handled directly by our travel coordinator on WhatsApp at <strong className="text-emerald-700 font-mono text-base">077 194 7844</strong> (+94 77 194 7844). You receive fast quotes, customized options, and direct booking confirmation with zero delay.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreAllPackages}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-bold text-neutral-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-sm cursor-pointer"
              >
                <span>View Packages (Turkey, Thailand, Sri Lanka)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={generalWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 rounded-xl transition-colors shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Message on WhatsApp (077 194 7844)</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-b from-neutral-900 to-neutral-950 text-white border border-amber-500/30 rounded-3xl p-8 space-y-6 shadow-xl">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center justify-center font-bold">
                <Clock className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Direct WhatsApp Concierge</h3>
                <p className="text-xs text-amber-300 font-mono">077 194 7844 · Available 24/7</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-neutral-200">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Instant itinerary proposals for Turkey, Thailand, Sri Lanka & Maldives</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Sri Lanka local private chauffeur & airport pickup service</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Outbound international flight ticketing & visa assistance</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Exclusive luxury resort rates with complimentary room upgrades</span>
              </li>
            </ul>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-neutral-400">Sri Lanka Helpline:</span>
              <a
                href={generalWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono font-bold text-base text-emerald-400 hover:text-emerald-300 underline"
              >
                077 194 7844
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 02. The 4 Core Agency Pillars */}
      <section className="bg-neutral-100/70 py-16 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-widest text-emerald-700 font-semibold mb-2">
              Why Travelers Choose Us
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 text-balance">
              The Luxury Travel Experience, Reimagined for Simplicity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AGENCY_PILLARS.map((pillar, idx) => (
              <div 
                key={idx}
                className="bg-white border border-neutral-200 rounded-xl p-6 shadow-2xs hover:border-neutral-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                  {idx === 0 && <MessageCircle className="w-5 h-5" />}
                  {idx === 1 && <Compass className="w-5 h-5" />}
                  {idx === 2 && <ShieldCheck className="w-5 h-5" />}
                  {idx === 3 && <HeartHandshake className="w-5 h-5" />}
                </div>
                <h3 className="text-base font-semibold text-neutral-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. How WhatsApp Inquiries Work (Step-by-Step Flow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-emerald-700 font-semibold mb-2">
            Seamless Booking Experience
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            How It Works in 3 Simple Steps
          </h2>
          <p className="text-sm text-neutral-600 mt-2">
            No complex signups or credit card holds. Connect with a real human advisor on WhatsApp in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="bg-white border border-neutral-200 rounded-xl p-7 shadow-xs relative">
            <div className="text-xs font-mono font-bold text-neutral-400 mb-3">STEP 01</div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">Browse & Choose a Package</h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              Explore our handpicked travel packages with transparent pricing, full itineraries, and included excursions.
            </p>
            <div className="text-xs text-neutral-500 font-medium">
              Or use our Custom Planner for personalized dates & destinations.
            </div>
          </div>

          <div className="bg-white border border-neutral-200 rounded-xl p-7 shadow-xs relative">
            <div className="text-xs font-mono font-bold text-emerald-600 mb-3">STEP 02</div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">Tap "Inquire on WhatsApp"</h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              Click the WhatsApp button on any package. Our system formats your inquiry with destinations, dates, and guest count automatically.
            </p>
            <div className="text-xs text-emerald-700 font-medium">
              Zero manual typing required; your draft opens in WhatsApp ready to send.
            </div>
          </div>

          <div className="bg-white border border-neutral-200 rounded-xl p-7 shadow-xs relative">
            <div className="text-xs font-mono font-bold text-neutral-400 mb-3">STEP 03</div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">Finalize & Travel with Ease</h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              Your advisor confirms availability, answers questions, reserves luxury perks, and provides direct assistance throughout your entire holiday.
            </p>
            <div className="text-xs text-neutral-500 font-medium">
              Full peace of mind with 24/7 on-tour messaging.
            </div>
          </div>
        </div>
      </section>

      {/* 04. Featured Packages Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-emerald-700 font-semibold mb-2">
              Signature Escapes
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Featured Packages for 2026/2027
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              Popular international itineraries with direct WhatsApp booking availability.
            </p>
          </div>
          <button
            onClick={onExploreAllPackages}
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 cursor-pointer"
          >
            <span>View All Packages</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPackages.map((pkg) => {
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
                className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
              >
                {/* Visual slot with fallback */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-neutral-900/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-mono tabular-nums">
                    From ${pkg.priceUSD.toLocaleString()} USD
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Clean unboxed metadata */}
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                      <span>{pkg.destination}</span>
                      <span aria-hidden="true">·</span>
                      <span>{pkg.duration}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-semibold text-neutral-800">{pkg.rating} ★</span>
                    </div>

                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {pkg.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 mt-2">
                      {pkg.overview}
                    </p>
                  </div>

                  {/* Action row */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center gap-2.5">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className="flex-1 py-2 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
                    >
                      View Details
                    </button>
                    <a
                      href={pkgWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer"
                      title="Send WhatsApp Inquiry for this package"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 05. Attributable Traveler Testimonials */}
      <section className="bg-neutral-100/60 py-16 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <div className="text-xs uppercase tracking-widest text-emerald-700 font-semibold mb-2">
              Verified Reviews
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Trusted by Discerning Travelers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRAVELER_TESTIMONIALS.map((test, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-xl p-6 shadow-2xs flex flex-col justify-between"
              >
                <p className="text-sm text-neutral-700 leading-relaxed italic mb-6">
                  "{test.quote}"
                </p>
                <div className="border-t border-neutral-100 pt-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs">
                    {test.avatarLetter}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-900 leading-none">
                      {test.author}
                    </div>
                    <div className="text-xs text-neutral-500 mt-1">
                      {test.location} · <span className="text-neutral-700 font-medium">{test.trip}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. Prominent Contact & WhatsApp Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3">
              Direct Contact
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-4 text-balance">
              Have a Dream Trip in Mind? Let's Talk on WhatsApp.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
              Whether you need family vacation packages, a honeymoon getaway, or flights & hotel bookings, our advisors are online right now. Send us your requirements and we will send you a tailored itinerary proposal.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={generalWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-neutral-950" />
                <span>Chat Directly on WhatsApp</span>
              </a>

              <button
                onClick={onOpenCustomPlanner}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-colors cursor-pointer"
              >
                <span>Customize Trip Details First</span>
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 text-xs text-neutral-400 flex flex-wrap items-center gap-6 font-mono">
              <span>Direct WhatsApp: {whatsAppNumber}</span>
              <span>Available 7 Days a Week</span>
              <span>Average response time: 8 mins</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
