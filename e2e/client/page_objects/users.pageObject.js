const helpers = require('../../helpers');

module.exports = function() {
  this.url = 'users';
  this.usersButton = $('a[href="/users"]');

  this.searchform = $('par-text-search > form');
  this.searchformInput = this.searchform.$('input');
  this.searchformButton = this.searchform.$('button');

  this.newuserButton = element(by.buttonText('Nouvel utilisateur'));

  this.dialog = element(by.id('par-dialog'));
  this.dialogBody = this.dialog.$('.modal-body');
  this.managerRadio = this.dialogBody.element(by.id('roleManager'));
  this.userRadio = this.dialogBody.element(by.id('roleUser'));
  this.adminRadio = this.dialogBody.element(by.id('roleAdmin'));
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

  this.concessionSelect = this.dialogBody.element(by.id('concessions-select'));
  this.concessionSelectSearch = this.concessionSelect.element(by.name('search'));
  this.concessionSelectSelectallButton = this.concessionSelect.$$('ul > li').first();

  this.notificationsCheckbox = this.dialogBody.element(by.id('notifications'));
  this.emailCheckbox = this.dialogBody.element(by.id('emailNotifyForPenalty'));

  this.cancelButton = this.dialog.element(by.buttonText('Annuler'));
  this.createButton = this.dialog.element(by.buttonText('Créer'));

  this.get = async function() {
    await browser.get(this.url);
  };

  this.getClick = async function() {
    await this.usersButton.click();
  };
}
