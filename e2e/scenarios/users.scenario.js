const helpers = require('../helpers');
const UsersPageObject = require('../page_objects/users.pageObject');

describe('Users', function() {
  usersPage = new UsersPageObject();

  manager_renault = new UsersPageObject();
  manager_renault.values.lname = 'Manager';
  manager_renault.values.fname = 'Renault ' + browser.params.ts;
  manager_renault.values.brandFilter = ['RRG', 'DS'];
  manager_renault.values.email = 'manager_renault' + browser.params.ts + '@e2e.com';
  manager_renault.values.company = 'Renault';
  manager_renault.values.function = 'Manager';
  manager_renault.values.password = 'Renault@123';

  manager_PSA = new UsersPageObject();
  manager_PSA.values.lname = 'Manager';
  manager_PSA.values.fname = 'PSA ' + browser.params.ts;
  manager_PSA.values.brandFilter = ['PSA'];
  manager_PSA.values.email = 'manager_PSA' + browser.params.ts + '@e2e.com';
  manager_PSA.values.company = 'PSA';
  manager_PSA.values.function = 'Manager';
  manager_PSA.values.password = 'PSA@123';

  beforeAll(async function() {
    await usersPage.get();
  });

  describe('manager_renault', function() {
    it('should get to the users\' page', async function() {
      await manager_renault.get();
      await helpers.waitForSpinner();
    });

    it('should open user creation form', async function() {
      await manager_renault.createUserButton.click();
      await helpers.waitFor(manager_renault.createUserDialog, 5000,
      'Couldn\'t open the creation form dialog');
    });

    it('should fill the form', async function() {
      await manager_renault.lnameInput.sendKeys(manager_renault.values.lname);
      await manager_renault.fnameInput.sendKeys(manager_renault.values.fname);
      await manager_renault.emailInput.sendKeys(manager_renault.values.email);
      await manager_renault.companyInput.sendKeys(manager_renault.values.company);
      await manager_renault.functionInput.sendKeys(manager_renault.values.function);
      await manager_renault.passwordInput.sendKeys(manager_renault.values.password);
      await manager_renault.managerRadio.click();
      await manager_renault.brandInput.sendKeys(manager_renault.values.brandFilter[0]);
      await manager_renault.selectAllButton.click();
      await manager_renault.qbookingCheckbox.click();
      await manager_renault.penaltyCheckbox.click();
      await manager_renault.alertCheckbox.click();
    });

    it('should submit the form', async function() {
      await manager_renault.submitButton.click();
      await helpers.waitForNo(manager_renault.createUserDialog, 5000,
      'Couldn\'t close the creation form dialog');
      await helpers.waitForToast();
    });
  });

  describe('manager_PSA', function() {
    it('should get to the users\' page', async function() {
      await manager_renault.get();
      await helpers.waitForSpinner();
    });

    it('should open user creation form', async function() {
      await manager_PSA.createUserButton.click();
      await helpers.waitFor(manager_PSA.createUserDialog, 5000,
      'Couldn\'t open the creation form dialog');
    });

    it('should fill the form', async function() {
      await manager_PSA.lnameInput.sendKeys(manager_PSA.values.lname);
      await manager_PSA.fnameInput.sendKeys(manager_PSA.values.fname);
      await manager_PSA.emailInput.sendKeys(manager_PSA.values.email);
      await manager_PSA.companyInput.sendKeys(manager_PSA.values.company);
      await manager_PSA.functionInput.sendKeys(manager_PSA.values.function);
      await manager_PSA.passwordInput.sendKeys(manager_PSA.values.password);
      await manager_PSA.managerRadio.click();
      await manager_PSA.brandInput.sendKeys(manager_PSA.values.brandFilter[0]);
      await manager_PSA.selectAllButton.click();
      await manager_PSA.qbookingCheckbox.click();
      await manager_PSA.penaltyCheckbox.click();
      await manager_PSA.alertCheckbox.click();
    });

    it('should submit the form', async function() {
      await manager_PSA.submitButton.click();
      await helpers.waitForNo(manager_PSA.createUserDialog, 5000,
      'Couldn\'t close the creation form dialog');
      await helpers.waitForToast();
    });
  });
});
