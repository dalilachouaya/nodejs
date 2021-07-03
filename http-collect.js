//Remember : data.toString () to convert the Buffer from Node to String.
const http = require('http');
//const hyperquest = require('hyperquest');
const bl = require('bl');
const url = process.argv[2];
// let bl = new BufferList();

http.get(url, (res) => {
    res.pipe(bl((err, data) => {
        if (err) {
            throw err;
        }       
        let blx = new bl()
        blx.append(data)
        console.log(blx.length);
        console.log(data.toString()) 

    }))

})


/*
var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err);
        }

        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});
*/

/*solution.js_ :
 'use strict'
    const http = require('http')
    const bl = require('bl')
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
    */