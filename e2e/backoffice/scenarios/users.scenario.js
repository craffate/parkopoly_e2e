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
        await usersPage.lnameInput.sendKeys(data.lname + TIMESTAMP);
        await usersPage.fnameInput.sendKeys(data.fname);
        await usersPage.emailInput.sendKeys(data.email + TIMESTAMP);
        await usersPage.companyInput.sendKeys(data.company);
        await usersPage.functionInput.sendKeys(data.function);
        await usersPage.passwordInput.sendKeys(data.password);

        if (data.status === 'USER_ADMIN') {
          await usersPage.adminRadio.click();
        } else if (data.status === 'USER_MANAGER') {
          await usersPage.managerRadio.click();
        } else {
          await usersPage.userRadio.click();
        }

        await helpers.asyncForEach(data.brandFilter, async (s) => {
          let elText;

          await usersPage.brand.click();
          await usersPage.brandInput.sendKeys(s);

          elText = usersPage.brandDropdownAll.first().$('div > span').getText();

          await browser.wait(expect(elText).toContain(s),
          5000, `Search for brand ${s} failed`);
          return usersPage.selectAllButton.click();
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
