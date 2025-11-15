# 📋 Plan de Mejora Multifase - Portafolio 3D Interactivo

**Última actualización:** 2025-01-15
**Estado:** En planificación
**Versión:** 1.0.0

---

## 📊 Resumen Ejecutivo

### Estado Actual
- **Bundle:** 1.43MB (455KB gzipped) - ⚠️ Muy grande
- **Imágenes:** 46 sin optimizar (~2.5MB)
- **Canvas 3D:** 3 instancias separadas (alto uso de GPU)
- **Code splitting:** ❌ No implementado
- **Accesibilidad:** ⚠️ Problemas críticos
- **Performance 3D:** ⚠️ Materiales recreándose en cada render

### Objetivos
- ✅ Reducir bundle inicial en ~60% (455KB → 180KB gzipped)
- ✅ Mejorar tiempo de carga en 3-5 segundos
- ✅ Alcanzar 100/100 en Lighthouse Accessibility
- ✅ Optimizar rendimiento 3D (60fps estables)
- ✅ Implementar mejores prácticas de React 19

### Impacto Esperado

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| Bundle inicial (gzipped) | 455KB | ~180KB | 60% ⬇️ |
| First Contentful Paint | ~3.5s | ~1.2s | 66% ⬇️ |
| Time to Interactive | ~5.8s | ~2.5s | 57% ⬇️ |
| Lighthouse Performance | ~65 | ~90 | +38% |
| Lighthouse Accessibility | ~75 | 100 | +33% |
| FPS (móvil) | ~30fps | ~55fps | +83% |
| Modelos 3D | 2.1MB | ~700KB | 67% ⬇️ |
| Imágenes | 2.5MB | ~1MB | 60% ⬇️ |

---

## 🗓️ Calendario de Implementación

```
Semana 1: FASE 1 + FASE 2
├─ Día 1-2: Optimizaciones Críticas
├─ Día 3-4: Accesibilidad
└─ Día 5: SEO y Meta Tags

Semana 2: FASE 3 + FASE 4
├─ Día 1-2: Code Splitting
├─ Día 3-4: Optimización de imágenes
└─ Día 5: Optimización 3D

Semana 3: FASE 4 + FASE 5 + FASE 6
├─ Día 1-2: Draco y Canvas consolidation
├─ Día 3: GSAP optimizations
└─ Día 4-5: Calidad de código
```

---

## 📑 Índice de Fases

