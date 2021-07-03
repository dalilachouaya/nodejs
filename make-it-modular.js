//control errors and successes, sending a message to inform about it
// Send the information to the terminal
const mymodule = require ('./mymodule');
const dir = process.argv[2];
const ext = process.argv[3];

// This is the invocation of the function made in mymodule.js.
mymodule(dir, ext, (err, data) => {
    //Error control.
    if(err){
        return console.log('There was a mistake: ', err);
    }

    //I go through the array "files" made in mymodule.js, to finally display it in the terminal.
    for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
    }
})

/*

var filterFn = require('./solution_filter.js');
var dir = process.argv[2];
var filterStr = process.argv[3];

filterFn(dir, filterStr, function (err, list) {
    if (err) {
        return console.error('There was an error:', err);
    }

    list.forEach(function (file) {
        console.log(file)
    });
});
*/



/*
 _C:\Users\Dalila\AppData\Roaming\npm\node_modules\learnyounode\exercises\m
 ake_it_modular\solution\solution.js_ :


    'use strict'
    const filterFn = require('./solution_filter.js')
    const dir = process.argv[2]
    const filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }

      list.forEach(function (file) {
        console.log(file)
      })
    })
*/



/*
_C:\Users\Dalila\AppData\Roaming\npm\node_modules\learnyounode\exercises\m
 ake_it_modular\solution\solution_filter.js_ :


    'use strict'
    const fs = require('fs')
    const path = require('path')

    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }
    */







