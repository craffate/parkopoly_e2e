const path = require('path');

module.exports = {
  testUrl: async function(url, t) {
    return browser.driver.wait(async function() {
      const currUrl = await browser.driver.getCurrentUrl();
      const regex = new RegExp(url, 'i');
      return regex.test(currUrl);
    }, t, 'Couldn\'t reach ' + url + ' in less than ' + t + 'ms');
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
  getFromDropdown: async function(s, arr) {
    return arr.filter(function(el, idx) {
      return el.getAttribute('value').then(function(val) {
        return s === val;
      });
    });
  },
  displayUpload: async function(fileInput) {
    return browser.executeScript('arguments[0].css("visibility", "visible"); arguments[0].css("display", "block");', fileInput);
  },
  uploadFile: async function(path, fileInput) {
    const absolutePath = await path.resolve(__dirname, path);
    return fileInput.sendKeys(absolutePath);
  },
  scrollIntoView: async function(el) {
    const loc = await el.getLocation();
    return browser.executeScript('window.scrollTo(' + loc.x + ', ' + loc.y + ');');
  },
  waitForSpinner: async function() {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.not(EC.visibilityOf($('spinner'))), 15000,
    'Page couldn\'t load in time');
  },
  waitForToast: async function() {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.not(EC.visibilityOf($('md-toast'))), 15000,
    'Page couldn\'t load in time');
  },
  waitFor: async function(el, t, msg) {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.presenceOf(el), t, msg);
  },
  waitForNo: async function(el, t, msg) {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.not(EC.presenceOf(el)), t, msg);
  },
  waitForVisibility: async function(el, t, msg) {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.visibilityOf(el), t, msg);
  },
  waitForNoVisibility: async function(el, t, msg) {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.not(EC.visibilityOf(el)), t, msg);
  }
};
