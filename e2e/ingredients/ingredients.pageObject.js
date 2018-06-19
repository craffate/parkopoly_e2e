var DashboardIngredients = function() {
  this.model;
  this.mission;
  this.option;
  this.bookingcode;

  this.url = 'https://dashboard-dev.parkopoly.fr/#/ingredients';
  this.searchbar = element(by.model('ingredCtrl.selected'));
  this.searchbarInput = this.searchbar.element(by.model('$select.search'));
  this.searchbarDropdown = element(by.repeater('object in $select.items'));
  this.searchbarDropdownBadge = element(by.repeater('object in $select.items').row(0));
  this.searchbarDropdownBookingCode = element(by.repeater('object in $select.items').row(1));
  this.searchbarDropdownBrand = element(by.repeater('object in $select.items').row(2));
  this.searchbarDropdownCost = element(by.repeater('object in $select.items').row(3));
  this.searchbarDropdownDocument = element(by.repeater('object in $select.items').row(4));
  this.searchbarDropdownLogo = element(by.repeater('object in $select.items').row(5));
  this.searchbarDropdownPenalty = element(by.repeater('object in $select.items').row(6));
  this.submitButton = $('[type="submit"]');
  // Badge form
  this.badgeSearchbar = element(by.model('badgeFormCtrl.selectedObject'));
  this.badgeSearchbarInput = this.badgeSearchbar.element(by.model('$select.search'));
  this.badgeSearchbarDropdown = element(by.repeater('object in badgeFormCtrl.all.badges'));
  this.badgeNameInput = element(by.model('badgeFormCtrl.newObject.name'));
  this.badgeModel = element(by.model('sm.model'));
  this.badgeModelDropdown = element(by.repeater('item in $select.items'));
  this.badgeModelDropdownAll = element.all(by.repeater('item in $select.items'));
  this.badgeMissions = element(by.model('badgeFormCtrl.newObject.missionFilter.missionTypeEnumSet'));
  this.badgeMissionsDropdown = element(by.repeater('type in badgeFormCtrl.all.types'));
  this.badgeMissionsDropdownAll = element.all(by.repeater('type in badgeFormCtrl.all.types'));
  this.badgeOptions = element(by.model('badgeFormCtrl.newObject.missionFilter.optionLabelEnumSet'));
  this.badgeOptionsDropdownPickup = element(by.repeater('opt in badgeFormCtrl.all.optionLabels.PICKUP'));
  this.badgeOptionsDropdownPickupAll = element.all(by.repeater('opt in badgeFormCtrl.all.optionLabels.PICKUP'));
  this.badgeOptionsDropdownVn = element(by.repeater('opt in badgeFormCtrl.all.optionLabels.VN_DELIVERY'));
  this.badgeOptionsDropdownVnAll = element.all(by.repeater('opt in badgeFormCtrl.all.optionLabels.VN_DELIVERY'));
  this.badgeOptionsDropdownExpress = element(by.repeater('opt in badgeFormCtrl.all.optionLabels.EXPRESS'));
  this.badgeOptionsDropdownExpressAll = element.all(by.repeater('opt in badgeFormCtrl.all.optionLabels.EXPRESS'));
  this.badgeOptionsDropdownIs = element(by.repeater('opt in badgeFormCtrl.all.optionLabels.INTER_SITE'));
  this.badgeOptionsDropdownIsAll = element.all(by.repeater('opt in badgeFormCtrl.all.optionLabels.INTER_SITE'));
  this.badgeBookingcodes = element(by.model('badgeFormCtrl.newObject.missionFilter.bookingCodeSet'));
  this.badgeBookingcodesDropdown = element(by.repeater('code in badgeFormCtrl.all.bookingCodes'));
  this.badgeBookingcodesDropdownAll = element.all(by.repeater('code in badgeFormCtrl.all.bookingCodes'));

  this.get = function() {
    browser.get(this.url);
  };
};

module.exports = new DashboardIngredients();
