const THREE = require('three')
// const Objects = require('./objects')
const OrbitControls = require('three-orbit-controls')(THREE)
const baseScene = require('json-loader!../objects/scene.json')

class World {

  constructor () {
    this.WIDTH = window.offSetWidth
    this.HEIGHT = window.offSetHeight
    this.VIEW_ANGLE = 45
    this.ASPECT = this.WIDTH / this.HEIGHT
    this.NEAR = 0.1
    this.FAR = 100

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

    let loader = new THREE.ObjectLoader()
    this.scene = loader.parse(baseScene)

    this.camera = new THREE.PerspectiveCamera(this.VIEW_ANGLE, this.ASPECT, this.NEAR, this.FAR)
    // this.camera = new THREE.OrthographicCamera(1 / -2, 1 / 2, 1 / 2, 1 / -2, 1, 1000)
    this.camera.position.set(-200, 200, -200)
    this.camera.lookAt(0, 0, 0)

    this.light = new THREE.PointLight(0xFFFFFF)
    this.light.position.set(0, 0, 0)
    this.camera.add(this.light)

    this.controls = new OrbitControls(this.camera)

    // this.objects = new Objects()
    // this.scene.add(this.objects.floor())
    // this.scene.add(this.objects.longWall(28, 52, -17.5, 14))
    // // this.scene.add(this.objects.longWall(28, 52, 17.5, 14))
    // this.scene.add(this.objects.shortWall(28, 35, -26, 14))
    // // this.scene.add(this.objects.shortWall(28, 35, 26, 14))
    // this.scene.add(this.objects.door())
    // this.scene.add(this.objects.bed())

    // this.scene.add(this.camera)
  }

}

module.exports = World
