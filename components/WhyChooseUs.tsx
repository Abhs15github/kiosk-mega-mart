import { Shield, Leaf, Clock, Banknote, Heart, Users, Award, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: "Fresh Daily Stock",
    description: "We receive fresh fruits, vegetables, dairy, and bakery items every morning. Our commitment to freshness means you always get the best quality produce for your family."
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "All our products are sourced from authentic brands and trusted suppliers. We check every item for quality before it reaches our shelves, ensuring 100% genuine products."
  },
  {
    icon: Clock,
    title: "Extended Store Hours",
    description: "Open 12 hours daily from 10 AM to 10 PM, seven days a week including holidays. Shop at your convenience, whether it's early morning or late evening."
  },
  {
    icon: Banknote,
    title: "Best Prices",
    description: "Competitive pricing on all products without compromising on quality. We offer great value for money with regular discounts and special offers on daily essentials."
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "We know our customers by name and understand their preferences. Our friendly staff is always ready to help you find exactly what you need with a smile."
  },
  {
    icon: Users,
    title: "Trusted Since 10+ Years",
    description: "Serving the Sector 57 community for over a decade. Thousands of satisfied families trust us for their daily grocery needs, making us their neighborhood favorite."
  },
  {
    icon: Award,
    title: "Wide Product Range",
    description: "Over 1000+ products across 10 different categories under one roof. From fresh produce to stationery, we have everything your household needs."
  },
  {
    icon: TrendingUp,
    title: "Quick WhatsApp Ordering",
    description: "Can't visit the store? Simply send us your list on WhatsApp and we'll prepare your order. Convenient home delivery or quick pickup options available."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-primary-600 via-green-600 to-emerald-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            WHY CHOOSE US
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Why Families Love
            <span className="block mt-2">KIOSK Mega Mart</span>
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            More than just a store — we're your trusted neighbourhood partner for all household needs
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 hover:transform hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">10+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">5000+</div>
              <div className="text-white/80">Happy Families</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">1000+</div>
              <div className="text-white/80">Products</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">100%</div>
              <div className="text-white/80">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
