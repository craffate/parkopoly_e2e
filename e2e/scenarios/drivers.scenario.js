const helpers = require('../helpers');
const DriversPageObject = require('../page_objects/drivers.pageObject');
const specData = require('../data/drivers.scenario.data.json');

describe('Drivers', function() {
  driversPage = new DriversPageObject();

  driverParisAll = new DriversPageObject();
  driverParisAll.values.lname = 'Driver';
  driverParisAll.values.fname = 'Paris All';
  driverParisAll.values.email = 'driver_paris_all' + browser.params.ts + '@parkopoly.fr';
  driverParisAll.values.address = '130 Rue de Lourmel';
  driverParisAll.values.phone = '0101010101';
  driverParisAll.values.status = 'ACTIVE';
  driverParisAll.values.badges = [];
  driverParisAll.values.points = '0';
  driverParisAll.values.occupation = 'SELF_EMPLOYED';
  driverParisAll.values.uniform = 'White shirt, black pants';
  driverParisAll.values.comment = 'Likes blue berries';
  driverParisAll.values.unpaid = true;
  driverParisAll.values.vat = false;
  driverParisAll.values.deposit = '1500';
  driverParisAll.values.depositDate = '28/01/2018';
  driverParisAll.values.depositComment = 'It\'s over Anakin! I have the high ground!';

  beforeAll(async function() {
    await driversPage.get();
  });

  dataSpec(specData, (data, iteration) => {
    describe(`Create ${data.lname} ${data.fname} driver`, function() {
      it('should open the driver creation dialog', async function() {
        await driversPage.createDriverButton.click();
        await helpers.waitFor(driversPage.createDriverDialog, 5000,
          'Couldn\'t open the creation form dialog');
      });

      it('should fill the form', async function() {
        await driversPage.lastNameInput.sendKeys(data.lname);
        await driversPage.firstNameInput.sendKeys(data.fname);
        await driversPage.emailInput.sendKeys(data.email);
        await driversPage.addressInput.sendKeys(data.address);
        await driversPage.telInput.sendKeys(data.phone);
        await driversPage.status.click();
        data.status = await helpers.getFromNonMaterialDropdown(
          data.status, 'status', driversPage.statusDropdownAll);
        await data.status[0].click();

        if (data.badges !== null) {
          await helpers.asyncForEach(data.badges, async (s) => {
            let el;

            el = await helpers.getFromDropdown(s, driversPage.badgeDropdownAll);
            await driversPage.badge.click();
            await helpers.scrollIntoView(el);
            await el.click();
          });
        };

        await driversPage.pointsInput.sendKeys(data.points);
        await driversPage.occupation.click();
        data.occupation = await helpers.getFromNonMaterialDropdown(
          data.occupation, 'p', driversPage.occupationDropdownAll);
        await data.occupation[0].click();
        await driversPage.equipmentInput.sendKeys(datauniform);
        await driversPage.commentInput.sendKeys(data.comment);
        await helpers.switchCheckbox(driversPage.unpaidSwitch, data.unpaid);
        await helpers.switchCheckbox(driversPage.vatSwitch, data.vat);
        await driversPage.depositInput.sendKeys(data.deposit);
        await driversPage.depositDateInput.sendKeys(data.depositDate);
        await driversPage.depositCommentInput.sendKeys(data.depositComment);
      });

      it('should submit the form', async function() {
        await driverLille.submitButton.click();
        await helpers.waitForNo(driverLille.createDriverDialog, 5000,
          'Couldn\'t close the creation form dialog');
      });
    });
  });
});
