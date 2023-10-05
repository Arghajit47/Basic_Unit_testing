// test/test-mathUtils.js
const chai = require("chai");
const assert = chai.assert;
const mathUtils = require("../functions/factorialUtils"); // Path to your mathUtils.js module

describe("Math Utils", () => {
  describe("factorial()", () => {
    it("should calculate the factorial of a positive integer", () => {
      assert.equal(mathUtils.factorial(5), 120);
      assert.equal(mathUtils.factorial(0), 1);
    });

    it("should return 1 for factorial of 1", () => {
      assert.equal(mathUtils.factorial(1), 1);
    });
  });
});
