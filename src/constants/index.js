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
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 3, suffix: "+", label: "Companies Worked At" },
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

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can't say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
    alt: "Profile photo of Esther Howard",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
    alt: "Profile photo of Wade Warren",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
    alt: "Profile photo of Guy Hawkins",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
    alt: "Profile photo of Marvin McKinney",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional!",
    imgPath: "/images/client4.png",
    alt: "Profile photo of Floyd Miles",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
    alt: "Profile photo of Albert Flores",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/orozcorei",
    alt: "Instagram social media icon",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    alt: "Facebook social media icon",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    alt: "X (Twitter) social media icon",
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
