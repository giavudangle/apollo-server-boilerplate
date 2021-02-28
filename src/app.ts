const express = require('express');

const {ApolloServer } = require('apollo-server-express')

// we don't have these yet, but don't worry we'll get there.
const context = require('./utils/context')
const schema = require('./modules')
const server = new ApolloServer({
  schema,
  context: async ({ req }) => ({
    user: await context.getUser(req)
  })
})
const app = express()
server.applyMiddleware({
  path: '/',
  app
})

export default app;