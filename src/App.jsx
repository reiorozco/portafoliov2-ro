import { lazy, Suspense } from "react";

// Critical above-the-fold components (eager loading)
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import LogoShowcase from "./sections/LogoShowcase";

// Error handling and loading fallback components
import ErrorBoundary from "./components/ErrorBoundary";
import SectionLoader from "./components/SectionLoader";

// Heavy below-the-fold sections (lazy loading)
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const Experience = lazy(() => import("./sections/Experience"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Contact = lazy(() => import("./sections/Contact"));

const App = () => (
  <ErrorBoundary>
    {/* Skip to main content link for keyboard navigation */}
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded"
    >
      Skip to main content
    </a>

    <Navbar />

    <main id="main-content">
      {/* Hero — 3D is isolated inside the section */}
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>

      <LogoShowcase />

      {/* Lazy sections - each wrapped to prevent cascade failures */}
      <ErrorBoundary>
        <Suspense fallback={<SectionLoader />}>
          <ShowcaseSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<SectionLoader />}>
          <TechStack />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </ErrorBoundary>
    </main>

    <Footer />
  </ErrorBoundary>
);

export default App;
