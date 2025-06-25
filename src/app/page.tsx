import Header from '@/components/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import SkillsSection from '@/components/sections/skills';
import ProjectsSection from '@/components/sections/projects';
import ResumeSection from '@/components/sections/resume';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/footer';
import PublicationsSection from '@/components/sections/publications';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div className="relative z-10 bg-background">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <PublicationsSection />
          <ResumeSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
