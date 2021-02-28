"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
// we don't have these yet, but don't worry we'll get there.
const context = require('./utils/context');
const schema = require('./modules');
const server = new ApolloServer({
    schema,
    context: async ({ req }) => ({
        user: await context.getUser(req)
    })
});
const app = express();
server.applyMiddleware({
    path: '/',
    app
});
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVuQyxNQUFNLEVBQUMsWUFBWSxFQUFFLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUE7QUFFeEQsNERBQTREO0FBQzVELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzFDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUNuQyxNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FBQztJQUM5QixNQUFNO0lBQ04sT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLElBQUksRUFBRSxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0tBQ2pDLENBQUM7Q0FDSCxDQUFDLENBQUE7QUFDRixNQUFNLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQTtBQUNyQixNQUFNLENBQUMsZUFBZSxDQUFDO0lBQ3JCLElBQUksRUFBRSxHQUFHO0lBQ1QsR0FBRztDQUNKLENBQUMsQ0FBQTtBQUVGLGtCQUFlLEdBQUcsQ0FBQyJ9