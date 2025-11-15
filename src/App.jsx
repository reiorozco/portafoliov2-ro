import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import Navbar from "./components/NavBar";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";
// import Testimonials from "./sections/Testimonials";

// Preload all 3D models for faster loading
import "./utils/preloadAssets";

const App = () => (
  <>
    {/* Skip to main content link for keyboard navigation */}
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-purple-500 focus:text-white focus:rounded"
    >
      Skip to main content
    </a>

    <Navbar />

    <main id="main-content">
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
      {/* <Testimonials /> */}
      <Contact />
    </main>

    <Footer />
  </>
);

export default App;
