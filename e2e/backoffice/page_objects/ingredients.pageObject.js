const helpers = require('../../helpers');

module.exports = function() {
  this.url = '#/ingredients';
  this.searchbar = element(by.model('ingredCtrl.selected'));
  this.searchbarInput = this.searchbar.element(by.model('$select.search'));
  this.searchbarDropdown = element(by.repeater('object in $select.items'));
  this.searchbarDropdownResults = element.all(by.repeater('object in ingredCtrl.objects'));
  this.submitButton = $('[type="submit"]');
  this.editButton = element(by.id('editButton'));
  this.createButton = element(by.id('createButton'));

  this.get = async function() {
    return browser.driver.get(browser.baseUrl + this.url);
  };
};
