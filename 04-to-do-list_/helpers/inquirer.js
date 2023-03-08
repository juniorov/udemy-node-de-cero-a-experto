const inquirer = require('inquirer');
require('colors');

const menuOptions = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
            {
                value: '1',
                name: '1 Create task'
            },
            {
                value: '2',
                name: '2 Task Lists'
            },
            {
                value: '3',
                name: '3 Lists Complet tasks'
            },
            {
                value: '4',
                name: '4 List Pending tasks'
            },
            {
                value: '5',
                name: '5 Complet task'
            },
            {
                value: '6',
                name: '6 Remove task'
            },
            {
                value: '0',
                name: '0 Exit'
            },
        ],
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('================='.green);
    console.log('Choose an option'.green);
    console.log('=================\n'.green);

    const { option } = await inquirer.prompt(menuOptions);

    return option;
}

const pause = async () => {
    const question = [{
        type: 'input',
        name: 'enter',
        message: "Press ENTER to continue"
    }];
    const { option } = await inquirer.prompt(question);

    return option
}

const readInput = async (message) => {
    const question = [
        {
            type: "input",
            name: "desc",
            message,
            validate(value) {
                if(value.length === 0) {
                    return "Please write a valid value"
                }

                return true;
            },
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

module.exports = {
    inquirerMenu,
    pause,
    readInput,
}