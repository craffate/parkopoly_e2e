const helpers = require('../../helpers');

module.exports = function() {
  this.url = 'users';
  this.routerLink = $('a[href="/users"]');
  this.spinner = $('div.spinner');

  this.searchform = $('par-text-search > form');
  this.searchformInput = this.searchform.$('input');
  this.searchformButton = this.searchform.$('button');

  this.newuserButton = $('div.am-datatable-header').$('button.btn.btn-primary.btn-add');

  this.dialog = element(by.id('par-dialog'));
  this.dialogBody = this.dialog.$('.modal-body');
  this.quickbookingCheckbox = this.dialogBody.element(by.id('user-quick-booking'));
  this.accessCheckbox = this.dialogBody.element(by.id('user-access'));
  this.firstnameInput = this.dialogBody.element(by.id('firstName'));
  this.lastnameInput = this.dialogBody.element(by.id('lastName'));
  this.emailInput = this.dialogBody.element(by.id('email'));
  this.companyInput = this.dialogBody.element(by.id('company'));
  this.functionInput = this.dialogBody.element(by.id('functionName'));

  this.brandSelect = this.dialogBody.element(by.id('brands-select'));
  this.brandSelectSearch = this.brandSelect.element(by.name('search'));
  this.brandSelectSelectallButton = this.brandSelect.$$('ul > li').first();
  this.brandFirstResult = this.brandSelect.$$('ul > li').get(1);

  this.concessionSelect = this.dialogBody.element(by.id('concessions-select'));
  this.concessionSelectSearch = this.concessionSelect.element(by.name('search'));
  this.concessionSelectSelectallButton = this.concessionSelect.$$('ul > li').first();
  this.concessionFirstResult = this.concessionSelect.$$('ul > li').get(1);

  this.notificationsCheckbox = this.dialogBody.element(by.id('notifications'));
  this.emailCheckbox = this.dialogBody.element(by.id('emailNotifyForPenalty'));

  this.cancelButton = this.dialog.element(by.buttonText('Annuler'));
  this.createButton = this.dialog.element(by.buttonText('Créer'));

  this.get = async function() {
    return browser.get(this.url);
  };

  this.getClick = async function() {
    return this.usersButton.click();
  };

  this.selectFunction = async function(f) {
    return this.dialogBody.
      element(by.cssContainingText('div.am-radio.inline > label', f)).
      click();
  };
}
