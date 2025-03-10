const LoginPage = require('../page/login.page');
const BoardPage = require('../page/board.page');
const credentials = require('../config');

describe('Board Page Tests', () => {
  it('Should create board successfully', async () => {
    await LoginPage.login(credentials.user, credentials.email, credentials.password);

    await BoardPage.clickHeaderCreateMenuButton();
    await BoardPage.clickHeaderCreateBoardButton();

    await BoardPage.enterCreateBoardTitle('Example');

    await BoardPage.clickCreateBoardSubmitButton();

    const boardNameDisplay = await BoardPage.boardNameDisplayField();
    await boardNameDisplay.waitForDisplayed({timeout: 5000});
    expect(await boardNameDisplay.isDisplayed()).toBe(true);

    await LoginPage.logout();
  });
});
