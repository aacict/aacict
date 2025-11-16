import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import RotatingCube from "./components/RotatingCube";
import FloatingModel from "./components/FloatingModel";

export default function V2Portfolio() {
    return (
        <div className="container w-full h-screen flex justify-center items-center bg-gray-900">
            {/* <Canvas camera={{ position: [3, 3, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <RotatingCube />
                <OrbitControls enableZoom={true} />
            </Canvas> */}

            <Canvas camera={{ position: [3, 2, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                <FloatingModel scale={1.5} />
                <OrbitControls enableZoom={true} />
            </Canvas>

        </div>
    );
}
