#hapi-auto-routes
hapi-auto-routes allows you to automatically register all routes from matching files.

##Installation
`npm install hapi-auto-routes --save`
##Usage
####server.js
```javascript
const Hapi = require('hapi')
const server = new Hapi.Server()
const routes = require('../index')
server.connection({port: 3000});

//Register all routes from files matching pattern *.route.js
routes.bind(server).register({
  pattern: __dirname + '*.route.js',
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
```
####index.route.js
```javascript
const helloOne = {
  method: 'GET',
  path: '/hello-one',
  config: {
    handler: (request, reply) => {
      return reply('Hello world one!')
    }
  }
};

const helloTwo = {
  method: 'GET',
  path: '/hello-two',
  config: {
    handler: (request, reply) => {
      return reply('Hello world two!')
    }
  }
};

module.exports = [helloOne, helloTwo]
```

inspired by [Mongoload](https://github.com/klei/mongoload)
