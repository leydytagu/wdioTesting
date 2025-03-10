class BoardPage {
  get createBoardTitleField() {
    return $('[data-testid="create-board-title-input"]');
  }

  get boardNameDisplayField() {
    return $('[data-testid="board-name-display"]');
  }

  get headerCreateMenuButton() {
    return $('[data-testid="header-create-menu-button"]');
  }

  get headerCreateBoardButton() {
    return $('[data-testid="header-create-board-button"]');
  }

  get createBoardSubmitButton() {
    return $('[data-testid="create-board-submit-button"]');
  }

  async enterCreateBoardTitle(title) {
    await this.createBoardTitleField.setValue(title);
  }

  async clickHeaderCreateMenuButton() {
    await this.headerCreateMenuButton.click();
  }

  async clickHeaderCreateBoardButton() {
    await this.headerCreateBoardButton.click();
  }

  async clickCreateBoardSubmitButton() {
    await this.createBoardSubmitButton.click();
  }
}

module.exports = new BoardPage();
