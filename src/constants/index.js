const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Web Apps", imgPath: "/images/code.svg", alt: "Code brackets icon representing web applications" },
  { text: "Mobile Apps", imgPath: "/images/designs.svg", alt: "Design tools icon representing mobile applications" },
  { text: "AI Features", imgPath: "/images/ideas.svg", alt: "Light bulb icon representing AI-powered features" },
  { text: "APIs", imgPath: "/images/concepts.svg", alt: "Abstract shapes icon representing backend APIs" },
  { text: "Web Apps", imgPath: "/images/code.svg", alt: "Code brackets icon representing web applications" },
  { text: "Mobile Apps", imgPath: "/images/designs.svg", alt: "Design tools icon representing mobile applications" },
  { text: "AI Features", imgPath: "/images/ideas.svg", alt: "Light bulb icon representing AI-powered features" },
  { text: "APIs", imgPath: "/images/concepts.svg", alt: "Abstract shapes icon representing backend APIs" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { value: 6, suffix: "+", label: "Production Apps Shipped" },
  { value: 4, suffix: "+", label: "Countries (Remote Teams)" },
];

// Companies Rei has worked with — used as a social-proof marquee strip.
const logoIconsList = [
  { imgPath: "/images/logo-fleet.svg", alt: "Fleet AI logo" },
  { imgPath: "/images/logo-geeks5g.png", alt: "Geeks5G Marketing Agency logo" },
  { imgPath: "/images/logo1.0.png", alt: "Blue Express logo" },
  { imgPath: "/images/logo1.2.svg", alt: "Cuculi logo" },
  { imgPath: "/images/logo1.3.png", alt: "Work2 Creative Agency logo" },
  { imgPath: "/images/logo1.4.jpg", alt: "Henry coding bootcamp logo" },
];

