var alt = require('../alt');
var NameActions = require('../actions/NameActions');

function NameStore() {
    this.name = '';

    this.bindListeners({
        handleUpdateName: NameActions.SET_NAME,
        handleLogName: NameActions.LOG_NAME
    });

    // this.bindAction(NameActions.SET_NAME, this.handleUpdateName);

    // this.listen(function (state) {
    //     console.log(state);
    //     assert.deepEqual(MyStore.getState(), state);
    // });
    // this.on('afterEach', function(payload){
    //     this.emitChange();
    // });
}

NameStore.prototype.handleUpdateName = function(name) {
    this.name = name;
    this.handleLogName(name);
};

// NameStore.prototype.listen = function() {
//     NameActions.LOG_NAME
// };
NameStore.prototype.handleLogName = function(name) {
    // return this.name;
};

module.exports = alt.createStore(NameStore, 'NameStore');
