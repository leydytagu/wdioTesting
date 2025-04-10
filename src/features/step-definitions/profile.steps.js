const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const { page } = require('../../po/pages');
const credentials = require('../../configs/test.data');
const { getCurrentUrl } = require('../../configs/utils/helpers/common');

Given('the user is logged into Trello', async () => {
  await page('login').login(credentials.user, credentials.email, credentials.password);
});

When('the user updates their profile name', async () => {
  await page('profile').clickHeaderProfileButton();
  await page('profile').clickEditProfileButton();
  await page('profile').enterName(credentials.user);
  await page('profile').clickSaveButton();
});

Then('the URL should contain the updated username', async () => {
  const currentUrl = await getCurrentUrl();
  expect(currentUrl).to.contain(credentials.user);
  await page('login').logout();
});
