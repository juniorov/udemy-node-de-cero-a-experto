require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');
const { saveDB, readDB } = require('./helpers/saveFile');

const main = async () => {
    let opt = '';
    const tasks = new Tasks();

    const tasksDB = readDB();

    if(tasksDB) {
        tasks.loadTasksFromArray(tasksDB);
    }

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