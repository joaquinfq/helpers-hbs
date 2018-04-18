const assert      = require('assert');
let numAssertions = 0;
module.exports    = {
    get numAssertions()
    {
        return numAssertions;
    },
    assert(name, ...args)
    {
        try
        {
            assert[name](...args);
            ++numAssertions;
        }
        catch (e)
        {
            console.log('ERROR: %s', e.message);
        }
    },
    suite(description, method, tests)
    {
        let _index = 0;
        try
        {
            tests.forEach(
                (test, index) =>
                {
                    _index = index;
                    this.assert(method, ...test)
                }
            );
        }
        catch (e)
        {
            console.log('ERROR (%s[%s]) ==> %s\n%s', description, _index, e.message, e.stack);
        }
    }
};
