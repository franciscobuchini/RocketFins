// Object3D.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Fin } from './../../Public/Fin'


function Object3D() {
  return (
    <div className='CanvasContainer'>
      <Canvas>
        <ambientLight intensity={2} />
        <pointLight position={[35, 35, 0]} intensity={1} />
        <pointLight position={[-35, 35, 0]} intensity={0.5} />
        <Suspense fallback={null}>
          <Fin/>
        </Suspense>
        <OrbitControls minDistance={1.3} maxDistance={5} />
      </Canvas>
    </div>
  );
}

export default Object3D;