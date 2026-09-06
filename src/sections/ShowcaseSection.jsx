import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LazyImage from "../components/LazyImage";
import { prefersReducedMotion } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const featured = {
  title: "matchday-mcp",
  image: "/images/project-matchday.png",
  imageAlt:
    "matchday-mcp landing page — an open-source MCP server that streams live football data into Claude",
  description:
    "An open-source Model Context Protocol server (TypeScript + Zod) that streams live football data — standings, fixtures, scorers, head-to-heads — straight into Claude and any MCP client. Ships with a SvelteKit + Svelte 5 playground and is published to npm.",
  tags: ["TypeScript", "Zod", "MCP / AI", "SvelteKit", "Svelte 5"],
  demoUrl: "https://matchday-mcp-web.vercel.app",
  repoUrl: "https://github.com/reiorozco/matchday-mcp",
  npmUrl: "https://www.npmjs.com/package/matchday-mcp",
};

const production = {
  title: "Internal Logistics Platform — Blue Express",
  image: "/images/project1.0.png",
  imageAlt:
    "Blue Express logistics platform showing a real-time tracking dashboard",
  description:
    "Real-time tracking built at Kranio (React, Next.js, Node.js, MongoDB) — live map tracking, barcode scanning, and incident reporting with Datadog observability.",
  tags: ["React", "Next.js", "Node.js", "MongoDB"],
  note: "Proprietary platform — not publicly available.",
};

const backendProof = {
  label: "Vidly — REST API (Node, Express, JWT, Jest, CI & Swagger)",
  demoUrl: "https://vidly-app-six.vercel.app",
  repoUrl: "https://github.com/reiorozco/vidly-api",
};

const Tags = ({ tags }) => (
  <ul className="flex flex-wrap gap-2 mt-4" aria-label="Tech stack">
    {tags.map((tag) => (
      <li
        key={tag}
        className="text-xs px-2.5 py-1 rounded-full border border-white/15 text-white-50"
      >
        {tag}
      </li>
    ))}
  </ul>
);

const ProjectLinks = ({ demoUrl, repoUrl, npmUrl, title }) => (
  <div className="flex flex-wrap items-center gap-3 mt-5">
    {demoUrl && (
      <a
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open the live demo of ${title}`}
        className="inline-flex items-center justify-center gap-2 min-h-11 px-4 py-3 rounded-lg bg-white text-black text-sm font-semibold hover:bg-white-50 transition-colors"
      >
        <img src="/images/arrow-right.svg" alt="" aria-hidden="true" className="size-4" />
        Live demo
      </a>
    )}
    {repoUrl && (
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View the source code of ${title} on GitHub`}
        className="inline-flex items-center justify-center gap-2 min-h-11 px-4 py-3 rounded-lg border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
      >
        <img src="/images/github.svg" alt="" aria-hidden="true" className="size-4" />
        GitHub
      </a>
    )}
    {npmUrl && (
      <a
        href={npmUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title} on npm`}
        className="inline-flex items-center justify-center gap-2 min-h-11 px-4 py-3 rounded-lg border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
      >
        <img src="/images/npm.svg" alt="" aria-hidden="true" className="size-4" />
        npm
      </a>
    )}
  </div>
);

const AppShowcase = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.set(sectionRef.current, { opacity: 1 });
    gsap.set(".showcase-card", { opacity: 1, y: 0 });

    if (prefersReducedMotion()) return;

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
          <div className="first-project-wrapper showcase-card">
            <div className="image-wrapper featured-media">
              <LazyImage src={featured.image} alt={featured.imageAlt} />
            </div>
            <div className="text-content">
              <h2 className="display-type">{featured.title}</h2>
              <p className="text-white-50 md:text-xl max-w-2xl">{featured.description}</p>
              <Tags tags={featured.tags} />
              <ProjectLinks
                demoUrl={featured.demoUrl}
                repoUrl={featured.repoUrl}
                npmUrl={featured.npmUrl}
                title={featured.title}
              />
            </div>
          </div>

          <div className="project-list-wrapper">
            <div className="project showcase-card">
              <div className="image-wrapper bg-black-100">
                <LazyImage src={production.image} alt={production.imageAlt} />
              </div>
              <h2 className="display-type">{production.title}</h2>
              <p className="text-white-50 md:text-sm">{production.description}</p>
              <Tags tags={production.tags} />
              <p className="text-white-50 text-sm italic mt-3">{production.note}</p>
            </div>
          </div>
        </div>

        <p className="text-white-50 text-sm md:text-base mt-12">
          Backend proof:{" "}
          <a
            href={backendProof.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-2 hover:no-underline"
          >
            {backendProof.label}
          </a>{" "}
          ·{" "}
          <a
            href={backendProof.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:no-underline"
          >
            live demo
          </a>
        </p>
      </div>
    </section>
  );
};

export default AppShowcase;
