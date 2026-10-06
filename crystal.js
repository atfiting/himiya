// crystal.js
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let scene, camera, renderer, controls, animationId;
let meshes = [];

const container = document.getElementById('crystalContainer');

export function renderCrystalLattice(data) {
  clearCrystal();
  if (!container) return;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0f172a);

  const aspect = container.clientWidth / container.clientHeight;
  camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);
  camera.position.set(4, 3, 5);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.5;

  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
  dirLight.position.set(5, 10, 7);
  scene.add(dirLight);
  const backLight = new THREE.PointLight(0x38bdf8, 0.5);
  backLight.position.set(-5, -3, -5);
  scene.add(backLight);

  if (!data || !data.ions) { animate(); return; }

  const allPositions = [];
  data.ions.forEach(ion => ion.positions.forEach(p => allPositions.push(p)));
  const center = [0, 0, 0];
  allPositions.forEach(p => {
    center[0] += p[0]; center[1] += p[1]; center[2] += p[2];
  });
  center[0] /= allPositions.length;
  center[1] /= allPositions.length;
  center[2] /= allPositions.length;

  data.ions.forEach(ion => {
    ion.positions.forEach(pos => {
      const geometry = new THREE.SphereGeometry(ion.radius || 0.3, 32, 32);
      const material = new THREE.MeshStandardMaterial({
        color: ion.color, roughness: 0.35, metalness: 0.1,
        emissive: ion.color, emissiveIntensity: 0.08
      });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(pos[0] - center[0], pos[1] - center[1], pos[2] - center[2]);
      scene.add(sphere);
      meshes.push(sphere);
    });
  });

  if (data.type && !data.type.includes('Ионная')) addBonds(data, center);
  addUnitCellFrame(center);
  animate();
  window.addEventListener('resize', onResize);
}

function addBonds(data, center) {
  const allAtoms = [];
  data.ions.forEach(ion => {
    ion.positions.forEach(pos => {
      allAtoms.push([pos[0] - center[0], pos[1] - center[1], pos[2] - center[2]]);
    });
  });
  const bondMaterial = new THREE.LineBasicMaterial({ color: 0x475569, transparent: true, opacity: 0.4 });
  for (let i = 0; i < allAtoms.length; i++) {
    for (let j = i + 1; j < allAtoms.length; j++) {
      const a = allAtoms[i], b = allAtoms[j];
      const dist = Math.sqrt((a[0]-b[0])**2 + (a[1]-b[1])**2 + (a[2]-b[2])**2);
      if (dist < 1.2 && dist > 0.01) {
        const points = [new THREE.Vector3(...a), new THREE.Vector3(...b)];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, bondMaterial);
        scene.add(line);
        meshes.push(line);
      }
    }
  }
}

function addUnitCellFrame(center) {
  const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
  const boxEdges = new THREE.EdgesGeometry(boxGeometry);
  const boxLines = new THREE.LineSegments(
    boxEdges,
    new THREE.LineBasicMaterial({ color: 0x334155, transparent: true, opacity: 0.3 })
  );
  boxLines.position.set(-center[0] + 0.5, -center[1] + 0.5, -center[2] + 0.5);
  scene.add(boxLines);
  meshes.push(boxLines);
}

function animate() {
  animationId = requestAnimationFrame(animate);
  if (controls) controls.update();
  if (renderer && scene && camera) renderer.render(scene, camera);
}

function onResize() {
  if (!container || !camera || !renderer) return;
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}

export function clearCrystal() {
  if (animationId) { cancelAnimationFrame(animationId); animationId = null; }
  meshes.forEach(mesh => {
    if (mesh.geometry) mesh.geometry.dispose();
    if (mesh.material) mesh.material.dispose();
  });
  meshes = [];
  if (renderer) { renderer.dispose(); renderer = null; }
  scene = null; camera = null; controls = null;
  window.removeEventListener('resize', onResize);
}