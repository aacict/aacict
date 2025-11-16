import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function RotatingCube() {
    const cubeRef = useRef(null);

    // This runs every frame
    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta; // rotate Y-axis
        cubeRef.current.rotation.x += delta / 2; // rotate X-axis slower
    });

    return (
        <mesh ref={cubeRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="white" />
        </mesh>
    );
}
