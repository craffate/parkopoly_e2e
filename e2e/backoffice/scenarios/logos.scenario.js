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
    await DashboardIngredients.searchbarDropdownLogo.click();
  });

  dataSpec(specData, (data, iteration) => {
    describe(`Create ${data.name} logo`, function() {
      it('should fill the logo form', async function() {
        await helpers.displayUpload(logosPage.uploadButtonInput);
        await helpers.uploadFile(path.resolve(data.path), logosPage.uploadButtonInput);
        await logosPage.nameInput.sendKeys(TIMESTAMP);
      });

      it('should submit the form', async function() {
        await DashboardIngredients.createButton.click();
        await helpers.waitForSpinner();
        await helpers.waitForToast();
      });
    });
  });
});
