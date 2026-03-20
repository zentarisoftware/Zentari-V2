import Hero from "./Components/LandingPage/Hero";
import Process from "./Components/LandingPage/Process";
import WhyUs from "./Components/LandingPage/WhyUs";
import FeaturedWork from "./Components/LandingPage/FeaturedWork";
import CTASection from "./Components/Portfolio/PortfolioCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <Process />
      <WhyUs />
      <CTASection
        text={"Ready to scale your"}
        subtext={"Software?"}
        label={"Get in Touch"}
      />
    </main>
  );
}
