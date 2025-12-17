import Hero from '@/components/Hero';
import WhatWeOfferEnhanced from '@/components/WhatWeOfferEnhanced';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowToOrder from '@/components/HowToOrder';
import Testimonials from '@/components/Testimonials';
import DeliveryAreas from '@/components/DeliveryAreas';
import FAQ from '@/components/FAQ';
import LocationTimings from '@/components/LocationTimings';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatWeOfferEnhanced />
      <WhyChooseUs />
      <HowToOrder />
      <Testimonials />
      <DeliveryAreas />
      <FAQ />
      <LocationTimings />
      <Footer />
      <StickyButtons />
    </main>
  );
}
