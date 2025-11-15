/**
 * Application-wide configuration constants
 * Centralizes magic numbers for better maintainability
 */

// ==========================================
// RESPONSIVE BREAKPOINTS
// ==========================================
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
};

// ==========================================
// ANIMATION DURATIONS (in seconds)
// ==========================================
export const ANIMATION_DURATION = {
  FAST: 0.3,
  MEDIUM: 1,
  SLOW: 2.5,
};

// ==========================================
// 3D SCENE CONFIGURATION
// ==========================================
export const CAMERA_CONFIG = {
  FOV: 45,
  NEAR: 0.1,
  FAR: 1000,
};

export const ORBIT_CONTROLS = {
  MIN_DISTANCE: 5,
  MAX_DISTANCE: 20,
  MIN_POLAR_ANGLE: Math.PI / 5,
  MAX_POLAR_ANGLE: Math.PI / 2,
};

export const PERFORMANCE_CONFIG = {
  DPR_MIN: 1,
  DPR_MAX: 2,
  MIN_PERFORMANCE: 0.5,
};

// ==========================================
// PARTICLE SYSTEM
// ==========================================
export const PARTICLES_CONFIG = {
  COUNT: 100,
  DEFAULT_SIZE: 0.02,
  SPREAD_RANGE: 10,
};

// ==========================================
// LAZY LOADING
// ==========================================
export const LAZY_LOAD_CONFIG = {
  ROOT_MARGIN: "50px",
  THRESHOLD: 0.01,
};

// ==========================================
// SCROLL TRIGGER
// ==========================================
export const SCROLL_TRIGGER_CONFIG = {
  EXPERIENCE_START: "top 80%",
  TEXT_START: "top 60%",
  TIMELINE_START: "top center",
  TIMELINE_END: "70% center",
  SCRUB_DELAY: 0.5,
};

// ==========================================
// FORM VALIDATION
// ==========================================
export const FORM_CONFIG = {
  MAX_NAME_LENGTH: 100,
  MAX_EMAIL_LENGTH: 150,
  MAX_MESSAGE_LENGTH: 1000,
};

// ==========================================
// Z-INDEX LAYERS
// ==========================================
export const Z_INDEX = {
  SKIP_LINK: 200,
  NAVBAR: 100,
  DROPDOWN: 50,
  MODAL: 150,
  TOOLTIP: 75,
};
