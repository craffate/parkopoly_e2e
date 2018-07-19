const helpers = require('../helpers');
const EC = protractor.ExpectedConditions;
const IngredientsPageObject = require('../page_objects/ingredients.pageObject');
const BadgePageObject = require('../page_objects/ingredients.badge.pageObject');

describe('Badge', function() {
  DashboardIngredients = new IngredientsPageObject();

  paris = new BadgePageObject();
  paris.values.name = 'Paris ' + browser.params.ts;
  paris.values.modelFilter = 'Paris';

  renault = new BadgePageObject();
  renault.values.name = 'Renault ' + browser.params.ts;
  renault.values.modelFilter = 'Renault';

  ds = new BadgePageObject();
  ds.values.name = 'DS ' + browser.params.ts;
  ds.values.modelFilter = 'DS';

  beforeAll(async function() {
      await DashboardIngredients.get();
      await DashboardIngredients.searchbar.click();
      await DashboardIngredients.searchbarDropdownBadge.click();
  });

  describe('Create Paris badge', function() {
    it('should fill the form', async function() {
      await paris.nameInput.sendKeys(paris.values.name);
      await paris.model.click();
      await paris.modelInput.sendKeys(paris.values.modelFilter);
      await paris.modelSelectAllButton.click();
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await browser.wait(EC.presenceOf($('md-toast')), 5000, 'Timed out waiting for confirmation message');
    });
  });

  describe('Create Renault badge', function() {
    it('should fill the form', async function() {
      await renault.nameInput.sendKeys(renault.values.name);
      await renault.model.click();
      await renault.modelInput.sendKeys(renault.values.modelFilter);
      await renault.modelSelectAllButton.click();
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await browser.wait(EC.presenceOf($('md-toast')), 5000, 'Timed out waiting for confirmation message');
    });
  });

  describe('Create DS badge', function() {
    it('should fill the form', async function() {
      await ds.nameInput.sendKeys(ds.values.name);
      await ds.model.click();
      await ds.modelInput.sendKeys(ds.values.modelFilter);
      await ds.modelSelectAllButton.click();
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await browser.wait(EC.presenceOf($('md-toast')), 5000, 'Timed out waiting for confirmation message');
    });
  });
});
