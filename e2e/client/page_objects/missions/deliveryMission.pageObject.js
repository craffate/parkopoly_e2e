const step1 = require('./deliveryMission.step1.pageObject');
const step2 = require('./deliveryMission.step2.pageObject');
const step3 = require('./deliveryMission.step3.pageObject');
const step4 = require('./deliveryMission.step4.pageObject');
const step5 = require('./deliveryMission.step5.pageObject');
const step6 = require('./deliveryMission.step6.pageObject');

module.exports = function(Parent) {
  this.step1 = new step1(this);
  this.step2 = new step2(this);
  this.step3 = new step3(this);
  this.step4 = new step4(this);
  this.step5 = new step5(this);
  this.step6 = new step6(this);
};

module.exports = deliveryMission;
