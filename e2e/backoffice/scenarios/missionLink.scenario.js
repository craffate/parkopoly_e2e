const helpers = require('../../helpers');
const MissionLinkPageObject = require('../page_objects/missionLink.pageObject');
const specData = require('../data/missionLink.scenario.data.json');

describe('Mission links', function() {
  const mlPage = new MissionLinkPageObject();

  beforeAll(async function() {
    await mlPage.get();
    await helpers.waitForSpinner();
  });

  dataSpec(specData, (data, iteration) => {
    describe(`Create ${data.prescriber} mission link`, function() {
      it('should display the mission link creation row', async function() {
        await mlPage.displayButton.click();
      });

      it('should fill the row', async function() {
        let el;

        /* Select prescriber */
        await mlPage.newMissionLinkBrand.click();
        el = await helpers.getFromTickDropdown(`${data.prescriber}${TIMESTAMP}`, mlPage.newMissionLinkBrandResults);
        await el[0].click();
        await el[0].sendKeys(protractor.Key.ESCAPE);

        /* Select mission types */
        await mlPage.newMissionLinkTypes.click();
        await helpers.asyncForEach(data.types, async (s, idx, arr) => {
          let el;

          el = await helpers.getFromTickDropdown(s, mlPage.newMissionLinkTypesResults);
          if (idx + 1 < arr.length) {
            return el[0].click();
          } else {
            await el[0].click();
            return el[0].sendKeys(protractor.Key.ESCAPE);
          };
        });

        /* Select booking code */
        await mlPage.newMissionLinkBookingCode.click();
        el = await helpers.getFromTickDropdown(`${data.bookingCode}${TIMESTAMP}`, mlPage.newMissionLinkBookingCodeResults);
        await el[0].click();
        await el[0].sendKeys(protractor.Key.ESCAPE);

        /* Select concession groups */
        await mlPage.newMissionLinkConcessionGroup.click();
        await helpers.asyncForEach(data.concessionGroups, async (s, idx, arr) => {
          let el;

          el = await helpers.getFromTickDropdown(`${s} ${TIMESTAMP}`, mlPage.newMissionLinkConcessionGroupResults);
          if (idx + 1 < arr.length) {
            return el[0].click();
          } else {
            await el[0].click();
            return el[0].sendKeys(protractor.Key.ESCAPE);
          };
        });

        /* Select cost zones */
        await mlPage.newMissionLinkCost.click();
        await helpers.asyncForEach(data.costZones, async (s, idx, arr) => {
          let el;

          el = await helpers.getFromTickDropdown(`${s}${TIMESTAMP}`, mlPage.newMissionLinkCostResults);
          if (idx + 1 < arr.length) {
            return el[0].click();
          } else {
            await el[0].click();
            return el[0].sendKeys(protractor.Key.ESCAPE);
          };
        });
      });

      it('should click the save button', async function() {
        await mlPage.newMissionSaveButton.click();
      });
    });
  });
});
