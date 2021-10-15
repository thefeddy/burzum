import * as THREE from 'three';

class Home {

    private renderer: any;
    private scene: any;
    private camera: any;
    private geometry: any;
    private light: any;
    private smokeParticles: Array<any> = [];
    private mesh;

    private delta: any;
    private clock = new THREE.Clock();
    private cubeSineDriver: number = 0;
    constructor() {

        const canvReference = document.getElementById('smoke');
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas: canvReference,
            alpha: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 1000;
        this.scene.add(this.camera);

        this.geometry = new THREE.BoxGeometry(200, 200, 200);
        const material = new THREE.MeshLambertMaterial({ color: 0xfffff, wireframe: false });
        this.mesh = new THREE.Mesh(this.geometry, material);
        //scene.add( mesh );



        this.light = new THREE.DirectionalLight(0x4e9381, 1);
        this.light.position.set(-1, 0, 1);
        this.scene.add(this.light);

        const smokeTexture = THREE.ImageUtils.loadTexture('/img/smoke.png');
        const smokeMaterial = new THREE.MeshLambertMaterial({ color: 0x4e9381, map: smokeTexture, transparent: true });
        const smokeGeo = new THREE.PlaneGeometry(300, 300);



        for (let p = 0; p < 125; p++) {
            var particle = new THREE.Mesh(smokeGeo, smokeMaterial);
            particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
            particle.rotation.z = Math.random() * 360;
            this.scene.add(particle);
            this.smokeParticles.push(particle);
        }
    };

    private animate() {

        this.delta = this.clock.getDelta();
        requestAnimationFrame(this.animate);
        this.evolveSmoke();
        this.render();

    }

    private evolveSmoke() {
        var sp = this.smokeParticles.length;
        while (sp--) {
            this.smokeParticles[sp].rotation.z += (this.delta * 0.2);
        }
    }

    private render() {

        this.mesh.rotation.x += 0.005;
        this.mesh.rotation.y += 0.01;
        this.cubeSineDriver += .01;
        this.mesh.position.z = 100 + (Math.sin(this.cubeSineDriver) * 500);

        this.renderer.render(this.scene, this.camera);
    }

}

new Home();