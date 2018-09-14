const helpers = require('../../helpers');
const UsersPageObject = require('../page_objects/users.pageObject');
const specData = require('../data/users.scenario.data.json');

describe('Users', function() {
  const usersPage = new UsersPageObject();

  dataSpec(specData, (data, iteration) => {
    describe(`Create ${data.firstName} ${data.lastName} user`, function() {
      it(`should login as ${data.credsLogin[0]}`, async function() {
        await helpers.loginClient(data.credsLogin[0] + TIMESTAMP, data.credsLogin[1]);
      });

      it('should navigate to the users page', async function() {
        await usersPage.getClick();
        await helpers.waitForNo(usersPage.spinner);
      });

      it('should open the user creation dialog', async function() {
        await usersPage.newuserButton.click();
        await helpers.waitForVisibility(usersPage.dialog);
        await helpers.waitForNo(usersPage.spinner);
      });

      it('should fill the form', async function() {
        await usersPage.selectFunction(data.function);
        await usersPage.lastnameInput.sendKeys(data.lastName + TIMESTAMP);
        await usersPage.firstnameInput.sendKeys(data.firstName);
        await usersPage.emailInput.sendKeys(data.email + TIMESTAMP);
        await usersPage.companyInput.sendKeys(data.company);
        await usersPage.functionInput.sendKeys(data.function);

        await helpers.asyncForEach(data.brands, async (s) => {
          const EC = protractor.ExpectedConditions;

          await usersPage.brandSelect.click();
          await usersPage.brandSelectSearch.sendKeys(s);
          await browser.wait(EC.textToBePresentInElement(
            usersPage.brandFirstResult.$('span'), s),
            500, `Search for brand ${s} failed`);
          return usersPage.brandSelectSelectallButton.click();
        });

        await helpers.asyncForEach(data.concessions, async (s) => {
          const EC = protractor.ExpectedConditions;

          await usersPage.concessionSelect.click();
          await usersPage.concessionSelectSearch.sendKeys(s);
          await browser.wait(EC.textToBePresentInElement(
            usersPage.concessionFirstResult.$('span'), s),
            500, `Search for concession ${s} failed`);
          return usersPage.concessionSelectSelectallButton.click();
        });

        if (data.quickbooking === true) {
          await usersPage.quickbookingCheckbox.click();
        };

        if (data.notifications === true) {
          await usersPage.notificationsCheckbox.click();
        };

        if (data.emailNotifications === true) {
          await usersPage.emailCheckbox.click();
        };
      });

      it('should submit the form', async function() {
        await usersPage.createButton.click();
        await helpers.waitForNo(usersPage.spinner);
        await helpers.waitForNoVisibility(usersPage.dialog);
      });
    });
  });
});
