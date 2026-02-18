import { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/utils';
import { getWhatsAppLink } from '@/lib/emailService';

const PRESET_MESSAGES = [
  'Hello! I would like to inquire about your agricultural commodities services.',
  'I am interested in importing cocoa beans. Can you provide more information?',
  'I would like to discuss agricultural investment opportunities.',
  'I need financing options for my farm. Please help.',
];

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showWidget, setShowWidget] = useState(false);

  // Show widget after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowWidget(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSend = () => {
    const link = getWhatsAppLink(message || undefined);
    window.open(link, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  const handlePresetClick = (preset: string) => {
    const link = getWhatsAppLink(preset);
    window.open(link, '_blank');
    setIsOpen(false);
  };

  if (!showWidget) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up border border-gray-100">
          {/* Header */}
          <div className="bg-[#25D366] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">WhatsApp Chat</p>
                <p className="text-white/80 text-xs">Typically replies in minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-gray-50">
            <p className="text-gray-600 text-sm mb-4">
              Hi there! 👋 How can we help you today?
            </p>

            {/* Preset Messages */}
            <div className="space-y-2 mb-4">
              <p className="text-xs text-gray-500 font-medium">QUICK OPTIONS:</p>
              {PRESET_MESSAGES.map((preset, index) => (
                <button
                  key={index}
                  onClick={() => handlePresetClick(preset)}
                  className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all text-sm text-gray-700"
                >
                  {preset}
                </button>
              ))}
            </div>

            {/* Custom Message */}
            <div className="relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Or type your message..."
                className="w-full p-3 pr-12 bg-white border border-gray-200 rounded-lg resize-none focus:outline-none focus:border-[#25D366] text-sm"
                rows={3}
              />
              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className="absolute bottom-3 right-3 w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#128C7E] transition-colors"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="p-3 bg-gray-100 text-center">
            <a
              href={`tel:${COMPANY_INFO.phones[0].replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#25D366] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Prefer to call? {COMPANY_INFO.phones[0]}
            </a>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? 'bg-gray-600 hover:bg-gray-700'
            : 'bg-[#25D366] hover:bg-[#128C7E] hover:scale-110'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open WhatsApp chat'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </button>

      {/* Notification Badge */}
      {!isOpen && (
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
      )}
    </div>
  );
}
