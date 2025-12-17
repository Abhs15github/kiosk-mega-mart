import {
  Apple,
  Wheat,
  Milk,
  Sparkles,
  Cookie,
  Droplet,
  Pencil,
  Blocks,
  UtensilsCrossed,
  Coffee
} from 'lucide-react';

const categories = [
  {
    icon: Apple,
    title: "Fresh Fruits & Vegetables",
    description: "Daily morning stock of fresh fruits and vegetables sourced to ensure quality, nutrition, and freshness for your family.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Wheat,
    title: "Groceries & Food Staples",
    description: "Rice, atta, pulses, oils, spices, and other everyday cooking essentials that form the backbone of your kitchen.",
    color: "from-amber-400 to-orange-500"
  },
  {
    icon: Milk,
    title: "Dairy & Bakery",
    description: "Milk, curd, paneer, butter, eggs, fresh bread, and bakery essentials for daily needs.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Sparkles,
    title: "Home & Cleaning Essentials",
    description: "Soaps, detergents, floor cleaners, dishwashing liquids, and household cleaning supplies.",
    color: "from-purple-400 to-violet-500"
  },
  {
    icon: Cookie,
    title: "Snacks & Beverages",
    description: "Biscuits, namkeens, chips, juices, cold drinks, and quick snack options for all age groups.",
    color: "from-pink-400 to-rose-500"
  },
  {
    icon: Droplet,
    title: "Personal Daily Care",
    description: "Body lotions, perfumes, deodorants, creams, and personal hygiene products.",
    color: "from-teal-400 to-cyan-600"
  },
  {
    icon: Pencil,
    title: "Stationery",
    description: "Pens, pencils, notebooks, colors, school and office stationery items.",
    color: "from-indigo-400 to-blue-500"
  },
  {
    icon: Blocks,
    title: "Toys & Kids Items",
    description: "Small toys, kids' essentials, and everyday items for children.",
    color: "from-yellow-400 to-amber-500"
  },
  {
    icon: UtensilsCrossed,
    title: "Crockery & Kitchenware",
    description: "Plates, bowls, cups, containers, and basic kitchen utilities.",
    color: "from-red-400 to-orange-500"
  },
  {
    icon: Coffee,
    title: "Disposables",
    description: "Paper cups, plates, tissues, carry bags, and party-use disposable items.",
    color: "from-gray-400 to-slate-500"
  }
];

export default function WhatWeOffer() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need, all in one place — fresh, reliable, and affordable.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
