'use strict';

require('./helpers/chai.js');

const Utils = require('../index.js');

/**
* Test uuid util.
*/
describe('shortID util', () => {
  it('should return unique strings', () => {
    let set = new Set();
    for (let i = 0; i < 10000; i += 1) {
      set.add(Utils.UUID());
    }
    expect(set.size).to.be.equal(10000);
  });
});

describe('isUUID util', () => {
  it('should return true if valid UUID', () => {
    expect(Utils.isUUID4('098ebe18-7e1b-4ddd-ae2a-cc6521e5b641')).to.be.true;
  });
  it('should return false if invalid UUID', () => {
    expect(Utils.isUUID4('098ebe18-7e1b-fake-ae2a-cc6521e5b641')).to.be.false;
  });
});
