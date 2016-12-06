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
      , material = new THREE.PointCloudMaterial({ size: 4, sizeAttenuation: false, color: 0xFF0000 })

    for (let i = 0.4; i < 3; i += 0.2) {
      handle.vertices.push(new THREE.Vector3(i, Math.sin(i) + 0.6, i - 0.5))
      handle.vertices.push(new THREE.Vector3(i, Math.sin(i) - 0.6, i))
      handle.vertices.push(new THREE.Vector3(i + 0.6, Math.sin(i) - 0.6, i - 0.6))
      handle.vertices.push(new THREE.Vector3(i + 0.6, Math.sin(i) - 1.2, i + 0.1))
    }

    // let holes = []
    //   , triangles = THREE.ShapeUtils.triangulateShape(handle.vertices, holes)

    // for (var i = 0; i < triangles.length; i++) {
    //   handle.faces.push(new THREE.Face3(triangles[i][0], triangles[i][1], triangles[i][2]))
    // }

    let mesh = new THREE.PointCloud(handle, material)

    return mesh

  }

}

module.exports = CoffeeMug
