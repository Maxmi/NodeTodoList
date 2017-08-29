const fs = require('fs');

//when i add task - it should go into tasks.json file
//so need to use json.parse to parse the passed string and make it an object
//individual task should be an object
//then many tasks should be stored in array

module.exports = (description) => {
  var task = process.argv[3];
    // var plannedTasks = [];
  // plannedTasks.push(task);
  fs.appendFileSync('tasks.json', JSON.stringify(task));


  var tasks = fs.readFileSync('tasks.json', 'utf8');
  console.log(tasks);
  console.log(typeof tasks);

  // var parsedTasks = JSON.parse(tasks);
  // console.log(parsedTasks);
  // console.log(typeof parsedTasks);

  //
  console.log('Created task ', tasksArr.length);


};
