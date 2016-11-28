const THREE = require('three')

class Objects {

  floor () {
    let geo = new THREE.PlaneGeometry(10, 15)
      , mat = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, wireframe: false, color: 0xFF0000 })
      , floor = new THREE.Mesh(geo, mat)

    floor.rotateX(1.5708)

    return floor
  }

}

module.exports = Objects
