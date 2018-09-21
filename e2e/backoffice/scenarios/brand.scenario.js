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
        el = await helpers.deleteMe(data.logo + TIMESTAMP, brandPage.logoSearchbarDropdownAll);
        await el[0].click();

        if (data.missionType !== null) {
          await brandPage.missiontypeDropdown.click();
          await helpers.waitForVisibility(brandPage.missiontypeDropdownTypes);
          await helpers.asyncForEach(data.missionType, async (s) => {
            let el;

            el = await helpers.getFromDropdown(s,
              brandPage.missiontypeDropdownTypesAll);
            await helpers.scrollIntoView(el[0]);
            return el[0].click();
          });

          await brandPage.missiontypeDropdownTypesAll.first().sendKeys(protractor.Key.ESCAPE);
        };

        await brandPage.accountDropdown.click();
        await helpers.waitForVisibility(brandPage.accountDropdownInput);
        await brandPage.accountDropdownInput.sendKeys(TIMESTAMP);
        await brandPage.accountDropdownAccountsAll.first().click();
        await brandPage.penaltySearchbar.click();
        await brandPage.penaltySearchbarInput.sendKeys(TIMESTAMP);
        await brandPage.penaltySearchbarDropdownAll.first().click();
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
