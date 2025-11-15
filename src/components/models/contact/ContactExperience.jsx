import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Computer from "./Computer";
import CanvasLoader from "../../CanvasLoader";

const ContactExperience = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 3, 7], fov: 45 }}
      dpr={[1, 2]} // Adaptive pixel ratio
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        alpha: false,
      }}
      flat
      performance={{ min: 0.5 }}
    >
      <ambientLight intensity={0.6} color="#fff4e6" />

      {/* Consolidated directional light (combined two lights into one) */}
      <directionalLight
        position={[5, 7, 2]}
        castShadow={true}
        intensity={3.5}
        color="#ffd9b3"
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow={true}
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#a46b2d" />
        </mesh>
      </group>

      <Suspense fallback={<CanvasLoader />}>
        <group scale={0.03} position={[0, -1.49, -2]} castShadow={true}>
          <Computer />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default ContactExperience;
