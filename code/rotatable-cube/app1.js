import * as THREE from "../../libs/three/three.module.js";
import { OrbitControls } from "../../libs/three/jsm/OrbitControls.js";

class App{
	constructor(){
		//Create div inside html body
		const container = document.createElement( 'div' );
		document.body.appendChild( container );
		
		//Camera setup
		this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
		this.camera.position.set(0, 0, 4);

		//Scene setup
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0xffeee3);

		//Lighting setup
		const ambient = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 0.3);
		this.scene.add(ambient);

		const light = new THREE.DirectionalLight();
		light.position.set(0.2, 1, 1);
		this.scene.add(light);

		//Rendering
		this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		container.appendChild(this.renderer.domElement);

		//Make 3D object
		const geometry = new THREE.BoxBufferGeometry();
		const material = new THREE.MeshStandardMaterial({color: 0x107aeb});
		this.mesh = new THREE.Mesh(geometry, material);

		this.scene.add(this.mesh);

		//Make 3D object controllable
		const controls = new OrbitControls(this.camera, this.renderer.domElement);

		this.renderer.setAnimationLoop(this.render.bind(this));
        
        window.addEventListener('resize', this.resize.bind(this) );
	}	
    
    resize(){
        this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
	render() {  
        this.mesh.rotateY(0.02);
		this.renderer.render(this.scene, this.camera);
    }
}

export { App };