'use strict';

const Hapi = require('hapi')
const server = new Hapi.Server()
const routes = require('../index')

server.connection({
  port: 3000
});

routes.bind(server).register({
  pattern: __dirname + '/routes/*.js',
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
