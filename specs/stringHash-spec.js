'use strict';

require('./helpers/chai.js');

const Utils = require('../index.js');

/**
* Test string hash.
*/
describe('String Hash util', () => {
  it('should return a hash', () => {
    let h = Utils.stringHash('This is a test');
    expect(h).to.be.equal(2397877838);
  });
});
