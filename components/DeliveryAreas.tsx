import { MapPin, Check, Phone } from 'lucide-react';

const deliveryAreas = [
  { area: "Sector 57", available: true },
  { area: "Sector 56", available: true },
  { area: "Sector 58", available: true },
  { area: "Sector 55", available: true },
  { area: "Sector 59", available: true },
  { area: "Sector 54", available: true },
  { area: "Sector 60", available: true },
  { area: "BESTECH Square Mall Area", available: true },
  { area: "DLF Phase 4 (nearby)", available: true },
  { area: "Sushant Lok 2 (nearby)", available: true },
  { area: "Other areas", available: false, note: "Call to check" }
];

export default function DeliveryAreas() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4" />
              DELIVERY SERVICE
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              We Deliver To Your Area
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fast and convenient home delivery service across Sector 57 and nearby areas
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: Delivery Areas List */}
            <div className="bg-gradient-to-br from-primary-50 to-green-50 rounded-3xl p-8 border-2 border-primary-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary-600" />
                Delivery Coverage Areas
              </h3>

              <div className="space-y-3">
                {deliveryAreas.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      {item.available ? (
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                      )}
                      <span className="font-semibold text-gray-900">{item.area}</span>
                    </div>
                    {item.note && (
                      <span className="text-sm text-yellow-700 font-medium bg-yellow-100 px-3 py-1 rounded-full">
                        {item.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-900">
                  <strong>Note:</strong> Delivery availability and charges may vary by location.
                  Call us for exact details about your area.
                </p>
              </div>
            </div>

            {/* Right: How Delivery Works */}
            <div>
              <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  How Home Delivery Works
                </h3>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Place Your Order</h4>
                      <p className="text-gray-600">
                        Send your grocery list via WhatsApp (9811339376) or call us at 9811339376 / 9625783541
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Order Confirmation</h4>
                      <p className="text-gray-600">
                        We'll confirm availability, prices, and delivery time. You can pay online or cash on delivery.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Fast Delivery</h4>
                      <p className="text-gray-600">
                        Your order will be carefully packed and delivered to your doorstep within the agreed time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Features */}
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Delivery Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span>Same-day delivery available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span>Careful handling of fragile items</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span>Fresh products guaranteed</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span>Multiple payment options</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span>Friendly delivery service</span>
                  </li>
                </ul>

                <a
                  href="https://wa.me/919811339376?text=Hello!%20I%20would%20like%20to%20place%20a%20delivery%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg w-full"
                >
                  Order for Delivery Now
                </a>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center bg-gray-100 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Not Sure If We Deliver To Your Area?
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Give us a call and we'll be happy to check!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919811339376"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all duration-300"
              >
                📞 9811339376
              </a>
              <a
                href="tel:+919625783541"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all duration-300"
              >
                📞 9625783541
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
