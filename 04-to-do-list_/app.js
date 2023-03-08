require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');
const { saveDB } = require('./helpers/saveFile');

const main = async () => {
    console.log("hello wordd");
    let opt = '';
    const tasks = new Tasks();

    do {
        opt = await inquirerMenu();

        switch(opt) {
            case '1':
                //create task
                const desc = await readInput('Description: ');
                tasks.createTask(desc);
                break;
            case '2':
                console.log(tasks.listsArr);
                break;
            case '3':

                break;
        }
        // console.log({ opt });

        saveDB(tasks._lists);

        await pause();

    } while(opt !== '0');
}

main();