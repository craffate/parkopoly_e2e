var helpers = require('../helpers');
var DashboardIngredients = require('./ingredients.pageObject');

describe('Parkopoly dashboard ingredients page', function() {
  debugger;
  ts = Date.now();

  beforeAll(function() {
    DashboardIngredients.get();
  });

  describe('Create ingredients', function() {
    describe('When landing on the page, check for required elements', function() {
      it('should have a searchbar', function() {
        expect(DashboardIngredients.searchbar.isDisplayed()).toBe(true);
      });

      describe('When required elements are found, it should create a badge ingredient', function() {
        it('should click the searchbar', function() {
          DashboardIngredients.searchbar.click();
        });

        it('should click the searchbar badge dropdown option', function() {
          DashboardIngredients.searchbarDropdownBadge.click();
        });

        describe('When the badge form is dislayed, it should check for required elements', function() {
          it('should have a searchbar', function() {
            expect(DashboardIngredients.badgeSearchbar.isDisplayed()).toBe(true);
          });

          it('should have a name input', function() {
            expect(DashboardIngredients.badgeNameInput.isDisplayed()).toBe(true);
          });

          it('should have a model menu', function() {
            expect(DashboardIngredients.badgeModel.isDisplayed()).toBe(true);
          });

          it('should have a missions menu', function() {
            expect(DashboardIngredients.badgeMissions.isDisplayed()).toBe(true);
          });

          it('should have an options menu', function() {
            expect(DashboardIngredients.badgeOptions.isDisplayed()).toBe(true);
          });

          it('should have a booking code menu', function() {
            expect(DashboardIngredients.badgeBookingcodes.isDisplayed()).toBe(true);
          });

          it('should have a submit button', function() {
            expect(DashboardIngredients.submitButton.isDisplayed()).toBe(true);
          });
        });
        describe('When every elements are found, it should fill the badge form', function() {
          it('should fill the name input', function() {
            DashboardIngredients.badgeNameInput.sendKeys('Parkopoly_E2E_Badge' + ts);
          });

          it('should select a model', function() {
            DashboardIngredients.badgeModel.click();
            DashboardIngredients.badgeModelDropdownAll.then(function(arr) {
              DashboardIngredients.model = arr[helpers.getRandomInt(arr.length)];
              DashboardIngredients.model.click();
            });
          });

          it('should select a mission', function() {
            DashboardIngredients.badgeMissions.click();
            DashboardIngredients.badgeMissionsDropdownAll.then(function(arr) {
              DashboardIngredients.mission = arr[helpers.getRandomInt(arr.length)];
              DashboardIngredients.mission.click();
              DashboardIngredients.badgeMissionsDropdown.sendKeys(protractor.Key.ESCAPE);
            });
          });

          it('should select an option', function() {
            DashboardIngredients.badgeOptions.click();
            DashboardIngredients.badgeOptionsDropdownPickupAll.then(function(arr) {
              DashboardIngredients.option = arr[helpers.getRandomInt(arr.length)];
              DashboardIngredients.option.click();
              DashboardIngredients.badgeOptionsDropdownPickup.sendKeys(protractor.Key.ESCAPE);
            });
          });

          it('should select a booking code', function() {
            DashboardIngredients.badgeBookingcodes.click();
            DashboardIngredients.badgeBookingcodesDropdownAll.then(function(arr) {
              DashboardIngredients.bookingcode = arr[helpers.getRandomInt(arr.length)];
              DashboardIngredients.bookingcode.getLocation().then(function(loc) {
                browser.executeScript('window.scrollTo(' + loc.x + ', ' + loc.y + ');').then(function() {
                  DashboardIngredients.bookingcode.click();
                  DashboardIngredients.badgeBookingcodesDropdown.sendKeys(protractor.Key.ESCAPE);
                });
              });
            });
          });
        });

        describe('When the badge creation form is filled, check if elements are valid', function() {
          it('should have a valid name input', function() {
            expect(DashboardIngredients.badgeNameInput.getAttribute('aria-invalid')).toBe('false');
          });

          it('should have a valid model menu', function() {
            expect(DashboardIngredients.badgeModel.getAttribute('aria-invalid')).toBe('false');
          });

          it('should have a valid missions menu', function() {
            expect(DashboardIngredients.badgeMissions.getAttribute('aria-invalid')).toBe('false');
          });

          it('should have a valid options menu', function() {
            expect(DashboardIngredients.badgeOptions.getAttribute('aria-invalid')).toBe('false');
          });

          it('should have a valid booking codes menu', function() {
            expect(DashboardIngredients.badgeOptions.getAttribute('aria-invalid')).toBe('false');
          });
        });

        describe('When the form is valid, submit it', function() {
          it('should click the submit button', function() {
            DashboardIngredients.submitButton.click();
          });
        });
      });
    });
  });
});
