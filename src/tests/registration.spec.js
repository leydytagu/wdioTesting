const { page } = require("../po/pages");
const { getCurrentUrl } = require("../configs/utils/helpers/common");

const credentials = require('../configs/test.data.');

describe('Register Page Tests', () => {
  it('Should enter email and complete signup', async () => {
    await page('signup').open();
    await page('signup').enterEmail(credentials.email);
    await page('signup').clickSignupButton();
    await page('signup').enterSignupEmail(credentials.email);
    await page('signup').clickRegister();

    await browser.waitUntil(
      async () => (await getCurrentUrl()).includes('https://id.atlassian.com/signup')
    );

    const currentUrl = await getCurrentUrl();
    expect(currentUrl).toContain('https://id.atlassian.com/signup');
  });
});
