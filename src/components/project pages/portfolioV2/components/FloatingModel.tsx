import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function FloatingModel(props) {
    const modelRef = useRef();
    const gltf = useGLTF("/model/2023_mercedes-benz_amg_one.glb"); // path to your GLB file

    useFrame((state, delta) => {
        // Rotate slowly
        modelRef.current.rotation.y += delta / 2;

        // Floating effect
        // modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    });

    return <primitive ref={modelRef} object={gltf.scene} {...props} />;
}
