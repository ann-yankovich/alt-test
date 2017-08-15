var alt = require('../alt');
var NameActions = require('../actions/NameActions');

function NameStore() {
    this.name = '';

    this.bindListeners({
        handleUpdateName: NameActions.SET_NAME
    });

}

NameStore.prototype.handleUpdateName = function(name) {
    this.name = name;
};

module.exports = alt.createStore(NameStore, 'NameStore');
