import React, { useRef } from 'react';
import { Canvas, useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import '../BreadModel/BreadModel.scss';

function Model({ gltf }) {
    const modelRef = useRef();

    useFrame(() => {
        modelRef.current.rotation.y += 0.003; // Adjust the rotation speed
    });

    return (
        <mesh ref={modelRef} scale={[0.115, 0.115, 0.1]} position={[0, -1.3, 0]} rotation={[0, 0, 0]}>
            {gltf ? <primitive object={gltf.scene} /> : null}
        </mesh>
    );
}

function BreadModel() {
    const gltf = useLoader(GLTFLoader, require('../../assets/models/Placeholder.gltf'));

    return (
        <div id='canva'>
            <Canvas>
                <ambientLight intensity={0.7} />
                <pointLight position={[0, 1, 0]} />
                <Model gltf={gltf} />
            </Canvas>
        </div>
    );
}

export default BreadModel;
