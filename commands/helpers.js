const fs = require('fs');

const getAll = () => {
  try {
    const tasksString = fs.readFileSync('tasks.json');
    return JSON.parse(tasksString);
  } catch (e) {
    return [{ id: 0 }];
  }
};

const saveTasks = (tasks) => {
  fs.writeFileSync('tasks.json', JSON.stringify(tasks));
};

module.exports = { getAll, saveTasks };
