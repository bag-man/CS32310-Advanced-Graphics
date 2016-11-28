const createApp = require('canvas-testbed')
const World = require('./world.js')

let world = new World()

createApp(
  world.render
  , world.start
  , { context: 'webgl'
    , onResize: world.resize
    }
)

