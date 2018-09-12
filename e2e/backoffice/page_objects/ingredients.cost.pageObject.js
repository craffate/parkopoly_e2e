const costZone = require('./ingredients.cost.costZone.pageObject');

module.exports = function() {
  this.searchbar = element(by.model('costFormCtrl.selectedObject'));
  this.searchbarInput = this.searchbar.element(by.model('$select.search'));
  this.searchbarDropdown = this.searchbar.element(by.repeater('object in $select.items'));
  this.nameInput = element(by.model('costFormCtrl.newObject.name'));
  this.accountDropdown = element(by.model('costFormCtrl.newObject.accountDtoSet'));
  this.accountDropdownAccounts = element(by.repeater('a in costFormCtrl.all.accounts'));
  this.accountDropdownAccountsAll = element.all(by.repeater('a in costFormCtrl.all.accounts'));
  this.addzoneButton = $('[ng-click="costFormCtrl.addZonedCostType()"]');
  this.zone = element(by.repeater('costType in costFormCtrl.newObject.zonedCostTypeDtoSet'));
  this.zoneAll = element.all(by.repeater('costType in costFormCtrl.newObject.zonedCostTypeDtoSet'));

  this.zoneLast = new costZone(this, this.zoneAll.last());
};
