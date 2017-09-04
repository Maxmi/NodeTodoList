var expect = require('chai').expect;
var list = require('../commands/list');

describe('listFile', function() {
  var testData = [{
    id: 1,
    desc: 'test'
  }];
  describe('render', function() {
    var expected = '\nID Description \n-- ----------- \n 1 test\n';
    it('should return list of tasks', function(){
      expect(list.render(testData)).to.equal(expected);
    })
  });
  describe('list', function() {
    var expected = 'You have 1 task(s).';
    it('should return number of tasks', function(){
      expect(list.list(testData)).to.equal(expected);
    })
  })
});
