var glob = require('glob');

exports.bind = function (server) {
  this.server = server;
  return this;
};

exports.register = function (options) {
  var self = this;
  options = options || {};
  if (!options.pattern) {
    throw new Error('Specify a matching pattern');
  }

  glob.sync(options.pattern).forEach(function (file) {
    var route = require(file);
    self.server.route(route);
  });

  return this;
}