const helpers = require('../../helpers');
const UsersPageObject = require('../page_objects/users.pageObject');
const specData = require('../data/users.scenario.data.json');

describe('Users', function() {
  const usersPage = new UsersPageObject();

  beforeAll(async function() {
    await usersPage.get();
    await helpers.waitForSpinner();
  });

  dataSpec(specData, (data, iteration) => {
    describe(`Create ${data.lname} ${data.fname} user`, function() {
      it('should open user creation form', async function() {
        await usersPage.createUserButton.click();
        await helpers.waitFor(usersPage.createUserDialog, 5000,
          'Couldn\'t open the creation form dialog');
      });

      it('should fill the form', async function() {
        await usersPage.lnameInput.sendKeys(data.lname);
        await usersPage.fnameInput.sendKeys(data.fname);
        await usersPage.emailInput.sendKeys(data.email + TIMESTAMP);
        await usersPage.companyInput.sendKeys(data.company);
        await usersPage.functionInput.sendKeys(data.function);
        await usersPage.passwordInput.sendKeys(data.password);

        if (data.status === "USER_ADMIN") {
          usersPage.adminRadio.click();
        } else if (data.status === "USER_MANAGER") {
          usersPage.managerRadio.click();
        } else {
          usersPage.userRadio.click();
        }

        helpers.asyncForEach(data.brandFilter, async (s) => {
          let el;

          el = await helpers.getFromDropdown(s, usersPage.brandDropdownAll);
          await usersPage.brandDropdown.click();
          await helpers.scrollIntoView(el);
          await el.click();
        });

        await helpers.switchCheckbox(usersPage.accountableCheckbox, data.accountable);
        await helpers.switchCheckbox(usersPage.qbookingCheckbox, data.quickbook);
        await helpers.switchCheckbox(usersPage.penaltyCheckbox, data.penalty);
        await helpers.switchCheckbox(usersPage.alertCheckbox, data.alert);
      });

      it('should submit the form', async function() {
        await usersPage.submitButton.click();
        await helpers.waitForNo(usersPage.createUserDialog, 5000,
          'Couldn\'t close the creation form dialog');
        await helpers.waitForToast();
      });
    });
  });
});
