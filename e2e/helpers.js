const path = require('path');

module.exports = {
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
  }
};
