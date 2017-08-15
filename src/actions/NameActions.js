var alt = require('../alt'),
    names = require('../sources/names');

function NameActions() {

    this.setName = function(){
        var index = Math.floor(Math.random() * (names.length - 0));

        console.log('setName', names[index])
        return names[index];
    }

    this.logName = function(name){
        // this.dispatch(name);
    }
}

// NameActions.prototype.setName = function(){
//     var index = Math.floor(Math.random() * (names.length - 0));
//
//     console.log('setName', names[index]);
//     return names[index];
// }
//
// NameActions.prototype.logName = function(name){
//     // this.dispatch(name);
// }

module.exports = alt.createActions(NameActions);