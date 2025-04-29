/* 1.older EXPLICIT method;
 *
 * var exports = modules.exports{};
 * exports.addNumber= function(a,b){ return a+b;};
 *
 *  Y: newer method
 * */

module.exports = {
  addNumber: function (a, b) {
    return a + b;
  },
  subNumber: function (a, b) {
    return a - b;
  },
  multiplyNumber: function (a, b) {
    return a * b;
  },
  divideNumber: function (a, b) {
    return a / b;
  },
};
