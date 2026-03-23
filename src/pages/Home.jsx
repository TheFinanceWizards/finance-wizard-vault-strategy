import React from 'react';
import Navbar from '@/components/vault/Navbar.jsx';
import HeroSection from '@/components/vault/HeroSection.jsx';
import WhatIsVault from '@/components/vault/WhatIsVault';
import CloneTrick from '@/components/vault/CloneTrick';
import Multiplier from '@/components/vault/Multiplier';
import TurnkeyRealEstate from '@/components/vault/TurnkeyRealEstate';
import BarbellStrategy from '@/components/vault/BarbellStrategy';
import EngineeringVault from '@/components/vault/EngineeringVault';
import MultiplierMechanics from '@/components/vault/MultiplierMechanics';
import ResultSection from '@/components/vault/ResultSection';
import CTASection from '@/components/vault/CTASection';
import Testimonials from '@/components/vault/Testimonials';
import FAQSection from '@/components/vault/FAQSection';
import HowItWorks from '@/components/vault/HowItWorks';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <HeroSection />
      <WhatIsVault />
      <HowItWorks />
      <CloneTrick />
      <Multiplier />
      <EngineeringVault />
      <TurnkeyRealEstate />
      <BarbellStrategy />
      <MultiplierMechanics />
      <ResultSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}