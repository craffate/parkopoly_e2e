module.exports = function() {
  this.searchbar = element(by.model('penaltyFormCtrl.selectedObject'));
  this.searchbarInput = this.searchbar.element(by.model('$select.search'));
  this.searchbarDropdown = this.searchbar.element(by.repeater('object in $select.items'));
  this.searchbarDropdownAll = this.searchbar.all(by.repeater('object in $select.items'));
  this.nameInput = element(by.model('penaltyFormCtrl.newObject.name'));
  this.priceFactorCheckbox = element(by.model('penaltyFormCtrl.newObject.totalMissionPrice'));
  this.priceFactorInput = element(by.model('penaltyFormCtrl.newObject.factor'));
  this.priceInput = element(by.model('penaltyFormCtrl.newObject.cost'));
  this.delayInput = element(by.model('penaltyFormCtrl.newObject.delay'));
  this.type = element(by.model('penaltyFormCtrl.newObject.penaltyTypeEnum'));
  this.typeDropdownResults = element.all(by.repeater('type in penaltyFormCtrl.all.penaltyTypes'));
};
