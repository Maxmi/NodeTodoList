const fs = require('fs');

var task = {
  "ID": "taskID",
  "description": "buy milk"
};

var str = JSON.stringify(task);
// console.log(str);

fs.writeFileSync('./playground/data.json', str);

// var tasksString = fs.readFileSync('tasks.json');
//
// var tasksObj = JSON.parse(tasksString);
//
// console.log(typeof task);
// console.log(task.ID);
