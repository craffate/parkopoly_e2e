const helpers = require('../../helpers');
const ConcessionPageObject = require('../page_objects/concession.pageObject');
const specData = require('../data/concession_group.scenario.data.json');

describe('Concession groups', function() {
  const concessionPage = new ConcessionPageObject();

  dataSpec(specData, (data, iteration) => {
    describe(`Create ${data.name} concession group`, function() {
      it('should get to the page', async function() {
        await concessionPage.get();
        await helpers.waitForSpinner();
      });

      if (iteration === 1) {
        it('should click the point of sale group card', async function() {
          await concessionPage.pointOfSaleGroupButton.click();
          await helpers.waitForSpinner();
        });
      };

      it('should open the point of sale group creation form dialog', async function() {
        await concessionPage.createPointOfSaleGroupButton.click();
        await helpers.waitForVisibility(concessionPage.createPointOfSaleGroupDialog);
      });

      it('should fill the form', async function() {
        await concessionPage.pointOfSaleGroupNameInput.sendKeys(data.name);
      });

      it('should submit the form', async function() {
        await concessionPage.pointOfSaleGroupSubmitButton.click();
        await helpers.waitForToast();
      });
    });
  });
});
