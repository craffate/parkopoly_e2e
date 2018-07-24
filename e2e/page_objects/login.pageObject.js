module.exports = function() {
  this.url = 'https://dashboard-' + browser.params.env + '.parkopoly.fr/#/login';
  this.spinner = $('spinner');
  this.userForm = element(by.name('userForm'));
  this.username = this.userForm.element(by.model('loginCtrl.credentials.username'));
  this.password = this.userForm.element(by.model('loginCtrl.credentials.password'));

  this.get = async function() {
    const EC = await protractor.ExpectedConditions;
    await browser.get(this.url);
    return browser.wait(EC.not(EC.presenceOf(this.spinner)), 15000,
    'Timed out while waiting for the page to load');
  };

  this.fillForm = function(usr, pwd) {
    this.username.sendKeys(usr);
    this.password.sendKeys(pwd);
  };
};
