const helpers = require('../helpers');
const EC = protractor.ExpectedConditions;
const IngredientsPageObject = require('../page_objects/ingredients.pageObject');
const BcPageObject = require('../page_objects/ingredients.bc.pageObject');

describe('Booking codes', function() {
  DashboardIngredients = new IngredientsPageObject();

  dfl = new BcPageObject();
  dfl.values.name = 'dfl ' + browser.params.ts;
  dfl.values.expiry = '01/01/2020';
  dfl.values.salary = '1';
  dfl.values.salaryAdd = '0';

  f100 = new BcPageObject();
  f100.values.name = 'f100 ' + browser.params.ts;
  f100.values.expiry = '01/01/2020';
  f100.values.salary = '100';
  f100.values.salaryAdd = '0';

  equal1000 = new BcPageObject();
  equal1000.values.name = 'equal1000 ' + browser.params.ts;
  equal1000.values.expiry = '01/01/2020';
  equal1000.values.salary = '0';
  equal1000.values.salaryAdd = '1000';

  obsolete = new BcPageObject();
  obsolete.values.name = 'obsolete ' + browser.params.ts;
  obsolete.values.expiry = '01/01/2017';
  obsolete.values.salary = '0';
  obsolete.values.salaryAdd = '1000';

  describe('Create dfl booking code', function() {
    it('should get to the ingredients page', async function() {
      await DashboardIngredients.get();
    });

    it('should select the booking codes option from the searchbar', async function() {
      await DashboardIngredients.searchbar.click();
      await DashboardIngredients.searchbarDropdownBookingcode.click();
    });

    it('should fill the booking code form', async function() {
      await dfl.nameInput.sendKeys(dfl.values.name);
      await dfl.expirationDatepickerInput.sendKeys(dfl.values.expiry);
      await dfl.driverSalaryFactorInput.sendKeys(dfl.values.salary);
      await dfl.driverSalaryAddonInput.sendKeys(dfl.values.salaryAdd);
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await browser.wait(protractor.ExpectedConditions.presenceOf($('md-toast'), 5000));
    });
  });

  describe('Create f100 booking code', function() {
    it('should get to the ingredients page', async function() {
      await DashboardIngredients.get();
    });

    it('should select the booking codes option from the searchbar', async function() {
      await DashboardIngredients.searchbar.click();
      await DashboardIngredients.searchbarDropdownBookingcode.click();
    });

    it('should fill the booking code form', async function() {
      await f100.nameInput.sendKeys(f100.values.name);
      await f100.expirationDatepickerInput.sendKeys(f100.values.expiry);
      await f100.driverSalaryFactorInput.sendKeys(f100.values.salary);
      await f100.driverSalaryAddonInput.sendKeys(f100.values.salaryAdd);
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await browser.wait(protractor.ExpectedConditions.presenceOf($('md-toast'), 5000));
    });
  });

  describe('Create equal1000 booking code', function() {
    it('should get to the ingredients page', async function() {
      await DashboardIngredients.get();
    });

    it('should select the booking codes option from the searchbar', async function() {
      await DashboardIngredients.searchbar.click();
      await DashboardIngredients.searchbarDropdownBookingcode.click();
    });

    it('should fill the booking code form', async function() {
      await equal1000.nameInput.sendKeys(equal1000.values.name);
      await equal1000.expirationDatepickerInput.sendKeys(equal1000.values.expiry);
      await equal1000.driverSalaryFactorInput.sendKeys(equal1000.values.salary);
      await equal1000.driverSalaryAddonInput.sendKeys(equal1000.values.salaryAdd);
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await browser.wait(protractor.ExpectedConditions.presenceOf($('md-toast'), 5000));
    });
  });

  describe('Create obsolete booking code', function() {
    it('should get to the ingredients page', async function() {
      await DashboardIngredients.get();
    });

    it('should select the booking codes option from the searchbar', async function() {
      await DashboardIngredients.searchbar.click();
      await DashboardIngredients.searchbarDropdownBookingcode.click();
    });

    it('should fill the booking code form', async function() {
      await obsolete.nameInput.sendKeys(obsolete.values.name);
      await obsolete.expirationDatepickerInput.sendKeys(obsolete.values.expiry);
      await obsolete.driverSalaryFactorInput.sendKeys(obsolete.values.salary);
      await obsolete.driverSalaryAddonInput.sendKeys(obsolete.values.salaryAdd);
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await browser.wait(protractor.ExpectedConditions.presenceOf($('md-toast'), 5000));
    });
  });
})
