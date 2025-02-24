const SignupPage = require('../page/signup.page');
const credentials = require('../config');

describe('Register Page Tests', () => {
  it('Should enter email and complete signup', async () => {
    await SignupPage.open();
    await SignupPage.enterEmail(credentials.email);
    await SignupPage.clickSignUp();
    await SignupPage.enterSignupEmail(credentials.email);
    await SignupPage.clickRegister();

    await browser.waitUntil(
      async () => (await SignupPage.getCurrentUrl()).includes('https://id.atlassian.com/signup')
    );

    const currentUrl = await SignupPage.getCurrentUrl();
    expect(currentUrl).toContain('https://id.atlassian.com/signup');
  });
});
