import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';
import { HERO_IMAGE_URL, AGENCY_STATS } from '../data/packages';
import { buildWhatsAppUrl, formatGeneralInquiryMessage } from '../utils/whatsapp';

interface HeroSectionProps {
  onExplorePackages: () => void;
  onOpenCustomPlanner: () => void;
  whatsAppNumber: string;
  agencyName: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePackages,
  onOpenCustomPlanner,
  whatsAppNumber,
  agencyName,
}) => {
  const directWaUrl = buildWhatsAppUrl(
    whatsAppNumber,
    formatGeneralInquiryMessage(agencyName)
  );

  return (
    <section className="relative overflow-hidden bg-neutral-900 text-white">
      {/* Background Hero Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE_URL}
          alt="Luxury tropical lagoon resort and mountains"
          className="w-full h-full object-cover object-center transform scale-102 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured scrim for high WCAG contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-900/75 to-neutral-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl">
          {/* Subtle unboxed kicker with luxury gold accent */}
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30 uppercase tracking-widest backdrop-blur-md">
              Sri Lanka · Turkey · Thailand · Maldives & Beyond
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6 text-balance">
            Vibrant Luxury Journeys. Instant Booking on WhatsApp.
          </h1>

          <p className="text-base sm:text-lg text-neutral-200 leading-relaxed mb-8 font-normal text-balance">
            Welcome to <strong className="text-amber-300 font-semibold">{agencyName}</strong> (Sri Lanka). 
            From breathtaking Ceylon hill country & Yala safaris to hot air balloon sunrises in Turkey and turquoise lagoons in Thailand, our travel advisors design your dream vacation and confirm reservations directly via WhatsApp on <strong className="text-emerald-400 font-mono">077 194 7844</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href={directWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-4 text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-400 hover:from-amber-300 hover:to-teal-300 rounded-xl transition-all shadow-xl shadow-emerald-950/40 cursor-pointer scale-100 hover:scale-102"
            >
              <MessageCircle className="w-5 h-5 fill-neutral-950" />
              <span>Contact Us on WhatsApp (077 194 7844)</span>
            </a>

            <button
              onClick={onExplorePackages}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-neutral-100 bg-white/10 hover:bg-white/20 border border-amber-400/30 rounded-xl backdrop-blur-md transition-colors cursor-pointer"
            >
              <span>Explore Turkey & Thailand Packages</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
          </div>

          {/* Quick trust checkmarks */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-300 border-t border-white/15 pt-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Certified Booking Protection</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Replies in under 15 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Direct destination partners</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4-column KPI strip below hero split */}
      <div className="relative z-10 border-t border-white/10 bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {AGENCY_STATS.map((stat, idx) => (
              <div key={idx} className="border-l border-white/10 pl-4 first:border-0 sm:first:border-l-0">
                <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-neutral-300 mt-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-neutral-400 mt-0.5 hidden sm:block">
                  {stat.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
