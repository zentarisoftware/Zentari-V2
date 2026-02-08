import React from "react";
import ServicesHero from "../Components/Services/ServicesHero";
import ServiceList from "../Components/Services/ServiceList";
import EngagementModels from "../Components/Services/EngagementModels";
import ServicesCTA from "../Components/Services/ServicesCTA";

export default function ServicesPage() {
  return (
    <main className="bg-background min-h-screen">
      <ServicesHero />
      <ServiceList />
      <EngagementModels />
      <ServicesCTA />
    </main>
  );
}
