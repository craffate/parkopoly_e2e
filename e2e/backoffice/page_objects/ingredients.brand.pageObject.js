const helpers = require('../../helpers');

module.exports = function() {
  this.searchQuery = element.all(by.model('sm.searchQuery'));
  this.selectAllCheckbox = $$('md-checkbox[ng-click="sm.handleCheckboxClick()"]');

  this.searchbar = element(by.model('brandFormCtrl.selectedObject'));
  this.searchbarInput = this.searchbar.element(by.model('$select.search'));
  this.searchbarDropdown = this.searchbar.element(by.repeater('object in brandFormCtrl.all.brands'));
  this.nameInput = element(by.model('brandFormCtrl.newObject.name'));
  this.colorpicker = element(by.model('brandFormCtrl.newObject.color'));
  this.colorpickerInput = this.colorpicker.element(by.model('value'));
  this.anticipationInput = element(by.model('brandFormCtrl.newObject.miniAnticipation'));
  this.logoSearchbar = element(by.model('brandFormCtrl.newObject.brandLogoDto'));
  this.logoSearchbarInput = this.logoSearchbar.element(by.model('$select.search'));
  this.logoSearchbarDropdownResults = element.all(by.repeater('object in brandFormCtrl.all.logos'));
  this.missiontype = element(by.model('brandFormCtrl.newObject.missionTypeEnumSet'));
  this.missiontypeDropdown = element.all(by.repeater('type in brandFormCtrl.all.types'));
  this.account = element(by.model('brandFormCtrl.newObject.shortAccountDto'));
  this.accountDropdown = element.all(by.repeater('account in brandFormCtrl.all.accounts'));
  this.penalties = element(by.id('brandPenalties'));
  this.aliasInput = element(by.model('brandFormCtrl.newObject.brandNameForEmailSMS'));
  this.smsOnBookingCheckbox = element(by.model('brandFormCtrl.newObject.notificationOptionDto.sendSmsMissionBooking'));
  this.mailOnBookingCheckbox = element(by.model('brandFormCtrl.newObject.notificationOptionDto.sendEmailAtCommand'));
  this.mailReminderCheckbox = element(by.model('brandFormCtrl.newObject.notificationOptionDto.sendEmailReminder'));
  this.smsReminderCheckbox = element(by.model('brandFormCtrl.newObject.notificationOptionDto.sendSmsReminder'));
  this.smsRatingCheckbox = element(by.model('brandFormCtrl.newObject.ratingSMS'));
};
