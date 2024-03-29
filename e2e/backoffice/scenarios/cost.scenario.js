const helpers = require('../../helpers');
const IngredientsPageObject = require('../page_objects/ingredients.pageObject');
const CostPageObject = require('../page_objects/ingredients.cost.pageObject');
const specData = require('../data/cost.scenario.data.json');

describe('Cost zones', function() {
  const DashboardIngredients = new IngredientsPageObject();
  const costPage = new CostPageObject();

  beforeAll(async function() {
    await DashboardIngredients.get();
    await helpers.waitForSpinner();
  });

  dataSpec(specData, (data) => {
    it(`Create ${data.name} cost zone`, async function() {
      let el;

      await DashboardIngredients.searchbar.click();
      el = await helpers.getFromDropdownValue('Cost', DashboardIngredients.searchbarDropdownResults);
      await el[0].click();
      await costPage.nameInput.sendKeys(data.name + TIMESTAMP);
      await helpers.asyncForEach(data.costZones, async function(zoneData, idx, zoneDataAll) {
        if (idx > 0) {
          await costPage.zoneLast.title.click();
        };
        await costPage.zoneLast.nameInput.sendKeys(zoneData.name);
        await costPage.zoneLast.concessionPriceInput.sendKeys(zoneData.concessionPrice);
        await costPage.zoneLast.concessionMinInput.sendKeys(zoneData.concessionMin);
        await costPage.zoneLast.concessionRoundInput.sendKeys(zoneData.concessionRound);
        await costPage.zoneLast.concessionEffectInput.sendKeys(zoneData.concessionEffect);
        if (zoneData.concessionMax > 0) {
          await costPage.zoneLast.concessionMaxInput.sendKeys(zoneData.concessionMax);
        };

        if (zoneData.concessionVAT === true) {
          costPage.zoneLast.concessionPriceTypeSwitch.click();
        };

        await costPage.zoneLast.concessionVRInput.sendKeys(zoneData.concessionVR);
        await costPage.zoneLast.concessionMeMInput.sendKeys(zoneData.concessionMeM);
        await costPage.zoneLast.concessionPUDInput.sendKeys(zoneData.concessionPUD);


        await costPage.zoneLast.clientPriceInput.sendKeys(zoneData.clientPrice);
        await costPage.zoneLast.clientMinInput.sendKeys(zoneData.clientMin);
        await costPage.zoneLast.clientRoundInput.sendKeys(zoneData.clientRound);
        await costPage.zoneLast.clientEffectInput.sendKeys(zoneData.clientEffect);
        if (zoneData.clientMax > 0) {
          await costPage.zoneLast.clientMaxInput.sendKeys(zoneData.clientMax);
        }

        if (zoneData.clientVAT === false) {
          costPage.zoneLast.clientPriceTypeSwitch.click();
        };

        await costPage.zoneLast.clientVRInput.sendKeys(zoneData.clientVR);
        await costPage.zoneLast.clientMeMInput.sendKeys(zoneData.clientMeM);
        await costPage.zoneLast.clientPUDInput.sendKeys(zoneData.clientPUD);

        if (idx + 1 < zoneDataAll.length) {
          return costPage.addzoneButton.click();
        } else {
          await costPage.submitButton.click();
          return helpers.waitForToast();
        };
      });
      await browser.refresh();
    });
  });
});
