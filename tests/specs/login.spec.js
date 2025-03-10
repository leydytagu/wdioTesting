const LoginPage = require('../page/login.page');
const credentials = require('../utils/test.data.');
const { getCurrentUrl } = require("../utils/helpers/common");

describe('Login Page Tests', () => {
  it('Should redirect login page', async () => {
    await LoginPage.open();
    await LoginPage.clickLoginButton();

    const currentUrl = await getCurrentUrl();
    expect(currentUrl).toContain('https://id.atlassian.com/login');
  });

  it('Should login with invalid credentials', async () => {
    await LoginPage.open();
    await LoginPage.clickLoginButton();

    await LoginPage.enterEmail(credentials.email);
    await LoginPage.clickContinueButton();

    await LoginPage.enterPassword('wrongPassword!');
    await LoginPage.clickContinueButton();

    const errorMessage = await LoginPage.getLoginError();
    await errorMessage.waitForDisplayed({timeout: 5000});
    expect(await errorMessage.isDisplayed()).toBe(true);
  });

  it('Should login with valid credentials', async () => {
    await LoginPage.open();
    await LoginPage.clickLoginButton();

    await LoginPage.enterEmail(credentials.email);
    await LoginPage.clickContinueButton();

    await LoginPage.enterPassword(credentials.password);
    await LoginPage.clickContinueButton();

    await LoginPage.isLoggedIn(credentials.user)

    const expectedUrl = await getCurrentUrl();
    expect(expectedUrl).toContain(`trello.com/u/${credentials.user}/boards`);

    await LoginPage.logout();
  });
});
