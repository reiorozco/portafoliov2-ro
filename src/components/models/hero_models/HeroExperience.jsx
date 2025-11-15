import { Suspense, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import CanvasLoader from "../../CanvasLoader";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const screensRef = useRef();

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      dpr={[1, 2]} // Adaptive pixel ratio (1x for low-end, up to 2x for high-end devices)
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        alpha: false, // Disable transparency for better performance
      }}
      flat // Modern linear color management (faster than sRGB)
      performance={{ min: 0.5 }} // Allow up to 50% degradation for maintaining FPS
    >
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />
      {/* Configure OrbitControls to disable panning and control zoom based on a device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={!isTablet} // Disables zoom on tablets
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
      />

      <Suspense fallback={<CanvasLoader />}>
        <HeroLights />
        <Particles count={100} />

        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room ref={screensRef} />
        </group>
      </Suspense>

      {/* Post-processing effects at Canvas level (correct architecture) */}
      <EffectComposer>
        <SelectiveBloom
          selection={screensRef}
          intensity={1.5} // Strength of the bloom
          luminanceThreshold={0.2} // Minimum luminance needed
          luminanceSmoothing={0.9} // Smooth transition
          blendFunction={BlendFunction.ADD} // How it blends
        />
      </EffectComposer>
    </Canvas>
  );
};

export default HeroExperience;
