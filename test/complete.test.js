const expect = require('chai').expect;
const complete = require('../commands/complete');

describe('completeTask', function() {
  let testData = [{
    id: 1,
    desc: 'buy milk',
    isComplete: false
  }];

  // it('should change isComplete value from false to true', function() {
  //   var expected = [{
  //     id: 1,
  //     desc: 'buy milk',
  //     isComplete: true
  //   }];
  //   expect(complete(1, testData)).to.equal(expected);
  //   console.log(testData);

  it('should print success message after completing task', function() {
    let expected = 'Completed task 1: buy milk';
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
