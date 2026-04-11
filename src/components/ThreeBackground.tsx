import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 1500 }) {
  const mesh = useRef<THREE.Points>(null!);
  const light = useRef<THREE.PointLight>(null!);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.y = time * 0.05;
    mesh.current.rotation.x = time * 0.02;
    
    // Mouse interaction
    const { x, y } = state.mouse;
    light.current.position.set(x * 5, y * 5, 2);
  });

  return (
    <>
      <pointLight ref={light} distance={10} intensity={2} color="#10b981" />
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.015}
          color="#10b981"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020617]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <Particles />
      </Canvas>
    </div>
  );
}
