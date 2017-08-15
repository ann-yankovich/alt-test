var NameActions = require('../../../actions/NameActions');
var NameStore = require('../../../stores/NameStore');

function logName() {
   // console.log( NameStore.getState() );
    NameActions.logName();
}

module.exports = logName;