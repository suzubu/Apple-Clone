import { Environment, Lightformer } from "@react-three/drei";

const Lights = () => {
  return (
    // The Environment component provides HDR-like global lighting and reflections
    <Environment resolution={512}>
      {/* Lightformer: Top light strip */}
      <Lightformer
        intensity={4}
        position={[0, 4, 0]}
        scale={[10, 1, 1]}
        onUpdate={(self) => self.lookAt(0, 0, 0)} // Aim light at scene center
      />

      {/* Lightformer: Left side fill light */}
      <Lightformer
        intensity={2}
        position={[-5, 0, 1]}
        scale={[2, 5, 1]}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />

      {/* Lightformer: Right side fill light */}
      <Lightformer
        intensity={2}
        position={[5, 1, 1]}
        scale={[2, 5, 1]}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />

      {/* Lightformer: Front soft light for general fill */}
      <Lightformer
        intensity={2}
        position={[0, 2, 5]}
        scale={[10, 10, 1]}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />

      {/* Lightformer: Floor bounce light */}
      <Lightformer
        intensity={1}
        position={[0, -3, 0]}
        scale={[10, 1, 1]}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />

      {/* Additional spotlight to highlight top edges */}
      <spotLight
        position={[0, 5, 5]}
        angle={0.35}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
    </Environment>
  );
};

export default Lights;
