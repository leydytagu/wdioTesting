const LoginPage = require('../po/pages/login.page');
const BoardPage = require('../po/pages/board.page');
const credentials = require('../configs/test.data.');

describe('Board Page Tests', () => {
  it('Should create board successfully', async () => {
    await LoginPage.login(credentials.user, credentials.email, credentials.password);

    await BoardPage.clickHeaderCreateMenuButton();
    await BoardPage.clickHeaderCreateBoardButton();

    await BoardPage.enterCreateBoardTitle('Example');

    await BoardPage.clickCreateBoardSubmitButton();

    const boardNameDisplay = await BoardPage.boardNameDisplayField;
    await boardNameDisplay.waitForDisplayed({timeout: 5000});
    expect(await boardNameDisplay.isDisplayed()).toBe(true);

    await LoginPage.logout();
  });

  it('Should remove board successfully', async () => {
    await LoginPage.login(credentials.user, credentials.email, credentials.password);

    await BoardPage.clickWorkspaceExample();
    await BoardPage.clickShowMenuField();
    await BoardPage.clickCloseBoardButton();
    await BoardPage.clickCloseBoardConfirmButton();
    await BoardPage.clickDeleteBoardButton();
    await BoardPage.clickConfirmDeleteBoardButton();

    const workspaceExample = await BoardPage.workspaceExample;
    expect(await workspaceExample.isDisplayed()).toBe(false);

  });
});
