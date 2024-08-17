////////////////// setup //////////////////
import * as T from 'three';
import { OrbitControls } from 'orbit';


const scene = new T.Scene();
const camera = new T.PerspectiveCamera(45, 1, 0.1, 1000);
const renderer = new T.WebGLRenderer();
renderer.setSize(200, 200);
renderer.setAnimationLoop(animate);
const section = document.getElementById("laptop-canvas");
section.appendChild(renderer.domElement);
const controls = new OrbitControls( camera, renderer.domElement );
//////////////// end setup ////////////////

// load the texture
// load in the cover texture
let fcg = new T.TextureLoader().load("./resources/laptop.png");
fcg.flipY = false;

// size of the book in inches
const bookWidth = 9.5  / 12;
const bookLength = 8/ 12;
const bookHeight = .2/ 12; 
const overhang = .0;


// export class Book {
    
const positions = new Float32Array( [
    // bottom
    0,0,0, 
    bookWidth,0,0,
    bookWidth,0,.2/12,
    0,0,.2/12,
    // top
    0,8/12,0,
    bookWidth,8/12,0,
    bookWidth,8/12,.2/12,
    0,8/12,.2/12,
    // back spine (X=0)
    0,0,0,
    0,0,.2/12,
    0,8/12,.2/12,
    0,8/12,0,
    // front edge (Z=0)
    0,0,0,
    bookWidth,0,0,
    bookWidth,8/12,0,
    0,8/12,0,
    // side edge X=1
    bookWidth,0,0,
    bookWidth,0,.2/12,
    bookWidth,8/12,.2/12,
    bookWidth,8/12,0,
    // away edge (Z=1)
    0,0,.2/12,
    bookWidth,0,.2/12,
    bookWidth,8/12,.2/12,
    0,8/12,.2/12,


    // bottom
    0,0,0, 
    bookWidth,0,0,
    bookWidth,0,bookLength,
    0,0,bookLength,
    // top
    0,bookHeight,0,
    bookWidth,bookHeight,0,
    bookWidth,bookHeight,bookLength,
    0,bookHeight,bookLength,
    // back spine (X=0)
    0,0,0,
    0,0,bookLength,
    0,bookHeight,bookLength,
    0,bookHeight,0,
    // front edge (Z=0)
    0,0,overhang,
    bookWidth-overhang,0,overhang,
    bookWidth-overhang,bookHeight,overhang,
    0,bookHeight,overhang,
    // side edge X=1
    bookWidth-overhang,0,overhang,
    bookWidth-overhang,0,bookLength-overhang,
    bookWidth-overhang,bookHeight,bookLength-overhang,
    bookWidth-overhang,bookHeight,overhang,
    // away edge (Z=1)
    0,0,bookLength-overhang,
    bookWidth-overhang,0,bookLength-overhang,
    bookWidth-overhang,bookHeight,bookLength-overhang,
    0,bookHeight,bookLength-overhang,

]);
const normals = new Float32Array( [
    // bottom
    0,-1,0,
    0,-1,0,
    0,-1,0,
    0,-1,0,
    // top
    0,1,0,
    0,1,0,
    0,1,0,
    0,1,0,
    // back spine
    -1,0,0,
    -1,0,0,
    -1,0,0,
    -1,0,0,
    // front edge Z=0
    0,0,-1,
    0,0,-1,
    0,0,-1,
    0,0,-1,
    // right edge x=1;
    1,0,0,
    1,0,0,
    1,0,0,
    1,0,0,
    // away edge z=1
    0,0,1,
    0,0,1,
    0,0,1,
    0,0,1,

        // bottom
        0,-1,0,
        0,-1,0,
        0,-1,0,
        0,-1,0,
        // top
        0,1,0,
        0,1,0,
        0,1,0,
        0,1,0,
        // back spine
        -1,0,0,
        -1,0,0,
        -1,0,0,
        -1,0,0,
        // front edge Z=0
        0,0,-1,
        0,0,-1,
        0,0,-1,
        0,0,-1,
        // right edge x=1;
        1,0,0,
        1,0,0,
        1,0,0,
        1,0,0,
        // away edge z=1
        0,0,1,
        0,0,1,
        0,0,1,
        0,0,1
]);
const uvs = new Float32Array( [
    0,0,0,0,0,0,0,0,
    .5,.9,0,.9,0,8/9, .5,8/9,
    .5,.9,0,.9,0,8/9, .5,8/9,
    .5,1,0,1,0,2/3, .5,2/3,
    .5,.9,0,.9,0,8/9, .5,8/9,
    .5,1/3,0,1/3,0,0, .5,0,
    .5,2/3,0,2/3,0,1/3, .5,1/3,
    0,1/3, .51,1/3,.51,2/3,0,2/3,
    0,1/3, .51,1/3,.51,.4,0,.4,
    0,1/3, .51,1/3,.51,.4,0,.4,
    0,1/3, .51,1/3,.51,.4,0,.4,
    0,1/3, .51,1/3,.51,.4,0,.4,
    
]);


let geometry = new T.BufferGeometry();
geometry.setAttribute("position",new T.BufferAttribute(positions,3));
geometry.setAttribute("normal",new T.BufferAttribute(normals,3));
geometry.setAttribute("uv",new T.BufferAttribute(uvs,2));
geometry.setIndex([

    0, 1, 2,    // bottom
    0, 2, 3,
    6, 5, 4,    // top
    7, 6, 4,
    8, 10, 9,   // spine
    8, 11, 10,
    12, 13, 14, // front
    12, 14, 15,

    16, 17, 18, // side
    16, 18, 19,
    20, 22, 21,
    20, 23, 22,

    24, 25, 26,   
    24, 26, 27,
    28, 29, 30,    
    28, 30, 31,    
    32, 33, 34,   
    32, 34, 35,    
    36, 37, 38,    
    36, 38, 39,   

    40, 41, 42,
    40, 42, 43,
    44, 45, 46,
    44, 46, 47

]);


let mat = new T.MeshStandardMaterial({ color: "white", map: fcg, side: T.DoubleSide });

let mesh = new T.Mesh(geometry, mat);
mesh.position.set(-.3958,0,0);
let group = new T.Group();
group.add(mesh);

// }

const cubeGeometry = new T.BoxGeometry(2, .1, 1);
const material = new T.MeshStandardMaterial({ color: 0x624000 });
const cube = new T.Mesh(cubeGeometry, material);
cube.position.set(0,-.1, 0);
// let book = new Book();
scene.add(group);


const pointLight = new T.PointLight(0xffffff, 1,.8,.3); // color, intensity
// const ambientLight = new T.AmbientLight(0x0000ff, .3);
const spotLight = new T.SpotLight(0x0000ff,1,100, Math.PI / 8, 0.5, 2); // color, intensity
pointLight.position.set(0,.3,-.3);
spotLight.position.set(1,1.5,.5);
scene.add(pointLight);
scene.add(spotLight);
// scene.add(new T.SpotLightHelper(spotLight));
// scene.add(new T.PointLightHelper(pointLight));
scene.add(cube);

camera.position.set(0,.5,3);


function animate() {
    // cube.rotation.x += 0.01;
    group.rotation.y += 0.01;
    // requestAnimationFrame( animate );

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

    renderer.render(scene, camera);
}