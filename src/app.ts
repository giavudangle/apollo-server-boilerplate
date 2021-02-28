const express = require('express')
// The reason why apollo-server-express is because later on for testing we use Supertest, which requires an app object
const { ApolloServer } = require('apollo-server-express')
// we don't have these yet, but don't worry we'll get there.
const {getUser} = require('./utils/context')
const schema = require('./services')
const server = new ApolloServer({
  schema,
  context: async ({ req }) => ({
    user: await getUser(req)
  })
})

const app = express()

server.applyMiddleware({
  path: '/',
  app
})

export default app;