const assert = require('../assert');
const arrayFilter = require('../../src/array-filter');
const items = Array.from({ length : 10 }).map((i, index) => ({ index }));

assert.assert('deepEqual', arrayFilter(null, 'index', 5), null);
assert.assert('deepEqual', arrayFilter(false, '', 5), false);
assert.assert('deepEqual', arrayFilter(items, 'index', 5), items.filter(i => i.index === 5));
assert.assert('deepEqual', arrayFilter(items, 'index', 5, {}), items.filter(i => i.index === 5));
assert.assert('deepEqual', arrayFilter(items, 'index', 5, '>='), items.filter(i => i.index >= 5));
