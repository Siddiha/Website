import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  Clock, 
  MapPin, 
  Mail, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { buildWhatsAppUrl, formatGeneralInquiryMessage } from '../utils/whatsapp';

interface GeneralContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsAppNumber: string;
  agencyName: string;
}

export const GeneralContactModal: React.FC<GeneralContactModalProps> = ({
  isOpen,
  onClose,
  whatsAppNumber,
  agencyName,
}) => {
  if (!isOpen) return null;

  const [userName, setUserName] = useState('');
  const [inquiryTopic, setInquiryTopic] = useState('Vacation Package Inquiry');
  const [customNote, setCustomNote] = useState('');

  const quickTopics = [
    'Vacation Package Inquiry',
    'Custom Honeymoon Design',
    'Family Holiday Planning',
    'Flight & Hotel Reservation',
    'Visa & Entry Regulations',
    'Emergency Traveling Support',
  ];

  const buildCustomContactMessage = () => {
    const nameStr = userName.trim() ? `👤 From: ${userName.trim()}\n` : '';
    const noteStr = customNote.trim() ? `\n📝 Message:\n"${customNote.trim()}"` : '';

    return `*DIRECT CONTACT INQUIRY* — ${agencyName}
──────────────────────────
${nameStr}📌 *Topic:* ${inquiryTopic}${noteStr}
──────────────────────────
Hello ${agencyName} team! I'm reaching out through your website contact desk and would like to speak with an advisor.`;
  };

  const finalWaUrl = buildWhatsAppUrl(whatsAppNumber, buildCustomContactMessage());
  const instantWaUrl = buildWhatsAppUrl(whatsAppNumber, formatGeneralInquiryMessage(agencyName));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-neutral-900 text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-1">
            Direct Concierge Desk
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Connect with {agencyName}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1">
            We respond directly on WhatsApp for instantaneous assistance and transparent quotes.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 space-y-6">
          {/* Direct One-Click WhatsApp Action */}
          <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50/50 border border-emerald-300 rounded-2xl p-4.5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center shrink-0 shadow-xs">
                <MessageCircle className="w-5 h-5 fill-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-neutral-900">Sri Lanka Direct WhatsApp Line</div>
                <div className="text-sm text-emerald-800 font-mono font-bold">077 194 7844 <span className="text-neutral-500 font-normal text-xs">(+94 77 194 7844)</span></div>
              </div>
            </div>

            <a
              href={instantWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shrink-0 shadow-sm cursor-pointer"
            >
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Quick Pre-filled Inquiry Builder */}
          <div className="space-y-4 pt-1">
            <div className="text-xs font-bold uppercase tracking-wider text-neutral-600">
              Or Customize Your Message Before Launching:
            </div>

            <div>
              <label className="text-xs font-semibold text-neutral-700 block mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. Jessica Taylor"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full text-xs sm:text-sm px-3.5 py-2 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                What are you inquiring about?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {quickTopics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setInquiryTopic(topic)}
                    className={`px-3 py-2 text-xs rounded-lg text-left truncate transition-colors cursor-pointer ${
                      inquiryTopic === topic
                        ? 'bg-neutral-900 text-white font-medium'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-neutral-700 block mb-1">
                Your Question or Details (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Write any questions or destination ideas..."
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                className="w-full text-xs sm:text-sm px-3.5 py-2 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-emerald-600"
              />
            </div>

            <a
              href={finalWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-colors cursor-pointer shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Send Inquiry via WhatsApp</span>
            </a>
          </div>

          {/* Agency Hours & Trust Guarantee */}
          <div className="border-t border-neutral-200 pt-4 grid grid-cols-2 gap-4 text-xs text-neutral-500">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Response: ~10 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Confidential & No Spam</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
