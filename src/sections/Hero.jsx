import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import { words } from "../constants";
import { prefersReducedMotion } from "../utils/motion";

const Hero = () => {
  useGSAP(() => {
    if (prefersReducedMotion()) return; // headline is visible by default
    gsap.fromTo(
      ".hero-text .hero-line",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" },
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden" aria-label="Hero section">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="Decorative background pattern" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text display-type">
              <h1 className="hero-line">
                I build
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.alt}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
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

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Rei — a Full Stack Engineer based in Colombia with 5+
              years building web, mobile, and AI-driven products.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
