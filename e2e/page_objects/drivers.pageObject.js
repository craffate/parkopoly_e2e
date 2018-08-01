const helpers = require('../helpers');

module.exports = function() {
  this.values = {lname: null,
  fname: null,
  email: null,
  address: null,
  phone: null,
  status: null,
  badges: null,
  points: null,
  occupation: null,
  uniform: null,
  comment: null,
  unpaid: null,
  vat: null,
  deposit: null,
  depositDate: null,
  depositComment: null};

  this.url = '/#/drivers';
  this.searchInput = element(by.model('driversCtrl.search'));
  this.createDriverButton = element(by.model('driversCtrl.createDriver()'));
  this.createDriverDialog = element(by.id('create-driver'));
  this.lastNameInput = element(by.model('cdCtrl.newDriver.lastName'));
  this.firstNameInput = element(by.model('cdCtrl.newDriver.firstName'));
  this.emailInput = element(by.model('cdCtrl.newDriver.login'));
  this.addressInput = element(by.model('cdCtrl.newDriver.address'));
  this.telInput = element(by.model('cdCtrl.newDriver.phoneNumber'));
  this.status = element(by.model('cdCtrl.newDriver.statusEnum'));
  this.statusDropdownAll = element(by.repeater('status in cdCtrl.statuses'));
  this.badge = element(by.model('cdCtrl.newDriver.badgeDtoSet'));
  this.badgeDropdownAll = element(by.repeater('item in $select.items'));
  this.pointsInput = element(by.model('cdCtrl.newDriver.points'));
  this.occupation = element(by.model('cdCtrl.newDriver.professionEnum'));
  this.occupationDropdownAll = element(by.repeater('p in $select.items'));
  this.equipmentInput = element(by.model('cdCtrl.newDriver.equipment'));
  this.commentInput = element(by.model('cdCtrl.newDriver.comment'));
  this.unpaidSwitch = element(by.model('cdCtrl.newDriver.missionsNotPaid'));
  this.vatSwitch = element(by.model('cdCtrl.newDriver.subjectToVAT'));
  this.sponsor = element(by.model('cdCtrl.newDriver.sponsorDriverId'));
  this.sponsorDropdownAll = element(by.model('d in $select.items'));
  this.sponsorAmountInput = element(by.model('cdCtrl.newDriver.sponsorAmount'));
  this.sponsorPayDatepicker = element(by.model('cdCtrl.newDriver.sponsorPayedDate'));
  this.sponsorPayInput = this.sponsorPayDatepicker.$('input');
  this.depositInput = element(by.model('cdCtrl.newDriver.depositAmount'));
  this.depositDateDatepicker = element(by.model('cdCtrl.newDriver.depositCashedInDate'));
  this.depositDateInput = this.depositDateDatepicker.$('input');
  this.depositCommentInput = element(by.model('cdCtrl.newDriver.depositComment'));
  this.submitButton = element(by.id('submitButton'));

  this.get = async function() {
    await browser.get(this.url);
    return helpers.waitForSpinner();
  };
};
