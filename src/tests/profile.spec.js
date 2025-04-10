const { page } = require('../po/pages');
const { getCurrentUrl } = require('../configs/utils/helpers/common');
const credentials = require('../configs/test.data');

describe('Edit Profile Page Tests', () => {
  it('Should update username successfully', async () => {
    await page('login').login(credentials.user, credentials.email, credentials.password);

    await page('profile').clickHeaderProfileButton();
    await page('profile').clickEditProfileButton();
    await page('profile').enterName(credentials.user);
    await page('profile').clickSaveButton();

    const currentUrl = await getCurrentUrl();
    expect(currentUrl).toContain(credentials.user);

    await page('login').logout();
  });
});
