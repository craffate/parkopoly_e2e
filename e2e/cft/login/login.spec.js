var DashboardLogin = require('../../page_objects/login.pageObject');

describe('Parkopoly dashboard login page', function() {
  const usr_local = browser.params.login.local;
  const usr_domain = browser.params.login.domain;
  const usr_tld = browser.params.login.tld;
  const usr = usr_local + usr_domain + usr_tld;
  const inv_usr_local = 'foo';
  const inv_usr_domain = '@bar';
  const inv_usr = inv_usr_local + inv_usr_domain + usr_tld;
  const pwd = browser.params.login.pwd;

  describe('Login with valid credentials', function() {
    it('should get to the page', function() {
      DashboardLogin.get();
    });

    it('should have a login form', function() {
      expect(DashboardLogin.userForm.isDisplayed()).toBe(true);
    });

    it('should have a username field', function() {
      expect(DashboardLogin.username.isDisplayed()).toBe(true);
    });

    it('should have a password field', function() {
      expect(DashboardLogin.password.isDisplayed()).toBe(true);
    });

    it('should fill the local part', function() {
      DashboardLogin.username.sendKeys(usr_local);
    });

    it('should not be tagged as valid', function() {
      expect(DashboardLogin.username.getAttribute('aria-invalid')).toBe('true');
    });

    it('should append the domain name', function() {
      DashboardLogin.username.sendKeys(usr_domain);
    });

    it('should not be tagged as valid', function() {
      expect(DashboardLogin.username.getAttribute('aria-invalid')).toBe('true');
    });

    it('should append the top-level domain', function() {
      DashboardLogin.username.sendKeys(usr_tld);
    });

    it('should be tagged as valid', function() {
      expect(DashboardLogin.username.getAttribute('aria-invalid')).toBe('false');
    });

    it('should fill the password', function() {
      DashboardLogin.password.sendKeys(pwd);
    });

    it('should submit the form', function() {
      DashboardLogin.userForm.submit();
    });

    it('should not raise an error', function() {
      expect(DashboardLogin.userForm.$('[ng-if="loginCtrl.error"]').isPresent()).toBe(false);
    });
  });

  xdescribe('Quickly login with valid credentials', function() {
    it('should get to the page', function() {
      DashboardLogin.get();
    });

    it('should have a login form', function() {
      expect(DashboardLogin.userForm.isDisplayed()).toBe(true);
    });

    it('should have a username field', function() {
      expect(DashboardLogin.username.isDisplayed()).toBe(true);
    });

    it('should have a password field', function() {
      expect(DashboardLogin.password.isDisplayed()).toBe(true);
    });

    it('should fill a valid email', function() {
      DashboardLogin.username.sendKeys(usr);
    });

    it('should be tagged as valid', function() {
      expect(DashboardLogin.username.getAttribute('aria-invalid')).toBe('false');
    });

    it('should fill a valid password', function() {
      DashboardLogin.password.sendKeys(pwd);
    });

    it('should be tagged as valid', function() {
      expect(DashboardLogin.password.getAttribute('aria-invalid')).toBe('false');
    });

    it('should submit the form', function() {
      DashboardLogin.userForm.submit();
    });

    it('should not raise an error', function() {
      expect(DashboardLogin.userForm.$('[ng-if="loginCtrl.error"]').isPresent()).toBe(false);
    });
  });

  describe('Login with invalid credentials', function() {
    it('should get to the page', function() {
      DashboardLogin.get();
    });

    it('should have a login form', function() {
      expect(DashboardLogin.userForm.isDisplayed()).toBe(true);
    });

    it('should have a username field', function() {
      expect(DashboardLogin.username.isDisplayed()).toBe(true);
    });

    it('should have a password field', function() {
      expect(DashboardLogin.password.isDisplayed()).toBe(true);
    });

    it('should fill the local part', function() {
      DashboardLogin.username.sendKeys(inv_usr_local);
    });

    it('should not be tagged as valid', function() {
      expect(DashboardLogin.username.getAttribute('aria-invalid')).toBe('true');
    });

    it('should append the domain name', function() {
      DashboardLogin.username.sendKeys(inv_usr_domain);
    });

    it('should not be tagged as valid', function() {
      expect(DashboardLogin.username.getAttribute('aria-invalid')).toBe('true');
    });

    it('should append the top-level domain', function() {
      DashboardLogin.username.sendKeys(usr_tld);
    });

    it('should be tagged as valid', function() {
      expect(DashboardLogin.username.getAttribute('aria-invalid')).toBe('false');
    });

    it('should fill the password', function() {
      DashboardLogin.password.sendKeys(pwd);
    });

    it('should submit the form', function() {
      DashboardLogin.userForm.submit();
    });

    it('should raise an error', function() {
      expect(DashboardLogin.userForm.$('[ng-if="loginCtrl.error"]').isPresent()).toBe(true);
    });
  });

  xdescribe('Quickly login with invalid credentials', function() {
    it('should get to the page', function() {
      DashboardLogin.get();
    });

    it('should have a login form', function() {
      expect(DashboardLogin.userForm.isDisplayed()).toBe(true);
    });

    it('should have a username field', function() {
      expect(DashboardLogin.username.isDisplayed()).toBe(true);
    });

    it('should have a password field', function() {
      expect(DashboardLogin.password.isDisplayed()).toBe(true);
    });

    it('should fill a valid email', function() {
      DashboardLogin.username.sendKeys(inv_usr);
    });

    it('should be tagged as valid', function() {
      expect(DashboardLogin.username.getAttribute('aria-invalid')).toBe('false');
    });

    it('should fill a valid password', function() {
      DashboardLogin.password.sendKeys(pwd);
    });

    it('should be tagged as valid', function() {
      expect(DashboardLogin.password.getAttribute('aria-invalid')).toBe('false');
    });

    it('should submit the form', function() {
      DashboardLogin.userForm.submit();
    });

    it('should raise an error', function() {
      expect(DashboardLogin.userForm.$('[ng-if="loginCtrl.error"]').isPresent()).toBe(true);
    });
  });
});
