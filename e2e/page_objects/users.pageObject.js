const helpers = require('../helpers');

module.exports = function() {
  this.url = '/#/users';
  this.searchbar = element(by.model('userListCtrl.search'));
  this.createUserButton = $('[ng-click="userListCtrl.createUser()"]');
  this.createUserDialog = element(by.id('create-user'));
  this.lnameInput = element(by.model('createUserCtrl.userModel.lastName'));
  this.fnameInput = element(by.model('createUserCtrl.userModel.firstName'));
  this.emailInput = element(by.model('createUserCtrl.userModel.login'));
  this.companyInput = element(by.model('createUserCtrl.userModel.companyName'));
  this.functionInput = element(by.model('createUserCtrl.userModel.functionName'));
  this.passwordInput = element(by.model('createUserCtrl.userModel.password'));
  this.roleRadioGroup = element(by.model('createUserCtrl.userModel.role'));
  this.brandInput = element(by.model('$select.search'));
  this.brandDropdownAll = element.all(by.repeater('item in $select.items'));
  this.selectAllButton = element(by.id('selectAllButton'));
  this.managerRadio = this.roleRadioGroup.$('[value="USER_MANAGER"]');
  this.userRadio = this.roleRadioGroup.$('[value="USER"]');
  this.adminRadio = this.roleRadioGroup.$('[value="USER_ADMIN"]');
  this.accountableCheckbox = element(by.model('createUserCtrl.userModel.isAccountable'));
  this.qbookingCheckbox = element(by.model('createUserCtrl.userModel.isQuickbooking'));
  this.penaltyCheckbox = element(by.model('createUserCtrl.userModel.emailNotifyForPenalty'));
  this.concessionInput = element(by.model('[name="concession"]'));
  this.alertCheckbox = element(by.model('createUserCtrl.userModel.receiveNotificationEmail'));
  this.cancelButton = element(by.id('cancelButton'));
  this.submitButton = element(by.id('submitButton'));

  this.get = async function() {
    await browser.driver.get(this.url);
    return helpers.waitForSpinner();
  };
};
