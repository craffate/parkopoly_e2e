const helpers = require('../helpers');

module.exports = function() {
  this.url = '/#/ingredients';
  this.searchbar = element(by.model('ingredCtrl.selected'));
  this.searchbarInput = this.searchbar.element(by.model('$select.search'));
  this.searchbarDropdown = element(by.repeater('object in $select.items'));
  this.searchbarDropdownAll = element.all(by.repeater('object in $select.items'));
  this.searchbarDropdownBadge = element(by.repeater('object in $select.items').row(0));
  this.searchbarDropdownBookingcode = element(by.repeater('object in $select.items').row(1));
  this.searchbarDropdownBrand = element(by.repeater('object in $select.items').row(2));
  this.searchbarDropdownCost = element(by.repeater('object in $select.items').row(3));
  this.searchbarDropdownDocument = element(by.repeater('object in $select.items').row(4));
  this.searchbarDropdownLogo = element(by.repeater('object in $select.items').row(5));
  this.searchbarDropdownPenalty = element(by.repeater('object in $select.items').row(6));
  this.submitButton = $('[type="submit"]');
  this.editButton = $('#editButton');

  this.get = async function() {
    await browser.get(this.url);
    return helpers.waitFor($('spinner'), 15000,
    'Couldn\'t reach ' + this.url + ' in time');
  };
};
