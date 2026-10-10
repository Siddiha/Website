import React from 'react';
import { Compass, MessageCircle, MapPin, Phone, ShieldCheck, Mail } from 'lucide-react';
import { buildWhatsAppUrl, formatGeneralInquiryMessage } from '../utils/whatsapp';

interface FooterProps {
  whatsAppNumber: string;
  agencyName: string;
  onNavigateTab: (tab: 'intro' | 'packages' | 'planner') => void;
  onOpenSettings: () => void;
  onOpenGeneralInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  whatsAppNumber,
  agencyName,
  onNavigateTab,
  onOpenSettings,
  onOpenGeneralInquiry,
}) => {
  const generalWaUrl = buildWhatsAppUrl(
    whatsAppNumber,
    formatGeneralInquiryMessage(agencyName)
  );

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {agencyName}
              </span>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Sri Lanka's licensed boutique luxury travel agency. Crafting unforgettable holidays across Sri Lanka, Turkey, Thailand, Maldives, Switzerland, and Dubai with instant WhatsApp concierge.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={generalWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-xs transition-colors border border-amber-400/30 w-fit"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp: 077 194 7844 (+94 77 194 7844)</span>
              </a>
              <div className="text-3xs text-neutral-500">
                Colombo & Kandy, Sri Lanka · Registered Travel Advisory
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Explore
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigateTab('intro')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Agency Introduction
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('packages')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  All Travel Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('planner')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Custom Trip Planner
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenGeneralInquiry}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Send Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Destinations */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Destinations
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li className="text-amber-300 font-semibold">Sri Lanka (Sigiriya, Ella, Yala)</li>
              <li className="text-amber-300 font-semibold">Turkey (Cappadocia & Istanbul)</li>
              <li className="text-amber-300 font-semibold">Thailand (Phuket & Phi Phi)</li>
              <li>Maldives Overwater Villas</li>
              <li>Dubai & Royal Desert Dunes</li>
              <li>Switzerland Glacier Express</li>
            </ul>
          </div>

          {/* Concierge & Settings */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Concierge Hours
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Mon – Sun: 07:00 – 23:00 GMT<br />
              Emergency on-trip support: 24/7
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenSettings}
                className="text-emerald-400 hover:text-emerald-300 underline cursor-pointer text-xs"
              >
                Configure WhatsApp Number
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-3xs">
          <div>
            © {new Date().getFullYear()} {agencyName}. All rights reserved. Licensed Travel Advisory.
          </div>
          <div className="flex items-center gap-6">
            <span>Direct WhatsApp Redirect Enabled</span>
            <span>·</span>
            <span>Zero Booking Fees</span>
            <span>·</span>
            <span>Verified Travel Protection</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
