const helpers = require('../../helpers');
const IngredientsPageObject = require('../../page_objects/ingredients.pageObject');
const BadgePageObject= require('../../page_objects/ingredients.badge.pageObject');
const BcPageObject = require('../../page_objects/ingredients.bc.pageObject');

describe('Parkopoly dashboard ingredients page', function() {
  DashboardIngredients = new IngredientsPageObject();
  DashboardIngredientsBadge = new BadgePageObject();
  DashboardIngredientsBc = new BcPageObject();
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
            expect(DashboardIngredientsBadge.searchbar.isDisplayed()).toBe(true);
          });

          it('should have a name input', function() {
            expect(DashboardIngredientsBadge.nameInput.isDisplayed()).toBe(true);
          });

          it('should have a model menu', function() {
            expect(DashboardIngredientsBadge.model.isDisplayed()).toBe(true);
          });

          it('should have a missions menu', function() {
            expect(DashboardIngredientsBadge.missions.isDisplayed()).toBe(true);
          });

          it('should have an options menu', function() {
            expect(DashboardIngredientsBadge.options.isDisplayed()).toBe(true);
          });

          it('should have a booking code menu', function() {
            expect(DashboardIngredientsBadge.bookingcodes.isDisplayed()).toBe(true);
          });

          it('should have a submit button', function() {
            expect(DashboardIngredients.submitButton.isDisplayed()).toBe(true);
          });
        });

        describe('When every elements are found, it should fill the badge form', function() {
          it('should fill the name input', function() {
            DashboardIngredientsBadge.values.name = ('Parkopoly_E2E_Badge ' + browser.params.ts);
            DashboardIngredientsBadge.nameInput.sendKeys(DashboardIngredientsBadge.values.name);
          });

          it('should select a model', function() {
            DashboardIngredientsBadge.model.click();
            DashboardIngredientsBadge.modelDropdownAll.then(function(arr) {
              DashboardIngredientsBadge.values.model = arr[helpers.getRandomInt(arr.length)];
              DashboardIngredientsBadge.values.model.click();
            });
          });

          it('should select a mission', function() {
            DashboardIngredientsBadge.missions.click();
            DashboardIngredientsBadge.missionsDropdownAll.then(function(arr) {
              DashboardIngredientsBadge.values.mission = arr[helpers.getRandomInt(arr.length)];
              DashboardIngredientsBadge.values.mission.click();
              DashboardIngredientsBadge.missionsDropdown.sendKeys(protractor.Key.ESCAPE);
            });
          });

          it('should select an option', function() {
            DashboardIngredientsBadge.options.click();
            DashboardIngredientsBadge.optionsDropdownPickupAll.then(function(arr) {
              DashboardIngredientsBadge.values.option = arr[helpers.getRandomInt(arr.length)];
              DashboardIngredientsBadge.values.option.click();
              DashboardIngredientsBadge.optionsDropdownPickup.sendKeys(protractor.Key.ESCAPE);
            });
          });

          it('should select a booking code', function() {
            DashboardIngredientsBadge.bookingcodes.click();
            DashboardIngredientsBadge.bookingcodesDropdownAll.then(function(arr) {
              DashboardIngredientsBadge.values.bookingcode = arr[helpers.getRandomInt(5)];
              DashboardIngredientsBadge.values.bookingcode.click();
              DashboardIngredientsBadge.bookingcodesDropdown.sendKeys(protractor.Key.ESCAPE);
            });
          });
        });

        describe('When the badge creation form is filled, check if elements are valid', function() {
          it('should have a valid name input', function() {
            expect(DashboardIngredientsBadge.nameInput.getAttribute('aria-invalid')).toBe('false');
          });

          it('should have a valid model menu', function() {
            expect(DashboardIngredientsBadge.model.getAttribute('aria-invalid')).toBe('false');
          });

          it('should have a valid missions menu', function() {
            expect(DashboardIngredientsBadge.missions.getAttribute('aria-invalid')).toBe('false');
          });

          it('should have a valid options menu', function() {
            expect(DashboardIngredientsBadge.options.getAttribute('aria-invalid')).toBe('false');
          });

          it('should have a valid booking codes menu', function() {
            expect(DashboardIngredientsBadge.options.getAttribute('aria-invalid')).toBe('false');
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
            DashboardIngredientsBadge.searchbarInput.sendKeys(DashboardIngredientsBadge.values.name);
          });

          it('should click the first option', function() {
            DashboardIngredientsBadge.searchbarDropdown.click();
          });
        });

        describe('When the badge has been found, check values', function() {
          it('should check the name input', function() {
            expect(DashboardIngredientsBadge.nameInput.getAttribute('value')).toBe(DashboardIngredientsBadge.values.name);
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
            expect(DashboardIngredientsBc.searchbar.isDisplayed()).toBe(true);
          });

          it('should have a name input', function() {
            expect(DashboardIngredientsBc.nameInput.isDisplayed()).toBe(true);
          });

          it('should have an expiration date datepicker', function() {
            expect(DashboardIngredientsBc.expirationDatepicker.isDisplayed()).toBe(true);
          });

          it('should have a driver salary input', function() {
            expect(DashboardIngredientsBc.driverSalaryFactorInput.isDisplayed()).toBe(true);
          });

          it('should have a driver salary addon input', function() {
            expect(DashboardIngredientsBc.driverSalaryAddonInput.isDisplayed()).toBe(true);
          });

          it('should have a submit button', function() {
            expect(DashboardIngredients.submitButton.isDisplayed()).toBe(true);
          });
        });

        describe('When every elements are found, it should fill the booking code form', function() {
          it('should fill the name input', function() {
            DashboardIngredientsBc.values.name = ('Parkopoly_E2E_BookingCode ' + browser.params.ts);
            DashboardIngredientsBc.nameInput.sendKeys(DashboardIngredientsBc.values.name);
          });

          it('should fill the expiration date input', function() {
            DashboardIngredientsBc.values.expiry = '01/01/2020';
            DashboardIngredientsBc.expirationDatepickerInput.sendKeys(DashboardIngredientsBc.values.expiry);
          });

          it('should fill the driver salary input', function() {
            DashboardIngredientsBc.values.salary = helpers.getRandomInt(10).toString();
            DashboardIngredientsBc.driverSalaryFactorInput.sendKeys(DashboardIngredientsBc.values.salary);
          });

          it('should fill the driver salary addon input', function() {
            DashboardIngredientsBc.values.salaryAdd = helpers.getRandomInt(50).toString();
            DashboardIngredientsBc.driverSalaryAddonInput.sendKeys(DashboardIngredientsBc.values.salaryAdd);
          });
        });

        describe('When the booking code creation form is filled, check if elements are valid', function() {
          it('should have a valid name input', function() {
            expect(DashboardIngredientsBc.nameInput.getAttribute('aria-invalid')).toBe('false');
          });

          it('should have a valid expiration datepicker', function() {
            expect(DashboardIngredientsBc.expirationDatepicker.getAttribute('aria-invalid')).toBe('false');
          });

          it('should have a valid driver salary input', function() {
            expect(DashboardIngredientsBc.driverSalaryFactorInput.getAttribute('aria-invalid')).toBe('false');
          });

          it('should have a valid driver salary addon input', function() {
            expect(DashboardIngredientsBc.driverSalaryAddonInput.getAttribute('aria-invalid')).toBe('false');
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
            DashboardIngredientsBc.searchbarInput.sendKeys(DashboardIngredientsBc.values.name);
          });

          it('should click the first option', function() {
            DashboardIngredientsBc.searchbarDropdown.click();
          });
        });

        describe('When the booking code has been found, check values', function() {
          it('should check the name input', function() {
            expect(DashboardIngredientsBc.nameInput.getAttribute('value')).toBe(DashboardIngredientsBc.values.name);
          });

          it('should check the expiry date input', function() {
            expect(DashboardIngredientsBc.expirationDatepickerInput.getAttribute('value')).toBe(DashboardIngredientsBc.values.expiry);
          });

          it('should check the driver salary input', function() {
            expect(DashboardIngredientsBc.driverSalaryFactorInput.getAttribute('value')).toBe(DashboardIngredientsBc.values.salary);
          });

          it('should check the driver salary addon input', function() {
            expect(DashboardIngredientsBc.driverSalaryAddonInput.getAttribute('value')).toBe(DashboardIngredientsBc.values.salaryAdd);
          });
        });
      });
    });
  });
});
