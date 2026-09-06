import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";
import { prefersReducedMotion } from "../utils/motion";

const TechStack = () => {
  useGSAP(() => {
    if (prefersReducedMotion()) return;

    gsap.fromTo(
      ".tech-card",
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      },
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Stack" />
        <ul className="tech-grid">
          {techStackImgs.map((tech) => (
            <li
              key={tech.name}
              className="card-border tech-card overflow-hidden rounded-xl"
            >
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img
                    src={tech.imgPath}
                    className="size-16 md:size-20 object-contain"
                    alt={tech.alt}
                  />
                </div>
                <p>{tech.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechStack;
