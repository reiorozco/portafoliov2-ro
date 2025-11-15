import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import CanvasLoader from "../../CanvasLoader";
import {
  BREAKPOINTS,
  CAMERA_CONFIG,
  ORBIT_CONTROLS,
  PERFORMANCE_CONFIG,
  PARTICLES_CONFIG,
} from "../../../constants/config";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: `(max-width: ${BREAKPOINTS.MOBILE}px)` });
  const isTablet = useMediaQuery({ query: `(max-width: ${BREAKPOINTS.TABLET}px)` });

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: CAMERA_CONFIG.FOV }}
      dpr={[PERFORMANCE_CONFIG.DPR_MIN, PERFORMANCE_CONFIG.DPR_MAX]} // Adaptive pixel ratio
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        alpha: false, // Disable transparency for better performance
      }}
      flat // Modern linear color management (faster than sRGB)
      performance={{ min: PERFORMANCE_CONFIG.MIN_PERFORMANCE }} // Performance degradation threshold
    >
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />
      {/* Configure OrbitControls to disable panning and control zoom based on a device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={!isTablet} // Disables zoom on tablets
        maxDistance={ORBIT_CONTROLS.MAX_DISTANCE}
        minDistance={ORBIT_CONTROLS.MIN_DISTANCE}
        minPolarAngle={ORBIT_CONTROLS.MIN_POLAR_ANGLE}
        maxPolarAngle={ORBIT_CONTROLS.MAX_POLAR_ANGLE}
      />

      {/* Performance monitor (dev mode only) */}
      {import.meta.env.DEV && <Perf position="top-left" />}

      {/* Lights outside Suspense so EffectComposer can use them */}
      <HeroLights />
      <Particles count={PARTICLES_CONFIG.COUNT} />

      <Suspense fallback={<CanvasLoader />}>
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
