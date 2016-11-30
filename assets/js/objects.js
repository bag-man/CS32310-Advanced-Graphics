const THREE = require('three')
const doorModel = require('json-loader!../objects/door.json')
const bedModel = require('json-loader!../objects/bed.json')

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

  bed () {
    let loader = new THREE.ObjectLoader()
      , model = loader.parse(bedModel)
      , bed = new THREE.Mesh(model.geometry, model.material)

    bed.position.set(0, 0, 0)

    return bed
  }

  door () {
    let loader = new THREE.ObjectLoader()
      , model = loader.parse(doorModel)
      , door = new THREE.Mesh(model.geometry, model.material)

    door.position.set(10, 9.5, -26)

    return door
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
