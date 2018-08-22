const reporters = require('jasmine-reporters');
const htmlReporter = require('protractor-beautiful-reporter');
const helpers = require('./e2e/helpers');

exports.config = {
  SELENIUM_PROMISE_MANAGER: false,
  rootElement: 'html',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine2',
  directConnect: false,
  specs: ['./e2e/backoffice/**/*.spec.js'],
  suites: {
    brands: [
      './e2e/backoffice/scenarios/penalty.scenario.js',
      './e2e/backoffice/scenarios/bc.scenario.js',
      './e2e/backoffice/scenarios/logos.scenario.js',
      './e2e/backoffice/scenarios/brand.scenario.js'
    ],
    cft: './e2e/backoffice/cft/**/*.spec.js',
    scenarios: './e2e/backoffice/scenarios/**/*.scenario.js'
  },
  jasmineNodeOpts: {
    isVerbose: true,
    defaultTimeoutInterval: 120000,
    print: () => {}
  },
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: false,
    maxInstances: 3,
    chromeOptions: {
      args: ['--disable-extensions', '--show-fps-counter=true',
        '--disable-infobars', '--incognito', '--disable-gpu',
        '--headless', '--start-maximized',
        '--disable-web-security', '--allow-running-insecure-content',
        '--allow-insecure-localhost', '--disable-browser-side-navigation',
        '--reduce-security-for-testing']
    }
  },
  params: {
    login: {
      usr: process.env.USR_E2E,
      pwd: process.env.PWD_E2E
    }
  },
  baseUrl: 'https://dashboard-test.parkopoly.fr/',
  onPrepare: async function() {
    browser.ignoreSynchronization = false;
    global.TIMESTAMP = await Date.now();
    global.TIMEOUT = 15000;
    global.dataSpec = (data, spec) => {
      const rs = Array.isArray(data) ? data : [data];

      rs.forEach((r, idx) => {
        spec(r, idx + 1);
      });
    };

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

    await browser.driver.get(browser.baseUrl + '#/login');
    await helpers.waitForVisibility(browser.element(by.css('form[name="userForm"]')));
    await browser.driver.findElement(by.css('[type="email"]')).sendKeys(browser.params.login.usr);
    await browser.driver.findElement(by.css('[type="password"]')).sendKeys(browser.params.login.pwd);
    await browser.driver.findElement(by.css('[type="submit"]')).click();
    return helpers.testUrl(browser.baseUrl + '#/calendar_bo', 10000);
  }
};
