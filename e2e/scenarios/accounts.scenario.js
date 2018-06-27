const helpers = require('../helpers');
const Renault = require('../page_objects/accounts.pageObject');
const DS = require('../page_objects/accounts.pageObject');

describe('Accounts', function() {
  Renault.values.name = 'Renault ' + browser.params.ts;
  Renault.values.charge = '2.5';
  Renault.values.invoiceRadio = Renault.createAccountDialogInvoiceRadioGroup.$$('md-radio-button');
  Renault.values.subscriptionRadio = Renault.createAccountDialogSubscriptionRadioGroup.$$('md-radio-button');
  Renault.values.contractNumber = browser.params.ts.toString();
  Renault.values.startDate = '01/01/2018';
  Renault.values.endDate = '01/01/2020';

  DS.values.name = 'DS ' + browser.params.ts;
  DS.values.charge = '2.5';
  DS.values.invoiceRadio = DS.createAccountDialogInvoiceRadioGroup.$$('md-radio-button');
  DS.values.subscriptionRadio = DS.createAccountDialogSubscriptionRadioGroup.$$('md-radio-button');
  DS.values.contractNumber = browser.params.ts.toString();
  DS.values.startDate = '01/01/2018';
  DS.values.endDate = '01/01/2020';

  describe('Create Renault account', function() {
    it('should get to the accounts page', function() {
      Renault.get();
    });

    it('should fill the account form', function() {
      Renault.createAccountButton.click();
      Renault.createAccountDialogNameInput.sendKeys(Renault.values.name);
      Renault.createAccountDialogChargeInput.sendKeys(Renault.values.charge);
      Renault.values.invoiceRadio.get(0).click();
      Renault.values.subscriptionRadio.get(0).click();
      Renault.createAccountDialogContractNumberInput.sendKeys(Renault.values.contractNumber);
      Renault.createAccountDialogContractStartDateDatepicker.$('div > input').sendKeys(Renault.values.startDate);
      Renault.createAccountDialogContractEndDateDatepicker.$('div > input').sendKeys(Renault.values.endDate);
    });

    it('should submit the form', function() {
      Renault.createAccountDialogSubmitButton.click().then(function() {
        expect(Renault.createAccountDialog.isPresent()).toBe(false);
      });
    });

    describe('Create DS account', function() {
      it('should get to the accounts page', function() {
        DS.get();
      });

      it('should fill the account form', function() {
        DS.createAccountButton.click();
        DS.createAccountDialogNameInput.sendKeys(DS.values.name);
        DS.createAccountDialogChargeInput.sendKeys(DS.values.charge);
        DS.values.invoiceRadio.get(0).click();
        DS.values.subscriptionRadio.get(0).click();
        DS.createAccountDialogContractNumberInput.sendKeys(DS.values.contractNumber);
        DS.createAccountDialogContractStartDateDatepicker.$('div > input').sendKeys(DS.values.startDate);
        DS.createAccountDialogContractEndDateDatepicker.$('div > input').sendKeys(DS.values.endDate);
      });

      it('should submit the form', function() {
        DS.createAccountDialogSubmitButton.click().then(function() {
          expect(DS.createAccountDialog.isPresent()).toBe(false);
        });
      });
    });
  });
});
