const elements = require('./elements');

class BoardPage {
  async boardNameDisplay() {
    return await $(elements.boardNameDisplay);
  }

  async clickMenuButton() {
    const createMenuButton = await $(elements.createMenuButton);
    await createMenuButton.click();
  }

  async clickBoardButton() {
    const createBoardButton = await $(elements.createBoardButton);
    await createBoardButton.click();
  }

  async setTitle(title) {
    const boardTitleInput = await $(elements.boardTitleInput);
    await boardTitleInput.waitForExist({timeout: 5000});
    await boardTitleInput.setValue(title);
  }

  async clickSubmitButton() {
    const boardSubmitButton = await $(elements.boardSubmitButton);
    await boardSubmitButton.waitForExist({timeout: 5000});
    await boardSubmitButton.click();
  }
}

module.exports = new BoardPage();
