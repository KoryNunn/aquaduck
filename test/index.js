var test = require('grape'),
    aquaduck = require('../');

test('single value', function(t){
    t.plan(1);

    var routeMatch = aquaduck(
        {
            'foo.com/`thing`': function(tokens){
                t.equal(tokens.thing, 'majigger');
            }
        },
        'foo.com/majigger'
    );

    routeMatch.value(routeMatch.tokens);
});

test('multi value', function(t){
    t.plan(2);

    var routeMatch = aquaduck(
        {
            'foo.com/`thing`/`stuff`': function(tokens){
                t.equal(tokens.thing, 'majigger');
                t.equal(tokens.stuff, 'whatsits');
            }
        },
        'foo.com/majigger/whatsits'
    );

    routeMatch.value(routeMatch.tokens);
});