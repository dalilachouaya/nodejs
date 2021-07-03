var http = require('http');

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
})

/*
//test url: http://127.0.0.1:5500/test-files/abc.html
const http = require('http');
const url = process.argv[2];

http.get(url, (res) => {
    res.setEncoding('utf8');
    res.on('data', data => {
        console.log(data);
        res.on('err', console.error);
    });
});

*/


/*
  'use strict'
    const http = require('http')

    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)

    */
