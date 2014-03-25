# aquaduck

## What

Aquaduck aims to duplicate/replace the routing functionality in [beeline](https://github.com/xavi-/beeline) but in a standalone module.

## Why

Sometimes I want beeline's routing, but not all it's serving stuff.

## Usage

    var aquaduck = require('aquaduck');

At the moment aquaduck only supports one kind of route matching:

    var routes = {
            'foo.com/`thing`/`stuff`': function(tokens){
                tokens.thing === 'majigger';
                tokens.stuff === 'whatsits';
            }
        };

    aquaduck(routes, 'foo.com/majigger/whatsits');

Other beeline-like routing will be added in the future.


## Why is aquaduct spelt incorrectly.

aquaduct is taken on npm, aquaduck is funny.