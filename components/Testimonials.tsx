import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Sector 57, Gurugram",
    rating: 5,
    text: "KIOSK Mega Mart has been our go-to store for the past 5 years. The quality of fresh vegetables is always top-notch, and the staff is so helpful. They remember our regular orders and often recommend good products. Highly recommended!",
    date: "Regular Customer since 2019"
  },
  {
    name: "Rajesh Kumar",
    location: "Nearby Sector 56",
    rating: 5,
    text: "Best departmental store in the area! I love that they're open till 10 PM, perfect for late evening shopping after work. The WhatsApp ordering system is super convenient. Very competitive prices compared to other stores.",
    date: "Regular Customer since 2020"
  },
  {
    name: "Anjali Verma",
    location: "Sector 57, Gurugram",
    rating: 5,
    text: "As a working mother, KIOSK Mega Mart makes my life so much easier. Fresh dairy products every morning, and I can quickly grab everything I need in one place. The store is always clean and well-organized. The owners are very friendly too!",
    date: "Regular Customer since 2018"
  },
  {
    name: "Amit Patel",
    location: "Bestech Square Mall Area",
    rating: 5,
    text: "Excellent service and genuine products. I've never had any quality issues. They stock all major brands and the stationery section is particularly good for my kids' school needs. Prices are reasonable and honest.",
    date: "Regular Customer since 2021"
  },
  {
    name: "Sunita Malhotra",
    location: "Sector 57, Gurugram",
    rating: 5,
    text: "This is my family's trusted store for over 7 years. The fresh fruits are always of the best quality. I especially appreciate that they source vegetables daily. The personal touch in service is what sets them apart from supermarkets.",
    date: "Regular Customer since 2017"
  },
  {
    name: "Vikram Singh",
    location: "Sector 58, Gurugram",
    rating: 5,
    text: "Great neighborhood store with everything you need. I often call them to check if items are in stock before visiting, and they're always so patient and helpful. The variety of snacks and beverages is impressive. Fair pricing throughout!",
    date: "Regular Customer since 2022"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            CUSTOMER REVIEWS
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it — hear from families who trust us every day
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-primary-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
                <div className="text-xs text-primary-600 font-semibold mt-1">{testimonial.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-50 to-green-50 rounded-3xl p-8 border-2 border-primary-200 max-w-4xl mx-auto">
          <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Join Thousands of Happy Customers</h3>
          <p className="text-lg text-gray-700 mb-6">
            Experience the difference of shopping at your trusted neighbourhood store
          </p>
          <a
            href="https://wa.me/919811339376?text=Hello!%20I%20would%20like%20to%20place%20an%20order%20for%20groceries%20from%20KIOSK%20Mega%20Mart."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-primary-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Shopping Today
          </a>
        </div>
      </div>
    </section>
  );
}
