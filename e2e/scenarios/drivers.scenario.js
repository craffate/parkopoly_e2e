const helpers = require('../helpers');
const DriversPageObject = require('../page_object/users.pageObject');

describe('Drivers', function() {
  driversPage = new UsersPageObject();

  driverLille = new UsersPageObject();
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


  driverParisDS = new UsersPageObject();
  driverParisDS.values.lname = 'Driver';
  driverParisDS.values.fname = 'Paris';
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
  driverParisDS.values.depositDate = '31/01/2018';
  driverParisDS.values.depositComment = 'Fear is the path to the dark side';

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
});
