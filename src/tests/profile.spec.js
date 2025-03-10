const LoginPage = require('../po/pages/login.page');
const ProfilePage = require('../po/pages/profile.page');
const credentials = require('../configs/test.data.');

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
