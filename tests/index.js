const assert = require('./assert');
const path   = require('path');
const files  = require('../index').scandir(path.join(__dirname, 'unit'));

function jsonTest(filename)
{
    const _name = path.basename(filename, '.json');
    const _helper = require(path.join(__dirname, '..', 'src', _name));
    assert.suite(
        _name,
        'equal',
        require(filename).map(
            test =>
            {
                const _expected = test.pop();
                const _value    = test.shift();
                return [_helper.call(_value, _value, ...test), _expected];
            }
        )
    );
}

//------------------------------------------------------------------------------
// Ejecutamos las pruebas en los archivos JSON.
//------------------------------------------------------------------------------
files.filter(filename => filename.substr(-5) === '.json').forEach(jsonTest);
//------------------------------------------------------------------------------
// Ejecutamos las pruebas en los archivos JS.
//------------------------------------------------------------------------------
files.filter(filename => filename.substr(-3) === '.js').forEach(filename => require(filename));
//------------------------------------------------------------------------------
console.log('Total aserciones: %d', require('./assert').numAssertions);
