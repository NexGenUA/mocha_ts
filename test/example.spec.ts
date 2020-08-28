const assert = require('assert');
import { math } from '../src/sum';

describe('Math functions', function () {
  describe('sum()', function () {
    it('should return number', function () {
      assert.equal(math(2, 2), 4);
    });
  });
});