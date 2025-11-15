import { useEffect, useMemo } from "react";
import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";

const TechIconCardExperience = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  // Memoize white material for Interactive Developer
  const whiteMaterial = useMemo(() =>
    new MeshStandardMaterial({ color: "white" }),
    []
  );

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      let oldMaterial = null;
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          oldMaterial = child.material;
          child.material = whiteMaterial;
        }
      });

      // Cleanup: restore original material on unmount
      return () => {
        if (oldMaterial) {
          scene.scene.traverse((child) => {
            if (child.isMesh && child.name === "Object_5") {
              child.material = oldMaterial;
            }
          });
        }
      };
    }
  }, [scene, model.name, whiteMaterial]);

  return (
    <Canvas
      dpr={[1, 2]} // Adaptive pixel ratio
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        alpha: false,
      }}
      flat
      performance={{ min: 0.5 }}
    >
      <ambientLight intensity={0.5} />
      {/* Consolidated lighting (removed Environment HDRI for better performance) */}
      <directionalLight position={[8, 10, 8]} intensity={2.5} />

      {/* 
        The Float component from @react-three/drei is used to 
        create a simple animation of the model floating in space.
        The rotationIntensity and floatIntensity props control the
        speed of the rotation and float animations respectively.

        The group component is used to scale and rotate the model.
        The rotation is set to the value of the model.rotation property,
        which is an array of three values representing the rotation in
        degrees around the x, y and z axes respectively.

        The primitive component is used to render the 3D model.
        The object prop is set to the scene object returned by the
        useGLTF hook, which is an instance of THREE.Group. The
        THREE.Group object contains all the objects (meshes, lights, etc)
        that make up the 3D model.
      */}
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechIconCardExperience;
