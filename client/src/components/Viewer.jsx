import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { useViewer } from "../context/ViewerContext";
import { Suspense, useEffect } from "react";

function Model({ url, wireframe }) {
  const { scene } = useGLTF(url);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.wireframe = wireframe;
      }
    });
  }, [scene, wireframe]);

  return <primitive object={scene} scale={1.5} />;
}

export default function Viewer() {
  const { modelUrl, bgColor, wireframe } = useViewer();

  return (
    <Canvas style={{ height: "100vh" }}>
      {/* Background */}
      <color attach="background" args={[bgColor]} />

      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} />

      {/* Controls */}
      <OrbitControls enablePan enableZoom enableRotate />

      {/* HDRI (Bonus ready) */}
      <Environment preset="sunset" />

      {/* Model */}
      <Suspense fallback={null}>
        {modelUrl && <Model url={modelUrl} wireframe={wireframe} />}
      </Suspense>
    </Canvas>
  );
}
