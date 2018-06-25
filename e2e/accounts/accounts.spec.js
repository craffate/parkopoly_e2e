const helpers = require('../helpers');
const DashboardAccounts = require('./accounts.pageObject');

describe('Parkopoly dashboard accounts page', function() {
  debugger;
  ts = Date.now();

  beforeAll(function() {
    DashboardAccounts.get();
  });

  describe('Create account', function() {
    describe('When landing on the page, check for required elements', function() {
      it('should have a search bar', function() {
        expect(DashboardAccounts.searchBar.isDisplayed()).toBe(true);
      });

      it('should have a select all button', function() {
        expect(DashboardAccounts.selectAllButton.isDisplayed()).toBe(true);
      });

      it('should have a create account button', function() {
        expect(DashboardAccounts.createAccountButton.isDisplayed()).toBe(true);
      });
    });

    describe('When landing on the page, access the account creation dialog and check for required elements', function() {
      it('should click the create account button', function() {
        DashboardAccounts.createAccountButton.click();
      });

      it('should have a create account dialog', function() {
        expect(DashboardAccounts.createAccountDialog.isDisplayed()).toBe(true);
      });

      it('should have a close button', function() {
        expect(DashboardAccounts.createAccountDialogCloseButton.isDisplayed()).toBe(true);
      });

      it('should have a name input', function() {
        expect(DashboardAccounts.createAccountDialogNameInput.isDisplayed()).toBe(true);
      });

      it('should have a charge input', function() {
        expect(DashboardAccounts.createAccountDialogChargeInput.isDisplayed()).toBe(true);
      });

      it('should have an invoice radio group', function() {
        expect(DashboardAccounts.createAccountDialogInvoiceRadioGroup.isDisplayed()).toBe(true);
      });

      it('should have a subscription radio group', function() {
        expect(DashboardAccounts.createAccountDialogSubscriptionRadioGroup.isDisplayed()).toBe(true);
      });

      it('should have a contract reference input', function() {
        expect(DashboardAccounts.createAccountDialogContractNumberInput.isDisplayed()).toBe(true);
      });

      it('should have a contract start date datepicker', function() {
        expect(DashboardAccounts.createAccountDialogContractStartDateDatepicker.isDisplayed()).toBe(true);
      });

      it('should have a contract end date datepicker', function() {
        expect(DashboardAccounts.createAccountDialogContractEndDateDatepicker.isDisplayed()).toBe(true);
      });

      it('should have a brands input', function() {
        expect(DashboardAccounts.createAccountDialogBrands.isDisplayed()).toBe(true);
      });

      it('should have a submit button', function() {
        expect(DashboardAccounts.createAccountDialogSubmitButton.isDisplayed()).toBe(true);
      });
    });

    describe('When the account creation dialog is displayed, fill the form', function() {
      it('should fill the name input', function() {
        DashboardAccounts.name = 'Parkopoly_E2E ' + ts;
        DashboardAccounts.createAccountDialogNameInput.sendKeys(DashboardAccounts.name);
      });


      it('should fill the charge input', function() {
        DashboardAccounts.charge = helpers.getRandomInt(5);
        DashboardAccounts.createAccountDialogChargeInput.sendKeys(DashboardAccounts.charge);
      });

      it('should click an invoice radio group button', function() {
        DashboardAccounts.createAccountDialogInvoiceRadioGroup.$$('md-radio-button').then(function(arr) {
          DashboardAccounts.invoiceRadio = helpers.getRandomInt(arr.length);
          arr[DashboardAccounts.invoiceRadio].click();
        });
      });

      it('should click a subscription radio group button', function() {
        DashboardAccounts.createAccountDialogSubscriptionRadioGroup.$$('md-radio-button').then(function(arr) {
          DashboardAccounts.subscriptionRadio = helpers.getRandomInt(arr.length);
          arr[DashboardAccounts.subscriptionRadio].click();
        });
      });

      it('should fill the contract reference input', function() {
        DashboardAccounts.contractNumber = ts;
        DashboardAccounts.createAccountDialogContractNumberInput.sendKeys(DashboardAccounts.contractNumber);
      });
      
      it('should fill the contract start date input', function() {
        DashboardAccounts.startDate = '01/01/2018';
        DashboardAccounts.createAccountDialogContractStartDateDatepicker.$('div > input').sendKeys(DashboardAccounts.startDate);
      });

      it('should fill the contract end date input', function() {
        DashboardAccounts.endDate = '01/01/2020';
        DashboardAccounts.createAccountDialogContractEndDateDatepicker.$('div > input').sendKeys(DashboardAccounts.endDate);
      });
    });

    describe('When the account creation dialog form is filled, check if elements are valid', function() {
      it('should consider the name input valid', function() {
        expect(DashboardAccounts.createAccountDialogNameInput.getAttribute('aria-invalid')).toBe('false');
      });

      it('should consider the charge input valid', function() {
        expect(DashboardAccounts.createAccountDialogChargeInput.getAttribute('aria-invalid')).toBe('false');
      });

      it('should consider the invoice radio group valid', function() {
        expect(DashboardAccounts.createAccountDialogInvoiceRadioGroup.getAttribute('aria-invalid')).toBe('false');
      });

      it('should consider the subscription radio group valid', function() {
        expect(DashboardAccounts.createAccountDialogSubscriptionRadioGroup.getAttribute('aria-invalid')).toBe('false');
      });

      it('should consider the contract reference input valid', function() {
        expect(DashboardAccounts.createAccountDialogContractNumberInput.getAttribute('aria-invalid')).toBe('false');
      });

      it('should consider the contract start date datepicker valid', function() {
        expect(DashboardAccounts.createAccountDialogContractStartDateDatepicker.getAttribute('aria-invalid')).toBe('false');
      });

      it('should consider the contract end date datepicker valid', function() {
        expect(DashboardAccounts.createAccountDialogContractStartDateDatepicker.getAttribute('aria-invalid')).toBe('false');
      });

      it('should consider the brands valid', function() {
        expect(DashboardAccounts.createAccountDialogBrands.getAttribute('aria-invalid')).toBe('false');
      });
    });
  
    describe('When the account creation dialog form is valid, submit it', function() {
      it('should click the submit button and expect the account creation dialog to be closed', function() {
        DashboardAccounts.createAccountDialogSubmitButton.click().then(function() {
          expect(DashboardAccounts.createAccountDialog.isPresent()).toBe(false);
        });
      });
    });

    describe('When the account has been created, search for it', function() {
      it('should refresh the page', function() {
        browser.refresh();
      });

      it('should search for the account', async function() {
        await DashboardAccounts.searchBar.sendKeys(DashboardAccounts.name);
      });

      it('should click the first result', function() {
        DashboardAccounts.searchBarDropdownAll.click();
      });

      it('should display the result in the table', function() {
        expect(DashboardAccounts.table.isDisplayed()).toBe(true);
      });
    });
  });
});
