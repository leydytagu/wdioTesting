const { openUrl } = require("../../configs/utils/helpers/common");

class SignupPage {
  get emailField() {
    return $('#email');
  }

  get uiEmailSignupField() {
    return $('[data-testid="ui-email-signup-input"]');
  }

  get signupButton() {
    return $('button[type="submit"]');
  }

  get signupSubmitButton() {
    return $('#signup-submit');
  }

  async open() {
    await openUrl('https://trello.com/');
  }

  async enterEmail(email) {
    await this.uiEmailSignupField.setValue(email);
  }

  async enterSignupEmail(email) {
    await this.emailField.setValue(email);
  }

  async clickSignupButton() {
    await this.signupButton.click();
  }

  async clickRegister() {
    await this.signupSubmitButton.click();
  }
}

module.exports = new SignupPage();
