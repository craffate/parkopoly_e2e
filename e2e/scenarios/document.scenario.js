const EC = protractor.ExpectedConditions;
const path = require('path');
const helpers = require('../helpers');
const IngredientsPageObject = require('../page_objects/ingredients.pageObject');
const DocumentsPageObject = require('../page_objects/ingredients.documents.pageObject');

describe('Documents', function() {
  DashboardIngredients = new IngredientsPageObject();

  cgvRenault = new DocumentsPageObject();
  cgvRenault.values.name = 'CGVRenault ' + browser.params.ts;
  cgvRenault.values.path = path.resolve(__dirname, '../../assets/doc.pdf');
  cgvRenault.values.alertNoUpload = false;
  cgvRenault.values.encrypt = false;
  cgvRenault.values.dispWebAppAfter = false;
  cgvRenault.values.dispWebApp = true;
  cgvRenault.values.quality = false;
  cgvRenault.values.brands = 'Renault';
  cgvRenault.values.missionFilter = ['PICKUP', 'DELIVERY', 'EXPRESS']
  cgvRenault.values.optionFilter = null;
  cgvRenault.values.bc = 'Renault';

  beforeAll(async function() {
    await DashboardIngredients.get();
    await DashboardIngredients.searchbar.click();
    await DashboardIngredients.searchbarDropdownDocument.click();
  });

  describe('CGVRenault', function() {
    it('should fill the form', async function() {
      await cgvRenault.nameInput.sendKeys(cgvRenault.values.name);
      await helpers.displayUpload(cgvRenault.fileInput);
      await helpers.uploadFile('../resources/documents/lorem.pdf', cgvRenault.fileInput);
      await helpers.switchCheckbox(cgvRenault.alertNoUploadSwitch, cgvRenault.values.alertNoUpload);
      await helpers.switchCheckbox(cgvRenault.encryptSwitch, cgvRenault.values.encrypt);
      await helpers.switchCheckbox(cgvRenault.dispWebAppAfterSwitch, cgvRenault.values.dispWebAppAfter);
      await helpers.switchCheckbox(cgvRenault.dispWebAppSwitch, cgvRenault.values.dispWebApp);
      await helpers.switchCheckbox(cgvRenault.qualitySwitch, cgvRenault.values.quality);
      await cgvRenault.missionType.click();
      cgvRenault.values.missionFilter[0] = await helpers.getFromDropdown(cgvRenault.values.missionFilter[0], cgvRenault.missionTypeDropdownAll);
      cgvRenault.values.missionFilter[1] = await helpers.getFromDropdown(cgvRenault.values.missionFilter[1], cgvRenault.missionTypeDropdownAll);
      cgvRenault.values.missionFilter[2] = await helpers.getFromDropdown(cgvRenault.values.missionFilter[2], cgvRenault.missionTypeDropdownAll);
      await helpers.scrollIntoView(cgvRenault.values.missionFilter[0]);
      await cgvRenault.values.missionFilter[0].click();
      await helpers.scrollIntoView(cgvRenault.values.missionFilter[1]);
      await cgvRenault.values.missionFilter[1].click();
      await helpers.scrollIntoView(cgvRenault.values.missionFilter[2]);
      await cgvRenault.values.missionFilter[2].click();
      await cgvRenault.missionTypeDropdown.sendKeys(protractor.Key.ESCAPE);
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await browser.wait(EC.presenceOf($('md-toast')), 5000, 'Timed out waiting for confirmation message');
    });
  });
});
