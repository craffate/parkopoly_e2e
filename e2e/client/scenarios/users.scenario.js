const helpers = require('../../helpers');
const UsersPageObject = require('../page_objects/users.pageObject');
const specData = require('../data/users.scenario.data.json');

describe('Users', function() {
  const usersPage = new UsersPageObject();

  dataSpec(specData, (data, iteration) => {
    describe(`Create ${data.firstName} ${data.lastName} user`, function() {
      it('should navigate to the users page', async function() {
        await usersPage.getClick();
      });

      it('should open the user creation dialog', async function() {
        await usersPage.newuserButton.click();
      });

      it('should fill the form', async function() {
        await usersPage.lastnameInput.sendKeys(data.lastName + TIMESTAMP);
        await usersPage.firstnameInput.sendKeys(data.firstName);
        await usersPage.emailInput.sendKeys(data.email + TIMESTAMP);
        await usersPage.companyInput.sendKeys(data.company);
        await usersPage.functionInput.sendKeys(data.function);
        await usersPage.brandSelect.click();
        await usersPage.brandSelectSearch.sendKeys(data.brands[0]);
        await usersPage.brandSelectSelectallButton.click();
        await usersPage.concessionSelect.click();
        await usersPage.concessionSelectSearch.sendKeys(data.concessions[0]);
        await usersPage.concessionSelectSelectallButton.click();

        if (data.notifications === true) {
          await usersPage.notificationsCheckbox.click();
        };

        if (data.emailNotifications === true) {
          await usersPage.emailCheckbox.click();
        };
      });

      it('should submit the form', async function() {
        await usersPage.createButton.click();
      });
    });
  });
});
