const assert   = require('../assert');
const chalk    = require('chalk');
const chalkHbs = require('../../src/chalk');
const text     = 'Texto de prueba';
const opts     = {
    fn()
    {
        return text;
    }
};
assert.suite(
    'indent',
    'equal',
    [
        [
            chalkHbs('cyan', opts),
            chalk.cyan(text)
        ],
        [
            chalkHbs('cyan', { ...opts, hash : { bold : true } }),
            chalk.cyan.bold(text)
        ],
        [
            chalkHbs('unknown-color', opts),
            text
        ],
        [
            chalkHbs('unknown-color', { ...opts, hash : { bold : true } }),
            text
        ]
    ]
);
