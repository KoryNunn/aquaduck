module.exports = function aquaduck(routes, path){

    for(var key in routes){
        var regex = key.replace(/`.*?`/g, '(.*?)'),
            names = (/`(.*?)`/).exec(key),
            match = new RegExp(regex).exec(url);

        if(match){
            var tokens = {};

            for(var i = 0; i < match.length; i++){
                tokens[names[i]] = match[i];
            };


            routes[key](tokens);
            return;
        }
    }
};