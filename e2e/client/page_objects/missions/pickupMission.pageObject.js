const step1 = require('./pickupMission.step1.pageObject');
const step2 = require('./pickupMission.step2.pageObject');

module.exports = function(Parent) {
  this.step1 = new step1(this);
  this.step2 = new step2(this);
};

module.exports = pickupMission;
