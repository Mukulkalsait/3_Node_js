var Tutor = require('./1_tutorial.js');

exports.NodeTutorial = function () {
  console.log('Node Tutorial ');

  function pTutor() {
    Tutor.tutorial();

    // Y: extended version.
    // var P_Tutor = Tutor;
    // P_Tutor.tutorial();
  }
  // Y: Function pTutor is calling tutorial function from another module.
  // Here fun name is pTutor and variable is P_Tutor.

  this.pTutor = pTutor;
  // Y: Exposed pTutor so that it can be called from outside.
};
