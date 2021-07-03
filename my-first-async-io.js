
/* var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function (err, contents) {
    var lines = contents.toString().split('\n').length - 1;
    console.log(lines)
});
 */

var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, 'utf-8' , (err, contents) => {
    if(err) throw err;
    var lines = contents.split('\n').length - 1;
    console.log(lines)
});

/* const fs = require('fs');
const route = process.argv[2];

//
fs.readFile(route, 'utf-8', (err, data) => {
    if(err) {console.log(err)} ;
    let jumps = data.split('\n').length-1;
    console.log(jumps);
})
 */

/*
    'use strict'
    const fs = require('fs')
    const file = process.argv[2]

    fs.readFile(file, function (err, contents) {
        if (err) {
            return console.log(err)
        }
      // fs.readFile(file, 'utf8', callback) can also be used
        const lines = contents.toString().split('\n').length - 1
        console.log(lines)
    })
    */

    