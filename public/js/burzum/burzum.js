// rewrite 
let burzum = {

    init: () => {
        var scene = document.getElementById('para');
        var parallaxInstance = new Parallax(scene);

        const plusSize = 12;
        for (let i = 0; i < 75; i += 1) {

            const posx = (Math.random() * (window.innerWidth - plusSize)).toFixed();
            const posy = (Math.random() * (window.innerHeight - plusSize)).toFixed();
            const zIndex = Math.floor(Math.random() * 40)

            const opacity = Math.random() * 1;
            document.querySelector('#pluses').innerHTML += `<div class="plus" style="left:${posx}px; top:${posy}px; z-index:${zIndex}; opacity:${opacity};"></div>`;
        }

        for (let i = 0; i < 75; i += 1) {

            const posx = (Math.random() * (window.innerWidth - 14)).toFixed();
            const posy = (Math.random() * (window.innerHeight - 14)).toFixed();
            const zIndex = Math.floor(Math.random() * 40)

            const opacity = Math.random() * 1;

            document.querySelector('#dots').innerHTML += `<div class="dot" style="left:${posx}px; top:${posy}px; z-index:${zIndex}; opacity:${opacity};"></div>`;
        }

        setTimeout(() => {
            document.querySelector('#social').classList.add('is-showing');
        }, 500);

        setTimeout(() => {
            document.querySelectorAll('.pagination li')[0].classList.add('selected');
            document.querySelectorAll(`#featured .staff`)[0].classList.add('selected');
        }, 1000);

        document.querySelectorAll('.pagination li').forEach((page, index) => page.addEventListener('click', (event) => {

            document.querySelectorAll('.pagination li').forEach(page => page.classList.remove('selected'));
            event.target.classList.add('selected');

            document.querySelectorAll(`#featured .staff`).forEach(staff => staff.classList.remove('selected'));
            setTimeout(() => {
                document.querySelectorAll(`#featured .staff`)[index].classList.add('selected');
            }, 400);
        }));

    },
    header: {
        camera: null,
        scene: null,
        renderer: null,
        geometry: null,
        material: null,
        mesh: null,
        clock: null,
        delta: null,
        init: () => {
            const canvReference = document.getElementById('smoke');
            burzum.header.renderer = new THREE.WebGLRenderer({
                antialias: true,
                canvas: canvReference,
                alpha: true
            });
            burzum.header.renderer.setSize(window.innerWidth, window.innerHeight);

            burzum.header.scene = new THREE.Scene();
            burzum.header.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
            burzum.header.camera.position.z = 1000;
            burzum.header.scene.add(burzum.header.camera);

        },
        animate: () => {

        },
        evolveSmoke: () => {

        },
        render: () => {

        }
    }
}

burzum.init();

var camera, scene, renderer,
    geometry, material, mesh;

init();
animate();

function init() {

    clock = new THREE.Clock();
    var canvReference = document.getElementById('smoke');
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: canvReference,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;
    scene.add(camera);

    geometry = new THREE.CubeGeometry(200, 200, 200);
    material = new THREE.MeshLambertMaterial({ color: 0xfffff, wireframe: false });
    mesh = new THREE.Mesh(geometry, material);
    //scene.add( mesh );
    cubeSineDriver = 0;


    light = new THREE.DirectionalLight(0x4e9381, 1);
    light.position.set(-1, 0, 1);
    scene.add(light);

    smokeTexture = THREE.ImageUtils.loadTexture('/img/smoke.png');
    smokeMaterial = new THREE.MeshLambertMaterial({ color: 0x4e9381, map: smokeTexture, transparent: true });
    smokeGeo = new THREE.PlaneGeometry(300, 300);
    smokeParticles = [];


    for (p = 0; p < 125; p++) {
        var particle = new THREE.Mesh(smokeGeo, smokeMaterial);
        particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
        particle.rotation.z = Math.random() * 360;
        scene.add(particle);
        smokeParticles.push(particle);
    }

}

function animate() {

    delta = clock.getDelta();
    requestAnimationFrame(animate);
    evolveSmoke();
    render();

}

function evolveSmoke() {
    var sp = smokeParticles.length;
    while (sp--) {
        smokeParticles[sp].rotation.z += (delta * 0.2);
    }
}

function render() {

    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
    cubeSineDriver += .01;
    mesh.position.z = 100 + (Math.sin(cubeSineDriver) * 500);

    renderer.render(scene, camera);
}


