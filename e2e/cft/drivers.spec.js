const helpers = require('../helpers');
const DriversPageObject = require('../page_objects/drivers.pageObject');

describe('Parkopoly dashboard drivers page', function() {

  driversPage = new DriversPageObject();
  driversPage.values.lname = browser.params.ts;
  driversPage.values.fname = 'John';
  driversPage.values.email = 'e2e' + browser.params.ts + '@parkopoly.fr';
  driversPage.values.address = '130 rue de Lourmel, Paris';
  driversPage.values.phone = '0601010101';
  driversPage.values.status = 'ACTIVE';
  driversPage.values.badges = [];
  driversPage.values.points = '0';
  driversPage.values.occupation = 'SELF_EMPLOYED';
  driversPage.values.uniform = 'Dark blue vest';
  driversPage.values.comment = 'E2E';
  driversPage.values.unpaid = true;
  driversPage.values.vat = false;
  driversPage.values.deposit = '500';
  driversPage.values.depositDate = '01/01/2018';
  driversPage.values.depositComment = 'E2E';

  beforeAll(async function() {
    await driversPage.get();
  });

  describe('Create driver', function() {
    describe('When landing on the drivers page, check for required elements', function() {
      it('should be on the drivers\' page', async function() {
        await helpers.testUrl(driversPage.url, 120000);
      });

      it('should have a search bar', async function() {
        await expect(driversPage.searchInput.isDisplayed()).toBe(true);
      });

      it('should have a create driver button', async function() {
        await expect(driversPage.createDriverButton.isDisplayed()).toBe(true);
      });
    });

    describe('When required elements are found, create a driver', function() {
      it('should click on the driver creation button', async function() {
        await driversPage.createDriverButton.click();
      });

      it('should open the driver creation dialog', async function() {
        await expect(driversPage.createDriverDialog.isDisplayed()).toBe(true);
      });

      it('should have a last name input', async function() {
        await expect(driversPage.lastNameInput.isDisplayed()).toBe(true);
      });

      it('should have a first name input', async function() {
        await expect(driversPage.firstNameInput.isDisplayed()).toBe(true);
      });

      it('should have an email input', async function() {
        await expect(driversPage.emailInput.isDisplayed()).toBe(true);
      });

      it('should have an address input', async function() {
        await expect(driversPage.addressInput.isDisplayed()).toBe(true);
      });

      it('should have a phone input', async function() {
        await expect(driversPage.telInput.isDisplayed()).toBe(true);
      });

      it('should have a status dropdown menu', async function() {
        await expect(driversPage.status.isDisplayed()).toBe(true);
      });

      it('should have a badge menu', async function() {
        await expect(driversPage.badge.isDisplayed()).toBe(true);
      });

      it('should have a select all badges button', async function() {
        await expect(driversPage.badgeSelectAllButton.isDisplayed()).toBe(true);
      });

      it('should have a points input', async function() {
        await expect(driversPage.pointsInput.isDisplayed()).toBe(true);
      });

      it('should have an occupation dropdown menu', async function() {
        await expect(driversPage.pointsInput.isDisplayed()).toBe(true);
      });

      it('should have an equipment input', async function() {
        await expect(driversPage.equipmentInput.isDisplayed()).toBe(true);
      });

      it('should have a comment input', async function() {
        await expect(driversPage.commentInput.isDisplayed()).toBe(true);
      });

      it('should have an unpaid switch', async function() {
        await expect(driversPage.unpaidSwitch.isDisplayed()).toBe(true);
      });

      it('should have a VAT switch', async function() {
        await expect(driversPage.vatSwitch.isDisplayed()).toBe(true);
      });

      it('should have a sponsor dropdown menu', async function() {
        await expect(driversPage.sponsor.isDisplayed()).toBe(true);
      });

      it('should have a sponsor amount input', async function() {
        await expect(driversPage.sponsorAmountInput.isDisplayed()).toBe(true);
      });

      it('should have a sponsor paid date datepicker', async function() {
        await expect(driversPage.sponsorPayDatepicker.isDisplayed()).toBe(true);
      });

      it('should have a deposit input', async function() {
        await expect(driversPage.depositInput.isDisplayed()).toBe(true);
      });

      it('should have a deposit date datepicker', async function() {
        await expect(driversPage.depositDateDatepicker.isDisplayed()).toBe(true);
      });

      it('should have a deposit comment input', async function() {
        await expect(driversPage.depositCommentInput.isDisplayed()).toBe(true);
      });

      it('should have a submit button', async function() {
        await expect(driversPage.submitButton.isDisplayed()).toBe(true);
      });

      it('should fill the last name input', async function() {
        await driversPage.lastNameInput.sendKeys(driversPage.values.lname);
      });

      it('should fill the first name input', async function() {
        await driversPage.firstNameInput.sendKeys(driversPage.values.fname);
      });

      it('should fill the email input', async function() {
        await driversPage.emailInput.sendKeys(driversPage.values.email);
      });

      it('should fill the address input', async function() {
        await driversPage.addressInput.sendKeys(driversPage.values.address);
      });

      it('should fill the phone input', async function() {
        await driversPage.telInput.sendKeys(driversPage.values.phone);
      });

      it('should click the status dropdown menu', async function() {
        await driversPage.status.click();
      });

      it('should select an option from the status dropdown', async function() {
        driversPage.values.status = await helpers.getFromNonMaterialDropdown(
          driversPage.values.status, 'status', driversPage.statusDropdownAll);
        await driversPage.values.status[0].click();
      });

      /* Needs to be adapted with correct badges */
      it('should click the select all badges button', async function() {
        await driversPage.badgeSelectAllButton.click();
      });

      it('should fill the points input', async function() {
        await driversPage.pointsInput.sendKeys(driversPage.values.points);
      });

      it('should click the occupation dropdown menu', async function() {
        await driversPage.occupation.click();
      });

      it('should select an option from the occupation dropdown', async function() {
        driversPage.values.occupation = await helpers.getFromNonMaterialDropdown(
          driversPage.values.occupation, 'p', driversPage.occupationDropdownAll);
        await driversPage.values.occupation[0].click();
      });

      it('should fill the equipment input', async function() {
        await driversPage.equipmentInput.sendKeys(driversPage.values.uniform);
      });

      it('should fill the comment input', async function() {
        await driversPage.commentInput.sendKeys(driversPage.values.comment);
      });

      it('should set the unpaid switch', async function() {
        await helpers.switchCheckbox(driversPage.unpaidSwitch, driversPage.values.unpaid);
      });

      it('should set the VAT switch', async function() {
        await helpers.switchCheckbox(driversPage.vatSwitch, driversPage.values.vat);
      });

      it('should fill the deposit input', async function() {
        await driversPage.depositInput.sendKeys(driversPage.values.deposit);
      });

      it('should fill the deposit date input', async function() {
        await driversPage.depositDateInput.sendKeys(driversPage.values.depositDate);
      });

      it('should fill the deposit comment input', async function() {
        await driversPage.depositCommentInput.sendKeys(driversPage.values.depositComment);
      });

      it('should click the submit button', async function() {
        await driversPage.submitButton.click();
      });

      it('should wait for the page to load', async function() {
        await helpers.waitForSpinner();
      });

      it('should display a confirmation toast', async function() {
        await helpers.waitForToast();
      });
    });
  });
});
