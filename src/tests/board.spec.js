const { page } = require('../po');
const { assert, expect } = require('chai');

const credentials = require('../configs/test.data.');

describe('Board Page Tests', () => {
  it('Should create board successfully', async () => {
    await page('login').login(credentials.user, credentials.email, credentials.password);

    await page('board').clickHeaderCreateMenuButton();
    await page('board').clickHeaderCreateBoardButton();

    await page('board').enterCreateBoardTitle('Example');

    await page('board').clickCreateBoardSubmitButton();

    const boardNameDisplay = await page('board').boardNameDisplayField;
    await boardNameDisplay.waitForDisplayed({timeout: 5000});
    assert.equal(await boardNameDisplay.isDisplayed(), true);

    await page('login').logout();
  });

  it('Should remove board successfully', async () => {
    await page('login').login(credentials.user, credentials.email, credentials.password);

    await page('board').clickWorkspaceExample();
    await page('board').clickShowMenuField();
    await page('board').clickCloseBoardButton();
    await page('board').clickCloseBoardConfirmButton();
    await page('board').clickDeleteBoardButton();
    await page('board').clickConfirmDeleteBoardButton();

    const workspaceExample = await page('board').workspaceExample;
    expect(await workspaceExample.isDisplayed()).to.equal(false);

    await page('login').logout();
  });
});
