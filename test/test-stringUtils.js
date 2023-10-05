// test/test-stringUtils.js
const chai = require("chai");
const assert = chai.assert;
const stringUtils = require("../stringUtils"); // Path to your stringUtils.js module

describe("String Utils", () => {
  describe("reverseString()", () => {
    it("should reverse a string", () => {
      assert.equal(stringUtils.reverseString("hello"), "olleh");
      assert.equal(stringUtils.reverseString("world"), "dlrow");
    });
    it("should return an empty string if input is empty", () => {
      assert.equal(stringUtils.reverseString(""), "");
    });
    it("should not take array element ", () => {
      assert.throws(() => stringUtils.reverseString([hello, array], Error));
    });
    it("should not take number element", () => {
      assert.throws(() => stringUtils.reverseString(790898, Error));
    });
    it("should reverse a string with special characters", () => {
      assert.equal(stringUtils.reverseString("!@#abc123"), "321cba#@!");
    });
    it("should reverse a string with spaces", () => {
      assert.equal(stringUtils.reverseString("hello world"), "dlrow olleh");
    });
    it("should reverse a string with mixed cases", () => {
      assert.equal(stringUtils.reverseString("MiXeD CaSe"), "eSaC DeXiM");
    });
    it("should throw an error for null input", () => {
      assert.throws(() => stringUtils.reverseString(null), Error);
    });

    it("should throw an error for undefined input", () => {
      assert.throws(() => stringUtils.reverseString(undefined), Error);
    });

    it("should throw an error for numeric input", () => {
      assert.throws(() => stringUtils.reverseString(12345), Error);
    });

    it("should throw an error for non-string objects", () => {
      assert.throws(() => stringUtils.reverseString({}), Error);
      assert.throws(() => stringUtils.reverseString([]), Error);
      assert.throws(() => stringUtils.reverseString(() => {}), Error);
    });
  });
});
