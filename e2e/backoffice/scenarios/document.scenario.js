const path = require('path');
const helpers = require('../../helpers');
const IngredientsPageObject = require('../page_objects/ingredients.pageObject');
const DocumentsPageObject = require('../page_objects/ingredients.documents.pageObject');
const specData = require('../data/ingredients.documents.scenario.data.json');

describe('Documents', function() {
  const DashboardIngredients = new IngredientsPageObject();
  const documentsPage = new DocumentsPageObject();

  beforeAll(async function() {
    await DashboardIngredients.get();
    await helpers.waitForSpinner();
    await DashboardIngredients.searchbar.click();
    await DashboardIngredients.searchbarDropdownDocument.click();
  });

  dataSpec(specData, (data, iteration) => {
    describe(`Create ${data.name} document`, function() {
      it('should fill the form', async function() {
        if (data.path !== null) {
          await helpers.displayUpload(documentsPage.fileInput);
          await helpers.uploadFile(path.resolve(data.path), documentsPage.fileInput);
        };

        await documentsPage.nameInput.sendKeys(data.name + TIMESTAMP);
        await helpers.switchCheckbox(documentsPage.alertNoUploadSwitch, data.alertNoUpload);
        await helpers.switchCheckbox(documentsPage.encryptSwitch, data.encrypt);
        await helpers.switchCheckbox(documentsPage.displayWebAppAfterSwitch, data.dispWebAppAfter);
        await helpers.switchCheckbox(documentsPage.displayWebAppSwitch, data.dispWebApp);
        await helpers.switchCheckbox(documentsPage.qualitySwitch, data.quality);

        if (data.missionFilter !== null) {
          await documentsPage.missionType.click();
          await helpers.asyncForEach(data.missionFilter, async (s) => {
            let el;

            el = await helpers.getFromDropdown(s, documentsPage.missionTypeDropdownAll);
            await helpers.scrollIntoView(el[0]);
            return el[0].click();
          });

          await documentsPage.missionTypeDropdown.sendKeys(protractor.Key.ESCAPE);
        };

        if (data.optionFilter !== null) {
          await documentsPage.options.click();
          await helpers.asyncForEach(data.optionFilter, async (s) => {
            let el = null;
            const menus = [documentsPage.optionsDropdownPickupAll,
              documentsPage.optionsDropdownVnAll,
              documentsPage.optionsDropdownExpressAll,
              documentsPage.optionsDropdownIsAll];

            for (idx = 0; el === null ; i++) {
              el = helpers.getFromDropdown(s, menus[idx]);
            };

            await helpers.scrollIntoView(el[0]);
            return el[0].click();
          });

          await documentsPage.missionTypeDropdown.sendKeys(protractor.Key.ESCAPE);
        };

        if (data.bc !== null) {
          await documentsPage.bookingcodes.click();
          await helpers.asyncForEach(data.bc, async (s) => {
            let el;

            el = await helpers.getFromDropdown(s + TIMESTAMP, documentsPage.bookingcodesDropdownAll);
            await helpers.scrollIntoView(el[0]);
            return el[0].click();
          });

          await documentsPage.bookingcodesDropdown.sendKeys(protractor.Key.ESCAPE);
        };
      });

      it('should submit the form', async function() {
        await DashboardIngredients.submitButton.click();
        await helpers.waitForToast();
      });
    });
  });
});
