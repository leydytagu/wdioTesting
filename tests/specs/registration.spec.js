const SignupPage = require('../page/signup.page');
const credentials = require('../config');
const { getCurrentUrl } = require("../utils/helpers/common");

describe('Register Page Tests', () => {
  it('Should enter email and complete signup', async () => {
    await SignupPage.open();
    await SignupPage.enterEmail(credentials.email);
    await SignupPage.clickSignupButton();
    await SignupPage.enterSignupEmail(credentials.email);
    await SignupPage.clickRegister();

    await browser.waitUntil(
      async () => (await getCurrentUrl()).includes('https://id.atlassian.com/signup')
    );

    const currentUrl = await getCurrentUrl();
    expect(currentUrl).toContain('https://id.atlassian.com/signup');
  });
});
