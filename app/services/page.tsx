import React from "react";
import ServicesHero from "../Components/Services/ServicesHero";
import ServiceList from "../Components/Services/ServiceList";
import EngagementModels from "../Components/Services/EngagementModels";
import CTASection from "../Components/Portfolio/PortfolioCTA";

export default function ServicesPage() {
  return (
    <main className="bg-background min-h-screen">
      <ServicesHero />
      <ServiceList />
      <EngagementModels />
      <CTASection
        text={"Ready to scale your team?"}
        subtext={"Let's find your perfect match."}
        label={"Get in Touch"}
      />
    </main>
  );
}
