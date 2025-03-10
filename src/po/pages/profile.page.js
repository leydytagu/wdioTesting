class ProfilePage {
  get usernameField() {
    return $('#username');
  }

  get alertField() {
    return $('div[role="alert"]');
  }

  get headerMemberMenuAvatarButton() {
    return $('[data-testid="header-member-menu-avatar"]');
  }

  get accountMenuProfileButton() {
    return $('[data-testid="account-menu-profile"]');
  }

  get saveButton() {
    const selector = '//button[normalize-space(text())=\'Guardar\']';
    return $(selector);
  }

  async clickProfileButton() {
    await this.headerMemberMenuAvatarButton.click();
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
