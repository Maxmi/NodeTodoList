const asciitable = require('asciitable');
const fs = require('fs');

module.exports = () => {
  var tasks = fs.readFileSync();
  // var table = asciitable();
  console.log('You have' + 'tasks');
}
