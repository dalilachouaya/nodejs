
/*
// solution_filter.js
var fs = require('fs');
var path = require('path');

module.exports = function (dir, filterStr, callback) {

    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err);
        }

        list = list.filter(function (file) {
            return path.extname(file) === '.' + filterStr
        });

        callback(null, list)
    })
}

*/

//This module develops the process
const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback) {

    fs.readdir(dir, 'utf-8', (err, data) => {
        if (err) {
            return callback(err);
        }

        let files = [];
        //I go through the folder
        for (let i = 0; i < data.length; i++) {
            //I check that the extension of each file is the one that the user entered
            if (path.extname(data[i]) === '.' + ext) {
            files.push(data[i]);
            }
        }

        callback(null, files);
    });
};

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
