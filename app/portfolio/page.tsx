import React from "react";
import Nav from "../Components/Layout/Nav";
import PortfolioHero from "../Components/Portfolio/PortfolioHero";
import ProjectList from "../Components/Portfolio/ProjectList";
import PortfolioCTA from "../Components/Portfolio/PortfolioCTA";

export default function PortfolioPage() {
  return (
    <main className="bg-white min-h-screen">
      <Nav />
      <PortfolioHero />
      <ProjectList />
      <PortfolioCTA />
    </main>
  );
}
