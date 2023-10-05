// test/test-palindromeUtils.js
const chai = require("chai");
const assert = chai.assert;
const palindromeUtils = require("../palindromeUtils"); // Path to your palindromeUtils.js module

describe("Palindrome Utils", () => {
  describe("isPalindrome()", () => {
    it("should correctly identify palindromes", () => {
      assert.isTrue(palindromeUtils.isPalindrome("racecar"));
      assert.isTrue(
        palindromeUtils.isPalindrome("A man a plan a canal Panama")
      );
    });

    it("should return false for non-palindromes", () => {
      assert.isFalse(palindromeUtils.isPalindrome("hello"));
      assert.isFalse(palindromeUtils.isPalindrome("world"));
    });
  });
});
