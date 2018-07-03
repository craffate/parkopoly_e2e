module.exports = {
  getRandomInt: function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  },
  checkCheckbox: async function(checkbox) {
    if (await checkbox.getAttribute('aria-checked') === 'false')
      await checkbox.click();
  },
  uncheckCheckbox: async function(checkbox) {
    if (await checkbox.getAttribute('aria-checked') === 'true')
      await checkbox.click();
  },
  getFromDropdown: async function(s, arr) {
    return arr.filter(function(el, idx) {
      return el.getAttribute('value').then(function(val) {
        return s === val;
      });
    });
  }
};
