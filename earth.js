////////////////// setup //////////////////
import * as T from 'three';
import { OrbitControls } from 'orbit';


const scene = new T.Scene();
const camera = new T.PerspectiveCamera(45, 1, 0.1, 1000);
const renderer = new T.WebGLRenderer();
renderer.setSize(200, 200);
renderer.setAnimationLoop(animate);
const section = document.getElementById("earth-canvas");
section.appendChild(renderer.domElement);
const controls = new OrbitControls( camera, renderer.domElement );
//////////////// end setup ////////////////

// load the texture
// load in the cover texture
let map = new T.TextureLoader().load("./resources/earth.jpg");
map.flipY = false;


const radius = 1;
const color = 0xffffff;
let geometry=new T.SphereGeometry(radius);
let mat = new T.MeshStandardMaterial({color: color, roughnessMap:map, map: map});
let mesh = new T.Mesh(geometry,mat);
mesh.rotateZ(1*Math.PI);
mesh.rotateY(-.1*Math.PI);
mesh.rotateX(-.1*Math.PI);
scene.add(mesh);

let directionalLight = new T.DirectionalLight(0xffffff, 2); 
directionalLight.position.set(2, 1, 2);
scene.add(directionalLight);


camera.position.set(0,.5,3);


function animate() {
    // mesh.rotation.x+= 0.01;
    mesh.rotation.y += 0.01;
    // mesh.rotation.z += 0.01;
	controls.update();
    renderer.render(scene, camera);
}