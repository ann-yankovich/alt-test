// requirejs.config({
//     baseUrl: './src/',
//     name: 'main',
//     // nodeRequire: require
// });

var setName = require('./src/modules/name/set');
var logName = require('./src/modules/name/log');

(function(){
    var DELAY = 5000;

    return setInterval(function(){
        setName();
        logName();
    }, DELAY);
})();
