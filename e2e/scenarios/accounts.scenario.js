const helpers = require('../helpers');
const AccountsPageObject = require('../page_objects/accounts.pageObject');

describe('Accounts', function() {
  const accountsPage = new AccountsPageObject();

  beforeAll(async function() {
    await accountsPage.get();
    await helpers.waitForSpinner();
  });

  dataSpec(require('../data/accounts.scenario.data.json'),
    (data, iteration) => {
    describe(`Create ${data.name} account`, function() {
      it('should fill the account form', async function() {
        await accountsPage.createAccountButton.click();
        await accountsPage.createAccountDialogNameInput.sendKeys(data.name);
        await accountsPage.createAccountDialogChargeInput.sendKeys(data.charge);
        await accountsPage.createAccountDialogContractNumberInput.sendKeys(data.contractNumber);
        await accountsPage.createAccountDialogInvoiceRadioGroup.$$('md-radio-button').first().click();
        await accountsPage.createAccountDialogSubscriptionRadioGroup.$$('md-radio-button').first().click();
        await accountsPage.createAccountDialogContractStartDateDatepicker.$('div > input').sendKeys(data.startDate);
        await accountsPage.createAccountDialogContractEndDateDatepicker.$('div > input').sendKeys(data.endDate);
      });

      it('should submit the form', async function() {
        await accountsPage.createAccountDialogSubmitButton.click();
        await helpers.waitForToast();
      });
    });
  });
});
