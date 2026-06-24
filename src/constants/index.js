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
  { text: "Ideas", imgPath: "/images/ideas.svg", alt: "Light bulb icon representing innovative ideas" },
  { text: "Concepts", imgPath: "/images/concepts.svg", alt: "Abstract shapes icon symbolizing creative concepts" },
  { text: "Designs", imgPath: "/images/designs.svg", alt: "Design tools icon representing visual design" },
  { text: "Code", imgPath: "/images/code.svg", alt: "Code brackets icon representing software development" },
  { text: "Ideas", imgPath: "/images/ideas.svg", alt: "Light bulb icon representing innovative ideas" },
  { text: "Concepts", imgPath: "/images/concepts.svg", alt: "Abstract shapes icon symbolizing creative concepts" },
  { text: "Designs", imgPath: "/images/designs.svg", alt: "Design tools icon representing visual design" },
  { text: "Code", imgPath: "/images/code.svg", alt: "Code brackets icon representing software development" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 6, suffix: "+", label: "Companies Worked At" },
  { value: 20, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Commitment to Code Quality" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
    alt: "Partner company logo",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
    alt: "Partner company logo",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
    alt: "Partner company logo",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
    alt: "Partner company logo",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
    alt: "Partner company logo",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
    alt: "Partner company logo",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
    alt: "Partner company logo",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
    alt: "Partner company logo",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
    alt: "Partner company logo",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
    alt: "Partner company logo",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
    alt: "Partner company logo",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Clean & Scalable Code",
    desc: "I write maintainable, scalable code using modern best practices to ensure long-term project health.",
    alt: "SEO optimization icon representing clean and scalable code practices",
  },
  {
    imgPath: "/images/chat.png",
    title: "Team Collaboration",
    desc: "I thrive in collaborative environments, contributing ideas and mentoring teammates when needed.",
    alt: "Chat bubble icon representing team collaboration and communication",
  },
  {
    imgPath: "/images/time.png",
    title: "Continuous Learning",
    desc: "Always improving through courses, certifications, and hands-on experimentation with new technologies.",
    alt: "Clock icon representing continuous learning and growth mindset",
  },
];

const techStackImgs = [
  {
    name: "TypeScript",
    imgPath: "/images/logos/typescript.png",
    alt: "TypeScript logo - typed superset of JavaScript",
  },
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
    alt: "React logo - JavaScript library for building user interfaces",
  },
  {
    name: "Mobile App Developer",
    imgPath: "/images/logos/react-native.svg",
    alt: "React Native logo - framework for building native mobile apps",
  },
  {
    name: "Tailwind CSS",
    imgPath: "/images/logos/tailwindcss.png",
    alt: "Tailwind CSS logo - utility-first CSS framework",
  },
  {
    name: "Next.js Developer",
    imgPath: "/images/logos/nextjs.png",
    alt: "Next.js logo - React framework for production",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
    alt: "Node.js logo - JavaScript runtime for server-side development",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
    alt: "Three.js logo - 3D graphics library for WebGL",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
    alt: "Git logo - distributed version control system",
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

const expCards = [
  {
    review:
      "Rei brought senior-level ownership to our AI environment work — his MCP servers and deterministic state design set a high bar for how reliably we could train and evaluate agents.",
    logoPath: "/images/logo-fleet.svg",
    logoAlt: "Fleet AI company logo",
    title: "Full Stack & AI Environment Developer",
    date: "Dec 2025 – Jun 2026",
    responsibilities: [
      "Engineered deterministic “Fleet Environments” to train and evaluate frontier AI agents.",
      "Built Model Context Protocol (MCP) servers and reactive Svelte 5 UIs over a SQLite + Drizzle state layer.",
      "Implemented full backend activity logging with atomic SQL transactions in Node.js and Express.",
    ],
  },
  {
    review:
      "Rei led complex frontend work across our SaaS and ERP platforms with speed and care, shipping AI-powered features and clean, maintainable architecture that scaled with the product.",
    logoPath: "/images/logo-geeks5g.png",
    logoAlt: "Geeks5G Marketing Agency company logo",
    title: "Frontend Web Developer",
    date: "May 2025 – Feb 2026",
    responsibilities: [
      "Built the frontend of an all-in-one social media management SaaS with Next.js.",
      "Integrated AI content features and secure OAuth flows (including Google My Business).",
      "Developed core ERP modules with Next-Auth, internationalization (next-intl), and Stripe payments.",
    ],
  },
  {
    review:
      "Reinaldo took ownership of key frontend components and helped improve the performance and scalability of our internal logistics platform. His technical contributions were key to our team's success.",
    imgPath: "/images/exp1.0.png",
    imgAlt: "Software development workspace with code editor and logistics dashboard",
    logoPath: "/images/logo1.0.png",
    logoAlt: "Blue Express company logo",
    title: "Software Developer",
    date: "May 2022 – March 2025",
    responsibilities: [
      "Built web applications using React, Next.js, and TailwindCSS.",
      "Integrated server-side logic with Node.js and MongoDB.",
      "Implemented real-time features and performance optimizations.",
    ],
  },
  {
    review:
      "Reinaldo's work on our mobile app improved user experience and reliability. His ability to build cross-platform features made a real difference for the product.",
    // imgPath: "/images/exp2.png",
    logoPath: "/images/logo1.2.svg",
    logoAlt: "Freelance client company logo",
    title: "React Native Developer (Freelance)",
    date: "Nov 2023 – June 2024",
    responsibilities: [
      "Developed a mobile app for restaurant reservations and bill splitting.",
      "Used React Native and Expo to build accessible UIs for iOS and Android.",
      "Contributed to state management, navigation, and UI testing.",
    ],
  },
  {
    review:
      "Reinaldo's attention to detail and ability to translate design into responsive code significantly enhanced our clients' web presence.",
    imgPath: "/images/exp1.3.png",
    imgAlt: "Responsive web design mockups on multiple devices",
    logoPath: "/images/logo1.3.png",
    logoAlt: "Web development agency company logo",
    title: "Frontend Web Developer",
    date: "June 2021 – May 2022",
    responsibilities: [
      "Developed responsive interfaces with HTML, CSS, and JavaScript.",
      "Implemented mobile-first designs to improve engagement.",
      "Fixed bugs and performed usability testing across browsers.",
    ],
  },
  {
    review:
      "Reinaldo showed great commitment to mentoring junior developers. He encouraged collaboration and shared best practices with clarity and empathy.",
    imgPath: "/images/exp1.4.png",
    imgAlt: "Collaborative coding session with teaching materials and students",
    logoPath: "/images/logo1.4.jpg",
    logoAlt: "Coding bootcamp institution logo",
    title: "Full-Stack Teaching Assistant",
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
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/orozcorei",
    alt: "Instagram social media icon",
  },
];

export {
  words,
  abilities,
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
