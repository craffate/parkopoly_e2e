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
    await DashboardIngredients.searchbarDropdownPenalty.click();
  });

  dataSpec(specData, (data, iteration) => {
    describe(`Create ${data.name} penalty`, function() {
      it('should fill the penalty form', async function() {
        await penaltyPage.nameInput.clear().sendKeys(data.name + TIMESTAMP);
        await helpers.switchCheckbox(penaltyPage.priceFactorCheckbox, (data.factor !== null));

        if (data.factor !== null) {
          await penaltyPage.priceFactorInput.clear().sendKeys(data.factor);
        }

        if (data.price !== null) {
          await penaltyPage.priceInput.clear().sendKeys(data.price);
        }

        await penaltyPage.type.click();
        const el = await helpers.getFromDropdown(data.type,
          penaltyPage.typeDropdownAll);
        await el[0].click();
        await helpers.waitForNoVisibility(el[0],
          3000, 'Couldn\'t close the penalty type dropdown');
      });

      it('should submit the form', async function() {
        await DashboardIngredients.submitButton.click();
        await helpers.waitForToast();
      });
    });
  });
});
