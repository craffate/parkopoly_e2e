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
  });

  dataSpec(specData, (data, iteration) => {
    it(`Create ${data.name} logo`, async function() {
      let el;

      await DashboardIngredients.searchbar.click();
      el = await helpers.getFromDropdownValue('Logo', DashboardIngredients.searchbarDropdownResults);
      await el[0].click();
      await helpers.displayUpload(logosPage.uploadButtonInput);
      await helpers.uploadFile(path.resolve(data.path), logosPage.uploadButtonInput);
      await logosPage.nameInput.sendKeys(TIMESTAMP);
      await DashboardIngredients.createButton.click();
      await helpers.waitForToast();
      await browser.refresh();
    });
  });
});
