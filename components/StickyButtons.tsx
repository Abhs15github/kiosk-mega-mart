'use client';

import { MessageCircle, Phone } from 'lucide-react';

export default function StickyButtons() {
  const whatsappNumber = "919811339376";
  const whatsappMessage = encodeURIComponent("Hello! I would like to place an order for groceries from KIOSK Mega Mart.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 md:hidden">
      {/* WhatsApp Button - Optimized for mobile */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 xs:w-16 xs:h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-2xl hover:shadow-3xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 xs:w-8 xs:h-8 text-white" />
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs xs:text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
          Order on WhatsApp
        </span>
      </a>

      {/* Call Button - Optimized for mobile */}
      <a
        href="tel:+919811339376"
        className="w-14 h-14 xs:w-16 xs:h-16 bg-gradient-to-br from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 rounded-full shadow-2xl hover:shadow-3xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group"
        aria-label="Call us now"
      >
        <Phone className="w-7 h-7 xs:w-8 xs:h-8 text-white" />
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs xs:text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
          Call Now
        </span>
      </a>
    </div>
  );
}
