

'use strict'
const fs = require('fs');
const path = require('path');
fs.readdir(process.argv[2], (err, list)=>{
    list.forEach( (file) =>{
        if (err) {
            throw err;}
        if (path.extname(file) === '.' + process.argv[3]) {
            console.log(file);
        }
    });
});

/*solution.js_ :
    'use strict'
    const fs = require('fs')
    const path = require('path')

    const folder = process.argv[2]
    const ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })
    */




/*

'use strict'
const fs = require('fs');
const path = require('path');
const route = process.argv[2];
const ext = process.argv[3];

fs.readdir(route, 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    //I go through the folder
    for (let i = 0; i < data.length; i++) {
        //I check that the extension of each file is the one entered by the user
        if (path.extname(data[i]) === '.' + ext) {
            console.log(data[i]);
        }
    }
});
*/