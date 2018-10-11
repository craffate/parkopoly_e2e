module.exports = function() {
  this.nameInput = element(by.model('penaltyFormCtrl.newObject.name'));
  this.priceFactorCheckbox = element(by.model('penaltyFormCtrl.newObject.totalMissionPrice'));
  this.priceFactorInput = element(by.model('penaltyFormCtrl.newObject.factor'));
  this.priceInput = element(by.model('penaltyFormCtrl.newObject.cost'));
  this.delayInput = element(by.model('penaltyFormCtrl.newObject.delay'));
  this.type = element(by.model('penaltyFormCtrl.newObject.penaltyTypeEnum'));
  this.typeDropdown = element.all(by.repeater('type in penaltyFormCtrl.all.penaltyTypes'));
};
