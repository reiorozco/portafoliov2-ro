import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import LazyImage from "../components/LazyImage";
import { expCards } from "../constants";
import { SCROLL_TRIGGER_CONFIG } from "../constants/config";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Set initial states explicitly to prevent layout shift
    gsap.set(".timeline-card", {
      xPercent: -100,
      opacity: 0,
      transformOrigin: "left left"
    });
    gsap.set(".expText", { opacity: 0 });

    // Small delay to ensure DOM is ready and images are positioned
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Batch animate timeline cards for better performance
    // instead of creating individual ScrollTriggers for each card
    ScrollTrigger.batch(".timeline-card", {
      start: SCROLL_TRIGGER_CONFIG.EXPERIENCE_START,
      // Only animate once (don't recalculate on every scroll)
      once: true,
      // Stagger the animation by 0.1s between each card
      onEnter: (batch) => {
        gsap.to(batch, {
          xPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.1,
        });
      },
    });

    // Optimized timeline height animation using scrub instead of onUpdate
    // scrub creates smooth scroll-linked animation without creating new tweens
    gsap.to(".timeline", {
      scaleY: 0,
      transformOrigin: "bottom bottom",
      ease: "none", // Linear ease for scrub animations
      scrollTrigger: {
        trigger: ".timeline",
        start: SCROLL_TRIGGER_CONFIG.TIMELINE_START,
        end: SCROLL_TRIGGER_CONFIG.TIMELINE_END,
        scrub: SCROLL_TRIGGER_CONFIG.SCRUB_DELAY,
      },
    });

    // Batch animate text elements for better performance
    ScrollTrigger.batch(".expText", {
      start: SCROLL_TRIGGER_CONFIG.TEXT_START,
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.15,
        });
      },
    });

    // Cleanup function to kill all ScrollTriggers when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card}>
                    {card.imgPath && (
                      <div className="w-72">
                        <LazyImage
                          src={card.imgPath}
                          className="object-center"
                          alt={card.imgAlt}
                        />
                      </div>
                    )}
                  </GlowCard>
                </div>

                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>

                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <LazyImage src={card.logoPath} alt={card.logoAlt} />
                      </div>

                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-[#839CB5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-lg">
                                {responsibility}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
