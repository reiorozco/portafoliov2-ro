import { useGLTF } from '@react-three/drei';

/**
 * Preload all 3D models in parallel for faster initial load
 * This prevents models from loading on-demand when scrolling
 */
const models = [
  '/models/optimized-room.glb',                  // 807KB - Hero scene
  '/models/computer-optimized-transformed.glb',  // 39KB - Contact scene
  '/models/react_logo-transformed.glb',          // 58KB - Tech stack
  '/models/python-transformed.glb',              // 5.1KB - Tech stack
  '/models/node-transformed.glb',                // 713KB - Tech stack
  '/models/three.js-transformed.glb',            // 2.5KB - Tech stack
  '/models/git-svg-transformed.glb',             // 16KB - Tech stack
];

// Preload all models
models.forEach(model => {
  useGLTF.preload(model);
});

export default models;
