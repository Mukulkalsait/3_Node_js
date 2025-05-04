module.exports = {
  log: function (message) {
    const timestamp = new Date().toISOString(); // date time now
    console.log(`[${timestamp}] ${message}`); //Y:  - 1.
  },
};

/* NOTE:
 * The function is here to creates logs. with name 'log'
 * 1. will print logs in the furmat like-
 *      [date/time] log message
 **/
