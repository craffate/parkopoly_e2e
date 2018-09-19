/*
 ** testType values
 ** 0: From scratch
 ** 1: Update
 */

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
    describe(`${data.prescriber} (test type: ${data.testType})`, function() {
      it('should display the mission link creation row', async function() {
        await mlPage.displayButton.click();
      });

      it('should fill the row', async function() {
        let el;

        /* Select prescriber */
        await mlPage.newMissionLinkBrand.click();
        el = await helpers.getFromTickDropdown(data.prescriber + TIMESTAMP, mlPage.newMissionLinkResults);
        await el[0].click();
        await el[0].sendKeys(protractor.Key.ESCAPE);

        /* Select mission types */
        await mlPage.newMissionLinkTypes.click();
        await helpers.asyncForEach(data.types, async (s) => {
          let el;

          el = await helpers.getFromTickDropdown(s, mlPage.newMissionLinkTypesResults);
          await helpers.scrollIntoView(el[0]);
          return el[0].click();
        });
        await mlPage.newMissionLinkTypesResults.first().sendKeys(protractor.Key.ESCAPE);

        /* Select booking code */
        await mlPage.newMissionLinkBookingCode.click();
        el = await helpers.getFromDropdown(data.bookingCode, mlPage.newMissionLinkBookingCodeResults);
        await el[0].click();
        await el[0].sendKeys(protractor.Key.ESCAPE);

        /* Select concession groups */
        await mlPage.newMissionConcessionGroup.click();
        await helpers.asyncForEach(data.concessionGroups, async (s) => {
          let el;

          el = await helpers.getFromTickDropdown(s, mlPage.newMissionConcessionGroupsResults);
          await helpers.scrollIntoView(el[0]);
          return el[0].click();
        });
        await mlPage.newMissionLinkConcessionGroupsResults.first().sendKeys(protractor.Key.ESCAPE);

        /* Select cost zones */
        await mlPage.newMissionCost.click();
        await helpers.asyncForEach(data.costZones, async (s) => {
          let el;

          el = await helpers.getFromTickDropdown(s, mlPage.newMissionLinkCostResults);
          await el[0].click();
          await el[0].sendKeys(protractor.Key.ESCAPE);
        });
        await mlPage.newMissionLinkCostResults.first().click();
      });

      it('should click the save button', async function() {
        await mlPage.newMissionSaveButton.click();
      });
    });
  });
});
