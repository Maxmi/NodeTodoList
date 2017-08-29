#!/usr/bin/env node

const addTask = require('./commands/add.js');
const listTasks = require('./commands/list.js');
const completeTask = require('./commands/complete.js');
const deleteTask = require('./commands/delete.js');//why delete wasn't working?

const command = process.argv[2];
const param = process.argv[3];

// var tasksArr = [];
// var taskObj = {}; //{"id": 1, "description": "buy milk"}
//

switch (command) {
  case 'list':
    listTasks();
    break;

  case 'add':
    addTask(param);
    break;

  case 'complete':
    completeTask(param);
    break;

  case 'delete':
    deleteTask(param);
    break;

  default:
    console.log('Command not recognized');

}