1. [FASE 1: Optimizaciones Críticas de Rendimiento](#fase-1-optimizaciones-críticas-de-rendimiento) (2-3 días)
2. [FASE 2: Mejoras de Accesibilidad y UX](#fase-2-mejoras-de-accesibilidad-y-ux) (2-3 días)
3. [FASE 3: Code Splitting y Lazy Loading](#fase-3-code-splitting-y-lazy-loading) (3-4 días)
4. [FASE 4: Optimización 3D Avanzada](#fase-4-optimización-3d-avanzada) (2-3 días)
5. [FASE 5: GSAP y Animaciones](#fase-5-gsap-y-animaciones) (1-2 días)
6. [FASE 6: Calidad de Código](#fase-6-calidad-de-código) (2-3 días)

---

## FASE 1: Optimizaciones Críticas de Rendimiento

**Duración:** 2-3 días
**Impacto:** Alto - Mejora inmediata del 40-50%
**Estado:** ⏳ Pendiente

### Tareas

#### 1.1 Corrección de Materiales 3D (CRÍTICO)
- [ ] **Archivo:** `src/components/models/hero_models/Room.jsx:17-43`
- [ ] **Problema:** Materiales recreándose en cada render
- [ ] **Solución:** Mover a `useMemo`
- [ ] **Impacto:** Elimina memory leaks, mejora performance

<details>
<summary>Ver implementación</summary>

```javascript
import { useMemo } from 'react';

export function Room(props) {
  const { nodes, materials } = useGLTF("/models/optimized-room.glb");
  const screensRef = useRef();
  const matcapTexture = useTexture("/images/textures/mat1.png");

  const roomMaterials = useMemo(() => ({
    curtain: new THREE.MeshPhongMaterial({ color: "#d90429" }),
    body: new THREE.MeshPhongMaterial({ map: matcapTexture }),
    table: new THREE.MeshPhongMaterial({ color: "#582f0e" }),
    radiator: new THREE.MeshPhongMaterial({ color: "#fff" }),
    comp: new THREE.MeshStandardMaterial({ color: "#fff" }),
    pillow: new THREE.MeshPhongMaterial({ color: "#8338ec" }),
    chair: new THREE.MeshPhongMaterial({ color: "#000" })
  }), [matcapTexture]);

  // Usar roomMaterials.curtain, roomMaterials.body, etc.
}
```
</details>

---

#### 1.2 Implementar Preloading de Modelos 3D
- [ ] **Archivos:**
  - `src/components/models/tech_logos/TechIconCardExperience.jsx`
  - `src/components/models/hero_models/HeroExperience.jsx`
  - `src/components/models/contact/ContactExperience.jsx`
- [ ] **Crear:** `src/utils/preloadAssets.js`
- [ ] **Solución:** Usar `useGLTF.preload()`
- [ ] **Impacto:** Carga paralela de modelos, UX más fluida

<details>
<summary>Ver implementación</summary>

```javascript
// src/utils/preloadAssets.js
import { useGLTF } from '@react-three/drei';

const models = [
  '/models/optimized-room.glb',
  '/models/computer-optimized-transformed.glb',
  '/models/react_logo-transformed.glb',
  '/models/python-transformed.glb',
  '/models/node-transformed.glb',
  '/models/three.js-transformed.glb',
  '/models/git-svg-transformed.glb'
];

models.forEach(model => useGLTF.preload(model));

export default models;

// En App.jsx
import './utils/preloadAssets';
```
</details>

---

#### 1.3 Agregar Loading States Visuales
- [ ] **Archivo:** `src/components/models/hero_models/HeroExperience.jsx:28`
- [ ] **Crear:** `src/components/CanvasLoader.jsx`
- [ ] **Problema:** Usuarios ven pantalla en blanco
- [ ] **Impacto:** Feedback visual inmediato

<details>
<summary>Ver implementación</summary>

```javascript
// src/components/CanvasLoader.jsx
export default function CanvasLoader() {
  return (
    <div className="flex-center h-full">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
        <p className="text-white-50 mt-4 text-center">Loading 3D Scene...</p>
      </div>
    </div>
  );
}

// En HeroExperience.jsx
import CanvasLoader from '../../CanvasLoader';

<Suspense fallback={<CanvasLoader />}>
  <HeroLights />
  <Particles count={100} />
  <group scale={isMobile ? 0.7 : 1} position={[0, -3.5, 0]}>
    <Room />
  </group>
</Suspense>
```
</details>

---

#### 1.4 Optimizar Importaciones de Three.js
- [ ] **Archivos:**
  - `src/components/models/tech_logos/TechIconCardExperience.jsx:4`
  - `src/components/models/hero_models/Room.jsx:10`
  - `src/components/models/hero_models/HeroLights.jsx:1`
- [ ] **Problema:** Importando namespace completo
- [ ] **Impacto:** Reduce bundle en ~15-20KB

<details>
<summary>Ver implementación</summary>

```javascript
// ❌ ANTES
import * as THREE from "three";

// ✅ DESPUÉS
import {
  MeshPhongMaterial,
  MeshStandardMaterial,
  Vector3,
  SpotLight,
  PointLight
} from "three";
```
</details>

---

#### 1.5 Optimizar Sistema de Partículas
- [ ] **Archivo:** `src/components/models/hero_models/Particles.jsx:22-31`
- [ ] **Solución:** Reducir count en móvil, optimizar loop
- [ ] **Impacto:** Mejora FPS en móviles

<details>
<summary>Ver implementación</summary>

```javascript
const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
const particleCount = isMobile ? 30 : 100;

useFrame(() => {
  if (!mesh.current) return;

  const positions = mesh.current.geometry.attributes.position.array;
  let needsUpdate = false;

  for (let i = 0; i < particleCount; i++) {
    const idx = i * 3;
    let y = positions[idx + 1];
    y -= particles[i].speed;

    if (y < -2) {
      y = Math.random() * 10 + 5;
      needsUpdate = true;
    }
    positions[idx + 1] = y;
  }

  if (needsUpdate) {
    mesh.current.geometry.attributes.position.needsUpdate = true;
  }
});
```
</details>

---

#### 1.6 Eliminar Archivos Duplicados
- [ ] **Acción:** Eliminar `public/models/computer-optimized.glb`
- [ ] **Impacto:** Ahorro de 475KB

```bash
rm public/models/computer-optimized.glb
```

---

## FASE 2: Mejoras de Accesibilidad y UX

**Duración:** 2-3 días
**Impacto:** Alto - Mejora experiencia para todos
**Estado:** ⏳ Pendiente

### Tareas

#### 2.1 Agregar Alt Text Descriptivo
- [ ] **Archivos:**
  - `src/sections/Hero.jsx:21`
  - `src/sections/TechStack.jsx:87`
  - `src/sections/LogoShowcase.jsx`
  - `src/constants/index.js`
- [ ] **Actualizar:** Agregar campo `alt` a todos los objetos de imagen
- [ ] **Impacto:** Accesibilidad, SEO

<details>
<summary>Ver implementación</summary>

```javascript
// constants/index.js
const techStackImgs = [
  {
    name: "TypeScript",
    imgPath: "/images/logos/typescript.png",
    alt: "TypeScript logo - statically typed JavaScript"
  },
  // ...
];

// En componentes
<img
  src={techStackIcon.imgPath}
  alt={techStackIcon.alt || techStackIcon.name}
  className="h-44 w-44"
/>
```
</details>

---

#### 2.2 Implementar Navegación Mobile
- [ ] **Archivo:** `src/components/NavBar.jsx`
- [ ] **Agregar:** Menú hamburguesa con animación GSAP
- [ ] **Impacto:** Navegación completa en móvil

<details>
<summary>Ver implementación</summary>

```javascript
const [isOpen, setIsOpen] = useState(false);

useGSAP(() => {
  if (isOpen) {
    gsap.to('.mobile-menu', {
      x: 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  } else {
    gsap.to('.mobile-menu', {
      x: '100%',
      duration: 0.3,
      ease: 'power2.in'
    });
  }
}, [isOpen]);

return (
  <>
    <button
      className="md:hidden z-50"
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      {/* Icono hamburguesa */}
    </button>

    <nav
      className="mobile-menu fixed right-0 top-0 h-screen w-64 bg-black-100 translate-x-full md:hidden"
      aria-label="Mobile navigation"
    >
      <ul className="flex flex-col gap-6 p-8 mt-20">
        {navLinks.map(({ link, name }) => (
          <li key={name}>
            <a href={link} onClick={() => setIsOpen(false)}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </>
);
```
</details>

---

#### 2.3 Agregar ARIA Labels y Keyboard Navigation
- [ ] **Archivos:**
  - `src/components/Button.jsx:7-42`
  - `src/components/models/hero_models/HeroExperience.jsx`
  - `src/sections/Footer.jsx:13-20`
- [ ] **Agregar:** ARIA attributes, keyboard handlers, rel="noopener noreferrer"
- [ ] **Impacto:** Cumple WCAG 2.1 AA

<details>
<summary>Ver implementación</summary>

```javascript
// Button.jsx
const handleKeyDown = (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    const target = document.querySelector(id);
    target?.scrollIntoView({ behavior: 'smooth' });
  }
};

return (
  <a
    href={id}
    className={`cta-button ${className}`}
    onClick={handleClick}
    onKeyDown={handleKeyDown}
    role="button"
    tabIndex={0}
    aria-label={`Navigate to ${text.toLowerCase()} section`}
  >
    {/* ... */}
  </a>
);

// Canvas components
<Canvas
  aria-label="Interactive 3D room scene with floating particles"
  role="img"
>

// Footer.jsx
<a
  href={socialImg.url}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`Visit my ${socialImg.name} profile`}
>
```
</details>

---

#### 2.4 Mejorar Estados de Loading del Formulario
- [ ] **Archivo:** `src/sections/Contact.jsx`
- [ ] **Agregar:** Estados de success/error visuales
- [ ] **Impacto:** Feedback claro al usuario

<details>
<summary>Ver implementación</summary>

```javascript
const [status, setStatus] = useState({ type: '', message: '' });

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus({ type: '', message: '' });

  try {
    await emailjs.sendForm(/*...*/);
    setForm({ name: "", email: "", message: "" });
    setStatus({
      type: 'success',
      message: '✓ Message sent successfully! I\'ll get back to you soon.'
    });
  } catch (error) {
    setStatus({
      type: 'error',
      message: '✗ Failed to send. Please try again or email me directly.'
    });
  } finally {
    setLoading(false);
  }
};

// JSX
{status.message && (
  <div className={`p-4 rounded-lg ${
    status.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
  }`}>
    {status.message}
  </div>
)}
```
</details>

---

#### 2.5 Agregar Meta Tags y SEO
- [ ] **Archivo:** `index.html`
- [ ] **Agregar:** Meta description, Open Graph, Twitter Cards, theme-color
- [ ] **Crear:** Imágenes de preview (og-image.jpg, twitter-image.jpg)
- [ ] **Impacto:** Mejor SEO y vista previa en redes sociales

<details>
<summary>Ver implementación</summary>

```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- SEO -->
  <meta name="description" content="Interactive 3D portfolio of Rei, a full-stack developer based in Colombia. Explore projects, experience, and skills through immersive 3D animations." />
  <meta name="keywords" content="portfolio, web developer, React, Three.js, 3D portfolio, full-stack developer" />
  <meta name="author" content="Rei Orozco" />
  <link rel="canonical" href="https://yourportfolio.com" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourportfolio.com" />
  <meta property="og:title" content="Rei Orozco - Full-Stack Developer Portfolio" />
  <meta property="og:description" content="Interactive 3D portfolio showcasing projects and experience" />
  <meta property="og:image" content="/og-image.jpg" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Rei Orozco - Full-Stack Developer Portfolio" />
  <meta name="twitter:description" content="Interactive 3D portfolio showcasing projects and experience" />
  <meta name="twitter:image" content="/twitter-image.jpg" />

  <!-- Theme -->
  <meta name="theme-color" content="#8338ec" />

  <title>Rei Orozco | Full-Stack Developer Portfolio</title>
</head>
```
</details>

---

## FASE 3: Code Splitting y Lazy Loading

**Duración:** 3-4 días
**Impacto:** Muy Alto - Reduce bundle en 60%
**Estado:** ⏳ Pendiente

### Tareas

#### 3.1 Implementar Lazy Loading de Secciones
- [ ] **Archivo:** `src/App.jsx`
- [ ] **Solución:** Usar React.lazy() y Suspense
- [ ] **Impacto:** Bundle inicial 455KB → ~150KB gzipped

<details>
<summary>Ver implementación</summary>

```javascript
import { lazy, Suspense } from 'react';
import Navbar from "./components/NavBar";

// Lazy load sections
const Hero = lazy(() => import('./sections/Hero'));
const ShowcaseSection = lazy(() => import('./sections/ShowcaseSection'));
const LogoShowcase = lazy(() => import('./sections/LogoShowcase'));
const FeatureCards = lazy(() => import('./sections/FeatureCards'));
const Experience = lazy(() => import('./sections/Experience'));
const TechStack = lazy(() => import('./sections/TechStack'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

const SectionLoader = () => (
  <div className="min-h-screen flex-center">
    <div className="w-12 h-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
  </div>
);

const App = () => (
  <>
    <Navbar />
    <Suspense fallback={<SectionLoader />}>
      <Hero />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <ShowcaseSection />
    </Suspense>
    {/* ... resto de secciones */}
  </>
);
```
</details>

---

#### 3.2 Lazy Loading de Imágenes con Intersection Observer
- [ ] **Crear:** `src/hooks/useLazyImage.js`
- [ ] **Crear:** `src/components/LazyImage.jsx`
- [ ] **Reemplazar:** Todos los `<img>` por `<LazyImage>`
- [ ] **Impacto:** Carga inicial más rápida

<details>
<summary>Ver implementación</summary>

```javascript
// src/hooks/useLazyImage.js
import { useState, useEffect, useRef } from 'react';

export function useLazyImage(src) {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  return { imgRef, imageSrc, isLoaded, setIsLoaded };
}

// src/components/LazyImage.jsx
export default function LazyImage({ src, alt, className, ...props }) {
  const { imgRef, imageSrc, isLoaded, setIsLoaded } = useLazyImage(src);

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-white-10 animate-pulse rounded" />
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
}
```
</details>

---

#### 3.3 Optimizar Imágenes con Vite
- [ ] **Instalar:** `vite-plugin-image-optimizer`
- [ ] **Actualizar:** `vite.config.js`
- [ ] **Configurar:** Manual chunks para dependencias
- [ ] **Impacto:** Reduce imágenes 40-60%

<details>
<summary>Ver implementación</summary>

```bash
npm install vite-plugin-image-optimizer --save-dev
```

```javascript
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { quality: 80 },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'],
          'react-vendor': ['react', 'react-dom'],
          'three-fiber': ['@react-three/fiber', '@react-three/drei'],
          'gsap': ['gsap', '@gsap/react'],
        },
      },
    },
  },
});
```
</details>

---

## FASE 4: Optimización 3D Avanzada

**Duración:** 2-3 días
**Impacto:** Alto - Mejora rendimiento 3D
**Estado:** ⏳ Pendiente

### Tareas

#### 4.1 Configurar Performance del Canvas
- [ ] **Archivos:**
  - `src/components/models/hero_models/HeroExperience.jsx`
  - `src/components/models/contact/ContactExperience.jsx`
- [ ] **Agregar:** dpr, performance, gl configs
- [ ] **Impacto:** Mejor rendimiento en low-end devices

<details>
<summary>Ver implementación</summary>

```javascript
const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

return (
  <Canvas
    camera={{ position: [0, 0, 15], fov: 45 }}
    dpr={isMobile ? [1, 1.5] : [1, 2]}
    performance={{ min: 0.5 }}
    gl={{
      antialias: !isMobile,
      alpha: false,
      powerPreference: 'high-performance'
    }}
  >
    {/* ... */}
  </Canvas>
);
```
</details>

---

#### 4.2 Reducir Iluminación Excesiva
- [ ] **Archivo:** `src/components/models/hero_models/HeroLights.jsx`
- [ ] **Reducir:** De 7 luces a 3 optimizadas
- [ ] **Impacto:** Reduce draw calls, mejora FPS 20-30%

<details>
<summary>Ver implementación</summary>

```javascript
export default function HeroLights() {
  return (
    <>
      <ambientLight intensity={0.3} color="#1a1a40" />

      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      <pointLight
        position={[-5, 3, -5]}
        intensity={0.6}
        color="#8338ec"
      />
    </>
  );
}
```
</details>

---

#### 4.3 Mover EffectComposer al Nivel Correcto
- [ ] **Archivo:** `src/components/models/hero_models/Room.jsx:47-55`
- [ ] **Mover:** EffectComposer a `HeroExperience.jsx` (Canvas level)
- [ ] **Impacto:** Post-processing funciona correctamente

<details>
<summary>Ver implementación</summary>

```javascript
// HeroExperience.jsx
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

<Canvas>
  <Suspense fallback={<CanvasLoader />}>
    <HeroLights />
    <Particles count={100} />
    <group scale={isMobile ? 0.7 : 1} position={[0, -3.5, 0]}>
      <Room />
    </group>

    <EffectComposer>
      <SelectiveBloom
        selection={/* ref */}
        intensity={1.5}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        blendFunction={BlendFunction.ADD}
      />
    </EffectComposer>
  </Suspense>
</Canvas>
```
</details>

---

#### 4.4 Implementar Draco Compression
- [ ] **Ejecutar:** `npx gltfjsx --draco` en todos los modelos
- [ ] **Actualizar:** useGLTF calls con Draco CDN
- [ ] **Impacto:** Reduce modelos ~70% (807KB → ~240KB)

<details>
<summary>Ver implementación</summary>

```bash
npx gltfjsx --draco public/models/optimized-room.glb
```

```javascript
const { nodes, materials } = useGLTF(
  "/models/optimized-room-draco.glb",
  'https://www.gstatic.com/draco/versioned/decoders/1.5.6/'
);
```
</details>

---

#### 4.5 Consolidar Múltiples Canvas
- [ ] **Archivo:** `src/sections/TechStack.jsx`
- [ ] **Cambiar:** De 5 Canvas separados a 1 Canvas con instancias
- [ ] **Impacto:** Reduce contextos WebGL, ahorra GPU memory

<details>
<summary>Ver implementación</summary>

```javascript
<Canvas className="h-96">
  <PerspectiveCamera makeDefault position={[0, 0, 10]} />
  <ambientLight intensity={0.5} />
  <directionalLight position={[5, 5, 5]} />

  <Suspense fallback={null}>
    {techStackIcons.map((icon, index) => (
      <TechIcon
        key={icon.name}
        {...icon}
        position={calculatePosition(index, techStackIcons.length)}
      />
    ))}
  </Suspense>

  <OrbitControls enableZoom={false} />
</Canvas>
```
</details>

---

## FASE 5: GSAP y Animaciones

**Duración:** 1-2 días
**Impacto:** Medio - Mejora suavidad
**Estado:** ⏳ Pendiente

### Tareas

#### 5.1 Optimizar ScrollTrigger en Experience
- [ ] **Archivo:** `src/sections/Experience.jsx:39-63`
- [ ] **Problema:** Crea animación nueva en cada scroll pixel
- [ ] **Solución:** Crear timeline una vez, actualizar con progress
- [ ] **Impacto:** Elimina jank en scroll

<details>
<summary>Ver implementación</summary>

```javascript
useGSAP(() => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".timeline",
      start: "top center",
      end: "70% center",
      scrub: 1,
      onUpdate: (self) => {
        timeline.progress(self.progress);
      },
    },
  });

  timeline.to(".timeline", {
    scaleY: 0,
    transformOrigin: "top center",
    ease: "none",
  });
}, { scope: container });
```
</details>

---

#### 5.2 Agregar Performance Monitoring
- [ ] **Crear:** `src/components/PerformanceMonitor.jsx`
- [ ] **Agregar:** A cada Canvas (solo en dev)
- [ ] **Impacto:** Detecta problemas durante desarrollo

<details>
<summary>Ver implementación</summary>

```javascript
import { useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

export default function PerformanceMonitor() {
  const [fps, setFps] = useState(60);
  const { performance } = useThree((state) => state);

  useFrame((state, delta) => {
    const currentFps = Math.round(1 / delta);
    setFps(currentFps);

    if (currentFps < 30) {
      performance.regress();
    }
  });

  if (import.meta.env.PROD) return null;

  return (
    <div className="fixed top-4 right-4 bg-black/80 text-white px-4 py-2 rounded font-mono">
      FPS: {fps}
    </div>
  );
}
```
</details>

---

## FASE 6: Calidad de Código

**Duración:** 2-3 días
**Impacto:** Medio - Mejora mantenibilidad
**Estado:** ⏳ Pendiente

### Tareas

#### 6.1 Agregar PropTypes o TypeScript
- [ ] **Opción:** Elegir PropTypes (rápido) o TypeScript (recomendado)
- [ ] **Archivos:** Todos los componentes
- [ ] **Impacto:** Previene bugs, mejor DX

<details>
<summary>Ver implementación - PropTypes</summary>

```javascript
import PropTypes from 'prop-types';

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
};
```
</details>

---

#### 6.2 Implementar Error Boundaries
- [ ] **Crear:** `src/components/ErrorBoundary.jsx`
- [ ] **Envolver:** Todos los Canvas components
- [ ] **Impacto:** App no crashea completamente

<details>
<summary>Ver implementación</summary>

```javascript
import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex-center flex-col gap-4 p-8">
          <h2 className="text-2xl font-bold text-white">Oops! Something went wrong</h2>
          <p className="text-white-50">The 3D scene encountered an error.</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="cta-button px-6 py-3"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```
</details>

---

#### 6.3 Validación de Environment Variables
- [ ] **Crear:** `src/utils/validateEnv.js`
- [ ] **Importar:** En `src/main.jsx`
- [ ] **Impacto:** Errores claros en desarrollo

<details>
<summary>Ver implementación</summary>

```javascript
const requiredEnvVars = [
  'VITE_APP_EMAILJS_SERVICE_ID',
  'VITE_APP_EMAILJS_TEMPLATE_ID',
  'VITE_APP_EMAILJS_PUBLIC_KEY',
];

export function validateEnv() {
  const missing = requiredEnvVars.filter(
    (key) => !import.meta.env[key]
  );

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables:\n${missing.join('\n')}\n\n` +
      `Please create a .env file with these variables.`
    );
  }
}
```
</details>

---

#### 6.4 Agregar .env al .gitignore (CRÍTICO)
- [ ] **Archivo:** `.gitignore`
- [ ] **Crear:** `.env.example`
- [ ] **Impacto:** Previene leak de credenciales

<details>
<summary>Ver implementación</summary>

```bash
# .gitignore
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# .env.example
VITE_APP_EMAILJS_SERVICE_ID=your_service_id_here
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```
</details>

---

#### 6.5 Limpiar Código Comentado
- [ ] **Archivos:**
  - `src/App.jsx:10-11, 21`
  - `src/sections/TechStack.jsx:5-72`
  - `src/components/models/hero_models/Room.jsx:6`
  - `src/constants/index.js:14-17`
- [ ] **Acción:** Eliminar imports de React, código comentado
- [ ] **Impacto:** Código más limpio

---

#### 6.6 Extraer Magic Numbers
- [ ] **Crear:** `src/constants/cameraConfig.js`
- [ ] **Mover:** Configuraciones hardcodeadas
- [ ] **Impacto:** Fácil mantenimiento

<details>
<summary>Ver implementación</summary>

```javascript
// src/constants/cameraConfig.js
export const CAMERA_CONFIG = {
  hero: {
    position: [0, 0, 15],
    fov: 45,
  },
  contact: {
    position: [0, 0, 8],
    fov: 50,
  },
};

export const ORBIT_CONTROLS = {
  maxDistance: 20,
  minDistance: 5,
  minPolarAngle: Math.PI / 5,
  maxPolarAngle: Math.PI / 2,
};
```
</details>

---

## ✅ Checklist de Validación

Después de cada fase:

- [ ] **Performance:** Correr Lighthouse audit (target: 90+)
- [ ] **Accesibilidad:** Test con screen reader
- [ ] **Móvil:** Test en dispositivos reales
- [ ] **Build:** `npm run build` sin errores
- [ ] **Bundle size:** Verificar con build stats
- [ ] **Visual regression:** Screenshots antes/después
- [ ] **3D scenes:** 60fps desktop / 30fps+ móvil

---

## 📝 Notas y Decisiones

### Decisiones de Arquitectura
- [ ] **TypeScript vs PropTypes:** Pendiente decisión
- [ ] **Image optimization:** Usar vite-plugin-image-optimizer
- [ ] **Draco compression:** Aplicar a todos los modelos

### Issues Conocidos
- Ninguno documentado aún

### Recursos Útiles
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [Drei Components](https://github.com/pmndrs/drei)
- [GSAP Docs](https://greensock.com/docs/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)

---

**Última actualización:** 2025-01-15
**Próxima revisión:** Por definir
