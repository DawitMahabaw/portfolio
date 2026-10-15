import React, { Suspense, useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { MapPin, Globe } from 'lucide-react';

// Generates an illuminated procedural digital earth texture
function createDigitalEarthTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  // 1. Deep cosmic ocean background
  const oceanGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
  oceanGrad.addColorStop(0, '#030614');
  oceanGrad.addColorStop(0.5, '#050a1f');
  oceanGrad.addColorStop(1, '#02040d');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 2. Latitude & Longitude grid lines
  ctx.strokeStyle = 'rgba(6, 182, 212, 0.12)';
  ctx.lineWidth = 1;

  // Latitudes
  for (let y = 32; y < canvas.height; y += 32) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Longitudes
  for (let x = 32; x < canvas.width; x += 32) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  // 3. Stylized Continents (Vector Shapes)
  ctx.fillStyle = '#0B132B';
  ctx.strokeStyle = 'rgba(168, 85, 247, 0.6)';
  ctx.lineWidth = 1.5;

  // Helper to draw smoothed landmass
  const drawLand = (points) => {
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i][0], points[i][1]);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  };

  // Africa
  drawLand([
    [470, 190], [520, 180], [570, 220], [600, 240], [580, 280],
    [560, 360], [530, 390], [510, 350], [480, 290], [450, 240], [450, 210]
  ]);

  // Europe
  drawLand([
    [460, 120], [510, 110], [560, 130], [550, 170], [510, 175], [470, 170], [460, 130]
  ]);

  // Asia
  drawLand([
    [560, 120], [650, 90], [750, 100], [830, 140], [800, 210],
    [750, 250], [700, 220], [630, 240], [580, 180], [560, 140]
  ]);

  // North America
  drawLand([
    [150, 90], [240, 80], [310, 120], [280, 180], [240, 210],
    [210, 220], [170, 170], [130, 130]
  ]);

  // South America
  drawLand([
    [240, 230], [290, 240], [330, 280], [310, 360], [270, 420],
    [250, 380], [230, 280]
  ]);

  // Australia
  drawLand([
    [780, 310], [840, 300], [880, 340], [850, 390], [790, 380], [770, 340]
  ]);

  // 4. Glowing City Nodes & Tech Network Dots
  const cities = [
    [550, 250], // Addis Ababa, Ethiopia (Key Node)
    [500, 150], // London / Paris
    [260, 160], // New York
    [180, 170], // San Francisco
    [720, 220], // Mumbai
    [780, 190], // Singapore / Tokyo
    [840, 350], // Sydney
    [530, 370], // Cape Town
    [300, 320], // São Paulo
  ];

  cities.forEach(([cx, cy], idx) => {
    // Halo
    ctx.fillStyle = idx === 0 ? 'rgba(6, 182, 212, 0.7)' : 'rgba(168, 85, 247, 0.5)';
    ctx.beginPath();
    ctx.arc(cx, cy, idx === 0 ? 7 : 4, 0, Math.PI * 2);
    ctx.fill();

    // Core
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(cx, cy, idx === 0 ? 3 : 1.8, 0, Math.PI * 2);
    ctx.fill();
  });

  return new THREE.CanvasTexture(canvas);
}

