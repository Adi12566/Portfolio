import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 1000, color = "#10b981" }) {
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
      <pointLight ref={light} distance={10} intensity={2} color={color} />
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
          color={color}
          transparent
          opacity={0.4}
          sizeAttenuation
        />
      </points>
    </>
  );
}

export default function ThreeBackground({ 
  color = "#10b981", 
  particleCount = 1000,
  bgColor = "transparent" 
}: { 
  color?: string; 
  particleCount?: number;
  bgColor?: string;
}) {
  return (
    <div 
      className="fixed inset-0 -z-10 pointer-events-none transition-colors duration-1000"
      style={{ backgroundColor: bgColor }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.1} />
        <Particles count={particleCount} color={color} />
      </Canvas>
    </div>
  );
}
