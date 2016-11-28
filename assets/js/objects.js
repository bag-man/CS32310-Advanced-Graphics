const THREE = require('three')

class Objects {

  floor () {
    let geo = new THREE.PlaneGeometry(35, 52)
      , mat = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, wireframe: false, color: 0xFF0000 })
      , floor = new THREE.Mesh(geo, mat)
    floor.rotateX(1.5708)

    return floor
  }

  longWall (h, w, x, y) {
    let geo = new THREE.PlaneGeometry(h, w)
      , mat = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, wireframe: false, color: 0x00FF00 })
      , wall = new THREE.Mesh(geo, mat)

    wall.rotateZ(1.5708)
    wall.rotateX(1.5708)

    wall.position.set(x, y, 0)

    return wall
  }

}

module.exports = Objects
