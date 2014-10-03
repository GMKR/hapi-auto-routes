#hapi-auto-routes
hapi-auto-routes allows you to automatically register all routes from matching files.

##Installation
`npm install hapi-auto-routes`
##Usage
####server.js
```javascript
var Hapi = require('hapi');
var server = new Hapi.Server(8080);
var routes = require('hapi-auto-routes');

//Register all routes from files matching pattern *.route.js
routes.bind(server).register({
  pattern: __dirname + '*.route.js',
});

server.start();
```
####index.route.js
```javascript
var indexRoute = {
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply({success: true});
  },
};

var helloRoute = {
  method: 'GET',
  path: '/hello',
  handler: function (request, reply) {
    reply({succes: true, message: 'hello world!'});
  }
};

module.exports = [
  indexRoute,
  helloRoute
];
```