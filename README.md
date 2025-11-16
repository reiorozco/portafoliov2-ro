<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/-Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
    <img src="https://img.shields.io/badge/-GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  </div>

  <h1 align="center">🌟 Interactive 3D Portfolio</h1>

  <p align="center">
    A modern, high-performance portfolio website featuring immersive 3D animations and interactive experiences
  </p>

  <p align="center">
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-project-structure">Structure</a> •
    <a href="#-documentation">Documentation</a>
  </p>
</div>

---

## ✨ Features

- **🎨 Immersive 3D Experience** - Interactive 3D room and computer models powered by Three.js
- **⚡ High Performance** - Optimized animations with GSAP and React Three Fiber
- **📱 Fully Responsive** - Seamless experience across desktop, tablet, and mobile devices
- **♿ Accessible** - WCAG compliant with ARIA labels and keyboard navigation
- **🎭 Smooth Animations** - ScrollTrigger-based animations with optimized performance
- **💼 Project Showcase** - Interactive display of featured projects with detailed information
- **📧 Contact Form** - Integrated EmailJS for direct communication
- **🌐 SEO Optimized** - Complete meta tags for social media sharing

---

## 🛠️ Tech Stack

### Core Technologies
- **React 19** - Latest React with improved performance
- **Vite 7.2.2** - Lightning-fast build tool and dev server
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js

### Animation & Styling
- **GSAP 3.12.7** - Professional-grade animation library
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **@react-three/drei** - Useful helpers for R3F
- **@react-three/postprocessing** - Post-processing effects

### Additional Tools
- **EmailJS** - Email service for contact form
- **vite-plugin-image-optimizer** - Automatic image optimization
- **r3f-perf** - Performance monitoring (dev mode)

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 20.19+ or 22.12+ (recommended: 22.14.0)
- **npm** 9+ or **yarn** 1.22+
- **Git** 2.0+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/reiorozco/portafoliov2-ro.git
   cd portafoliov2-ro
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

   Add your EmailJS credentials:
   ```env
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173`

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server at `localhost:5173` |
| `npm run build` | Build for production (output: `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 📁 Project Structure

```
portafoliov2-ro/
├── public/                 # Static assets
│   ├── models/            # 3D models (.glb files)
│   └── images/            # Images and textures
├── src/
│   ├── components/        # Reusable components
│   │   ├── models/       # 3D component wrappers
│   │   │   ├── hero_models/      # Hero section 3D
│   │   │   ├── tech_logos/       # Tech stack 3D icons
│   │   │   └── contact/          # Contact section 3D
│   │   ├── AnimatedCounter.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── LazyImage.jsx
│   │   └── ...
│   ├── sections/          # Full-page sections
│   │   ├── Hero.jsx
│   │   ├── ShowcaseSection.jsx
│   │   ├── Experience.jsx
│   │   ├── TechStack.jsx
│   │   └── Contact.jsx
│   ├── constants/         # Configuration and data
│   │   ├── index.js      # Static content
│   │   └── config.js     # App configuration
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # App entry point
│   └── index.css         # Global styles
├── specs/                # Project documentation
│   ├── PROJECT_HISTORY.md  # Development history
│   └── README.md           # Documentation index
├── .env.example          # Environment variables template
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
└── package.json          # Dependencies and scripts
```

---

## 🎨 Key Features Breakdown

### 3D Interactive Room (Hero Section)
- Custom 3D room model with selective bloom effects
- Floating particle system
- Interactive OrbitControls
- Responsive camera settings
- Performance-optimized lighting

### Animated Counter
- GSAP-powered number animations
- Stagger effect for visual appeal
- Auto-triggers on page load
- Smooth easing with 2.5s duration

### Project Showcase
- Lazy-loaded images with fade-in
- Smooth scroll animations
- Responsive grid layout
- Interactive project cards

### Contact Form
- EmailJS integration
- Form validation
- Success/error visual feedback
- 3D computer model background

---

## 📚 Documentation

Comprehensive project documentation is available in the `specs/` directory:

- **[specs/PROJECT_HISTORY.md](./specs/PROJECT_HISTORY.md)** - Complete development history with 7 sessions documented
- **[specs/README.md](./specs/README.md)** - Documentation index and project overview

### Development History Highlights

- ✅ **Phase 1-6:** Complete optimization (performance, accessibility, code splitting, animations)
- ✅ **Session 7 (2025-11-16):** Bug fixes + Vite 7.2.2 security update
- 📊 **Progress:** 69% of planned tasks (24/35 completed)
- 🎯 **Status:** Production-ready with active maintenance

---

## 🔒 Security

This project uses:
- **Vite 7.2.2** - Latest stable version with all security patches
- **Environment variables** - Sensitive data protected via `.env`
- **Input validation** - Form inputs sanitized
- **HTTPS recommended** - For production deployments

**Recent Security Update (2025-11-16):**
- Resolved 3 CVEs by upgrading from Vite 6.3.4 to 7.2.2
- All dependencies updated to latest secure versions

---

## ⚡ Performance

### Optimization Techniques Implemented

- **Code Splitting** - Lazy loading of below-fold sections
- **Image Optimization** - Automatic compression (58% size reduction)
- **3D Optimization** - Reduced lighting, optimized materials
- **GSAP Optimization** - ScrollTrigger batching, `once: true` flags
- **React Optimization** - `useMemo` for expensive computations

### Performance Metrics (Target)

| Metric | Target | Notes |
|--------|--------|-------|
| Lighthouse Performance | 90+ | Production build |
| First Contentful Paint | <1.5s | Fast initial render |
| Time to Interactive | <3s | Quick user interaction |
| FPS Desktop | 60fps | Smooth animations |
| FPS Mobile | 50fps+ | Optimized for devices |

---

## 🤝 Contributing

This is a personal portfolio project, but suggestions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is **MIT licensed** - feel free to use it as inspiration for your own portfolio!

---

## 👨‍💻 Author

**Rei Orozco**

- Website: [Your Portfolio URL]
- LinkedIn: [linkedin.com/in/reiorozco](https://www.linkedin.com/in/reiorozco)
- Instagram: [@orozcorei](https://www.instagram.com/orozcorei)
- GitHub: [@reiorozco](https://github.com/reiorozco)

---

## 🙏 Acknowledgments

- 3D models created with Blender and optimized with gltf-transform
- Animations powered by GSAP and GreenSock
- Icons and images from various open-source resources
- Inspiration from the Three.js and React communities

---

<div align="center">
  <p>Built with ❤️ using React, Three.js, and GSAP</p>
  <p>
    <a href="#top">⬆️ Back to Top</a>
  </p>
</div>
