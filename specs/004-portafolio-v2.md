# 004 — Portafolio v2: alineación Full Stack + AI/MCP/Svelte + incorporar matchday-mcp

Estado global: **Fase 1 + 2A + 2C + 4 + 3 ✅ EN PRODUCCIÓN.**
- matchday-mcp flagship + copy AI/MCP/Svelte + hygiene: merge `484fc6a` (prod).
- Fix consola móvil (Particles buffer-resize): merge `1082cb2` (prod). Verificado: 0 errores en móvil tras scroll + partículas (antes ~200 errores `THREE.WebGLAttributes`).
- Nota: el merge que sacó `.env` del tracking borró el archivo de trabajo local → restaurado desde `3591c3e:.env` (ignorado, no re-trackeado). Prod usa env vars de Vercel.
- Verificado responsive móvil (375): `#work` ≤ ancho, tags/links/imagen ok; el "overflow" reportado era el scrollbar de 15px del Chrome desktop, no contenido real.
- **Fase 3 pulido ✅ (merge `9d2dda0`):** detector de impeccable sobre prod nuevo → única mejora real aplicada = **cap line-length** (subtítulo hero ~58ch, descripción matchday ~67ch; antes ~140). Resto = falsos positivos confirmados (contraste CTA por círculo blanco, "cyan gradient" por glow del screenshot de matchday) o by-design (overflow del hero). Mejora notada: ya no aparece "single-font" (Bricolage).
- Pendiente (usuario): EmailJS domain allowlist; destacados de LinkedIn (memoria [[matchday-mcp]]).
Relacionado: `003-portafolio-revision-marca.md` (rework ya en producción), `003-mcp-futbol-svelte.md` (matchday), `002-marca-profesional.md`. Memoria: [[matchday-mcp]], [[marca-profesional-2026]], [[feedback-brand-headline]], [[portfolio-contact-emailjs]].
Idioma: inglés en el sitio. Sin firmas automáticas. Verificación en navegador (Playwright) antes de dar por bueno cualquier cambio visual. Una fase a la vez, rama + preview, merge con OK.

## Restricción (feedback previo)
**NO** reescribir headline ni declaraciones de identidad sin OK explícito. Cambios de identidad = sugerencia aparte (Fase 2C). Cambios aditivos/estructurales sí se adelantan en el plan.

## Estado base (ya en producción, de 003)
Showcase con flagships + enlaces, marca Full Stack + AI, tipografía Bricolage, de-templating completo, reduced-motion (a11y), contacto EmailJS+mailto, sistema de diseño (`PRODUCT.md`/`DESIGN.md`). **TechStack ya incluye Svelte 5 y MCP·AI.** Showcase actual: Blue Express (hero) + Project Manager · Issue Tracker · Vidly.

## matchday-mcp (verificado en vivo)
Servidor MCP open-source (TypeScript + Zod) que lleva datos de fútbol en vivo (standings, fixtures, resultados, goleadores, comparativas) a Claude y cualquier cliente MCP; 6 tools, caché+backoff, 20 tests, CI. Playground SvelteKit + Svelte 5 (runes) + Tailwind v4.
- Demo: https://matchday-mcp-web.vercel.app (200 ✓ · tagline "live football data for your AI")
- Repo: https://github.com/reiorozco/matchday-mcp (200 ✓ · MIT)
- npm: https://www.npmjs.com/package/matchday-mcp (`matchday-mcp@0.1.0`, `npx` verificado)
- Tags: TypeScript · Zod · MCP/AI · SvelteKit · Svelte 5
- **Es el diferenciador que cierra el gap Svelte/AI** (hoy la marca lo vende pero sin prueba pública). → destacarlo, idealmente primero.

---

## FASE 1 — Incorporar matchday-mcp como flagship (núcleo)

### 1A — Asset
- Capturar screenshot del playground (`matchday-mcp-web`) con Chrome headless (1280×800), optimizar → `public/images/project-matchday.png`.

### 1B — Reestructurar el showcase (`ShowcaseSection.jsx` + `constants`)
- **Propuesta a confirmar (decisión 1):** matchday-mcp pasa al **slot hero (60%)** del showcase; Blue Express baja a card lateral.
  - Hero = **matchday-mcp**: screenshot, descripción, **tags** y **3 enlaces: Live demo · GitHub · npm**.
  - Cards laterales: **Blue Express** (real, sin enlaces públicos — "proprietary") · **Project Manager** · **Issue Tracker**.
  - **Vidly (decisión 2):** o se mantiene como 4ª card, o baja a "backend proof" (enlace inline) para no saturar (quedarían 5 proyectos). Recomiendo bajarlo a mención backend.
