'use strict';

require('./helpers/chai.js');

const Utils = require('../index.js');

/**
* Test shortID util.
*/
describe('shortID util', () => {
  it('should return a string', () => {
    let str = Utils.shortID();
    expect(str).to.be.a('string');
  });

  it('should return unique strings', () => {
    let set = new Set();
    for (let i = 0; i < 10000; i += 1) {
      set.add(Utils.shortID());
    }
    expect(set.size).to.be.equal(10000);
  });
});
