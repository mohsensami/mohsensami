import { Object3DNode } from "@react-three/fiber";
import * as THREE from "three";

declare module "@react-three/fiber" {
  interface ThreeElements {
    mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
    boxGeometry: Object3DNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>;
    sphereGeometry: Object3DNode<
      THREE.SphereGeometry,
      typeof THREE.SphereGeometry
    >;
    meshStandardMaterial: Object3DNode<
      THREE.MeshStandardMaterial,
      typeof THREE.MeshStandardMaterial
    >;
    points: Object3DNode<THREE.Points, typeof THREE.Points>;
    bufferGeometry: Object3DNode<
      THREE.BufferGeometry,
      typeof THREE.BufferGeometry
    >;
    pointsMaterial: Object3DNode<
      THREE.PointsMaterial,
      typeof THREE.PointsMaterial
    >;
    ambientLight: Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>;
    directionalLight: Object3DNode<
      THREE.DirectionalLight,
      typeof THREE.DirectionalLight
    >;
    pointLight: Object3DNode<THREE.PointLight, typeof THREE.PointLight>;
  }
}
