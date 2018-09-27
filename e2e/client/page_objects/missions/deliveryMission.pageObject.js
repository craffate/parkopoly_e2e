const step1 = require('./deliveryMission.step1.pageObject');
const step2 = require('./deliveryMission.step1.pageObject');

module.exports = function(Parent) {
  this.step1 = new step1(this);
};

module.exports = deliveryMission;
