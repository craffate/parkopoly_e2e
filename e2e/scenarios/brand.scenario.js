const helpers = require('../helpers');
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
    describe(`Create ${data.name} brand`, function() {
      it('should select the brand option from the searchbar', async function() {
        await DashboardIngredients.searchbar.click();
        await DashboardIngredients.searchbarDropdownBrand.click();
      });

      it('should fill the form', async function() {
        await brandPage.nameInput.sendKeys(data.name + browser.params.ts);
        await brandPage.colorpickerInput.sendKeys(data.color);
        await brandPage.anticipationInput.sendKeys(data.min);
        await brandPage.logoSearchbar.click();
        await brandPage.logoSearchbarInput.sendKeys(browser.params.ts);
        await brandPage.logoSearchbarDropdown.click();
        await brandPage.missiontypeDropdown.click();
        if (data.missionType !== null) {
          data.missionType[0] = await helpers.getFromDropdown(data.missionType[0], brandPage.missiontypeDropdownTypesAll);
          await data.missionType[0].click();
          data.missionType[1] = await helpers.getFromDropdown(data.missionType[1], brandPage.missiontypeDropdownTypesAll);
          await data.missionType[1].click();
          await data.missionType[1].sendKeys(protractor.Key.ESCAPE);
        }
        await brandPage.accountDropdown.click();
        await brandPage.accountDropdownInput.sendKeys(browser.params.ts);
        await brandPage.accountDropdownAccountsAll.first().click();
        await brandPage.penaltySearchbar.click();
        await brandPage.penaltySearchbarInput.sendKeys(browser.params.ts);
        await brandPage.penaltySearchbarDropdown.click();
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
