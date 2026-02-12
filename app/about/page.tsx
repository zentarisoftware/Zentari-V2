"use client";
import React from "react";
import Nav from "../Components/Layout/Nav";
import AboutHero from "../Components/About/AboutHero";
import MissionVision from "../Components/About/MissionVision";
import WorkCulture from "../Components/About/WorkCulture";
import Values from "../Components/About/Values";
import TeamGrid from "../Components/About/TeamGrid";
import CTASection from "../Components/Portfolio/PortfolioCTA";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <Nav />
      <AboutHero />
      <MissionVision />
      <Values />
      <WorkCulture />
      <TeamGrid />
      <CTASection
        text={"Ready to write your own "}
        subtext={"success story"}
        label={"What's Next?"}
      />
    </main>
  );
}
