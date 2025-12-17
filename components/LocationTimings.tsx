import { MapPin, Clock, Phone } from 'lucide-react';

export default function LocationTimings() {
  const address = "Shop No. 10, BESTECH Square Mall, LG 9-10-11, Sector 57, Gurugram";
  const googleMapsLink = "https://www.google.com/maps/search/?api=1&query=BESTECH+Square+Mall+Sector+57+Gurugram";

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Find Us Here
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Visit our store in Sector 57, Gurugram, or contact us to place your order.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.2911842345726!2d77.09245631508026!3d28.42155298249253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229b8a06c5b3%3A0x5c9c3e1b7e8c6c4d!2sBestech%20Square%20Mall!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              {/* Address Card */}
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 border border-primary-100 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Address</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">{address}</p>
                    <a
                      href={googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>

              {/* Store Timings Card */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Store Timings</h3>
                    <div className="text-gray-700">
                      <p className="text-lg font-medium">10:00 AM – 10:00 PM</p>
                      <p className="text-sm text-gray-600 mt-1">Open Daily (All 7 Days)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Numbers Card */}
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-100 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Numbers</h3>
                    <div className="space-y-2">
                      <a
                        href="tel:+919811339376"
                        className="block text-lg font-medium text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        9811339376
                      </a>
                      <a
                        href="tel:+919625783541"
                        className="block text-lg font-medium text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        9625783541
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
