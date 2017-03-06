'use strict';

const crypto = require('crypto');
const jss = require('json-stringify-safe');

class Utils {
  /**
  * @name strip
  * @summary strips white space characters - except for spaces
  * @param {string} str - string to strip characters from
  * @return {string} string - without white space characters
  */
  static strip(str) {
    return str
      .replace(/[\t\n\r]/g,'')
      .trim();
  }

  /**
  * @name zeroPad
  * @summary add preceeding zeros to maintain desired places
  * @param {number} num - number to zero pad
  * @param {number} places - place digits (length)
  * @return {string} string with preceeding zeros
  */
  static zeroPad(num, places) {
    let numSize = String(num).length;
    if (numSize > places) {
      places = numSize;
    }
    let zeroes = '';
    for (let i = 0; i < places; i++) {
      zeroes += '0';
    }
    return (zeroes + num).slice(-places);
  }

  /**
   * @name stringHash
   * @summary returns a hash value for a supplied string
   * @see https://github.com/darkskyapp/string-hash
   * @private
   * @param {object} str - string to hash
   * @return {number} hash - hash value
   */
  static stringHash(str) {
    let hash = 5381;
    let i = str.length;
    while (i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
     * integers. Since we want the results to be always positive, convert the
     * signed int to an unsigned by doing an unsigned bitshift. */
    return hash >>> 0;
  }

  /**
  * @name shortID
  * @summary generate a random id composed of alphanumeric characters
  * @see https://en.wikipedia.org/wiki/Base36
  * @return {string} random string id
  */
  static shortID() {
    return (Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)).toString(36);
  }

  /**
  * @name UUID
  * @summary Pseudo UUID
  * @return {string} uuid - unique string
  */
  static UUID() {
    let d = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  /**
  * @name isObject
  * @summary Determines whether a variable is an object
  * @param {object} obj - variable being tested
  * @return {boolean} - true if object else false
  */
  static isObject(obj) {
    return (typeof obj === 'object' && Object.prototype.toString.call(obj) !== '[object Array]');
  }

  /**
  * @name isArray
  * @summary Determines whether a variable is an array
  * @param {object} obj - variable being tested
  * @return {boolean} - true if array else false
  */
  static isArray(obj) {
    return (typeof obj === 'object' && Object.prototype.toString.call(obj) === '[object Array]');
  }

  /**
   * @name safeJSONStringify
   * @summary Safe JSON stringify
   * @description Note, that this function if very different from the
   *  JSON.stringify function in that it won't accept non objects.
   * @param {object} obj - object to stringify
   * @return {string} string - stringified object.
   *   Returns undefined if the object isn't a valid object or can't be stringified
   */
  static safeJSONStringify(obj) {
    return jss(obj);
  }

  /**
   * @name safeJSONParse
   * @summary Safe JSON parse
   * @private
   * @param {string} str - string which will be parsed
   * @return {object} obj - parsed object
   *   Returns undefined if string can't be parsed into an object
   */
  static safeJSONParse(str) {
    let data;
    try {
      data = JSON.parse(str);
    } catch (e) {
    }
    return data;
  }

  /**
  * @name shuffleArray
  * @summary Shuffles and array
  * @description Uses the Durstenfeld shuffle algorithm
  * @param {array} array - to shuffle
  * @return {array} array - shuffled array
  */
  static shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  /**
  * @name htmlEncode
  * @summary Encode HTML text by converting characters to html codes
  * @param {string} text - html text to encode
  * @return {string} text - encoded html text
  */
  static htmlEncode(text) {
    return text.replace(new RegExp('&', 'g'), '&amp;');
  }

  /**
  * @name htmlDecode
  * @summary Decode HTML text to original form
  * @param {string} text - html text to encode
  * @return {string} text - decoded html text
  */
  static htmlDecode(text) {
    return text.replace(new RegExp('&amp;', 'g'), '&');
  }

  /**
  * @name md5Hash
  * @summary Hashes a key to produce an MD5 hash
  * @param {string} key - input key to hash
  * @return {string} hash - hashed value
  */
  static md5Hash(key) {
    return crypto
      .createHash('md5')
      .update(key)
      .digest('hex');
  }

  /**
  * @name getGeoDistance
  * @summary Get the distance between to lat/lngs
  * @notes http://stackoverflow.com/questions/27928/how-do-i-calculate-distance-between-two-latitude-longitude-points
  * @param {number} lat1 - from lat
  * @param {number} lng1 - from lng
  * @param {number} lat2 - to lat
  * @param {number} lng2 - to lng
  * @return {number} value - distance in miles
  */
  static getGeoDistance(lat1, lng1, lat2, lng2) {
    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }
    const convertKMToMiles = 0.621371;
    let R = 6371; // Radius of the earth in km
    let dLat = deg2rad(lat2 - lat1);
    let dLon = deg2rad(lng2 - lng1);
    let a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
             Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c; // Distance in km
    return d / convertKMToMiles;
  }

  /**
  * Random number functions. Borrowed from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  */

  /**
  * @name getRandom
  * @summary Returns a random number between 0 (inclusive) and 1 (exclusive)
  * @return {number} num - number
  */
  static getRandom() {
    return Math.random();
  }

  /**
  * @name getRandomArbitrary
  * @summary Returns a random number between min (inclusive) and max (exclusive)
  * @return {number} num - number
  */
  static getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  /**
  * @name getRandomInt
  * @summary Returns a random integer between min (included) and max (excluded)
  * @return {number} num - number
  */
  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  /**
  * @name getRandomIntInclusive
  * @summary Returns a random integer between min (included) and max (included)
  * @return {number} num - number
  */
  static getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

module.exports = Utils;
