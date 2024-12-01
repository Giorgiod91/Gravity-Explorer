"use client";

import { Canvas } from "@react-three/fiber";

type Props = {};

function ViewCanvas({}: Props) {
  return (
    <Canvas>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
}

export default ViewCanvas;
