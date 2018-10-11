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
  });

  dataSpec(specData, (data, iteration) => {
    it(`Create ${data.name} document`, async function() {
      let el;

      await DashboardIngredients.searchbar.click();
      el = await helpers.getFromDropdownValue('Document', DashboardIngredients.searchbarDropdownResults);
      await el[0].click();
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
        await helpers.asyncForEach(data.missionFilter, async (s, idx, arr) => {
          let el;

          el = await helpers.getFromDropdownValue(s, documentsPage.missionTypeDropdown);
          if (idx + 1 < arr.length) {
            return el[0].click();
          } else {
            await el[0].click();
            return helpers.closeDropdown();
          };
        });
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

              el = await helpers.getFromDropdownTextExact(s, opt);
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

      await documentsPage.bookingcodes.click();
      el = await helpers.getVisible(documentsPage.searchQuery);
      el[0].sendKeys(TIMESTAMP);
      el = await helpers.getVisible(documentsPage.selectAllCheckbox);
      el[0].click();
      await helpers.closeDropdown();
      await DashboardIngredients.submitButton.click();
      await helpers.waitForToast();
      await browser.refresh();
    });
  });
});
