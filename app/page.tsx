export const metadata = {
  title: "Hinal Prabhu | Product Owner and Business Analyst",
  description: "Business Analyst & Product Owner Portfolio",
};
import { FloatingNav } from "@/components/ui/floating-navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { WorksSection } from "@/components/sections/works-section";
import { ProcessSection } from "@/components/sections/process-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { FooterSection } from "@/components/sections/footer-section";
import { CurtainRevealLayout } from "@/components/curtain-reveal-layout";
import { KineticMarquee } from "@/components/ui/kinetic-marquee";

export default function Home() {
  const navItems = [
    { name: "Work", link: "#work" },
    { name: "About", link: "#about" },
    { name: "Expertise", link: "#expertise" },
    { name: "Strategies", link: "#strategies" },
  ];

  return (
    <>
      {/* Floating Navigation */}
      <FloatingNav navItems={navItems} />

      <CurtainRevealLayout footer={<FooterSection />}>
        {/* Hero Section - The Hook */}
        <HeroSection />

        {/* Kinetic Marquee - Breaking the grid */}
        <div className="relative -my-8 md:-my-12 z-0">
          <KineticMarquee 
            text="ANALYST — BASED IN THE USA — ROADMAPS — VISUALISATION — "
            baseVelocity={0.5}
            skewFactor={0.8}
          />
        </div>

        {/* About Section - The Pitch */}
        <AboutSection />

        {/* Selected Works - The Core */}
        <WorksSection />

        {/* Kinetic Marquee - Second instance */}
        <div className="relative -my-8 md:-my-12 z-0">
          <KineticMarquee 
            text="AVAILABLE FOR WORK — LET'S COLLABORATE — "
            baseVelocity={-0.4}
            skewFactor={0.6}
          />
        </div>

        {/* Process Section - Timeline */}
        <ProcessSection />

        {/* Skills & Services - Bento Grid */}
        <SkillsSection />
      </CurtainRevealLayout>
    </>
  );
}
