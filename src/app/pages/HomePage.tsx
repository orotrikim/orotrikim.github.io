import { HeroSection } from "../components/HeroSection";
import { ThemeSection } from "../components/ThemeSection";
import { AboutSection } from "../components/AboutSection";
import { RobotSection } from "../components/RobotSection";
import { SponsorsSection } from "../components/SponsorsSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      {/* Wrappers added so the Header can find the sections */}
      <div id="about"><AboutSection /></div>
      <ThemeSection />
      <div id="robot"><RobotSection /></div>
      <div id="sponsors"><SponsorsSection /></div>
    </>
  );
}