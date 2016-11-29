const THREE = require('three')
const boxModel = require('json-loader!../objects/model.json')

class Objects {

  constructor () {
    this.wallTexture = new THREE.TextureLoader().load('/textures/wall.jpg')
    this.wallTexture.wrapS = THREE.RepeatWrapping
    this.wallTexture.wrapT = THREE.RepeatWrapping
    this.wallTexture.repeat.set(10, 10)

    this.floorTexture = new THREE.TextureLoader().load('/textures/floor.jpg')
    this.floorTexture.wrapS = THREE.RepeatWrapping
    this.floorTexture.wrapT = THREE.RepeatWrapping
    this.floorTexture.repeat.set(10, 10)
  }

  box () {
    let loader = new THREE.ObjectLoader()
      , model = loader.parse(boxModel)
      , box = new THREE.Mesh(model.geometry, model.materials)

    box.position.set(0, 3, 0)

    return box
  }

  floor () {
    let geo = new THREE.PlaneGeometry(35, 52)
      , mat = new THREE.MeshLambertMaterial({ map: this.floorTexture, side: THREE.DoubleSide })
      , floor = new THREE.Mesh(geo, mat)
    floor.rotateX(1.5708)

    return floor
  }

  longWall (h, w, x, y) {
    let geo = new THREE.PlaneGeometry(h, w)
      , mat = new THREE.MeshLambertMaterial({ map: this.wallTexture, side: THREE.DoubleSide })
      , wall = new THREE.Mesh(geo, mat)

    wall.rotateZ(1.5708)
    wall.rotateX(1.5708)

    wall.position.set(x, y, 0)

    return wall
  }

  shortWall (h, w, x, y) {
    let geo = new THREE.PlaneGeometry(h, w)
      , mat = new THREE.MeshLambertMaterial({ map: this.wallTexture, side: THREE.DoubleSide })
      , wall = new THREE.Mesh(geo, mat)

    wall.rotateZ(1.5708)

    wall.position.set(0, y, x)

    return wall
  }

}

module.exports = Objects
