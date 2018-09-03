const helpers = require('../../helpers');
const AccountsPageObject = require('../page_objects/accounts.pageObject');
const specData = require('../data/accounts.cft.data.json');

describe('Parkopoly dashboard accounts page', function() {
  const accountsPage = new AccountsPageObject();

  dataSpec(specData, (data, iteration) => {
    describe('Create account', function() {
      describe('When landing on the landing page, it should get to the accounts page', function() {
        it('should access the page by navigating to the URL', async function() {
          await accountsPage.get();
        });
      });

      describe('When landing on the page, check for required elements', function() {
        it('should have a search bar', async function() {
          await expect(accountsPage.searchBar.isDisplayed()).toBe(true);
        });

        it('should have a select all button', async function() {
          await expect(accountsPage.selectAllButton.isDisplayed()).toBe(true);
        });

        it('should have a create account button', async function() {
          await expect(accountsPage.createAccountButton.isDisplayed()).toBe(true);
        });
      });

      describe('When landing on the page, access the account creation dialog and check for required elements', function() {
        it('should click the create account button', async function() {
          await accountsPage.createAccountButton.click();
        });

        it('should have a create account dialog', async function() {
          await expect(accountsPage.createAccountDialog.isDisplayed()).toBe(true);
        });

        it('should have a close button', async function() {
          await expect(accountsPage.createAccountDialogCloseButton.isDisplayed()).toBe(true);
        });

        it('should have a name input', async function() {
          await expect(accountsPage.createAccountDialogNameInput.isDisplayed()).toBe(true);
        });

        it('should have a charge input', async function() {
          await expect(accountsPage.createAccountDialogChargeInput.isDisplayed()).toBe(true);
        });

        it('should have an invoice radio group', async function() {
          await expect(accountsPage.createAccountDialogInvoiceRadioGroup.isDisplayed()).toBe(true);
        });

        it('should have a subscription radio group', async function() {
          await expect(accountsPage.createAccountDialogSubscriptionRadioGroup.isDisplayed()).toBe(true);
        });

        it('should have a contract reference input', async function() {
          await expect(accountsPage.createAccountDialogContractNumberInput.isDisplayed()).toBe(true);
        });

        it('should have a contract start date datepicker', async function() {
          await expect(accountsPage.createAccountDialogContractStartDateDatepicker.isDisplayed()).toBe(true);
        });

        it('should have a contract end date datepicker', async function() {
          await expect(accountsPage.createAccountDialogContractEndDateDatepicker.isDisplayed()).toBe(true);
        });

        it('should have a brands input', async function() {
          await expect(accountsPage.createAccountDialogBrands.isDisplayed()).toBe(true);
        });

        it('should have a submit button', async function() {
          await expect(accountsPage.createAccountDialogSubmitButton.isDisplayed()).toBe(true);
        });
      });

      describe('When the account creation dialog is displayed, fill the form', function() {
        it('should fill the name input', async function() {
          await accountsPage.createAccountDialogNameInput.sendKeys(`${data.name} ${TIMESTAMP}`);
        });


        it('should fill the charge input', async function() {
          await accountsPage.createAccountDialogChargeInput.sendKeys(data.charge);
        });

        it('should click an invoice radio group button', async function() {
          const el = await helpers.getFromInvoiceGroup(data.invoiceMode, accountsPage.createAccountDialogInvoiceRadioGroupAll);
          await el[0].click();
        });

        it('should click a subscription radio group button', async function() {
          const el = await helpers.getFromInvoiceGroup(data.invoiceSub, accountsPage.createAccountDialogSubscriptionRadioGroupAll);
          await el[0].click();
        });

        it('should fill the contract reference input', async function() {
          await accountsPage.createAccountDialogContractNumberInput.sendKeys(data.contractNum + TIMESTAMP);
        });

        it('should fill the contract start date input', async function() {
          await accountsPage.createAccountDialogContractStartDateDatepicker.$('div > input').sendKeys(data.startDate);
        });

        it('should fill the contract end date input', async function() {
          await accountsPage.createAccountDialogContractEndDateDatepicker.$('div > input').sendKeys(data.endDate);
        });
      });

      describe('When the account creation dialog form is filled, check if elements are valid', function() {
        it('should consider the name input valid', async function() {
          await expect(accountsPage.createAccountDialogNameInput.getAttribute('aria-invalid')).toBe('false');
        });

        it('should consider the charge input valid', async function() {
          await expect(accountsPage.createAccountDialogChargeInput.getAttribute('aria-invalid')).toBe('false');
        });

        it('should consider the invoice radio group valid', async function() {
          await expect(accountsPage.createAccountDialogInvoiceRadioGroup.getAttribute('aria-invalid')).toBe('false');
        });

        it('should consider the subscription radio group valid', async function() {
          await expect(accountsPage.createAccountDialogSubscriptionRadioGroup.getAttribute('aria-invalid')).toBe('false');
        });

        it('should consider the contract reference input valid', async function() {
          await expect(accountsPage.createAccountDialogContractNumberInput.getAttribute('aria-invalid')).toBe('false');
        });

        it('should consider the contract start date datepicker valid', async function() {
          await expect(accountsPage.createAccountDialogContractStartDateDatepicker.getAttribute('aria-invalid')).toBe('false');
        });

        it('should consider the contract end date datepicker valid', async function() {
          await expect(accountsPage.createAccountDialogContractStartDateDatepicker.getAttribute('aria-invalid')).toBe('false');
        });

        it('should consider the brands valid', async function() {
          await expect(accountsPage.createAccountDialogBrands.getAttribute('aria-invalid')).toBe('false');
        });
      });

      describe('When the account creation dialog form is valid, submit it', function() {
        it('should click the submit button and await expect the account creation dialog to be closed', async function() {
          await accountsPage.createAccountDialogSubmitButton.click();
          await expect(accountsPage.createAccountDialog.isPresent()).toBe(false);
        });
      });

      describe('When the account has been created, search for it', function() {
        it('should refresh the page', async function() {
          await browser.refresh();
        });

        it('should search for the account', async function() {
          await accountsPage.searchBar.sendKeys(data.name);
        });

        it('should click the first result', async function() {
          await accountsPage.searchBarDropdownAll.click();
        });

        it('should display the result in the table', async function() {
          await expect(accountsPage.table.isDisplayed()).toBe(true);
        });
      });
    });
  });
});
