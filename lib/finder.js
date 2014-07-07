var path = require('path');
var fs   = require('fs');
var glob = require('glob');

module.exports = function finder(options, callback) {

  if(typeof options === 'string') {
    options = { pattern: options };
  }

  if(typeof options !== 'object') {
    throw new Error('Invalid Options');
  }

  options.base = options.base || process.cwd();
  options.mode = options.mode || (options.pattern.indexOf('*') !== -1 ? 'glob' : 'path');

  var files = [];

  switch(options.mode) {

    case 'glob':

      files = glob.sync(options.pattern, {
        cwd: options.base,
        mark: true
      }).map(function(relative) {
        return path.resolve(options.base, relative);
      });
      break;

    case 'path':

      var resolved = path.resolve(options.base, options.pattern);
      if(fs.existsSync(resolved)) files = [resolved];
      break;
  }

  if(typeof callback === 'function') {
    files.forEach(callback);
  }

  return files;
};
