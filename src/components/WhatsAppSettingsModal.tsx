import React, { useState } from 'react';
import { X, MessageCircle, Save, RotateCcw, Check, ExternalLink, HelpCircle } from 'lucide-react';
import { 
  DEFAULT_WHATSAPP_NUMBER, 
  DEFAULT_AGENCY_NAME, 
  cleanPhoneNumber, 
  buildWhatsAppUrl 
} from '../utils/whatsapp';

interface WhatsAppSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentNumber: string;
  currentAgencyName: string;
  onSave: (newNumber: string, newAgencyName: string) => void;
}

export const WhatsAppSettingsModal: React.FC<WhatsAppSettingsModalProps> = ({
  isOpen,
  onClose,
  currentNumber,
  currentAgencyName,
  onSave,
}) => {
  if (!isOpen) return null;

  const [phoneInput, setPhoneInput] = useState(currentNumber);
  const [agencyInput, setAgencyInput] = useState(currentAgencyName);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const cleaned = cleanPhoneNumber(phoneInput);
  const testUrl = buildWhatsAppUrl(
    cleaned,
    `Hello ${agencyInput || DEFAULT_AGENCY_NAME}! This is a test message from my website to verify my WhatsApp inquiries work.`
  );

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneInput.trim()) return;
    onSave(phoneInput.trim(), agencyInput.trim() || DEFAULT_AGENCY_NAME);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleResetDefaults = () => {
    setPhoneInput(DEFAULT_WHATSAPP_NUMBER);
    setAgencyInput(DEFAULT_AGENCY_NAME);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-neutral-100 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
              <MessageCircle className="w-5 h-5 fill-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900">WhatsApp Settings</h3>
              <p className="text-xs text-neutral-500">Configure your inquiry receiver</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-neutral-700 p-1 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="p-6 space-y-5">
          <div>
            <label className="text-xs font-semibold text-neutral-700 block mb-1">
              Agency Business Name
            </label>
            <input
              type="text"
              value={agencyInput}
              onChange={(e) => setAgencyInput(e.target.value)}
              placeholder="e.g. Aura Voyages"
              className="w-full text-xs sm:text-sm px-3.5 py-2.5 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-emerald-600 font-medium"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-neutral-700 block">
                Your WhatsApp Phone Number
              </label>
              <span className="text-3xs text-emerald-700 font-mono font-semibold">Sri Lanka: 0771947844 / +94 77 194 7844</span>
            </div>
            <input
              type="text"
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
              placeholder="e.g. 0771947844 or +94771947844"
              className="w-full text-xs sm:text-sm px-3.5 py-2.5 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-emerald-600 font-mono"
            />
            <p className="text-3xs text-neutral-500 mt-1.5 leading-relaxed">
              Default is Sri Lanka <strong>0771947844</strong> (automatically connects to <code>wa.me/94771947844</code>). You can also enter international formats.
            </p>
          </div>

          {/* Test Link Preview */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3.5 space-y-2">
            <div className="text-xs font-semibold text-emerald-900 flex items-center justify-between">
              <span>Test Redirect Link:</span>
              <a
                href={testUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:text-emerald-800 underline inline-flex items-center gap-1 font-mono text-3xs"
              >
                <span>Test Link Live</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="text-3xs font-mono text-neutral-600 break-all bg-white p-2 rounded border border-emerald-100">
              wa.me/{cleaned || 'number'}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={handleResetDefaults}
              className="text-xs text-neutral-500 hover:text-neutral-800 flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Default</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={savedSuccess}
                className="px-5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Save Number</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
