import { MessageCircle, ClipboardList, ShoppingBag, ShoppingCart, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    number: "1",
    title: "Message or Call Us",
    description: "Contact us on WhatsApp or phone to start your order",
    detailedDescription: "Reach out to us anytime during store hours. Our friendly team is ready to help!",
    contacts: ["9811339376", "9625783541"],
    color: "from-primary-500 to-primary-600",
    lightColor: "from-primary-100 to-primary-200"
  },
  {
    icon: ClipboardList,
    number: "2",
    title: "Share Your Grocery List",
    description: "Send your required items via WhatsApp or tell us over a call",
    detailedDescription: "Simply share what you need - we'll take care of the rest and confirm availability.",
    color: "from-primary-500 to-primary-600",
    lightColor: "from-primary-100 to-primary-200"
  },
  {
    icon: ShoppingBag,
    number: "3",
    title: "Get Fresh Groceries",
    description: "We prepare your order with care and ensure fresh, reliable products",
    detailedDescription: "Your groceries are handpicked, packed with care, and ready for delivery or pickup!",
    color: "from-primary-500 to-primary-600",
    lightColor: "from-primary-100 to-primary-200"
  }
];

const benefits = [
  "No minimum order value",
  "Same-day delivery available",
  "Fresh products guaranteed",
  "Hassle-free ordering"
];

export default function HowToOrder() {
  const whatsappNumber = "919811339376";
  const whatsappMessage = encodeURIComponent("Hello! I would like to place an order for groceries.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-white via-primary-50/30 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            SIMPLE & QUICK
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            How to Order
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ordering from <span className="text-primary-600 font-bold">KIOSK Mega Mart</span> is quick, easy, and hassle-free.
            <span className="block mt-2 text-base sm:text-lg text-gray-500">Just 3 simple steps to get fresh groceries!</span>
          </p>
        </div>

        {/* Steps with Enhanced Design */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
            {/* Connector Lines (Desktop Only) */}
            <div className="hidden md:block absolute top-24 left-0 right-0 px-32">
              <div className="flex items-center justify-between">
                <div className="flex-1 h-1 bg-gradient-to-r from-primary-300 via-primary-400 to-primary-300 relative">
                  <ArrowRight className="absolute -right-3 -top-3 w-7 h-7 text-primary-500" />
                </div>
                <div className="w-32"></div>
                <div className="flex-1 h-1 bg-gradient-to-r from-primary-300 via-primary-400 to-primary-300 relative">
                  <ArrowRight className="absolute -right-3 -top-3 w-7 h-7 text-primary-500" />
                </div>
              </div>
            </div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Card */}
                  <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-primary-100 hover:border-primary-300 z-10 h-full">
                    {/* Number Badge - Larger and More Prominent */}
                    <div className={`absolute -top-5 -right-5 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-2xl sm:text-3xl shadow-xl ring-4 ring-white transform rotate-6 hover:rotate-0 transition-transform duration-300`}>
                      {step.number}
                    </div>

                    {/* Icon - Larger with Light Background */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.lightColor} rounded-3xl blur-xl opacity-50`}></div>
                      <div className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto shadow-lg`}>
                        <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center leading-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed mb-2">
                      {step.description}
                    </p>

                    {/* Detailed Description */}
                    <p className="text-xs sm:text-sm text-primary-600 text-center leading-relaxed font-medium">
                      {step.detailedDescription}
                    </p>

                    {/* Contact Numbers (for first step only) */}
                    {step.contacts && (
                      <div className="mt-5 pt-5 border-t-2 border-primary-100 space-y-2">
                        <p className="text-xs text-gray-500 text-center mb-3 font-semibold">Call us now:</p>
                        {step.contacts.map((contact, idx) => (
                          <a
                            key={idx}
                            href={`tel:+91${contact}`}
                            className="flex items-center justify-center gap-2 text-center text-primary-600 font-bold text-base sm:text-lg hover:text-primary-700 transition-colors bg-primary-50 hover:bg-primary-100 rounded-xl py-2 px-4"
                          >
                            <Phone className="w-4 h-4" />
                            {contact}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <ArrowRight className="w-8 h-8 text-primary-500 transform rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Bar */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-primary-600 via-green-600 to-emerald-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-sm sm:text-base font-semibold leading-tight">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-3xl sm:rounded-[2rem] p-8 sm:p-10 shadow-2xl border-2 border-primary-200 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Ready to Order?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              Start ordering now and get fresh groceries delivered to your doorstep!
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-green-600 text-white px-8 sm:px-10 py-4 rounded-full font-bold text-base sm:text-lg hover:from-primary-700 hover:to-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
              >
                <ShoppingCart className="w-6 h-6" strokeWidth={2.5} />
                Order on WhatsApp
              </a>

              <a
                href="tel:+919811339376"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-primary-600 px-8 sm:px-10 py-4 rounded-full font-bold text-base sm:text-lg border-2 border-primary-600 hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="w-6 h-6" strokeWidth={2.5} />
                Call Us Now
              </a>
            </div>

            {/* Additional Info */}
            <p className="text-sm text-gray-500 mt-6">
              Available Mon-Sun: 8:00 AM - 11:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
