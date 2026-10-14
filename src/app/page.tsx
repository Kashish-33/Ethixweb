import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import ProcessSection from '@/components/ProcessSection';
import PortfolioSection from '@/components/PortfolioSection';
import WhyUsSection from '@/components/WhyUsSection';
import FaqSection from '@/components/FaqSection';
import CtaBanner from '@/components/CtaBanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <ProcessSection />
      <PortfolioSection />
      <WhyUsSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
