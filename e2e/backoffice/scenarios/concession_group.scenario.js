const helpers = require('../../helpers');
const ConcessionPageObject = require('../page_objects/concession.pageObject');
const specData = require('../data/concession_group.scenario.data.json');

describe('Concession groups', function() {
  const concessionPage = new ConcessionPageObject();

  dataSpec(specData, (data, iteration) => {
    it(`Create ${data.name} concession group`, async function() {
      await concessionPage.get();
      await helpers.waitForSpinner();
      if (iteration === 1) {
        await concessionPage.pointOfSaleGroupButton.click();
        await helpers.waitForSpinner();
      }
      await concessionPage.createPointOfSaleGroupButton.click();
      await helpers.waitForVisibility(concessionPage.createPointOfSaleGroupDialog);
      await concessionPage.pointOfSaleGroupNameInput.sendKeys(`${data.name} ${TIMESTAMP}`);
      await helpers.scrollIntoView(concessionPage.pointOfSaleGroupSubmitButton);
      await concessionPage.pointOfSaleGroupSubmitButton.click();

      /*
       * https://stackoverflow.com/a/46532400
       */
      await browser.waitForAngularEnabled(false);
      await helpers.waitForNoVisibility(concessionPage.createPointOfSaleGroupDialog);
      await browser.waitForAngularEnabled(true);
    });
  });
});
