const helpers = require('../../helpers');
const UsersPageObject = require('../page_objects/users/main.pageObject');
const specData = require('../data/users.scenario.data.json');

describe('Users', function() {
  const usersPage = new UsersPageObject();

  dataSpec(specData, (data, iteration) => {
    it(`Create ${data.firstName} ${data.lastName} user`, async function() {
      await helpers.loginClient(data.credsLogin[0] + TIMESTAMP, data.credsLogin[1]);
      await usersPage.getClick();
      await helpers.waitForNo(usersPage.spinner);
      await usersPage.newuserButton.click();
      await helpers.waitForVisibility(usersPage.dialog);
      await helpers.waitForNo(usersPage.spinner);
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
      await usersPage.createButton.click();
      await helpers.waitForNo(usersPage.spinner);
      await helpers.waitForNoVisibility(usersPage.dialog);
    });
  });
});
