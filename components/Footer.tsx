import { ShoppingCart, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const whatsappNumber = "919811339376";
  const whatsappMessage = encodeURIComponent("Hello! I would like to place an order for groceries.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-gray-900 text-white">
      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Everything you need is just a text away.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <ShoppingCart className="w-6 h-6" />
                Order on WhatsApp
              </a>

              <a
                href="tel:+919811339376"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Phone className="w-6 h-6" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary-400">KIOSK Mega Mart</h3>
              <p className="text-gray-400 leading-relaxed">
                Your trusted neighbourhood kiosk for everyday essentials, delivered with freshness and care.
              </p>
            </div>

            {/* Quick Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <a
                  href="tel:+919811339376"
                  className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  9811339376
                </a>
                <a
                  href="tel:+919625783541"
                  className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  9625783541
                </a>
              </div>
            </div>

            {/* Address */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Visit Us</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p>Shop No. 10, BESTECH Square Mall, LG 9-10-11, Sector 57, Gurugram</p>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <p>10:00 AM – 10:00 PM (Daily)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} KIOSK Mega Mart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
