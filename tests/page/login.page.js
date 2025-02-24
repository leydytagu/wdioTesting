const elements = require('./elements');
const credentials = require("../config");

class LoginPage {
  async getLoginError() {
    return await $(elements.loginError);
  }

  async open() {
    await browser.url('https://trello.com/');
  }

  async clickLoginButton() {
    const loginButton = await $(elements.logInButton);
    await loginButton.waitForClickable({timeout: 5000});
    await loginButton.click();
  }

  async enterEmail(email) {
    const emailInput = await $(elements.logInEmail);
    await emailInput.waitForExist({timeout: 5000});
    await emailInput.setValue(email);
  }

  async clickContinueButton() {
    const logInContinueButton = await $(elements.logInContinueButton);
    await logInContinueButton.click();
  }

  async enterPassword(password) {
    const passwordInput = await $(elements.passwordInput);
    await passwordInput.waitForExist({timeout: 5000});
    await passwordInput.setValue(password);
  }

  async clickProfileButton() {
    const logInContinueButton = await $(elements.profileButton);
    await logInContinueButton.click();
  }

  async clickLogoutButton() {
    const logInContinueButton = await $(elements.logoutButton);
    await logInContinueButton.click();
  }

  async clickEndSessionButton() {
    const logInContinueButton = await $(elements.endSessionButton);
    await logInContinueButton.click();
  }

  async login(user, email, password) {
    await this.open();
    await this.clickLoginButton();
    await this.enterEmail(email);
    await this.clickContinueButton();
    await this.enterPassword(password);
    await this.clickContinueButton();
    await this.isLoggedIn(user);
  }

  async logout() {
    await this.clickProfileButton();
    await this.clickLogoutButton();
    await this.clickEndSessionButton();
  }

  async isLoggedIn(user) {
    await browser.waitUntil(
      async () =>
        (await browser.getUrl()).includes(`trello.com/u/${user}/boards`), {timeout: 15000}
    );
  }
}

module.exports = new LoginPage();
