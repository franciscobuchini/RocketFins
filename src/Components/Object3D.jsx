// Object3D.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import Hat2 from '../Models/Hat2';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';

function Object3D({ texture }) {
  return (
    <div className='CanvasContainer'>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[35, 35, 0]} intensity={0.4} />
        <pointLight position={[-35, 35, 0]} intensity={0.4} />
        <Suspense fallback={null}>
          <Hat2 texture={texture} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Object3D;

