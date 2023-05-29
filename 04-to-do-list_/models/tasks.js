const Task = require("./task");

class Tasks {

    _lists = {};

    get listsArr () {
        const list = [];
        Object.keys(this._lists).forEach(key => {
            list.push(this._lists[key]);
        });

        return list;
    }

    constructor () {
        this._lists = {};
    }

    loadTasksFromArray(tasks = []) {
        tasks.forEach(tasks => {
            this._lists[task.id] = task;
        })
    }

    createTask(desc = '') {
        const task = new Task(desc);
        this._lists[task.id] = task;
    }

    listTasks () {

    }
}

module.exports = Tasks;