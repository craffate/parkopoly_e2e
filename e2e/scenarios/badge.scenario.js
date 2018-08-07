const helpers = require('../helpers');
const IngredientsPageObject = require('../page_objects/ingredients.pageObject');
const BadgePageObject = require('../page_objects/ingredients.badge.pageObject');
const specData = require('../data/badge.scenario.data.json');

describe('Badge', function() {
  DashboardIngredients = new IngredientsPageObject();
  badgePage = new BadgePageObject();

  beforeAll(async function() {
    await DashboardIngredients.get();
    await helpers.waitForSpinner();
    await DashboardIngredients.searchbar.click();
    await DashboardIngredients.searchbarDropdownBadge.click();
  });

  dataSpec(specData, (data, iteration) => {
    describe(`Create ${data.name} badge`, function() {
      it('should fill the form', async function() {
        await badgePage.nameInput.sendKeys(data.name + browser.params.ts);
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
      });

      it('should submit the form', async function() {
        await DashboardIngredients.submitButton.click();
        await helpers.waitForToast();
      });
    });
  });
});
