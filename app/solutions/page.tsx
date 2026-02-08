import React from "react";
import SolutionsHero from "../Components/Solutions/SolutionsHero";
import UseCases from "../Components/Solutions/UseCases";
import SolutionsCTA from "../Components/Solutions/SolutionsCTA";

export default function SolutionsPage() {
  return (
    <main className="bg-white min-h-screen">
      <SolutionsHero />
      <UseCases />
      <SolutionsCTA />
    </main>
  );
}
