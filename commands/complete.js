const helpers = require('./helpers');

var completeTask = (id, allTasks) => {
  var currentTask = {};
  var isCompleted = false;

  allTasks.forEach(task => {
    if (task.id === parseInt(id, 10)) {
      if(task.isComplete) {
        isCompleted = true;
        return;
      }
      currentTask = task;
      task.isComplete = true;
    }
  });

  if(isCompleted) {
    // console.log ('This task already completed');
    return 'This task already completed';
  } else if(!isCompleted && currentTask.id) {
    helpers.saveTasks(allTasks);
    // console.log (`Completed task ${currentTask.id}: ${currentTask.desc}`);
    return `Completed task ${currentTask.id}: ${currentTask.desc}`;
  } else {
    // console.log(`Task id ${id} not found`);
    return `Task id ${id} not found`;
  }

};

module.exports = completeTask;
