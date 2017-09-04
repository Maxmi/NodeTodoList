const helpers = require('./helpers.js');

var list = (allTasks) => {
  var filtered = allTasks.filter(task => !task.isComplete && task.id !== 0);
  console.log(render(filtered));
  return `You have ${filtered.length} task(s).`;
}

var render = (filtered) => {
  var header = '\nID Description \n-- ----------- \n';
  var list = filtered.map((task) => `${task.id} ${task.desc}\n`);
  return `${header} ${list}` ;
}

module.exports = { list, render };

// { list: list, render:render };
