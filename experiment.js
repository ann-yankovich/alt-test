var http = require('http');
var fs = require('fs');

fs.open(__filename, 'r', function(err, file) {
    console.log('4-java script');

    process.nextTick(function(){
        console.log('5-fs nextTick');

        fs.open(__filename, 'r', function(err, file) {
            console.log('11-fs nextTick java script');

            fs.open(__filename, 'r', function(err, file) {
                console.log('----fs fs java script');
            });
            setImmediate(function(){
                console.log('----fs fs setImmediate');
            });
            setTimeout(function(){
                console.log('----fs fs setTimeout');
            });
            process.nextTick(function(){
                console.log('----fs fs process.nextTick');
            });
        });
    });

    setImmediate(function(){
        console.log('8-fs setImmediate');

        fs.open(__filename, 'r', function(err, file) {
            console.log('12-fs setImmediate java script');
        });
    });

    setTimeout(function(){
        console.log('9-fs setTimeout');

        fs.open(__filename, 'r', function(err, file) {
            console.log('13-fs setTimeout java script');
        });
    }, 0);
});


process.nextTick(function(){
    console.log('1-nextTick');

    fs.open(__filename, 'r', function(err, file) {
        console.log('6-nextTick java script');
    });
});


setTimeout(function(){
    console.log('2-setTimeout');

    fs.open(__filename, 'r', function(err, file) {
        console.log('7-setTimeout java script');
    });
}, 0);

setImmediate(function(){
    console.log('3-setImmediate');

    fs.open(__filename, 'r', function(err, file) {
        console.log('10-setImmediate java script');
    });
});