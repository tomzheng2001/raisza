'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticlesBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000,
        );
        const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        mount.appendChild(renderer.domElement);

        // Particles
        const particleCount = 2000; // Increase the number of particles
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }

        particles.setAttribute(
            'position',
            new THREE.BufferAttribute(positions, 3),
        );
        const particleMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.05, // Decrease the size of the particles
            transparent: true,
            opacity: 0.5, // Lower opacity for a more subtle effect
        });
        const particleSystem = new THREE.Points(particles, particleMaterial);
        scene.add(particleSystem);

        camera.position.z = 10;

        const animate = () => {
            requestAnimationFrame(animate);
            particleSystem.rotation.x += 0.0005; // Slow down rotation for subtlety
            particleSystem.rotation.y += 0.0005;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            mount.removeChild(renderer.domElement);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
            }}
        />
    );
};

export default ParticlesBackground;
