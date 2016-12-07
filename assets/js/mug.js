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
    wallsGeo.merge(this.handleGeometry())

    let mesh = new THREE.Mesh(wallsGeo, this.mugMat)

    mesh.castShadow = true

    return mesh
  }

  handleGeometry () {
    let geometry = new THREE.Geometry()

    for (let i = 0.4; i < 3; i += 0.2) {
      geometry.vertices.push(new THREE.Vector3(i, Math.sin(i) + 0.6, i - 0.5))
      geometry.vertices.push(new THREE.Vector3(i, Math.sin(i) - 0.6, i))
      geometry.vertices.push(new THREE.Vector3(i + 0.6, Math.sin(i) - 0.6, i - 0.6))
      geometry.vertices.push(new THREE.Vector3(i + 0.6, Math.sin(i) - 1.2, i + 0.1))
    }

    let holes = []
      , triangles = THREE.ShapeUtils.triangulateShape(geometry.vertices, holes)

    for (var i = 0; i < triangles.length; i++) {
      geometry.faces.push(new THREE.Face3(triangles[i][0], triangles[i][1], triangles[i][2]))
    }

    return geometry

  }

}

module.exports = CoffeeMug
