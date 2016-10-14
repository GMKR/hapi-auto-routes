'use strict'

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
