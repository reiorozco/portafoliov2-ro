# 003 — Revisión profunda y alineación de marca del portafolio (`portafoliov2-ro`)

Estado global: **Fase 1 (P0) ✅ · Fase 2 (P1) ✅ · Fase 3 (P2) ✅ — MERGEADO A MAIN Y EN PRODUCCIÓN.** ✅ CERRADO.
Merge commit `9b644ee` en `main` (rama `marca/showcase-credibilidad` eliminada tras merge). Deploy de prod `dpl_AVGHJadg…` READY.
Producción: https://portfolio-ro-bay.vercel.app/ — verificada en vivo (Playwright): contadores/3+3 links/MCP·AI/Git/1×h1/0 imgs rotas/sin GameHub/socials, 0 errores de consola.
Nota: el merge combinó las deps nuevas de main (vite 8, react 19.2, etc.) con los cambios de marca; `npm i` + build + lint verificados antes del push.
Alcance aprobado: **P0 (credibilidad) + P1 (marca)**. P2 (pulido) queda listado pero NO se ejecuta en esta iteración. Demo AI pública (Fase 4 de 002) fuera de alcance.

### Cambios aplicados (procediendo con recomendaciones)
- **Showcase** (`ShowcaseSection.jsx`): fuera GameHub/Amazon. Hero = Blue Express (marcado "Proprietary — not publicly available"). Columna = Project Manager · Issue Tracker · Vidly, cada uno con **Live demo + GitHub** (`ProjectLinks`). Screenshots reales desde `~/Dev/og-shots/` → `project1.1/1.2/1.3.png`.
- **Experiencia** (`constants` + `GlowCard` + `Experience.jsx`): `review`(citas falsas)→`impact` (1ª persona, sin estrellas). Empresas añadidas: Kranio·Blue Express, Cuculi, Work2 Creative Agency, Henry.
- **Contadores**: "6+ Companies" y "100% Commitment" → **"6+ Production Apps Shipped"** y **"4+ Countries (Remote Teams)"**.
- **Tira de logos** (`logoIconsList`): 22 placeholders → 6 logos reales de empresa (prueba social).
- **Skills** (`techStackImgs` + `TechStack.jsx`): labels corregidos (incl. Git, antes "Project Manager"); añadidos **Svelte 5** y **MCP · AI** (logos oficiales de simple-icons) + Python; título → "My Tech Stack".
- **Hero**: headline "Shaping … Deliver Results" → **"I build {Web Apps/Mobile Apps/AI Features/APIs} that ship to production."**
- Assets nuevos: `logos/svelte.svg`, `logos/mcp.svg`, `project1.3.png`.
Relacionado: `002-marca-profesional.md` (fuente de verdad de marca) · `001-auditoria-github.md` (inventario de proyectos).
Idioma del sitio: inglés. Sin firmas automáticas.

## Decisiones del usuario (registradas)
- **Showcase:** mantener Blue Express + otra combinación (ver Fase 1A para propuesta a confirmar).
- **Testimonios:** reconvertir a frase de impacto en primera persona (sin comillas ni estrellas de cita ajena).
- **Alcance:** P0 + P1.
- **Screenshots:** se generan localmente con Google Chrome headless → `public/images` (no se requiere que el usuario los provea). Encuadre a revisar por el usuario tras generarlos.

## Fuente de verdad (coherencia portafolio↔CV↔LinkedIn↔GitHub)
- Empresas reales (CV `build_cv.py`): Fleet AI · Geeks5G · **Kranio** (Blue Express) · **Cuculi** · **Work2 Creative Agency** · **Henry**.
- Flagships en vivo: Project Manager (`project-manager-app-cyan.vercel.app`), Issue Tracker (`issue-tracker-app-blue.vercel.app`), Vidly (`vidly-app-six.vercel.app` + repo `vidly-api`).
- GitHub: `github.com/reiorozco`.

---

## FASE 1 — P0 · Credibilidad (máximo impacto)

### 1A — Swap del showcase de proyectos (`ShowcaseSection.jsx` + `constants/index.js`)
- **Salen:** "GameHub" y "Amazon Clone" (clones genéricos, restan a perfil senior).
- **Propuesta a confirmar** (layout = 1 hero grande + 2 cards):
  - Hero (grande): **Internal Logistics Platform — Blue Express (Kranio)** *(se mantiene)*.
  - Card 2: **Project Manager** (full-stack, Next.js + Prisma) — demo + GitHub.
  - Card 3: **Issue Tracker** (full-stack Next.js) — demo + GitHub.
  - Backend proof: **Vidly (vidly-api)** — REST + tests/CI/Swagger. Se añade como 4ª card compacta o como enlace "Backend API" (decidir al ver el layout).
