// requirejs.config({
//     baseUrl: './src/',
//     name: 'main',
//     // nodeRequire: require
// });

var setName = require('./src/modules/name/set');
var logName = require('./src/modules/name/log');

(function(){
    setName();
    logName();
})();
