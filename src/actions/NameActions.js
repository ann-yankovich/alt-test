var alt = require('../alt'),
    names = require('../sources/names');

function NameActions() {

    this.setName = function(){
        var index = Math.floor(Math.random() * (names.length - 0));
        return names[index];
    }

}


module.exports = alt.createActions(NameActions);