- **Screenshots:** generar `project1.1.png` (Project Manager) y `project1.2.png` (Issue Tracker) con Chrome headless desde las URLs en vivo (1280×800, recorte limpio). Optimizar con sharp/vite-image-optimizer existente.
- Actualizar `alt` de cada imagen a descripción real del proyecto.

### 1B — Links en cada proyecto (CAMBIO FUNCIONAL CLAVE)
- Añadir a cada card del showcase botones/links **Live demo** y **GitHub** (componente reutilizable o markup en `ShowcaseSection`).
- Estilo coherente con `Button.jsx` / paleta. `target="_blank" rel="noopener noreferrer"`, `aria-label` descriptivo.

### 1C — Experiencia: reconvertir "testimonios" + nombrar empresas (`constants/index.js`, `expCards`)
- Quitar tratamiento de cita: eliminar comillas y el rating de 5 estrellas (`GlowCard`), o convertir el campo `review` en una **línea de impacto en primera persona** (ej.: "Owned MCP server design and deterministic SQLite/Drizzle state for agent training."). Decidir si la línea se conserva como subtítulo o se elimina del todo (recomendado: conservar 1 línea de impacto, sin estrellas).
- Revisar `GlowCard.jsx` para el render del bloque estrella/review tras el cambio.
- **Añadir empresa al título** de cada card para alinear con CV/LinkedIn:
  - "Software Developer" → **Kranio** (Blue Express).
  - "React Native Developer (Freelance)" → **Cuculi**.
  - "Frontend Web Developer" (2021–2022) → **Work2 Creative Agency**.
  - "Full-Stack Teaching Assistant" → **Henry**.
  - (Fleet AI y Geeks5G ya están nombradas.)
  - Implementación: subtítulo `company` en la card o formato "Title · Company".

---

## FASE 2 — P1 · Marca y propuesta de valor

### 2A — Contadores creíbles (`constants/index.js`, `counterItems`)
- Quitar **"6+ Companies Worked At"** (señal de job-hopping) y **"100% Commitment to Code Quality"** (vacío/template).
- Mantener "5+ Years of Experience" y "20+ Completed Projects".
- Reemplazos propuestos (confirmar 2): **AWS Certified** · **Production apps shipped** · **AI / MCP** · **Core stacks (React·Next·Node)**. Mantener formato `{value, suffix, label}` o adaptar a label-only donde no haya cifra.

### 2B — Tira de logos (`LogoShowcase.jsx` + `logoIconsList`)
- Hoy: 22 placeholders "Partner company logo" (relleno → resta credibilidad).
- Opción recomendada: reemplazar por **logos reales** de empresas (Fleet, Geeks5G, Blue Express, Cuculi, Work2, Henry) con `alt` real; si no hay logos limpios disponibles, **eliminar la sección**. Decidir al inventariar assets en `public/images/logos`.

### 2C — Skills con foco AI + labels correctos (`constants/index.js`, `techStackImgs` + `TechStack.jsx`)
- Corregir labels role-y → nombres de tecnología consistentes:
  - "React Developer"→React · "Mobile App Developer"→React Native · "Backend Developer"→Node.js · "Interactive Developer"→Three.js.
  - **"Project Manager" (sobre logo de Git) → Git** (mislabel actual).
- **Añadir el diferenciador:** Svelte 5, MCP (Model Context Protocol) y/o AI/LLM — requiere logos (`public/images/logos`). Si falta algún logo, generar/obtener o usar texto.
- Simplificar título de sección: "How I Can Contribute & My Key Skills" → algo como **"Tech I Work With"** / "My Tech Stack" (alinear con label de nav "Skills").

### 2D — Hero headline alineado a posicionamiento (`Hero.jsx` / `words`)
- Copy actual ("Shaping Ideas/Concepts/Designs/Code into Real Projects that Deliver Results") = template; no comunica el ángulo Full Stack + AI.
- Reescribir hacia el norte: Full Stack (React/Next/Node) demostrable + AI/MCP como especialización actual. Mantener el efecto de palabras rotativas si aporta; ajustar el set de `words` y/o las líneas fijas.
- Subtítulo del hero ya está alineado (5+ años, AI) — retoque menor si hace falta.

