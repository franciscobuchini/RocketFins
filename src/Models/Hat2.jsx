// Hat2.jsx
import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

export default function Hat2({ texture }) {
  const { nodes, materials } = useGLTF('../../Public/Models/hat2.gltf');
  const mapTexture = useTexture(`../../Public/Models/Textures/${texture}.png`);
  
  return (
    <group dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.material}>
        <meshBasicMaterial map={mapTexture} />
      </mesh>
      <mesh geometry={nodes.Object_5.geometry} material={materials.line} />
    </group>
  );
}

useGLTF.preload('../../Public/Models/hat2.gltf');
