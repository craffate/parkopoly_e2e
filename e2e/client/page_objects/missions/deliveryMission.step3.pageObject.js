module.exports = function(Parent) {
  this.meetingDateInput = element(by.id('meeting-date-pu')).$('input');
  this.meetingTimeInput = element(by.id('meeting-customer-time')).$('input');
  this.meetingAddressInput = element(by.id('meeting-address'));
  this.driverMessageInput = element.all(by.id('driver-message')).first();
  this.deliverySwitch = $('label[for="with-delivery"]');
  this.deliveryDateInput = element(by.id('meeting-date-pudelivery')).$('input');
  this.deliveryTimeInput = element(by.id('delivery-concession-time')).$('input');
  this.deliveryCustomerTimeCheckbox = $('label[for="delivery-on-time"]');
  this.deliveryCustomerTimeInput = element(by.id('delivery-customer-time')).$('input');
  this.deliveryAddressCheckbox = $('label[for="address-same"]');
  this.deliveryCompanyRadio = $('label[for="undefined-yes"]')
  this.deliveryCompanyNameInput = element(by.id('company-name'));
  this.deliveryCompanyAddressInput = element(by.id('deliveryCompanyAddress'));
  this.deliveryHomeRadio = $('label[for="undefined-no"]')
  this.deliveryHomeAddressInput = element(by.id('deliveryAddress'));
  this.deliveryDriverMessageInput = element.all(by.id('driver-message')).last();
  this.submitButton = $('button[type="submit"]');
};

module.exports = step3;
