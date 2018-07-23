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

  ordreRep = new DocumentsPageObject();
  ordreRep.values.name = 'Ordre Reparation ' + browser.params.ts;
  ordreRep.values.path = null
  ordreRep.values.alertNoUpload = false;
  ordreRep.values.encrypt = false;
  ordreRep.values.dispWebAppAfter = false;
  ordreRep.values.dispWebApp = true;
  ordreRep.values.quality = false;
  ordreRep.values.brands = ['Renault', 'DS'];
  ordreRep.values.missionFilter = ['PICKUP', 'DELIVERY', 'EXPRESS']
  ordreRep.values.optionFilter = ['PUD_VR', 'DEFAULT'];
  ordreRep.values.bc = ['Renault', 'DS'];

  contratPret = new DocumentsPageObject();
  contratPret.values.name = 'Contrat Pret ' + browser.params.ts;
  contratPret.values.path = null
  contratPret.values.alertNoUpload = false;
  contratPret.values.encrypt = false;
  contratPret.values.dispWebAppAfter = false;
  contratPret.values.dispWebApp = true;
  contratPret.values.quality = false;
  contratPret.values.brands = ['Renault', 'DS'];
  contratPret.values.missionFilter = ['PICKUP']
  contratPret.values.optionFilter = ['PU_VR'];
  contratPret.values.bc = ['Renault', 'DS'];

  permis = new DocumentsPageObject();
  permis.values.name = 'Permis ' + browser.params.ts;
  permis.values.path = null
  permis.values.alertNoUpload = false;
  permis.values.encrypt = false;
  permis.values.dispWebAppAfter = true;
  permis.values.dispWebApp = false;
  permis.values.quality = false;
  permis.values.brands = ['Renault', 'DS'];
  permis.values.missionFilter = ['PICKUP']
  permis.values.optionFilter = ['PU_VR'];
  permis.values.bc = ['Renault', 'DS'];

  vnConcession = new DocumentsPageObject();
  vnConcession.values.name = 'VN Concession ' + browser.params.ts;
  vnConcession.values.path = null
  vnConcession.values.alertNoUpload = false;
  vnConcession.values.encrypt = false;
  vnConcession.values.dispWebAppAfter = true;
  vnConcession.values.dispWebApp = false;
  vnConcession.values.quality = false;
  vnConcession.values.brands = null;
  vnConcession.values.missionFilter = ['VN_DELIVERY']
  vnConcession.values.optionFilter = null;

  vnClient = new DocumentsPageObject();
  vnClient.values.name = 'VN Concession ' + browser.params.ts;
  vnClient.values.path = null
  vnClient.values.alertNoUpload = false;
  vnClient.values.encrypt = false;
  vnClient.values.dispWebAppAfter = true;
  vnClient.values.dispWebApp = false;
  vnClient.values.quality = false;
  vnClient.values.brands = null;
  vnClient.values.missionFilter = ['VN_DELIVERY']
  vnClient.values.optionFilter = null;

  cgvDS = new DocumentsPageObject();
  cgvDS.values.name = 'CGVDS ' + browser.params.ts;
  cgvDS.values.path = path.resolve(__dirname, '../../assets/doc.pdf');
  cgvDS.values.alertNoUpload = false;
  cgvDS.values.encrypt = false;
  cgvDS.values.dispWebAppAfter = false;
  cgvDS.values.dispWebApp = true;
  cgvDS.values.quality = false;
  cgvDS.values.brands = 'DS';
  cgvDS.values.missionFilter = ['PICKUP', 'DELIVERY', 'EXPRESS']
  cgvDS.values.optionFilter = null;
  cgvDS.values.bc = 'DS';

  cgvPeugeot = new DocumentsPageObject();
  cgvPeugeot.values.name = 'CGVPeugeot ' + browser.params.ts;
  cgvPeugeot.values.path = path.resolve(__dirname, '../../assets/doc.pdf');
  cgvPeugeot.values.alertNoUpload = false;
  cgvPeugeot.values.encrypt = false;
  cgvPeugeot.values.dispWebAppAfter = false;
  cgvPeugeot.values.dispWebApp = true;
  cgvPeugeot.values.quality = false;
  cgvPeugeot.values.brands = 'Peugeot';
  cgvPeugeot.values.missionFilter = ['PICKUP', 'DELIVERY', 'EXPRESS']
  cgvPeugeot.values.optionFilter = null;
  cgvPeugeot.values.bc = 'Peugeot';

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

  describe('Ordre Reparation', function() {
    it('should fill the form', async function() {
      await ordreRep.nameInput.sendKeys(ordreRep.values.name);
      await helpers.displayUpload(ordreRep.fileInput);
      await helpers.switchCheckbox(ordreRep.alertNoUploadSwitch, ordreRep.values.alertNoUpload);
      await helpers.switchCheckbox(ordreRep.encryptSwitch, ordreRep.values.encrypt);
      await helpers.switchCheckbox(ordreRep.dispWebAppAfterSwitch, ordreRep.values.dispWebAppAfter);
      await helpers.switchCheckbox(ordreRep.dispWebAppSwitch, ordreRep.values.dispWebApp);
      await helpers.switchCheckbox(ordreRep.qualitySwitch, ordreRep.values.quality);
      await ordreRep.missionType.click();
      ordreRep.values.missionFilter[0] = await helpers.getFromDropdown(ordreRep.values.missionFilter[0], ordreRep.missionTypeDropdownAll);
      ordreRep.values.missionFilter[1] = await helpers.getFromDropdown(ordreRep.values.missionFilter[1], ordreRep.missionTypeDropdownAll);
      ordreRep.values.missionFilter[2] = await helpers.getFromDropdown(ordreRep.values.missionFilter[2], ordreRep.missionTypeDropdownAll);
      await helpers.scrollIntoView(ordreRep.values.missionFilter[0]);
      await ordreRep.values.missionFilter[0].click();
      await helpers.scrollIntoView(ordreRep.values.missionFilter[1]);
      await ordreRep.values.missionFilter[1].click();
      await helpers.scrollIntoView(ordreRep.values.missionFilter[2]);
      await ordreRep.values.missionFilter[2].click();
      await ordreRep.missionTypeDropdown.sendKeys(protractor.Key.ESCAPE);
      await ordreRep.options.click();
      ordreRep.values.optionFilter[0] = await helpers.getFromDropdown(ordreRep.values.optionFilter[0], ordreRep.optionsDropdownPickupAll);
      ordreRep.values.optionFilter[1] = await helpers.getFromDropdown(ordreRep.values.optionFilter[1], ordreRep.optionsDropdownExpressAll);
      await helpers.scrollIntoView(ordreRep.values.optionFilter[0]);
      await ordreRep.values.optionFilter[0].click();
      await helpers.scrollIntoView(ordreRep.values.optionFilter[1]);
      await ordreRep.values.optionFilter[1].click();
      await ordreRep.optionDropdownPickup.sendKeys(protractor.Key.ESCAPE);
      await ordreRep.bookingcodes.click();
      ordreRep.values.bc[0] = await helpers.getFromDropdown(ordreRep.values.bc[0], ordreRep.bookingcodesDropdownAll);
      ordreRep.values.bc[1] = await helpers.getFromDropdown(ordreRep.values.bc[1], ordreRep.bookingcodesDropdownAll);
      await helpers.scrollIntoView(ordreRep.values.bc[0]);
      await ordreRep.values.bc[0].click();
      await helpers.scrollIntoView(ordreRep.values.bc[1]);
      await ordreRep.values.bc[1].click();
      await ordreRep.bookingcodesDropdown.sendKeys(protractor.Key.ESCAPE);
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await browser.wait(EC.presenceOf($('md-toast')), 5000, 'Timed out waiting for confirmation message');
    });
  });

  describe('Contrat Pret', function() {
    it('should fill the form', async function() {
      await contratPret.nameInput.sendKeys(contratPret.values.name);
      await helpers.displayUpload(contratPret.fileInput);
      await helpers.switchCheckbox(contratPret.alertNoUploadSwitch, contratPret.values.alertNoUpload);
      await helpers.switchCheckbox(contratPret.encryptSwitch, contratPret.values.encrypt);
      await helpers.switchCheckbox(contratPret.dispWebAppAfterSwitch, contratPret.values.dispWebAppAfter);
      await helpers.switchCheckbox(contratPret.dispWebAppSwitch, contratPret.values.dispWebApp);
      await helpers.switchCheckbox(contratPret.qualitySwitch, contratPret.values.quality);
      await contratPret.missionType.click();
      contratPret.values.missionFilter[0] = await helpers.getFromDropdown(contratPret.values.missionFilter[0], contratPret.missionTypeDropdownAll);
      await helpers.scrollIntoView(contratPret.values.missionFilter[0]);
      await contratPret.values.missionFilter[0].click();
      await contratPret.missionTypeDropdown.sendKeys(protractor.Key.ESCAPE);
      await contratPret.options.click();
      contratPret.values.optionFilter[0] = await helpers.getFromDropdown(contratPret.values.optionFilter[0], contratPret.optionsDropdownPickupAll);
      await helpers.scrollIntoView(contratPret.values.optionFilter[0]);
      await contratPret.values.optionFilter[0].click();
      await contratPret.optionDropdownPickup.sendKeys(protractor.Key.ESCAPE);
      await contratPret.bookingcodes.click();
      contratPret.values.bc[0] = await helpers.getFromDropdown(contratPret.values.bc[0], contratPret.bookingcodesDropdownAll);
      contratPret.values.bc[1] = await helpers.getFromDropdown(contratPret.values.bc[1], contratPret.bookingcodesDropdownAll);
      await helpers.scrollIntoView(contratPret.values.bc[0]);
      await contratPret.values.bc[0].click();
      await helpers.scrollIntoView(contratPret.values.bc[1]);
      await contratPret.values.bc[1].click();
      await contratPret.bookingcodesDropdown.sendKeys(protractor.Key.ESCAPE);
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await browser.wait(EC.presenceOf($('md-toast')), 5000, 'Timed out waiting for confirmation message');
    });
  });

  describe('Permis', function() {
    it('should fill the form', async function() {
      await permis.nameInput.sendKeys(permis.values.name);
      await helpers.displayUpload(permis.fileInput);
      await helpers.switchCheckbox(permis.alertNoUploadSwitch, permis.values.alertNoUpload);
      await helpers.switchCheckbox(permis.encryptSwitch, permis.values.encrypt);
      await helpers.switchCheckbox(permis.dispWebAppAfterSwitch, permis.values.dispWebAppAfter);
      await helpers.switchCheckbox(permis.dispWebAppSwitch, permis.values.dispWebApp);
      await helpers.switchCheckbox(permis.qualitySwitch, permis.values.quality);
      await permis.missionType.click();
      permis.values.missionFilter[0] = await helpers.getFromDropdown(permis.values.missionFilter[0], permis.missionTypeDropdownAll);
      await helpers.scrollIntoView(permis.values.missionFilter[0]);
      await permis.values.missionFilter[0].click();
      await permis.missionTypeDropdown.sendKeys(protractor.Key.ESCAPE);
      await helpers.scrollIntoView(permis.values.optionFilter[0]);
      await permis.values.optionFilter[0].click();
      await permis.optionDropdownPickup.sendKeys(protractor.Key.ESCAPE);
      await permis.bookingcodes.click();
      permis.values.bc[0] = await helpers.getFromDropdown(permis.values.bc[0], permis.bookingcodesDropdownAll);
      permis.values.bc[1] = await helpers.getFromDropdown(permis.values.bc[1], permis.bookingcodesDropdownAll);
      await helpers.scrollIntoView(permis.values.bc[0]);
      await permis.values.bc[0].click();
      await helpers.scrollIntoView(permis.values.bc[1]);
      await permis.values.bc[1].click();
      await permis.bookingcodesDropdown.sendKeys(protractor.Key.ESCAPE);
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await browser.wait(EC.presenceOf($('md-toast')), 5000, 'Timed out waiting for confirmation message');
    });
  });

  describe('Dossier VN Concession', function() {
    it('should fill the form', async function() {
      await vnConcession.nameInput.sendKeys(vnConcession.values.name);
      await helpers.displayUpload(vnConcession.fileInput);
      await helpers.switchCheckbox(vnConcession.alertNoUploadSwitch, vnConcession.values.alertNoUpload);
      await helpers.switchCheckbox(vnConcession.encryptSwitch, vnConcession.values.encrypt);
      await helpers.switchCheckbox(vnConcession.dispWebAppAfterSwitch, vnConcession.values.dispWebAppAfter);
      await helpers.switchCheckbox(vnConcession.dispWebAppSwitch, vnConcession.values.dispWebApp);
      await helpers.switchCheckbox(vnConcession.qualitySwitch, vnConcession.values.quality);
      await vnConcession.missionType.click();
      vnConcession.values.missionFilter[0] = await helpers.getFromDropdown(vnConcession.values.missionFilter[0], vnConcession.missionTypeDropdownAll);
      await helpers.scrollIntoView(vnConcession.values.missionFilter[0]);
      await vnConcession.values.missionFilter[0].click();
      await vnConcession.missionTypeDropdown.sendKeys(protractor.Key.ESCAPE);
      await helpers.scrollIntoView(vnConcession.values.optionFilter[0]);
      await vnConcession.values.optionFilter[0].click();
      await vnConcession.optionDropdownPickup.sendKeys(protractor.Key.ESCAPE);
      await vnConcession.bookingcodes.click();
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await browser.wait(EC.presenceOf($('md-toast')), 5000, 'Timed out waiting for confirmation message');
    });
  });

  describe('Dossier VN Client', function() {
    it('should fill the form', async function() {
      await vnClient.nameInput.sendKeys(vnClient.values.name);
      await helpers.displayUpload(vnClient.fileInput);
      await helpers.switchCheckbox(vnClient.alertNoUploadSwitch, vnClient.values.alertNoUpload);
      await helpers.switchCheckbox(vnClient.encryptSwitch, vnClient.values.encrypt);
      await helpers.switchCheckbox(vnClient.dispWebAppAfterSwitch, vnClient.values.dispWebAppAfter);
      await helpers.switchCheckbox(vnClient.dispWebAppSwitch, vnClient.values.dispWebApp);
      await helpers.switchCheckbox(vnClient.qualitySwitch, vnClient.values.quality);
      await vnClient.missionType.click();
      vnClient.values.missionFilter[0] = await helpers.getFromDropdown(vnClient.values.missionFilter[0], vnClient.missionTypeDropdownAll);
      await helpers.scrollIntoView(vnClient.values.missionFilter[0]);
      await vnClient.values.missionFilter[0].click();
      await vnClient.missionTypeDropdown.sendKeys(protractor.Key.ESCAPE);
      await helpers.scrollIntoView(vnClient.values.optionFilter[0]);
      await vnClient.values.optionFilter[0].click();
      await vnClient.optionDropdownPickup.sendKeys(protractor.Key.ESCAPE);
      await vnClient.bookingcodes.click();
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await browser.wait(EC.presenceOf($('md-toast')), 5000, 'Timed out waiting for confirmation message');
    });
  });

  describe('CGVDS', function() {
    it('should fill the form', async function() {
      await cgvDS.nameInput.sendKeys(cgvDS.values.name);
      await helpers.displayUpload(cgvDS.fileInput);
      await helpers.uploadFile('../resources/documents/lorem.pdf', cgvDS.fileInput);
      await helpers.switchCheckbox(cgvDS.alertNoUploadSwitch, cgvDS.values.alertNoUpload);
      await helpers.switchCheckbox(cgvDS.encryptSwitch, cgvDS.values.encrypt);
      await helpers.switchCheckbox(cgvDS.dispWebAppAfterSwitch, cgvDS.values.dispWebAppAfter);
      await helpers.switchCheckbox(cgvDS.dispWebAppSwitch, cgvDS.values.dispWebApp);
      await helpers.switchCheckbox(cgvDS.qualitySwitch, cgvDS.values.quality);
      await cgvDS.missionType.click();
      cgvDS.values.missionFilter[0] = await helpers.getFromDropdown(cgvDS.values.missionFilter[0], cgvDS.missionTypeDropdownAll);
      cgvDS.values.missionFilter[1] = await helpers.getFromDropdown(cgvDS.values.missionFilter[1], cgvDS.missionTypeDropdownAll);
      cgvDS.values.missionFilter[2] = await helpers.getFromDropdown(cgvDS.values.missionFilter[2], cgvDS.missionTypeDropdownAll);
      await helpers.scrollIntoView(cgvDS.values.missionFilter[0]);
      await cgvDS.values.missionFilter[0].click();
      await helpers.scrollIntoView(cgvDS.values.missionFilter[1]);
      await cgvDS.values.missionFilter[1].click();
      await helpers.scrollIntoView(cgvDS.values.missionFilter[2]);
      await cgvDS.values.missionFilter[2].click();
      await cgvDS.missionTypeDropdown.sendKeys(protractor.Key.ESCAPE);
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await browser.wait(EC.presenceOf($('md-toast')), 5000, 'Timed out waiting for confirmation message');
    });
  });

  describe('CGVPeugeot', function() {
    it('should fill the form', async function() {
      await cgvPeugeot.nameInput.sendKeys(cgvPeugeot.values.name);
      await helpers.displayUpload(cgvPeugeot.fileInput);
      await helpers.uploadFile('../resources/documents/lorem.pdf', cgvPeugeot.fileInput);
      await helpers.switchCheckbox(cgvPeugeot.alertNoUploadSwitch, cgvPeugeot.values.alertNoUpload);
      await helpers.switchCheckbox(cgvPeugeot.encryptSwitch, cgvPeugeot.values.encrypt);
      await helpers.switchCheckbox(cgvPeugeot.dispWebAppAfterSwitch, cgvPeugeot.values.dispWebAppAfter);
      await helpers.switchCheckbox(cgvPeugeot.dispWebAppSwitch, cgvPeugeot.values.dispWebApp);
      await helpers.switchCheckbox(cgvPeugeot.qualitySwitch, cgvPeugeot.values.quality);
      await cgvPeugeot.missionType.click();
      cgvPeugeot.values.missionFilter[0] = await helpers.getFromDropdown(cgvPeugeot.values.missionFilter[0], cgvPeugeot.missionTypeDropdownAll);
      cgvPeugeot.values.missionFilter[1] = await helpers.getFromDropdown(cgvPeugeot.values.missionFilter[1], cgvPeugeot.missionTypeDropdownAll);
      cgvPeugeot.values.missionFilter[2] = await helpers.getFromDropdown(cgvPeugeot.values.missionFilter[2], cgvPeugeot.missionTypeDropdownAll);
      await helpers.scrollIntoView(cgvPeugeot.values.missionFilter[0]);
      await cgvPeugeot.values.missionFilter[0].click();
      await helpers.scrollIntoView(cgvPeugeot.values.missionFilter[1]);
      await cgvPeugeot.values.missionFilter[1].click();
      await helpers.scrollIntoView(cgvPeugeot.values.missionFilter[2]);
      await cgvPeugeot.values.missionFilter[2].click();
      await cgvPeugeot.missionTypeDropdown.sendKeys(protractor.Key.ESCAPE);
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await browser.wait(EC.presenceOf($('md-toast')), 5000, 'Timed out waiting for confirmation message');
    });
  });
});
