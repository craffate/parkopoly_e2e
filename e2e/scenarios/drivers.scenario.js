const helpers = require('../helpers');
const DriversPageObject = require('../page_objects/drivers.pageObject');

describe('Drivers', function() {
  driversPage = new DriversPageObject();

  driverLille = new DriversPageObject();
  driverLille.values.lname = 'Driver';
  driverLille.values.fname = 'Lille';
  driverLille.values.email = 'driver_lille' + browser.params.ts + '@parkopoly.fr';
  driverLille.values.address = 'Lille, France';
  driverLille.values.phone = '0101010101';
  driverLille.values.status = 'ACTIVE';
  driverLille.values.badges = [];
  driverLille.values.points = '0';
  driverLille.values.occupation = 'SELF_EMPLOYED';
  driverLille.values.uniform = 'White shirt, black pants';
  driverLille.values.comment = 'Thinks the Earth is flat';
  driverLille.values.unpaid = true;
  driverLille.values.vat = false;
  driverLille.values.deposit = '500';
  driverLille.values.depositDate = '01/01/2018';
  driverLille.values.depositComment = 'There is no spoon';

  driverParisDS = new DriversPageObject();
  driverParisDS.values.lname = 'Driver';
  driverParisDS.values.fname = 'Paris DS';
  driverParisDS.values.email = 'driver_paris_ds_pude' + browser.params.ts + '@parkopoly.fr';
  driverParisDS.values.address = '130 Rue de Lourmel';
  driverParisDS.values.phone = '0101010101';
  driverParisDS.values.status = 'ACTIVE';
  driverParisDS.values.badges = ['DS'];
  driverParisDS.values.points = '0';
  driverParisDS.values.occupation = 'SELF_EMPLOYED';
  driverParisDS.values.uniform = 'White shirt, black pants';
  driverParisDS.values.comment = 'Used to be a Shaolin monk';
  driverParisDS.values.unpaid = true;
  driverParisDS.values.vat = false;
  driverParisDS.values.deposit = '1500';
  driverParisDS.values.depositDate = '12/04/2018';
  driverParisDS.values.depositComment = 'Fear is the path to the dark side';

  driverParisRenault = new DriversPageObject();
  driverParisRenault.values.lname = 'Driver';
  driverParisRenault.values.fname = 'Paris Renault';
  driverParisRenault.values.email = 'driver_paris_vn_renault' + browser.params.ts + '@parkopoly.fr';
  driverParisRenault.values.address = '130 Rue de Lourmel';
  driverParisRenault.values.phone = '0101010101';
  driverParisRenault.values.status = 'ACTIVE';
  driverParisRenault.values.badges = ['Renault'];
  driverParisRenault.values.points = '0';
  driverParisRenault.values.occupation = 'SELF_EMPLOYED';
  driverParisRenault.values.uniform = 'White shirt, black pants';
  driverParisRenault.values.comment = 'Can\'t count past 34';
  driverParisRenault.values.unpaid = true;
  driverParisRenault.values.vat = false;
  driverParisRenault.values.deposit = '1500';
  driverParisRenault.values.depositDate = '28/01/2018';
  driverParisRenault.values.depositComment = 'UNLIMITED POWER!';

  driverParisAll = new DriversPageObject();
  driverParisAll.values.lname = 'Driver';
  driverParisAll.values.fname = 'Paris All';
  driverParisAll.values.email = 'driver_paris_all' + browser.params.ts + '@parkopoly.fr';
  driverParisAll.values.address = '130 Rue de Lourmel';
  driverParisAll.values.phone = '0101010101';
  driverParisAll.values.status = 'ACTIVE';
  driverParisAll.values.badges = [];
  driverParisAll.values.points = '0';
  driverParisAll.values.occupation = 'SELF_EMPLOYED';
  driverParisAll.values.uniform = 'White shirt, black pants';
  driverParisAll.values.comment = 'Likes blue berries';
  driverParisAll.values.unpaid = true;
  driverParisAll.values.vat = false;
  driverParisAll.values.deposit = '1500';
  driverParisAll.values.depositDate = '28/01/2018';
  driverParisAll.values.depositComment = 'It\'s over Anakin! I have the high ground!';

  beforeAll(async function() {
    await driversPage.get();
  });

  describe('driverLille', function() {
    it('should open the driver creation dialog', async function() {
      await driverLille.createDriverButton.click();
      await helpers.waitFor(driverLille.createDriverDialog, 5000,
      'Couldn\'t open the creation form dialog');
    });

    it('should fill the form', async function() {
      await driverLille.lastNameInput.sendKeys(driverLille.values.lname);
      await driverLille.firstNameInput.sendKeys(driverLille.values.fname);
      await driverLille.emailInput.sendKeys(driverLille.values.email);
      await driverLille.addressInput.sendKeys(driverLille.values.address);
      await driverLille.telInput.sendKeys(driverLille.values.phone);
      await driverLille.status.click();
      driverLille.values.status = await helpers.getFromDropdown(
        driverLille.values.status, driverLille.statusDropdownAll);
      await driverLille.values.status.click();
      await driverLille.pointsInput.sendKeys(driverLille.values.points);
      await driverLille.occupation.click();
      driverLille.values.occupation = await helpers.getFromDropdown(
        driverLille.values.occupation, driverLille.statusDropdownAll);
      await driverLille.equipmentInput.sendKeys(driverLille.values.uniform);
      await driverLille.commentInput.sendKeys(driverLille.values.comment);
      await helpers.switchCheckbox(driverLille.unpaidSwitch, driverLille.values.unpaid);
      await helpers.switchCheckbox(driverLille.vatSwitch, driverLille.values.vat);
      await driverLille.depositInput.sendKeys(driverLille.values.deposit);
      await driverLille.depositDateInput.sendKeys(driverLille.values.depositDate);
      await driverLille.depositCommentInput.sendKeys(driverLille.values.depositComment);
    });

    it('should submit the form', async function() {
      await driverLille.submitButton.click();
      await helpers.waitForNo(driverLille.createDriverDialog, 5000,
      'Couldn\'t close the creation form dialog');
    });
  });

  describe('driverParis_DS-PUDE', function() {
    it('should open the driver creation dialog', async function() {
      await driverParisDS.createDriverButton.click();
      await helpers.waitFor(driverParisDS.createDriverDialog, 5000,
      'Couldn\'t open the creation form dialog');
    });

    it('should fill the form', async function() {
      await driverParisDS.lastNameInput.sendKeys(driverParisDS.values.lname);
      await driverParisDS.firstNameInput.sendKeys(driverParisDS.values.fname);
      await driverParisDS.emailInput.sendKeys(driverParisDS.values.email);
      await driverParisDS.addressInput.sendKeys(driverParisDS.values.address);
      await driverParisDS.telInput.sendKeys(driverParisDS.values.phone);
      await driverParisDS.status.click();
      driverParisDS.values.status = await helpers.getFromDropdown(
        driverParisDS.values.status, driverParisDS.statusDropdownAll);
      await driverParisDS.values.status.click();
      await driverParisDS.badgeInput.sendKeys(driverParisDS.values.badge[0]);
      await driverParisDS.badgeSelectAllButton.click();
      await driverParisDS.pointsInput.sendKeys(driverParisDS.values.points);
      await driverParisDS.occupation.click();
      driverParisDS.values.occupation = await helpers.getFromDropdown(
        driverParisDS.values.occupation, driverParisDS.statusDropdownAll);
      await driverParisDS.equipmentInput.sendKeys(driverParisDS.values.uniform);
      await driverParisDS.commentInput.sendKeys(driverParisDS.values.comment);
      await helpers.switchCheckbox(driverParisDS.unpaidSwitch, driverParisDS.values.unpaid);
      await helpers.switchCheckbox(driverParisDS.vatSwitch, driverParisDS.values.vat);
      await driverParisDS.depositInput.sendKeys(driverParisDS.values.deposit);
      await driverParisDS.depositDateInput.sendKeys(driverParisDS.values.depositDate);
      await driverParisDS.depositCommentInput.sendKeys(driverParisDS.values.depositComment);
    });

    it('should submit the form', async function() {
      await driverParisDS.submitButton.click();
      await helpers.waitForNo(driverParisDS.createDriverDialog, 5000,
      'Couldn\'t close the creation form dialog');
    });
  });

  describe('driverParis_Renault-VN', function() {
    it('should open the driver creation dialog', async function() {
      await driverParisRenault.createDriverButton.click();
      await helpers.waitFor(driverParisRenault.createDriverDialog, 5000,
      'Couldn\'t open the creation form dialog');
    });

    it('should fill the form', async function() {
      await driverParisRenault.lastNameInput.sendKeys(driverParisRenault.values.lname);
      await driverParisRenault.firstNameInput.sendKeys(driverParisRenault.values.fname);
      await driverParisRenault.emailInput.sendKeys(driverParisRenault.values.email);
      await driverParisRenault.addressInput.sendKeys(driverParisRenault.values.address);
      await driverParisRenault.telInput.sendKeys(driverParisRenault.values.phone);
      await driverParisRenault.status.click();
      driverParisRenault.values.status = await helpers.getFromDropdown(
        driverParisRenault.values.status, driverParisRenault.statusDropdownAll);
      await driverParisRenault.values.status.click();
      await driverParisRenault.badgeInput.sendKeys(driverParisRenault.values.badge[0]);
      await driverParisRenault.badgeSelectAllButton.click();
      await driverParisRenault.pointsInput.sendKeys(driverParisRenault.values.points);
      await driverParisRenault.occupation.click();
      driverParisRenault.values.occupation = await helpers.getFromDropdown(
        driverParisRenault.values.occupation, driverParisRenault.statusDropdownAll);
      await driverParisRenault.equipmentInput.sendKeys(driverParisRenault.values.uniform);
      await driverParisRenault.commentInput.sendKeys(driverParisRenault.values.comment);
      await helpers.switchCheckbox(driverParisRenault.unpaidSwitch, driverParisRenault.values.unpaid);
      await helpers.switchCheckbox(driverParisRenault.vatSwitch, driverParisRenault.values.vat);
      await driverParisRenault.depositInput.sendKeys(driverParisRenault.values.deposit);
      await driverParisRenault.depositDateInput.sendKeys(driverParisRenault.values.depositDate);
      await driverParisRenault.depositCommentInput.sendKeys(driverParisRenault.values.depositComment);
    });

    it('should submit the form', async function() {
      await driverParisRenault.submitButton.click();
      await helpers.waitForNo(driverParisRenault.createDriverDialog, 5000,
      'Couldn\'t close the creation form dialog');
    });
  });

  describe('driverParis_All', function() {
    it('should open the driver creation dialog', async function() {
      await driverParisAll.createDriverButton.click();
      await helpers.waitFor(driverParisAll.createDriverDialog, 5000,
      'Couldn\'t open the creation form dialog');
    });

    it('should fill the form', async function() {
      await driverParisAll.lastNameInput.sendKeys(driverParisAll.values.lname);
      await driverParisAll.firstNameInput.sendKeys(driverParisAll.values.fname);
      await driverParisAll.emailInput.sendKeys(driverParisAll.values.email);
      await driverParisAll.addressInput.sendKeys(driverParisAll.values.address);
      await driverParisAll.telInput.sendKeys(driverParisAll.values.phone);
      await driverParisAll.status.click();
      driverParisAll.values.status = await helpers.getFromDropdown(
        driverParisAll.values.status, driverParisAll.statusDropdownAll);
      await driverParisAll.values.status.click();
      await driverParisAll.badgeSelectAllButton.click();
      await driverParisAll.pointsInput.sendKeys(driverParisAll.values.points);
      await driverParisAll.occupation.click();
      driverParisAll.values.occupation = await helpers.getFromDropdown(
        driverParisAll.values.occupation, driverParisAll.statusDropdownAll);
      await driverParisAll.equipmentInput.sendKeys(driverParisAll.values.uniform);
      await driverParisAll.commentInput.sendKeys(driverParisAll.values.comment);
      await helpers.switchCheckbox(driverParisAll.unpaidSwitch, driverParisAll.values.unpaid);
      await helpers.switchCheckbox(driverParisAll.vatSwitch, driverParisAll.values.vat);
      await driverParisAll.depositInput.sendKeys(driverParisAll.values.deposit);
      await driverParisAll.depositDateInput.sendKeys(driverParisAll.values.depositDate);
      await driverParisAll.depositCommentInput.sendKeys(driverParisAll.values.depositComment);
    });

    it('should submit the form', async function() {
      await driverParisAll.submitButton.click();
      await helpers.waitForNo(driverParisAll.createDriverDialog, 5000,
      'Couldn\'t close the creation form dialog');
    });
  });
});
