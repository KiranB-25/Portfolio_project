import PortfolioNavbar from "./components/custom components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import HeroSection from "./components/custom components/Herosection";
import AboutSection from "./components/custom components/AboutSection";
import SkillsSection from "./components/custom components/SkillSection";
import Footer from "./components/custom components/FooterSection";
import ExperienceSection from "./components/custom components/ExperienceSection";
import ProjectsSection from "./components/custom components/ProjectSection";
import ContactSection from "./components/custom components/ContactSection";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <PortfolioNavbar />
      <HeroSection/> 
      <AboutSection/> 
      <SkillsSection/> 
      <ExperienceSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/> 
      {/* applying dark theme */}
    </ThemeProvider>
  );
}

export default App;
