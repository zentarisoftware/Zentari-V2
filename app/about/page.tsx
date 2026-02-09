"use client";
import React from "react";
import Nav from "../Components/Layout/Nav";
import AboutHero from "../Components/About/AboutHero";
import MissionVision from "../Components/About/MissionVision";
import WorkCulture from "../Components/About/WorkCulture";
import Values from "../Components/About/Values";
import TeamGrid from "../Components/About/TeamGrid";
import PortfolioCTA from "../Components/Portfolio/PortfolioCTA";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <Nav />
      <AboutHero />
      <MissionVision />
      <Values />
      <WorkCulture />
      <TeamGrid />
      <PortfolioCTA />{" "}
      {/* Reusing the CTA as it fits perfectly (Ready to write success story) */}
    </main>
  );
}
