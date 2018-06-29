module.exports = {
  getRandomInt: function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  },
  switchCheckbox: function(checkbox) {
    checkbox.getAttribute('aria-checked').then(async function(res) {
      await checkbox.click();
    });
  },
  checkCheckbox: function(checkbox) {
    checkbox.getAttribute('aria-checked').then(async function(res) {
      if (res === 'false')
        await checkbox.click();
    });
  },
  uncheckCheckbox: function(checkbox) {
    checkbox.getAttribute('aria-checked').then(async function(res) {
      if (res === 'true')
        await checkbox.click();
    });
  },
  getFromDropdown: async function(s, arr) {
    let ret = null;
    for (i = 0; i < arr.length || ret !== null; i++) {
      await new Promise(async function(res) {
        ret = await arr[i].getAttribute('value') === s ? arr[i] : null;
      });
    };
    return ret;
  }
};
