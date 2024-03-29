const helpers = require('../../helpers');
const ConcessionPageObject = require('../page_objects/concession.pageObject');
const specData = require('../data/concession.scenario.data.json');

describe('Concessions', function() {
  const concessionPage = new ConcessionPageObject();

  dataSpec(specData, (data, iteration) => {
    it(`Create ${data.name} concession`, async function() {
      let el;

      await concessionPage.get();
      await helpers.waitForSpinner();
      if (iteration === 1) {
        await concessionPage.pointOfSaleButton.click();
        await helpers.waitForSpinner();
      };
      await concessionPage.createPointOfSaleButton.click();
      await helpers.waitForVisibility(concessionPage.createPointOfSaleDialog);
      await concessionPage.pointOfSaleAddressInput.sendKeys(data.address);
      await concessionPage.pointOfSaleAddressInput.sendKeys(protractor.Key.DOWN);
      await concessionPage.pointOfSaleAddressInput.sendKeys(protractor.Key.RETURN);
      await concessionPage.pointOfSaleNameInput.sendKeys(data.name + TIMESTAMP);
      await concessionPage.pointOfSalePhoneInput.sendKeys(data.phone);
      await concessionPage.pointOfSaleShortNameInput.sendKeys(data.shortname + TIMESTAMP);
      await concessionPage.pointOfSaleBonusInput.sendKeys(data.bonus);
      await concessionPage.pointOfSaleCity.click();
      await helpers.waitForVisibility(concessionPage.pointOfSaleCityResults.first());
      el = await helpers.getFromDropdownText(data.city, concessionPage.pointOfSaleCityResults);
      await helpers.scrollIntoView(el[0]);
      await el[0].click();
      if (data.active === true) {
        await concessionPage.pointOfSaleActiveSwitch.click();
      };
      await concessionPage.pointOfSaleGroup.click();
      await concessionPage.pointOfSaleGroupInput.sendKeys(`${data.group} ${TIMESTAMP}`);
      el = await concessionPage.pointOfSaleGroupResults;
      await helpers.scrollIntoView(el[0]);
      await el[0].click();
      await helpers.asyncForEach(data.openHours, async (day, idx, days) => {
        let el = await {
          pointOfSaleDay: concessionPage.pointOfSaleDay.get(idx),
          pointOfSaleDayResults: concessionPage.pointOfSaleDayResults,
          pointOfSaleDayStartInput: concessionPage.pointOfSaleDayStartInput.get(idx),
          pointOfSaleDayEndInput: concessionPage.pointOfSaleDayEndInput.get(idx),
          pointOfSaleDayPauseCheckbox: concessionPage.pointOfSaleDayPauseCheckbox.get(idx),
          pointOfSaleDayPauseStartInput: concessionPage.pointOfSaleDayPauseStartInput.get(idx),
          pointOfSaleDayPauseEndInput: concessionPage.pointOfSaleDayPauseEndInput.get(idx)
        };

        if (days[idx + 1] !== undefined) {
          await concessionPage.pointOfSaleAddDayButton.click();
        };

        await el.pointOfSaleDay.click();
        await el.pointOfSaleDayResults.first().click();

        if (day.length > 2) {
          await el.pointOfSaleDayPauseCheckbox.click();
          await el.pointOfSaleDayPauseStartInput.sendKeys(day[2]);
          await el.pointOfSaleDayPauseEndInput.sendKeys(day[3]);
        };

        await el.pointOfSaleDayStartInput.sendKeys(day[0]);
        return el.pointOfSaleDayEndInput.sendKeys(day[1]);
      });

      await concessionPage.pointOfSaleAnnualPudInput.sendKeys(data.volAfterSales);
      await concessionPage.pointOfSaleAnnualVnInput.sendKeys(data.volVN);
      await concessionPage.pointOfSaleAnnualVoInput.sendKeys(data.volVO);
      await concessionPage.pointOfSaleAnnualCommentInput.sendKeys(data.comment);
      await concessionPage.pointOfSaleSubmitButton.click();
      await helpers.waitForVisibility(concessionPage.pointOfSaleConfirmationSubmitButton);
      await concessionPage.pointOfSaleConfirmationSubmitButton.click();
      await browser.refresh();
    });
  });
});
