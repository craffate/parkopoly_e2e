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
    describe(`Create ${data.name} booking code`, function() {
      it('should select the booking codes option from the searchbar', async function() {
        await DashboardIngredients.searchbar.click();
        const el = await helpers.getFromDropdown('Booking code', DashboardIngredients.searchbarDropdownResults);
        await el[0].click();
      });

      it('should fill the booking code form', async function() {
        await bcPage.nameInput.sendKeys(data.name + TIMESTAMP);
        await bcPage.expirationDatepickerInput.sendKeys(data.expiry);
        await bcPage.driverSalaryFactorInput.sendKeys(data.salary);
        await bcPage.driverSalaryAddonInput.sendKeys(data.salaryAdd);
      });

      it('should submit the form', async function() {
        await DashboardIngredients.submitButton.click();
        await helpers.waitForToast();
      });
    });
  });
});
