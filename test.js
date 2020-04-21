const assert = require('assert');
const lib = require('./');

assert(lib.lookup);
assert('py', lib.lookup('py'));
assert(undefined === lib.lookup());