---

## FASE 5 — Impeccable (skill de diseño) · distill + init + typeset ✅ EN PRODUCCIÓN
Mergeado a `main` (merge `c5937c8`; rama `marca/distill-template` eliminada). Deploy prod READY, verificado en vivo.
- Probada la skill `impeccable` (instalada global en `~/.claude`): `detect`/`audit`/`critique`/`distill`/`init`/`typeset`.
- **distill:** quitados los kickers con emoji (AI scaffolding) y la sección de ability cards genéricas (FeatureCards + array `abilities`). Flujo Showcase → Experience.
- **init:** añadidos `PRODUCT.md` (brand · recruiters · limpio/minimalista/refinado · Linear/Vercel · anti corporativo-aburrido/ruidoso) y `DESIGN.md` (tokens reales). La skill los lee vía `context.mjs`.
- **typeset:** tipografía display **Bricolage Grotesque** para hero/títulos (clase `.display-type`, optical-sizing, tracking -0.02em), Mona Sans en el cuerpo. Verificado cargado en prod.
- Falso positivo descartado: contraste del CTA (el detector ignora el círculo blanco superpuesto).

## FASE 6 — Accesibilidad · prefers-reduced-motion ✅ EN PRODUCCIÓN
Mergeado a `main` (merge `04a5e7e`). Deploy prod READY; verificado en vivo emulando la preferencia.
- `utils/motion.js` (`prefersReducedMotion` + hook `useReducedMotion`).
- GSAP (Hero, AnimatedCounter, ShowcaseSection, Experience, TechStack) omiten reveals bajo reduced motion; contenido visible por defecto; contadores muestran valor final inmediato (verificado: opacity=1, contadores 5+/20+/6+/4+).
- 3D: `Particles` detiene su deriva bajo reduced motion. (TechIconCardExperience `Float` está sin uso/comentado; Contact y Room son estáticos.)
- CSS `@media (prefers-reduced-motion: reduce)`: neutraliza animaciones/transiciones, bounce de la flecha y smooth-scroll.
- Cierra el único gap real de a11y del audit (WCAG 2.3.3).

## FASE 7 — distill final · fila de contadores ✅ EN PRODUCCIÓN
Mergeado a `main` (merge `787fc34`). Verificado en vivo (Playwright MCP).
- Eliminado `AnimatedCounter` + `counterItems` (último tell de "AI hero-metrics"). El dato creíble ("5+ years") ya estaba en el subtítulo del hero.
- `Button` ahora acepta `targetId` (default "work"); "See My Work" hace scroll al showcase (antes a los contadores). Verificado el scroll.

## Pendiente (único)
- Demo MCP pública (en desarrollo en otro chat) → cierra la brecha de credibilidad AI. Al terminar: enlazarla desde portafolio (showcase) + LinkedIn + CV.

## FASE 3 — P2 · Pulido (LISTADO, NO se ejecuta ahora)
- Footer "Terms & Conditions" (texto muerto) → quitar o enlazar real.
- Instagram personal en footer → evaluar si se mantiene.
- Jerarquía de headings: múltiples `<h1>` (secciones + cards) → un solo h1 (hero), resto h2/h3.
- Tono de Contact ("What's your good name?", emojis) → más senior.
- Panel naranja `#cd7c2e` del 3D de Contact → revisar contra paleta.

---

## Verificación (cada fase)
- `npm run build` verde · `npm run lint` 0/0.
- Revisión visual en vivo (Playwright snapshot) tras desplegar.
- Cambios NO commiteados hasta OK del usuario (igual que 002). Sin firmas automáticas.

## Decisiones pendientes de input (no se asumen)
1. Confirmar combinación del showcase y si Vidly entra como 4ª card o como enlace "Backend API".
2. Confirmar los 2 contadores de reemplazo (2A).
3. Logos reales disponibles para 2B/2C (Svelte/MCP) o se eliminan/generan.
4. ¿Conservar 1 línea de impacto bajo cada experiencia o eliminarla del todo? (recomendado: conservar.)

## Modo de trabajo
Una fase a la vez con OK explícito. Se actualiza este archivo al completar cada fase / encontrar bloqueadores. Inglés por defecto. Decisiones que requieren input se preguntan.
