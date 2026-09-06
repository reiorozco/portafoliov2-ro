import { lazy, Suspense } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../components/Button";
import ErrorBoundary from "../components/ErrorBoundary";
import { words, socialImgs } from "../constants";
import { prefersReducedMotion } from "../utils/motion";

const HeroExperience = lazy(
  () => import("../components/models/hero_models/HeroExperience"),
);

const HeroSceneFallback = () => (
  <div className="size-full min-h-[50vh] bg-black" aria-hidden="true" />
);

const Hero = () => {
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.fromTo(
      ".hero-text .hero-line",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" },
    );
  });

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      aria-label="Hero section"
    >
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" aria-hidden="true" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text display-type">
              <h1 className="hero-line">
                I build
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={`${word.text}-${index}`}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt=""
                          aria-hidden="true"
                          className="xl:size-10 md:size-8 size-6 object-contain"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <p className="hero-line">that ship to</p>
              <p className="hero-line">production.</p>
            </div>

            <p className="text-white-50 md:text-xl max-w-xl relative z-10">
              Hi, I’m Rei — a Full Stack Engineer (5+ yrs) shipping production
              web &amp; mobile apps, recently specialized in AI agent tooling
              with MCP &amp; Svelte 5 at Fleet AI. Open to remote roles.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
            />

            <p className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-blue-50 relative z-10">
              {socialImgs.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-white-50"
                >
                  {social.name === "github" ? "GitHub" : "LinkedIn"}
                </a>
              ))}
            </p>
          </div>
        </header>

        <figure className="hero-3d-layout" aria-hidden="true">
          <ErrorBoundary fallback={<HeroSceneFallback />}>
            <Suspense fallback={<HeroSceneFallback />}>
              <HeroExperience />
            </Suspense>
          </ErrorBoundary>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
