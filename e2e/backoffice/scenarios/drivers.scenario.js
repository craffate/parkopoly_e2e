const helpers = require('../../helpers');
const DriversPageObject = require('../page_objects/drivers.pageObject');
const specData = require('../data/drivers.scenario.data.json');

describe('Drivers', function() {
  const driversPage = new DriversPageObject();

  beforeAll(async function() {
    await driversPage.get();
  });

  dataSpec(specData, (data, iteration) => {
    describe(`Create ${data.lname} ${data.fname} driver`, function() {
      it('should open the driver creation dialog', async function() {
        await driversPage.createDriverButton.click();
        await helpers.waitFor(driversPage.createDriverDialog);
      });

      it('should fill the form', async function() {
        let el;

        await driversPage.lastNameInput.sendKeys(data.lname);
        await driversPage.firstNameInput.sendKeys(data.fname + TIMESTAMP);
        await driversPage.emailInput.sendKeys(data.email + TIMESTAMP);
        await driversPage.addressInput.sendKeys(data.address);
        await driversPage.addressInput.sendKeys(protractor.Key.DOWN);
        await driversPage.addressInput.sendKeys(protractor.Key.ENTER);
        await driversPage.telInput.sendKeys(data.phone);
        await driversPage.status.click();
        el = await helpers.getFromDropdown(data.status, driversPage.statusDropdownAll);
        await el[0].click();

        if (data.badges !== null) {
          await helpers.asyncForEach(data.badges, async (s) => {
            let el;

            el = await helpers.getFromDropdown(s, driversPage.badgeDropdownAll);
            await driversPage.badge.click();
            await helpers.scrollIntoView(el[0]);
            return el[0].click();
          });
        };

        await driversPage.pointsInput.sendKeys(data.points);
        await driversPage.occupation.click();
        el = await helpers.getFromDropdown(data.occupation, driversPage.occupationDropdownAll);
        await el[0].click();
        await driversPage.equipmentInput.sendKeys(data.uniform);
        await driversPage.commentInput.sendKeys(data.comment);
        await helpers.switchCheckbox(driversPage.unpaidSwitch, data.unpaid);
        await helpers.switchCheckbox(driversPage.vatSwitch, data.vat);
        await driversPage.depositInput.sendKeys(data.deposit);
        await driversPage.depositDateInput.sendKeys(data.depositDate);
        await driversPage.depositCommentInput.sendKeys(data.depositComment);
      });

      it('should submit the form', async function() {
        await driversPage.submitButton.click();
        await helpers.waitForNo(driversPage.createDriverDialog);
      });
    });
  });
});
