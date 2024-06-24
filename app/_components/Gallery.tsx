/* eslint-disable jsx-a11y/alt-text */
import * as THREE from 'three';
import { JSX, useEffect, useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    useCursor,
    MeshReflectorMaterial,
    Image,
    Text,
    Environment,
} from '@react-three/drei';
import { useRoute, useLocation } from 'wouter';
import { easing } from 'maath';
import getUuid from 'uuid-by-string';

const GOLDENRATIO = 1.61803398875;

interface GalleryProps {
    images: { url: string; msg: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    return (
        <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
            <color attach="background" args={['#03045e']} />
            <fog attach="fog" args={['#03045e', 0, 15]} />
            <Suspense fallback={null}>
                <group position={[0, -0.5, 0]}>
                    <Frames images={images} />
                    <mesh rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[50, 50]} />
                        <MeshReflectorMaterial
                            blur={[100, 50]} // Adjusted blur values for a sharper reflection
                            resolution={2048}
                            mixBlur={0.5} // Reduced mixBlur for cleaner reflection
                            mixStrength={50} // Adjusted mixStrength for balanced blending
                            roughness={0.5} // Reduced roughness for smoother reflection
                            depthScale={1.0} // Adjusted depthScale for better depth representation
                            minDepthThreshold={0.1} // Lowered minDepthThreshold for clearer near reflections
                            maxDepthThreshold={1.0} // Lowered maxDepthThreshold for better overall depth
                            color="#03045e" // Background color
                            metalness={0.2}
                            mirror={0.2} // Slight mirror effect for balanced reflections
                        />
                    </mesh>
                </group>
                <Environment preset="city" />
            </Suspense>
        </Canvas>
    );
};

function Frames({
    images,
    q = new THREE.Quaternion(),
    p = new THREE.Vector3(),
}: {
    images: { url: string }[];
    q?: THREE.Quaternion;
    p?: THREE.Vector3;
}) {
    const ref = useRef<THREE.Group>(null);
    const clicked = useRef<THREE.Object3D | null>(null);
    const [, params] = useRoute('/item/:id');
    const [, setLocation] = useLocation();
    useEffect(() => {
        if (ref.current && params?.id) {
            const foundObject = ref.current.getObjectByName(params.id);
            if (foundObject) {
                clicked.current = foundObject;
                foundObject.parent?.updateWorldMatrix(true, true);
                foundObject.parent?.localToWorld(
                    p.set(0, GOLDENRATIO / 2, 1.25),
                );
                foundObject.parent?.getWorldQuaternion(q);
            } else {
                p.set(0, 0, 5.5);
                q.identity();
            }
        } else {
            // Handle the case when params?.id is undefined or no object is found
            clicked.current = null;
            p.set(0, 0, 5.5);
            q.identity();
        }
    }, [params, q, p]);
    useFrame((state, dt) => {
        easing.damp3(state.camera.position, p, 0.4, dt);
        easing.dampQ(state.camera.quaternion, q, 0.4, dt);
    });
    return (
        <group
            ref={ref}
            onClick={e => (
                e.stopPropagation(),
                setLocation(
                    clicked.current === e.object
                        ? '/'
                        : '/item/' + e.object.name,
                )
            )}
            onPointerMissed={() => setLocation('/')}
        >
            {images.map(
                (props: JSX.IntrinsicAttributes & FrameProps) => <Frame key={props.url} {...props} /> /* prettier-ignore */,
            )}
        </group>
    );
}

interface FrameProps {
    url: string;
    c?: THREE.Color;
    [key: string]: any;
}

const Frame: React.FC<FrameProps> = ({
    url,
    c = new THREE.Color(),
    ...props
}) => {
    const image =
        useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material>>(null);
    const frame =
        useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material>>(null);
    const [, params] = useRoute('/item/:id');
    const [hovered, hover] = useState(false);
    const [rnd] = useState(() => Math.random());
    const name = getUuid(url);
    const isActive = params?.id === name;
    useCursor(hovered);
    useFrame((state, dt) => {
        const initialZoom = 1.2;
        const zoomRange = 0.2;
        if (image.current) {
            (image.current.material as any).zoom =
                initialZoom +
                zoomRange * Math.sin(rnd * 10000 + state.clock.elapsedTime / 3);
            easing.damp3(
                image.current.scale,
                [
                    0.7 * (!isActive && hovered ? 0.85 : 1),
                    0.75 * (!isActive && hovered ? 0.905 : 1),
                    1,
                ],
                0.1,
                dt,
            );
        }
        if (frame.current) {
            easing.dampC(
                (frame.current.material as THREE.MeshBasicMaterial).color,
                hovered ? '#00b4d8' : '#0096c7', // Adjusted color for hover and default
                0.1,
                dt,
            );
        }
    });
    return (
        <group {...props}>
            <mesh
                name={name}
                onPointerOver={e => (e.stopPropagation(), hover(true))}
                onPointerOut={() => hover(false)}
                scale={[1, GOLDENRATIO, 0.05]}
                position={[0, GOLDENRATIO / 2, 0]}
            >
                <boxGeometry />
                <meshStandardMaterial
                    color="#023e8a"
                    metalness={0.5}
                    roughness={0.5}
                    envMapIntensity={2}
                />
                <mesh
                    ref={frame}
                    raycast={() => null}
                    scale={[0.9, 0.93, 0.9]}
                    position={[0, 0, 0.2]}
                >
                    <boxGeometry />
                    <meshBasicMaterial toneMapped={false} fog={false} />
                </mesh>
                <Image
                    raycast={() => null}
                    ref={image}
                    position={[0, 0, 0.7]}
                    scale={[0.8, GOLDENRATIO * 0.8]}
                    url={url}
                />
            </mesh>
            <Text
                maxWidth={0.1}
                anchorX="left"
                anchorY="top"
                position={[0.55, GOLDENRATIO, 0]}
                fontSize={0.025}
                color="#90e0ef" // Adjust text color
            >
                {props.msg.split('-').join(' ')}
            </Text>
        </group>
    );
};

export default Gallery;
