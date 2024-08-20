// Object3D.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';

function Object3D() {
  return (
    <div className='CanvasContainer'>
      <Canvas>
        <ambientLight intensity={0.2} />
        <pointLight position={[35, 35, 0]} intensity={0.4} />
        <pointLight position={[-35, 35, 0]} intensity={0.4} />
        <Suspense fallback={null}>

        </Suspense>
        <OrbitControls minDistance={1.8} maxDistance={2.8} />
      </Canvas>
    </div>
  );
}

export default Object3D;