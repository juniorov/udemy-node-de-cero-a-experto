const argv = require('yargs')
    .option({
        'b': {
            alias: "base",
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l' : {
            alias: "list",
            type: 'string',
            demandOption: true,
            default: false,
            describe: 'Muestra la tabla en consola'
        },
        'h' : {
            alias: "hasta",
            type: 'number',
            default: 10,
            describe: 'Es el numero hasta donde se debe multiplicar'
        }
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'The base has to be a number';
        }

        return true;
    })
    .argv;

module.exports = argv;