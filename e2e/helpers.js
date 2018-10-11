module.exports = {
  /*
  ** Waits for t milliseconds for current URL to equal url
  */
  testUrl: async function(url, t) {
    return browser.driver.wait(async function() {
      const currUrl = await browser.driver.getCurrentUrl();
      const regex = new RegExp(url, 'i');
      return regex.test(currUrl);
    }, t, 'Couldn\'t reach ' + url + ' in less than ' + t + 'ms');
  },

  /*
  ** Calls callback for each element in arr
  */
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

  /*
  ** Returns a random int contained in [0;max]
  */
  getRandomInt: function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  },

  /*
  ** Clicks checkbox if aria-checked element equals false
  */
  checkCheckbox: async function(checkbox) {
    if (await checkbox.getAttribute('aria-checked') === 'false') {
      return checkbox.click();
    }
  },

  /*
  ** Clicks checkbox if aria-checked element equals true
  */
  uncheckCheckbox: async function(checkbox) {
    if (await checkbox.getAttribute('aria-checked') === 'true') {
      return checkbox.click();
    }
  },

  /*
  ** Clicks checkbox if aria-checked element was different from b
  */
  switchCheckbox: async function(checkbox, b) {
    const state = await (/true/).test(await checkbox.getAttribute('aria-checked'));
    if (state !== b) {
      return checkbox.click();
    }
  },

  /*
  ** Returns an array of all the elements in arr containing s as their value
  */
  getFromInvoiceGroup: async function(s, arr) {
    s = s.trim();
    return arr.filter(function(el, idx) {
      return el.getAttribute('value').then(function(val) {
        return val.includes(s);
      });
    });
  },

  /*
  ** Returns an array of all the elements in arr containing s as their value
  */
  getFromDropdownValue: async function(s, arr) {
    s = s.trim();
    return arr.filter(function(el, idx) {
      return el.getAttribute('value').then(function(val) {
        return val.includes(s);
      });
    });
  },

  /* 
  ** Returns an array of all the elements in arr containing s in a
  ** child span text
  */
  getFromDynamicDropdown: async function(s, arr) {
    s = s.trim();
    return arr.filter(function(el, idx) {
      return el.$('div.md-text > span').getText().then(function(val) {
        return val.includes(s);
      });
    });
  },

  /* 
  ** Returns an array of all the elements in arr containing s in a
  ** div text
  */
  getFromDropdownText: async function(s, arr) {
    s = s.trim();
    return arr.filter(function(el, idx) {
      return el.$('div.md-text').getText().then(function(val) {
        return val.includes(s);
      });
    });
  },

  /* 
  ** Returns an array of all the elements in arr being exact to s in a
  ** div text
  */
  getFromDropdownTextExact: async function(s, arr) {
    s = s.trim();
    return arr.filter(function(el, idx) {
      return el.$('div.md-text').getText().then(function(val) {
        return s === val;
      });
    });
  },

  /* 
  ** Returns an array of all the elements in arr being exact to s in a
  ** div text using selection via aria-owns and id attributes
  */
  getFromDropdownAriaOwns: async function(s, own) {
    const opts = await $$(`div#${own} > md-select-menu > md-content > md-option`);

    s = s.trim();
    return opts.filter(function(el) {
      return el.$('div.md-text').getText().then(function(val) {
        return val.includes(s);
      });
    });
  },

  /*
  ** Closes the currently opened dropdown
  */
  closeDropdown: async function() {
    const opts = $$('md-option');
    const arr = await opts.filter(function(el) {
      return el.isDisplayed();
    });

    return arr[0].sendKeys(protractor.Key.ESCAPE);
  },

  /*
  ** Makes the fileInput element visible
  */
  displayUpload: async function(fileInput) {
    return browser.executeScript('arguments[0].style.visibility = "visible"; arguments[0].style.display = "block";', fileInput);
  },

  /*
  ** Writes path to the fileInput element
  */
  uploadFile: async function(path, fileInput) {
    return fileInput.sendKeys(path);
  },

  /*
  ** Scrolls el into view if focus is on the window it's held in
  */
  scrollIntoView: async function(el) {
    const loc = await el.getLocation();
    return browser.executeScript('window.scrollTo(' + loc.x + ', ' + loc.y + ');');
  },

  /*
  ** Waits for a spinner element to disappear
  */
  waitForSpinner: async function() {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.not(EC.visibilityOf($('spinner'))), TIMEOUT,
      'Page couldn\'t load in time');
  },

  /*
  ** Waits for a toast element to disappear
  */
  waitForToast: async function() {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.not(EC.visibilityOf($('md-toast'))), TIMEOUT,
      'Page couldn\'t load in time');
  },

  /*
  ** Displays msg if el wasn't present after t milliseconds
  */
  waitFor: async function(el, t = TIMEOUT,
    msg = "Element was still absent after " + TIMEOUT + " milliseconds") {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.presenceOf(el), t, msg);
  },

  /*
  ** Displays msg if el was present after t milliseconds
  */
  waitForNo: async function(el, t = TIMEOUT,
    msg = "Element was still present after " + TIMEOUT + " milliseconds") {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.not(EC.presenceOf(el)), t, msg);
  },

  /*
  ** Displays msg if el wasn't visible after t milliseconds
  */
  waitForVisibility: async function(el, t = TIMEOUT,
    msg = "Element was still invisible after " + TIMEOUT + " milliseconds") {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.visibilityOf(el), t, msg);
  },

  /*
  ** Displays msg if el was visible after t milliseconds
  */
  waitForNoVisibility: async function(el, t = TIMEOUT,
    msg = "Element was still visible after " + TIMEOUT + " milliseconds") {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.not(EC.visibilityOf(el)), t, msg);
  },

  /*
  ** Returns an array of all visible elements in arr
  */
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
