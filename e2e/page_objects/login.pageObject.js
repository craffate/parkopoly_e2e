const helpers = require('../helpers');

module.exports = function() {
  this.url = '#/login';
  this.userForm = element(by.name('userForm'));
  this.username = this.userForm.element(by.model('loginCtrl.credentials.username'));
  this.password = this.userForm.element(by.model('loginCtrl.credentials.password'));

  this.get = async function() {
    await browser.driver.get(browser.baseUrl + this.url);
    return helpers.waitForSpinner();
  };

  this.fillForm = function(usr, pwd) {
    this.username.sendKeys(usr);
    this.password.sendKeys(pwd);
  };
};
