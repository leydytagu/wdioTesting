const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const { page } = require('../../po');
const credentials = require('../../configs/test.data');

Given('I am logged into Trello', async () => {
  await page('login').login(credentials.user, credentials.email, credentials.password);
});

When('I create a board named {string}', async (boardName) => {
  await page('board').clickHeaderCreateMenuButton();
  await page('board').clickHeaderCreateBoardButton();
  await page('board').enterCreateBoardTitle(boardName);
  await page('board').clickCreateBoardSubmitButton();
});

Then('I should see the board displayed', async () => {
  const boardNameDisplay = await page('board').boardNameDisplayField;
  await boardNameDisplay.waitForDisplayed({ timeout: 5000 });
  expect(await boardNameDisplay.isDisplayed()).to.equal(true);
  await page('login').logout();
});

When('I delete the board named {string}', async () => {
  await page('board').clickWorkspaceExample();
  await page('board').clickShowMenuField();
  await page('board').clickCloseBoardButton();
  await page('board').clickCloseBoardConfirmButton();
  await page('board').clickDeleteBoardButton();
  await page('board').clickConfirmDeleteBoardButton();
});

Then('I should not see the board named {string}', async () => {
  const workspaceExample = await page('board').workspaceExample;
  expect(await workspaceExample.isDisplayed()).to.equal(false);
  await page('login').logout();
});
