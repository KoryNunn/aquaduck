var test = require('grape'),
    aquaduck = require('../');

test('things', function(t){
    t.plan(1);

    aquaduck(
        {
            'foo.com/`thing`': function(tokens){
                t.equal(tokens.thing, 'majigger');
            }
        },
        'foo.com/majigger'
    );
});