var sanitiseRegex = /[#-.\[\]-^?]/g;

function sanitise(string){
    return string.replace(sanitiseRegex, '\\$&');
}

function createRouteRegex(route){
    return new RegExp('^' + sanitise(route).replace(/`.*?`/g, '(.*?)') + '$');
}

module.exports = function aquaduck(routes, path){

    for(var key in routes){
        var regex = createRouteRegex(key),
            names = regex.exec(key),
            match = regex.exec(path);

        if(match){
            var tokens = {};

            for(var i = 1; i < match.length; i++){
                tokens[names[i].slice(1,-1)] = match[i];
            }

            return {
                route: key,
                tokens: tokens,
                value: routes[key]
            };
        }
    }
};