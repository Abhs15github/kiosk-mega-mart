'use client';

import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What are your store timings?",
    answer: "We are open daily from 10:00 AM to 10:00 PM, seven days a week including all holidays. Whether it's early morning or late evening, we're here to serve you."
  },
  {
    question: "Do you deliver to home?",
    answer: "Yes! We offer home delivery for orders placed via WhatsApp or phone call. Simply send us your grocery list on WhatsApp at 9811339376 or call us at 9811339376 / 9625783541, and we'll prepare your order for delivery or pickup."
  },
  {
    question: "How fresh are your fruits and vegetables?",
    answer: "We receive fresh stock of fruits and vegetables every morning from local markets. All produce is handpicked for quality, ensuring maximum freshness and nutrition. We never sell yesterday's stock."
  },
  {
    question: "Do you have parking facilities?",
    answer: "Yes, we are located inside BESTECH Square Mall which has ample parking space. You can conveniently park and shop without any hassle."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including cash, UPI (Google Pay, PhonePe, Paytm), credit cards, and debit cards. We also accept digital wallets for your convenience."
  },
  {
    question: "Do you stock branded products only?",
    answer: "Yes, we stock only genuine products from trusted and reputed brands. We source all our products from authorized distributors to ensure 100% authenticity and quality."
  },
  {
    question: "Can I return or exchange products?",
    answer: "Yes, we have a customer-friendly return policy. If you find any manufacturing defect or quality issue, you can return or exchange the product with the original bill within a reasonable time frame."
  },
  {
    question: "Do you offer discounts or special deals?",
    answer: "Yes! We regularly offer competitive prices and special discounts on various products. We also have combo offers and seasonal discounts. Follow us or call to know about current offers."
  },
  {
    question: "How can I place an order on WhatsApp?",
    answer: "It's simple! Just send a message to 9811339376 with your grocery list. Our team will confirm the items and prices, prepare your order, and arrange for delivery or let you know when it's ready for pickup."
  },
  {
    question: "Do you have a minimum order value for delivery?",
    answer: "We try to accommodate all orders regardless of size. For delivery, there may be a nominal minimum order value depending on your location. Please call us at 9811339376 to confirm."
  },
  {
    question: "Which areas do you deliver to?",
    answer: "We primarily deliver to Sector 57 and nearby sectors in Gurugram including Sector 56, Sector 58, and surrounding areas. For delivery to other locations, please call us to check if we can serve your area."
  },
  {
    question: "Are your prices competitive with supermarkets?",
    answer: "Yes! We offer very competitive prices without compromising on quality. As a neighborhood store, we maintain fair pricing and often have better deals than larger supermarkets, plus personalized service."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about shopping at KIOSK Mega Mart
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-gray-200 hover:border-primary-300 transition-all duration-300 overflow-hidden shadow-md hover:shadow-lg"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 flex-1 pr-4">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === index ? 'bg-primary-600' : ''}`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary-600" />
                  )}
                </div>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-600 to-green-600 rounded-3xl p-10 text-white max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-xl mb-6 text-white/90">
            Our friendly team is here to help! Give us a call or send a message.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919811339376"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              📞 Call: 9811339376
            </a>
            <a
              href="https://wa.me/919811339376?text=Hello!%20I%20have%20a%20question%20about%20KIOSK%20Mega%20Mart."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-lg"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
