const elements = require('./elements');

class SignupPage {
  async open() {
    await browser.url('https://trello.com/');
  }

  async enterEmail(email) {
    const emailInput = await $(elements.emailInput);
    await emailInput.waitForExist({timeout: 5000});
    await emailInput.setValue(email);
  }

  async clickSignUp() {
    const signUpButton = await $(elements.signUpButton);
    await signUpButton.waitForExist({timeout: 5000});
    await signUpButton.click();
  }

  async enterSignupEmail(email) {
    const emailField = await $(elements.emailField);
    await emailField.waitForExist({timeout: 5000});
    await emailField.setValue(email);
  }

  async clickRegister() {
    const registerButton = await $(elements.registerButton);
    await registerButton.waitForExist({timeout: 5000});
    await registerButton.click();
  }

  async getCurrentUrl() {
    return await browser.getUrl();
  }
}

module.exports = new SignupPage();
