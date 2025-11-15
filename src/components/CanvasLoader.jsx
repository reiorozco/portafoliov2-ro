import { Html } from "@react-three/drei";

/**
 * Loading indicator for 3D Canvas components
 * Provides visual feedback while 3D models are loading
 * Uses Html from drei to properly render HTML inside R3F Canvas
 */
export default function CanvasLoader() {
  return (
    <Html center>
      <div className="flex-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
          <p className="text-white-50 mt-4 text-center">Loading 3D Scene...</p>
        </div>
      </div>
    </Html>
  );
}
