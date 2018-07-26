const helpers = require('../helpers');
const IngredientsPageObject = require('../page_objects/ingredients.pageObject');
const PenaltyPageObject = require('../page_objects/ingredients.penalty.pageObject');

describe('Penalties', function() {
  DashboardIngredients = new IngredientsPageObject();

  cancel48hMissionPrice = new PenaltyPageObject();
  cancel48hMissionPrice.values.name = 'cancel48hMissionPrice ' + browser.params.ts;
  cancel48hMissionPrice.values.factor = '1';
  cancel48hMissionPrice.values.delay = '48';

  cancel1hMissionPrice = new PenaltyPageObject();
  cancel1hMissionPrice.values.name = 'cancel1hMissionPrice ' + browser.params.ts;
  cancel1hMissionPrice.values.factor = '1';
  cancel1hMissionPrice.values.delay = '1';

  waiting20m5e = new PenaltyPageObject();
  waiting20m5e.values.name = 'waiting20m5e ' + browser.params.ts;
  waiting20m5e.values.price = '5';
  waiting20m5e.values.delay = '0.33';

  beforeAll(async function() {
    await DashboardIngredients.get();
    await helpers.waitForSpinner();
  });

  describe('Create cancel48hMissionPrice penalty', function() {
    it('should select the penalty option from the searchbar', async function() {
      await DashboardIngredients.searchbar.click();
      await DashboardIngredients.searchbarDropdownPenalty.click();
    });

    it('should select the mission type', async function() {
      await cancel48hMissionPrice.type.click();
      let el = await helpers.getFromDropdown('CANCEL', cancel48hMissionPrice.typeDropdownAll);
      await el[0].click();
    });

    it('should fill the penalty form', async function() {
      await cancel48hMissionPrice.nameInput.clear().sendKeys(cancel48hMissionPrice.values.name);
      await helpers.checkCheckbox(cancel48hMissionPrice.priceFactorCheckbox);
      await cancel48hMissionPrice.priceFactorInput.clear().sendKeys(cancel48hMissionPrice.values.factor);
      await cancel48hMissionPrice.delayInput.clear().sendKeys(cancel48hMissionPrice.values.delay);
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await helpers.waitForToast();
    });
  });

  describe('Create cancel1hMissionPrice penalty', function() {
    it('should select the penalty option from the searchbar', async function() {
      await DashboardIngredients.searchbar.click();
      await DashboardIngredients.searchbarDropdownPenalty.click();
    });

    it('should select the mission type', async function() {
      await cancel1hMissionPrice.type.click();
      let el = await helpers.getFromDropdown('CANCEL', cancel1hMissionPrice.typeDropdownAll);
      await el[0].click();
    });

    it('should fill the penalty form', async function() {
      await cancel1hMissionPrice.nameInput.clear().sendKeys(cancel1hMissionPrice.values.name);
      await helpers.checkCheckbox(cancel1hMissionPrice.priceFactorCheckbox);
      await cancel1hMissionPrice.priceFactorInput.clear().sendKeys(cancel1hMissionPrice.values.factor);
      await cancel1hMissionPrice.delayInput.clear().sendKeys(cancel1hMissionPrice.values.delay);
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await helpers.waitForToast();
    });
  });

  describe('Create waiting20m5e penalty', function() {
    it('should select the penalty option from the searchbar', async function() {
      await DashboardIngredients.searchbar.click();
      await DashboardIngredients.searchbarDropdownPenalty.click();
    });

    it('should select the mission type', async function() {
      await waiting20m5e.type.click();
      let el = await helpers.getFromDropdown('CANCEL', waiting20m5e.typeDropdownAll);
      await el[0].click();
    });

    it('should fill the penalty form', async function() {
      await waiting20m5e.nameInput.clear().sendKeys(waiting20m5e.values.name);
      await helpers.uncheckCheckbox(waiting20m5e.priceFactorCheckbox);
      await waiting20m5e.priceInput.clear().sendKeys(waiting20m5e.values.price);
      await waiting20m5e.delayInput.clear().sendKeys(waiting20m5e.values.delay);
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await helpers.waitForToast();
    });
  });
});
