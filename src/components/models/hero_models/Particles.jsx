import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

const Particles = ({ count: propCount = 200 }) => {
  const mesh = useRef();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  // Reduce particle count on mobile for better performance
  const count = isMobile ? Math.min(propCount, 30) : propCount;

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          Math.random() * 10 + 5, // higher starting point
          (Math.random() - 0.5) * 10,
        ],
        speed: 0.005 + Math.random() * 0.001,
      });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    // Early exit if mesh not ready
    if (!mesh.current) return;

    const positions = mesh.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      let y = positions[idx + 1];
      y -= particles[i].speed;

      if (y < -2) {
        y = Math.random() * 10 + 5;
      }

      positions[idx + 1] = y;
    }

    // Always mark for update since positions change every frame
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  const positions = new Float32Array(count * 3);
  particles.forEach((p, i) => {
    positions[i * 3] = p.position[0];
    positions[i * 3 + 1] = p.position[1];
    positions[i * 3 + 2] = p.position[2];
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.05}
        transparent={true}
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
