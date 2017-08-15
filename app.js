// var requirejs = require('requirejs');
//
// requirejs.config({
//     baseUrl: './src/'
// });

var setName = require('./src/modules/name/set');
var logName = require('./src/modules/name/log');
var nameStore = require('./src/stores/NameStore');

(function(){

    var DELAY = 5000;

    setName(DELAY);
    nameStore.listen(logName);
})();
