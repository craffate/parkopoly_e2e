const path = require('path');
const helpers = require('../helpers');
const IngredientsPageObject = require('../page_objects/ingredients.pageObject');
const LogoPageObject = require('../page_objects/ingredients.logo.pageObject');

describe('Logos', function() {
  DashboardIngredients = new IngredientsPageObject();

  renault = new LogoPageObject();
  renault.values.name = 'Renault ' + browser.params.ts;
  renault.values.path = path.resolve(__dirname, '../../resources/logos/renault.png');

  ds = new LogoPageObject();
  ds.values.name = 'DS ' + browser.params.ts;
  ds.values.path = path.resolve(__dirname, '../../resources/logos/ds.png');

  beforeAll(async function() {
    await DashboardIngredients.get();
    await helpers.waitForSpinner();
  });

  describe('Create Renault logo', function() {
    it('should select the logo option from the searchbar', async function() {
      await DashboardIngredients.searchbar.click();
      await DashboardIngredients.searchbarDropdownLogo.click();
    });

    it('should fill the logo form', async function() {
      await renault.searchbar.click();
      await renault.searchbarDropdownAll.get(0).click();
      await helpers.displayUpload(renault.uploadButtonInput);
      await renault.nameInput.clear().sendKeys(renault.values.name);
      await helpers.uploadFile(renault.values.path, renault.uploadButtonInput);
    });

    it('should submit the form', async function() {
      await DashboardIngredients.editButton.click();
      await helpers.waitForSpinner();
      await helpers.waitForToast();
    });
  });

  describe('Create DS logo', function() {
    it('should select the logo option from the searchbar', async function() {
      await DashboardIngredients.searchbar.click();
      await DashboardIngredients.searchbarDropdownLogo.click();
    });

    it('should fill the logo form', async function() {
      await ds.searchbar.click();
      await ds.searchbarDropdownAll.get(0).click();
      await helpers.displayUpload(ds.uploadButtonInput);
      await ds.nameInput.clear().sendKeys(ds.values.name);
      await helpers.uploadFile(ds.values.path, ds.uploadButtonInput);
    });

    it('should submit the form', async function() {
      await DashboardIngredients.editButton.click();
      await helpers.waitForSpinner();
      await helpers.waitForToast();
    });
  });
});
