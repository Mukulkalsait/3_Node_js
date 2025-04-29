/* 1.older EXPLICIT method;
 * var exports = modules.exports{};
 * exports.addNumber= function(a,b){ return a+b;};
 *  Y: newer method
 * */

module.exports = {
  addTwoNumber: function (a, b) {
    return a + b;
  },
  subTwoNumber: function (a, b) {
    return a - b;
  },
  multiplyTwoNumber: function (a, b) {
    return a * b;
  },
  divideTwoNumber: function (a, b) {
    return a / b;
  },
};
