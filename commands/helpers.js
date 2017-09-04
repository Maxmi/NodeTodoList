const fs = require('fs');

var getAll = () => {
  try {
    var tasksString = fs.readFileSync('tasks.json');
    return JSON.parse(tasksString);
  } catch (e) {
    return [{"id": 0}];
  }
};

var saveTasks = (tasks) => {
  fs.writeFileSync('tasks.json', JSON.stringify(tasks));
};

module.exports = { getAll, saveTasks };
