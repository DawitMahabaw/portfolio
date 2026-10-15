import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function FloatingGeometry() {
  const meshRef = useRef(null);
  const innerRef = useRef(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.25;
      innerRef.current.rotation.y = -t * 0.35;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.5}>
      <group>
        {/* Outer wireframe icosahedron */}
        <mesh ref={meshRef} scale={1.8}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial 
            color="#A855F7" 
            wireframe 
            transparent 
            opacity={0.35} 
          />
        </mesh>

        {/* Inner geometric core */}
        <mesh ref={innerRef} scale={0.95}>
          <octahedronGeometry args={[1, 0]} />
          <meshBasicMaterial 
            color="#06B6D4" 
            wireframe 
            transparent 
            opacity={0.65} 
          />
        </mesh>
      </group>
    </Float>
  );
}

function ParticleField({ count = 60 }) {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return positions;
  }, [count]);

  const pointsRef = useRef(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#38bdf8"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function Hero3DCanvas() {
  return (
    <div 
      className="hero-3d-container" 
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.8,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <ParticleField count={45} />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}
