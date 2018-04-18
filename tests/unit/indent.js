const assert = require('../assert');
const indent = require('../../src/indent');
const opts   = {
    fn(c)
    {
        return c[0];
    }
};
const data   = ['lorem ipsum'];
assert.suite(
    'indent',
    'equal',
    [
        [
            indent.call(data, opts),
            '    lorem ipsum'
        ],
        [
            indent.call([''], opts),
            ''
        ],
        [
            indent.call(data, { ...opts, hash : { size : 8 } }),
            '        lorem ipsum'
        ],
        [
            indent.call(data, { ...opts, hash : { size : 8, char : '-' } }),
            '--------lorem ipsum'
        ]
    ]
);
