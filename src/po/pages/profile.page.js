const BasePage = require("./base.page");

class ProfilePage extends BasePage {
  constructor() {
    super('https://trello.com/');
  }

  get usernameField() {
    return $('#username');
  }

  get alertField() {
    return $('div[role="alert"]');
  }

  get headerMemberMenuAvatarButton() {
    return this.header.profileBtn.click();
  }

  get accountMenuProfileButton() {
    return $('[data-testid="account-menu-profile"]');
  }

  get saveButton() {
    const selector = '//button[normalize-space(text())=\'Guardar\']';
    return $(selector);
  }

  async clickHeaderProfileButton() {
    await this.header.profileBtn.click();
  }

  async clickEditProfileButton() {
    await this.accountMenuProfileButton.click();
  }

  async enterName(name) {
    await this.usernameField.setValue(name);
  }

  async clickSaveButton() {
    await this.saveButton.click();
  }
}

module.exports = ProfilePage;
