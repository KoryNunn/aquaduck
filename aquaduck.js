module.exports = function aquaduck(routes, path){

    for(var key in routes){
        var regex = new RegExp('^' + key.replace(/`.*?`/g, '(.*?)') + '$'),
            names = regex.exec(key),
            match = regex.exec(path);

        console.log(names, match);

        if(match){
            var tokens = {};

            for(var i = 1; i < match.length; i++){
                tokens[names[i].slice(1,-1)] = match[i];
            };


            routes[key](tokens);
            return;
        }
    }
};