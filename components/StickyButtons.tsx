'use client';

import { MessageCircle, Phone } from 'lucide-react';

export default function StickyButtons() {
  const whatsappNumber = "919811339376";
  const whatsappMessage = encodeURIComponent("Hello! I would like to place an order for groceries.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 sm:hidden">
      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-16 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919811339376"
        className="w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
        aria-label="Call us"
      >
        <Phone className="w-7 h-7 text-white" />
        <span className="absolute right-16 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Call
        </span>
      </a>
    </div>
  );
}
