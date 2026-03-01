import React from "react";
import PricingHero from "../Components/Pricing/PricingHero";
import PricingCards from "../Components/Pricing/PricingCards";
import ComparisonTable from "../Components/Pricing/ComparisonTable";
import PricingFAQ from "../Components/Pricing/PricingFAQ";
import CTASection from "../Components/Portfolio/PortfolioCTA";

export default function PricingPage() {
  return (
    <main className="bg-background min-h-screen">
      <PricingHero />
      <PricingCards />
      <ComparisonTable />
      <PricingFAQ />
      <CTASection
        text="Ready to discuss your project?"
        subtext="Let's find the engagement model that works best."
        label="Get a Custom Quote"
      />
    </main>
  );
}
