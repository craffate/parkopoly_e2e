const path = require('path');
const helpers = require('../helpers');
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
    describe('CGVRenault', function() {
      it('should fill the form', async function() {
        await documentsPage.nameInput.sendKeys(data.name);

        if (data.path !== null) {
          await helpers.displayUpload(documentsPage.fileInput);
          await helpers.uploadFile(data.path, documentsPage.fileInput);
        }
/*
        await helpers.switchCheckbox(documentsPage.alertNoUploadSwitch, data.alertNoUpload);
        await helpers.switchCheckbox(documentsPage.encryptSwitch, data.encrypt);
        await helpers.switchCheckbox(documentsPage.dispWebAppAfterSwitch, data.dispWebAppAfter);
        await helpers.switchCheckbox(documentsPage.dispWebAppSwitch, data.dispWebApp);
        await helpers.switchCheckbox(documentsPage.qualitySwitch, data.quality);*/

        if (data.missionFilter !== null) {
          await helpers.asyncForEach(data.missionFilter, async (s) => {
            let el;

            el = await helpers.getFromDropdown(s, documentsPage.missionTypeDropdownAll);
            await documentsPage.missionType.click();
            await helpers.scrollIntoView(el);
            await el.click();
          });
          await documentsPage.missionTypeDropdown.sendKeys(protractor.Key.ESCAPE);
        }

        if (data.optionFilter !== null) {
          await helpers.asyncForEach(data.optionFilter, async (s) => {
            let el;
            const menus = [documentsPage.optionsDropdownPickupAll,
              documentsPage.optionsDropdownVnAll,
              documentsPage.optionsDropdownExpressAll,
              documentsPage.optionsDropdownIsAll];
            await helpers.asyncForEach(menus, async (menu) => {
              const search = helpers.getFromDropdown(s, menu);

              el = s !== undefined ? s : el;
            });
            await documentsPage.options.click();
            await helpers.scrollIntoView(el);
            await el.click();
          });
          await documentsPage.missionTypeDropdown.sendKeys(protractor.Key.ESCAPE);
        }

        if (data.bc !== null) {
          await helpers.asyncForEach(data.bc, async (s) => {
            let el;

            el = await helpers.getFromDropdown(s, documentsPage.bookingcodesDropdownAll);
            await documentsPage.bookingcodes.click();
            await helpers.scrollIntoView(el);
            await el.click();
          });
          await documentsPage.bookingcodesDropdown.sendKeys(protractor.Key.ESCAPE);
        }
      });

      it('should submit the form', async function() {
        await DashboardIngredients.submitButton.click();
        await helpers.waitForToast();
      });
    });
  });
});
