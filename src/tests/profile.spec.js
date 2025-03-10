const { page } = require("../po/pages");
const credentials = require('../configs/test.data.');

describe('Edit Profile Page Tests', () => {
  it('Should update username successfully', async () => {
    await page('login').login(credentials.user, credentials.email, credentials.password);

    await page('profile').clickProfileButton();
    await page('profile').clickEditProfileButton();
    await page('profile').enterName(credentials.user);
    await page('profile').clickSaveButton();

    const confirmationMessage = await page('profile').alertField();
    await confirmationMessage.waitForDisplayed({timeout: 5000});
    expect(await confirmationMessage.isDisplayed()).toBe(true);

    await page('login').logout();
  });
});
