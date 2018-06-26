var DashboardLogin = function() {
  this.url = 'https://dashboard-dev.parkopoly.fr/#/login';
  this.userForm = element(by.name('userForm'));
  this.username = this.userForm.element(by.model('loginCtrl.credentials.username'));
  this.password = this.userForm.element(by.model('loginCtrl.credentials.password'));

  this.get = function() {
    browser.get(this.url);
  };

  this.fillForm = function(usr, pwd) {
    this.username.sendKeys(usr);
    this.password.sendKeys(pwd);
  };
};

module.exports = new DashboardLogin();
