module.exports = function() {
  this.searchbar = element(by.model('brandFormCtrl.selectedObject'));
  this.searchbarInput = this.searchbar.element(by.model('$select.search'));
  this.searchbarDropdown = this.searchbar.element(by.repeater('object in brandFormCtrl.all.brands'));
  this.nameInput = element(by.model('brandFormCtrl.newObject.name'));
  this.colorpicker = element(by.model('brandFormCtrl.newObject.color'));
  this.colorpickerInput = this.colorpicker.element(by.model('value'));
  this.anticipationInput = element(by.model('brandFormCtrl.newObject.miniAnticipation'));
  this.logoSearchbar = element(by.model('brandFormCtrl.newObject.brandLogoDto'));
  this.logoSearchbarInput = this.logoSearchbar.element(by.model('$select.search'));
  this.logoSearchbarDropdown = this.logoSearchbar.element(by.repeater('object in $select.items'));
  this.logoSearchbarDropdownAll = this.logoSearchbar.all(by.repeater('object in $select.items'));
  this.missiontypeDropdown = element(by.model('brandFormCtrl.newObject.missionTypeEnumSet'));
  this.missiontypeDropdownTypes = element(by.repeater('type in brandFormCtrl.all.types'));
  this.missiontypeDropdownTypesAll = element.all(by.repeater('type in brandFormCtrl.all.types'));
  this.accountDropdown = element(by.model('brandFormCtrl.newObject.shortAccountDto'));
  this.accountDropdownInput = element(by.model('brandFormCtrl.searchAccount'));
  this.accountDropdownAccounts = element(by.repeater('account in brandFormCtrl.all.accounts'));
  this.accountDropdownAccountsAll = element.all(by.repeater('account in brandFormCtrl.all.accounts'));
  this.penaltySearchbar = element(by.model('brandFormCtrl.newObject.penaltyDtoSet'));
  this.penaltySearchbarInput = this.penaltySearchbar.element(by.model('$select.search'));
  this.penaltySearchbarDropdown = this.penaltySearchbar.element(by.repeater('object in $select.items'));
  this.penaltySearchbarDropdownAll = this.penaltySearchbar.all(by.repeater('object in $select.items'));
  this.aliasInput = element(by.model('brandFormCtrl.newObject.brandNameForEmailSMS'));
  this.smsOnBookingCheckbox = element(by.model('brandFormCtrl.newObject.notificationOptionDto.sendSmsMissionBooking'));
  this.mailOnBookingCheckbox = element(by.model('brandFormCtrl.newObject.notificationOptionDto.sendEmailAtCommand'));
  this.mailReminderCheckbox = element(by.model('brandFormCtrl.newObject.notificationOptionDto.sendEmailReminder'));
  this.smsReminderCheckbox = element(by.model('brandFormCtrl.newObject.notificationOptionDto.sendSmsReminder'));
  this.smsRatingCheckbox = element(by.model('brandFormCtrl.newObject.ratingSMS'));
};
