import React from 'react';
import { MessageCircle, Settings, Compass, PhoneCall } from 'lucide-react';
import { buildWhatsAppUrl, formatGeneralInquiryMessage } from '../utils/whatsapp';

interface NavbarProps {
  currentTab: 'intro' | 'packages' | 'planner';
  setCurrentTab: (tab: 'intro' | 'packages' | 'planner') => void;
  whatsAppNumber: string;
  agencyName: string;
  onOpenSettings: () => void;
  onOpenGeneralInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  whatsAppNumber,
  agencyName,
  onOpenSettings,
  onOpenGeneralInquiry,
}) => {
  const generalWaUrl = buildWhatsAppUrl(
    whatsAppNumber,
    formatGeneralInquiryMessage(agencyName)
  );

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-xs">
      {/* Top micro announcement bar with vibrant luxury styling */}
      <div className="bg-gradient-to-r from-neutral-950 via-emerald-950 to-neutral-950 text-white text-xs py-2 px-4 text-center border-b border-amber-500/20 shadow-xs flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
          <span className="text-amber-300 font-semibold tracking-wide uppercase text-3xs sm:text-xs">
            Sri Lanka's Luxury Travel Concierge
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-neutral-300 hidden sm:inline">WhatsApp Inquiries:</span>
          <a
            href={generalWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-bold text-amber-300 hover:text-amber-200 tracking-wider flex items-center gap-1.5 underline decoration-amber-500/50"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
            <span>077 194 7844</span>
            <span className="text-neutral-400 text-3xs font-sans">(+94 77 194 7844)</span>
          </a>
          <button
            onClick={onOpenSettings}
            className="ml-2 text-neutral-400 hover:text-white underline text-3xs cursor-pointer inline-flex items-center gap-1"
            title="Edit WhatsApp number"
          >
            <Settings className="w-3 h-3 inline" /> Edit
          </button>
        </div>
      </div>

      {/* Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (Nav links) — Zone 3 (Primary WhatsApp Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setCurrentTab('intro')}
            className="flex items-center gap-2.5 text-left cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 via-teal-600 to-amber-600 text-white flex items-center justify-center shadow-md shadow-emerald-950/20 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 text-amber-100" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 block leading-tight">
                {agencyName}
              </span>
              <span className="text-2xs text-amber-700 font-semibold uppercase tracking-wider">
                Sri Lanka & Global Luxury Tours
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <button
            onClick={() => setCurrentTab('intro')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              currentTab === 'intro'
                ? 'text-neutral-900 border-amber-500 font-bold'
                : 'border-transparent hover:text-neutral-900'
            }`}
          >
            Introduction
          </button>
          <button
            onClick={() => setCurrentTab('packages')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              currentTab === 'packages'
                ? 'text-neutral-900 border-amber-500 font-bold'
                : 'border-transparent hover:text-neutral-900'
            }`}
          >
            All Packages (Turkey, Thailand & More)
          </button>
          <button
            onClick={() => setCurrentTab('planner')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              currentTab === 'planner'
                ? 'text-neutral-900 border-amber-500 font-bold'
                : 'border-transparent hover:text-neutral-900'
            }`}
          >
            Custom Trip Planner
          </button>
          <button
            onClick={onOpenGeneralInquiry}
            className="whitespace-nowrap shrink-0 hover:text-emerald-700 font-medium transition-colors cursor-pointer text-neutral-700"
          >
            Contact WhatsApp
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action (Direct WhatsApp Redirection) */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={generalWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 rounded-xl transition-all shadow-md shadow-emerald-900/20 whitespace-nowrap shrink-0 cursor-pointer border border-emerald-400/30"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp (077 194 7844)</span>
          </a>

          {/* Quick Settings Gear */}
          <button
            onClick={onOpenSettings}
            className="p-2 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
            title="Configure Agency WhatsApp Number"
            aria-label="Settings"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile nav bar row for easy switching */}
      <div className="flex md:hidden border-t border-neutral-100 bg-neutral-50 px-3 py-2 gap-1 overflow-x-auto text-xs font-medium">
        <button
          onClick={() => setCurrentTab('intro')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap cursor-pointer ${
            currentTab === 'intro' ? 'bg-white text-neutral-900 shadow-xs font-semibold' : 'text-neutral-600'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setCurrentTab('packages')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap cursor-pointer ${
            currentTab === 'packages' ? 'bg-white text-neutral-900 shadow-xs font-semibold' : 'text-neutral-600'
          }`}
        >
          All Packages
        </button>
        <button
          onClick={() => setCurrentTab('planner')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap cursor-pointer ${
            currentTab === 'planner' ? 'bg-white text-neutral-900 shadow-xs font-semibold' : 'text-neutral-600'
          }`}
        >
          Plan My Trip
        </button>
        <button
          onClick={onOpenGeneralInquiry}
          className="px-3 py-1.5 rounded-md whitespace-nowrap text-emerald-700 bg-emerald-50 cursor-pointer"
        >
          Contact Concierge
        </button>
      </div>
    </header>
  );
};
