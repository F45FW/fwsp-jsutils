# JS Utils

Flywheel JS utils is a library of useful JavaScript utilities.

## Install
You can install it via NPM:

```shell
$ npm -i fwsp-jsutils
```

## Usage

```javascript
const Utils = require('fwsp-jsutils');
let hash = Utils.stringHash('This is a test');
```

## Tests

Tests can be found in the `specs` folder.

```shell
$ npm test
```

## API

### strip - strips white space characters - except for spaces

```javascript
 /**
  * @name strip
  * @summary strips white space characters - except for spaces
  * @param {string} str - string to strip characters from
  * @return {string} string - without white space characters
  */
  static strip(str)
```

### zeroPad - add preceeding zeros to maintain desired places

```javascript
  /**
  * @name zeroPad
  * @summary add preceeding zeros to maintain desired places
  * @param {number} num - number to zero pad
  * @param {number} places - place digits (length)
  * @return {string} string with preceeding zeros
  */
  static zeroPad(num, places)
```

### stringHash - returns a hash value for a supplied string

```javascript
 /**
   * @name stringHash
   * @summary returns a hash value for a supplied string
   * @see https://github.com/darkskyapp/string-hash
   * @private
   * @param {object} str - string to hash
   * @return {number} hash - hash value
   */
  static stringHash(str)
```  

### shortID - generate a random id composed of alphanumeric characters

```javascript
  /**
  * @name shortID
  * @summary generate a random id composed of alphanumeric characters
  * @see https://en.wikipedia.org/wiki/Base36
  * @return {string} random string id
  */
  static shortID()
```

### UUID - Pseudo UUID

```javascript
  /**
  * @name UUID
  * @summary Pseudo UUID
  * @return {string} uuid - unique string
  */
  static UUID()
```

### isObject - Determines whether a variable is an object

```javascript
  /**
  * @name isObject
  * @summary Determines whether a variable is an object
  * @param {object} obj - variable being tested
  * @return {boolean} - true if object else false
  */
  static isObject(obj)
```

### isArray - Determines whether a variable is an array

```javascript
  /**
  * @name isArray
  * @summary Determines whether a variable is an array
  * @param {object} obj - variable being tested
  * @return {boolean} - true if array else false
  */
  static isArray(obj)
```

### safeJSONStringify - Safe JSON stringify

```javascript
/**
 * @name safeJSONParse
 * @summary Safe JSON parse
 * @private
 * @param {string} str - string which will be parsed
 * @return {object} obj - parsed object
 *   Returns undefined if string can't be parsed into an object
 */
  static safeJSONStringify(obj)
```

### safeJSONParse - Safe JSON parse

```javascript
  /**
   * @name safeJSONParse
   * @summary Safe JSON parse
   * @private
   * @param {string} str - string which will be parsed
   * @return {object} obj - parsed object
   *   Returns undefined if string can't be parsed into an object
   */
  static safeJSONParse(str)
```

### shuffleArray - Uses the Durstenfeld shuffle algorithm

```javascript
  /**
  * @name shuffleArray
  * @summary Shuffles and array
  * @description Uses the Durstenfeld shuffle algorithm
  * @param {array} array - to shuffle
  * @return {array} array - shuffled array
  */
  static shuffleArray(array)
```

### htmlEncode - Encode HTML text by converting characters to html codes

```javascript
  /**
  * @name htmlEncode
  * @summary Encode HTML text by converting characters to html codes
  * @param {string} text - html text to encode
  * @return {string} text - encoded html text
  */
  static htmlEncode(text)
```

### htmlDecode - Decode HTML text to original form

```javascript
  /**
  * @name htmlDecode
  * @summary Decode HTML text to original form
  * @param {string} text - html text to encode
  * @return {string} text - decoded html text
  */
  static htmlDecode(text)
```

### md5Hash - Hashes a key to produce an MD5 hash

```javascript
  /**
  * @name md5Hash
  * @summary Hashes a key to produce an MD5 hash
  * @param {string} key - input key to hash
  * @return {string} hash - hashed value
  */
  static md5Hash(key)
```

### getGeoDistance - Get the distance between to lat/lngs

```javascript

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
```

### getRandom - Returns a random number between 0 (inclusive) and 1 (exclusive)

```javascript
  /**
  * @name getRandom
  * @summary Returns a random number between 0 (inclusive) and 1 (exclusive)
  * @return {number} num - number
  */
  static getRandom()
```

### getRandomArbitrary - Returns a random number between min (inclusive) and max (exclusive)

```javascript
  /**
  * @name getRandomArbitrary
  * @summary Returns a random number between min (inclusive) and max (exclusive)
  * @return {number} num - number
  */
  static getRandomArbitrary(min, max)
```

### getRandomInt - Returns a random integer between min (included) and max (excluded)

```javascript
  /**
  * @name getRandomInt
  * @summary Returns a random integer between min (included) and max (excluded)
  * @return {number} num - number
  */
  static getRandomInt(min, max)
```

### getRandomIntInclusive - Returns a random integer between min (included) and max (included)

```javascript
  /**
  * @name getRandomIntInclusive
  * @summary Returns a random integer between min (included) and max (included)
  * @return {number} num - number
  */
  static getRandomIntInclusive(min, max)
```
