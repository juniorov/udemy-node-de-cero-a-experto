const colors = require('colors');
const { createFile } = require('./helpers/multi');
const argv = require('./config/yargs');

// console.log(argv);


createFile(argv.b, argv.h, argv.l)
    .then(response => console.log(response.blue))
    .catch(err => console.log(err.r));