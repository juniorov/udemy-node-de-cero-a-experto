require('colors');

const showMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log('================='.green);
        console.log('Choose an option'.green);
        console.log('=================\n'.green);

        console.log(`${ '1'.green }. Create task`);
        console.log(`${ '2'.green }. Task Lists`);
        console.log(`${ '3'.green }. Lists Complet tasks`);
        console.log(`${ '4'.green }. List Pending tasks`);
        console.log(`${ '5'.green }. Complet task`);
        console.log(`${ '6'.green }. Remove task`);
        console.log(`${ '0'.green }. Exit\n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Choose an option: ', (opt) => {
            readline.close();
            resolve(opt);
        });
    });
}

const pause = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`Press ${'Enter'.green} to continue \n`, (opt) => {
            readline.close();
            resolve(opt);
        });
    })
}

module.exports = {
    showMenu,
    pause
}