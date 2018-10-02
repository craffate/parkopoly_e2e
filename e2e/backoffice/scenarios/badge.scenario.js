const helpers = require('../../helpers');
const IngredientsPageObject = require('../page_objects/ingredients.pageObject');
const BadgePageObject = require('../page_objects/ingredients.badge.pageObject');
const specData = require('../data/badge.scenario.data.json');

describe('Badge', function() {
  const DashboardIngredients = new IngredientsPageObject();
  const badgePage = new BadgePageObject();

  beforeAll(async function() {
    await DashboardIngredients.get();
    await helpers.waitForSpinner();
    await DashboardIngredients.searchbar.click();
    const el = await helpers.getFromDropdown('Badge', DashboardIngredients.searchbarDropdownResults);
    await el[0].click();
  });

  dataSpec(specData, (data, iteration) => {
    it(`Create ${data.name} badge`, async function() {
      await badgePage.nameInput.sendKeys(data.name + TIMESTAMP);
      await badgePage.model.click();
      await badgePage.modelInput.sendKeys(data.modelFilter);
      await badgePage.modelSelectAllButton.click();
      if (data.bc !== null) {
        await badgePage.bookingcodes.click();
        await badgePage.bookingcodesSearchInput.sendKeys(data.bc[0]);
        data.bc[0] = await badgePage.bookingcodesDropdownAll.first();
        await data.bc[0].click();
        await data.bc[0].sendKeys(protractor.Key.ESCAPE);
      };
      await DashboardIngredients.submitButton.click();
      await helpers.waitForToast();
    });
  });
});
