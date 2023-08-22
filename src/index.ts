import * as THREE from 'three';
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

//Set up Scene, Renderer and Camera
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
document.body.appendChild( renderer.domElement );

//Create camera controls
const controls = new OrbitControls( camera, renderer.domElement );
camera.position.z = 5;
controls.update();

//Create 3D Object to be displayed
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//Resizing for when the size of the browser window changes.
window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}
//Animate Function
function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    camera.rotateZ(30);
    controls.update();
	renderer.render( scene, camera );
}
animate();