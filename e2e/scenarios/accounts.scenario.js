const helpers = require('../helpers');
const AccountsPageObject = require('../page_objects/accounts.pageObject');

describe('Accounts', function() {
  Renault = new AccountsPageObject();
  Renault.values.name = 'Renault ' + browser.params.ts;
  Renault.values.charge = '2.5';
  Renault.values.invoiceRadio = Renault.createAccountDialogInvoiceRadioGroup.$$('md-radio-button');
  Renault.values.subscriptionRadio = Renault.createAccountDialogSubscriptionRadioGroup.$$('md-radio-button');
  Renault.values.contractNumber = browser.params.ts.toString();
  Renault.values.startDate = '01/01/2018';
  Renault.values.endDate = '01/01/2020';

  DS = new AccountsPageObject();
  DS.values.name = 'DS ' + browser.params.ts;
  DS.values.charge = '2.5';
  DS.values.invoiceRadio = DS.createAccountDialogInvoiceRadioGroup.$$('md-radio-button');
  DS.values.subscriptionRadio = DS.createAccountDialogSubscriptionRadioGroup.$$('md-radio-button');
  DS.values.contractNumber = browser.params.ts.toString();
  DS.values.startDate = '01/01/2018';
  DS.values.endDate = '01/01/2020';

  describe('Create Renault account', function() {
    it('should get to the accounts page', async function() {
      await Renault.get();
    });

    it('should fill the account form', async function() {
      await Renault.createAccountButton.click();
      await Renault.createAccountDialogNameInput.sendKeys(Renault.values.name);
      await Renault.createAccountDialogChargeInput.sendKeys(Renault.values.charge);
      await Renault.values.invoiceRadio.get(0).click();
      await Renault.values.subscriptionRadio.get(0).click();
      await Renault.createAccountDialogContractNumberInput.sendKeys(Renault.values.contractNumber);
      await Renault.createAccountDialogContractStartDateDatepicker.$('div > input').sendKeys(Renault.values.startDate);
      await Renault.createAccountDialogContractEndDateDatepicker.$('div > input').sendKeys(Renault.values.endDate);
    });

    it('should submit the form', async function() {
      await Renault.createAccountDialogSubmitButton.click();
    });
  });

  describe('Create DS account', function() {
    it('should get to the accounts page', async function() {
      await DS.get();
    });

    it('should fill the account form', async function() {
      await DS.createAccountButton.click();
      await DS.createAccountDialogNameInput.sendKeys(DS.values.name);
      await DS.createAccountDialogChargeInput.sendKeys(DS.values.charge);
      await DS.values.invoiceRadio.get(0).click();
      await DS.values.subscriptionRadio.get(0).click();
      await DS.createAccountDialogContractNumberInput.sendKeys(DS.values.contractNumber);
      await DS.createAccountDialogContractStartDateDatepicker.$('div > input').sendKeys(DS.values.startDate);
      await DS.createAccountDialogContractEndDateDatepicker.$('div > input').sendKeys(DS.values.endDate);
    });

    it('should submit the form', async function() {
      await DS.createAccountDialogSubmitButton.click();
    });
  });
});
