'use strict';

require('./helpers/chai.js');

const Utils = require('../index.js');

/**
* Test safe json parse operations.
*/
describe('Safe JSON Parse util', () => {
  it('should return a parsed object when given valid JSON', () => {
    let obj = Utils.safeJSONParse('{ "a":12, "b": 34, "name": "carlos"}');
    expect(obj).to.have.property('a');
    expect(obj).to.have.property('b');
    expect(obj).to.have.property('name');
  });
  it('should return undefined if given invalid JSON', () => {
    let obj = Utils.safeJSONParse('');
    expect(obj).to.be.undefined;
  });
});

/**
* Test safe json stringify.
*/
describe('Safe JSON Stringify util', () => {
  it('should correctly stringify a valid object', () => {
    let obj = {
      a: 12,
      b: 34,
      name: 'carlos'
    };
    let str = Utils.safeJSONStringify(obj);
    expect(str).to.be.equal('{"a":12,"b":34,"name":"carlos"}');
  });
  it('should return 34 when trying to stringify a number', () => {
    let str = Utils.safeJSONStringify(34);
    expect(str).to.be.equal('34');
  });
  it('should return empty array when trying to stringify an undefined', () => {
    let str = Utils.safeJSONStringify();
    expect(str).to.equal(undefined);
  });
});
