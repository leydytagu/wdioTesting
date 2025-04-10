const { Header } = require('../components');
const { openUrl } = require('../../configs/utils/helpers/common');

class BasePage {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  }

  async open() {
    return await openUrl(this.url);
  }
}

module.exports = BasePage;
