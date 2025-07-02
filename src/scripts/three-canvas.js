import * as THREE from "three";

const width = window.innerwidth;
const height = window.innerHeight;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x262626);
const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
camera.position.set(0, 0, 10);

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio, 2);

const container = document.querySelector("#threejs-container");
container.append(renderer.domElement);
renderer.render(scene, camera);
