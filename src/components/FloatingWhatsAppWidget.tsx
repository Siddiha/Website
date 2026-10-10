import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Sparkles, Send } from 'lucide-react';
import { buildWhatsAppUrl, formatGeneralInquiryMessage } from '../utils/whatsapp';

interface FloatingWhatsAppWidgetProps {
  whatsAppNumber: string;
  agencyName: string;
  onOpenCustomPlanner: () => void;
  onOpenGeneralInquiry: () => void;
}

export const FloatingWhatsAppWidget: React.FC<FloatingWhatsAppWidgetProps> = ({
  whatsAppNumber,
  agencyName,
  onOpenCustomPlanner,
  onOpenGeneralInquiry,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const directChatUrl = buildWhatsAppUrl(
    whatsAppNumber,
    formatGeneralInquiryMessage(agencyName)
  );

  const quickMessages = [
    {
      title: 'Turkey Packages (Cappadocia & Istanbul)',
      subtitle: 'Hot air balloon & cave suites quote',
      msg: `Hi ${agencyName}! I'm interested in booking a luxury Turkey & Cappadocia holiday package.`
    },
    {
      title: 'Thailand Luxury Escapes (Phuket & Bangkok)',
      subtitle: 'Phi Phi islands & luxury pool villas',
      msg: `Hi ${agencyName}! Please share your current Thailand tour packages and flight quotes.`
    },
    {
      title: 'Sri Lanka Inbound Wonders (Sigiriya & Yala)',
      subtitle: 'Private chauffeur, tea hills & safari',
      msg: `Hi ${agencyName}! I would like to inquire about a luxury Sri Lanka tour package with private guide.`
    }
  ];

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white border border-neutral-200 rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 fill-white" />
              </div>
              <div>
                <div className="text-sm font-bold leading-tight">{agencyName} Concierge</div>
                <div className="text-3xs text-emerald-100 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 inline-block"></span>
                  <span>Online · Replies in minutes</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-white/80 hover:text-white rounded-md cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-3 bg-neutral-50/50">
            <p className="text-xs text-neutral-600 leading-relaxed">
              Hello! 👋 How can our travel specialists assist your trip planning today?
            </p>

            <div className="space-y-2">
              {quickMessages.map((item, i) => {
                const url = buildWhatsAppUrl(whatsAppNumber, item.msg);
                return (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-2.5 bg-white border border-neutral-200 rounded-xl hover:border-emerald-600 hover:bg-emerald-50/30 transition-all text-left group cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-neutral-800 group-hover:text-emerald-700">
                        {item.title}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-700 transition-transform group-hover:translate-x-0.5" />
                    </div>
                    <span className="text-3xs text-neutral-500 block mt-0.5">
                      {item.subtitle}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="pt-2 border-t border-neutral-200 flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenCustomPlanner();
                }}
                className="text-xs text-neutral-600 hover:text-neutral-900 font-medium cursor-pointer"
              >
                Custom Planner
              </button>

              <a
                href={directChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors"
              >
                <Send className="w-3 h-3" />
                <span>Start Chat</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all cursor-pointer group scale-100 active:scale-95 border border-amber-400/40"
        aria-label="Toggle WhatsApp chat menu"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="text-xs sm:text-sm font-bold tracking-tight pr-1">
          WhatsApp: 077 194 7844
        </span>
      </button>
    </div>
  );
};
