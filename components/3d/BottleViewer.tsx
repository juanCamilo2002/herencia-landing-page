"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF, Html, useProgress } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <p style={{ color: "white" }}>{progress.toFixed(0)}%</p>
    </Html>
  );
}

function BottleModel() {
  const gltf = useGLTF("/models/bottle.glb");

  const model = gltf.scene.clone();

  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  model.position.sub(center);

  return (
    <primitive
      object={model}
      scale={4.1}
      rotation={[0, Math.PI, 0]}
    />
  );
}

export default function BottleViewer() {
  return (
    <Canvas camera={{ position: [0, 3, 5], fov: 32 }}  gl={{ alpha: true }} >
      <ambientLight intensity={0.6} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        castShadow
      />

      <spotLight
        position={[0, 10, 2]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        castShadow
      />

      <Environment preset="city" />

      <Suspense fallback={<Loader />}>
        <BottleModel />
      </Suspense>

      

      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}

useGLTF.preload("/models/bottle.glb");
