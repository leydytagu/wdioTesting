const LoginPage = require('../page/login.page');
const ProfilePage = require('../page/profile.page');
const credentials = require('../utils/test.data.');

describe('Edit Profile Page Tests', () => {
  it('Should update username successfully', async () => {
    await LoginPage.login(credentials.user, credentials.email, credentials.password);

    await ProfilePage.clickProfileButton();
    await ProfilePage.clickEditProfileButton();
    await ProfilePage.enterName(credentials.user);
    await ProfilePage.clickSaveButton();

    const confirmationMessage = await ProfilePage.alertField();
    await confirmationMessage.waitForDisplayed({timeout: 5000});
    expect(await confirmationMessage.isDisplayed()).toBe(true);

    await LoginPage.logout();
  });
});
