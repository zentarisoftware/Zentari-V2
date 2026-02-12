import React from "react";
import SolutionsHero from "../Components/Solutions/SolutionsHero";
import UseCases from "../Components/Solutions/UseCases";
import CTASection from "../Components/Portfolio/PortfolioCTA";

export default function SolutionsPage() {
  return (
    <main className="bg-white min-h-screen">
      <SolutionsHero />
      <UseCases />
      <CTASection
        text={"See yourself here?"}
        subtext={"Let's discuss your specific use case."}
        label={"Get in Touch"}
      />
    </main>
  );
}
