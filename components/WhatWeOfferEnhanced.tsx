'use client';

import { useState } from 'react';
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
  Coffee,
  ChevronDown,
  Check
} from 'lucide-react';

const categories = [
  {
    icon: Apple,
    title: "Fresh Fruits & Vegetables",
    description: "Handpicked, fresh stock arrives daily in the morning to ensure maximum freshness and nutrition for your family.",
    color: "from-green-400 to-emerald-500",
    items: [
      { name: "Fruits", products: "Apples, Bananas, Oranges, Grapes, Mangoes (seasonal), Papaya, Watermelon, Pomegranate, Kiwi, Pineapple" },
      { name: "Vegetables", products: "Potatoes, Onions, Tomatoes, Spinach, Coriander, Fenugreek, Cauliflower, Cabbage, Capsicum, Ladyfinger, Brinjal, Beans, Peas, Ginger, Garlic, Green Chilies" },
      { name: "Fresh Guarantee", products: "All produce sourced daily from local markets for maximum freshness" }
    ]
  },
  {
    icon: Wheat,
    title: "Groceries & Food Staples",
    description: "Complete range of everyday cooking essentials that form the foundation of your kitchen.",
    color: "from-amber-400 to-orange-500",
    items: [
      { name: "Grains & Rice", products: "Basmati Rice, Regular Rice, Brown Rice, Wheat Atta (Chakki & Branded), Maida, Suji, Besan" },
      { name: "Pulses & Lentils", products: "Toor Dal, Moong Dal, Masoor Dal, Chana Dal, Rajma, Chole, Lobia, Urad Dal" },
      { name: "Oils & Ghee", products: "Mustard Oil, Sunflower Oil, Refined Oil, Pure Ghee, Vanaspati" },
      { name: "Spices & Masalas", products: "Turmeric, Red Chili Powder, Coriander Powder, Garam Masala, Kitchen King Masala, Cumin, Cloves, Cardamom" },
      { name: "Basic Essentials", products: "Salt (Iodized & Rock), Sugar, Jaggery, Hing (Asafoetida)" }
    ]
  },
  {
    icon: Milk,
    title: "Dairy & Bakery",
    description: "Fresh dairy products and bakery items sourced from trusted brands and local suppliers daily.",
    color: "from-blue-400 to-cyan-500",
    items: [
      { name: "Dairy Products", products: "Milk (Toned, Full Cream, Skimmed), Fresh Curd, Buttermilk, Paneer, Butter, Cheese (Processed & Mozzarella), Fresh Eggs" },
      { name: "Bakery Items", products: "White Bread, Brown Bread, Multigrain Bread, Buns, Pav, Pizza Base, Bakery Rusks, Cakes (subject to availability)" }
    ]
  },
  {
    icon: Sparkles,
    title: "Home & Cleaning Essentials",
    description: "Complete range of household cleaning products to keep your home spotless and hygienic.",
    color: "from-purple-400 to-violet-500",
    items: [
      { name: "Laundry", products: "Detergent Powders (Surf Excel, Ariel, Tide), Liquid Detergents, Fabric Softeners, Bleach" },
      { name: "Dishwashing", products: "Dishwashing Liquids (Vim, Pril), Dishwashing Bars, Scrub Pads, Steel Wool" },
      { name: "Floor & Surface", products: "Floor Cleaners (Lizol, Harpic), Glass Cleaners, All-Purpose Cleaners, Disinfectants" },
      { name: "Bathroom", products: "Toilet Cleaners, Bathroom Cleaners, Air Fresheners, Phenyl" },
      { name: "Accessories", products: "Garbage Bags, Mop Refills, Cleaning Cloths, Dusters, Brooms" }
    ]
  },
  {
    icon: Cookie,
    title: "Snacks & Beverages",
    description: "Wide variety of snacks and drinks for every mood and occasion, perfect for the entire family.",
    color: "from-pink-400 to-rose-500",
    items: [
      { name: "Biscuits & Cookies", products: "Parle-G, Good Day, Hide & Seek, Bourbon, Marie, Digestive Biscuits, Cream Biscuits" },
      { name: "Namkeens & Chips", products: "Haldiram's Namkeen, Kurkure, Lays, Uncle Chips, Mixture, Bhujia, Roasted Peanuts" },
      { name: "Beverages", products: "Tea (Tata, Red Label, Taj Mahal), Coffee (Nescafe, Bru), Soft Drinks (Coca-Cola, Pepsi, Sprite), Fruit Juices (Real, Tropicana), Cold Drinks" },
      { name: "Health Drinks", products: "Horlicks, Bournvita, Complan, Boost" }
    ]
  },
  {
    icon: Droplet,
    title: "Personal Daily Care",
    description: "Premium quality personal care and grooming products for your daily hygiene needs.",
    color: "from-teal-400 to-cyan-600",
    items: [
      { name: "Bath & Body", products: "Bath Soaps (Lux, Dove, Pears), Body Wash, Body Lotions, Moisturizers, Talcum Powder" },
      { name: "Hair Care", products: "Shampoos (Pantene, Sunsilk, Head & Shoulders), Conditioners, Hair Oils, Hair Gels, Hair Creams" },
      { name: "Oral Care", products: "Toothpaste (Colgate, Pepsodent, Close-up), Toothbrushes, Mouthwash, Dental Floss" },
      { name: "Grooming", products: "Deodorants, Perfumes, Shaving Creams, Razors, After-shave Lotion" },
      { name: "Face Care", products: "Face Wash, Face Creams, Sunscreen, Face Packs" }
    ]
  },
  {
    icon: Pencil,
    title: "Stationery",
    description: "Complete range of stationery items for school, office, and home use at competitive prices.",
    color: "from-indigo-400 to-blue-500",
    items: [
      { name: "Writing Essentials", products: "Pens (Ball, Gel, Ink), Pencils (HB, 2B), Mechanical Pencils, Erasers, Sharpeners" },
      { name: "Notebooks & Paper", products: "Notebooks (Single Line, Double Line, Four Line), Registers, Rough Notebooks, A4 Sheets, Graph Paper" },
      { name: "Art & Craft", products: "Crayons, Color Pencils, Sketch Pens, Water Colors, Drawing Books, Craft Paper" },
      { name: "Office Supplies", products: "Files & Folders, Staplers, Paper Clips, Sticky Notes, Markers, Highlighters" },
      { name: "School Items", products: "Geometry Boxes, Compass, Protractor, Rulers, School Bags (select items)" }
    ]
  },
  {
    icon: Blocks,
    title: "Toys & Kids Items",
    description: "Fun and safe toys for children along with essential kids' daily care products.",
    color: "from-yellow-400 to-amber-500",
    items: [
      { name: "Toys", products: "Small Plastic Toys, Soft Toys, Puzzle Toys, Educational Toys, Building Blocks, Cars & Vehicles" },
      { name: "Kids Care", products: "Baby Wipes, Baby Soaps, Baby Shampoos, Baby Powder, Diaper Rash Cream" },
      { name: "Kids Snacks", products: "Milk Chocolates, Lollipops, Candies, Kids Biscuits, Juice Boxes" }
    ]
  },
  {
    icon: UtensilsCrossed,
    title: "Crockery & Kitchenware",
    description: "Essential kitchen utilities and dining accessories for your everyday cooking and dining needs.",
    color: "from-red-400 to-orange-500",
    items: [
      { name: "Dining", products: "Plates (Steel, Melamine, Ceramic), Bowls, Cups & Mugs, Glasses, Serving Dishes, Spoons & Forks" },
      { name: "Storage", products: "Plastic Containers, Steel Containers, Lunch Boxes, Water Bottles (Steel & Plastic), Jars" },
      { name: "Kitchen Tools", products: "Kadhai, Tawa, Pressure Cooker Accessories, Ladles, Spatulas, Knives, Cutting Boards, Peelers" },
      { name: "Cookware Basics", products: "Aluminum Cookware, Non-stick Pans (select items)" }
    ]
  },
  {
    icon: Coffee,
    title: "Disposables & Party Supplies",
    description: "Convenient disposable items perfect for parties, events, and everyday convenience.",
    color: "from-gray-400 to-slate-500",
    items: [
      { name: "Disposable Dining", products: "Paper Plates, Paper Bowls, Paper Cups, Plastic Plates, Plastic Glasses, Plastic Spoons & Forks" },
      { name: "Party Items", products: "Party Napkins, Decorative Plates, Balloons, Party Poppers, Candles" },
      { name: "Convenience Items", products: "Aluminum Foil, Cling Film, Tissues, Paper Napkins, Kitchen Towels, Carry Bags (various sizes)" }
    ]
  }
];

