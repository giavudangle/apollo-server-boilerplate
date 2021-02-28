import makeExecutableSchemaFromModules  from '../utils/modules'
const auth = require('./auth')

export default makeExecutableSchemaFromModules({
  modules: [
    auth
  ]
})