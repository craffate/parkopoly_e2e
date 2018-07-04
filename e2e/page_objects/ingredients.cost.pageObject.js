module.exports = function() {
  this.values = {name: null, costZones: []};

  this.searchbar = element(by.model('costFormCtrl.selectedObject'));
  this.searchbarInput = this.searchbar.element(by.model('$select.search'));
  this.searchbarDropdown = this.searchbar.element(by.repeater('object in $select.items'));
  this.nameInput = element(by.model('costFormCtrl.newObject.name'));
  this.accountDropdown = element(by.model('costFormCtrl.newObject.accountDtoSet'));
  this.accountDropdownAccounts = element(by.repeater('a in costFormCtrl.all.accounts'));
  this.accountDropdownAccountsAll = element.all(by.repeater('a in costFormCtrl.all.accounts'));
  this.addzoneButton = $('[ng-click="costFormCtrl.addZonedCostType()"]');
  this.zone = element(by.repeater('costType in costFormCtrl.newObject.zonedCostTypeDtoSet'));
  this.zoneAll = element.all(by.repeater('costType in costFormCtrl.newObject.zonedCostTypeDtoSet'));
  this.zoneTitle = $('[ng-click="toggleCollapsibleItem()"]');
  this.zoneNameInput = element(by.model('costType.name'));
  this.zoneDropdown = element(by.model('costType.zoneCustomerDtoSet'));
  this.zoneDropdownInput = element(by.model('costType.search'));
  this.zoneDropdownAccounts = element(by.repeater('z in costFormCtrl.all.customerZones'));
  this.zoneDropdownAccountsAll = element.all(by.repeater('z in costFormCtrl.all.customerZones'));
  this.zoneConcessionPriceInput = element(by.model('costType.costTypeDtoSet[0].priceByMinutes'));
  this.zoneConcessionMinInput = element(by.model('costType.costTypeDtoSet[0].minPrice'));
  this.zoneConcessionRoundInput = element(by.model('costType.costTypeDtoSet[0].round'));
  this.zoneConcessionEffectInput = element(by.model('costType.costTypeDtoSet[0].commercialEffect'));
  this.zoneConcessionMaxInput = element(by.model('costType.costTypeDtoSet[0].maxPrice'));
  this.zoneConcessionPriceTypeSwitch = element(by.model('costType.costTypeDtoSet[0].ht'));
  this.zoneConcessionVRInput = element(by.model('costType.costTypeDtoSet[0].replacementCar'));
  this.zoneConcessionMeMInput = element(by.model('costType.costTypeDtoSet[0].carExplanation'));
  this.zoneConcessionPUDInput = element(by.model('costType.costTypeDtoSet[0].pickupAndDelivery'));
  this.zoneClientPriceInput = element(by.model('costType.costTypeDtoSet[1].priceByMinutes'));
  this.zoneClientMinInput = element(by.model('costType.costTypeDtoSet[1].minPrice'));
  this.zoneClientRoundInput = element(by.model('costType.costTypeDtoSet[1].round'));
  this.zoneClientEffectInput = element(by.model('costType.costTypeDtoSet[1].commercialEffect'));
  this.zoneClientMaxInput = element(by.model('costType.costTypeDtoSet[1].maxPrice'));
  this.zoneClientPriceTypeSwitch = element(by.model('costType.costTypeDtoSet[1].ht'));
  this.zoneClientVRInput = element(by.model('costType.costTypeDtoSet[1].replacementCar'));
  this.zoneClientMeMInput = element(by.model('costType.costTypeDtoSet[1].carExplanation'));
  this.zoneClientPUDInput = element(by.model('costType.costTypeDtoSet[1].pickupAndDelivery'));

  this.makeCostZone = function(s, con_dict, cli_dict) {
    return new Promise(function(resolve, reject) {
      let ret = {name: null, concession: null, client: null};
      if (cli_dict === undefined)
        cli_dict = con_dict;
      ret.name = s;
      ret.concession = con_dict;
      ret.client = cli_dict;
      if (ret.name === null ||
        ret.concession === null ||
        ret.client === null)
        reject('Error');
      else
        resolve(ret);
    });
  };
};
