const {getCurrentUrl, openUrl} = require("../utils/helpers/common");

class LoginPage {
  get usernameField() {
    return $('[data-testid="username"]');
  }

  get passwordField() {
    return $('#password');
  }

  get continueButton() {
    return $('#login-submit');
  }

  get loginButton() {
    const selector = '//a[normalize-space(text())="Log in"]';
    return $(selector);
  }

  get profileButton() {
    return $('[data-testid="header-member-menu-avatar"]');
  }

  get accountMenuLogoutButton() {
    return $('[data-testid="account-menu-logout"]');
  }

  get logoutButton() {
    return $('[data-testid="logout-button"]');
  }

  get errorMessage() {
    return $('#error-message');
  }

  async getLoginError() {
    return await $('[data-testid = "form-error--content"]');
  }

  async open() {
    await openUrl('https://trello.com/');
  }

  async enterEmail(email) {
    await this.usernameField.setValue(email);
  }

  async enterPassword(password) {
    await this.passwordField.setValue(password);
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async clickProfileButton() {
    await this.profileButton.click();
  }

  async clickAccountMenuLogoutButton() {
    await this.accountMenuLogoutButton.click();
  }

  async clickLogoutButton() {
    await this.logoutButton.click();
  }

  async login(user, email, password) {
    await this.open();
    await this.clickLoginButton();
    await this.enterEmail(email);
    await this.clickContinueButton();
    await this.enterPassword(password);
    await this.clickContinueButton();
    // await this.isLoggedIn(user);
  }

  async logout() {
    await this.clickProfileButton();
    await this.clickAccountMenuLogoutButton();
    await this.clickLogoutButton();
  }

  async isLoggedIn(user) {
    await browser.waitUntil(
      async () =>
        (await getCurrentUrl()).includes(`trello.com/u/${user}/boards`), {timeout: 15000}
    );
  }
}

module.exports = new LoginPage();
