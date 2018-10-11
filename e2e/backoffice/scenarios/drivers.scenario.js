const helpers = require('../../helpers');
const DriversPageObject = require('../page_objects/drivers.pageObject');
const specData = require('../data/drivers.scenario.data.json');

describe('Drivers', function() {
  const driversPage = new DriversPageObject();

  beforeAll(async function() {
    await driversPage.get();
  });

  dataSpec(specData, (data, iteration) => {
    it(`Create ${data.lname} ${data.fname} driver`, async function() {
      let el;

      await driversPage.createDriverButton.click();
      await helpers.waitFor(driversPage.createDriverDialog);
      await driversPage.lastNameInput.sendKeys(data.lname);
      await driversPage.firstNameInput.sendKeys(data.fname + TIMESTAMP);
      await driversPage.emailInput.sendKeys(data.email + TIMESTAMP);
      await driversPage.addressInput.sendKeys(data.address);
      await driversPage.addressInput.sendKeys(protractor.Key.DOWN);
      await driversPage.addressInput.sendKeys(protractor.Key.ENTER);
      await driversPage.telInput.sendKeys(data.phone);
      await driversPage.status.click();
      el = await helpers.getFromDropdownValue(data.status, driversPage.statusDropdown);
      await el[0].click();
      if (data.badges !== null) {
        await helpers.asyncForEach(data.badges, async (s) => {
          let el;

          el = await helpers.getFromDropdownValue(s, driversPage.badgeDropdown);
          await driversPage.badge.click();
          await helpers.scrollIntoView(el[0]);
          return el[0].click();
        });
      };
      await driversPage.pointsInput.sendKeys(data.points);
      await driversPage.occupation.click();
      el = await helpers.getFromDropdownValue(data.occupation, driversPage.occupationDropdown);
      await el[0].click();
      await driversPage.equipmentInput.sendKeys(data.uniform);
      await driversPage.commentInput.sendKeys(data.comment);
      await helpers.switchCheckbox(driversPage.unpaidSwitch, data.unpaid);
      await helpers.switchCheckbox(driversPage.vatSwitch, data.vat);
      await driversPage.depositInput.sendKeys(data.deposit);
      await driversPage.depositDateInput.sendKeys(data.depositDate);
      await driversPage.depositCommentInput.sendKeys(data.depositComment);
      await driversPage.submitButton.click();
      await helpers.waitForNo(driversPage.createDriverDialog);
      await browser.refresh();
    });
  });
});
