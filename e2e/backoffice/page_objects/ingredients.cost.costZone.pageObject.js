const costZone = function(Parent, zone) {
  this.zoneTitle = zone.$('[ng-click="toggleCollapsibleItem()"]');
  this.zoneNameInput = zone.element(by.model('costType.name'));
  this.zoneDropdown = zone.element(by.model('costType.zoneCustomerDtoSet'));
  this.zoneDropdownInput = zone.element(by.model('costType.search'));
  this.zoneDropdownAccounts = zone.element(by.repeater('z in costFormCtrl.all.customerZones'));
  this.zoneDropdownAccountsAll = zone.all(by.repeater('z in costFormCtrl.all.customerZones'));
  this.zoneConcessionPriceInput = zone.element(by.model('costType.costTypeDtoSet[0].priceByMinutes'));
  this.zoneConcessionMinInput = zone.element(by.model('costType.costTypeDtoSet[0].minPrice'));
  this.zoneConcessionRoundInput = zone.element(by.model('costType.costTypeDtoSet[0].round'));
  this.zoneConcessionEffectInput = zone.element(by.model('costType.costTypeDtoSet[0].commercialEffect'));
  this.zoneConcessionMaxInput = zone.element(by.model('costType.costTypeDtoSet[0].maxPrice'));
  this.zoneConcessionPriceTypeSwitch = zone.element(by.model('costType.costTypeDtoSet[0].ht'));
  this.zoneConcessionVRInput = zone.element(by.model('costType.costTypeDtoSet[0].replacementCar'));
  this.zoneConcessionMeMInput = zone.element(by.model('costType.costTypeDtoSet[0].carExplanation'));
  this.zoneConcessionPUDInput = zone.element(by.model('costType.costTypeDtoSet[0].pickupAndDelivery'));
  this.zoneClientPriceInput = zone.element(by.model('costType.costTypeDtoSet[1].priceByMinutes'));
  this.zoneClientMinInput = zone.element(by.model('costType.costTypeDtoSet[1].minPrice'));
  this.zoneClientRoundInput = zone.element(by.model('costType.costTypeDtoSet[1].round'));
  this.zoneClientEffectInput = zone.element(by.model('costType.costTypeDtoSet[1].commercialEffect'));
  this.zoneClientMaxInput = zone.element(by.model('costType.costTypeDtoSet[1].maxPrice'));
  this.zoneClientPriceTypeSwitch = zone.element(by.model('costType.costTypeDtoSet[1].ht'));
  this.zoneClientVRInput = zone.element(by.model('costType.costTypeDtoSet[1].replacementCar'));
  this.zoneClientMeMInput = zone.element(by.model('costType.costTypeDtoSet[1].carExplanation'));
  this.zoneClientPUDInput = zone.element(by.model('costType.costTypeDtoSet[1].pickupAndDelivery'));
};

module.exports = costZone;
