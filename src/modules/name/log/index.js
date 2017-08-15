var nameStore = require('../../../stores/NameStore');

function logName() {
    nameStore.listen(function(state){
        console.log(state.name);
    });
}

module.exports = logName;