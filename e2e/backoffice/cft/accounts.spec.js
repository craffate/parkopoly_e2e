const helpers = require('../../helpers');
const AccountsPageObject = require('../page_objects/accounts.pageObject');

describe('Parkopoly dashboard accounts page', function() {
  DashboardAccounts = new AccountsPageObject();
  DashboardAccounts.values.name = 'Parkopoly_E2E ' + browser.params.ts;
  DashboardAccounts.values.charge = helpers.getRandomInt(5);
  DashboardAccounts.values.contractNumber = browser.params.ts;
  DashboardAccounts.values.startDate = '01/01/2018';
  DashboardAccounts.values.endDate = '01/01/2020';

  beforeAll(async function() {
    await DashboardAccounts.get();
  });

  describe('Create account', function() {
    describe('When landing on the page, check for required elements', function() {
      it('should have a search bar', async function() {
        await expect(DashboardAccounts.searchBar.isDisplayed()).toBe(true);
      });

      it('should have a select all button', async function() {
        await expect(DashboardAccounts.selectAllButton.isDisplayed()).toBe(true);
      });

      it('should have a create account button', async function() {
        await expect(DashboardAccounts.createAccountButton.isDisplayed()).toBe(true);
      });
    });

    describe('When landing on the page, access the account creation dialog and check for required elements', function() {
      it('should click the create account button', async function() {
        await DashboardAccounts.createAccountButton.click();
      });

      it('should have a create account dialog', async function() {
        await expect(DashboardAccounts.createAccountDialog.isDisplayed()).toBe(true);
      });

      it('should have a close button', async function() {
        await expect(DashboardAccounts.createAccountDialogCloseButton.isDisplayed()).toBe(true);
      });

      it('should have a name input', async function() {
        await expect(DashboardAccounts.createAccountDialogNameInput.isDisplayed()).toBe(true);
      });

      it('should have a charge input', async function() {
        await expect(DashboardAccounts.createAccountDialogChargeInput.isDisplayed()).toBe(true);
      });

      it('should have an invoice radio group', async function() {
        await expect(DashboardAccounts.createAccountDialogInvoiceRadioGroup.isDisplayed()).toBe(true);
      });

      it('should have a subscription radio group', async function() {
        await expect(DashboardAccounts.createAccountDialogSubscriptionRadioGroup.isDisplayed()).toBe(true);
      });

      it('should have a contract reference input', async function() {
        await expect(DashboardAccounts.createAccountDialogContractNumberInput.isDisplayed()).toBe(true);
      });

      it('should have a contract start date datepicker', async function() {
        await expect(DashboardAccounts.createAccountDialogContractStartDateDatepicker.isDisplayed()).toBe(true);
      });

      it('should have a contract end date datepicker', async function() {
        await expect(DashboardAccounts.createAccountDialogContractEndDateDatepicker.isDisplayed()).toBe(true);
      });

      it('should have a brands input', async function() {
        await expect(DashboardAccounts.createAccountDialogBrands.isDisplayed()).toBe(true);
      });

      it('should have a submit button', async function() {
        await expect(DashboardAccounts.createAccountDialogSubmitButton.isDisplayed()).toBe(true);
      });
    });

    describe('When the account creation dialog is displayed, fill the form', function() {
      it('should fill the name input', async function() {
        await DashboardAccounts.createAccountDialogNameInput.sendKeys(DashboardAccounts.values.name);
      });


      it('should fill the charge input', async function() {
        await DashboardAccounts.createAccountDialogChargeInput.sendKeys(DashboardAccounts.values.charge);
      });

      it('should click an invoice radio group button', async function() {
        let arr = await DashboardAccounts.createAccountDialogInvoiceRadioGroup.$$('md-radio-button');
        DashboardAccounts.values.invoiceRadio = await helpers.getRandomInt(arr.length);
        await arr[DashboardAccounts.values.invoiceRadio].click();
      });

      it('should click a subscription radio group button', async function() {
        let arr = await DashboardAccounts.createAccountDialogSubscriptionRadioGroup.$$('md-radio-button');
        DashboardAccounts.values.subscriptionRadio = await helpers.getRandomInt(arr.length);
        await arr[DashboardAccounts.values.subscriptionRadio].click();
      });

      it('should fill the contract reference input', async function() {
        await DashboardAccounts.createAccountDialogContractNumberInput.sendKeys(DashboardAccounts.values.contractNumber);
      });

      it('should fill the contract start date input', async function() {
        await DashboardAccounts.createAccountDialogContractStartDateDatepicker.$('div > input').sendKeys(DashboardAccounts.values.startDate);
      });

      it('should fill the contract end date input', async function() {
        await DashboardAccounts.createAccountDialogContractEndDateDatepicker.$('div > input').sendKeys(DashboardAccounts.values.endDate);
      });
    });

    describe('When the account creation dialog form is filled, check if elements are valid', function() {
      it('should consider the name input valid', async function() {
        await expect(DashboardAccounts.createAccountDialogNameInput.getAttribute('aria-invalid')).toBe('false');
      });

      it('should consider the charge input valid', async function() {
        await expect(DashboardAccounts.createAccountDialogChargeInput.getAttribute('aria-invalid')).toBe('false');
      });

      it('should consider the invoice radio group valid', async function() {
        await expect(DashboardAccounts.createAccountDialogInvoiceRadioGroup.getAttribute('aria-invalid')).toBe('false');
      });

      it('should consider the subscription radio group valid', async function() {
        await expect(DashboardAccounts.createAccountDialogSubscriptionRadioGroup.getAttribute('aria-invalid')).toBe('false');
      });

      it('should consider the contract reference input valid', async function() {
        await expect(DashboardAccounts.createAccountDialogContractNumberInput.getAttribute('aria-invalid')).toBe('false');
      });

      it('should consider the contract start date datepicker valid', async function() {
        await expect(DashboardAccounts.createAccountDialogContractStartDateDatepicker.getAttribute('aria-invalid')).toBe('false');
      });

      it('should consider the contract end date datepicker valid', async function() {
        await expect(DashboardAccounts.createAccountDialogContractStartDateDatepicker.getAttribute('aria-invalid')).toBe('false');
      });

      it('should consider the brands valid', async function() {
        await expect(DashboardAccounts.createAccountDialogBrands.getAttribute('aria-invalid')).toBe('false');
      });
    });

    describe('When the account creation dialog form is valid, submit it', function() {
      it('should click the submit button and await expect the account creation dialog to be closed', async function() {
        await DashboardAccounts.createAccountDialogSubmitButton.click();
        await expect(DashboardAccounts.createAccountDialog.isPresent()).toBe(false);
      });
    });

    describe('When the account has been created, search for it', function() {
      it('should refresh the page', async function() {
        await browser.refresh();
      });

      it('should search for the account', async function() {
        await DashboardAccounts.searchBar.sendKeys(DashboardAccounts.values.name);
      });

      it('should click the first result', async function() {
        await DashboardAccounts.searchBarDropdownAll.click();
      });

      it('should display the result in the table', async function() {
        await expect(DashboardAccounts.table.isDisplayed()).toBe(true);
      });
    });
  });
});
