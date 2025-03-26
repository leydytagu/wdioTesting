const { page } = require('../po');
const { assert, expect } = require('chai');

const credentials = require('../configs/test.data.');
const { getCurrentUrl } = require("../configs/utils/helpers/common");

describe('Login Page Tests', () => {
  it('Should redirect login pages', async () => {
    await page('login').open();
    await page('login').clickLoginButton();

    const currentUrl = await getCurrentUrl();
    expect(currentUrl).to.contain('https://id.atlassian.com/login');
  });

  it('Should login with invalid credentials', async () => {
    await page('login').open();
    await page('login').clickLoginButton();

    await page('login').enterEmail(credentials.email);
    await page('login').clickContinueButton();

    await page('login').enterPassword('wrongPassword!');
    await page('login').clickContinueButton();

    const errorMessage = await page('login').getLoginError();
    await errorMessage.waitForDisplayed({timeout: 5000});
    assert.equal(await errorMessage.isDisplayed(), true);
  });

  it.only('Should login with valid credentials', async () => {
    await page('login').open();
    await page('login').clickLoginButton();

    await page('login').enterEmail(credentials.email);
    await page('login').clickContinueButton();

    await page('login').enterPassword(credentials.password);
    await page('login').clickContinueButton();

    await page('login').isLoggedIn(credentials.user)

    const currentUrl = await getCurrentUrl();
    expect(currentUrl).to.contain(`trello.com/u/${credentials.user}/boards`);

    await page('login').logout();
  });
});
