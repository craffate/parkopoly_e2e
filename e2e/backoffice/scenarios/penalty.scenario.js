const helpers = require('../../helpers');
const IngredientsPageObject = require('../page_objects/ingredients.pageObject');
const PenaltyPageObject = require('../page_objects/ingredients.penalty.pageObject');
const specData = require('../data/ingredients.penalty.scenario.data.json');

describe('Penalties', function() {
  const DashboardIngredients = new IngredientsPageObject();
  const penaltyPage = new PenaltyPageObject();

  beforeAll(async function() {
    await DashboardIngredients.get();
    await helpers.waitForSpinner();
    await DashboardIngredients.searchbar.click();
    const el = await helpers.getFromDropdownValue('Penalty', DashboardIngredients.searchbarDropdownResults);
    await el[0].click();
  });

  dataSpec(specData, (data, iteration) => {
    it(`Create ${data.name} penalty`, async function() {
      let el;

      await penaltyPage.nameInput.clear().sendKeys(data.name + TIMESTAMP);
      await helpers.switchCheckbox(penaltyPage.priceFactorCheckbox, (data.factor !== null));

      if (data.factor !== null) {
        await penaltyPage.priceFactorInput.clear().sendKeys(data.factor);
      }

      if (data.price !== null) {
        await penaltyPage.priceInput.clear().sendKeys(data.price);
      }

      await penaltyPage.type.click();
      el = await helpers.getFromDropdownValue(data.type,
        penaltyPage.typeDropdownResults);
      await helpers.scrollIntoView(el[0]);
      await el[0].click();
      await DashboardIngredients.submitButton.click();
      await helpers.waitForToast();
    });
  });
});
