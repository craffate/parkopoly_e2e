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
        await brandPage.missiontypeDropdown.click();
        await helpers.asyncForEach(data.missionType, async (s, idx, arr) => {
          let el;

          el = await helpers.getFromDropdownValue(s,
            brandPage.missiontypeDropdownTypeResults);
          if (idx + 1 < arr.length) {
            return el[0].click();
          } else {
            await el[0].click();
            return el[0].sendKeys(protractor.Key.ESCAPE);
          };
        });
      };

      await brandPage.accountDropdown.click();
      el = await helpers.getFromDropdownText(`${data.account}${TIMESTAMP}`, brandPage.accountDropdownAccountsResults);
      await el[0].click();

      await brandPage.penalties.click();
      await brandPage.penaltiesInput.clear();
      await brandPage.penaltiesInput.sendKeys(TIMESTAMP);
      el = await helpers.getVisible(brandPage.selectAllCheckbox);
      el[0].click();
      el = await helpers.getVisible($$('md-option'));
      el[0].sendKeys(protractor.Key.ESCAPE);

      await brandPage.aliasInput.sendKeys(data.alias);
      await brandPage.mailOnBookingCheckbox.click();
      await DashboardIngredients.submitButton.click();
      await helpers.waitForToast();
      await browser.refresh();
    });
  });
});
