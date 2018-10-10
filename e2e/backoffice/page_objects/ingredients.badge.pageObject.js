module.exports = function() {
  this.searchbar = element(by.model('badgeFormCtrl.selectedObject'));
  this.searchbarInput = this.searchbar.element(by.model('$select.search'));
  this.searchbarDropdown = element(by.repeater('object in $select.items'));
  this.nameInput = element(by.model('badgeFormCtrl.newObject.name'));
  this.model = $('md-select[name="docBrands"]');
  this.modelDropdown = element(by.repeater('item in $select.items'));
  this.modelDropdownAll = element.all(by.repeater('item in $select.items'));
  this.modelSelectAllButton = $('[ng-click="sm.selectAll()"]');
  this.missions = element(by.model('badgeFormCtrl.newObject.missionFilter.missionTypeEnumSet'));
  this.missionsDropdown = element(by.repeater('type in badgeFormCtrl.all.types'));
  this.missionsDropdownAll = element.all(by.repeater('type in badgeFormCtrl.all.types'));
  this.options = element(by.model('badgeFormCtrl.newObject.missionFilter.optionLabelEnumSet'));
  this.optionsDropdownPickup = element(by.repeater('opt in badgeFormCtrl.all.optionLabels.PICKUP'));
  this.optionsDropdownPickupAll = element.all(by.repeater('opt in badgeFormCtrl.all.optionLabels.PICKUP'));
  this.optionsDropdownVn = element(by.repeater('opt in badgeFormCtrl.all.optionLabels.VN_DELIVERY'));
  this.optionsDropdownVnAll = element.all(by.repeater('opt in badgeFormCtrl.all.optionLabels.VN_DELIVERY'));
  this.optionsDropdownExpress = element(by.repeater('opt in badgeFormCtrl.all.optionLabels.EXPRESS'));
  this.optionsDropdownExpressAll = element.all(by.repeater('opt in badgeFormCtrl.all.optionLabels.EXPRESS'));
  this.optionsDropdownIs = element(by.repeater('opt in badgeFormCtrl.all.optionLabels.INTER_SITE'));
  this.optionsDropdownIsAll = element.all(by.repeater('opt in badgeFormCtrl.all.optionLabels.INTER_SITE'));
  this.bookingcodes = element(by.model('badgeFormCtrl.newObject.missionFilter.bookingCodeSet'));
  this.bookingcodesSearchInput = element(by.model('bcSearch'));
  this.bookingcodesDropdown = element(by.repeater('code in badgeFormCtrl.all.bookingCodes'));
  this.bookingcodesDropdownAll = element.all(by.repeater('code in badgeFormCtrl.all.bookingCodes'));
  this.selectAllCheckbox = $$('md-checkbox[ng-click="sm.handleCheckboxClick()"]')
  this.searchQuery = element.all(by.model('sm.searchQuery'));
};
