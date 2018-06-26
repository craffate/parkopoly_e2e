const DashboardIngredientsPenalty = function() {
  this.values = {name: null, factor: null, price: null, delay: null, type: null};

  this.searchbar = element(by.model('penaltyFormCtrl.selectedObject'));
  this.searchbarInput = this.searchbar.element(by.model('$select.search'));
  this.searchbarDropdown = this.searchbar.element(by.repeater('object in $select.items'));
  this.searchbarDropdownAll = this.searchbar.element.all(by.repeater('object in $select.items'));
  this.nameInput = element(by.model('penaltyFormCtrl.newObject.name'));
  this.priceFactorCheckbox = element(by.model('penaltyFormCtrl.newObject.totalMissionPrice'));
  this.priceFactorInput = element(by.model('penaltyFormCtrl.newObject.factor'));
  this.priceInput = element(by.model('penaltyFormCtrl.newObject.cost'));
  this.delayInput = element(by.model('penaltyFormCtrl.newObject.delay'));
  this.type = element(by.model('penaltyFormCtrl.newObject.penaltyTypeEnum'));
  this.typeDropdown = element(by.repeater('type in penaltyFormCtrl.all.penaltyTypes'));
  this.typeDropdownAll = element.all(by.repeater('type in penaltyFormCtrl.all.penaltyTypes'));
};

module.exports = new DashboardIngredientsPenalty();
