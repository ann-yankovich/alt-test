var alt = require('../alt');
var NameActions = require('../actions/NameActions');

function NameStore() {
    // console.log(NameActions);
    this.name = '';

    this.bindListeners({
        handleUpdateName: NameActions.SET_NAME,
        handleLogName: NameActions.LOG_NAME
    });

    // this.bindAction(NameActions.LOG_NAME, this.handleUpdateName);
}

NameStore.prototype.handleUpdateName = function(name) {
    this.name = name;
    console.log('handleUpdateName', this.name);
};

NameStore.prototype.handleLogName = function() {
    console.log('handleLogName', this.name);
    // return this.name;
    // alt.dispatch(this.getState());
};

module.exports = alt.createStore(NameStore, 'NameStore');
