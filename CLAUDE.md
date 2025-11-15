# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a 3D interactive portfolio website built with React 19, Three.js, React Three Fiber, GSAP, and Tailwind CSS. The site showcases developer experience, projects, and skills through immersive 3D animations and modern web technologies.

## Development Commands

```bash
# Start development server (Vite)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Architecture

### Core Structure

The application follows a component-based architecture with clear separation between presentational sections and reusable components:

- **App.jsx**: Main entry point that orchestrates all sections in a single-page layout
- **sections/**: Full-page sections that compose the portfolio (Hero, Experience, Contact, etc.)
- **components/**: Reusable UI components and 3D model wrappers
- **constants/index.js**: Centralized data store for all static content (navigation, logos, experience cards, testimonials, tech stack)

### 3D Architecture (React Three Fiber)

3D components are organized under `components/models/`:

- **hero_models/**: 3D room scene with particles, lighting, and interactive controls
  - `HeroExperience.jsx`: Canvas wrapper with OrbitControls and responsive camera settings
  - `Room.jsx`: Main 3D room model with custom materials and selective bloom effects
  - `Particles.jsx`: Floating particle system
  - `HeroLights.jsx`: Scene lighting setup

- **tech_logos/**: 3D tech stack icons (React, Node.js, Three.js, Git, Python GLB models)
  - `TechIconCardExperience.jsx`: Animated floating tech logos with rotation and hover effects

- **contact/**: 3D computer model for contact section
  - `ContactExperience.jsx`: Canvas wrapper for contact page 3D scene
  - `Computer.jsx`: 3D computer model component

### Animation System

GSAP animations are implemented using the `@gsap/react` hook:
- `useGSAP()` hook for declarative animations in components
- Animations for text reveals, counters, and interactive elements
- Scroll-triggered animations in various sections

### Responsive Design

- Uses `react-responsive` for media queries and conditional rendering
- Mobile-first approach with Tailwind CSS
- 3D scenes adjust scale and camera based on device (isMobile, isTablet flags)
- OrbitControls zoom disabled on tablets for better touch experience

## Key Features & Implementation Details

### EmailJS Integration

The Contact section uses EmailJS for form submissions:
- Environment variables required: `VITE_APP_EMAILJS_SERVICE_ID`, `VITE_APP_EMAILJS_TEMPLATE_ID`, `VITE_APP_EMAILJS_PUBLIC_KEY`
- Credentials stored in `.env` file (not committed to repo per `.gitignore`)
- Form validation handled with HTML5 required attributes

### 3D Models

- GLB models stored in `public/models/`
- Auto-generated Three.js components using `gltfjsx` (see Room.jsx header comment)
- Custom materials applied to override default GLB materials
- Selective bloom post-processing for screen glow effects

### Content Management

All portfolio content (work experience, tech stack, testimonials, social links) is managed through `src/constants/index.js`. Update this file to modify:
- Navigation links
- Experience cards and job history
- Tech stack icons and models
- Social media links
- Animated text sequences

## Styling

- Tailwind CSS 4.x with Vite plugin
- Custom CSS in `src/index.css` for complex animations and 3D-specific styles
- Custom utility classes for gradients, glass effects, and animations
- Color palette: dark theme with accent colors (purple #8338ec, red #d90429)

## Build Configuration

- Vite 6.x as build tool and dev server
- React plugin with Fast Refresh enabled
- ESLint configured with React Hooks and Prettier integration
- Modern browser targets (ES2020+)
