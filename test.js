const assert = require('assert');
const lib = require('./');

assert('function' === typeof lib.lookup);
assert('text/x-python' === lib.lookup('.py'));
assert(undefined === lib.lookup());
