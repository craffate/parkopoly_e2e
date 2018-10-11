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
    it(`Create ${data.prescriber} mission link`, async function() {
      let el;

      await mlPage.displayButton.click();

      /* Select prescriber */
      await mlPage.newMissionLinkBrand.click();
      await helper.asyncForEach(data.types, async(s, idx, arr) => {
        let el;

        el = await helpers.getFromDropdownText(`${s}${TIMESTAMP}`, mlPage.newMissionLinkBrandResults);
        if (idx + 1 < arr.length) {
          return el[0].click();
        } else {
          await el[0].click();
          return helpers.closeDropdown();
        };
      });

      /* Select mission types */
      await mlPage.newMissionLinkTypes.click();
      await helpers.asyncForEach(data.types, async (s, idx, arr) => {
        let el;

        el = await helpers.getFromDropdownText(s, mlPage.newMissionLinkTypesResults);
        if (idx + 1 < arr.length) {
          return el[0].click();
        } else {
          await el[0].click();
          return helpers.closeDropdown();
        };
      });

      /* Select booking code */
      await mlPage.newMissionLinkBookingCode.click();
      el = await helpers.getFromDropdownText(`${data.bookingCode}${TIMESTAMP}`, mlPage.newMissionLinkBookingCodeResults);
      await el[0].click();
      return helpers.closeDropdown();

      /* Select concession groups */
      await mlPage.newMissionLinkConcessionGroup.click();
      await helpers.asyncForEach(data.concessionGroups, async (s, idx, arr) => {
        let el;

        el = await helpers.getFromDropdownText(`${s} ${TIMESTAMP}`, mlPage.newMissionLinkConcessionGroupResults);
        if (idx + 1 < arr.length) {
          return el[0].click();
        } else {
          await el[0].click();
          return helpers.closeDropdown();
        };
      });

      /* Select cost zones */
      await mlPage.newMissionLinkCost.click();
      el = await helpers.getFromDropdownText(`${data.costZone}${TIMESTAMP}`, mlPage.newMissionLinkCostResults);
      await el[0].click();
      return helpers.closeDropdown();
      await mlPage.newMissionLinkSaveButton.click();
      await helpers.waitForVisibility($('button[ng-click="dialog.hide()"]'));
      await $('button[ng-click="dialog.hide()"]').click();
      await browser.refresh();
    });
  });
});
