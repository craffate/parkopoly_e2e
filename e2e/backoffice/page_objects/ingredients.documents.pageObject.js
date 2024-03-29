const helpers = require('../../helpers');

module.exports = function() {
  this.selectAllCheckbox = $$('md-checkbox[ng-click="sm.handleCheckboxClick()"]');
  this.searchQuery = element.all(by.model('sm.searchQuery'));

  this.searchbar = element(by.model('documentFormCtrl.selectedObject'));
  this.searchbarInput = this.searchbar.element(by.model('$select.search'));
  this.searchbarDropdown = this.searchbar.element(by.repeater('object in $select.items'));
  this.nameInput = element(by.model('documentFormCtrl.newObject.displayName'));
  this.fileInput = $('input[type="file"]');
  this.uploadButton = element(by.id('docUploader'));
  this.alertNoUploadSwitch = element(by.model('documentFormCtrl.newObject.mandatory'));
  this.displayWebAppSwitch = element(by.model('documentFormCtrl.newObject.displayOnClientWebApp'));
  this.encryptSwitch = element(by.model('documentFormCtrl.newObject.encryptionRequired'));
  this.qualitySwitch = element(by.model('documentFormCtrl.newObject.cleaningIsPossible'));
  this.displayWebAppAfterSwitch = element(by.model('documentFormCtrl.newObject.displayOnClientWebAppWhenFinished'));
  this.missionType = element(by.id('docMissionTypes'));
  this.missionTypeDropdown = element.all(by.repeater('type in documentFormCtrl.all.types'));
  this.options = element(by.model('documentFormCtrl.newObject.missionFilter.optionLabelEnumSet'));
  this.optionsDropdownPickup = element(by.repeater('opt in documentFormCtrl.all.optionLabels.PICKUP'));
  this.optionsDropdownPickupAll = element.all(by.repeater('opt in documentFormCtrl.all.optionLabels.PICKUP'));
  this.optionsDropdownVn = element(by.repeater('opt in documentFormCtrl.all.optionLabels.VN_DELIVERY'));
  this.optionsDropdownVnAll = element.all(by.repeater('opt in documentFormCtrl.all.optionLabels.VN_DELIVERY'));
  this.optionsDropdownExpress = element(by.repeater('opt in documentFormCtrl.all.optionLabels.EXPRESS'));
  this.optionsDropdownExpressAll = element.all(by.repeater('opt in documentFormCtrl.all.optionLabels.EXPRESS'));
  this.optionsDropdownIs = element(by.repeater('opt in documentFormCtrl.all.optionLabels.INTER_SITE'));
  this.optionsDropdownIsAll = element.all(by.repeater('opt in documentFormCtrl.all.optionLabels.INTER_SITE'));
  this.bookingcodes = element(by.id('docBookingCodes'));
};
