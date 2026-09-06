import { Html } from "@react-three/drei";

/**
 * Loading indicator for 3D Canvas components
 * Provides visual feedback while 3D models are loading
 * Uses Html from drei to properly render HTML inside R3F Canvas
 */
export default function CanvasLoader() {
  return (
    <Html center>
      <p className="text-blue-50 text-sm">Loading scene…</p>
    </Html>
  );
}
