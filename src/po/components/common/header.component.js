const BaseComponent = require('./base.component');

class HeaderComponent extends BaseComponent {
  constructor() {
    super('[data-testid="header-container"]');
  }

  get profileBtn() {
    return this.rootEl.$('[data-testid="header-member-menu-avatar"]');
  }
}

module.exports = HeaderComponent;
