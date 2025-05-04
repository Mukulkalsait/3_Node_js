const colors = require('chalk');

require('colors');

module.exports = {
  success: (msg) => console.log(`🟢 ${msg}`.green),
  error: (msg) => console.log(`🔴 ${msg}`.red),
  warn: (msg) => console.log(`🟡 ${msg}`.yellow),
  info: (msg) => console.log(`🔵 ${msg}`.blue),
};
