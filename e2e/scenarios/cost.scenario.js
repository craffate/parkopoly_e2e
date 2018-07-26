const helpers = require('../helpers');
const IngredientsPageObject = require('../page_objects/ingredients.pageObject');
const CostPageObject = require('../page_objects/ingredients.cost.pageObject');

describe('Costs', function() {
  DashboardIngredients = new IngredientsPageObject();
  let dict = {
    price: '0',
    min: '20',
    round: '0',
    effect: '0',
    max: '0',
    ht: true,
    vr: '5',
    pud: '-2',
    mem: '10'};

  cost_paris_customerFree = new CostPageObject();
  cost_paris_customerFree.values.name = 'cost_paris_customerFree ' + browser.params.ts;
  cost_paris_customerFree.makeCostZone('paris-75 ' + browser.params.ts, dict)
    .then(function(arr) {cost_paris_customerFree.values.costZones['paris-75'] = arr;});
  cost_paris_customerFree.makeCostZone('A86 ' + browser.params.ts, dict)
    .then(function(arr) {cost_paris_customerFree.values.costZones['A86'] = arr;});
  cost_paris_customerFree.makeCostZone('IdF ' + browser.params.ts, dict)
    .then(function(arr) {cost_paris_customerFree.values.costZones['IdF'] = arr;});

  cost_paris_customerPays = new CostPageObject();
  cost_paris_customerPays.values.name = 'cost_paris_customerPays ' + browser.params.ts;
  cost_paris_customerFree.makeCostZone('paris-75 ' + browser.params.ts, dict)
    .then(function(arr) {cost_paris_customerPays.values.costZones['paris-75'] = arr;});
  cost_paris_customerPays.makeCostZone('A86 ' + browser.params.ts, dict)
    .then(function(arr) {cost_paris_customerPays.values.costZones['A86'] = arr;});
  cost_paris_customerPays.makeCostZone('IdF ' + browser.params.ts, dict)
    .then(function(arr) {cost_paris_customerPays.values.costZones['IdF'] = arr;});

  beforeAll(async function() {
    await DashboardIngredients.get();
    await helpers.waitForSpinner();
  });

  describe('Create cost_paris_customerFree cost', function() {

    it('should select the booking codes option from the searchbar', async function() {
      await DashboardIngredients.searchbar.click();
      await DashboardIngredients.searchbarDropdownCost.click();
    });

    it('should fill the form', async function() {
      await cost_paris_customerFree.nameInput.sendKeys(cost_paris_customerFree.values.name);
      await cost_paris_customerFree.accountDropdown.click();
      await cost_paris_customerFree.accountDropdownAccountsAll.get(0).click();
      await cost_paris_customerFree.accountDropdownAccountsAll.get(0).sendKeys(protractor.Key.ESCAPE);

      await cost_paris_customerFree.zoneNameInput.sendKeys('Paris 75');
      await cost_paris_customerFree.zoneDropdown.click();
      await cost_paris_customerFree.zoneDropdownInput.sendKeys('Paris 75');
      await cost_paris_customerFree.zoneDropdownAccountsAll.get(0).click();
      await cost_paris_customerFree.zoneDropdownAccountsAll.get(0).sendKeys(protractor.Key.ESCAPE);

      await cost_paris_customerFree.zoneConcessionPriceInput.sendKeys(cost_paris_customerFree.values.costZones['paris-75'].concession.price);
      await cost_paris_customerFree.zoneConcessionMinInput.sendKeys(cost_paris_customerFree.values.costZones['paris-75'].concession.min);
      await cost_paris_customerFree.zoneConcessionRoundInput.sendKeys(cost_paris_customerFree.values.costZones['paris-75'].concession.round);
      await cost_paris_customerFree.zoneConcessionEffectInput.sendKeys(cost_paris_customerFree.values.costZones['paris-75'].concession.effect);
      await cost_paris_customerFree.zoneConcessionMaxInput.sendKeys(cost_paris_customerFree.values.costZones['paris-75'].concession.max);
      await cost_paris_customerFree.zoneConcessionVRInput.sendKeys(cost_paris_customerFree.values.costZones['paris-75'].concession.vr);
      await cost_paris_customerFree.zoneConcessionMeMInput.sendKeys(cost_paris_customerFree.values.costZones['paris-75'].concession.mem);
      await cost_paris_customerFree.zoneConcessionPUDInput.sendKeys(cost_paris_customerFree.values.costZones['paris-75'].concession.pud);

      await cost_paris_customerFree.zoneClientPriceInput.sendKeys(cost_paris_customerFree.values.costZones['paris-75'].client.price);
      await cost_paris_customerFree.zoneClientMinInput.sendKeys(cost_paris_customerFree.values.costZones['paris-75'].client.min);
      await cost_paris_customerFree.zoneClientRoundInput.sendKeys(cost_paris_customerFree.values.costZones['paris-75'].client.round);
      await cost_paris_customerFree.zoneClientEffectInput.sendKeys(cost_paris_customerFree.values.costZones['paris-75'].client.effect);
      await cost_paris_customerFree.zoneClientMaxInput.sendKeys(cost_paris_customerFree.values.costZones['paris-75'].client.max);
      await cost_paris_customerFree.zoneClientVRInput.sendKeys(cost_paris_customerFree.values.costZones['paris-75'].client.vr);
      await cost_paris_customerFree.zoneClientMeMInput.sendKeys(cost_paris_customerFree.values.costZones['paris-75'].client.mem);
      await cost_paris_customerFree.zoneClientPUDInput.sendKeys(cost_paris_customerFree.values.costZones['paris-75'].client.pud);
    });

    it('should submit the form', async function() {
      await DashboardIngredients.submitButton.click();
      await helpers.waitForToast();
    });
  });
});
