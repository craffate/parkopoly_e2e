module.exports = function(Parent) {
  this.brandSelect = element(by.id('car-brands-select'));
  this.brandSelectResults = this.brandSelect.$$('a.list-group-item');
  this.modelInput = element(by.id('car-model'));
  this.colorInput = element(by.id('car-color'));
  this.plateInput = element(by.id('car-plate-number'));
  this.serialInput = element(by.id('car-serial-number'));
  this.submitButton = $('button[type="submit"]');
};

module.exports = step5;