// Procedural 3D Earth Component
function ProceduralEarth() {
  const earthGroupRef = useRef(null);
  const atmosphereRef = useRef(null);
  const ringRef = useRef(null);
  const beaconRef = useRef(null);

  // Generate texture once
  const earthTexture = useMemo(() => createDigitalEarthTexture(), []);

  // Addis Ababa coordinates (9.03° N, 38.74° E) on sphere of radius 1.4
  const pinPosition = useMemo(() => {
    const lat = 9.03;
    const lon = 38.74;
    const radius = 1.405;
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return [
      -(radius * Math.sin(phi) * Math.cos(theta)),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta),
    ];
  }, []);

  useFrame((state, delta) => {
    if (!earthGroupRef.current) return;

    // Slow auto-rotation
    earthGroupRef.current.rotation.y += delta * 0.16;

    // Subtle responsive mouse parallax
    const targetRotX = -state.pointer.y * 0.28;
    const targetPosX = state.pointer.x * 0.25;
    earthGroupRef.current.rotation.x = THREE.MathUtils.lerp(earthGroupRef.current.rotation.x, targetRotX, 0.04);
    earthGroupRef.current.position.x = THREE.MathUtils.lerp(earthGroupRef.current.position.x, targetPosX, 0.04);

    // Orbit ring rotation
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.08;
    }

    // Beacon pulse
    if (beaconRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.3;
      beaconRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <group ref={earthGroupRef} position={[0, 0, 0]}>
      {/* 1. Central Earth Sphere with Procedural Digital Map */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1.4, 64, 64]} />
        <meshStandardMaterial
          map={earthTexture}
          roughness={0.45}
          metalness={0.3}
          emissive="#060c22"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* 2. Cybernetic Longitude / Latitude Outer Wireframe Ring */}
      <mesh>
        <sphereGeometry args={[1.415, 24, 24]} />
        <meshBasicMaterial
          color="#06B6D4"
          wireframe
          transparent
          opacity={0.07}
        />
      </mesh>

      {/* 3. Glowing Atmospheric Halo */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[1.46, 48, 48]} />
        <meshBasicMaterial
          color="#A855F7"
          transparent
          opacity={0.16}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 4. Glowing Cybernetic Orbit Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0.3, 0]}>
        <ringGeometry args={[1.85, 1.88, 64]} />
        <meshBasicMaterial
          color="#06B6D4"
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 5. Addis Ababa Location Beacon Pin */}
      <group position={pinPosition}>
        {/* Glowing Pin Tip */}
        <mesh>
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshBasicMaterial color="#06B6D4" />
        </mesh>
        {/* Pulsing Signal Wave */}
        <mesh ref={beaconRef}>
          <ringGeometry args={[0.04, 0.08, 16]} />
          <meshBasicMaterial
            color="#A855F7"
            transparent
            opacity={0.7}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </group>
  );
}

// Custom GLB Model loader fallback
function CustomEarthModel() {
  const { scene } = useGLTF('/models/earth.glb');
  const modelRef = useRef();

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.16;
      modelRef.current.rotation.x = THREE.MathUtils.lerp(modelRef.current.rotation.x, -state.pointer.y * 0.25, 0.04);
      modelRef.current.position.x = THREE.MathUtils.lerp(modelRef.current.position.x, state.pointer.x * 0.25, 0.04);
    }
  });

  return <primitive ref={modelRef} object={scene} scale={1.4} />;
}

// Wrapper trying GLB first, then procedural fallback
function EarthModelSelector() {
  const [hasGlb, setHasGlb] = useState(false);

  useEffect(() => {
    fetch('/models/earth.glb', { method: 'HEAD' })
      .then((res) => {
        if (res.ok && res.headers.get('content-type')?.includes('model')) {
          setHasGlb(true);
        }
      })
      .catch(() => setHasGlb(false));
  }, []);

  return hasGlb ? <CustomEarthModel /> : <ProceduralEarth />;
}

export default function Earth3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        window.innerWidth <= 840 ||
        (window.matchMedia && window.matchMedia('(hover: none)').matches)
      );
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Static Starfield / Graphic on mobile or low power devices
  if (isMobile) {
    return (
      <div className="earth-mobile-fallback" aria-label="Location: Addis Ababa, Ethiopia">
        <div className="starfield-static-backdrop" />
        <div className="fallback-earth-circle">
          <Globe size={72} className="fallback-globe-icon" />
          <div className="fallback-beacon-dot" />
        </div>
        <div className="fallback-info-pill">
          <MapPin size={14} className="text-cyan" />
          <span>Addis Ababa, Ethiopia · UTC+3</span>
        </div>
      </div>
    );
  }

  return (
    <div className="earth-3d-wrapper" aria-label="Interactive 3D Earth: Addis Ababa, Ethiopia">
      <Canvas
        camera={{ position: [0, 0.3, 3.8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      >
        <Suspense fallback={null}>
          {/* Starfield Background */}
          <Stars 
            radius={50} 
            depth={40} 
            count={1400} 
            factor={3.5} 
            saturation={0} 
            fade 
            speed={1.2} 
          />

          {/* Lighting */}
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 4, 5]} intensity={2.2} color="#FFFFFF" />
          <pointLight position={[-5, -2, -3]} intensity={2.8} color="#A855F7" />
          <pointLight position={[3, -4, 3]} intensity={1.5} color="#06B6D4" />

          {/* Earth Scene */}
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
            <EarthModelSelector />
          </Float>
        </Suspense>
      </Canvas>

      {/* Floating Status Pill over Canvas */}
      <div className="earth-location-badge">
        <span className="live-location-dot" />
        <span>Addis Ababa, Ethiopia (UTC+3)</span>
      </div>
    </div>
  );
}
