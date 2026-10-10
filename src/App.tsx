import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AgencyIntroduction } from './components/AgencyIntroduction';
import { PackagesSection } from './components/PackagesSection';
import { CustomTripPlanner } from './components/CustomTripPlanner';
import { PackageModal } from './components/PackageModal';
import { WhatsAppSettingsModal } from './components/WhatsAppSettingsModal';
import { GeneralContactModal } from './components/GeneralContactModal';
import { FloatingWhatsAppWidget } from './components/FloatingWhatsAppWidget';
import { Footer } from './components/Footer';
import { TravelPackage } from './types/travel';
import { 
  getStoredWhatsAppNumber, 
  saveStoredWhatsAppNumber, 
  getStoredAgencyName, 
  saveStoredAgencyName 
} from './utils/whatsapp';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'intro' | 'packages' | 'planner'>('intro');
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isGeneralInquiryOpen, setIsGeneralInquiryOpen] = useState<boolean>(false);

  const [whatsAppNumber, setWhatsAppNumber] = useState<string>(getStoredWhatsAppNumber());
  const [agencyName, setAgencyName] = useState<string>(getStoredAgencyName());

  useEffect(() => {
    // Scroll to top on tab change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const handleSaveSettings = (newNumber: string, newAgencyName: string) => {
    setWhatsAppNumber(newNumber);
    setAgencyName(newAgencyName);
    saveStoredWhatsAppNumber(newNumber);
    saveStoredAgencyName(newAgencyName);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        whatsAppNumber={whatsAppNumber}
        agencyName={agencyName}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenGeneralInquiry={() => setIsGeneralInquiryOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'intro' && (
          <>
            {/* Hero Section */}
            <HeroSection
              onExplorePackages={() => setCurrentTab('packages')}
              onOpenCustomPlanner={() => setCurrentTab('planner')}
              whatsAppNumber={whatsAppNumber}
              agencyName={agencyName}
            />

            {/* Introduction to the Business (Page 1) */}
            <AgencyIntroduction
              onSelectPackage={(pkg) => setSelectedPackage(pkg)}
              onExploreAllPackages={() => setCurrentTab('packages')}
              onOpenCustomPlanner={() => setCurrentTab('planner')}
              whatsAppNumber={whatsAppNumber}
              agencyName={agencyName}
            />
          </>
        )}

        {currentTab === 'packages' && (
          /* All Packages Catalog (Page 2) */
          <PackagesSection
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onOpenCustomPlanner={() => setCurrentTab('planner')}
            whatsAppNumber={whatsAppNumber}
            agencyName={agencyName}
          />
        )}

        {currentTab === 'planner' && (
          /* Custom Trip & WhatsApp Inquiry Builder */
          <CustomTripPlanner
            whatsAppNumber={whatsAppNumber}
            agencyName={agencyName}
            onExplorePackages={() => setCurrentTab('packages')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        whatsAppNumber={whatsAppNumber}
        agencyName={agencyName}
        onNavigateTab={(tab) => setCurrentTab(tab)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenGeneralInquiry={() => setIsGeneralInquiryOpen(true)}
      />

      {/* Floating WhatsApp Quick Action Widget */}
      <FloatingWhatsAppWidget
        whatsAppNumber={whatsAppNumber}
        agencyName={agencyName}
        onOpenCustomPlanner={() => setCurrentTab('planner')}
        onOpenGeneralInquiry={() => setIsGeneralInquiryOpen(true)}
      />

      {/* Detail & Itinerary Modal */}
      <PackageModal
        packageItem={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        whatsAppNumber={whatsAppNumber}
        agencyName={agencyName}
      />

      {/* WhatsApp Configuration Settings Modal */}
      <WhatsAppSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        currentNumber={whatsAppNumber}
        currentAgencyName={agencyName}
        onSave={handleSaveSettings}
      />

      {/* General Contact & WhatsApp Inquiry Modal */}
      <GeneralContactModal
        isOpen={isGeneralInquiryOpen}
        onClose={() => setIsGeneralInquiryOpen(false)}
        whatsAppNumber={whatsAppNumber}
        agencyName={agencyName}
      />
    </div>
  );
}
