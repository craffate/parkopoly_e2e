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
    await DashboardIngredients.searchbar.click();
    const el = await helpers.getFromDropdown('Brand', DashboardIngredients.searchbarDropdownResults);
    await el[0].click();
  });

  dataSpec(specData, (data, iteration) => {
    describe(`Create ${data.name} brand`, function() {
      it('should fill the form', async function() {
        let el;

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

            el = await helpers.getFromDropdown(s,
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
        el = await helpers.getFromTickDropdown(`${data.account}${TIMESTAMP}`, brandPage.accountDropdownAccountsResults);
        await el[0].click();

        await brandPage.penalties.click();
        await brandPage.penaltiesInput.sendKeys(TIMESTAMP);
        await brandPage.penaltiesSelectAllButton.click();
        el = await helpers.getVisible($$('md-option'));
        el[0].sendKeys(protractor.Key.ESCAPE);

        await brandPage.aliasInput.sendKeys(data.alias);
        await brandPage.mailOnBookingCheckbox.click();
      });

      it('should submit the form', async function() {
        await DashboardIngredients.submitButton.click();
        await helpers.waitForToast();
      });
    });
  });
});
