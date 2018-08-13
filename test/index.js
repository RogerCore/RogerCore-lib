'use strict';

var should = require('chai').should();
var rogercore = require('../');

describe('#versionGuard', function() {
  it('global._rogercore should be defined', function() {
    should.equal(global._rogercore, rogercore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      rogercore.versionGuard('version');
    }).should.throw('More than one instance of rogercore');
  });
});
