'use strict';

require('./helpers/chai.js');

const Utils = require('../index.js');

/**
* Test strip utils.
*/
describe('Strip util', () => {
  it('should remove all tabs', () => {
    let str = Utils.strip('\tthis\tis\ta\ttest');
    expect(str).not.to.have.string('\t');
  });
  it('should not remove spaces', () => {
    let str = Utils.strip('this is a test');
    expect(str).to.be.equal('this is a test');
  });
  it('should remove newlines and carriage returns', () => {
    let str = Utils.strip('this is a test\r\n');
    expect(str).to.be.equal('this is a test');
  });
  it('should remove leading and trailing white space', () => {
    let str = Utils.strip('    this is a test    \r\n');
    expect(str).to.be.equal('this is a test');
  });
});
