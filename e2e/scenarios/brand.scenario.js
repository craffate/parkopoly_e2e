const helpers = require('../helpers');
const IngredientsPageObject = require('../page_objects/ingredients.pageObject');
const BrandPageObject = require('../page_objects/ingredients.brand.pageObject');

describe('Brands', function() {
  DashboardIngredients = new IngredientsPageObject();

  renaultPUD = new BrandPageObject();
  renaultPUD.values.name = 'Renault PUD ' + browser.params.ts;
  renaultPUD.values.color = '#ff8000';
  renaultPUD.values.min = '1';
  renaultPUD.values.logo = 'renault ';
  renaultPUD.values.alias = 'RRG Paris';

  renaultVN = new BrandPageObject();
  renaultVN.values.name = 'Renault VN ' + browser.params.ts;
  renaultVN.values.color = '#ff8000';
  renaultVN.values.min = '1';
  renaultVN.values.logo = 'renault ';
  renaultVN.values.alias = 'RRG Paris';

  psaIS = new BrandPageObject();
  psaIS.values.name = 'PSA IS ' + browser.params.ts;
  psaIS.values.color = '#0080ff';
  psaIS.values.min = '1';
  psaIS.values.logo = 'psa ';
  psaIS.values.alias = 'PSA';

  dsPUDE = new BrandPageObject();
  dsPUDE.values.name = 'DS PUDE ' + browser.params.ts;
  dsPUDE.values.color = '#b2b2b2';
  dsPUDE.values.min = '24';
  dsPUDE.values.logo = 'ds ';
  dsPUDE.values.alias = 'DS';

  peugeotPUDE = new BrandPageObject();
  peugeotPUDE.values.name = 'Peugeot PUDE ' + browser.params.ts;
  peugeotPUDE.values.color = '#0080ff';
  peugeotPUDE.values.min = '24';
  peugeotPUDE.values.logo = 'peugeot ';
  peugeotPUDE.values.alias = 'Peugeot';

  beforeAll(async function() {
    await DashboardIngredients.get();
    await helpers.waitForSpinner();
  });

  describe('Renault PUD', function() {
    it('should select the brand option from the searchbar', async function() {
      await DashboardIngredients.searchbar.click();
      await DashboardIngredients.searchbarDropdownBrand.click();
    });

    it('should fill the form', async function() {
      await renaultPUD.nameInput.sendKeys(renaultPUD.values.name);
      await renaultPUD.colorpickerInput.sendKeys(renaultPUD.values.color);
      await renaultPUD.anticipationInput.sendKeys(renaultPUD.values.min);
      await renaultPUD.logoSearchbar.click();
      await renaultPUD.logoSearchbarInput.sendKeys(browser.params.ts);
      await renaultPUD.logoSearchbarDropdown.click();
      await renaultPUD.missiontypeDropdown.click();
      await renaultPUD.missiontypeDropdownTypesAll.get(0).click();
      await renaultPUD.missiontypeDropdownTypesAll.get(1).click();
      await renaultPUD.missiontypeDropdownTypesAll.get(0).sendKeys(protractor.Key.ESCAPE);
      await renaultPUD.accountDropdown.click();
      await renaultPUD.accountDropdownInput.sendKeys(browser.params.ts);
      await renaultPUD.accountDropdownAccountsAll.get(0).click();
      await renaultPUD.penaltySearchbar.click();
      await renaultPUD.penaltySearchbarInput.sendKeys(browser.params.ts);
      await renaultPUD.penaltySearchbarDropdown.click();
      await renaultPUD.aliasInput.sendKeys(renaultPUD.values.alias);
      await renaultPUD.mailOnBookingCheckbox.click();
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await helpers.waitForToast();
    });
  });

  describe('Renault VN', function() {
    it('should select the brand option from the searchbar', async function() {
      await DashboardIngredients.searchbar.click();
      await DashboardIngredients.searchbarDropdownBrand.click();
    });

    it('should fill the form', async function() {
      await renaultVN.nameInput.sendKeys(renaultVN.values.name);
      await renaultVN.colorpickerInput.sendKeys(renaultVN.values.color);
      await renaultVN.anticipationInput.sendKeys(renaultVN.values.min);
      await renaultVN.logoSearchbar.click();
      await renaultVN.logoSearchbarInput.sendKeys(browser.params.ts);
      await renaultVN.logoSearchbarDropdown.click();
      await renaultVN.missiontypeDropdown.click();
      await renaultVN.missiontypeDropdownTypesAll.get(2).click();
      await renaultVN.missiontypeDropdownTypesAll.get(0).sendKeys(protractor.Key.ESCAPE);
      await renaultVN.accountDropdown.click();
      await renaultVN.accountDropdownInput.sendKeys(browser.params.ts);
      await renaultVN.accountDropdownAccountsAll.get(0).click();
      await renaultVN.penaltySearchbar.click();
      await renaultVN.penaltySearchbarInput.sendKeys(browser.params.ts);
      await renaultVN.penaltySearchbarDropdown.click();
      await renaultVN.aliasInput.sendKeys(renaultVN.values.alias);
      await renaultVN.smsOnBookingCheckbox.click();
      await renaultVN.mailOnBookingCheckbox.click();
      await renaultVN.mailReminderCheckbox.click();
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await helpers.waitForToast();
    });
  });

  describe('PSA IS', function() {
    it('should select the brand option from the searchbar', async function() {
      await DashboardIngredients.searchbar.click();
      await DashboardIngredients.searchbarDropdownBrand.click();
    });

    it('should fill the form', async function() {
      await psaIS.nameInput.sendKeys(psaIS.values.name);
      await psaIS.colorpickerInput.sendKeys(psaIS.values.color);
      await psaIS.anticipationInput.sendKeys(psaIS.values.min);
      await psaIS.logoSearchbar.click();
      await psaIS.logoSearchbarInput.sendKeys(browser.params.ts);
      await psaIS.logoSearchbarDropdown.click();
      await psaIS.missiontypeDropdown.click();
      const el_loc = await psaIS.missiontypeDropdownTypesAll.get(4).getLocation();
      await browser.executeScript('window.scrollTo(' + el_loc.x + ', ' + el_loc.y + ');');
      await psaIS.missiontypeDropdownTypesAll.get(4).click();
      await psaIS.missiontypeDropdownTypesAll.get(0).sendKeys(protractor.Key.ESCAPE);
      await psaIS.accountDropdown.click();
      await psaIS.accountDropdownInput.sendKeys(browser.params.ts);
      await psaIS.accountDropdownAccountsAll.get(0).click();
      await psaIS.penaltySearchbar.click();
      await psaIS.penaltySearchbarInput.sendKeys(browser.params.ts);
      await psaIS.penaltySearchbarDropdown.click();
      await psaIS.aliasInput.sendKeys(psaIS.values.alias);
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await helpers.waitForToast();
    });
  });

  describe('DS PUDE', function() {
    it('should select the brand option from the searchbar', async function() {
      await DashboardIngredients.searchbar.click();
      await DashboardIngredients.searchbarDropdownBrand.click();
    });

    it('should fill the form', async function() {
      await dsPUDE.nameInput.sendKeys(dsPUDE.values.name);
      await dsPUDE.colorpickerInput.sendKeys(dsPUDE.values.color);
      await dsPUDE.anticipationInput.sendKeys(dsPUDE.values.min);
      await dsPUDE.logoSearchbar.click();
      await dsPUDE.logoSearchbarInput.sendKeys(browser.params.ts);
      await dsPUDE.logoSearchbarDropdown.click();
      await dsPUDE.missiontypeDropdown.click();
      await dsPUDE.missiontypeDropdownTypesAll.get(0).click();
      await dsPUDE.missiontypeDropdownTypesAll.get(1).click();
      await dsPUDE.missiontypeDropdownTypesAll.get(0).sendKeys(protractor.Key.ESCAPE);
      await dsPUDE.accountDropdown.click();
      await dsPUDE.accountDropdownInput.sendKeys(browser.params.ts);
      await dsPUDE.accountDropdownAccountsAll.get(0).click();
      await dsPUDE.penaltySearchbar.click();
      await dsPUDE.penaltySearchbarInput.sendKeys(browser.params.ts);
      await dsPUDE.penaltySearchbarDropdown.click();
      await dsPUDE.aliasInput.sendKeys(dsPUDE.values.alias);
      await dsPUDE.smsOnBookingCheckbox.click();
      await dsPUDE.mailOnBookingCheckbox.click();
      await dsPUDE.mailReminderCheckbox.click();
      await dsPUDE.smsReminderCheckbox.click();
      await dsPUDE.smsRatingCheckbox.click();
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await helpers.waitForToast();
    });
  });

  describe('Peugeot PUDE', function() {
    it('should select the brand option from the searchbar', async function() {
      await DashboardIngredients.searchbar.click();
      await DashboardIngredients.searchbarDropdownBrand.click();
    });

    it('should fill the form', async function() {
      await peugeotPUDE.nameInput.sendKeys(peugeotPUDE.values.name);
      await peugeotPUDE.colorpickerInput.sendKeys(peugeotPUDE.values.color);
      await peugeotPUDE.anticipationInput.sendKeys(peugeotPUDE.values.min);
      await peugeotPUDE.logoSearchbar.click();
      await peugeotPUDE.logoSearchbarInput.sendKeys(browser.params.ts);
      await peugeotPUDE.logoSearchbarDropdown.click();
      await peugeotPUDE.missiontypeDropdown.click();
      await peugeotPUDE.missiontypeDropdownTypesAll.get(0).click();
      await peugeotPUDE.missiontypeDropdownTypesAll.get(1).click();
      await peugeotPUDE.missiontypeDropdownTypesAll.get(0).sendKeys(protractor.Key.ESCAPE);
      await peugeotPUDE.accountDropdown.click();
      await peugeotPUDE.accountDropdownInput.sendKeys(browser.params.ts);
      await peugeotPUDE.accountDropdownAccountsAll.get(0).click();
      await peugeotPUDE.penaltySearchbar.click();
      await peugeotPUDE.penaltySearchbarInput.sendKeys(browser.params.ts);
      await peugeotPUDE.penaltySearchbarDropdown.click();
      await peugeotPUDE.aliasInput.sendKeys(peugeotPUDE.values.alias);
      await peugeotPUDE.smsOnBookingCheckbox.click();
      await peugeotPUDE.mailOnBookingCheckbox.click();
      await peugeotPUDE.mailReminderCheckbox.click();
      await peugeotPUDE.smsReminderCheckbox.click();
      await peugeotPUDE.smsRatingCheckbox.click();
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await browser.waitForToast();
    });
  });
});
