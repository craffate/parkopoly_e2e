module.exports = function() {
  this.searchbar = element(by.model('bookingCodeFormCtrl.selectedObject'));
  this.searchbarInput = this.searchbar.element(by.model('$select.search'));
  this.searchbarDropdown = this.searchbar.element(by.repeater('object in $select.items'));
  this.nameInput = element(by.model('bookingCodeFormCtrl.newObject.name'));
  this.expirationDatepicker = element(by.model('bookingCodeFormCtrl.newObject.expirationDate'));
  this.expirationDatepickerInput = element(by.model('bookingCodeFormCtrl.newObject.expirationDate')).$('input');
  this.driverSalaryFactorInput = element(by.model('bookingCodeFormCtrl.newObject.driverSalaryFactor'));
  this.driverSalaryAddonInput = element(by.model('bookingCodeFormCtrl.newObject.driverSalaryAddOn'));
};
