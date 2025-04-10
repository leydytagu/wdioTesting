const { When, Then } = require('@wdio/cucumber-framework');
const { expect, assert } = require('chai');
const { page } = require('../../po');
const credentials = require('../../configs/test.data');
const { getCurrentUrl } = require('../../configs/utils/helpers/common');

When('the user navigates to the login page and clicks the login button', async () => {
  await page('login').open();
  await page('login').clickLoginButton();
});

Then('the user should be redirected to the Atlassian login page', async () => {
  const currentUrl = await getCurrentUrl();
  expect(currentUrl).to.contain('https://id.atlassian.com/login');
});

When('the user attempts to login with invalid credentials', async () => {
  await page('login').open();
  await page('login').clickLoginButton();
  await page('login').enterEmail(credentials.email);
  await page('login').clickContinueButton();
  await page('login').enterPassword('wrongPassword!');
  await page('login').clickContinueButton();
});

Then('the user should see an error message', async () => {
  const errorMessage = await page('login').getLoginError();
  await errorMessage.waitForDisplayed({ timeout: 5000 });
  assert.isTrue(await errorMessage.isDisplayed());
});

When('the user logs in with valid credentials', async () => {
  await page('login').open();
  await page('login').clickLoginButton();
  await page('login').enterEmail(credentials.email);
  await page('login').clickContinueButton();
  await page('login').enterPassword(credentials.password);
  await page('login').clickContinueButton();
  await page('login').isLoggedIn(credentials.user);
});

Then('the user should see their boards page', async () => {
  const currentUrl = await getCurrentUrl();
  expect(currentUrl).to.contain(`trello.com/u/${credentials.user}/boards`);
});

Then('the user logs out', async () => {
  await page('login').logout();
});
