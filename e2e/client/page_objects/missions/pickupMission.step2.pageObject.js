module.exports = function(Parent) {
  this.clientLastNameInput = element(by.id('clientLastName'));
  this.clientFirstNameInput = element(by.id('clientFirstName'));
  this.clientCompanyInput = element(by.id('clientCompany'));
  this.clientEmail = element(by.id('clientEmail'));
  this.clientPhoneNumber = element(by.id('clientPhoneNumber'));
  this.driverMessageInput = element(by.id('driverMessage'));
  this.meetingAddressInput = element(by.id('meetingAddress'));
  this.companyNameInput = element(by.id('companyName'));
  this.contactNameInput = element(by.id('contactName'));
  this.contactPhoneInput = element(by.id('contactPhone'));
  this.submitButton = $('button[type="submit"]');
};

module.exports = step2;
