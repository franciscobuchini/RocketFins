//Fin.jsx
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Fin(props) {
  const { nodes, materials } = useGLTF('/fin.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Blade.geometry} material={materials.Blade} />
      <mesh geometry={nodes.Guides.geometry} material={materials.Guides} />
      <mesh geometry={nodes.Shoe.geometry} material={materials.Shoe} position={[0, 0, -2.09]} />
      <mesh geometry={nodes.Bumper.geometry} material={materials.Bumper} />
    </group>
  )
}

useGLTF.preload('/fin.gltf')