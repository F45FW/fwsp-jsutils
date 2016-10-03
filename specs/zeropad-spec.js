'use strict';

require('./helpers/chai.js');

const Utils = require('../index.js');

/**
* Test zeropad utils.
*/
describe('zeroPad util', () => {
  it('should have five characters when using 25, 5', () => {
    let str = Utils.zeroPad(25, 5);
    expect(str.length).to.be.equal(5);
  });
  it('should have three zero characters when using 25, 5', () => {
    let str = Utils.zeroPad(25, 5);
    expect(str.substring(0,3)).to.be.equal('000');
  });
  it('should not prefix zeropad if larger than places listed', () => {
    let str = Utils.zeroPad(65563, 4);
    expect(str.length).to.be.equal(5);
    expect(str[0]).to.not.be.equal('0');
  });
});
