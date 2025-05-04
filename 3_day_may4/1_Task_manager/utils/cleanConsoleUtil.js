const colors = require('chalk');

const log = {
  success: (msg) => console.log(colors.green(`🟢 ${msg}`)),
  error: (msg) => console.log(colors.red(`🔴 ${msg}`)),
  warn: (msg) => console.log(colors.yellow(`🟡 ${msg}`)),
  info: (msg) => console.log(colors.blue(`🔵 ${msg}`)),
};

module.exports = log;
