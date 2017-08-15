// requirejs.config({
//     baseUrl: './src/',
//     name: 'main',
//     // nodeRequire: require
// });

var NameStore = require('./src/stores/NameStore');
var setName = require('./src/modules/name/set');
var logName = require('./src/modules/name/log');

// var App = new NameStore();

function init(){

    const DELAY = 5000;

    return setInterval(function(){
        setName();
        logName();
    }, DELAY);



    // console.log(NameStore.getState());

    // logName(this.name);

}



init();