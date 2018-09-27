const pickupMission = require('./pickupMission.pageObject');
const deliveryMission = require('./deliveryMission.pageObject');
const vnvoMission = require('./vnvoMission.pageObject');
const isMission = require('./isMission.pageObject');

module.exports = function() {
  this.url = 'new_mission';
  this.routerLink = $(`a[href="/${this.url}"`);
  this.form = $('par-mission-preset > form');
  this.missionTypeBlocks = $$('par-mission-type-block');
  
  this.pickupMission = new pickupMission(this);
  this.deliveryMission = new deliveryMission(this);
  this.vnvoMission = new vnvoMission(this);
  this.isMission = new isMission(this);

  this.get = async function() {
    return browser.driver.get(this.url);
  };

  this.getRouter = async function() {
    return this.routerLink.click();
  };

  this.selectMissionType = async function(type = 0) {
    return this.missionTypeBlocks.get(type).click();
  };
};
