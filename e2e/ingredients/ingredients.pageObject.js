var DashboardIngredients = function() {
  this.model;
  this.mission;
  this.option;
  this.bookingcode;

  this.url = 'https://dashboard-dev.parkopoly.fr/#/ingredients';
  this.toast = $('md-toast');
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
  // Booking codes form
  this.bcSearchbar = element(by.model('bookingCodeFormCtrl.selectedObject'));
  this.bcSearchbarInput = this.bcSearchbar.element(by.model('$select.search'));
  this.bcSearchbarDropdown = this.bcSearchbar.element(by.repeater('object in bookingCodeFormCtrl.all.bookingCodes'));
  this.bcNameInput = element(by.model('bookingCodeFormCtrl.newObject.name'));
  this.bcExpirationDatepicker = element(by.model('bookingCodeFormCtrl.newObject.expirationDate'));
  this.bcDriverSalaryFactorInput = element(by.model('bookingCodeFormCtrl.newObject.driverSalaryFactor'));
  this.bcDriverSalaryAddonInput = element(by.model('bookingCodeFormCtrl.newObject.driverSalaryAddOn'));
  // Brand form
  this.brandSearchbar = element(by.model('brandFormCtrl.selectedObject'));
  this.brandSearchbarInput = this.brandSearchbar.element(by.model('$select.search'));
  this.brandSearchbarDropdown = this.brandSearchbar.element(by.repeater('object in brandFormCtrl.all.brands'));
  this.brandNameInput = element(by.model('brandFormCtrl.newObject.name'));
  this.brandColorpicker = element(by.model('brandFormCtrl.newObject.color'));
  this.brandColorpickerInput = this.brandColorpicker.element(by.model('value'));
  this.brandAnticipationInput = element(by.model('brandFormCtrl.newObject.miniAnticipation'));
  this.brandLogoSearchbar = element(by.model('brandFormCtrl.newObject.brandLogoDto'));
  this.brandLogoSearchbarInput = this.brandLogoSearchbar.element(by.model('$select.search'));
  this.brandLogoSearchbarDropdown = this.brandSearchbar.element(by.repeater('object in brandFormCtrl.all.logos'));
  this.brandMissiontypeDropdown = element(by.model('brandFormCtrl.newObject.missionTypeEnumSet'));
  this.brandMissiontypeDropdownTypes = element(by.repeater('type in brandFormCtrl.all.types'));
  this.brandMissiontypeDropdownAll = element.all(by.repeater('type in brandFormCtrl.all.types'));
  this.brandAccountDropdown = element(by.model('brandFormCtrl.newObject.shortAccountDto'));
  this.brandAccountDropdownInput = element(by.model('brandFormCtrl.searchAccount'));
  this.brandAccountDropdownAccounts = element(by.repeater('account in brandFormCtrl.all.accounts'));
  this.brandAccountDropdownAccountsAll = element.all(by.repeater('account in brandFormCtrl.all.accounts'));
  this.brandPenaltySearchbar = element(by.model('brandFormCtrl.newObject.penaltyDtoSet'));
  this.brandPenaltySearchbarInput = this.brandPenaltySearchbar.element(by.model('$select.search'));
  this.brandPenaltySearchbarDropdown = this.brandPenaltySearchbar.element(by.repeater('object in brandFormCtrl.all.penalties'));
  this.brandAliasInput = element(by.model('brandFormCtrl.newObject.brandNameForEmailSMS'));
  this.brandSmsonbookingCheckbox = element(by.model('brandFormCtrl.newObject.notificationOptionDto.sendSmsMissionBooking'));
  this.brandMailonbookingCheckbox = element(by.model('brandFormCtrl.newObject.notificationOptionDto.sendEmailAtCommand'));
  this.brandMailreminderCheckbox = element(by.model('brandFormCtrl.newObject.notificationOptionDto.sendEmailReminder'));
  this.brandSmsreminderCheckbox = element(by.model('brandFormCtrl.newObject.notificationOptionDto.sendSmsReminder'));

  this.get = function() {
    browser.get(this.url);
  };
};

module.exports = new DashboardIngredients();
