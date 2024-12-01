"use client";

import { Canvas } from "@react-three/fiber";
import { useState } from "react";

type Props = {};

const EarthGravity = () => {};

function ViewCanvas({}: Props) {
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);

  const moveObject = (event: React.MouseEvent) => {
    setPosition([1, 1, 1]);
  };

  return (
    <Canvas>
      <mesh onClick={moveObject} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
}

export default ViewCanvas;
