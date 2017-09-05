const helpers = require('./helpers');

const addTask = (task, allTasks) => {
  const newTask = {
    // id: allTasks.length+1,
    id: allTasks[allTasks.length - 1].id + 1,
    desc: task,
    isComplete: false
  };

  const duplicateTasks = allTasks.filter((xtask) => {
    return xtask.desc === task;
  });

  if (duplicateTasks.length === 0) {
    allTasks.push(newTask);
    helpers.saveTasks(allTasks);
    // console.log(`Created task ${newTask.id}`);
    return `Created task ${newTask.id}`;
    // return newTask;
  } else {
      // console.log("Duplicate task, not added.");
      return 'Duplicate task, not added.';
  }
};

module.exports = addTask;
