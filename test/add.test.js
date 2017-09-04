var expect = require('chai').expect;
var add = require('../commands/add');

describe('addTask', function() {
  var testData = [{
    id: 1,
    desc: 'test'
  }];

  it('should give unique ID to each new task', function() {
    var expected = 'Created task 2';
    expect(add('buy milk', testData)).to.equal(expected);
  });

  it('should Not add duplicate task', function() {
    var expected = 'Duplicate task, not added.';
    expect(add('test', testData)).to.equal(expected);
  });

}); //end of function
