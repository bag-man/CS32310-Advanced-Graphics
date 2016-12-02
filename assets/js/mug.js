const THREE = require('three')

class CoffeeMug {

  constructor () {
    this.mugMat = new THREE.MeshLambertMaterial({ color: 0x004400, side: THREE.DoubleSide })

    let wallsGeo = new THREE.CylinderGeometry(0.5, 0.5, 1.4, 64, 1, 1)
      , baseGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 64)

    for (let i = 0; i < baseGeo.vertices.length; i++) {
      baseGeo.vertices[i].y -= 0.6
    }

    wallsGeo.merge(baseGeo)

    let mesh = new THREE.Mesh(wallsGeo, this.mugMat)

    mesh.castShadow = true

    // return mesh
    return this.handleMesh()
  }

  handleMesh () {
    let handle = new THREE.Geometry()
    let material = new THREE.PointCloudMaterial({ size: 4, sizeAttenuation: false, color: 0xFF0000 })

    for (let i = 0; i < 4; i += 0.2) {
      handle.vertices.push(new THREE.Vector3(i, Math.sin(i) + 0.1, i))
    }

    handle = new THREE.PointCloud(handle, material)
    console.log(222, handle)

    return handle

  }

}

module.exports = CoffeeMug
