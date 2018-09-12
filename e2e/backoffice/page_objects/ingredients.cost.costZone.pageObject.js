const costZone = function(Parent, zone) {
  this.title = zone.$('[ng-click="toggleCollapsibleItem()"]');
  this.nameInput = zone.element(by.model('costType.name'));
  this.dropdown = zone.element(by.model('costType.zoneCustomerDtoSet'));
  this.dropdownInput = zone.element(by.model('costType.search'));
  this.dropdownAccounts = zone.element(by.repeater('z in costFormCtrl.all.customerZones'));
  this.dropdownAccountsAll = zone.all(by.repeater('z in costFormCtrl.all.customerZones'));
  this.concessionPriceInput = zone.element(by.model('costType.costTypeDtoSet[0].priceByMinutes'));
  this.concessionMinInput = zone.element(by.model('costType.costTypeDtoSet[0].minPrice'));
  this.concessionRoundInput = zone.element(by.model('costType.costTypeDtoSet[0].round'));
  this.concessionEffectInput = zone.element(by.model('costType.costTypeDtoSet[0].commercialEffect'));
  this.concessionMaxInput = zone.element(by.model('costType.costTypeDtoSet[0].maxPrice'));
  this.concessionPriceTypeSwitch = zone.element(by.model('costType.costTypeDtoSet[0].ht'));
  this.concessionVRInput = zone.element(by.model('costType.costTypeDtoSet[0].replacementCar'));
  this.concessionMeMInput = zone.element(by.model('costType.costTypeDtoSet[0].carExplanation'));
  this.concessionPUDInput = zone.element(by.model('costType.costTypeDtoSet[0].pickupAndDelivery'));
  this.clientPriceInput = zone.element(by.model('costType.costTypeDtoSet[1].priceByMinutes'));
  this.clientMinInput = zone.element(by.model('costType.costTypeDtoSet[1].minPrice'));
  this.clientRoundInput = zone.element(by.model('costType.costTypeDtoSet[1].round'));
  this.clientEffectInput = zone.element(by.model('costType.costTypeDtoSet[1].commercialEffect'));
  this.clientMaxInput = zone.element(by.model('costType.costTypeDtoSet[1].maxPrice'));
  this.clientPriceTypeSwitch = zone.element(by.model('costType.costTypeDtoSet[1].ht'));
  this.clientVRInput = zone.element(by.model('costType.costTypeDtoSet[1].replacementCar'));
  this.clientMeMInput = zone.element(by.model('costType.costTypeDtoSet[1].carExplanation'));
  this.clientPUDInput = zone.element(by.model('costType.costTypeDtoSet[1].pickupAndDelivery'));
};

module.exports = costZone;
