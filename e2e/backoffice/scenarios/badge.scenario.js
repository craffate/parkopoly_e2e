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
  });

  dataSpec(specData, (data, iteration) => {
    it(`Create ${data.name} badge`, async function() {
      let el;

      await DashboardIngredients.searchbar.click();
      el = await helpers.getFromDropdownValue('Badge', DashboardIngredients.searchbarDropdownResults);
      await el[0].click();
      await badgePage.nameInput.sendKeys(data.name + TIMESTAMP);
      await badgePage.model.click();
      el = await helpers.getVisible(badgePage.searchQuery);
      await el[0].sendKeys(`${data.modelFilter} ${TIMESTAMP}`);
      el = await helpers.getVisible(badgePage.selectAllCheckbox);
      await el[0].click();
      el = await helpers.getVisible($$('md-option'));
      el[0].sendKeys(protractor.Key.ESCAPE);
      if (data.bc !== null) {
        await badgePage.bookingcodes.click();
        el = await helpers.getVisible(badgePage.searchQuery);
        await el[0].sendKeys(data.bc[0]);
        el = await helpers.getVisible(badgePage.selectAllCheckbox);
        await el[0].click();
        el = await helpers.getVisible($$('md-option'));
      };
      await DashboardIngredients.submitButton.click();
      await helpers.waitForToast();
      await browser.refresh();
    });
  });
});
