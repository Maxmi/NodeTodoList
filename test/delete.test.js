var expect = require('chai').expect;
var del = require('../commands/delete');

describe('deleteTask', function() {
  var testData = [{
    id: 1,
    desc: 'test'
  }];

  // it('should remove task from allTasks array', function() {
  //     expect(remove.removeTask(testData, 1)).to.equal([]);
  // });

  it('should print success message after deleting task', function() {
    var expected = 'Deleted task 1: test';
    expect(del(1,testData)).to.equal(expected);
  });

  it('should print info message if task id not found', function() {
  var expected = `Can not remove this task, id 34 not found`;
    expect(del(34, testData)).to.equal(expected);
  });


}); //end of function
