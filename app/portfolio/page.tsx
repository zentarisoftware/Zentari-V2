import React from "react";
import Nav from "../Components/Layout/Nav";
import PortfolioHero from "../Components/Portfolio/PortfolioHero";
import ProjectList from "../Components/Portfolio/ProjectList";
import CTASection from "../Components/Portfolio/PortfolioCTA";

export default function PortfolioPage() {
  return (
    <main className="bg-white min-h-screen">
      <Nav />
      <PortfolioHero />
      <ProjectList />
      <CTASection
        text={"Ready to write your own "}
        subtext={"success story"}
        label={"What's Next?"}
      />
    </main>
  );
}