const techStackImgs = [
  {
    name: "React",
    imgPath: "/images/logos/react.png",
    alt: "React logo - JavaScript library for building user interfaces",
  },
  {
    name: "Next.js",
    imgPath: "/images/logos/nextjs.png",
    alt: "Next.js logo - React framework for production",
  },
  {
    name: "Node.js",
    imgPath: "/images/logos/node.png",
    alt: "Node.js logo - JavaScript runtime for server-side development",
  },
  {
    name: "TypeScript",
    imgPath: "/images/logos/typescript.png",
    alt: "TypeScript logo - typed superset of JavaScript",
  },
  {
    name: "React Native",
    imgPath: "/images/logos/react-native.svg",
    alt: "React Native logo - framework for building native mobile apps",
  },
  {
    name: "Svelte 5",
    imgPath: "/images/logos/svelte.svg",
    alt: "Svelte logo - reactive UI framework",
  },
  {
    name: "MCP · AI",
    imgPath: "/images/logos/mcp.svg",
    alt: "Model Context Protocol logo - connecting tools to AI models",
  },
  {
    name: "Tailwind CSS",
    imgPath: "/images/logos/tailwindcss.png",
    alt: "Tailwind CSS logo - utility-first CSS framework",
  },
  {
    name: "Three.js",
    imgPath: "/images/logos/three.png",
    alt: "Three.js logo - 3D graphics library for WebGL",
  },
  {
    name: "Git",
    imgPath: "/images/logos/git.svg",
    alt: "Git logo - distributed version control system",
  },
  {
    name: "Python",
    imgPath: "/images/logos/python.svg",
    alt: "Python logo - general-purpose programming language",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

// `impact` is a first-person, resume-style highlight (NOT a third-party quote).
const expCards = [
  {
    impact:
      "Owned MCP server design and a deterministic SQLite/Drizzle state layer that made frontier-agent training and evaluation fully reproducible.",
    logoPath: "/images/logo-fleet.svg",
    logoAlt: "Fleet AI company logo",
    title: "Full Stack & AI Environment Developer",
    company: "Fleet AI",
    date: "Dec 2025 – Jun 2026",
    responsibilities: [
      "Engineered deterministic “Fleet Environments” to train and evaluate frontier AI agents.",
      "Built Model Context Protocol (MCP) servers and reactive Svelte 5 UIs over a SQLite + Drizzle state layer.",
      "Implemented full backend activity logging with atomic SQL transactions in Node.js and Express.",
    ],
  },
  {
    impact:
      "Shipped AI-powered features and clean, scalable architecture across an all-in-one social-media SaaS and a corporate ERP.",
    logoPath: "/images/logo-geeks5g.png",
    logoAlt: "Geeks5G Marketing Agency company logo",
    title: "Frontend Web Developer",
    company: "Geeks5G Marketing Agency",
    date: "May 2025 – Feb 2026",
    responsibilities: [
      "Built the frontend of an all-in-one social media management SaaS with Next.js.",
      "Integrated AI content features and secure OAuth flows (including Google My Business).",
      "Developed core ERP modules with Next-Auth, internationalization (next-intl), and Stripe payments.",
    ],
  },
  {
    impact:
      "Built and optimized real-time features for Blue Express's internal logistics platform, improving performance and reliability at scale.",
    imgPath: "/images/exp1.0.png",
    imgAlt: "Software development workspace with code editor and logistics dashboard",
    logoPath: "/images/logo1.0.png",
    logoAlt: "Blue Express company logo",
    title: "Software Developer",
    company: "Kranio · Blue Express",
    date: "May 2022 – March 2025",
    responsibilities: [
      "Built web applications using React, Next.js, and TailwindCSS.",
      "Integrated server-side logic with Node.js and MongoDB.",
      "Implemented real-time features and performance optimizations.",
    ],
  },
  {
    impact:
      "Shipped a cross-platform iOS/Android reservations app end to end, from concept to store maintenance.",
    // imgPath: "/images/exp2.png",
    logoPath: "/images/logo1.2.svg",
    logoAlt: "Cuculi company logo",
    title: "React Native Developer",
    company: "Cuculi",
    date: "Nov 2023 – June 2024",
    responsibilities: [
      "Developed a mobile app for restaurant reservations and bill splitting.",
      "Used React Native and Expo to build accessible UIs for iOS and Android.",
      "Contributed to state management, navigation, and UI testing.",
    ],
  },
  {
    impact:
      "Translated designs into responsive, accessible interfaces that improved clients' web presence across devices.",
    imgPath: "/images/exp1.3.png",
    imgAlt: "Responsive web design mockups on multiple devices",
    logoPath: "/images/logo1.3.png",
    logoAlt: "Work2 Creative Agency company logo",
    title: "Frontend Web Developer",
    company: "Work2 Creative Agency",
    date: "June 2021 – May 2022",
    responsibilities: [
      "Developed responsive interfaces with HTML, CSS, and JavaScript.",
      "Implemented mobile-first designs to improve engagement.",
      "Fixed bugs and performed usability testing across browsers.",
    ],
  },
  {
    impact:
      "Mentored student developers through an 800+ hour full-stack curriculum, leading code reviews and daily agile standups.",
    imgPath: "/images/exp1.4.png",
    imgAlt: "Collaborative coding session with teaching materials and students",
    logoPath: "/images/logo1.4.jpg",
    logoAlt: "Henry coding bootcamp logo",
    title: "Full-Stack Teaching Assistant",
    company: "Henry",
    date: "Jan 2022 – Apr 2022",
    responsibilities: [
      "Guided students through the fundamentals of web development.",
      "Supported coding challenges and facilitated Pair Programming sessions.",
      "Proposed improvements to the Bootcamp's technical approach.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

// NOTE: Placeholder testimonials from the original template were removed.
// This section is not rendered (not imported in App.jsx). Add real testimonials
// here when available, then re-enable the section.
const testimonials = [];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/github.svg",
    url: "https://github.com/reiorozco",
    alt: "GitHub profile icon",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/reiorozco",
    alt: "LinkedIn social media icon",
  },
];

export {
  words,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
