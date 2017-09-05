const expect = require('chai').expect;
const complete = require('../commands/complete');

describe('completeTask', function() {
  let testData = [{
    id: 1,
    desc: 'buy eggs',
    isComplete: false
  }];
  
  it('should print success message after completing task', function() {
    let expected = 'Completed task 1: buy eggs';
    expect(complete(1, testData)).to.equal(expected);
  });


  it('should print info message if task already completed', function() {
    let inputData = [{
      id: 1,
      desc: 'buy milk',
      isComplete: true
    }];
    let expected = 'This task already completed';
    expect(complete(1, inputData)).to.equal(expected);
  });

  it('should print message if task id not found', function() {
    let expected = 'Task id 789 not found';
    expect(complete(789, testData)).to.equal(expected);
  })
  }); //end of function
