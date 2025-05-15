> This is a fork version of [cacheman-file](https://github.com/anaptfox/cacheman-file)

# recacheman-file

[![NPM](https://nodei.co/npm/recacheman-file.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/recacheman-file/)  
  
[![npm version](https://img.shields.io/npm/v/recacheman-file.svg?style=flat-square)](https://www.npmjs.org/package/recacheman-file)
[![Known Vulnerabilities](https://snyk.io//test/github/aalfiann/recacheman-file/badge.svg?targetFile=package.json)](https://snyk.io//test/github/aalfiann/recacheman-file?targetFile=package.json)
![License](https://img.shields.io/npm/l/recacheman-file)
![NPM download/month](https://img.shields.io/npm/dm/recacheman-file.svg)
![NPM download total](https://img.shields.io/npm/dt/recacheman-file.svg)  

File caching library for Node.JS and also cache engine for [recacheman](https://github.com/aalfiann/recacheman).


| Version | Node.JS |
|---|---|
| 0.x | 10, 12, 14, 16, 18, 20 |
| 1.x | 20, 22 |

## Instalation

``` bash
$ npm install recacheman-file
```

## Usage

```javascript
var CachemanFile = require('recacheman-file');
var cache = new CachemanFile();

// set the value
cache.set('my key', { foo: 'bar' }, function (error) {

  if (error) throw error;

  // get the value
  cache.get('my key', function (error, value) {

    if (error) throw error;

    console.log(value); //-> {foo:"bar"}

    // delete entry
    cache.del('my key', function (error){

      if (error) throw error;

      console.log('value deleted');
    });

  });
});
```

## API

### CachemanFile()

Create `cacheman-file` instance.

```javascript
var cache = new CachemanFile();
```

### cache.set(key, value, [ttl, [fn]])

Stores or updates a value.

```javascript
cache.set('foo', { a: 'bar' }, function (err, value) {
  if (err) throw err;
  console.log(value); //-> {a:'bar'}
});
```

Or add a TTL(Time To Live) in seconds like this:

```javascript
// key will expire in 60 seconds
cache.set('foo', { a: 'bar' }, 60, function (err, value) {
  if (err) throw err;
  console.log(value); //-> {a:'bar'}
});
```

### cache.get(key, fn)

Retrieves a value for a given key, if there is no value for the given key a null value will be returned.

```javascript
cache.get(function (err, value) {
  if (err) throw err;
  console.log(value);
});
```

### cache.del(key, [fn])

Deletes a key out of the cache.

```javascript
cache.del('foo', function (err) {
  if (err) throw err;
  // foo was deleted
});
```

### cache.clear([fn])

Clear the cache entirely, throwing away all values.

```javascript
cache.clear(function (err) {
  if (err) throw err;
  // cache is now clear
});
```

### cache.getAll([fn])

Get all entries in the cache. Entries are returned as an array

```javascript
cache.set('foo', { a: 'bar' }, 10, function (err, result) {
  cache.getAll(function (err, results) {
    console.log(results) // [ { a: 'bar' } ]
  });
});
```

## Run tests

``` bash
$ npm test
```

## License

(The MIT License)

Copyright (c) 2013 Taron Foxworth &lt;taronfoxworth@gmail.com&gt;,  
Jeremiah Harlan &lt;jeremiah.harlan@gmail.com&gt;,  
M Abd Aziz Alfian &lt;aalfiann@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
