const helpers = require('../helpers');
const EC = protractor.ExpectedConditions;
const IngredientsPageObject = require('../page_objects/ingredients.pageObject');
const BadgePageObject = require('../page_objects/ingredients.badge.pageObject');

describe('Badge', function() {
  DashboardIngredients = new IngredientsPageObject();

  paris = new BadgePageObject();
  paris.values.name = 'Paris ' + browser.params.ts;
  paris.values.model_filter = 'Paris';

  renault = new BadgePageObject();
  renault.values.name = 'Renault ' + browser.params.ts;
  renault.values.model_filter = 'Renault';

  ds = new BadgePageObject();
  ds.values.name = 'DS ' + browser.params.ts;
  ds.values.model_filter = 'DS';

  beforeAll(async function() {
      await DashboardIngredients.get();
  });

  describe('Create Paris badge', function() {
    it('should select the badge option from the searchbar', async function() {
      await DashboardIngredients.searchbar.click();
      await DashboardIngredients.searchbarDropdownBadge.click();
    });

    it('should fill the form', async function() {
      await paris.nameInput.sendKeys(paris.values.name);
      await paris.model.click();
      await paris.modelInput.sendKeys(paris.values.model_filter);
      await paris.modelSelectAllButton.click();
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await browser.wait(EC.presenceOf($('md-toast'), 5000));
    });
  });

  describe('Create Renault badge', function() {
    it('should select the badge option from the searchbar', async function() {
      await DashboardIngredients.searchbar.click();
      await DashboardIngredients.searchbarDropdownBadge.click();
    });

    it('should fill the form', async function() {
      await renault.nameInput.sendKeys(renault.values.name);
      await renault.model.click();
      await renault.modelInput.sendKeys(renault.values.model_filter);
      await renault.modelSelectAllButton.click();
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await browser.wait(EC.presenceOf($('md-toast'), 5000));
    });
  });

  describe('Create DS badge', function() {
    it('should select the badge option from the searchbar', async function() {
      await DashboardIngredients.searchbar.click();
      await DashboardIngredients.searchbarDropdownBadge.click();
    });

    it('should fill the form', async function() {
      await ds.nameInput.sendKeys(ds.values.name);
      await ds.model.click();
      await ds.modelInput.sendKeys(ds.values.model_filter);
      await ds.modelSelectAllButton.click();
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await browser.wait(EC.presenceOf($('md-toast'), 5000));
    });
  });
});
