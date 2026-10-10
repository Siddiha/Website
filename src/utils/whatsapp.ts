import { TravelPackage, WhatsAppInquiryForm } from '../types/travel';

export const DEFAULT_WHATSAPP_NUMBER = '+94 77 194 7844';
export const DEFAULT_WHATSAPP_DIGITS = '94771947844';
export const DEFAULT_AGENCY_NAME = 'Ceylon Aura Travels & Tours';

const STORAGE_KEY_PHONE = 'ceylon_aura_whatsapp_phone_v2';
const STORAGE_KEY_AGENCY = 'ceylon_aura_agency_name_v2';

/**
 * Clean phone number for WhatsApp wa.me link (digits only, e.g. 94771947844)
 * Automatically converts local Sri Lankan 07... numbers (like 0771947844) to international format 94771947844
 */
export function cleanPhoneNumber(phone: string): string {
  if (!phone) return DEFAULT_WHATSAPP_DIGITS;
  let digits = phone.replace(/[^0-9]/g, '');
  // If user entered Sri Lankan local number starting with 0 (e.g. 0771947844, 10 digits)
  if (digits.startsWith('0') && digits.length === 10) {
    digits = '94' + digits.slice(1);
  }
  return digits || DEFAULT_WHATSAPP_DIGITS;
}

/**
 * Get current configured WhatsApp number
 */
export function getStoredWhatsAppNumber(): string {
  if (typeof window === 'undefined') return DEFAULT_WHATSAPP_NUMBER;
  const stored = localStorage.getItem(STORAGE_KEY_PHONE);
  return stored && stored.trim() ? stored.trim() : DEFAULT_WHATSAPP_NUMBER;
}

/**
 * Save new WhatsApp phone number
 */
export function saveStoredWhatsAppNumber(phone: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY_PHONE, phone);
}

/**
 * Get current agency name
 */
export function getStoredAgencyName(): string {
  if (typeof window === 'undefined') return DEFAULT_AGENCY_NAME;
  const stored = localStorage.getItem(STORAGE_KEY_AGENCY);
  return stored && stored.trim() ? stored.trim() : DEFAULT_AGENCY_NAME;
}

/**
 * Save new agency name
 */
export function saveStoredAgencyName(name: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY_AGENCY, name);
}

/**
 * Build standard WhatsApp redirection URL
 */
export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  const digitsOnly = cleanPhoneNumber(phoneNumber);
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${digitsOnly}?text=${encodedText}`;
}

/**
 * Generate formatted general contact inquiry
 */
export function formatGeneralInquiryMessage(agencyName = DEFAULT_AGENCY_NAME): string {
  return `Hello ${agencyName} Sri Lanka! 🌴✈️
I am visiting your website and would like to inquire about your travel packages (Sri Lanka tours & International holidays like Turkey, Thailand, Maldives, etc.).

Could a travel advisor please connect with me? Thank you!`;
}

/**
 * Generate formatted package inquiry message
 */
export function formatPackageInquiryMessage({
  packageItem,
  travelerName,
  travelersCount = 2,
  travelDate = 'Flexible / Upcoming Months',
  notes = '',
  agencyName = DEFAULT_AGENCY_NAME,
}: {
  packageItem: TravelPackage;
  travelerName?: string;
  travelersCount?: number;
  travelDate?: string;
  notes?: string;
  agencyName?: string;
}): string {
  const nameLine = travelerName?.trim() ? `👤 Traveler: ${travelerName.trim()}\n` : '';
  const notesLine = notes?.trim() ? `📝 Special Notes / Requests: ${notes.trim()}\n` : '';

  return `*TRAVEL PACKAGE INQUIRY* — ${agencyName}
──────────────────────────
📍 *Package:* ${packageItem.title}
🌍 *Destination:* ${packageItem.destination}, ${packageItem.country}
⏱️ *Duration:* ${packageItem.duration}
💰 *Est. Starting Rate:* $${packageItem.priceUSD.toLocaleString()} USD/person
${nameLine}👥 *Number of Travelers:* ${travelersCount} guest(s)
📅 *Preferred Travel Date / Season:* ${travelDate}
${notesLine}──────────────────────────
Ayubowan / Hello ${agencyName}! I'm interested in booking or getting a customized quote for this itinerary. Please share current availability and package details.`;
}

/**
 * Generate formatted custom trip planner inquiry
 */
export function formatCustomPlanInquiryMessage(
  data: WhatsAppInquiryForm,
  agencyName = DEFAULT_AGENCY_NAME
): string {
  const nameStr = data.travelerName.trim() || 'Valued Traveler';
  const destinationStr = data.destination.trim() || 'Open to recommendations';
  const notesStr = data.specialRequests.trim() ? `\n📝 *Special Wishes / Requests:*\n${data.specialRequests.trim()}` : '';

  return `*CUSTOM VACATION INQUIRY* — ${agencyName} (Sri Lanka)
──────────────────────────
👤 *Traveler Name:* ${nameStr}
📍 *Desired Destination:* ${destinationStr}
👥 *Number of Guests:* ${data.travelersCount} traveler(s)
📅 *Target Month / Dates:* ${data.targetMonth || 'Flexible'}
✨ *Trip Style:* ${data.tripStyle || 'Vibrant Luxury & Relaxation'}
💵 *Estimated Budget:* ${data.estimatedBudget || 'Flexible'}
${data.packageTitle ? `🏷️ *Referenced Package:* ${data.packageTitle}` : ''}${notesStr}
──────────────────────────
Ayubowan / Hello! Please craft a custom itinerary proposal and share flight/hotel packages with me on WhatsApp. Thank you!`;
}

