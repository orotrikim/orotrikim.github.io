import { HeroSection } from "../components/HeroSection";
import { ThemeSection } from "../components/ThemeSection";
import { AboutSection } from "../components/AboutSection";
import { RobotSection } from "../components/RobotSection";
import { SponsorsSection } from "../components/SponsorsSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ThemeSection />
      <AboutSection />
      <RobotSection />
      <SponsorsSection />
      {/* Both CodeSection and ContactSection are now handled by routes.tsx */}
    </>
  );
}