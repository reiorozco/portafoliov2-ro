import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LazyImage from "../components/LazyImage";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const kranioRef = useRef(null);
  const gameHubRef = useRef(null);
  const amazonCloneRef = useRef(null);

  useGSAP(() => {
    // Ensure all elements are visible by default
    gsap.set(sectionRef.current, { opacity: 1 });
    gsap.set([kranioRef.current, gameHubRef.current, amazonCloneRef.current], {
      opacity: 1,
      y: 0
    });

    // Optional subtle animation on scroll (elements stay visible even if animation doesn't trigger)
    const cards = [
      kranioRef.current,
      gameHubRef.current,
      amazonCloneRef.current,
    ];

    cards.forEach((card) => {
      gsap.from(card, {
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase" aria-label="Projects showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={kranioRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <LazyImage src="/images/project1.0.png" alt="Screenshot of Kranio logistics platform showing real-time tracking dashboard" />
            </div>
            <div className="text-content">
              <h2>Internal Logistics Platform for Blue Express</h2>

              <p className="text-white-50 md:text-xl">
                A real-time tracking system built with React, Next.js, Node.js,
                and MongoDB. Features include map tracking, barcode scanning,
                and incident reporting with Datadog integration.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={gameHubRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <LazyImage src="/images/project1.1.png" alt="Screenshot of GameHub app displaying video game catalog with genre filters" />
              </div>
              <h2>GameHub – Video Game Discovery App</h2>
              <p className="text-white-50 md:text-sm">
                A web app built with React and TailwindCSS that allows users to
                discover games by genre and platform. Clean UI and dynamic
                filtering features.
              </p>
            </div>

            <div className="project" ref={amazonCloneRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <LazyImage src="/images/project1.2.png" alt="Screenshot of Amazon clone e-commerce platform with product listings and shopping cart" />
              </div>
              <h2>Amazon Clone – E-commerce Platform</h2>
              <p className="text-white-50 md:text-sm">
                Developed using React, Redux Toolkit, and Firebase. Includes
                authentication, product listings, cart, and secure payment
                integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
