var assert = require('assert');
var Path = require('path');
var Cache = require('../');

describe('cacheman-file-multi', function() {
  var cache1,
    cache2;

  before(function(done) {
    cache1 = new Cache({
      tmpDir: Path.join(process.cwd(), 'temp')
    }, {});
    cache2 = new Cache({
      tmpDir: Path.join(process.cwd(), 'temp')
    }, {});
    done();
  });
  after(function(done) {
    cache1.clear('test');
    cache2.clear('test');
    done();
  });

  it('should store items', function(done) {
    cache1.set('test1', {
      a: 1
    }, function(err) {
      if (err)
        return done(err);
      cache1.get('test1', function(err, data) {
        if (err)
          return done(err);
        assert.strictEqual(data.a, 1);
        done();
      });
    });
  });
  it('should get stored items', function(done) {
    cache1.get('test1', function(err, data) {
      if (err)
        return done(err);
      assert.strictEqual(data.a, 1);
      cache2.get('test1', function(err, data) {
        if (err)
          return done(err);
        try {
          assert.notStrictEqual(data, null)
          assert.strictEqual(data.a, 1)
          done()
        } catch (e) {
          done(e)
        }
      });
    });
  });
});