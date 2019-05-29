var os = require('os');
var OSinfo = require('../modules/OSinfo');
var timeTransformation = require('../modules/timeTransformation');


process.stdin.setEncoding('utf-8');

console.log('Podaj liczbę sekund: (albo podaj komendę)');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {

        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
            break;
            case '/getOSinfo':
                OSinfo.print();
            break;
            default:
                console.log(timeTransformation.print(parseInt(input)));
        };
    }
});

