var alt = require('../alt');
var NameActions = require('../actions/NameActions');

function NameStore() {
    this.name = '';

    this.bindListeners({
        handleUpdateName: NameActions.SET_NAME,
        handleLogName: NameActions.LOG_NAME
    });

    // this.bindAction(NameActions.LOG_NAME, this.handleUpdateName);
}

NameStore.prototype.handleUpdateName = function(name) {
    this.name = name;
};

NameStore.prototype.handleLogName = function() {
    return this.name
};

module.exports = alt.createStore(NameStore, 'NameStore');
