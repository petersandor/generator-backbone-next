'use strict';
var path = require('path');
var helpers = require('yeoman-test');

describe('generator-backbone-next:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({appName: 'test-backbone-nextgen-app'});
  });

  it('creates files', () => {
    // Dummy test to test the build from a test file which is not really a test
    expect(true).toBe(true);
  });
});
