"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = require("three");
var Home = (function () {
    function Home() {
        this.smokeParticles = [];
        this.clock = new THREE.Clock();
        this.cubeSineDriver = 0;
        var canvReference = document.getElementById('smoke');
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
        var material = new THREE.MeshLambertMaterial({ color: 0xfffff, wireframe: false });
        this.mesh = new THREE.Mesh(this.geometry, material);
        this.light = new THREE.DirectionalLight(0x4e9381, 1);
        this.light.position.set(-1, 0, 1);
        this.scene.add(this.light);
        var smokeTexture = THREE.ImageUtils.loadTexture('/img/smoke.png');
        var smokeMaterial = new THREE.MeshLambertMaterial({ color: 0x4e9381, map: smokeTexture, transparent: true });
        var smokeGeo = new THREE.PlaneGeometry(300, 300);
        for (var p = 0; p < 125; p++) {
            var particle = new THREE.Mesh(smokeGeo, smokeMaterial);
            particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
            particle.rotation.z = Math.random() * 360;
            this.scene.add(particle);
            this.smokeParticles.push(particle);
        }
    }
    ;
    Home.prototype.animate = function () {
        this.delta = this.clock.getDelta();
        requestAnimationFrame(this.animate);
        this.evolveSmoke();
        this.render();
    };
    Home.prototype.evolveSmoke = function () {
        var sp = this.smokeParticles.length;
        while (sp--) {
            this.smokeParticles[sp].rotation.z += (this.delta * 0.2);
        }
    };
    Home.prototype.render = function () {
        this.mesh.rotation.x += 0.005;
        this.mesh.rotation.y += 0.01;
        this.cubeSineDriver += .01;
        this.mesh.position.z = 100 + (Math.sin(this.cubeSineDriver) * 500);
        this.renderer.render(this.scene, this.camera);
    };
    return Home;
}());
new Home();
//# sourceMappingURL=home.js.map