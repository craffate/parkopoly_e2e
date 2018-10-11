const helpers = require('../../helpers');
const IngredientsPageObject = require('../page_objects/ingredients.pageObject');
const BrandPageObject = require('../page_objects/ingredients.brand.pageObject');
const specData = require('../data/ingredients.brand.scenario.data.json');

describe('Brands', function() {
  DashboardIngredients = new IngredientsPageObject();
  brandPage = new BrandPageObject();

  beforeAll(async function() {
    await DashboardIngredients.get();
    await helpers.waitForSpinner();
  });

  dataSpec(specData, (data, iteration) => {
    it(`Create ${data.name} brand`, async function() {
      let el;

      await DashboardIngredients.searchbar.click();
      el = await helpers.getFromDropdownValue('Brand', DashboardIngredients.searchbarDropdownResults);
      await el[0].click();
      await brandPage.nameInput.sendKeys(data.name + TIMESTAMP);
      await brandPage.colorpickerInput.sendKeys(data.color);
      await brandPage.anticipationInput.sendKeys(data.min);
      await brandPage.logoSearchbar.click();
      el = await helpers.getFromDynamicDropdown(`${data.logo}${TIMESTAMP}`, brandPage.logoSearchbarDropdownResults);
      await el[0].click();

      if (data.missionType !== null) {
        await brandPage.missiontype.click();
        await helpers.asyncForEach(data.missionType, async (s, idx, arr) => {
          let el;

          el = await helpers.getFromDropdownValue(s,
            brandPage.missiontypeDropdown);
          if (idx + 1 < arr.length) {
            return el[0].click();
          } else {
            await el[0].click();
            return helpers.closeDropdown();
          };
        });
      };

      await brandPage.account.click();
      el = await helpers.getFromDropdownText(`${data.account}${TIMESTAMP}`, brandPage.accountDropdown);
      await el[0].click();

      await brandPage.penalties.click();
      el = await helpers.getVisible(brandPage.searchQuery);
      await el[0].clear();
      await el[0].sendKeys(TIMESTAMP);
      el = await helpers.getVisible(brandPage.selectAllCheckbox);
      await el[0].click();
      await helpers.closeDropdown();

      await brandPage.aliasInput.sendKeys(data.alias);
      await brandPage.mailOnBookingCheckbox.click();
      await DashboardIngredients.submitButton.click();
      await helpers.waitForToast();
      await browser.refresh();
    });
  });
});
