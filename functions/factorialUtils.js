// mathUtils.js
module.exports = {
  factorial: (n) => {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * module.exports.factorial(n - 1);
    }
  },
};
