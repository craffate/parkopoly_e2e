var helpers = require('../helpers');
var DashboardIngredients = require('./ingredients.pageObject');

describe('Parkopoly dashboard ingredients page', function() {
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
            DashboardIngredients.badgeValues.name = ('Parkopoly_E2E_Badge ' + ts);
            DashboardIngredients.badgeNameInput.sendKeys(DashboardIngredients.badgeValues.name);
          });

          it('should select a model', function() {
            DashboardIngredients.badgeModel.click();
            DashboardIngredients.badgeModelDropdownAll.then(function(arr) {
              DashboardIngredients.badgeValues.model = arr[helpers.getRandomInt(arr.length)];
              DashboardIngredients.badgeValues.model.click();
            });
          });

          it('should select a mission', function() {
            DashboardIngredients.badgeMissions.click();
            DashboardIngredients.badgeMissionsDropdownAll.then(function(arr) {
              DashboardIngredients.badgeValues.mission = arr[helpers.getRandomInt(arr.length)];
              DashboardIngredients.badgeValues.mission.click();
              DashboardIngredients.badgeMissionsDropdown.sendKeys(protractor.Key.ESCAPE);
            });
          });

          it('should select an option', function() {
            DashboardIngredients.badgeOptions.click();
            DashboardIngredients.badgeOptionsDropdownPickupAll.then(function(arr) {
              DashboardIngredients.badgeValues.option = arr[helpers.getRandomInt(arr.length)];
              DashboardIngredients.badgeValues.option.click();
              DashboardIngredients.badgeOptionsDropdownPickup.sendKeys(protractor.Key.ESCAPE);
            });
          });

          it('should select a booking code', function() {
            DashboardIngredients.badgeBookingcodes.click();
            DashboardIngredients.badgeBookingcodesDropdownAll.then(function(arr) {
              DashboardIngredients.badgeValues.bookingcode = arr[helpers.getRandomInt(5)];
              DashboardIngredients.badgeValues.bookingcode.click();
              DashboardIngredients.badgeBookingcodesDropdown.sendKeys(protractor.Key.ESCAPE);
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
            DashboardIngredients.submitButton.click().then(function() {
              expect(DashboardIngredients.toast.isDisplayed()).toBe(true);
            });
          });
        });

        describe('When the badge has been created, search for it', function() {
          it('should refresh the page', function() {
            browser.refresh();
          });

          it('should click the searchbar', function() {
            DashboardIngredients.searchbar.click();
          });

          it('should click the searchbar badge dropdown option', function() {
            DashboardIngredients.searchbarDropdownBadge.click();
          });

          it('should fill the searchbar', function() {
            DashboardIngredients.badgeSearchbarInput.sendKeys(DashboardIngredients.badgeValues.name);
          });

          it('should click the first option', function() {
            DashboardIngredients.badgeSearchbarDropdown.click();
          });
        });

        describe('When the badge has been found, check values', function() {
          it('should check the name input', function() {
            expect(DashboardIngredients.badgeNameInput.getAttribute('value')).toBe(DashboardIngredients.badgeValues.name);
          });
        });
      });

      describe('When required elements are found, it should create a Booking code ingredient', function() {
        it('should click the searchbar', function() {
          DashboardIngredients.searchbar.click();
        });

        it('should click the searchbar booking code dropdown option', function() {
          DashboardIngredients.searchbarDropdownBookingcode.click();
        });

        describe('When the badge form is dislayed, it should check for required elements', function() {
          it('should have a searchbar', function() {
            expect(DashboardIngredients.bcSearchbar.isDisplayed()).toBe(true);
          });

          it('should have a name input', function() {
            expect(DashboardIngredients.bcNameInput.isDisplayed()).toBe(true);
          });

          it('should have an expiration date datepicker', function() {
            expect(DashboardIngredients.bcExpirationDatepicker.isDisplayed()).toBe(true);
          });

          it('should have a driver salary input', function() {
            expect(DashboardIngredients.bcDriverSalaryFactorInput.isDisplayed()).toBe(true);
          });

          it('should have a driver salary addon input', function() {
            expect(DashboardIngredients.bcDriverSalaryAddonInput.isDisplayed()).toBe(true);
          });

          it('should have a submit button', function() {
            expect(DashboardIngredients.submitButton.isDisplayed()).toBe(true);
          });
        });

        describe('When every elements are found, it should fill the booking code form', function() {
          it('should fill the name input', function() {
            DashboardIngredients.bcValues.name = ('Parkopoly_E2E_BookingCode ' + ts);
            DashboardIngredients.bcNameInput.sendKeys(DashboardIngredients.bcValues.name);
          });

          it('should fill the expiration date input', function() {
            DashboardIngredients.bcValues.expiry = '01/01/2020';
            DashboardIngredients.bcExpirationDatepickerInput.sendKeys(DashboardIngredients.bcValues.expiry);
          });

          it('should fill the driver salary input', function() {
            DashboardIngredients.bcValues.salary = helpers.getRandomInt(10);
            DashboardIngredients.bcDriverSalaryFactorInput.sendKeys(DashboardIngredients.bcValues.salary);
          });

          it('should fill the driver salary addon input', function() {
            DashboardIngredients.bcValues.salaryAdd = helpers.getRandomInt(50);
            DashboardIngredients.bcDriverSalaryAddonInput.sendKeys(DashboardIngredients.bcValues.salaryAdd);
          });
        });

        describe('When the booking code creation form is filled, check if elements are valid', function() {
          it('should have a valid name input', function() {
            expect(DashboardIngredients.bcNameInput.getAttribute('aria-invalid')).toBe('false');
          });

          it('should have a valid expiration datepicker', function() {
            expect(DashboardIngredients.bcExpirationDatepicker.getAttribute('aria-invalid')).toBe('false');
          });

          it('should have a valid driver salary input', function() {
            expect(DashboardIngredients.bcDriverSalaryFactorInput.getAttribute('aria-invalid')).toBe('false');
          });

          it('should have a valid driver salary addon input', function() {
            expect(DashboardIngredients.bcDriverSalaryAddonInput.getAttribute('aria-invalid')).toBe('false');
          });
        });

        describe('When the form is valid, submit it', function() {
          it('should click the submit button', function() {
            DashboardIngredients.submitButton.click().then(function() {
              expect(DashboardIngredients.toast.isDisplayed()).toBe(true);
            });
          });
        });

        describe('When the booking code has been created, search for it', function() {
          it('should refresh the page', function() {
            browser.refresh();
          });

          it('should click the searchbar', function() {
            DashboardIngredients.searchbar.click();
          });

          it('should click the searchbar badge dropdown option', function() {
            DashboardIngredients.searchbarDropdownBookingcode.click();
          });

          it('should fill the searchbar', function() {
            DashboardIngredients.bcSearchbarInput.sendKeys(DashboardIngredients.bcValues.name);
          });

          it('should click the first option', function() {
            DashboardIngredients.bcSearchbarDropdown.click();
          });
        });

        describe('When the booking code has been found, check values', function() {
          it('should check the name input', function() {
            expect(DashboardIngredients.bcNameInput.getAttribute('value')).toBe(DashboardIngredients.bcValues.name);
          });

          it('should check the expiry date input', function() {
            expect(DashboardIngredients.bcExpirationDatepickerInput.getAttribute('value')).toBe(DashboardIngredients.bcValues.expiry);
          });

          it('should check the driver salary input', function() {
            expect(DashboardIngredients.bcDriverSalaryFactorInput.getAttribute('value')).toBe(DashboardIngredients.bcValues.salary);
          });

          it('should check the driver salary addon input', function() {
            expect(DashboardIngredients.bcDriverSalaryAddonInput.getAttribute('value')).toBe(DashboardIngredients.bcValues.salaryAdd);
          });
        });
      });
    });
  });
});
