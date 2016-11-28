const createApp = require('canvas-testbed')
const THREE = require('three')
const OrbitControls = require('three-orbit-controls')(THREE)

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const VIEW_ANGLE = 45
const ASPECT = WIDTH / HEIGHT
const NEAR = 0.1
const FAR = 100

createApp(render, start, { context: 'webgl', onResize: resize })

let renderer
  , scene
  , camera
  , controls

function start (gl) {
  renderer = new THREE.WebGLRenderer({
    canvas: gl.canvas
  })
  renderer.setClearColor(0x000000, 1.0)

  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR)
  camera.position.set(0, 1, -3)
  camera.lookAt(new THREE.Vector3())

  controls = new OrbitControls(camera)

  let geo = new THREE.BoxGeometry(1, 1, 1)
    , mat = new THREE.MeshBasicMaterial({ wireframe: true, color: 0xffffff })
    , box = new THREE.Mesh(geo, mat)

  scene.add(box)
}

function render () {
  renderer.render(scene, camera)
}

function resize (width, height) {
  if (!renderer) return

  renderer.setViewport(0, 0, width, height)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
}
