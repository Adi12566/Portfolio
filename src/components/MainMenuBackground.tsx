import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';

const CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@%&";

function FloatingText({ count = 12 }) {
  const chars = useMemo(() => {
    return Array.from({ length: count }, () => ({
      char: CHARS[Math.floor(Math.random() * CHARS.length)],
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 2
      ],
      speed: 0.1 + Math.random() * 0.2,
    }));
  }, [count]);

  return (
    <>
      {chars.map((item, i) => (
        <Float 
          key={i} 
          speed={item.speed} 
          rotationIntensity={0.2} 
          floatIntensity={0.2}
          position={item.position as [number, number, number]}
        >
          <Text
            fontSize={0.25}
            color="#ffffff"
            fillOpacity={0.15}
            font="monospace"
          >
            {item.char}
          </Text>
        </Float>
      ))}
    </>
  );
}

function CircuitGrid({ color = "#10b981" }) {
  const mesh = useRef<THREE.LineSegments>(null!);
  const nodesRef = useRef<THREE.Points>(null!);
  
  const { geometry, nodesGeometry } = useMemo(() => {
    const size = 20;
    const divisions = 15;
    const step = size / divisions;
    const vertices = [];
    const nodePositions = [];

    for (let i = 0; i <= divisions; i++) {
      const coord = i * step - size / 2;
      vertices.push(-size / 2, coord, 0, size / 2, coord, 0);
      vertices.push(coord, -size / 2, 0, coord, size / 2, 0);

      for (let j = 0; j <= divisions; j++) {
        if (Math.random() > 0.7) {
          const coord2 = j * step - size / 2;
          nodePositions.push(coord, coord2, 0);
        }
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const nGeo = new THREE.BufferGeometry();
    nGeo.setAttribute('position', new THREE.Float32BufferAttribute(nodePositions, 3));

    return { geometry: geo, nodesGeometry: nGeo };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
        mesh.current.rotation.z = time * 0.01;
        (mesh.current.material as THREE.LineBasicMaterial).opacity = 0.05 + Math.sin(time) * 0.02;
    }
    if (nodesRef.current) {
        nodesRef.current.rotation.z = time * 0.01;
        const mat = nodesRef.current.material as THREE.PointsMaterial;
        // Sharper flashing
        mat.opacity = 0.1 + (Math.sin(time * 4) > 0.8 ? 0.6 : 0.1);
        mat.size = 0.12 + Math.sin(time * 10) * 0.05;
    }
  });

  return (
    <group rotation={[-Math.PI / 4, 0, -2]} position={[0, 0, -2]}>
      <lineSegments ref={mesh} geometry={geometry}>
        <lineBasicMaterial color={color} transparent opacity={0.1} depthWrite={false} />
      </lineSegments>
      <points ref={nodesRef} geometry={nodesGeometry}>
        <pointsMaterial color={color} size={0.15} transparent opacity={0.6} depthWrite={false} />
      </points>
    </group>
  );
}

export default function MainMenuBackground({ accentColor = "#10b981" }) {
  return (
    <div className="absolute inset-0 bg-black/40 pointer-events-none overflow-hidden">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 60 }} 
        dpr={1}
        style={{ pointerEvents: 'none' }}
      >
        <CircuitGrid color={accentColor} />
        <FloatingText />
      </Canvas>
    </div>
  );
}
