const EC = protractor.ExpectedConditions;
const path = require('path');
const IngredientsPageObject = require('../page_objects/ingredients.pageObject');
const LogoPageObject = require('../page_objects/ingredients.logo.pageObject');

describe('Logos', function() {
  DashboardIngredients = new IngredientsPageObject();

  renault = new LogoPageObject();
  renault.values.name = 'Renault ' + browser.params.ts;
  renault.values.path = path.resolve(__dirname, '../../assets/renault.png');

  ds = new LogoPageObject();
  ds.values.name = 'DS ' + browser.params.ts;
  ds.values.path = path.resolve(__dirname, '../../assets/ds.png');

  beforeAll(async function() {
    await DashboardIngredients.get();
  });
  describe('Create Renault logo', function() {
    it('should select the logo option from the searchbar', async function() {
      await DashboardIngredients.searchbar.click();
      await DashboardIngredients.searchbarDropdownLogo.click();
    });

    it('should fill the logo form', async function() {
      await renault.searchbar.click();
      await renault.searchbarDropdownAll.get(0).click();
      await browser.executeScript('document.querySelectorAll(\'input[type="file"]\')[0].style.display = \'inline\';');
      await renault.nameInput.clear().sendKeys(renault.values.name);
      await renault.uploadButtonInput.sendKeys(renault.values.path);
    });

    it('should submit the form', async function() {
      await DashboardIngredients.editButton.click();
      await browser.wait(EC.presenceOf($('md-toast'), 5000));
    });
  });

  describe('Create DS logo', function() {
    it('should select the logo option from the searchbar', async function() {
      await DashboardIngredients.searchbar.click();
      await DashboardIngredients.searchbarDropdownLogo.click();
    });

    it('should fill the logo form', async function() {
      await renault.searchbar.click();
      await renault.searchbarDropdownAll.get(0).click();
      await browser.executeScript('document.querySelectorAll(\'input[type="file"]\')[0].style.display = \'inline\';');
      await ds.nameInput.clear().sendKeys(ds.values.name);
      await ds.uploadButtonInput.sendKeys(ds.values.path);
    });

    it('should submit the form', async function() {
      await DashboardIngredients.editButton.click();
      await browser.wait(EC.presenceOf($('md-toast'), 5000));
    });
  });
});
