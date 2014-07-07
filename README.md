find-all (node.js)
==================

Finds and resolves the files matching a given glob pattern or simple path.

# Install
Install with npm:
```bash
$ npm install --save find-all
```

# Usage

```javascript
var find = require('find-all');

// Simple mode:
var files = find('config/**/*.{js,json}');

// Advanced mode:
var files = find({
  pattern: 'config/**/*.{js,json}',
  base: __dirname
});

// Single file:
var files = find('config.js');

// forEach mode:
find('config/**/*.{js,json}', function(path) {
  console.log('Path: %s', path);
});
```

# API

### `finder(options, callback)`
#### Arguments
 - `options` (`Object`):
   - `options.pattern` (`String`) - The glob pattern or path to find
   - `options.base` (`String`) - The base directory, defaults to `process.cwd()`
   - `options.mode` (`String`) - Force the mode to `'glob'` or `'path'`
 - `options` (`String`): Sugar for `{ pattern: options, base: process.cwd() }`
 - `callback` (`function`): Optional callback function for looping through the results

**Returns an `Array` of resolved paths**

# Notes
At the moment Glob mode is enabled when the `pattern` contains the `*` character, otherwise the pattern is assumed to be a relative path. This isn't very accurate but will do for now!


# License

The MIT License (MIT)

Copyright (c) 2014 James Wyse <james@jameswyse.net>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
