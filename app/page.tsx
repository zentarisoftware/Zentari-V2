import Hero from "./Components/LandingPage/Hero";
import Problem from "./Components/LandingPage/Problem";
import Pricing from "./Components/LandingPage/Pricing";
import WhoWeHelp from "./Components/LandingPage/WhoWeHelp";
import Process from "./Components/LandingPage/Process";
import WhyUs from "./Components/LandingPage/WhyUs";
import FeaturedWork from "./Components/LandingPage/FeaturedWork";
import CTA from "./Components/LandingPage/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Pricing />
      <WhoWeHelp />
      <Process />
      <WhyUs />
      <FeaturedWork />
      <CTA />
    </main>
  );
}
