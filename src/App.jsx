import { lazy, Suspense } from "react";

// Critical above-the-fold components (eager loading)
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import LogoShowcase from "./sections/LogoShowcase";

// Loading fallback component
import SectionLoader from "./components/SectionLoader";

// Heavy below-the-fold sections (lazy loading)
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const Experience = lazy(() => import("./sections/Experience"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Contact = lazy(() => import("./sections/Contact"));

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
      <LogoShowcase />

      <Suspense fallback={<SectionLoader />}>
        <ShowcaseSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FeatureCards />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Experience />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <TechStack />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
    </main>

    <Footer />
  </>
);

export default App;
