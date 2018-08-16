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
        await brandPage.nameInput.sendKeys(data.name + TIMESTAMP);
        await brandPage.colorpickerInput.sendKeys(data.color);
        await brandPage.anticipationInput.sendKeys(data.min);
        await brandPage.logoSearchbar.click();
        await brandPage.logoSearchbarInput.sendKeys(data.logo + TIMESTAMP);
        await brandPage.logoSearchbarDropdown.click();
        if (data.missionType !== null) {
          helpers.asyncForEach(data.missionType, async (s) => {
            await brandPage.missiontypeDropdown.click();
            let el;

            el = await helpers.getFromDropdown(s,
              brandPage.missiontypeDropdownTypesAll);
            await s[0].click();
            await s[0].sendKeys(protractor.Key.ESCAPE);
          });
        }
        await brandPage.accountDropdown.click();
        await helpers.waitForVisibility(
          brandPage.accountDropdownInput, 1000, 'Menu didn\'t open in time');
        await brandPage.accountDropdownInput.sendKeys(TIMESTAMP);
        await brandPage.accountDropdownAccountsAll.first().click();
        await brandPage.penaltySearchbar.click();
        await brandPage.penaltySearchbarInput.sendKeys(TIMESTAMP);
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
