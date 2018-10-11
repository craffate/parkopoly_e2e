module.exports = function() {
  this.selectAllCheckbox = $$('md-checkbox[ng-click="sm.handleCheckboxClick()"]')
  this.searchQuery = element.all(by.model('sm.searchQuery'));

  this.searchbar = element(by.model('badgeFormCtrl.selectedObject'));
  this.nameInput = element(by.model('badgeFormCtrl.newObject.name'));
  this.model = $('md-select[name="docBrands"]');
  this.missions = element(by.model('badgeFormCtrl.newObject.missionFilter.missionTypeEnumSet'));
  this.options = element(by.model('badgeFormCtrl.newObject.missionFilter.optionLabelEnumSet'));
  this.bookingcodes = $('md-select[name="bookingCode"]');
};
