import * as THREE from 'three'

// Créer une div pour y ajouter notre 3D
const canvas = document.querySelector('.js-canvas')
const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight

// Créer une scene, notre espace de dessin 3D
const scene = new THREE.Scene()
scene.background = new THREE.Color('skyblue')

// Créer une caméra, notre point de vue
const aspectRatio = canvasWidth / canvasHeight
const camera = new THREE.PerspectiveCamera( 45, aspectRatio, 0.1, 1000 )
camera.position.z = 50
camera.position.y = 0
camera.position.x = 0

// Créer un render, pour afficher la scene du point de vue de notre caméra
const renderer = new THREE.WebGLRenderer()
renderer.setSize( canvasWidth, canvasHeight )
canvas.appendChild( renderer.domElement )

// Ajouter une forme 
const geometry = new THREE.BoxGeometry( 10, 10, 10 )
const cubeColor = new THREE.Color('red') 
const material = new THREE.MeshBasicMaterial( {color: cubeColor} )
const cube = new THREE.Mesh( geometry, material )
cube.rotation.x = Math.PI * 0.25
cube.rotation.y = Math.PI * 0.25
scene.add( cube )

// Faire un rendu c'est à dire : de montrer le point de la caméra dans la scene
animate()

// Faire un rendu "continu"
function animate() {
    requestAnimationFrame( animate )

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    renderer.render( scene, camera )
}

