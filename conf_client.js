const fs = require('fs');
const reporters = require('jasmine-reporters');
const htmlReporter = require('protractor-beautiful-reporter');
const helpers = require('./e2e/helpers');

const tsPath = './TIMESTAMP';

exports.config = {
  SELENIUM_PROMISE_MANAGER: false,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine2',
  directConnect: true,
  allScriptsTimeout: 30000,
  useAllAngular2AppRoots: true,
  specs: ['./e2e/client/**/*.spec.js'],
  suites: {
    scenarios: './e2e/client/scenarios/**/*.scenario.js'
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
  baseUrl: 'https://client-test.parkopoly.fr/',
  onPrepare: async function() {
    browser.ignoreSynchronization = false;

    global.TIMESTAMP = fs.existsSync(tsPath) ?
    fs.readFileSync(tsPath, 'utf8') :
    await Date.now();

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

    await browser.waitForAngularEnabled(false);
    await browser.get('login');
    await browser.driver.findElement(by.name('email')).sendKeys(browser.params.login.usr);
    await browser.driver.findElement(by.name('password')).sendKeys(browser.params.login.pwd);
    await browser.driver.findElement(by.css('button[type="submit"]')).click();
    return browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return (browser.baseUrl === url);
      });
    }, 10000);
  }
};
