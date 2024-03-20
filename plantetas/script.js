// Configuración básica de Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Función para crear estrellas de fondo
function createStars() {
  const starGeometry = new THREE.SphereGeometry(0.7, 90, 80);
  const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

  for (let i = 0; i < 1000; i++) {
    const star = new THREE.Mesh(starGeometry, starMaterial);
    const x = Math.random() * 2000 - 1000;
    const y = Math.random() * 2000 - 1000;
    const z = Math.random() * 2000 - 1000;
    star.position.set(x, y, z);
    scene.add(star);
  }
}

// Crea estrellas de fondo
createStars();

// Crea el sol
const sunTexture = new THREE.TextureLoader().load("planetas/sol.jpeg");
const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Crea la luna
// Crea la luna
// Crea la luna
const moonTexture = new THREE.TextureLoader().load("planetas/luna.jpeg");
const moonGeometry = new THREE.SphereGeometry(0.8, 62, 62);
const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.orbitRadius = 3; // Distancia de la órbita de la Luna alrededor de la Tierra
moon.angle = Math.random() * Math.PI * 4; // Angulo inicial
moon.speed = 0.03; // Velocidad de la Luna alrededor de la Tierra
scene.add(moon);

// Crea los planetas y agrega nombres
const planets = [];
const planetData = [
  {
    name: "Mercury",
    texture: "planetas/mercurio.jpeg",
    radius: 0.5,
    distance: 5,
    speed: 0.02,
  },
  {
    name: "Venus",
    texture: "planetas/venus.jpeg",
    radius: 0.7,
    distance: 7,
    speed: 0.015,
  },
  {
    name: "Earth",
    texture: "planetas/tierra.jpeg",
    radius: 0.8,
    distance: 10,
    speed: 0.01,
  },

  {
    name: "Mars",
    texture: "planetas/marte.jpeg",
    radius: 0.6,
    distance: 13,
    speed: 0.008,
  },

  {
    name: "Mars",
    texture: "planetas/jupiter.jpeg",
    radius: 0.6,
    distance: 13,
    speed: 0.008,
  },

  {
    name: "Mars",
    texture: "planetas/urano.jpeg",
    radius: 0.6,
    distance: 13,
    speed: 0.008,
  },

  {
    name: "Mars",
    texture: "planetas/pluton.jpeg",
    radius: 0.6,
    distance: 13,
    speed: 0.008,
  },

  {
    name: "Mars",
    texture: "planetas/saturno.jpeg",
    radius: 0.6,
    distance: 13,
    speed: 0.008,
  },
];

planetData.forEach((data) => {
  const texture = new THREE.TextureLoader().load(data.texture);
  const geometry = new THREE.SphereGeometry(data.radius, 32, 32);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const planet = new THREE.Mesh(geometry, material);
  planet.orbitRadius = data.distance;
  planet.angle = Math.random() * Math.PI * 2;
  planet.speed = data.speed;
  scene.add(planet);
  planets.push(planet);

  // Crea texto para el nombre del planeta
  const textGeo = new THREE.TextGeometry(data.name, {
    font: "helvetiker",
    size: 0.1,
    height: 0.01,
  });
  const textMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const text = new THREE.Mesh(textGeo, textMaterial);
  text.position.set(
    planet.position.x,
    planet.position.y - data.radius - 0.2,
    planet.position.z
  ); // Ajusta las coordenadas según la posición del planeta
  scene.add(text);
});

// Configuración de la cámara
camera.position.z = 19;

// Animación del sistema solar
function animate() {
  requestAnimationFrame(animate);

  // Rotación del sol
  sun.rotation.y += 0.01;

  // Órbita y rotación de los planetas
  planets.forEach((planet) => {
    planet.angle += planet.speed;
    const x = Math.cos(planet.angle) * planet.orbitRadius;
    const z = Math.sin(planet.angle) * planet.orbitRadius;
    planet.position.set(x, 0, z);
    planet.rotation.y += 0.01;
  });

  renderer.render(scene, camera);
}
animate();
