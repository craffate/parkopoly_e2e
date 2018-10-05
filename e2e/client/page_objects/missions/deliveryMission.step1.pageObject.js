module.exports = function(Parent) {
  this.clientAddressInput = $('input#client-address');
  this.concession = $('par-select#concessions-select');
  this.concessionInput = this.concession.$('input');
  this.concessionChange = $('div.concession-block-info u');
  this.concessionToInvoice = $('par-select#concessions-to-invoice-select');
  this.concessionToInvoiceInput = this.concessionToInvoice.$('input');
  this.concessionToInvoiceResults = this.concessionToInvoice.$$('a');
  this.replacementCarSwitch = $('par-switcher[ng-reflect-id="withReplacementCar"]');
  this.replacementSameConcessionSwitch = $('par-switcher[ng-reflect-id="replaceToTheSameConcession"]');
  this.replacementConcession = $('par-select#concessions-to-the-same-select');
  this.replacementConcessionInput = this.replacementConcession.$('input');
  this.replacementConcessionResults = this.replacementConcession.$$('a');
  this.submitButton = $('button[type="submit"]');
};

module.exports = step1;
