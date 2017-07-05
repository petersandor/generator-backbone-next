'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-backbone-next:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({appName: 'test-backbone-nextgen-app'});
  });

  it('creates files', () => {
    // assert.file([
    //   'dummyfile.txt'
    // ]);
  });
});
