import { MessageCircle, ClipboardList, ShoppingBag, ShoppingCart } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    number: "1",
    title: "Message or Call Us",
    description: "Contact us on WhatsApp or phone",
    contacts: ["9811339376", "9625783541"],
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: ClipboardList,
    number: "2",
    title: "Share Your Grocery List",
    description: "Send your required items via WhatsApp or tell us over a call",
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: ShoppingBag,
    number: "3",
    title: "Get Fresh Groceries",
    description: "We prepare your order with care and ensure fresh, reliable products",
    color: "from-green-400 to-green-600"
  }
];

export default function HowToOrder() {
  const whatsappNumber = "919811339376";
  const whatsappMessage = encodeURIComponent("Hello! I would like to place an order for groceries.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How to Order
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Ordering from KIOSK Mega Mart is quick and hassle-free.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connector Line (hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-1/2 w-full h-1 bg-gradient-to-r from-primary-300 to-primary-400 z-0"></div>
                  )}

                  {/* Card */}
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 z-10">
                    {/* Number Badge */}
                    <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mx-auto`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>

                    {/* Contact Numbers (for first step only) */}
                    {step.contacts && (
                      <div className="mt-4 space-y-2">
                        {step.contacts.map((contact, idx) => (
                          <a
                            key={idx}
                            href={`tel:+91${contact}`}
                            className="block text-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                          >
                            {contact}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <ShoppingCart className="w-6 h-6" />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
