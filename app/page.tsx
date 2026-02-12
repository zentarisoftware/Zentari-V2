import Hero from "./Components/LandingPage/Hero";
import Problem from "./Components/LandingPage/Problem";
import Pricing from "./Components/LandingPage/Pricing";
import WhoWeHelp from "./Components/LandingPage/WhoWeHelp";
import Process from "./Components/LandingPage/Process";
import WhyUs from "./Components/LandingPage/WhyUs";
import FeaturedWork from "./Components/LandingPage/FeaturedWork";
import CTASection from "./Components/Portfolio/PortfolioCTA";

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
      <CTASection
        text={"Ready to scale your"}
        subtext={"Software?"}
        label={"Get in Touch"}
      />
    </main>
  );
}
