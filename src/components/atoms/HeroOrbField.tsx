import { useEffect, useRef } from "react";
import * as THREE from "three";

const ORBS = [
  { position: [2.8, 1.6, 0.2], radius: 1.35, speed: 0.32, phase: 0.2, color: 0x3ddb80 },
  { position: [4.8, -1.1, -1.4], radius: 0.82, speed: 0.44, phase: 1.7, color: 0x98e49e },
  { position: [1.2, -2.2, -0.6], radius: 0.55, speed: 0.38, phase: 2.8, color: 0x19ba5f },
  { position: [-3.9, 2.7, -2.8], radius: 0.34, speed: 0.52, phase: 3.2, color: 0x3ddb80 },
  { position: [-2.8, -2.5, -3.4], radius: 0.24, speed: 0.47, phase: 4.3, color: 0x98e49e },
  { position: [5.8, 2.8, -3.6], radius: 0.38, speed: 0.58, phase: 5.1, color: 0x3ddb80 },
] as const;

const HeroOrbField = () => {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x168a50, 2.3));
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.5);
    keyLight.position.set(-3, 4, 6);
    scene.add(keyLight);

    const geometry = new THREE.IcosahedronGeometry(1, 5);
    const materials: THREE.MeshPhysicalMaterial[] = [];
    const meshes = ORBS.map((orb) => {
      const material = new THREE.MeshPhysicalMaterial({
        color: orb.color,
        roughness: 0.16,
        metalness: 0.02,
        transmission: 0.18,
        thickness: 1.1,
        transparent: true,
        opacity: 0.76,
      });
      materials.push(material);
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(orb.position[0], orb.position[1], orb.position[2]);
      mesh.scale.setScalar(orb.radius);
      group.add(mesh);
      return mesh;
    });

    const pointer = new THREE.Vector2();
    const easedPointer = new THREE.Vector2();
    let frame = 0;
    let visible = true;

    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    };

    const handlePointer = (event: PointerEvent) => {
      pointer.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);
    };

    const clock = new THREE.Clock();
    const render = () => {
      const elapsed = clock.getElapsedTime();
      easedPointer.lerp(pointer, 0.035);
      group.rotation.y = easedPointer.x * 0.13;
      group.rotation.x = easedPointer.y * 0.08;
      group.position.x = easedPointer.x * 0.2;
      group.position.y = easedPointer.y * 0.12;

      meshes.forEach((mesh, index) => {
        const orb = ORBS[index];
        mesh.position.y = orb.position[1] + Math.sin(elapsed * orb.speed + orb.phase) * 0.2;
        mesh.position.x = orb.position[0] + Math.cos(elapsed * orb.speed * 0.7 + orb.phase) * 0.08;
        mesh.rotation.y = elapsed * 0.08 * (index % 2 ? -1 : 1);
      });

      renderer.render(scene, camera);
      if (visible) frame = window.requestAnimationFrame(render);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reducedMotion) {
        window.cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(render);
      }
    });
    visibilityObserver.observe(host);
    window.addEventListener("pointermove", handlePointer, { passive: true });
    resize();
    if (!reducedMotion) frame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointer);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      geometry.dispose();
      materials.forEach((material) => material.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} className="hero-orb-field" aria-hidden="true" />;
};

export default HeroOrbField;