export default function WhatWeOfferEnhanced() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            OUR PRODUCT RANGE
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What We Offer
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need for your home, all in one place — fresh, reliable, and affordable.
            <span className="block mt-2 text-primary-600 font-semibold">Over 1000+ products across 10 categories!</span>
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isExpanded = expandedCategory === index;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl border-2 border-gray-200 hover:border-primary-300 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl"
              >
                {/* Category Header */}
                <div
                  onClick={() => toggleCategory(index)}
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {category.title}
                        </h3>
                        <ChevronDown
                          className={`w-6 h-6 text-primary-600 transition-transform duration-300 flex-shrink-0 ml-2 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {category.description}
                      </p>
                      <button className="mt-3 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors">
                        {isExpanded ? 'Show less' : 'View all products →'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4 space-y-4">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-xl p-4">
                          <div className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-semibold text-gray-900 mb-1">{item.name}</div>
                              <div className="text-sm text-gray-600 leading-relaxed">{item.products}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-50 to-green-50 rounded-3xl p-8 border-2 border-primary-200">
          <p className="text-xl text-gray-700 mb-4">
            <span className="font-bold text-primary-700">Can't find what you're looking for?</span> We stock many more items!
          </p>
          <p className="text-lg text-gray-600">
            Call us at <a href="tel:+919811339376" className="font-bold text-primary-600 hover:text-primary-700">9811339376</a> or
            <a href="tel:+919625783541" className="font-bold text-primary-600 hover:text-primary-700"> 9625783541</a> to check availability.
          </p>
        </div>
      </div>
    </section>
  );
}
