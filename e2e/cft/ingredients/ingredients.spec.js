const helpers = require('../../helpers');
const IngredientsPageObject = require('../../page_objects/ingredients.pageObject');
const BadgePageObject= require('../../page_objects/ingredients.badge.pageObject');
const BcPageObject = require('../../page_objects/ingredients.bc.pageObject');

describe('Parkopoly dashboard ingredients page', function() {
  DashboardIngredients = new IngredientsPageObject();

  DashboardIngredientsBadge = new BadgePageObject();
  DashboardIngredientsBadge.values.name = 'Parkopoly_E2E_Badge ' + browser.params.ts;

  DashboardIngredientsBc = new BcPageObject();
  DashboardIngredientsBc.values.name = ('Parkopoly_E2E_BookingCode ' + browser.params.ts);
  DashboardIngredientsBc.values.expiry = '01/01/2020';
  DashboardIngredientsBc.values.salary = helpers.getRandomInt(10).toString();
  DashboardIngredientsBc.values.salaryAdd = helpers.getRandomInt(50).toString();

  beforeAll(async function() {
    await DashboardIngredients.get();
  });

  describe('Create ingredients', function() {
    describe('When landing on the page, check for required elements', function() {
      it('should have a searchbar', async function() {
        await expect(DashboardIngredients.searchbar.isDisplayed()).toBe(true);
      });
    });

    describe('When required elements are found, it should create a badge ingredient', function() {
      it('should click the searchbar', async function() {
        await DashboardIngredients.searchbar.click();
      });

      it('should click the searchbar badge dropdown option', async function() {
        await DashboardIngredients.searchbarDropdownBadge.click();
      });

      describe('When the badge form is dislayed, it should check for required elements', function() {
        it('should have a searchbar', async function() {
          await expect(DashboardIngredientsBadge.searchbar.isDisplayed()).toBe(true);
        });

        it('should have a name input', async function() {
          await expect(DashboardIngredientsBadge.nameInput.isDisplayed()).toBe(true);
        });

        it('should have a model menu', async function() {
          await expect(DashboardIngredientsBadge.model.isDisplayed()).toBe(true);
        });

        it('should have a missions menu', async function() {
          await expect(DashboardIngredientsBadge.missions.isDisplayed()).toBe(true);
        });

        it('should have an options menu', async function() {
          await expect(DashboardIngredientsBadge.options.isDisplayed()).toBe(true);
        });

        it('should have a booking code menu', async function() {
          await expect(DashboardIngredientsBadge.bookingcodes.isDisplayed()).toBe(true);
        });

        it('should have a submit button', async function() {
          await expect(DashboardIngredients.submitButton.isDisplayed()).toBe(true);
        });
      });

      describe('When every elements are found, it should fill the badge form', function() {
        it('should fill the name input', async function() {
          await DashboardIngredientsBadge.nameInput.sendKeys(DashboardIngredientsBadge.values.name);
        });

        it('should select a model', async function() {
          await DashboardIngredientsBadge.model.click();
          let arr = await DashboardIngredientsBadge.modelDropdownAll;
          DashboardIngredientsBadge.values.model = await arr[helpers.getRandomInt(arr.length)];
          await DashboardIngredientsBadge.values.model.click();
        });

        it('should select a mission', async function() {
          await DashboardIngredientsBadge.missions.click();
          let arr = await DashboardIngredientsBadge.missionsDropdownAll;
          DashboardIngredientsBadge.values.mission = await arr[helpers.getRandomInt(arr.length)];
          await DashboardIngredientsBadge.values.mission.click();
          await DashboardIngredientsBadge.missionsDropdown.sendKeys(protractor.Key.ESCAPE);
        });

        it('should select an option', async function() {
          await DashboardIngredientsBadge.options.click();
          let arr = await DashboardIngredientsBadge.optionsDropdownPickupAll;
          DashboardIngredientsBadge.values.option = await arr[helpers.getRandomInt(arr.length)];
          await DashboardIngredientsBadge.values.option.click();
          await DashboardIngredientsBadge.optionsDropdownPickup.sendKeys(protractor.Key.ESCAPE);
        });

        it('should select a booking code', async function() {
          await DashboardIngredientsBadge.bookingcodes.click();
          let arr = await DashboardIngredientsBadge.bookingcodesDropdownAll;
          DashboardIngredientsBadge.values.bookingcode = await arr[helpers.getRandomInt(5)];
          await DashboardIngredientsBadge.values.bookingcode.click();
          await DashboardIngredientsBadge.bookingcodesDropdown.sendKeys(protractor.Key.ESCAPE);
        });
      });

      describe('When the badge creation form is filled, check if elements are valid', function() {
        it('should have a valid name input', async function() {
          await expect(DashboardIngredientsBadge.nameInput.getAttribute('aria-invalid')).toBe('false');
        });

        it('should have a valid model menu', async function() {
          await expect(DashboardIngredientsBadge.model.getAttribute('aria-invalid')).toBe('false');
        });

        it('should have a valid missions menu', async function() {
          await expect(DashboardIngredientsBadge.missions.getAttribute('aria-invalid')).toBe('false');
        });

        it('should have a valid options menu', async function() {
          await expect(DashboardIngredientsBadge.options.getAttribute('aria-invalid')).toBe('false');
        });

        it('should have a valid booking codes menu', async function() {
          await expect(DashboardIngredientsBadge.options.getAttribute('aria-invalid')).toBe('false');
        });
      });

      describe('When the form is valid, submit it', function() {
        it('should click the submit button', async function() {
          await DashboardIngredients.submitButton.click();
          await expect(DashboardIngredients.toast.isDisplayed()).toBe(true);
        });
      });

      describe('When the badge has been created, search for it', function() {
        it('should refresh the page', async function() {
          await browser.refresh();
        });

        it('should click the searchbar', async function() {
          await DashboardIngredients.searchbar.click();
        });

        it('should click the searchbar badge dropdown option', async function() {
          await DashboardIngredients.searchbarDropdownBadge.click();
        });

        it('should fill the searchbar', async function() {
          await DashboardIngredientsBadge.searchbarInput.sendKeys(DashboardIngredientsBadge.values.name);
        });

        it('should click the first option', async function() {
          await DashboardIngredientsBadge.searchbarDropdown.click();
        });
      });

      describe('When the badge has been found, check values', function() {
        it('should check the name input', async function() {
          await expect(DashboardIngredientsBadge.nameInput.getAttribute('value')).toBe(DashboardIngredientsBadge.values.name);
        });
      });

      describe('When required elements are found, it should create a Booking code ingredient', function() {
        it('should click the searchbar', async function() {
          await DashboardIngredients.searchbar.click();
        });

        it('should click the searchbar booking code dropdown option', async function() {
          await DashboardIngredients.searchbarDropdownBookingcode.click();
        });

        describe('When the badge form is dislayed, it should check for required elements', function() {
          it('should have a searchbar', async function() {
            await expect(DashboardIngredientsBc.searchbar.isDisplayed()).toBe(true);
          });

          it('should have a name input', async function() {
            await expect(DashboardIngredientsBc.nameInput.isDisplayed()).toBe(true);
          });

          it('should have an expiration date datepicker', async function() {
            await expect(DashboardIngredientsBc.expirationDatepicker.isDisplayed()).toBe(true);
          });

          it('should have a driver salary input', async function() {
            await expect(DashboardIngredientsBc.driverSalaryFactorInput.isDisplayed()).toBe(true);
          });

          it('should have a driver salary addon input', async function() {
            await expect(DashboardIngredientsBc.driverSalaryAddonInput.isDisplayed()).toBe(true);
          });

          it('should have a submit button', async function() {
            await expect(DashboardIngredients.submitButton.isDisplayed()).toBe(true);
          });
        });

        describe('When every elements are found, it should fill the booking code form', function() {
          it('should fill the name input', async function() {
            await DashboardIngredientsBc.nameInput.sendKeys(DashboardIngredientsBc.values.name);
          });

          it('should fill the expiration date input', async function() {
            await DashboardIngredientsBc.expirationDatepickerInput.sendKeys(DashboardIngredientsBc.values.expiry);
          });

          it('should fill the driver salary input', async function() {
            await DashboardIngredientsBc.driverSalaryFactorInput.sendKeys(DashboardIngredientsBc.values.salary);
          });

          it('should fill the driver salary addon input', async function() {
            await DashboardIngredientsBc.driverSalaryAddonInput.sendKeys(DashboardIngredientsBc.values.salaryAdd);
          });
        });

        describe('When the booking code creation form is filled, check if elements are valid', function() {
          it('should have a valid name input', async function() {
            await expect(DashboardIngredientsBc.nameInput.getAttribute('aria-invalid')).toBe('false');
          });

          it('should have a valid expiration datepicker', async function() {
            await expect(DashboardIngredientsBc.expirationDatepicker.getAttribute('aria-invalid')).toBe('false');
          });

          it('should have a valid driver salary input', async function() {
            await expect(DashboardIngredientsBc.driverSalaryFactorInput.getAttribute('aria-invalid')).toBe('false');
          });

          it('should have a valid driver salary addon input', async function() {
            await expect(DashboardIngredientsBc.driverSalaryAddonInput.getAttribute('aria-invalid')).toBe('false');
          });
        });

        describe('When the form is valid, submit it', function() {
          it('should click the submit button', async function() {
            await DashboardIngredients.submitButton.click();
            await expect(DashboardIngredients.toast.isDisplayed()).toBe(true);
          });
        });

        describe('When the booking code has been created, search for it', function() {
          it('should refresh the page', async function() {
            await browser.refresh();
          });

          it('should click the searchbar', async function() {
            await DashboardIngredients.searchbar.click();
          });

          it('should click the searchbar badge dropdown option', async function() {
            await DashboardIngredients.searchbarDropdownBookingcode.click();
          });

          it('should fill the searchbar', async function() {
            await DashboardIngredientsBc.searchbarInput.sendKeys(DashboardIngredientsBc.values.name);
          });

          it('should click the first option', async function() {
            await DashboardIngredientsBc.searchbarDropdown.click();
          });
        });

        describe('When the booking code has been found, check values', function() {
          it('should check the name input', async function() {
            await expect(DashboardIngredientsBc.nameInput.getAttribute('value')).toBe(DashboardIngredientsBc.values.name);
          });

          it('should check the expiry date input', async function() {
            await expect(DashboardIngredientsBc.expirationDatepickerInput.getAttribute('value')).toBe(DashboardIngredientsBc.values.expiry);
          });

          it('should check the driver salary input', async function() {
            await expect(DashboardIngredientsBc.driverSalaryFactorInput.getAttribute('value')).toBe(DashboardIngredientsBc.values.salary);
          });

          it('should check the driver salary addon input', async function() {
            await expect(DashboardIngredientsBc.driverSalaryAddonInput.getAttribute('value')).toBe(DashboardIngredientsBc.values.salaryAdd);
          });
        });
      });
    });
  });
});
