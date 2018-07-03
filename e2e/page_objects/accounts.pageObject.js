module.exports = function() {
  this.values = {name: null, charge: null, invoiceRadio: null, subscriptionRadio: null,
    contractNumber: null, startDate: null, endDate: null, brands: null};

  this.url = 'https://dashboard-dev.parkopoly.fr/#/accounts';
  this.searchBar = element(by.model('$select.search'));
  this.searchBarDropdown = element(by.repeater('item in $select.items'));
  this.searchBarDropdownAll = element.all(by.repeater('item in $select.items'));
  this.selectAllButton = $('[ng-click="sm.selectAll()"]');
  this.toast = $('md-toast');
  this.table = element(by.repeater('account in accountsCtrl.accountsToShow track by $index'));
  this.createAccountButton = $('[ng-click="accountsCtrl.createAccount()"]');
  this.createAccountDialog = $('[aria-describedby="dialogContent_create-account"]');
  this.createAccountDialogCloseButton = this.createAccountDialog.$('[ng-click="caCtrl.cancel()"]');
  this.createAccountDialogNameInput = this.createAccountDialog.element(by.model('caCtrl.account.name'));
  this.createAccountDialogChargeInput = this.createAccountDialog.element(by.model('caCtrl.account.charge'));
  this.createAccountDialogInvoiceRadioGroup = this.createAccountDialog.element(by.model('caCtrl.account.invoiceModeEnum'));
  this.createAccountDialogSubscriptionRadioGroup = this.createAccountDialog.element(by.model('caCtrl.account.invoiceSubscriptionEnum'));
  this.createAccountDialogContractNumberInput = this.createAccountDialog.element(by.model('caCtrl.account.contractNumber'));
  this.createAccountDialogContractStartDateDatepicker = this.createAccountDialog.element(by.model('caCtrl.account.startDate'));
  this.createAccountDialogContractEndDateDatepicker = this.createAccountDialog.element(by.model('caCtrl.account.endDate'));
  this.createAccountDialogBrands = this.createAccountDialog.element(by.model('caCtrl.account.shortBrandDtoSet'));
  this.createAccountDialogBrandsInput = this.createAccountDialogBrands.element(by.model('$select.search'));
  this.createAccountDialogSubmitButton = this.createAccountDialog.$('[type="submit"]');

  this.get = async function() {
    await browser.get(this.url);
  };
};
