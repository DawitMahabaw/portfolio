import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Procedural Stylized 3D Workstation Scene built from Three.js primitives
function StylizedWorkstation() {
  const fanRef1 = useRef(null);
  const fanRef2 = useRef(null);

  useFrame((state, delta) => {
    if (fanRef1.current) fanRef1.current.rotation.z += delta * 6;
    if (fanRef2.current) fanRef2.current.rotation.z += delta * 6;
  });

  return (
    <group position={[0, -0.4, 0]}>
      {/* --- DESK SURFACE --- */}
      <mesh position={[0, -0.6, 0]}>
        <boxGeometry args={[4.2, 0.08, 2.4]} />
        <meshStandardMaterial color="#0c1122" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Desk Mat */}
      <mesh position={[0, -0.55, 0.2]}>
        <boxGeometry args={[3.2, 0.02, 1.4]} />
        <meshStandardMaterial color="#070a14" roughness={0.8} />
      </mesh>

      {/* --- WIDESCREEN CURVED MONITOR --- */}
      <group position={[-0.25, 0.35, -0.2]}>
        {/* Monitor Base */}
        <mesh position={[0, -0.9, 0]}>
          <cylinderGeometry args={[0.3, 0.35, 0.04, 32]} />
          <meshStandardMaterial color="#1e2438" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Monitor Stand Pillar */}
        <mesh position={[0, -0.45, -0.1]}>
          <boxGeometry args={[0.08, 0.9, 0.06]} />
          <meshStandardMaterial color="#151b2e" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Monitor Frame Backing */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.2, 1.25, 0.06]} />
          <meshStandardMaterial color="#0a0e1c" roughness={0.5} metalness={0.8} />
        </mesh>
        {/* Glowing Screen Display (IDE Code Aesthetic) */}
        <mesh position={[0, 0, 0.035]}>
          <planeGeometry args={[2.1, 1.15]} />
          <meshBasicMaterial color="#050814" />
        </mesh>
        {/* Simulated Code Lines on Display */}
        <mesh position={[-0.45, 0.3, 0.04]}>
          <planeGeometry args={[0.9, 0.05]} />
          <meshBasicMaterial color="#A855F7" />
        </mesh>
        <mesh position={[-0.3, 0.18, 0.04]}>
          <planeGeometry args={[1.2, 0.04]} />
          <meshBasicMaterial color="#06B6D4" />
        </mesh>
        <mesh position={[-0.4, 0.06, 0.04]}>
          <planeGeometry args={[1.0, 0.04]} />
          <meshBasicMaterial color="#94A3B8" />
        </mesh>
        <mesh position={[-0.2, -0.06, 0.04]}>
          <planeGeometry args={[1.4, 0.04]} />
          <meshBasicMaterial color="#38BDF8" />
        </mesh>
        <mesh position={[-0.35, -0.18, 0.04]}>
          <planeGeometry args={[1.1, 0.04]} />
          <meshBasicMaterial color="#C084FC" />
        </mesh>
        <mesh position={[-0.5, -0.3, 0.04]}>
          <planeGeometry args={[0.8, 0.04]} />
          <meshBasicMaterial color="#10B981" />
        </mesh>

        {/* Ambient Screen Light */}
        <pointLight position={[0, 0, 0.5]} intensity={1.2} color="#8B5CF6" distance={2.5} />
      </group>

      {/* --- TOWER PC (RGB GAMING/DEV CHASSIS) --- */}
      <group position={[1.4, 0.3, -0.1]}>
        {/* PC Main Case Body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.65, 1.45, 1.2]} />
          <meshStandardMaterial color="#0a0f20" metalness={0.85} roughness={0.25} />
        </mesh>

        {/* Glass Side Panel */}
        <mesh position={[-0.33, 0, 0]}>
          <boxGeometry args={[0.01, 1.35, 1.1]} />
          <meshPhysicalMaterial
            color="#141c38"
            transparent
            opacity={0.4}
            roughness={0.1}
            transmission={0.6}
            thickness={0.5}
          />
        </mesh>

        {/* Internal RGB Cooler Fan 1 (Purple) */}
        <mesh ref={fanRef1} position={[-0.1, 0.25, 0]}>
          <ringGeometry args={[0.16, 0.22, 24]} />
          <meshBasicMaterial color="#A855F7" side={THREE.DoubleSide} />
        </mesh>

        {/* Internal RGB Cooler Fan 2 (Cyan) */}
        <mesh ref={fanRef2} position={[-0.1, -0.25, 0]}>
          <ringGeometry args={[0.16, 0.22, 24]} />
          <meshBasicMaterial color="#06B6D4" side={THREE.DoubleSide} />
        </mesh>

        {/* GPU Light Accent Bar */}
        <mesh position={[-0.15, -0.05, 0.1]}>
          <boxGeometry args={[0.04, 0.08, 0.6]} />
          <meshBasicMaterial color="#A855F7" />
        </mesh>

        {/* PC Internal Light Glow */}
        <pointLight position={[-0.1, 0, 0]} intensity={2.5} color="#A855F7" distance={2} />
        <pointLight position={[-0.1, -0.2, 0]} intensity={2.0} color="#06B6D4" distance={2} />
      </group>

      {/* --- MECHANICAL KEYBOARD --- */}
      <group position={[-0.2, -0.5, 0.4]}>
        {/* Keyboard Base */}
        <mesh position={[0, 0, 0]} rotation={[-0.08, 0, 0]}>
          <boxGeometry args={[1.1, 0.04, 0.38]} />
          <meshStandardMaterial color="#141b2f" roughness={0.4} metalness={0.7} />
        </mesh>
        {/* Keycaps cluster */}
        <mesh position={[0, 0.03, 0]} rotation={[-0.08, 0, 0]}>
          <boxGeometry args={[1.02, 0.03, 0.32]} />
          <meshStandardMaterial color="#0b0f1d" roughness={0.6} />
        </mesh>
        {/* RGB Underglow */}
        <mesh position={[0, -0.01, 0]} rotation={[-0.08, 0, 0]}>
          <boxGeometry args={[1.12, 0.01, 0.4]} />
          <meshBasicMaterial color="#8B5CF6" />
        </mesh>
      </group>

      {/* --- MOUSE & CHARGER --- */}
      <group position={[0.65, -0.5, 0.4]}>
        <mesh position={[0, 0.02, 0]}>
          <boxGeometry args={[0.16, 0.06, 0.26]} />
          <meshStandardMaterial color="#141c33" roughness={0.3} metalness={0.8} />
        </mesh>
        {/* Mouse RGB scroll ring */}
        <mesh position={[0, 0.045, -0.03]}>
          <boxGeometry args={[0.02, 0.03, 0.06]} />
          <meshBasicMaterial color="#06B6D4" />
        </mesh>
      </group>
    </group>
  );
}

