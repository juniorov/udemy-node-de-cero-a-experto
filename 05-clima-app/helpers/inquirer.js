const inquirer = require('inquirer');
require('colors');

const menuOptions = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
            {
                value: 1,
                name: '1 Look for a city'
            },
            {
                value: 2,
                name: '2 History'
            },
            {
                value: 0,
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

    await inquirer.prompt(question);
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

const listPlaces = async( lugares = [] ) => {
    const choices = lugares.map( (lugar, i) => {

        const idx = `${i + 1}.`.green;

        return {
            value: lugar.id,
            name:  `${ idx } ${ lugar.name }`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione lugar:',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);
    return id;
}

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listPlaces
}