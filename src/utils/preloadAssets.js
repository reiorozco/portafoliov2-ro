import { useGLTF } from '@react-three/drei';

/**
 * Preload all 3D models in parallel for faster initial load
 * This prevents models from loading on-demand when scrolling
 * All models are Draco compressed (67% reduction: 1640KB → 543KB)
 */
const models = [
  '/models/optimized-room.glb',                  // 74KB (91% compressed) - Hero scene
  '/models/computer-optimized-transformed.glb',  // 37KB - Contact scene
  '/models/react_logo-transformed.glb',          // 55KB - Tech stack
  '/models/python-transformed.glb',              // 5KB - Tech stack
  '/models/node-transformed.glb',                // 349KB (51% compressed) - Tech stack
  '/models/three.js-transformed.glb',            // 2.5KB - Tech stack
  '/models/git-svg-transformed.glb',             // 16KB - Tech stack
];

// Preload all models
models.forEach(model => {
  useGLTF.preload(model);
});

export default models;
