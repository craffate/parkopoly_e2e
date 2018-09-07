const helpers = require('../../helpers');
const ConcessionPageObject = require('../page_objects/concession.pageObject');
const specData = require('../data/concession.scenario.data.json');

describe('Concessions', function() {
  const concessionPage = new ConcessionPageObject();

  dataSpec(specData, (data, iteration) => {
    describe(`Create ${data.name} concession`, function() {
      it('should get to the page', async function() {
        await concessionPage.get();
        await helpers.waitForSpinner();
      });

      if (iteration === 1) {
        it('should click the point of sale card', async function() {
          await concessionPage.pointOfSaleButton.click();
          await helpers.waitForSpinner();
        });
      };

      it('should open the point of sale creation form dialog', async function() {
        await concessionPage.createPointOfSaleButton.click();
        await helpers.waitForVisibility(concessionPage.createPointOfSaleDialog);
      });

      it('should fill the form', async function() {
        let el;

        await concessionPage.pointOfSaleAddressInput.sendKeys(data.address);
        await concessionPage.pointOfSaleAddressInput.sendKeys(protractor.Key.DOWN);
        await concessionPage.pointOfSaleAddressInput.sendKeys(protractor.Key.RETURN);
        await concessionPage.pointOfSaleNameInput.sendKeys(data.name + TIMESTAMP);
        await concessionPage.pointOfSalePhoneInput.sendKeys(data.phone);
        await concessionPage.pointOfSaleShortNameInput.sendKeys(data.shortname + TIMESTAMP);
        await concessionPage.pointOfSaleBonusInput.sendKeys(data.bonus);
        await concessionPage.pointOfSaleCity.click();
        el = await helpers.getFromDynamicDropdown(data.city, concessionPage.pointOfSaleCityResults);
        await helpers.scrollIntoView(el[0]);
        await el[0].click();

        if (data.active === true) {
          await concessionPage.pointOfSaleActiveSwitch.click();
        };

        await concessionPage.pointOfSaleGroup.click();
        el = await helpers.getFromBindHtmlDropdown(`${data.group} ${TIMESTAMP}`,
          'concessionGroup.name', concessionPage.pointOfSaleGroupResults);
        await el[0].click();

        await helpers.asyncForEach(data.openHours, async (arr, idx) => {
          if (await concessionPage.pointOfSaleAddDayButton.isPresent()) {
            await concessionPage.pointOfSaleAddDayButton.click();
          };

          await concessionPage.pointOfSaleDay.get(idx).click();
          await concessionPage.pointOfSaleDayResults.first().click();

          if (arr.length > 2) {
            await concessionPage.pointOfSaleDayPauseCheckbox.get(idx).click();
            await concessionPage.pointOfSaleStartInput.get(idx).sendKeys(arr[2]);
            await concessionPage.pointOfSaleEndInput.get(idx).sendKeys(arr[3]);
          };

          await concessionPage.pointOfSaleDayStartInput.get(idx).sendKeys(arr[0]);
          return concessionPage.pointOfSaleDayEndInput.get(idx).sendKeys(arr[1]);
        });

        await concessionPage.pointOfSaleAnnualPudInput.sendKeys(data.volAfterSales);
        await concessionPage.pointOfSaleAnnualVnInput.sendKeys(data.volVN);
        await concessionPage.pointOfSaleAnnualVoInput.sendKeys(data.volVO);
        await concessionPage.pointOfSaleAnnualCommentInput.sendKeys(data.comment);
      });

      it('should submit the form', async function() {
        await concessionPage.pointOfSaleSubmitButton.click();
        await helpers.waitForToast();
      });
    });
  });
});
