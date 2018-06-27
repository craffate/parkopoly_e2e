module.exports = function() {
  this.values = {name: null};

  this.searchbar = element(by.model('logoFormCtrl.selectedObject'));
  this.searchbarInput = this.searchbar.element(by.model('$select.search'));
  this.searchbarDropdown = this.searchbar.element(by.repeater('object in $select.items'));
  this.nameInput = element(by.model('logoFormCtrl.newObject.name'));
  this.uploadButton = element(by.id('logoUploader'));
};
