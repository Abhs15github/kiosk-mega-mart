import { ShoppingCart, Phone, Store, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = "919811339376";
  const whatsappMessage = encodeURIComponent("Hello! I would like to place an order for groceries from KIOSK Mega Mart.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-700 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Open Daily: 10:00 AM - 10:00 PM</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Sector 57, Gurugram</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+919811339376" className="hover:text-primary-200 transition-colors">
              📞 9811339376
            </a>
            <a href="tel:+919625783541" className="hover:text-primary-200 transition-colors">
              📞 9625783541
            </a>
          </div>
        </div>
      </div>

      {/* Main Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-green-50 min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                {/* Store Icon Badge */}
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg mb-6 border-2 border-primary-100">
                  <Store className="w-5 h-5 text-primary-600" />
                  <span className="text-sm font-semibold text-primary-700">Your Neighbourhood Store</span>
                </div>

                {/* Brand Name - BIG & HIGHLIGHTED */}
                <div className="mb-6">
                  <div className="inline-block">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-2 relative">
                      <span className="bg-gradient-to-r from-primary-600 via-green-600 to-emerald-600 bg-clip-text text-transparent drop-shadow-sm">
                        KIOSK
                      </span>
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black relative">
                      <span className="bg-gradient-to-r from-green-600 via-primary-600 to-green-700 bg-clip-text text-transparent drop-shadow-sm">
                        Mega Mart
                      </span>
                    </h1>
                    <div className="h-2 bg-gradient-to-r from-primary-500 to-green-500 rounded-full mt-2 shadow-lg"></div>
                  </div>
                </div>

                {/* Tagline */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                  Fresh Groceries & Everyday Essentials
                  <span className="block text-primary-600 mt-2">Delivered to Your Doorstep</span>
                </h2>

                {/* Subheading */}
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Your trusted neighbourhood departmental store offering premium quality products at affordable prices. From fresh produce to daily essentials, we have everything your family needs.
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-xl shadow-md border border-primary-100">
                    <div className="text-3xl mb-2">🥬</div>
                    <div className="font-semibold text-gray-800">Fresh Daily</div>
                    <div className="text-sm text-gray-600">Morning stock</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md border border-primary-100">
                    <div className="text-3xl mb-2">💯</div>
                    <div className="font-semibold text-gray-800">Quality Assured</div>
                    <div className="text-sm text-gray-600">Genuine products</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md border border-primary-100">
                    <div className="text-3xl mb-2">⚡</div>
                    <div className="font-semibold text-gray-800">Quick Delivery</div>
                    <div className="text-sm text-gray-600">Same day service</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-green-600 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:from-primary-700 hover:to-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <ShoppingCart className="w-7 h-7" />
                    <span>Order on WhatsApp</span>
                  </a>

                  <a
                    href="tel:+919811339376"
                    className="inline-flex items-center justify-center gap-3 bg-white text-primary-700 px-8 py-5 rounded-2xl font-bold text-lg border-3 border-primary-600 hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Phone className="w-7 h-7" />
                    <span>Call Us Now</span>
                  </a>
                </div>
              </div>

              {/* Right Content - Visual Elements */}
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

      {/* Trust Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-400">10+</div>
              <div className="text-sm text-gray-300">Years of Service</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
            <div>
              <div className="text-3xl font-bold text-primary-400">1000+</div>
              <div className="text-sm text-gray-300">Products Available</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
            <div>
              <div className="text-3xl font-bold text-primary-400">5000+</div>
              <div className="text-sm text-gray-300">Happy Customers</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
            <div>
              <div className="text-3xl font-bold text-primary-400">100%</div>
              <div className="text-sm text-gray-300">Quality Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