// Custom GLB Loader with safe fallback if /models/desktop.glb is absent
function GLBWorkstation({ url }) {
  const gltf = useGLTF(url);
  return <primitive object={gltf.scene} scale={1.2} position={[0, -0.5, 0]} />;
}

// Error Boundary for 3D Loading
class ModelErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(_error) {
    console.info('Custom GLB model not found in /public/models/desktop.glb. Using procedural stylized workstation scene.');
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Loading Spinner for 3D canvas
function CanvasLoader() {
  return (
    <div className="workstation-loader" aria-hidden="true">
      <div className="loader-ring" />
      <span className="loader-text">Loading 3D Dev Lab…</span>
    </div>
  );
}

export default function Workstation3D() {
  const [hasGLB, setHasGLB] = useState(false);
  const [isLowPowerOrMobile, setIsLowPowerOrMobile] = useState(false);

  // Check device capabilities (mobile or low-power)
  useEffect(() => {
    const checkDevice = () => {
      const isMobile = window.innerWidth < 768;
      const isLowPower = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
      setIsLowPowerOrMobile(isMobile || isLowPower);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice, { passive: true });
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Check if /models/desktop.glb is physically provided
  useEffect(() => {
    fetch('/models/desktop.glb', { method: 'HEAD' })
      .then((res) => {
        if (res.ok && res.headers.get('content-type')?.includes('model')) {
          setHasGLB(true);
        } else {
          setHasGLB(false);
        }
      })
      .catch(() => setHasGLB(false));
  }, []);

  // Static Fallback for Mobile / Low-Power devices
  if (isLowPowerOrMobile) {
    return (
      <div className="workstation-static-fallback">
        <div className="workstation-card-preview">
          <div className="screen-glow-mesh" />
          <img
            src="/images/about-workspace.jpg"
            alt="Developer Workstation"
            width="600"
            height="450"
            className="static-workstation-img"
            loading="lazy"
          />
          <div className="static-workstation-badge">
            <span className="live-dot" />
            <span>MERN Lab Workstation</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="workstation-3d-wrapper">
      <Suspense fallback={<CanvasLoader />}>
        <Canvas
          camera={{ position: [2.5, 1.8, 3.8], fov: 42 }}
          dpr={[1, 2]} // Cap DPR at 2 for optimal GPU performance
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          className="workstation-canvas"
        >
          {/* Ambient & Key Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 8, 4]} intensity={1.2} color="#ffffff" />
          <directionalLight position={[-4, 3, -2]} intensity={0.4} color="#A855F7" />

          {/* Floating Subtle Animation */}
          <Float speed={1.5} rotationIntensity={0.12} floatIntensity={0.3}>
            <ModelErrorBoundary fallback={<StylizedWorkstation />}>
              {hasGLB ? <GLBWorkstation url="/models/desktop.glb" /> : <StylizedWorkstation />}
            </ModelErrorBoundary>
          </Float>

          {/* Interactive Drag to Rotate with Limited Polar Angles and Zoom Disabled */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.7}
            minPolarAngle={Math.PI / 3.2}
            maxPolarAngle={Math.PI / 2.1}
            minAzimuthAngle={-Math.PI / 3}
            maxAzimuthAngle={Math.PI / 3}
          />
        </Canvas>
      </Suspense>

      {/* Interactive Helper Hint */}
      <div className="workstation-drag-hint" aria-hidden="true">
        <span>Drag to rotate 3D scene</span>
      </div>
    </div>
  );
}
