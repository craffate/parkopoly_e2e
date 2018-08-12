const reporters = require('jasmine-reporters');
const htmlReporter = require('protractor-beautiful-reporter');
const helpers = require('./e2e/helpers');

exports.config = {
  SELENIUM_PROMISE_MANAGER: false,
  rootElement: 'html',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine',
  directConnect: false,
  specs: ['./e2e/**/*.spec.js'],
  suites: {
    cft: './e2e/cft/**/*.spec.js',
    scenarios: './e2e/scenarios/**/*.scenario.js'
  },
  jasmineNodeOpts: {
    isVerbose: true,
    defaultTimeoutInterval: 120000,
    print: () => {}
  },
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 3,
    chromeOptions: {
      args: ['--disable-extensions', '--show-fps-counter=true',
      '--disable-infobars', '--incognito', '--disable-gpu',
      '--headless', '--start-maximized']
    }
  },
  params: {
    ts: Date.now(),
    login: {
      usr: process.env.USR_E2E,
      pwd: process.env.PWD_E2E
    }
  },
  baseUrl: 'https://dashboard-test.parkopoly.fr',
  onPrepare: async function() {
    global.dataSpec = (data, spec) => {
      const rs = Array.isArray(data) ? data : [data];

      rs.forEach((r, idx) => {
        spec(r, idx + 1);
      });
    };
    /* Synchronization causes problem when using browser.get()
     * with AngularJS apps. It took me hours to figure that out.
     * It never ever occured to me that a GOOGLE PRODUCT
     * made specifically for testing GOOGLE PRODUCTS
     * which states precisely on its homepage
     * that it's made for testing ANGULARJS APPLICATIONS
     * could fail miserably when doing so.
     */
    const EC = protractor.ExpectedConditions;
    await browser.waitForAngularEnabled(false);
    await jasmine.getEnv().addReporter(new reporters.TerminalReporter({
      verbosity: 3,
      color: true,
      showStack: false
    }));
    await jasmine.getEnv().addReporter(new htmlReporter({
      baseDirectory: 'reports',
      screenshotsSubfolder: 'screenshots',
      jsonsSubfolder: 'json',
      docName: `${Date.now()}.html`,
      docTitle: 'Parkopoly E2E tests report',
      preserveDirectory: false,
      gatherBrowserLogs: true
    }).getJasmine2Reporter());
    await browser.driver.manage().deleteAllCookies(); 
    await browser.get('/#/login');
    await browser.executeScript('window.localStorage.clear();');
    await browser.executeScript('window.sessionStorage.clear();');
    await browser.wait(EC.presenceOf($('[name="userForm"]')), 5000, 'Login form not found');
    await browser.driver.findElement(by.css('[type="email"]')).sendKeys(browser.params.login.usr);
    await browser.driver.findElement(by.css('[type="password"]')).sendKeys(browser.params.login.pwd);
    await browser.driver.findElement(by.css('[type="submit"]')).click();
    return helpers.testUrl(browser.baseUrl + '/#/calendar_bo', 10000);
  }
};