- Alternativas a la propuesta: (b) sección **"Featured / AI"** propia encima del showcase solo para matchday-mcp; (c) matchday como 4ª card (NO recomendado — pierde protagonismo).

### 1C — Extender el componente de enlaces/tags
- `ProjectLinks`: añadir enlace **npm** opcional (ícono/label) además de demo+GitHub.
- Añadir fila de **tags/badges** por proyecto (TypeScript · Zod · MCP/AI · SvelteKit · Svelte 5 para matchday). Estilo sobrio, on-brand (hairline, sin ruido).
- El slot hero del showcase debe poder mostrar enlaces + tags (hoy el hero no los tiene).

---

## FASE 2 — Alineación de copy/posicionamiento (aditivo; identidad solo con OK)

### 2A — SEO / meta / OG (`index.html`, og-image)
- Añadir a `description`/`keywords`: matchday-mcp, MCP server, Svelte 5, open-source. (aditivo)
- (Opcional) regenerar `og-image.png` para nombrar AI/MCP/Svelte.

### 2B — TechStack
- Ya tiene Svelte 5 + MCP·AI. Evaluar reordenar para subir el ángulo AI/MCP al frente. (aditivo, menor)

### 2C — Identidad (SUGERENCIA APARTE — requiere tu OK explícito, NO se ejecuta sin él)
- Posibles ajustes para nombrar MCP/Svelte en hero (palabras rotativas / subtítulo). Se entregan como propuesta de copy para que decidas; no se tocan sin tu visto bueno.

---

## FASE 3 — Pulido (impeccable) + perf/a11y/responsive
- `impeccable critique`/`polish` sobre el showcase reestructurado (ya hay `PRODUCT.md`/`DESIGN.md`).
- Verificar en vivo con Playwright: render, responsive (móvil/tablet/desktop), consola 0 errores, contraste.
- Performance: confirmar que el nuevo screenshot está optimizado (vite-image-optimizer) y no infla el bundle.

---

## FASE 4 — Hygiene / seguridad (pendientes técnicos)
- [ ] **`.env` está trackeado** pese a estar en `.gitignore` → `git rm --cached .env` (mantener `.env.example`). Nota: las claves son `VITE_*` (ya públicas en el bundle cliente), severidad baja, pero es hygiene correcta.
- [ ] **EmailJS:** allowlist de dominios (restringir envíos a `portfolio-ro-bay.vercel.app`) en el panel de EmailJS — acción del usuario.
- [ ] Confirmar pin `three` <0.185 (el PR de 0.184 rompe el build — ya fijado). Revisar alertas/deps de seguridad si aplica.

---

## Decisiones del usuario (registradas)
1. **Placement:** matchday-mcp = **hero del showcase**; Blue Express baja a card lateral.
2. **Vidly:** baja a **"backend proof"** (enlace/mención, no card completa). Showcase = matchday (hero) + Blue Express · Project Manager · Issue Tracker.
3. **Identidad:** **autorizado** ajustar copy de headline/subtítulo/palabras del hero para nombrar MCP/Svelte → se muestra la propuesta antes de aplicar (abajo).

## Propuesta de copy de identidad (Fase 2C — pendiente de tu OK final)
- **Palabras rotativas del hero:** `Web Apps · MCP Servers · Svelte 5 UIs · APIs` (hoy: Web Apps · Mobile Apps · AI Features · APIs). Nombra MCP + Svelte 5 manteniendo full-stack (web + APIs); móvil pasa al subtítulo.
- **Subtítulo del hero (propuesta):** "Hi, I'm Rei — a Full Stack Engineer (5+ yrs) building production web & mobile apps, now engineering AI agent tooling with MCP and Svelte 5 at Fleet AI."
- Headline fijo "I build … that ship to production." se mantiene.

## Orden propuesto
Fase 1 (matchday flagship) → Fase 4 (hygiene, rápida) → Fase 2 (copy/SEO aditivo) → Fase 3 (pulido). Fase 2C solo si autorizas.
