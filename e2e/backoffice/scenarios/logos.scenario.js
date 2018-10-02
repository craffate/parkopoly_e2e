const path = require('path');
const helpers = require('../../helpers');
const IngredientsPageObject = require('../page_objects/ingredients.pageObject');
const LogoPageObject = require('../page_objects/ingredients.logo.pageObject');
const specData = require('../data/ingredients.logos.scenario.data.json');

describe('Logos', function() {
  const DashboardIngredients = new IngredientsPageObject();
  const logosPage = new LogoPageObject();

  beforeAll(async function() {
    await DashboardIngredients.get();
    await helpers.waitForSpinner();
    await DashboardIngredients.searchbar.click();
    const el = await helpers.getFromDropdown('Logo', DashboardIngredients.searchbarDropdownResults);
    await el[0].click();
  });

  dataSpec(specData, (data, iteration) => {
    it(`Create ${data.name} logo`, async function() {
      await helpers.displayUpload(logosPage.uploadButtonInput);
      await helpers.uploadFile(path.resolve(data.path), logosPage.uploadButtonInput);
      await logosPage.nameInput.sendKeys(TIMESTAMP);
      await DashboardIngredients.createButton.click();
      await helpers.waitForToast();
    });
  });
});
