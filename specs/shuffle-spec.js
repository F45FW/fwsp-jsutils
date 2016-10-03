'use strict';

require('./helpers/chai.js');

const Utils = require('../index.js');

/**
* Test shuffleArray utils.
*/
describe('shuffleArray util', () => {
  let ar = [];
  beforeEach('', () => {
    for (let i = 0; i < 100; i += 1) {
      ar.push(i);
    }
    ar = Utils.shuffleArray(ar);
  });
  it('should have a resulting count of 100 after shuffle', () => {
    expect(ar.length).is.equal(100);
  });
  it('should have array elements in different order', () => {
    let inPlaceCount = 0;
    for (let i = 0; i < 100; i += 1) {
      if (ar[i] === i) {
        inPlaceCount++;
      }
    }
    expect(inPlaceCount).is.below(10);
  });
});
