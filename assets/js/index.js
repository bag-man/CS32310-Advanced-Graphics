const THREE = require('./lib/three.min.js')

const WIDTH = window.innerWidth - 10
const HEIGHT = window.innerHeight - 10
const VIEW_ANGLE = 45
const ASPECT = WIDTH / HEIGHT
const NEAR = 0.1
const FAR = 100

const container = document.querySelector('#application')
const renderer = new THREE.WebGLRenderer()
renderer.setSize(WIDTH, HEIGHT)
container.appendChild(renderer.domElement)

const camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR)
camera.position.set(50, 50, 50)
camera.lookAt(new THREE.Vector3(0, 0, 0))

const scene = new THREE.Scene()
scene.add(camera)

let origin = new THREE.Geometry()
origin.vertices.push(new THREE.Vector3(0, 0, 0))

let originMaterial = new THREE.PointCloudMaterial({ size: 1, sizeAttenuation: false, color: 0xFFFFFF })
let originDot = new THREE.PointCloud(origin, originMaterial)
scene.add(originDot)

let xAxis = new THREE.Geometry()
xAxis.vertices.push(new THREE.Vector3(-5, 0, 0))
xAxis.vertices.push(new THREE.Vector3(-10, 0, 0))
xAxis.vertices.push(new THREE.Vector3(-15, 0, 0))
xAxis.vertices.push(new THREE.Vector3(5, 0, 0))
xAxis.vertices.push(new THREE.Vector3(10, 0, 0))
xAxis.vertices.push(new THREE.Vector3(15, 0, 0))

let xMaterial = new THREE.PointCloudMaterial({ size: 1, sizeAttenuation: false, color: 0xFF0000 })
let x = new THREE.PointCloud(xAxis, xMaterial)
scene.add(x)

let yAxis = new THREE.Geometry()
yAxis.vertices.push(new THREE.Vector3(0, -5, 0))
yAxis.vertices.push(new THREE.Vector3(0, -10, 0))
yAxis.vertices.push(new THREE.Vector3(0, -15, 0))
yAxis.vertices.push(new THREE.Vector3(0, 5, 0))
yAxis.vertices.push(new THREE.Vector3(0, 10, 0))
yAxis.vertices.push(new THREE.Vector3(0, 15, 0))

let yMaterial = new THREE.PointCloudMaterial({ size: 1, sizeAttenuation: false, color: 0x00FF00 })
let y = new THREE.PointCloud(yAxis, yMaterial)
scene.add(y)

let zAxis = new THREE.Geometry()
zAxis.vertices.push(new THREE.Vector3(0, 0, -5))
zAxis.vertices.push(new THREE.Vector3(0, 0, -10))
zAxis.vertices.push(new THREE.Vector3(0, 0, -15))
zAxis.vertices.push(new THREE.Vector3(0, 0, 5))
zAxis.vertices.push(new THREE.Vector3(0, 0, 10))
zAxis.vertices.push(new THREE.Vector3(0, 0, 15))

let zMaterial = new THREE.PointCloudMaterial({ size: 1, sizeAttenuation: false, color: 0x0000FF })
let z = new THREE.PointCloud(zAxis, zMaterial)
scene.add(z)

renderer.render(scene, camera)
