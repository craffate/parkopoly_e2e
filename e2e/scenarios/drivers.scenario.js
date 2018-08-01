const helpers = require('../helpers');
const DriversPageObject = require('../page_object/users.pageObject');

describe('Drivers', function() {
  driversPage = new UsersPageObject();

  driverLille = new UsersPageObject();
  driverLille.values.lname = 'Driver';
  driverLille.values.fname = 'Lille';
  driverLille.values.email = 'driver' + browser.params.ts + '@parkopoly.fr';
  driverLille.values.address = 'Lille, France';
  driverLille.values.phone = '0101010101';
  driverLille.values.status = 'ACTIVE';
  driverLille.values.badges = [];
  driverLille.values.points = '3';
  driverLille.values.occupation = 'SELF_EMPLOYED';
  driverLille.values.uniform = 'White shirt, black pants';
  driverLille.values.comment = 'Thinks the Earth is flat';
  driverLille.values.unpaid = true;
  driverLille.values.vat = false;
  driverLille.values.deposit = '500';
  driverLille.values.depositDate = '01/01/2018';
  driverLille.values.depositComment = 'There is no spoon';


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
});
