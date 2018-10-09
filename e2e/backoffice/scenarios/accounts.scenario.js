const helpers = require('../../helpers');
const AccountsPageObject = require('../page_objects/accounts.pageObject');
const specData = require('../data/accounts.scenario.data.json');

describe('Accounts', function() {
  const accountsPage = new AccountsPageObject();

  dataSpec(specData, (data, iteration) => {
    it(`should create ${data.name} account`, async function() {
      await accountsPage.get();
      await helpers.waitForSpinner();
      await accountsPage.createAccountButton.click();
      await accountsPage.createAccountDialogNameInput.sendKeys(data.name + TIMESTAMP);
      await accountsPage.createAccountDialogChargeInput.sendKeys(data.charge);
      await accountsPage.createAccountDialogContractNumberInput.sendKeys(data.contractNumber);
      await accountsPage.createAccountDialogInvoiceRadioGroup.$$('md-radio-button').first().click();
      await accountsPage.createAccountDialogSubscriptionRadioGroup.$$('md-radio-button').first().click();
      await accountsPage.createAccountDialogContractStartDateDatepicker.$('div > input').sendKeys(data.startDate);
      await accountsPage.createAccountDialogContractEndDateDatepicker.$('div > input').sendKeys(data.endDate);
      await accountsPage.createAccountDialogSubmitButton.click();
      await helpers.waitForToast();
      await browser.refresh();
    });
  });
});
