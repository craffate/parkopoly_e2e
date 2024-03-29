const helpers = require('../../helpers');
const IngredientsPageObject = require('../page_objects/ingredients.pageObject');
const BcPageObject = require('../page_objects/ingredients.bc.pageObject');
const specData = require('../data/ingredients.bc.scenario.data.json');

describe('Booking codes', function() {
  const DashboardIngredients = new IngredientsPageObject();
  const bcPage = new BcPageObject();

  beforeAll(async function() {
    await DashboardIngredients.get();
    await helpers.waitForSpinner();
  });

  dataSpec(specData, (data, iteration) => {
    it(`Create ${data.name} booking code`, async function() {
      let el;

      await DashboardIngredients.searchbar.click();
      el = await helpers.getFromDropdownValue('Booking code', DashboardIngredients.searchbarDropdownResults);
      await el[0].click();
      await bcPage.nameInput.sendKeys(data.name + TIMESTAMP);
      await bcPage.expirationDatepickerInput.sendKeys(data.expiry);
      await bcPage.driverSalaryFactorInput.sendKeys(data.salary);
      await bcPage.driverSalaryAddonInput.sendKeys(data.salaryAdd);
      await DashboardIngredients.submitButton.click();
      await helpers.waitForToast();
      await browser.refresh();
    });
  });
});
