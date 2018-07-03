module.exports = function() {
  this.values = {name: null, path: null};

  this.searchbar = element(by.model('logoFormCtrl.selectedObject'));
  this.searchbarInput = element(by.model('$select.search'));
  this.searchbarDropdown = element(by.repeater('object in $select.items'));
  this.searchbarDropdownAll = element.all(by.repeater('object in $select.items'));
  this.nameInput = element(by.model('logoFormCtrl.newObject.name'));
  this.uploadButton = element(by.id('logoUploader'));
  this.uploadButtonInput = this.uploadButton.$('input[type="file"]');
};
