module.exports = function() {
  this.nameInput = element(by.model('logoFormCtrl.newObject.name'));
  this.uploadButton = element(by.id('logoUploader'));
  this.uploadButtonInput = this.uploadButton.$('input[type="file"]');
};
