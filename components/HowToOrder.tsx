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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-green-600 text-white px-10 py-5 rounded-full font-black text-lg hover:from-primary-700 hover:to-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
              >
                <ShoppingCart className="w-6 h-6" strokeWidth={3} />
                Order on WhatsApp
              </a>

              <a
                href="tel:+919811339376"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-primary-600 px-10 py-5 rounded-full font-black text-lg border-3 border-primary-600 hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{ borderWidth: '3px' }}
              >
                <Phone className="w-6 h-6" strokeWidth={3} />
                Call Us Now
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
