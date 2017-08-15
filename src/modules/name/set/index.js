var NameActions = require('../../../actions/NameActions');

function setName(delay){

    return setInterval(function(){
        NameActions.setName();
    }, delay);

}

module.exports = setName;