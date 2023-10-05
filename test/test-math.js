const chai = require("chai");
const assert = chai.assert;
const math = require("../functions/math");

describe("Math Module", () => {
  describe("Addition", () => {
    it("should return the addition of 2 numbers", () => {
      assert.equal(math.add(2, 3), 5);
      assert.equal(math.add(-1, 1), 0);
      assert.equal(math.add(-1, -1), -2);
      assert.equal(math.add(2.5, 1.5), 4);
      assert.approximately(math.add(0.1, 0.2), 0.3, 0.0001);
    });
  });
  describe("Subtraction", () => {
    it("should return the subtraction of 2 numbers", () => {
      assert.equal(math.subtract(2, 3), -1);
      assert.equal(math.subtract(-1, 1), -2);
      assert.equal(math.subtract(2, 1), 1);
      assert.equal(math.subtract(-1, -1), 0);
      assert.approximately(math.subtract(5.5, 3.2), 2.3, 0.001);
    });
  });
  describe("Multification", () => {
    it("should return the multification of 2 numbers", () => {
      assert.equal(math.multiply(2, 3), 6);
      assert.equal(math.multiply(-1, 1), -1);
      assert.equal(math.multiply(-2, -1), 2);
      assert.equal(math.multiply(0, 3), 0);
      assert.equal(math.multiply(0, 0), 0);
      assert.approximately(math.multiply(2.5, 1.5), 3.75, 0.0001);
      assert.approximately(math.multiply(-1.5, 2.0), -3.0, 0.0001);
      assert.equal(math.multiply(0.0, 4.7), 0);
      assert.equal(math.multiply(5, Infinity), Infinity);
      assert.isNaN(math.multiply(3, NaN));
    });
  });
  describe("Divition", () => {
    it("should return the divition of 2 numbers", () => {
      assert.equal(math.divide(15, 3), 5);
      assert.equal(math.divide(-91, 7), -13);
      assert.equal(math.divide(-25, -5), 5);
      assert.equal(math.divide(10, 0), Infinity);
      assert.equal(math.divide(-10, 0), -Infinity);
      assert.equal(math.divide(0, 10), 0);
      assert.isNaN(math.divide("a", 2));
      assert.isNaN(math.divide(10, "b"));
      assert.isNaN(math.divide("x", "y"));
    });
  });
});
