const HeroLights = () => {
  return (
    <>
      {/* Main spotlight (lamp's light) - primary illumination */}
      <spotLight
        position={[2, 5, 6]}
        angle={0.2}
        penumbra={0.3}
        intensity={120}
        color="white"
      />
      {/* Combined fill light (overhead + side) - consolidated into one optimized light */}
      <spotLight
        position={[0, 6, 5]}
        angle={0.6}
        penumbra={0.8}
        intensity={80}
        color="#7b5fbd" // Blend of bluish (#4cc9f0) and purplish (#9d4edd)
      />
      {/* Removed 5 lights: RectAreaLight, 2 PointLights, and 2 redundant SpotLights */}
    </>
  );
};

export default HeroLights;
