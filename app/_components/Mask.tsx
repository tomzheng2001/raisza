'use client';
import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { MTLLoader } from 'three/examples/jsm/Addons.js';
import { OBJLoader } from 'three/examples/jsm/Addons.js';
import { Object3D } from 'three';

interface ModelProps {
    objUrl: string;
    mtlUrl: string;
    cursorPosition: { x: number; y: number } | null;
}

const Model: React.FC<ModelProps> = ({ objUrl, mtlUrl, cursorPosition }) => {
    const objRef = useRef<Object3D>();
    const [model, setModel] = useState<Object3D | null>(null);

    useEffect(() => {
        const mtlLoader = new MTLLoader();
        mtlLoader.load(mtlUrl, materials => {
            materials.preload();
            const objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load(objUrl, object => {
                setModel(object);
            });
        });
    }, [objUrl, mtlUrl]);

    useFrame(() => {
        if (objRef.current && cursorPosition) {
            objRef.current.position.x = cursorPosition.x * Math.PI;
            objRef.current.position.y = cursorPosition.y * Math.PI;
            objRef.current.rotation.z =
                (cursorPosition.x + cursorPosition.y) * Math.PI;
        }
    });

    return model ? <primitive ref={objRef} object={model} scale={0.6} /> : null;
};

const Mask: React.FC = () => {
    const [cursorPosition, setCursorPosition] = useState<{
        x: number;
        y: number;
    } | null>(null);

    const handleMouseMove = (event: MouseEvent) => {
        const { clientX, clientY } = event;
        const x = (clientX / window.innerWidth) * 2 - 1;
        const y = -(clientY / window.innerHeight) * 2 + 1;
        setCursorPosition({ x, y });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <Canvas
            camera={{ position: [5, -5, 20], fov: 125 }}
            style={{ height: '80vh', width: '50vw' }}
        >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <Model
                    objUrl="/sword/sword.obj"
                    mtlUrl="/sword/sword.mtl"
                    cursorPosition={cursorPosition}
                />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
    );
};

export default Mask;
