import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { useTheme } from '@/hooks/useTheme';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const AnimatedSphere = ({ theme }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.2;
    meshRef.current.rotation.y = t * 0.3;
  });

  const color = theme === 'dark' ? '#7C5CFF' : '#6B4CFF';

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[1, 64, 64]} ref={meshRef} scale={2.2}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.4}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

export const ThreeHeroScene = () => {
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={1} color={theme === 'dark' ? '#00D4FF' : '#00B2E8'} />
        <Suspense fallback={null}>
          <AnimatedSphere theme={theme} />
        </Suspense>
      </Canvas>
    </div>
  );
};
