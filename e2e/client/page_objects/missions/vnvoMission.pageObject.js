const step1 = require('./vnvoMission.step1.pageObject.js');
const step2 = require('./vnvoMission.step2.pageObject.js');

module.exports = function(Parent) {
  this.step1 = new step1(this);
};

module.exports = vnvoMission;
