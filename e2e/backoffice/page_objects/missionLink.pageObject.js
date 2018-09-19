module.exports = function() {
  this.url = '#/prescripteurs';

  this.updateButton = $('button[ng-click="prescripteursCtrl.updateMissionLinkAll()"]');
  this.createButton = $('button[ng-click="prescripteursCtrl.addMissionLinkAll()"]');
  this.deleteButton = $('button[ng-click="prescripteursCtrl.deleteMissionLinks()"]');
  this.addButton = $('button[ng-click="prescripteursCtrl.addElements()"]');
  this.removeButton = $('button[ng-click="prescripteursCtrl.deleteElements()"]');
  this.displayButton = $('button[ng-click="prescripteursCtrl.switchDisplayEmptyRow()"]');

  this.editTable = element(by.id('editRows'));

  this.creationRow = this.editTable.$$('tr').first();
  this.newMissionLinkBrand = element(by.model('prescripteursCtrl.newMissionLink.brand'));
  this.newMissionLinkInput = element(by.model('newLinkBrandSearch'));
  this.newMissionLinkResults = element.all(by.repeater('brand in prescripteursCtrl.all.brand'));
  this.newMissionLinkTypes = element(by.model('prescripteursCtrl.newMissionLink.missionTypeEnumSet'));
  this.newMissionLinkTypesResults = element.all(by.model('type in prescripteursCtrl.all.type'));
  this.newMissionLinkBookingCode = element(by.model('prescripteursCtrl.newMissionLink.bookingCode'));
  this.newMissionLinkBookingCodeInput = element(by.model('newLinkCodeSearch'));
  this.newMissionLinkBookingCodeResults = element.all(by.repeater('bookingCode in prescripteursCtrl.all.bookingCode'));
  this.newMissionLinkConcessionGroup = element(by.model('prescripteursCtrl.newMissionLink.concessionGroup'));
  this.newMissionLinkConcessionGroupInput = element(by.model('newLinkGroupSearch'));
  this.newMissionLinkConcessionGroupResults = element.all(by.repeater('cg in prescripteursCtrl.all.concessionGroup'));
  this.newMissionLinkCost = element(by.model('prescripteursCtrl.newMissionLink.cost'));
  this.newMissionLinkCostInput = element(by.model('newLinkCostSearch'));
  this.newMissionLinkCostResults = element.all(by.repeater('cost in prescripteursCtrl.all.cost'));
  this.newMissionLinkSaveButton = $('button[ng-click="prescripteursCtrl.createMissionLink()"]');

  this.createMissionLink = async function(data) {
    let el;

    await mlPage.newMissionLinkBrand.click();
    el = await helpers.getFromTickDropdown(data.prescriber + TIMESTAMP, mlPage.newMissionLinkResults);
    await el[0].click();
    await el[0].sendKeys(protractor.Key.ESCAPE);

    await helpers.asyncForEach(data.types, async (s) => {
      let el;

      el = await helpers.getFromTickDropdown(s, mlPage.newMissionLinkTypesResults);
      await helpers.scrollIntoView(el[0]);
      return el[0].click();
    });
  };

  this.editionRow = this.editTable.$$('tr').last();
  this.selectedInAllCheckbox = element(by.model('prescripteursCtrl.findAndUpdateAllFlag'));
  this.selectedInAllBrand = element(by.model('prescripteursCtrl.selectedInAll.brand'));
  this.selectedInAllInput = element(by.model('searchBrand'));
  this.selectedInAllResults = element.all(by.repeater('brand in prescripteursCtrl.all.brand' ));
  this.selectedInAllTypes = element(by.model('prescripteursCtrl.selectedInAll.type'));
  this.selectedInAllTypesResults = element.all(by.repeater('type in prescripteursCtrl.all.type'));
  this.selectedInAllBookingCode = element(by.model('prescripteursCtrl.selectedInAll.bookingCode'));
  this.selectedInAllBookingCodeInput = element(by.model('searchCode'));
  this.selectedInAllBookingCodeResults = element.all(by.repeater('b in prescripteursCtrl.all.bookingCode'));
  this.selectedInAllConcessionGroup = element(by.model('prescripteursCtrl.selectedInAll.concessionGroup'));
  this.selectedInAllConcessionGroupInput = element(by.model('searchGroup'));
  this.selectedInAllConcessionGroupResults = element.all(by.repeater('cg in prescripteursCtrl.all.concessionGroup'));
  this.selectedInAllCost = element(by.model('prescripteursCtrl.selectedInAll.cost'));
  this.selectedInAllCostInput = element(by.model('selectedCostSearch'));
  this.selectedInAllCostResults = element.all(by.repeater('c in prescripteursCtrl.all.cost'));
  this.selectedInAllLookButton = element(by.model('button[ng-click="prescripteursCtrl.lookForMissionLinks();"]'));
  this.selectedInAllDupButton = element(by.model('button[ng-click="prescripteursCtrl.showDuplicates()"]'));

  this.resultsTable = element(by.id('resultRows'));
  this.resultsRows = this.resultsTable.all(by.repeater('rowContent in prescripteursCtrl.rows'));
  this.resultsCheckbox = element(by.model('$index'));
  this.resultsModifyButton = $('button[ng-click="prescripteursCtrl.modifyMissionLink(rowContent);"]');
  this.resultsDeleteButton = $('button[ng-click="prescripteursCtrl.deleteMissionLink(rowContent.id, $index)"]');

  this.get = async function() {
    return browser.driver.get(browser.baseUrl + this.url);
  };

};
