module.exports = function() {
  this.values = {name: null};

  this.url = 'https://dashboard-' + browser.params.env + '.parkopoly.fr/#/users';
  this.searchbar = element(by.model('userListCtrl.search'));
  this.createUserButton = $('[ng-click="userListCtrl.createUser()"]');
  this.lnameInput = element(by.model('createUserCtrl.userModel.lastName'));
  this.fnameInput = element(by.model('createUserCtrl.userModel.firstName'));
  this.emailInput = element(by.model('createUserCtrl.userModel.login'));
  this.companyInput = element(by.model('createUserCtrl.userModel.companyName'));
  this.functionInput = element(by.model('createUserCtrl.userModel.functionName'));
  this.passwordInput = element(by.model('createUserCtrl.userModel.password'));
  this.roleRadioGroup = element(by.model('createUserCtrl.userModel.role'))
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
};