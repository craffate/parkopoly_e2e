const helpers = require('../helpers');

module.exports = function() {
  this.url = '#/drivers';
  this.searchInput = element(by.model('driversCtrl.search'));
  this.createDriverButton = $('button[ng-click="driversCtrl.createDriver()"]');
  this.createDriverDialog = element(by.id('create-driver'));
  this.lastNameInput = element(by.model('cdCtrl.newDriver.lastName'));
  this.firstNameInput = element(by.model('cdCtrl.newDriver.firstName'));
  this.emailInput = element(by.model('cdCtrl.newDriver.login'));
  this.addressInput = element(by.model('cdCtrl.newDriver.address'));
  this.telInput = element(by.model('cdCtrl.newDriver.phoneNumber'));
  this.status = element(by.model('cdCtrl.newDriver.statusEnum'));
  this.statusDropdownAll = element.all(by.repeater('status in $select.items'));
  this.badge = element(by.id('badges'));
  this.badgeInput = this.badge.$('input');
  this.badgeDropdownAll = element.all(by.repeater('item in $select.items'));
  this.badgeSelectAllButton = element(by.id('badges')).element(by.id('selectAllButton'));
  this.pointsInput = element(by.model('cdCtrl.newDriver.points'));
  this.occupation = element(by.model('cdCtrl.newDriver.professionEnum'));
  this.occupationDropdown= element(by.repeater('p in $select.items'));
  this.occupationDropdownAll = element.all(by.repeater('p in $select.items'));
  this.equipmentInput = element(by.model('cdCtrl.newDriver.equipment'));
  this.commentInput = element(by.model('cdCtrl.newDriver.comment'));
  this.unpaidSwitch = element(by.model('cdCtrl.newDriver.missionsNotPaid'));
  this.vatSwitch = element(by.model('cdCtrl.newDriver.subjectToVAT'));
  this.sponsor = element(by.model('cdCtrl.newDriver.sponsorDriverId'));
  this.sponsorDropdown = element(by.model('d in $select.items'));
  this.sponsorDropdownAll = element.all(by.model('d in $select.items'));
  this.sponsorAmountInput = element(by.model('cdCtrl.newDriver.sponsorAmount'));
  this.sponsorPayDatepicker = element(by.model('cdCtrl.newDriver.sponsorPayedDate'));
  this.sponsorPayInput = this.sponsorPayDatepicker.$('input');
  this.depositInput = element(by.model('cdCtrl.newDriver.depositAmount'));
  this.depositDateDatepicker = element(by.model('cdCtrl.newDriver.depositCashedInDate'));
  this.depositDateInput = this.depositDateDatepicker.$('input');
  this.depositCommentInput = element(by.model('cdCtrl.newDriver.depositComment'));
  this.submitButton = element(by.id('submitButton'));

  this.get = async function() {
    await browser.driver.get(browser.baseUrl + this.url);
    return helpers.waitForSpinner();
  };
};
