// var requirejs = require('requirejs');
//
// requirejs.config({
//     baseUrl: './src/'
// });

var setName = require('./src/modules/name/set');
var logName = require('./src/modules/name/log');

(function(){
    var DELAY = 5000;

    logName();

    setName(DELAY);

})();

