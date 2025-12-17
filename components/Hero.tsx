import { ShoppingCart, Phone, Store, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = "919811339376";
  const whatsappMessage = encodeURIComponent("Hello! I would like to place an order for groceries from KIOSK Mega Mart.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      {/* Top Bar - Fully Responsive */}
      <div className="bg-primary-700 text-white py-3 px-3 sm:px-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
              <div className="flex items-center gap-1 whitespace-nowrap">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-center">Open: 10 AM - 10 PM</span>
              </div>
              <div className="flex items-center gap-1 whitespace-nowrap">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-center">Sector 57, Gurugram</span>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="tel:+919811339376" className="hover:text-primary-200 transition-colors whitespace-nowrap">
                📞 9811339376
              </a>
              <a href="tel:+919625783541" className="hover:text-primary-200 transition-colors whitespace-nowrap hidden sm:inline">
                📞 9625783541
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Section - iPhone Optimized */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-green-50 min-h-[80vh] sm:min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        {/* Decorative Elements - Hidden on mobile for performance */}
        <div className="hidden sm:block absolute top-20 right-10 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-20 left-10 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10 w-full">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content - Mobile Optimized */}
              <div className="text-center lg:text-left w-full">
                {/* Store Icon Badge */}
                <div className="inline-flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-lg mb-4 sm:mb-6 border-2 border-primary-100">
                  <Store className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                  <span className="text-xs sm:text-sm font-semibold text-primary-700">Your Neighbourhood Store</span>
                </div>

                {/* Brand Name - Responsive Sizing */}
                <div className="mb-4 sm:mb-6">
                  <div className="inline-block w-full">
                    <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black mb-1 sm:mb-2 relative leading-tight">
                      <span className="bg-gradient-to-r from-primary-600 via-green-600 to-emerald-600 bg-clip-text text-transparent drop-shadow-sm">
                        KIOSK
                      </span>
                    </h1>
                    <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black relative leading-tight">
                      <span className="bg-gradient-to-r from-green-600 via-primary-600 to-green-700 bg-clip-text text-transparent drop-shadow-sm">
                        Mega Mart
                      </span>
                    </h1>
                    <div className="h-1.5 sm:h-2 bg-gradient-to-r from-primary-500 to-green-500 rounded-full mt-2 shadow-lg max-w-full"></div>
                  </div>
                </div>

                {/* Tagline - Mobile Optimized */}
                <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight px-2 sm:px-0">
                  Fresh Groceries & Everyday Essentials
                  <span className="block text-primary-600 mt-1 sm:mt-2">Delivered to Your Doorstep</span>
                </h2>

                {/* Subheading - Shorter on mobile */}
                <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
                  Your trusted neighbourhood store offering premium quality products at affordable prices.
                </p>

                {/* Key Features - Responsive Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                  <div className="bg-white p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-md border border-primary-100">
                    <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">🥬</div>
                    <div className="font-semibold text-gray-800 text-xs sm:text-base">Fresh Daily</div>
                    <div className="text-xs sm:text-sm text-gray-600 hidden sm:block">Morning stock</div>
                  </div>
                  <div className="bg-white p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-md border border-primary-100">
                    <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">💯</div>
                    <div className="font-semibold text-gray-800 text-xs sm:text-base">Quality</div>
                    <div className="text-xs sm:text-sm text-gray-600 hidden sm:block">Genuine products</div>
                  </div>
                  <div className="bg-white p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-md border border-primary-100">
                    <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">⚡</div>
                    <div className="font-semibold text-gray-800 text-xs sm:text-base">Quick</div>
                    <div className="text-xs sm:text-sm text-gray-600 hidden sm:block">Same day</div>
                  </div>
                </div>

                {/* CTA Buttons - Mobile Optimized */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start max-w-lg mx-auto lg:mx-0">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-primary-600 to-green-600 text-white px-6 sm:px-8 py-3.5 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:from-primary-700 hover:to-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 overflow-hidden w-full sm:w-auto"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <ShoppingCart className="w-5 h-5 sm:w-7 sm:h-7" />
                    <span>Order on WhatsApp</span>
                  </a>

                  <a
                    href="tel:+919811339376"
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-primary-700 px-6 sm:px-8 py-3.5 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg border-2 sm:border-3 border-primary-600 hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
                  >
                    <Phone className="w-5 h-5 sm:w-7 sm:h-7" />
                    <span>Call Us Now</span>
                  </a>
                </div>
              </div>

              {/* Right Content - Visual Elements (Desktop Only) */}
              <div className="hidden lg:block relative">
                <div className="relative">
                  {/* Large Product Grid Illustration */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                      <div className="text-6xl mb-3">🥬</div>
                      <div className="font-bold text-gray-800">Fresh Vegetables</div>
                      <div className="text-sm text-gray-600">Daily arrivals</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300 mt-8">
                      <div className="text-6xl mb-3">🥛</div>
                      <div className="font-bold text-gray-800">Dairy Products</div>
                      <div className="text-sm text-gray-600">Farm fresh</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                      <div className="text-6xl mb-3">🍎</div>
                      <div className="font-bold text-gray-800">Fresh Fruits</div>
                      <div className="text-sm text-gray-600">Handpicked</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300 mt-8">
                      <div className="text-6xl mb-3">🛒</div>
                      <div className="font-bold text-gray-800">Groceries</div>
                      <div className="text-sm text-gray-600">1000+ items</div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full shadow-2xl transform rotate-12 animate-bounce">
                    <div className="font-bold text-lg">10+ Years</div>
                    <div className="text-xs">Trusted Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Mobile Optimized */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 sm:py-6">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-4 sm:gap-8 text-center">
            <div className="flex-1 min-w-0">
              <div className="text-2xl sm:text-3xl font-bold text-primary-400">10+</div>
              <div className="text-xs sm:text-sm text-gray-300">Years Service</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
            <div className="flex-1 min-w-0">
              <div className="text-2xl sm:text-3xl font-bold text-primary-400">1000+</div>
              <div className="text-xs sm:text-sm text-gray-300">Products</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
            <div className="flex-1 min-w-0">
              <div className="text-2xl sm:text-3xl font-bold text-primary-400">5000+</div>
              <div className="text-xs sm:text-sm text-gray-300">Customers</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
            <div className="flex-1 min-w-0">
              <div className="text-2xl sm:text-3xl font-bold text-primary-400">100%</div>
              <div className="text-xs sm:text-sm text-gray-300">Quality</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
