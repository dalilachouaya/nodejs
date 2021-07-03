
    var fs = require('fs');

    var file = fs.readFileSync(process.argv[2]);
    var lines = file.toString().split('\n').length - 1;
    console.log(lines);





    /*
    fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
    */

    /*
    const fs = require('fs');
    const route = process.argv[2];
    let file = fs.readFileSync(route, 'utf-8');
    console.log(file.split('\n').length-1);
    */

