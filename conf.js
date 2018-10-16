const fs = require('fs');
const reporters = require('jasmine-reporters');
const htmlReporter = require('protractor-beautiful-reporter');
const failFast = require('jasmine-fail-fast');
const helpers = require('./e2e/helpers');

const tsPath = './TIMESTAMP';

exports.config = {
  SELENIUM_PROMISE_MANAGER: false,
  rootElement: 'html',
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: false,
  specs: ['./e2e/backoffice/**/*.spec.js'],
  suites: {
    '1-6': [
      './e2e/backoffice/scenarios/accounts.scenario.js',                /* 1 */
      /*'./e2e/backoffice/scenarios/zone.scenario.js',*/                /* 1 */
      /*'./e2e/backoffice/scenarios/city.scenario.js',*/                /* 1 */
      './e2e/backoffice/scenarios/penalty.scenario.js',                 /* 1 */
      './e2e/backoffice/scenarios/bc.scenario.js',                      /* 1 */
      './e2e/backoffice/scenarios/logos.scenario.js',                   /* 1 */
      './e2e/backoffice/scenarios/cost.scenario.js',                    /* 2 */
      './e2e/backoffice/scenarios/brand.scenario.js',                   /* 2 */
      './e2e/backoffice/scenarios/document.scenario.js',                /* 3 */
      './e2e/backoffice/scenarios/badge.scenario.js',                   /* 3 */
      './e2e/backoffice/scenarios/concession_group.scenario.js',        /* 4 */
      './e2e/backoffice/scenarios/concession.scenario.js',              /* 5 */
      './e2e/backoffice/scenarios/users.scenario.js'                    /* 6 */
    ],
    '9-9': [
      /*'./e2e/backoffice/scenarios/admin.scenario.js'*/                /* 9 */
      './e2e/backoffice/scenarios/drivers.scenario.js'                  /* 9 */
    ],
    cft: './e2e/backoffice/cft/**/*.spec.js',
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
        '--start-maximized',
        '--disable-web-security', '--allow-running-insecure-content',
        '--allow-insecure-localhost', '--disable-browser-side-navigation',
        '--reduce-security-for-testing', '--window-size=1800,1600']
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
    await browser.waitForAngularEnabled(true);

    global.TIMESTAMP = fs.existsSync(tsPath) ?
      fs.readFileSync(tsPath, 'utf8') :
      await Date.now();

    global.TIMEOUT = 120000;

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

    await jasmine.getEnv().addReporter(failFast.init());

    await browser.driver.get(browser.baseUrl + '#/login');
    await helpers.waitForVisibility(browser.element(by.css('form[name="userForm"]')));
    await browser.driver.findElement(by.css('[type="email"]')).sendKeys(browser.params.login.usr);
    await browser.driver.findElement(by.css('[type="password"]')).sendKeys(browser.params.login.pwd);
    await browser.driver.findElement(by.css('[type="submit"]')).click();
    return helpers.testUrl(browser.baseUrl + '#/calendar_bo', 10000);
  }
};
