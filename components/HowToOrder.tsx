import { MessageCircle, ClipboardList, ShoppingBag, ShoppingCart, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    number: "1",
    title: "Message or Call Us",
    description: "Contact us on WhatsApp or phone to start your order",
    detailedDescription: "Reach out to us anytime during store hours. Our friendly team is ready to help!",
    contacts: ["9811339376", "9625783541"]
  },
  {
    icon: ClipboardList,
    number: "2",
    title: "Share Your Grocery List",
    description: "Send your required items via WhatsApp or tell us over a call",
    detailedDescription: "Simply share what you need - we'll take care of the rest and confirm availability."
  },
  {
    icon: ShoppingBag,
    number: "3",
    title: "Get Fresh Groceries",
    description: "We prepare your order with care and ensure fresh, reliable products",
    detailedDescription: "Your groceries are handpicked, packed with care, and ready for delivery or pickup!"
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
  const instagramLink = "https://www.instagram.com/_kiosk_store_?igsh=dmN0d3V6ajBobm5z";

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-primary-100 text-primary-700 px-5 py-2 rounded-full text-sm font-bold mb-5 tracking-wide">
            SIMPLE & QUICK
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-5">
            How to Order
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Ordering from <span className="text-primary-600 font-black">KIOSK Mega Mart</span> is quick, easy, and hassle-free.
          </p>
          <p className="text-base sm:text-lg text-gray-600 mt-3 font-medium">
            Just 3 simple steps to get fresh groceries!
          </p>
        </div>

        {/* Steps Grid */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Card */}
                  <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 h-full">
                    {/* Number Badge */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-xl">
                      <span className="text-white font-black text-3xl">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Icon className="w-12 h-12 text-white" strokeWidth={2.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4 text-center">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base lg:text-lg text-gray-700 text-center leading-relaxed mb-3 font-medium">
                      {step.description}
                    </p>

                    {/* Detailed Description */}
                    <p className="text-sm lg:text-base text-primary-600 text-center leading-relaxed font-semibold">
                      {step.detailedDescription}
                    </p>

                    {/* Contact Numbers (for first step only) */}
                    {step.contacts && (
                      <div className="mt-6 pt-6 border-t-2 border-gray-200 space-y-3">
                        <p className="text-sm text-gray-600 text-center mb-3 font-bold uppercase tracking-wide">
                          Call us now:
                        </p>
                        {step.contacts.map((contact, idx) => (
                          <a
                            key={idx}
                            href={`tel:+91${contact}`}
                            className="flex items-center justify-center gap-2 text-primary-600 font-black text-lg lg:text-xl hover:text-primary-700 transition-colors bg-primary-50 hover:bg-primary-100 rounded-2xl py-3 px-5"
                          >
                            <Phone className="w-5 h-5" strokeWidth={3} />
                            {contact}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Arrow Connector (Desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/3 -right-5 lg:-right-6 z-10">
                      <ArrowRight className="w-10 h-10 lg:w-12 lg:h-12 text-primary-500" strokeWidth={3} />
                    </div>
                  )}

                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-6">
                      <ArrowRight className="w-10 h-10 text-primary-500 transform rotate-90" strokeWidth={3} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Bar */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-primary-600 via-green-600 to-emerald-600 rounded-3xl p-8 lg:p-10 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-7 h-7 flex-shrink-0" strokeWidth={3} />
                  <span className="text-base lg:text-lg font-bold">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-white rounded-[2.5rem] p-10 lg:p-12 shadow-2xl border-2 border-primary-100">
            <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Ready to Order?
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 font-medium">
              Start ordering now and get fresh groceries delivered to your doorstep!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap items-center justify-center gap-4 sm:gap-5">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto sm:flex-1 md:flex-none inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-green-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg hover:from-primary-700 hover:to-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
              >
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={3} />
                Order on WhatsApp
              </a>

              <a
                href="tel:+919811339376"
                className="w-full sm:w-auto sm:flex-1 md:flex-none inline-flex items-center justify-center gap-3 bg-white text-primary-600 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg border-3 border-primary-600 hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{ borderWidth: '3px' }}
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={3} />
                Call Us Now
              </a>

              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto sm:flex-1 md:flex-none inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow on Instagram
              </a>
            </div>

            {/* Store Hours */}
            <p className="text-base text-gray-600 mt-8 font-bold">
              Available Mon-Sun: 8:00 AM - 11:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
