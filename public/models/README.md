# 3D Models Directory

Place your custom 3D model here:
- **File Name:** `desktop.glb`
- **Location:** `public/models/desktop.glb`

When present, the portfolio 3D workstation scene in the Home section will automatically load and render your custom `.glb` model via `@react-three/drei`'s `useGLTF`.
If this file is absent, the portfolio gracefully renders a stylized Three.js procedural workstation scene built with primitives (curved monitor with glowing code screen, RGB tower PC, keyboard, and desk).
