const reporters = require('jasmine-reporters');
const htmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  SELENIUM_PROMISE_MANAGER: false,
  rootElement: 'html',
  seleniumServerJar: './bin/selenium-server-standalone-3.12.0.jar',
  seleniumPort: '4444',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine2',
  directConnect: false,
  specs: ['./e2e/**/*.spec.js'],
  suites: {
    cft: './e2e/cft/**/*.spec.js',
    scenarios: './e2e/scenarios/**/*.scenario.js'
  },
  jasmineNodeOpts: {
    isVerbose: true,
    defaultTimeoutInterval: 15000,
    print: function() {}
  },
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--disable-extensions', '--show-fps-counter=true', '--disable-infobars', '--incognito', '--disable-gpu', '--headless']
    }
  },
  params: {
    ts: Date.now(),
    env: 'test',
    login: {
      usr: process.env.USR_E2E,
      pwd: process.env.PWD_E2E
    }
  },
  onPrepare: async function() {
    const EC = await protractor.ExpectedConditions;
    await jasmine.getEnv().addReporter(new reporters.TerminalReporter({
      verbosity: 3,
      color: true,
      showStack: false
    }));
    await jasmine.getEnv().addReporter(new reporters.JUnitXmlReporter({
      savePath: 'reports/xml',
      consolidateAll: false
    }));
    await jasmine.getEnv().addReporter(new htmlReporter({
      savePath: 'reports/html',
      screenshotFolder: 'screenshots',
      takeScreenshots: true,
      consolidateAll: false
    }));
    await browser.driver.manage().window().maximize();
    await browser.get('https://dashboard-' + browser.params.env + '.parkopoly.fr');
    await browser.driver.findElement(by.css('[type="email"]')).sendKeys(browser.params.login.usr);
    await browser.driver.findElement(by.css('[type="password"]')).sendKeys(browser.params.login.pwd);
    await browser.driver.findElement(by.css('[type="submit"]')).click();
    return await browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return (/calendar_bo/).test(url);
      });
    }, 10000);
  }
};
