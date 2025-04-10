const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const { page } = require('../../po');
const credentials = require('../../configs/test.data');
const { getCurrentUrl } = require('../../configs/utils/helpers/common');

Given('the user is on the signup page', async () => {
  await page('signup').open();
});

When('the user enters their email and clicks continue', async () => {
  await page('signup').enterEmail(credentials.email);
  await page('signup').clickSignupButton();
  await page('signup').enterSignupEmail(credentials.email);
  await page('signup').clickRegister();
});

Then('the user should be redirected to the Atlassian signup page', async () => {
  await browser.waitUntil(
    async () => (await getCurrentUrl()).includes('https://id.atlassian.com/signup'),
    { timeout: 5000 }
  );
  const currentUrl = await getCurrentUrl();
  expect(currentUrl).to.contain('https://id.atlassian.com/signup');
});
