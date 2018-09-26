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
    const el = await helpers.getFromDropdown('Document', DashboardIngredients.searchbarDropdownResults);
    await el[0].click();
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

        /*
        if (data.optionFilter !== null) {
          await documentsPage.options.click();
          await helpers.asyncForEach(data.optionFilter, async (s) => {
            const menus = [documentsPage.optionsDropdownPickupAll,
              documentsPage.optionsDropdownVnAll,
              documentsPage.optionsDropdownExpressAll,
              documentsPage.optionsDropdownIsAll];

            await helpers.asyncForEach(menus, async (opt) => {
              let el;

              el = await helpers.getFromTickDropdownExact(s, opt);
              if (el.length > 0) {
                await helpers.scrollIntoView(el[0]);
                return el[0].click();
              } else {
                return el;
              };
            });
          });

          await documentsPage.optionsDropdownPickupAll.first().sendKeys(protractor.Key.ESCAPE);
        };
        */

        if (data.bc !== null) {
          await documentsPage.bookingcodes.click();
          await helpers.waitForVisibility(documentsPage.bookingcodesDropdown);
          await helpers.asyncForEach(data.bc, async (s, idx, arr) => {
            let el;

            el = await helpers.getFromTickDropdown(`${s}${TIMESTAMP}`,
              documentsPage.bookingcodesDropdownAll);
            if (idx + 1 < arr.length) {
              return el[0].click();
            } else {
              await el[0].click();
              return el[0].sendKeys(protractor.Key.ESCAPE);
            };
          });
        };
      });

      it('should submit the form', async function() {
        await DashboardIngredients.submitButton.click();
        await helpers.waitForToast();
      });
    });
  });
});
