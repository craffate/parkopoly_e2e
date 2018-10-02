module.exports = {
  testUrl: async function(url, t) {
    return browser.driver.wait(async function() {
      const currUrl = await browser.driver.getCurrentUrl();
      const regex = new RegExp(url, 'i');
      return regex.test(currUrl);
    }, t, 'Couldn\'t reach ' + url + ' in less than ' + t + 'ms');
  },

  asyncForEach: async function(arr, callback) {
    if (Array.isArray(arr)) {
      for (let idx = 0; idx < arr.length; idx++) {
        await callback(arr[idx], idx, arr);
      };
    } else {
      for (let idx in arr) {
        await callback(arr[idx], idx, arr);
      };
    };
  },

  getRandomInt: function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  },

  checkCheckbox: async function(checkbox) {
    if (await checkbox.getAttribute('aria-checked') === 'false') {
      return checkbox.click();
    }
  },

  uncheckCheckbox: async function(checkbox) {
    if (await checkbox.getAttribute('aria-checked') === 'true') {
      return checkbox.click();
    }
  },

  switchCheckbox: async function(checkbox, b) {
    const state = await (/true/).test(await checkbox.getAttribute('aria-checked'));
    if (state !== b) {
      return checkbox.click();
    }
  },

  getFromInvoiceGroup: async function(s, arr) {
    s = s.trim();
    return arr.filter(function(el, idx) {
      return el.getAttribute('value').then(function(val) {
        return val.includes(s);
      });
    });
  },

  getFromDropdown: async function(s, arr) {
    s = s.trim();
    return arr.filter(function(el, idx) {
      return el.getAttribute('value').then(function(val) {
        return val.includes(s);
      });
    });
  },

  getFromDynamicDropdown: async function(s, arr) {
    s = s.trim();
    return arr.filter(function(el, idx) {
      return el.$('div.md-text > span').getText().then(function(val) {
        return val.includes(s);
      });
    });
  },

  getFromTickDropdown: async function(s, arr) {
    s = s.trim();
    return arr.filter(function(el, idx) {
      return el.$('div.md-text').getText().then(function(val) {
        return val.includes(s);
      });
    });
  },

  getFromTickDropdownExact: async function(s, arr) {
    s = s.trim();
    return arr.filter(function(el, idx) {
      return el.$('div.md-text').getText().then(function(val) {
        return s === val;
      });
    });
  },

  displayUpload: async function(fileInput) {
    return browser.executeScript('arguments[0].style.visibility = "visible"; arguments[0].style.display = "block";', fileInput);
  },

  uploadFile: async function(path, fileInput) {
    return fileInput.sendKeys(path);
  },

  scrollIntoView: async function(el) {
    const loc = await el.getLocation();
    return browser.executeScript('window.scrollTo(' + loc.x + ', ' + loc.y + ');');
  },

  waitForSpinner: async function() {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.not(EC.visibilityOf($('spinner'))), TIMEOUT,
      'Page couldn\'t load in time');
  },

  waitForToast: async function() {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.not(EC.visibilityOf($('md-toast'))), TIMEOUT,
      'Page couldn\'t load in time');
  },

  waitFor: async function(el, t = TIMEOUT,
    msg = "Element was still absent after " + TIMEOUT + " milliseconds") {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.presenceOf(el), t, msg);
  },

  waitForNo: async function(el, t = TIMEOUT,
    msg = "Element was still present after " + TIMEOUT + " milliseconds") {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.not(EC.presenceOf(el)), t, msg);
  },

  waitForVisibility: async function(el, t = TIMEOUT,
    msg = "Element was still invisible after " + TIMEOUT + " milliseconds") {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.visibilityOf(el), t, msg);
  },

  waitForNoVisibility: async function(el, t = TIMEOUT,
    msg = "Element was still visible after " + TIMEOUT + " milliseconds") {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.not(EC.visibilityOf(el)), t, msg);
  },

  getVisible: async function(arr) {
    return ret = await arr.filter(function(el) {
      return el.isDisplayed();
    });
  },

  loginClient: async function(email, password) {
    const EC = protractor.ExpectedConditions;

    email = email.trim();
    password = password.trim();
    if (await EC.stalenessOf($('form[name="userForm"]'))) {
      await $('ul.nav.navbar-nav.navbar-right.am-user-nav > li.dropdown > a').click();
      await $('a.sign-out-link').click();
      await browser.wait(EC.visibilityOf($('form[name="userForm"')), TIMEOUT);
    };

    await $('input[type="email"]').sendKeys(email);
    await $('input[type="password"]').sendKeys(password);
    await $('button[type="submit"]').click();
    return browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return (browser.baseUrl === url);
      });
    }, TIMEOUT);
  }
};
