import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LazyImage from "../components/LazyImage";

gsap.registerPlugin(ScrollTrigger);

// Compact projects shown in the right-hand column. Each links to a live demo
// and its public GitHub repo so recruiters can click straight through.
const sideProjects = [
  {
    title: "Project Manager",
    image: "/images/project1.1.png",
    imageAlt:
      "Project Manager dashboard showing project summary cards and quick actions",
    bg: "bg-[#EAF1FB]",
    description:
      "Full-stack project management dashboard with role-based access, built with Next.js, Prisma, and PostgreSQL.",
    demoUrl: "https://project-manager-app-cyan.vercel.app",
    repoUrl: "https://github.com/reiorozco/project-manager-app",
  },
  {
    title: "Issue Tracker",
    image: "/images/project1.2.png",
    imageAlt:
      "Issue Tracker dashboard with issue counts, a bar chart, and a latest-issues list",
    bg: "bg-[#F3F4F6]",
    description:
      "Full-stack issue tracking app with status dashboards and charts — Next.js, Prisma, and Recharts.",
    demoUrl: "https://issue-tracker-app-blue.vercel.app",
    repoUrl: "https://github.com/reiorozco/issuetracker-app",
  },
  {
    title: "Vidly — REST API & Web App",
    image: "/images/project1.3.png",
    imageAlt:
      "Vidly movie rental web app listing movies with genre filters and ratings",
    bg: "bg-[#EAF1FB]",
    description:
      "Movie rental platform backed by a tested REST API: Node.js, Express, JWT auth, Jest, CI, and Swagger docs.",
    demoUrl: "https://vidly-app-six.vercel.app",
    repoUrl: "https://github.com/reiorozco/vidly-api",
  },
];

const ProjectLinks = ({ demoUrl, repoUrl, title }) => (
  <div className="flex flex-wrap items-center gap-3 mt-4">
    <a
      href={demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open the live demo of ${title}`}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:bg-white-50 transition-colors"
    >
      <img src="/images/arrow-right.svg" alt="" aria-hidden="true" className="size-4" />
      Live demo
    </a>
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View the source code of ${title} on GitHub`}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
    >
      <img src="/images/github.svg" alt="" aria-hidden="true" className="size-4" />
      GitHub
    </a>
  </div>
);

const AppShowcase = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Ensure all elements are visible by default
    gsap.set(sectionRef.current, { opacity: 1 });
    gsap.set(".showcase-card", { opacity: 1, y: 0 });

    // Subtle reveal on scroll (cards stay visible even if it doesn't trigger)
    gsap.utils.toArray(".showcase-card").forEach((card) => {
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
          {/* Hero project: real-world platform built at Kranio (internal, no public demo) */}
          <div className="first-project-wrapper showcase-card">
            <div className="image-wrapper">
              <LazyImage src="/images/project1.0.png" alt="Screenshot of the Blue Express logistics platform showing a real-time tracking dashboard" />
            </div>
            <div className="text-content">
              <h2>Internal Logistics Platform — Blue Express</h2>

              <p className="text-white-50 md:text-xl">
                A real-time tracking system built at Kranio with React, Next.js,
                Node.js, and MongoDB. Live map tracking, barcode scanning, and
                incident reporting with Datadog observability.
              </p>
              <p className="text-white-50 text-sm italic mt-2">
                Proprietary platform — not publicly available.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper">
            {sideProjects.map((project) => (
              <div className="project showcase-card" key={project.title}>
                <div className={`image-wrapper ${project.bg}`}>
                  <LazyImage src={project.image} alt={project.imageAlt} />
                </div>
                <h2>{project.title}</h2>
                <p className="text-white-50 md:text-sm">{project.description}</p>
                <ProjectLinks
                  demoUrl={project.demoUrl}
                  repoUrl={project.repoUrl}
                  title={project.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
