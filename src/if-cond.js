/**
 * Permite realizar una evaluación condicional en las plantillas.
 *
 * @param {Array} args Argumentos recibidos.
 *
 * @return {String}
 */
module.exports = function ifCond(...args)
{
    const _opts = args.pop();
    let _result = '';
    const [_op, _value1, _value2 ] = args;

    switch (_op)
    {
        case '!':
            _result = !_value1;
            break;
        case '!=':
            _result = _value1 != _value2;
            break;
        case '!==':
            _result = _value1 !== _value2;
            break;
        case '==':
            _result = _value1 == _value2;
            break;
        case '===':
            _result = _value1 === _value2;
            break;
        case '>=':
            _result = _value1 >= _value2;
            break;
        case '<=':
            _result = _value1 <= _value2;
            break;
        case '&&':
            _result = _value1 && _value2;
            break;
        case '||':
            _result = _value1 || _value2;
            break;
    }

    return _result
        ? _opts.fn(this)
        : _opts.inverse(this);
};
