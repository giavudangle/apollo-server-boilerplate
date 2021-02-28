const isAuthenticated = require('./auth')
module.exports = {
  typeDefs: [
    isAuthenticated.typeDef
  ],
  schemaDirectives: {
    isAuthenticated: isAuthenticated.directive
  }
}