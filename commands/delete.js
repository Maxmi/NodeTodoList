const helpers = require('./helpers');
const _ = require('lodash');

var deleteTask = (id, allTasks) => {
  var currentTask = {};
  var indexToRemove = _.findIndex(allTasks, (task) => task.id == parseInt(id,10));

  if(indexToRemove === -1) {
    // console.log(`Can not remove this task, id ${id} not found`);
    return `Can not remove this task, id ${id} not found`;
  } else {
    var taskToRemove = allTasks[indexToRemove];
    allTasks.splice(indexToRemove, 1);
    helpers.saveTasks(allTasks);
    // console.log(`Deleted task ${taskToRemove.id}: ${taskToRemove.desc}`);
    return `Deleted task ${taskToRemove.id}: ${taskToRemove.desc}`;
  }
};

module.exports = deleteTask;
