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

test('things', function(t){
    t.plan(2);

    aquaduck(
        {
            'foo.com/`thing`/`stuff`': function(tokens){
                t.equal(tokens.thing, 'majigger');
                t.equal(tokens.stuff, 'whatsits');
            }
        },
        'foo.com/majigger/whatsits'
    );
});