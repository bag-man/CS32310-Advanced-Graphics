const THREE = require('three')
const Objects = require('./objects')
const OrbitControls = require('three-orbit-controls')(THREE)

class World {

  constructor () {
    this.WIDTH = window.offSetWidth
    this.HEIGHT = window.offSetHeight
    this.VIEW_ANGLE = 45
    this.ASPECT = this.WIDTH / this.HEIGHT
    this.NEAR = 0.1
    this.FAR = 1000

    this.renderer
    this.scene
    this.camera
    this.controls
  }

  render () {
    this.renderer.render(this.scene, this.camera)
  }

  resize (width, height) {
    if (!this.renderer) return

    this.renderer.setViewport(0, 0, width, height)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
  }

  start (gl) {
    this.renderer = new THREE.WebGLRenderer({
      canvas: gl.canvas
    })
    this.renderer.setClearColor(0x444444, 1.0)

    this.scene = new THREE.Scene()

    // this.camera = new THREE.PerspectiveCamera(this.VIEW_ANGLE, this.ASPECT, this.NEAR, this.FAR)
    this.camera = new THREE.OrthographicCamera(1 / -2, 1 / 2, 1 / 2, 1 / -2, 1, 1000)
    this.camera.position.set(20, 20, 20)
    this.camera.lookAt(0, 0, 0)

    this.controls = new OrbitControls(this.camera)

    this.objects = new Objects()
    this.scene.add(this.objects.floor())
  }

}

module.exports = World
