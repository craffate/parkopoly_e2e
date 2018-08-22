const helpers = require('../helpers');

module.exports = function() {
  this.url = '#/admin_point_of_sales_list';
  this.pointOfSaleButton = element(by.id('concessionsTopCard')).$('button');
  this.pointOfSaleGroupButton = element(by.id('concessionGroupsTopCard')).$('button');
  this.filterInput = element(by.model('poslCtrl.search'));
  this.createPointOfSaleButton = $('[ng-click="poslCtrl.createPointOfSales()"]');
  this.createPointOfSaleDialog = element(by.id('create-point-of-sale'));
  this.pointOfSaleAddressInput = element(by.model('cposAdminCtrl.pointOfSales.address'));
  this.pointOfSaleNameInput = element(by.model('cposAdminCtrl.pointOfSales.name'));
  this.pointOfSalePhoneInput = element(by.model('cposAdminCtrl.pointOfSales.phoneNumberForCustomer'));
  this.pointOfSaleShortNameInput = element(by.model('cposAdminCtrl.pointOfSales.shortName'));
  this.pointOfSaleShortBonusInput = element(by.model('cposAdminCtrl.pointOfSales.bonusDriverSalary'));
  this.pointOfSaleActiveSwitch = element(by.model('cposAdminCtrl.pointOfSales.available'));
  this.pointOfSaleCity = element(by.model('cposAdminCtrl.pointOfSales.cityId'));
  this.pointOfSaleGroup = element(by.model('cposAdminCtrl.pointOfSales.concessionGroupId'));
  this.pointOfSaleGroupInput = this.pointOfSaleGroup.$('input');
  this.pointOfSaleMessageInput = element(by.model('cposAdminCtrl.pointOfSales.standardMessageForDriver'));
  this.pointOfSaleDay = element(by.model('day.name'));
  this.pointOfSaleDayInput = this.pointOfSaleDay.$('input');
  this.pointOfSaleDayStartInput = element(by.model('day.start'));
  this.pointOfSaleDayEndInput = element(by.model('day.stop'));
  this.pointOfSaleDayPauseCheckbox = element(by.model('day.pauseFlag'));
  this.pointOfSaleDayPauseStartInput = element(by.model('day.pauseStart'));
  this.pointOfSaleDayPauseEndInput = element(by.model('day.pauseStop'));
  this.pointOfSaleAnnualPudInput = element(by.model('cposAdminCtrl.pointOfSales.annualPudEstimate'));
  this.pointOfSaleAnnualVnInput = element(by.model('cposAdminCtrl.pointOfSales.annualVnEstimate'));
  this.pointOfSaleAnnualVoInput = element(by.model('cposAdminCtrl.pointOfSales.annualVoEstimate'));
  this.pointOfSaleAnnualCommentInput = element(by.model('cposAdminCtrl.pointOfSales.commentEstimate'));
  this.pointOfSaleSubmitButtom = element(by.id('submitButton'));

  this.createPointOfSaleGroupButton = $('poslCtrl.createConcessionGroup()');
  this.createPointOfSaleGroupDialog = element(by.id('create-concession-group'));
  this.pointOfSaleGroupNameInput = element(by.model('ccgCtrl.concessionGroup.name'));
  this.pointOfSaleGroupList = element(by.id('point-of-sale-select'));
  this.pointOfSaleGroupListInput = this.pointOfSaleGroupList.$('input');
  this.pointOfSaleGroupListSelectAllButton = this.pointOfSaleGroupList.element(by.id('toggleFilteredItems()'));
  this.pointOfSaleGroupUsers = element(by.model('ccgCtrl.concessionGroup.userSet'));
  this.pointOfSaleGroupUsersInput = this.pointOfSaleGroupUsers.$('input');
  this.pointOfSaleGroupSubmitButton = element(by.id('submitButton'));

  this.get = async function() {
    await browser.driver.get(browser.baseUrl + this.url);
    return helpers.waitForSpinner();
  }
};
