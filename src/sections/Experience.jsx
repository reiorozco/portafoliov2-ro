import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import LazyImage from "../components/LazyImage";
import { expCards } from "../constants";
import { SCROLL_TRIGGER_CONFIG } from "../constants/config";
import { prefersReducedMotion } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const featuredCards = expCards.slice(0, 3);
const earlierCards = expCards.slice(3);

const RoleBlock = ({ card, index }) => (
  <div className="exp-card-wrapper">
    <div className="xl:w-2/6">
      <GlowCard card={card} index={index}>
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
          <div className="timeline-line" />
        </div>

        <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
          <div className="timeline-logo">
            <LazyImage src={card.logoPath} alt={card.logoAlt} />
          </div>

          <div>
            <h3 className="display-type font-semibold text-3xl">{card.title}</h3>
            {card.company && (
              <p className="mt-1 text-lg text-white font-medium">{card.company}</p>
            )}
            <p className="my-5 text-blue-50">{card.date}</p>
            <p className="text-blue-50 italic">Responsibilities</p>
            <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
              {card.responsibilities.map((responsibility) => (
                <li key={responsibility} className="text-lg">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Experience = () => {
  useGSAP(() => {
    if (prefersReducedMotion()) return;

    gsap.set(".timeline-card", { opacity: 0 });
    gsap.set(".expText", { opacity: 0 });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    ScrollTrigger.batch(".timeline-card", {
      start: SCROLL_TRIGGER_CONFIG.EXPERIENCE_START,
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.1,
        });
      },
    });

    gsap.to(".timeline", {
      scaleY: 0,
      transformOrigin: "bottom bottom",
      ease: "none",
      scrollTrigger: {
        trigger: ".timeline",
        start: SCROLL_TRIGGER_CONFIG.TIMELINE_START,
        end: SCROLL_TRIGGER_CONFIG.TIMELINE_END,
        scrub: SCROLL_TRIGGER_CONFIG.SCRUB_DELAY,
      },
    });

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
        <TitleHeader title="Experience" />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {featuredCards.map((card, index) => (
              <RoleBlock key={card.title} card={card} index={index} />
            ))}
          </div>
        </div>

        <details className="mt-24 border-t border-black-50 pt-10 group">
          <summary className="display-type text-2xl md:text-3xl font-semibold cursor-pointer text-white-50 hover:text-white list-none flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
            <span>Earlier roles</span>
            <span className="text-lg font-normal text-blue-50 group-open:hidden">
              {earlierCards.length}
            </span>
          </summary>
          <ul className="mt-10 flex flex-col gap-10">
            {earlierCards.map((card) => (
              <li key={card.title} className="flex flex-col gap-1 max-w-3xl">
                <h3 className="display-type text-xl font-semibold">{card.title}</h3>
                <p className="text-white font-medium">{card.company}</p>
                <p className="text-sm text-blue-50">{card.date}</p>
                <p className="text-white-50 mt-2">{card.impact}</p>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
};

export default Experience;
